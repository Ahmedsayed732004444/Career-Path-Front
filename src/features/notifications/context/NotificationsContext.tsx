// src/features/notifications/context/NotificationsContext.tsx
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationsService } from "../services/notificationsService";
import { notificationsSignalrService } from "../services/notificationsSignalrService";
import { useAuth } from "@/features/auth/hooks/useAuth";
import type {
  Notification,
  NotificationPreference,
  GetNotificationsParams,
  NotificationsListResponse,
  UnreadCountResponse,
  NotificationPreferencesResponse,
} from "../types/notifications";

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  preferences: NotificationPreference[];
  isConnected: boolean;
  fetchNotifications: (params?: GetNotificationsParams) => Promise<void>;
  fetchUnreadCount: () => Promise<void>;
  markAsRead: (notificationId: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  deleteNotification: (notificationId: string) => Promise<void>;
  fetchPreferences: () => Promise<void>;
  updatePreferences: (preferences: NotificationPreference[]) => Promise<void>;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const { token, isAuthenticated } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [params, setParams] = useState<GetNotificationsParams | undefined>(undefined);

  // Connect to SignalR when authenticated
  useEffect(() => {
    if (!isAuthenticated || !token) {
      setIsConnected(false);
      notificationsSignalrService.disconnect();
      return;
    }

    let mounted = true;

    const connect = async () => {
      try {
        await notificationsSignalrService.connect();
        if (mounted) {
          setIsConnected(true);
          console.log("Notifications SignalR connected");
        }
      } catch (err) {
        console.error("Failed to connect to notifications SignalR:", err);
        if (mounted) {
          setIsConnected(false);
        }
      }
    };

    connect();

    return () => {
      mounted = false;
      notificationsSignalrService.disconnect();
    };
  }, [token, isAuthenticated]);

  // ─── Queries ───────────────────────────────────────────────────────────────

  const notificationsQuery = useQuery({
    queryKey: ["notifications", "list", params],
    queryFn: ({ signal }) => notificationsService.getNotifications(params, signal),
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  const unreadCountQuery = useQuery({
    queryKey: ["notifications", "unread-count"],
    queryFn: ({ signal }) => notificationsService.getUnreadCount(signal),
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  const preferencesQuery = useQuery({
    queryKey: ["notifications", "preferences"],
    queryFn: ({ signal }) => notificationsService.getPreferences(signal),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // ─── Mutations ─────────────────────────────────────────────────────────────

  const markAsReadMutation = useMutation({
    mutationFn: (id: string) => notificationsService.markAsRead(id),
    onSuccess: (_, notificationId) => {
      // Update notifications list cache
      queryClient.setQueriesData<NotificationsListResponse>(
        { queryKey: ["notifications", "list"] },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            items: old.items.map((item) =>
              item.id === notificationId
                ? { ...item, isRead: true, readAt: new Date().toISOString() }
                : item
            ),
          };
        }
      );
      // Decrement unread count
      queryClient.setQueryData<UnreadCountResponse>(
        ["notifications", "unread-count"],
        (old) => {
          if (!old) return old;
          return { ...old, count: Math.max(0, old.count - 1) };
        }
      );
    },
  });

  const markAllAsReadMutation = useMutation({
    mutationFn: () => notificationsService.markAllAsRead(),
    onSuccess: () => {
      // Mark all as read in cache
      queryClient.setQueriesData<NotificationsListResponse>(
        { queryKey: ["notifications", "list"] },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            items: old.items.map((item) => ({
              ...item,
              isRead: true,
              readAt: new Date().toISOString(),
            })),
          };
        }
      );
      // Reset unread count
      queryClient.setQueryData<UnreadCountResponse>(
        ["notifications", "unread-count"],
        (old) => {
          if (!old) return old;
          return { ...old, count: 0 };
        }
      );
    },
  });

  const deleteNotificationMutation = useMutation({
    mutationFn: (id: string) => notificationsService.deleteNotification(id),
    onSuccess: (_, notificationId) => {
      let wasUnread = false;
      queryClient.setQueriesData<NotificationsListResponse>(
        { queryKey: ["notifications", "list"] },
        (old) => {
          if (!old) return old;
          const found = old.items.find((item) => item.id === notificationId);
          if (found && !found.isRead) {
            wasUnread = true;
          }
          return {
            ...old,
            items: old.items.filter((item) => item.id !== notificationId),
          };
        }
      );

      if (wasUnread) {
        queryClient.setQueryData<UnreadCountResponse>(
          ["notifications", "unread-count"],
          (old) => {
            if (!old) return old;
            return { ...old, count: Math.max(0, old.count - 1) };
          }
        );
      }
    },
  });

  const updatePreferencesMutation = useMutation({
    mutationFn: (newPrefs: NotificationPreference[]) =>
      notificationsService.updatePreferences({ preferences: newPrefs }),
    onSuccess: (_, newPrefs) => {
      queryClient.setQueryData<NotificationPreferencesResponse>(
        ["notifications", "preferences"],
        { preferences: newPrefs }
      );
    },
  });

  // ─── SignalR Event Listeners ────────────────────────────────────────────────

  useEffect(() => {
    const handleReceiveNotification = (notification: Notification) => {
      // Prepend notification to the lists
      queryClient.setQueriesData<NotificationsListResponse>(
        { queryKey: ["notifications", "list"] },
        (old) => {
          if (!old) {
            return {
              items: [notification],
              totalCount: 1,
              unreadCount: 1,
              pageNumber: 1,
              pageSize: 10,
              hasMore: false,
            };
          }
          return {
            ...old,
            items: [notification, ...old.items],
            totalCount: old.totalCount + 1,
            unreadCount: old.unreadCount + 1,
          };
        }
      );

      // Increment unread count
      queryClient.setQueryData<UnreadCountResponse>(
        ["notifications", "unread-count"],
        (old) => {
          if (!old) return { count: 1 };
          return { ...old, count: old.count + 1 };
        }
      );
    };

    const handleUnreadCountUpdated = (count: number) => {
      queryClient.setQueryData<UnreadCountResponse>(
        ["notifications", "unread-count"],
        { count }
      );
    };

    notificationsSignalrService.onReceiveNotification(handleReceiveNotification);
    notificationsSignalrService.onUnreadCountUpdated(handleUnreadCountUpdated);

    return () => {
      notificationsSignalrService.offReceiveNotification(handleReceiveNotification);
      notificationsSignalrService.offUnreadCountUpdated(handleUnreadCountUpdated);
    };
  }, [queryClient]);

  // ─── Helper Callbacks ──────────────────────────────────────────────────────

  const fetchNotifications = useCallback(async (newParams?: GetNotificationsParams) => {
    setParams(newParams);
    await notificationsQuery.refetch();
  }, [notificationsQuery]);

  const fetchUnreadCount = useCallback(async () => {
    await unreadCountQuery.refetch();
  }, [unreadCountQuery]);

  const markAsRead = useCallback(async (notificationId: string) => {
    await markAsReadMutation.mutateAsync(notificationId);
  }, [markAsReadMutation]);

  const markAllAsRead = useCallback(async () => {
    await markAllAsReadMutation.mutateAsync();
  }, [markAllAsReadMutation]);

  const deleteNotification = useCallback(async (notificationId: string) => {
    await deleteNotificationMutation.mutateAsync(notificationId);
  }, [deleteNotificationMutation]);

  const fetchPreferences = useCallback(async () => {
    await preferencesQuery.refetch();
  }, [preferencesQuery]);

  const updatePreferences = useCallback(async (newPreferences: NotificationPreference[]) => {
    await updatePreferencesMutation.mutateAsync(newPreferences);
  }, [updatePreferencesMutation]);

  const notifications = notificationsQuery.data?.items ?? [];
  const unreadCount = unreadCountQuery.data?.count ?? 0;
  const preferences = preferencesQuery.data?.preferences ?? [];
  const isLoading = notificationsQuery.isLoading || unreadCountQuery.isLoading;
  const error = notificationsQuery.error
    ? (notificationsQuery.error as Error).message || "Failed to load notifications"
    : null;

  const value: NotificationsContextType = {
    notifications,
    unreadCount,
    isLoading,
    error,
    preferences,
    isConnected,
    fetchNotifications,
    fetchUnreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    fetchPreferences,
    updatePreferences,
  };

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationsProvider");
  }
  return context;
}
