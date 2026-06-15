import { apiClient } from "@/lib/api/client";
import type {
  InterviewQuestion,
  SubmitInterviewRequest,
  InterviewResult,
} from "../types/interview";

/**
 * Interview Service
 * Handles all AI Interview endpoints
 */
class InterviewService {
  /**
   * Generate AI interview questions for a job
   * POST /api/jobs/{jobId}/generate-questions
   */
  async generateQuestions(jobId: string): Promise<void> {
    await apiClient.post(`/jobs/${jobId}/generate-questions`);
  }

  /**
   * Get interview questions for a job
   * GET /api/interview/{jobId}/questions
   */
  async getInterviewQuestions(jobId: string): Promise<InterviewQuestion[]> {
    const response = await apiClient.get<InterviewQuestion[]>(`/interview/${jobId}/questions`);
    return response;
  }

  /**
   * Submit interview answers
   * POST /api/interview/{jobId}/submit
   */
  async submitInterview(jobId: string, request: SubmitInterviewRequest): Promise<InterviewResult> {
    const response = await apiClient.post<InterviewResult>(`/interview/${jobId}/submit`, request);
    return response;
  }
}

export const interviewService = new InterviewService();
