import { z } from "zod";
import { ApplicationStatus } from "@/features/job-tracker/types/jobTracker";

export const jobApplicationSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required").max(100, "Job title must be less than 100 characters"),
  companyName: z.string().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  applicationDate: z.string().min(1, "Application date is required"),
  status: z.nativeEnum(ApplicationStatus),
  applicationSource: z.string().max(200, "Application source must be less than 200 characters").optional().or(z.literal("")),
  notes: z.string().max(1000, "Notes must be less than 1000 characters").optional().or(z.literal("")),
});

export type JobApplicationInput = z.input<typeof jobApplicationSchema>;
export type JobApplicationFormData = z.output<typeof jobApplicationSchema>;
