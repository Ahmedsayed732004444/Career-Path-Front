import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetAllJobs } from "@/features/jobs/hooks/useJobs";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  MapPin, Briefcase, Calendar, DollarSign, Search,
  ChevronLeft, ChevronRight,
  Clock, AlertCircle, Bookmark, CheckCircle,
  ChevronDown, Zap, Users, Star, X, SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";

// ── Helpers ──────────────────────────────────────────────────────────────────

function getPostedLabel(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (minutes < 60) return `Posted ${minutes}m ago`;
  if (hours < 24) return `Posted ${hours}h ago`;
  if (days === 1) return "Posted yesterday";
  return `Posted ${days} days ago`;
}

function getCompanyInitial(name: string | null | undefined) {
  return (name ?? "C").charAt(0).toUpperCase();
}

const LOGO_COLORS = [
  { bg: "#4F8EF7", text: "#fff" },
  { bg: "#34C17B", text: "#fff" },
  { bg: "#2D2D2D", text: "#fff" },
  { bg: "#F76B4F", text: "#fff" },
  { bg: "#A855F7", text: "#fff" },
  { bg: "#F59E0B", text: "#fff" },
  { bg: "#06B6D4", text: "#fff" },
];

function getLogoColor(name: string | null | undefined) {
  const key = (name ?? "").charCodeAt(0) % LOGO_COLORS.length;
  return LOGO_COLORS[key];
}

// Fake match % based on job index for visual demo
function getFakeMatch(idx: number) {
  const vals = [98, 91, 87, 94, 82, 79, 95, 88];
  return vals[idx % vals.length];
}

// ── Job Type Options (based on backend JobType string field) ─────────────────
const JOB_TYPE_OPTIONS = [
  { value: "", label: "All Types" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Remote", label: "Remote" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
  { value: "Freelance", label: "Freelance" },
];

// ── Salary Range Options ─────────────────────────────────────────────────────
const SALARY_OPTIONS = [
  { value: "", label: "Any Salary" },
  { value: "0-50", label: "Up to $50k" },
  { value: "50-100", label: "$50k – $100k" },
  { value: "100-150", label: "$100k – $150k" },
  { value: "150+", label: "$150k+" },
];

// ── Sort Options ─────────────────────────────────────────────────────────────
const SORT_OPTIONS = [
  { value: "default", label: "Relevant", sortColumn: "", sortDirection: "" as "" },
  { value: "newest", label: "Newest First", sortColumn: "PostedDate", sortDirection: "Desc" as const },
  { value: "oldest", label: "Oldest First", sortColumn: "PostedDate", sortDirection: "Asc" as const },
  { value: "salary_high", label: "Highest Salary", sortColumn: "SalaryMax", sortDirection: "Desc" as const },
  { value: "salary_low", label: "Lowest Salary", sortColumn: "SalaryMin", sortDirection: "Asc" as const },
];

// ── Skeleton ──────────────────────────────────────────────────────────────────

const JobCardSkeleton = () => (
  <div className="bg-card border border-border rounded-[2.5rem] p-2 pr-6 sm:pr-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
    <div className="p-4 sm:p-6 shrink-0">
      <Skeleton className="h-20 w-20 sm:h-24 sm:w-24 rounded-[1.75rem]" />
    </div>
    <div className="flex-1 space-y-3 p-4 sm:p-0">
      <Skeleton className="h-6 w-1/2" />
      <div className="flex gap-3">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-xl" />
        <Skeleton className="h-6 w-24 rounded-xl" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 sm:p-4 border-t sm:border-t-0 sm:border-l border-border/60 min-w-[140px]">
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  </div>
);

// ── Custom Dropdown (fully theme-aware, no native select) ────────────────────
interface SelectOption { value: string; label: string; }

const FilterSelect: React.FC<{
  id: string;
  icon: React.ReactNode;
  value: string;
  options: SelectOption[];
  onChange: (v: string) => void;
  compact?: boolean;
}> = ({ id, icon, value, options, onChange, compact = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find(o => o.value === value)?.label ?? options[0].label;
  const isActive = value !== "" && value !== options[0].value;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div id={id} ref={ref} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(p => !p)}
        className={`
          inline-flex items-center gap-2 rounded-xl px-5 text-xs font-black
          border transition-all duration-300 uppercase tracking-widest whitespace-nowrap
          ${compact ? "h-12" : "h-16"}
          ${isActive
            ? "bg-primary text-primary-foreground border-primary shadow-xl"
            : "bg-card text-foreground border-border shadow-sm hover:border-primary/50 hover:text-primary"
          }`}
      >
        {icon}
        {selectedLabel}
        <ChevronDown className={`w-3 h-3 ml-1 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full mt-2 left-0 z-50 min-w-[160px] bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {options.map(o => (
            <button
              key={o.value}
              type="button"
              onClick={() => { onChange(o.value); setOpen(false); }}
              className={`
                w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors
                ${o.value === value
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
                }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────

const JobsListPage: React.FC = () => {
  const navigate = useNavigate();

  // ── Filter state ──────────────────────────────────────────────────────────
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 400);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [sortKey, setSortKey] = useState("default");
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Resolve backend sort params from chosen sort option
  const sortOption = SORT_OPTIONS.find(o => o.value === sortKey) ?? SORT_OPTIONS[0];

  // ── API call ──────────────────────────────────────────────────────────────
  const { data: jobsData, isLoading, error } = useGetAllJobs({
    searchValue: debouncedSearch || undefined,
    pageNumber,
    pageSize,
    sortColumn: sortOption.sortColumn || undefined,
    sortDirection: (sortOption.sortDirection as "Asc" | "Desc") || undefined,
  });

  // ── Client-side filtering (JobType & Salary) on current page results ──────
  const filteredItems = useMemo(() => {
    let items = jobsData?.items ?? [];

    // Filter by Job Type
    if (jobTypeFilter) {
      items = items.filter(j =>
        j.jobType?.toLowerCase() === jobTypeFilter.toLowerCase()
      );
    }

    // Filter by Salary range
    if (salaryFilter) {
      items = items.filter(j => {
        const salary = j.salaryMax ?? j.salaryMin ?? 0;
        const k = salary / 1000;
        if (salaryFilter === "0-50")   return k <= 50;
        if (salaryFilter === "50-100") return k > 50 && k <= 100;
        if (salaryFilter === "100-150") return k > 100 && k <= 150;
        if (salaryFilter === "150+")   return k > 150;
        return true;
      });
    }

    return items;
  }, [jobsData?.items, jobTypeFilter, salaryFilter]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPageNumber(1);
  };

  const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setter(value);
      setPageNumber(1);
    };

  const clearAllFilters = () => {
    setSearchValue("");
    setJobTypeFilter("");
    setSalaryFilter("");
    setSortKey("default");
    setPageNumber(1);
  };

  const handlePageChange = (newPage: number) => setPageNumber(newPage);
  const handleJobClick = (jobId: string) => navigate(`/jobs/${jobId}`);

  const toggleSave = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation();
    setSavedJobs((prev) => {
      const next = new Set(prev);
      next.has(jobId) ? next.delete(jobId) : next.add(jobId);
      return next;
    });
  };

  const hasActiveFilters = !!debouncedSearch || !!jobTypeFilter || !!salaryFilter || sortKey !== "default";
  const totalResults = jobsData?.totalCount ?? 0;
  const displayCount = filteredItems.length;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-10">
      <div className="max-w-6xl mx-auto">

        {/* ── Search & Filter Card ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-8 mb-10 shadow-sm relative">
          <div className="relative z-10 space-y-5">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-none">
                Explore <span className="text-primary">Opportunities</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Find your next career move with AI-powered matching.
              </p>
            </div>

            {/* ── Search bar row ── */}
            <div className="flex flex-col lg:flex-row items-stretch gap-3">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground/80 group-focus-within:text-primary transition-colors" />
                </div>
                <Input
                  id="job-search"
                  placeholder="Search roles, skills, or companies..."
                  value={searchValue}
                  onChange={handleSearch}
                  className="pl-14 w-full h-16 bg-muted border-none shadow-inner rounded-2xl transition-all text-base font-medium focus:ring-2 focus:ring-primary/20"
                />
                {searchValue && (
                  <button
                    onClick={() => { setSearchValue(""); setPageNumber(1); }}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Toggle filter panel button */}
              <button
                id="toggle-filters-btn"
                onClick={() => setShowFilters(p => !p)}
                className={`
                  inline-flex items-center gap-2 rounded-2xl px-6 h-16 text-xs font-black
                  border transition-all duration-300 uppercase tracking-widest whitespace-nowrap
                  ${showFilters
                    ? "bg-primary text-primary-foreground border-primary shadow-xl"
                    : "bg-card text-muted-foreground border-border shadow-sm hover:border-primary/50 hover:text-primary"
                  }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-1 bg-white/30 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center">
                    {[!!debouncedSearch, !!jobTypeFilter, !!salaryFilter, sortKey !== "default"].filter(Boolean).length}
                  </span>
                )}
              </button>
            </div>

            {/* ── Expandable Filter Panel ── */}
            {showFilters && (
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Job Type */}
                <FilterSelect
                  id="job-type-filter"
                  icon={<Briefcase className="w-3.5 h-3.5" />}
                  value={jobTypeFilter}
                  options={JOB_TYPE_OPTIONS}
                  onChange={handleFilterChange(setJobTypeFilter)}
                />

                {/* Salary */}
                <FilterSelect
                  id="salary-filter"
                  icon={<DollarSign className="w-3.5 h-3.5" />}
                  value={salaryFilter}
                  options={SALARY_OPTIONS}
                  onChange={handleFilterChange(setSalaryFilter)}
                />

                {/* Sort */}
                <FilterSelect
                  id="sort-filter"
                  icon={<ArrowUpDown className="w-3.5 h-3.5" />}
                  value={sortKey}
                  options={SORT_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
                  onChange={(v) => { setSortKey(v); setPageNumber(1); }}
                />

                {/* Clear all */}
                {hasActiveFilters && (
                  <button
                    id="clear-all-filters-btn"
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[10px] font-black border border-destructive/30 text-destructive bg-destructive/5 hover:bg-destructive/10 transition-all uppercase tracking-widest"
                  >
                    <X className="w-3 h-3" /> Clear All
                  </button>
                )}
              </div>
            )}

            {/* ── Active Filter Pills ── */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {debouncedSearch && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <Search className="w-3 h-3" />
                    "{debouncedSearch}"
                    <button onClick={() => setSearchValue("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {jobTypeFilter && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <Briefcase className="w-3 h-3" />
                    {jobTypeFilter}
                    <button onClick={() => setJobTypeFilter("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {salaryFilter && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <DollarSign className="w-3 h-3" />
                    {SALARY_OPTIONS.find(o => o.value === salaryFilter)?.label}
                    <button onClick={() => setSalaryFilter("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {sortKey !== "default" && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <ArrowUpDown className="w-3 h-3" />
                    {SORT_OPTIONS.find(o => o.value === sortKey)?.label}
                    <button onClick={() => setSortKey("default")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Results Header ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 px-4">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-foreground uppercase tracking-widest">
              {debouncedSearch ? "Search Results" : "Featured Jobs"}
            </h2>
            <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              {isLoading ? "Loading..." : (
                jobTypeFilter || salaryFilter
                  ? `${displayCount} of ${totalResults} positions`
                  : `${totalResults} positions found`
              )}
            </p>
          </div>

          {/* Inline Sort dropdown */}
          <FilterSelect
            id="sort-select-inline"
            icon={<ArrowUpDown className="w-3.5 h-3.5" />}
            value={sortKey}
            options={SORT_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
            onChange={(v) => { setSortKey(v); setPageNumber(1); }}
            compact
          />
        </div>

        {/* ── Job List Content ── */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6">
              {Array.from({ length: 5 }).map((_, i) => <JobCardSkeleton key={i} />)}
            </div>
          ) : error ? (
            <div className="bg-card border border-border rounded-[2.5rem] p-20 text-center shadow-sm">
              <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-3xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">Something went wrong</h3>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto mb-8 leading-relaxed">
                We couldn't load the job listings. Please check your connection and try again.
              </p>
              <Button variant="outline" onClick={() => window.location.reload()} className="rounded-xl h-12 px-8 font-black">Try Again</Button>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="bg-card border border-border rounded-[2.5rem] p-20 text-center shadow-sm">
              <div className="w-20 h-20 bg-muted text-muted-foreground/60 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">No Jobs Found</h3>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto mb-8 leading-relaxed">
                No positions match your current filters. Try adjusting your search criteria.
              </p>
              <Button onClick={clearAllFilters} variant="outline" className="rounded-xl h-12 px-8 font-black">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {filteredItems.map((job, idx) => {
                const logoColor = getLogoColor(job.companyDetails?.name);
                const hasApplied = job.iApplied;
                const isSaved = savedJobs.has(job.id);
                const matchPct = getFakeMatch(idx);
                const isHot = idx % 3 === 1;

                return (
                  <div
                    key={job.id}
                    onClick={() => handleJobClick(job.id)}
                    className="group relative bg-card border border-border rounded-[2.5rem] p-2 pr-6 sm:pr-8 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
                  >
                    {/* Company Logo & Match */}
                    <div className="p-4 sm:p-6 shrink-0 flex items-center justify-center">
                      <div className="relative">
                        <div
                          className="absolute -top-3 -left-3 z-10 flex items-center gap-1
                                     px-3 py-1.5 rounded-xl text-[10px] font-black text-white shadow-lg"
                          style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}
                        >
                          <Star className="w-3 h-3 fill-white" />
                          {matchPct}%
                        </div>
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.75rem] flex items-center justify-center
                                     text-3xl font-black shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundColor: logoColor.bg, color: logoColor.text }}
                        >
                          {job.companyDetails?.profilePictureUrl ? (
                            <img
                              src={job.companyDetails.profilePictureUrl}
                              alt={job.companyDetails.name ?? "Company"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            getCompanyInitial(job.companyDetails?.name)
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 p-4 sm:p-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors truncate">
                          {job.jobTitle ?? "Untitled Position"}
                        </h3>
                        {isHot && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-lg border border-primary/20 w-fit">
                            <Zap className="w-3 h-3 fill-primary" /> Recruiting
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <p className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {job.companyDetails?.name || "Premium Partner"}
                        </p>
                        {job.location && (
                          <p className="text-sm font-medium text-muted-foreground/80 flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </p>
                        )}
                        <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.postedDate ? getPostedLabel(job.postedDate) : "Recently"}
                        </p>
                        {job.deadlineDate && (
                          <p className="text-[10px] font-black text-amber-500/80 uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            Deadline: {new Date(job.deadlineDate).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {job.jobType && (
                          <span className="text-[10px] font-black text-muted-foreground bg-muted px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-border">
                            {job.jobType}
                          </span>
                        )}
                        {(job.salaryMin || job.salaryMax) && (
                          <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-primary/20 flex items-center gap-0.5">
                            <DollarSign className="w-3 h-3 inline" />
                            {job.salaryMin && `$${(job.salaryMin / 1000).toFixed(0)}k`}
                            {job.salaryMax && ` – $${(job.salaryMax / 1000).toFixed(0)}k`}
                          </span>
                        )}
                        {job.jobRequirements?.slice(0, 2).map((req, i) => (
                          <span key={i} className="text-[10px] font-black text-muted-foreground bg-muted/65 px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-border">
                            {typeof req === "string" ? req : (req as { name?: string }).name ?? ""}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 p-6 sm:p-4 border-t sm:border-t-0 sm:border-l border-border/60 min-w-[140px]">
                      {hasApplied ? (
                        <div className="flex flex-col items-center gap-1.5">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Applied</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 w-full justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-12 w-12 rounded-xl transition-all ${isSaved ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground/60 hover:text-primary"}`}
                            onClick={(e) => toggleSave(e, job.id)}
                          >
                            <Bookmark className={`w-5 h-5 ${isSaved ? "fill-primary" : ""}`} />
                          </Button>
                          <Button className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]">
                            View
                          </Button>
                        </div>
                      )}
                      <div className="hidden sm:flex items-center gap-1 text-[9px] font-black text-muted-foreground/60 uppercase tracking-tighter">
                        <Users className="w-3 h-3" /> Hiring
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {jobsData && jobsData.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-20 mb-12 px-6">
            <p className="text-[10px] font-black text-muted-foreground/80 uppercase tracking-[0.2em]">
              Page {pageNumber} of {jobsData.totalPages} · {totalResults} total
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary disabled:opacity-30 transition-all shadow-sm"
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={!jobsData.hasPreviousPage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: Math.min(jobsData.totalPages, 5) }, (_, i) => {
                  // Window around current page
                  let page: number;
                  const total = jobsData.totalPages;
                  if (total <= 5) {
                    page = i + 1;
                  } else if (pageNumber <= 3) {
                    page = i + 1;
                  } else if (pageNumber >= total - 2) {
                    page = total - 4 + i;
                  } else {
                    page = pageNumber - 2 + i;
                  }
                  const isCurrent = page === pageNumber;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[48px] h-12 rounded-2xl text-xs font-black transition-all duration-300 ${
                        isCurrent
                          ? "bg-primary text-primary-foreground shadow-xl scale-110"
                          : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary disabled:opacity-30 transition-all shadow-sm"
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={!jobsData.hasNextPage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsListPage;
