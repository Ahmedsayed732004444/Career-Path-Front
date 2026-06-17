import type { PaginatedResponse } from "@/shared/types/pagination";

export const SubmissionStatus = {
  Pending: 0,
  Accepted: 1,
  Rejected: 2,
} as const;

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus];


export interface CompanyDetails {
  companyId: string;
  name: string | null;
  profilePictureUrl: string | null;
}

export interface JobResponse {
  id: string;
  jobTitle: string | null;
  jobType: string | null;
  jobDescription: string | null;
  location: string | null;
  jobRequirements: string[] | null;
  salaryMin: number | null;
  salaryMax: number | null;
  experienceLevel: number | null;
  postedDate: string;
  deadlineDate: string | null;
  isActive: boolean;
  iApplied: boolean;
  isMine: boolean;
  companyDetails: CompanyDetails;
}

export type JobsListResponse = PaginatedResponse<JobResponse>;

export interface ApplicantResponse {
  id: string;
  applicationId: string;
  applicantionId?: string; // Support backend typo
  applicantId: string;
  cvPath: string;
  cVPath?: string; // Support both cases
  phone: string | null;
  notes: string | null;
  appliedAt: string;
  applicantName: string;
  applicantEmail: string;
  applicantImageUrl: string | null;
  status: SubmissionStatus;
}


export type ApplicantsListResponse = PaginatedResponse<ApplicantResponse>;

export interface ApiResult<T> {
  value: T;
  isSuccess: boolean;
  isFailure: boolean;
  error?: {
    code: string;
    description: string;
    statusCode: number;
  };
}

export interface JobsQueryParams {
  searchValue?: string;
  pageNumber?: number;
  pageSize?: number;
  sortColumn?: string;
  sortDirection?: "ASC" | "DESC" | "Asc" | "Desc";
}

export interface ApplyJobRequest {
  cv: File;
  phone: string;
  notes?: string;
}

export interface AddJobRequest {
  jobTitle: string;
  jobType: string;
  jobDescription: string;
  location?: string | null;
  jobRequirements: string[];
  experienceLevel?: number | null;
  salaryMin?: number | null;
  salaryMax?: number | null;
  deadlineDate?: string | null;
}
