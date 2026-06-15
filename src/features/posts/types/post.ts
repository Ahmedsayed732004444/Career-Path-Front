export interface PostAuthor {
  userId: string;
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  city: string | null;
}

export interface Post {
  postId: string;
  id?: string;
  content: string;
  fileUrl: string | null;
  createdAt: string;
  likesCount: number;
  commentsCount?: number;
  iLiked: boolean;
  isOwner?: boolean;
  author: PostAuthor;
}

export interface AddPostRequest {
  content: string;
  file?: File;
}

export interface UpdatePostRequest {
  content: string;
}

export interface PostsQueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

export interface LikeUser {
  userProfileId: string;
  userId?: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}

export interface LikeResponse {
  postId: string;
  likesCount: number;
  iLiked: boolean;
}

export type PostResponse = Post;

export interface PostLikerResponse {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}
