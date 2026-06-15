import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";
import { useChangePassword } from "@/features/profile/hooks/useProfile";
import { ShieldCheck } from "lucide-react";

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "New password must be at least 8 characters")
    .max(100, "New password must be less than 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
  confirmNewPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords do not match",
  path: ["confirmNewPassword"],
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export const ChangePasswordForm: React.FC = () => {
  const changePassword = useChangePassword();

  const form = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormData) => {
    changePassword.mutate(
      {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      },
      {
        onSuccess: () => {
          form.reset({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
        },
        onError: (error: any) => {
          // Parse backend error
          const response = error?.response?.data;
          const description = response?.description || response?.detail || "Failed to change password. Please verify current password or policy.";
          const code = response?.code || "";

          // If current password is wrong or it's a PasswordMismatch
          if (code === "PasswordMismatch" || description.toLowerCase().includes("current password") || description.toLowerCase().includes("incorrect")) {
            form.setError("currentPassword", {
              type: "manual",
              message: description,
            });
          } else {
            // Otherwise, it's likely a password policy issue (weak password)
            form.setError("newPassword", {
              type: "manual",
              message: description,
            });
          }
        },
      }
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <h3 className="text-base font-bold text-foreground">Change Password</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Update your password to secure your account. Password must be at least 8 characters and include uppercase, lowercase, and a special character.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-foreground/90">Current Password</FormLabel>
                <FormControl>
                  <input
                    type="password"
                    {...field}
                    className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="••••••••"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-foreground/90">New Password</FormLabel>
                <FormControl>
                  <input
                    type="password"
                    {...field}
                    className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="••••••••"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] font-semibold text-foreground/90">Confirm New Password</FormLabel>
                <FormControl>
                  <input
                    type="password"
                    {...field}
                    className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="••••••••"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={changePassword.isPending}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-xl mt-4 shadow-md transition-all active:scale-[0.98]"
          >
            {changePassword.isPending ? "Updating Password..." : "Update Password"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
