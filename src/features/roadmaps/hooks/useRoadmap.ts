import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { roadmapService } from "@/features/roadmaps/services/roadmapService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  RoadmapListItem,
  RoadmapQueryParams,
} from "@/features/roadmaps/types/roadmap";

export const useGetRoadmaps = (params?: RoadmapQueryParams) => {
  return useQuery({
    queryKey: ["roadmaps", params],
    queryFn: () => roadmapService.getRoadmaps(params),
    staleTime: 3 * 60 * 1000, // 3 minutes
  });
};

export const useGetRoadmapById = (id: number) => {
  return useQuery({
    queryKey: ["roadmaps", id],
    queryFn: () => roadmapService.getRoadmapById(id),
    enabled: !!id && id > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetSavedRoadmaps = (params?: RoadmapQueryParams) => {
  return useQuery({
    queryKey: ["roadmaps", "saved", params],
    queryFn: () => roadmapService.getSavedRoadmaps(params),
    staleTime: 3 * 60 * 1000, // 3 minutes
  });
};

export const useToggleSaveRoadmap = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => roadmapService.toggleSaveRoadmap(id),
    onSuccess: (_, variables) => {
      let isSavedBefore: boolean | undefined = undefined;

      // 1. Try single details cache
      const details = queryClient.getQueryData<any>(["roadmaps", variables]);
      if (details && typeof details.isSaved === "boolean") {
        isSavedBefore = details.isSaved;
      }

      // 2. If not found, search list caches
      if (isSavedBefore === undefined) {
        const allQueries = queryClient.getQueriesData<any>({ queryKey: ["roadmaps"] });
        for (const [, queryData] of allQueries) {
          if (queryData && Array.isArray(queryData.items)) {
            const found = queryData.items.find((item: any) => item.id === variables);
            if (found && typeof found.isSaved === "boolean") {
              isSavedBefore = found.isSaved;
              break;
            }
          }
        }
      }

      // Invalidate all roadmap queries
      queryClient.invalidateQueries({ queryKey: ["roadmaps"] });

      if (isSavedBefore !== undefined) {
        toast.success(
          isSavedBefore 
            ? "Roadmap unsaved successfully!" 
            : "Roadmap saved successfully!"
        );
      } else {
        toast.success("Roadmap status updated successfully!");
      }
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};
