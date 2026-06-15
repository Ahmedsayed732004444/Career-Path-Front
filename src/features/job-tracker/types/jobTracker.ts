import type { PaginatedResponse } from "@/shared/types/pagination";

export const ApplicationStatus = {
  Applied: "Applied",
  Interviewed: "Interviewed",
  Offered: "Offered",
  Rejected: "Rejected",
  Accepted: "Accepted",
} as const;

export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus];

export const ApplicationStatusLabels: Record<ApplicationStatus, string> = {
  [ApplicationStatus.Applied]: "Applied",
  [ApplicationStatus.Interviewed]: "Interviewed",
  [ApplicationStatus.Offered]: "Offered",
  [ApplicationStatus.Rejected]: "Rejected",
  [ApplicationStatus.Accepted]: "Accepted",
};

export const ApplicationStatusColors: Record<ApplicationStatus, string> = {
  [ApplicationStatus.Applied]: "#2563eb", // blue-600
  [ApplicationStatus.Interviewed]: "#ca8a04", // yellow-600
  [ApplicationStatus.Offered]: "#16a34a", // green-600
  [ApplicationStatus.Rejected]: "#dc2626", // red-600
  [ApplicationStatus.Accepted]: "#10b981", // emerald-500
};

export interface JobApplicationResponse {
  id: string;
  jobTitle: string | null;
  companyName: string | null;
  applicationDate: string | null;
  status: ApplicationStatus;
  applicationSource: string | null;
  notes: string | null;
}

export type JobApplicationsListResponse = PaginatedResponse<JobApplicationResponse>;

export interface JobApplicationRequest {
  jobTitle: string;
  companyName?: string | null;
  applicationDate?: string | null;
  status: ApplicationStatus;
  applicationSource?: string | null;
  notes?: string | null;
}

export interface JobTrackerQueryParams {
  searchValue?: string;
  pageNumber?: number;
  pageSize?: number;
}
