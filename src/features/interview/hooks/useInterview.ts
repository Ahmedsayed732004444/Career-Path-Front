import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { interviewService } from "../services/interviewService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  SubmitInterviewRequest,
} from "../types/interview";

/**
 * Hook for generating interview questions
 */
export const useGenerateQuestions = () => {
  return useMutation({
    mutationFn: (jobId: string) => interviewService.generateQuestions(jobId),
    onSuccess: () => {
      toast.success("Questions generated successfully!");
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for getting interview questions
 */
export const useGetInterviewQuestions = (jobId: string) => {
  return useQuery({
    queryKey: ["interview-questions", jobId],
    queryFn: () => interviewService.getInterviewQuestions(jobId),
    enabled: !!jobId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook for submitting interview answers
 */
export const useSubmitInterview = () => {
  return useMutation({
    mutationFn: ({ jobId, request }: { jobId: string; request: SubmitInterviewRequest }) =>
      interviewService.submitInterview(jobId, request),
    onSuccess: () => {
      toast.success("Interview submitted!");
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};
