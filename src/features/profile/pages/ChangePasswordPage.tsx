import React from "react";
import { ChevronRight } from "lucide-react";
import { ChangePasswordForm } from "@/features/profile/components/ChangePasswordForm";

const ChangePasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-10">
      <div className="max-w-2xl mx-auto">
        {/* ── Page Header ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-8 mb-10 shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                 <span>Account</span>
                 <ChevronRight className="w-3 h-3" />
                 <span className="text-primary">Security</span>
               </div>
               <h1 className="text-3xl font-black tracking-tight leading-none text-foreground">
                 Change <span className="text-primary">Password</span>
               </h1>
               <p className="text-lg text-muted-foreground font-medium">Update your credentials to keep your account secure.</p>
            </div>
          </div>
        </div>

        {/* ── Change Password Form ── */}
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
