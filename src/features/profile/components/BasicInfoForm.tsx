import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ProfileFormData } from "@/features/profile/pages/EditProfilePage";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { UserGender } from "@/features/profile/types/profile";
import { X, MapPin } from "lucide-react";

interface BasicInfoFormProps {
  form: UseFormReturn<ProfileFormData>;
  onSubmit: (data: ProfileFormData) => void;
  isSaving: boolean;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({
  form,
  onSubmit,
  isSaving,
}) => {
  const skills = form.watch("skills") || [];
  const summaryValue = form.watch("summary") || "";

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      form.setValue("skills", [...skills, skill]);
    }
  };

  const removeSkill = (index: number) => {
    form.setValue(
      "skills",
      skills.filter((_, i) => i !== index)
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        {/* ── Basic Information ── */}
        <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">First Name</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Last Name</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Gender</FormLabel>
                  <Select
                     onValueChange={field.onChange}
                    value={
                      field.value !== undefined && field.value !== null
                        ? String(field.value)
                        : ""
                    }
                  >
                    <FormControl>
                      <SelectTrigger className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary transition-all cursor-pointer">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={String(UserGender.Male)}>
                        Male
                      </SelectItem>
                      <SelectItem value={String(UserGender.Female)}>
                        Female
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
                      <input
                        {...field}
                        placeholder="City, Country"
                        className="w-full h-10 pl-9 pr-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-[11.5px] text-muted-foreground/80 mt-2">
            This will not be shown publicly.
          </p>
        </div>

        {/* ── Current Role ── */}
        <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-4">Current Role</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Job Title</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentCompany"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Company</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem className="max-w-[260px]">
                <FormLabel className="text-[13px] font-semibold text-foreground/90">Years of Experience</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary transition-all cursor-pointer">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["0-1", "1-3", "3-5", "5-10", "10+"].map((v) => (
                      <SelectItem key={v} value={v}>
                        {v} years
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ── Professional Summary ── */}
        <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-1">Professional Summary</h3>
          <p className="text-[12.5px] text-muted-foreground mb-4">
            Write a brief overview of your background and achievements.
          </p>
          
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    {...field}
                    rows={5}
                    className="w-full p-3 bg-card border border-border rounded-xl text-[13.5px] text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none leading-relaxed"
                  />
                </FormControl>
                <div className="text-right text-[11.5px] text-muted-foreground/80 mt-1">
                  {summaryValue.length} / 1000 characters
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ── Education ── */}
        <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-4">Education</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_120px] gap-4">
            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">University</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Degree</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="graduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-foreground/90">Year</FormLabel>
                  <FormControl>
                    <input type="number" {...field} className="w-full h-10 px-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Hidden country field */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <input {...field} type="hidden" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* ── Skills ── */}
        <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-1">Skills &amp; Expertise</h3>
          <p className="text-[12.5px] text-muted-foreground mb-4">
            Add skills relevant to your professional profile.
          </p>

          {/* Skill tags */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[12.5px] font-bold text-primary"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="w-4 h-4 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors text-primary"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <input
            placeholder="Type a skill and press Enter..."
            className="w-full h-10 px-4 bg-card border border-border rounded-lg text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const input = e.currentTarget;
                const value = input.value.trim();
                if (value) {
                  addSkill(value);
                  input.value = "";
                }
              }
            }}
          />
        </div>

        {/* Hidden submit button */}
        <button
          type="submit"
          className="hidden"
          id="basic-info-submit-btn"
          disabled={isSaving}
        >
          Submit
        </button>
      </form>
    </Form>
  );
};
