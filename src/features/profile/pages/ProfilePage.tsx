import React from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useGetUserProfile } from "@/features/profile/hooks/useProfile";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  User,
  MapPin,
  Mail,
  FileText,
  Download,
  Edit,
  Share2,
  CheckCircle2,
  ExternalLink,
  Plus,
  Calendar,
  Star,
  ChevronRight,
  UserPlus,
  UserMinus,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { UserGender } from "@/features/profile/types/profile";
import { useGetUserProfileById } from "@/features/profile/hooks/useProfile";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "@/features/follow/hooks/useFollow";
import { ChatModal } from "@/features/chat/components/ChatModal";

/* ── helpers ── */
const getGenderText = (gender: number | null) => {
  if (gender === UserGender.Male) return "Male";
  if (gender === UserGender.Female) return "Female";
  return "Not specified";
};

const formatDateJoined = (dateString: string | null | undefined) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  } catch {
    return "Recent";
  }
};

/* ─── tiny sub-components ─── */
const InfoRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex flex-wrap justify-between items-center py-2.5 border-b border-border text-[13.5px] gap-2">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-semibold text-foreground">{value}</span>
  </div>
);

const SkillBadge: React.FC<{ label: string; variant?: "primary" | "gray" }> = ({
  label,
  variant = "primary",
}) => (
  <span
    className={
      variant === "primary"
        ? "inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[12.5px] font-medium bg-primary/10 text-primary border border-primary/20"
        : "inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[12.5px] font-medium bg-muted text-muted-foreground border border-border"
    }
  >
    {variant === "primary" && (
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    )}
    {label}
  </span>
);

/* ─── MAIN COMPONENT ─── */
const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const { logout, user, isLoading: isAuthLoading } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = React.useState(false);

  // Check if it's own profile by comparing userId with logged-in user's id
  const isOwnProfileById = !userId || userId === "undefined" || userId === user?.id;

  const ownProfileQuery = useGetUserProfile();
  const otherProfileQuery = useGetUserProfileById(userId && userId !== "undefined" && userId !== user?.id ? userId : "");

  const { data: profile, isLoading, error } = isOwnProfileById ? ownProfileQuery : otherProfileQuery;

  // Check if it's own profile using isMe from backend, fallback to ID or email matching
  const isOwnProfile = profile
    ? (profile.isMe === true ||
       (!userId || userId === "undefined" || userId === user?.id) ||
       (user?.email && profile.email === user.email))
    : isOwnProfileById;

  const actualUserId = userId && userId !== "undefined" ? userId : user?.id;

  const {
    posts: userPosts,
    isLoading: postsLoading,
    isFetching: postsFetching,
    hasMore: postsHasMore,
    loadMore: postsLoadMore,
  } = usePaginatedUserPosts(actualUserId ?? "");

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = () => {
    if (userId && userId !== "undefined") {
      followMutation.mutate(userId);
    }
  };

  const handleUnfollow = () => {
    if (userId && userId !== "undefined") {
      unfollowMutation.mutate(userId);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-[1400px] mx-auto pb-12 animate-pulse p-4 md:p-8">
        <div className="h-[180px] sm:h-[240px] w-full bg-muted rounded-3xl" />
        <div className="px-4 sm:px-8">
          <div className="h-[220px] w-full bg-card border border-border rounded-3xl -mt-12 shadow-sm" />
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-8">
            <div className="h-[400px] bg-card border border-border rounded-3xl" />
            <div className="flex flex-col gap-6">
              <div className="h-[180px] bg-card border border-border rounded-3xl" />
              <div className="h-[300px] bg-card border border-border rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center text-foreground">
        <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-muted-foreground/30" />
        </div>
        <h3 className="text-2xl font-black mb-2">Profile Not Found</h3>
        <p className="text-lg text-muted-foreground max-w-xs mb-8">We couldn't retrieve the requested profile data at this time.</p>
        {isOwnProfile && (
          <Button onClick={() => logout()} variant="outline" className="h-12 px-8 rounded-xl font-black">
            Sign Out
          </Button>
        )}
      </div>
    );
  }

  const location = [profile.city, profile.country].filter(Boolean).join(", ");

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* ── Cover Banner ── */}
      <div className="relative group overflow-hidden h-[180px] sm:h-[240px] bg-gradient-to-br from-primary/60 via-primary/30 to-background">
        {profile.coverPictureUrl && (
          <img
            src={profile.coverPictureUrl}
            alt="Cover"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* ── Profile Header Card ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-10 -mt-16 sm:-mt-24 relative shadow-xl shadow-foreground/5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
              {/* Avatar */}
              <div className="relative shrink-0 group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] border-[6px] border-card overflow-hidden bg-muted shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  {profile.profilePictureUrl ? (
                    <img
                      src={profile.profilePictureUrl}
                      alt={profile.fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                </div>
                {isOwnProfile && (
                  <button 
                    onClick={() => navigate("/edit-profile")}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-card border border-border rounded-2xl flex items-center justify-center text-primary shadow-xl hover:bg-accent transition-all active:scale-90"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Identity */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {profile.fullName}
                </h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm font-semibold text-muted-foreground">
                  <button
                    onClick={() => {
                      if (isOwnProfile) {
                        navigate("/profile/my/followers");
                      } else if (userId) {
                        navigate(`/profile/${userId}/followers`);
                      }
                    }}
                    className="hover:text-primary hover:underline transition-colors cursor-pointer"
                  >
                    {profile.followersCount} followers
                  </button>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <button
                    onClick={() => {
                      if (isOwnProfile) {
                        navigate("/profile/my/following");
                      } else if (userId) {
                        navigate(`/profile/${userId}/following`);
                      }
                    }}
                    className="hover:text-primary hover:underline transition-colors cursor-pointer"
                  >
                    {profile.followingCount} following
                  </button>
                </div>
                <p className="text-lg font-bold text-muted-foreground flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                  {profile.jobTitle || "Professional Developer"}
                  {profile.currentCompany && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
                      <span className="text-muted-foreground/80">@ {profile.currentCompany}</span>
                    </>
                  )}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                  {location && (
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" /> {location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-[11px] font-black text-emerald-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open to work
                  </span>
                  {profile.createdAt && (
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" /> Joined {formatDateJoined(profile.createdAt)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              {isOwnProfile ? (
                <Button
                  onClick={() => navigate("/edit-profile")}
                  className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                >
                  <Edit className="w-4 h-4" /> Edit Profile
                </Button>
              ) : (
                <>
                  {profile.isFollowing ? (
                    <Button
                      onClick={handleUnfollow}
                      disabled={unfollowMutation.isPending}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-card border border-border hover:bg-accent text-card-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <UserMinus className="w-4 h-4" /> Unfollow
                    </Button>
                  ) : (
                    <Button
                      onClick={handleFollow}
                      disabled={followMutation.isPending}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <UserPlus className="w-4 h-4" /> Follow
                    </Button>
                  )}
                  {profile.canSendMessage && (
                    <Button
                      onClick={() => setIsChatModalOpen(true)}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4" /> Message
                    </Button>
                  )}
                </>
              )}
              <Button variant="outline" className="h-14 w-14 p-0 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary transition-all shadow-sm">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 mt-10 items-start">
          
          {/* ── Sidebar ── */}
          <div className="space-y-6">
            {/* Stats/Strength */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-6">Profile Insight</h3>
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="12" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="264" strokeDashoffset="52.8" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-black text-primary text-lg">80%</div>
                </div>
                <div>
                  <p className="font-black text-foreground uppercase tracking-tight">Profile Rating</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Expert Level</p>
                </div>
              </div>

              <div className="space-y-5 border-t border-border/50 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Publications</span>
                  <span className="font-black text-foreground">{profile.postsCount ?? 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Views</span>
                  <span className="font-black text-foreground">1.2k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Ranking</span>
                  <span className="font-black text-foreground">#42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Gender</span>
                  <span className="font-black text-foreground">{getGenderText(profile.gender)}</span>
                </div>
              </div>
            </div>

            {/* Resume Card */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-6">Documentation</h3>
               {profile.cvFileUrl ? (
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-muted/50 border border-border rounded-2xl group hover:border-primary/50 transition-all">
                       <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <p className="font-black text-foreground text-sm truncate">Professional_CV.pdf</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase">PDF · 2.4 MB</p>
                       </div>
                       <a href={profile.cvFileUrl} target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors">
                          <Download className="w-5 h-5" />
                       </a>
                    </div>
                    {isOwnProfile && (
                      <Button variant="outline" onClick={() => navigate("/edit-profile")} className="w-full rounded-2xl h-12 border-border font-black text-[10px] uppercase tracking-widest text-primary hover:bg-accent">
                        Update Resume
                      </Button>
                    )}
                 </div>
               ) : (
                 <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-muted text-muted-foreground/30 rounded-2xl flex items-center justify-center mx-auto">
                       <FileText className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground">No resume available</p>
                    {isOwnProfile && (
                      <Button onClick={() => navigate("/edit-profile")} className="w-full rounded-2xl h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10">
                        Upload Resume
                      </Button>
                    )}
                 </div>
               )}
            </div>
          </div>

          {/* ── Main Content Area ── */}
          <div className="space-y-8">
            
            {/* About Me */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-6">Introduction</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none">
                {profile.summary ? (
                  <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                    {profile.summary}
                  </p>
                ) : (
                  <p className="text-lg text-muted-foreground/50 font-medium italic">
                    Recruiters love reading summaries. Add one to stand out from the crowd.
                  </p>
                )}
              </div>
            </div>

            {/* Expertise & Skills */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Expertise & Skills</h2>
                 <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Verified</span>
              </div>
              
              {profile.skills && profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-3 bg-muted/50 border border-border rounded-2xl text-sm font-black text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-muted/50 rounded-[2rem] border border-dashed border-border">
                  <p className="text-sm font-bold text-muted-foreground">Add your technical expertise to match with relevant roles.</p>
                </div>
              )}
            </div>

            {/* Professional Journey */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
               <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-10">Professional Journey</h2>
               
               <div className="space-y-12">
                 {/* Experience */}
                 <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-px h-full bg-border" />
                    <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary border-[3px] border-card shadow-xl shadow-primary/20" />
                    
                    <div className="space-y-4">
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-black text-foreground tracking-tight">{profile.jobTitle || "Job Title"}</h3>
                            <p className="text-sm font-black text-primary uppercase tracking-widest mt-1">{profile.currentCompany || "Company Name"}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-[10px] font-black uppercase tracking-widest w-fit">
                             <Calendar className="w-3.5 h-3.5" /> Present
                          </span>
                       </div>
                       <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                         Driving technical innovation and leading high-performance engineering teams to deliver world-class software solutions.
                       </p>
                    </div>
                 </div>

                 {/* Education */}
                 {(profile.university || profile.degree) && (
                   <div className="relative pl-12">
                      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-muted border-[3px] border-card" />
                      <div className="space-y-2">
                         <h3 className="text-lg font-black text-foreground tracking-tight">{profile.degree || "Degree Information"}</h3>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{profile.university || "University Name"}</p>
                         {profile.graduationYear && (
                           <span className="inline-flex text-[10px] font-black text-muted-foreground uppercase tracking-widest pt-2">Class of {profile.graduationYear}</span>
                         )}
                      </div>
                   </div>
                 )}
               </div>
            </div>

            {/* Posts */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Latest Content</h2>
                {isOwnProfile && (
                  <Button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="h-10 px-6 rounded-xl bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-widest gap-2 shadow-lg shadow-primary/10 hover:bg-primary/90"
                  >
                    <Plus className="w-3.5 h-3.5" /> Create Post
                  </Button>
                )}
              </div>

              {postsLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-40 w-full rounded-3xl" />
                  <Skeleton className="h-40 w-full rounded-3xl" />
                </div>
              ) : userPosts && userPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {userPosts.map((post) => (
                    <PostCard key={post.postId} post={post} />
                  ))}
                  {postsHasMore && (
                    <div className="mt-4 flex justify-center">
                      <Button
                        variant="outline"
                        onClick={postsLoadMore}
                        disabled={postsFetching}
                        className="rounded-full px-6 border-border hover:bg-accent text-foreground text-xs uppercase tracking-widest font-black"
                      >
                        {postsFetching ? "Loading..." : "Load More"}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/50 rounded-[2rem] border border-border">
                  <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Plus className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">No publications yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        otherUserId={userId || ""}
        otherUserName={profile?.fullName || ""}
      />
      
      <CreatePostModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
};

export default ProfilePage;
