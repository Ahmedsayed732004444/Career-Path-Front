This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: ai-context.md, repomix-output.xml, **/*.css, **/*.min.js, **/*.lock, **/node_modules/**, **/*.svg, **/*.png, **/*.jpg, **/*.ico, **/*.woff, **/*.woff2, **/__snapshots__/**, **/dist/**, **/build/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
components.json
eslint.config.js
index.html
package.json
README.md
repomix.config.json
src/app/App.tsx
src/app/main.tsx
src/app/routes/index.tsx
src/assets/imgs/auth/laptop-for-register.webp
src/assets/imgs/auth/Use_the_uploaded_image_as_the_ONLY_character_and_facial_reference.____IMPORTANT___One_woman_only.__N_seed4158426707.mp4
src/assets/imgs/auth/vertical-for-vrfiy.webp
src/features/admin/components/RoleDialog.tsx
src/features/admin/components/RoleManagement.tsx
src/features/admin/components/StatsCards.tsx
src/features/admin/components/UserDialog.tsx
src/features/admin/components/UserManagement.tsx
src/features/admin/hooks/useAdmin.ts
src/features/admin/pages/AdminDashboard.tsx
src/features/admin/schemas/adminSchemas.ts
src/features/admin/services/adminService.ts
src/features/admin/types/admin.ts
src/features/ai/components/AiHeroSection.tsx
src/features/ai/components/CvAnalysisTab.tsx
src/features/ai/components/JobMatchingTab.tsx
src/features/ai/hooks/useAi.ts
src/features/ai/pages/AiPage.tsx
src/features/ai/services/aiService.ts
src/features/ai/types/ai.ts
src/features/auth/components/AuthLayout.tsx
src/features/auth/components/EmailVerificationForm.tsx
src/features/auth/components/ForgotPasswordForm.tsx
src/features/auth/components/LoginForm.tsx
src/features/auth/components/RegisterForm.tsx
src/features/auth/components/ResetPasswordForm.tsx
src/features/auth/context/AuthContext.tsx
src/features/auth/hooks/useAuth.ts
src/features/auth/hooks/useAuthMutations.ts
src/features/auth/hooks/usePermissions.ts
src/features/auth/pages/ConfirmEmailPage.tsx
src/features/auth/pages/ForgotPasswordPage.tsx
src/features/auth/pages/LoginPage.tsx
src/features/auth/pages/OAuthCallbackPage.tsx
src/features/auth/pages/RegisterPage.tsx
src/features/auth/pages/ResetPasswordPage.tsx
src/features/auth/pages/VerifyEmailPage.tsx
src/features/auth/schemas/authSchemas.ts
src/features/auth/services/authApi.ts
src/features/auth/services/authService.ts
src/features/auth/types/auth.ts
src/features/chat/components/ChatModal.tsx
src/features/chat/components/ChatWindow.tsx
src/features/chat/components/MessageBubble.tsx
src/features/chat/components/MessageInput.tsx
src/features/chat/components/MessageList.tsx
src/features/chat/hooks/useChat.ts
src/features/chat/services/chatService.ts
src/features/chat/services/signalrService.ts
src/features/chat/types/chat.ts
src/features/company/pages/CompanyDashboard.tsx
src/features/company/pages/JobApplicantsPage.tsx
src/features/follow/hooks/useFollow.ts
src/features/follow/pages/FollowersPage.tsx
src/features/follow/pages/FollowingPage.tsx
src/features/follow/pages/MyFollowersPage.tsx
src/features/follow/pages/MyFollowingPage.tsx
src/features/follow/services/followService.ts
src/features/follow/types/follow.ts
src/features/home/components/AudienceSection.tsx
src/features/home/components/CTASection.tsx
src/features/home/components/FeatureCard.tsx
src/features/home/components/FeatureList.tsx
src/features/home/components/FeaturesSection.tsx
src/features/home/components/HeroSection.tsx
src/features/home/components/HowItWorksSection.tsx
src/features/home/components/index.ts
src/features/home/components/SocialProofSection.tsx
src/features/home/components/StatCard.tsx
src/features/home/components/StatsSection.tsx
src/features/home/components/StepCard.tsx
src/features/home/pages/HomePage.tsx
src/features/interview/hooks/useInterview.ts
src/features/interview/pages/InterviewPage.tsx
src/features/interview/services/interviewService.ts
src/features/interview/types/interview.ts
src/features/job-tracker/hooks/useJobTracker.ts
src/features/job-tracker/hooks/useJobTrackerStats.ts
src/features/job-tracker/pages/JobTrackerPage.tsx
src/features/job-tracker/schemas/jobTrackerSchemas.ts
src/features/job-tracker/services/jobTrackerService.ts
src/features/job-tracker/types/jobTracker.ts
src/features/jobs/components/JobApplySheet.tsx
src/features/jobs/hooks/useJobs.ts
src/features/jobs/pages/JobDetailsPage.tsx
src/features/jobs/pages/JobsListPage.tsx
src/features/jobs/schemas/jobSchemas.ts
src/features/jobs/services/jobService.ts
src/features/jobs/types/jobs.ts
src/features/notifications/components/NotificationItem.tsx
src/features/notifications/context/NotificationsContext.tsx
src/features/notifications/pages/NotificationsPage.tsx
src/features/notifications/services/notificationsService.ts
src/features/notifications/services/notificationsSignalrService.ts
src/features/notifications/types/notifications.ts
src/features/posts/components/CommentsSection.tsx
src/features/posts/components/CreatePostBar.tsx
src/features/posts/components/CreatePostModal.tsx
src/features/posts/components/EditPostModal.tsx
src/features/posts/components/LikesListModal.tsx
src/features/posts/components/PostCard.tsx
src/features/posts/hooks/usePaginatedPosts.ts
src/features/posts/hooks/usePaginatedUserPosts.ts
src/features/posts/hooks/usePosts.ts
src/features/posts/pages/MyPostsPage.tsx
src/features/posts/pages/PostsPage.tsx
src/features/posts/services/commentService.ts
src/features/posts/services/postService.ts
src/features/posts/types/comment.ts
src/features/posts/types/post.ts
src/features/profile/components/BasicInfoForm.tsx
src/features/profile/components/ChangePasswordForm.tsx
src/features/profile/components/CvSection.tsx
src/features/profile/components/ProfilePhotoSection.tsx
src/features/profile/hooks/useProfile.ts
src/features/profile/hooks/userHooks.ts
src/features/profile/pages/ChangePasswordPage.tsx
src/features/profile/pages/EditProfilePage.tsx
src/features/profile/pages/ProfilePage.tsx
src/features/profile/services/profileService.ts
src/features/profile/services/userService.ts
src/features/profile/types/profile.ts
src/features/roadmaps/hooks/useRoadmap.ts
src/features/roadmaps/pages/RoadmapDetailsPage.tsx
src/features/roadmaps/pages/RoadmapsPage.tsx
src/features/roadmaps/services/roadmapService.ts
src/features/roadmaps/types/roadmap.ts
src/lib/api/client.ts
src/lib/api/errors.ts
src/lib/env.ts
src/lib/jwt.ts
src/lib/queryClient.ts
src/lib/styleConstants.ts
src/lib/utils.ts
src/shared/components/BaseLoader.tsx
src/shared/components/HelpPage.tsx
src/shared/components/navigation/AppHeader.tsx
src/shared/components/navigation/AppLayout.tsx
src/shared/components/navigation/AppSidebar.tsx
src/shared/components/navigation/Footer.tsx
src/shared/components/navigation/MinimalFooter.tsx
src/shared/components/navigation/ProtectedRoute.tsx
src/shared/components/navigation/PublicHeader.tsx
src/shared/components/navigation/PublicLayout.tsx
src/shared/components/navigation/ScrollToTop.tsx
src/shared/components/NotFoundPage.tsx
src/shared/components/PageSkeleton.tsx
src/shared/components/theme/ThemeProvider.tsx
src/shared/components/theme/ThemeToggle.tsx
src/shared/components/ThemedToaster.tsx
src/shared/components/ui/alert.tsx
src/shared/components/ui/badge.tsx
src/shared/components/ui/button.tsx
src/shared/components/ui/card.tsx
src/shared/components/ui/checkbox.tsx
src/shared/components/ui/dialog.tsx
src/shared/components/ui/dropdown-menu.tsx
src/shared/components/ui/field.tsx
src/shared/components/ui/form.tsx
src/shared/components/ui/input.tsx
src/shared/components/ui/label.tsx
src/shared/components/ui/progress.tsx
src/shared/components/ui/select.tsx
src/shared/components/ui/separator.tsx
src/shared/components/ui/sheet.tsx
src/shared/components/ui/sidebar.tsx
src/shared/components/ui/skeleton.tsx
src/shared/components/ui/sonner.tsx
src/shared/components/ui/table.tsx
src/shared/components/ui/tabs.tsx
src/shared/components/ui/textarea.tsx
src/shared/components/ui/tooltip.tsx
src/shared/components/UnderConstruction.tsx
src/shared/components/UserCard.tsx
src/shared/hooks/useDebounce.ts
src/shared/hooks/useMobile.ts
src/shared/hooks/useSidebarConfig.ts
src/shared/types/api.ts
src/shared/types/pagination.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
vite.config.ts
```

# Files

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Career Path</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/app/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "freaqy-platform",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@heroicons/react": "^2.2.0",
    "@hookform/resolvers": "^5.2.2",
    "@microsoft/signalr": "^10.0.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.1.14",
    "@tanstack/react-query": "^5.90.5",
    "@tanstack/react-query-devtools": "^5.90.2",
    "axios": "^1.12.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.15.0",
    "lucide-react": "^0.545.0",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.65.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.14",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.7.2",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "baseline-browser-mapping": "^2.9.11",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "sharp": "^0.34.5",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7",
    "vite-plugin-image-optimizer": "^2.0.3"
  }
}
````

## File: README.md
````markdown
# Career Path — Frontend (Rebuilt)

**Feature-based React + TypeScript SaaS application for career management**

---

## 🎯 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 📁 Project Structure

```
src/
├── app/                    # Application shell
│   ├── App.tsx            # Provider tree
│   ├── main.tsx           # Entry point
│   └── routes/
│       └── index.tsx      # Route definitions
│
├── features/              # Feature modules (domain-driven)
│   ├── auth/              # Authentication & authorization
│   ├── profile/           # User profiles
│   ├── jobs/              # Job board
│   ├── job-tracker/       # Personal application tracker
│   ├── posts/             # Community feed
│   ├── roadmaps/          # Learning paths
│   ├── ai/                # AI CV analysis & job matching
│   ├── interview/         # Interview prep
│   ├── company/           # Company dashboard
│   ├── admin/             # Admin panel
│   └── home/              # Landing page
│
├── shared/                # Shared across features
│   ├── components/        # Reusable UI (navigation, theme, primitives)
│   ├── hooks/             # Reusable hooks
│   └── types/             # Shared types
│
└── lib/                   # Core utilities
    ├── api/               # API client & error handling
    ├── env.ts             # Environment config
    ├── jwt.ts             # JWT utilities
    ├── queryClient.ts     # TanStack Query config
    └── utils.ts           # Helpers (cn, etc.)
```

---

## 🧩 Feature Module Pattern

Each feature follows this structure:

```
features/[feature]/
├── components/     # Feature-specific UI
├── hooks/          # Feature hooks (queries, mutations)
├── services/       # API calls
├── schemas/        # Zod validation schemas
├── types/          # TypeScript types
├── pages/          # Route pages
└── index.ts        # Public API (barrel export)
```

**Benefits:**
- **Co-location:** Everything for a feature lives together
- **Encapsulation:** Features are self-contained modules
- **Scalability:** Add new features by copying the pattern
- **Testability:** Each feature can be tested in isolation

---

## 🔑 Key Technologies

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **TanStack Query v5** — Server state management
- **React Hook Form + Zod** — Forms & validation
- **Axios** — HTTP client with interceptors
- **Tailwind CSS v4** — Styling
- **shadcn/ui** — Accessible component primitives
- **React Router v7** — Client-side routing
- **Sonner** — Toast notifications

---

## 🛡️ Architecture Decisions

### State Management
- **Server state:** TanStack Query (all API data)
- **Auth state:** React Context + localStorage + TanStack Query
- **Local UI state:** useState/useReducer (component-local)
- **No Zustand:** All global state fits in React Context

### API Layer
- **Single axios instance** with auth interceptor
- **Token refresh queue** prevents concurrent 401 storms
- **Typed error classes** for consistent error handling
- **Zod validation** at every API boundary

### Forms
- **React Hook Form** for all forms
- **Zod schemas** for validation
- **Reusable form components** (FormInput, FormSelect, etc.)
- **Server error mapping** to form fields

### Routing
- **No lazy loading yet** (can be added incrementally)
- **AuthGuard pattern** can be added (currently AppLayout shows public header)
- **Error boundaries** can be added per route

---

## 🔄 Import Conventions

Use absolute imports with `@/` prefix:

```typescript
// ✅ Good
import { useAuth } from "@/features/auth";
import { Button } from "@/shared/components/ui/button";
import { apiClient } from "@/lib/api";

// ❌ Avoid
import { useAuth } from "../../../features/auth/hooks/useAuth";
```

---

## 🧪 Testing Strategy (Future)

Recommended setup:

```
features/[feature]/
├── __tests__/
│   ├── hooks/
│   ├── components/
│   └── services/
```

**Stack:**
- Vitest (test runner)
- Testing Library (component tests)
- MSW (API mocking)

---

## 🚀 Deployment

```bash
# Build
npm run build

# Preview build locally
npm run preview
```

**Environment Variables:**
- `VITE_API_BASE_URL` — Backend API URL (includes /api)
- `VITE_APP_NAME` — Application name
- `VITE_APP_VERSION` — Version string

---

## 📚 Documentation

- **MIGRATION.md** — Complete migration guide from old structure
- **Phase 2 Plan** — Architecture decisions and folder structure
- **Risk Log** — Known issues requiring developer review

---

## 🐛 Known Issues

See **MIGRATION.md Risk Log** for:
- No AuthGuard redirect (AppLayout shows public header instead)
- Unrouted pages (SettingsPage, UsersListPage, etc.)
- Empty constants.ts file
- Double /api/ prefix in userService

---

## 🎨 Code Style

- **Components:** PascalCase (`ProfilePage.tsx`)
- **Hooks:** camelCase starting with `use` (`useProfile.ts`)
- **Constants:** UPPER_SNAKE_CASE
- **Files:** kebab-case for folders, PascalCase for components
- **Max file length:** 200 lines (soft limit)

---

## 🤝 Contributing

1. Follow the feature module pattern
2. Add Zod schemas for all API boundaries
3. Use TanStack Query for all server state
4. Keep components under 200 lines
5. Write tests for critical paths

---

## 📄 License

[Your License Here]
````

## File: repomix.config.json
````json
{
  "output": {
    "filePath": "ai-context.md",
    "style": "markdown"
  },
  "ignore": {
    "customPatterns": [
      "ai-context.md",
      "repomix-output.xml",
      "**/*.css",
      "**/*.min.js",
      "**/*.lock",
      "**/node_modules/**",
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.ico",
      "**/*.woff",
      "**/*.woff2",
      "**/__snapshots__/**",
      "**/dist/**",
      "**/build/**"
    ]
  }
}
````

## File: src/app/App.tsx
````typescript
// src/app/App.tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { AuthProvider } from "@/features/auth/context/AuthContext";
import { ThemeProvider } from "@/shared/components/theme/ThemeProvider";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { ThemedToaster } from "@/shared/components/ThemedToaster";
import MainRouter from "./routes";

import { NotificationsProvider } from "@/features/notifications/context/NotificationsContext";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <NotificationsProvider>
              <MainRouter />
              <ThemedToaster />
            </NotificationsProvider>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
````

## File: src/app/main.tsx
````typescript
// src/app/main.tsx
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
````

## File: src/app/routes/index.tsx
````typescript
// src/app/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import PublicLayout from "@/shared/components/navigation/PublicLayout";
import AppLayout from "@/shared/components/navigation/AppLayout";
import ProtectedRoute from "@/shared/components/navigation/ProtectedRoute";
import ScrollToTop from "@/shared/components/navigation/ScrollToTop";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import HomePage from "@/features/home/pages/HomePage";
import NotFoundPage from "@/shared/components/NotFoundPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";
import ConfirmEmailPage from "@/features/auth/pages/ConfirmEmailPage";
import OAuthCallbackPage from "@/features/auth/pages/OAuthCallbackPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import EditProfilePage from "@/features/profile/pages/EditProfilePage";
import ChangePasswordPage from "@/features/profile/pages/ChangePasswordPage";
import JobsListPage from "@/features/jobs/pages/JobsListPage";
import JobDetailsPage from "@/features/jobs/pages/JobDetailsPage";
import JobTrackerPage from "@/features/job-tracker/pages/JobTrackerPage";
import CompanyDashboard from "@/features/company/pages/CompanyDashboard";
import JobApplicantsPage from "@/features/company/pages/JobApplicantsPage";
import AdminDashboard from "@/features/admin/pages/AdminDashboard";
import RoadmapsPage from "@/features/roadmaps/pages/RoadmapsPage";
import RoadmapDetailsPage from "@/features/roadmaps/pages/RoadmapDetailsPage";
import AiPage from "@/features/ai/pages/AiPage";
import InterviewPage from "@/features/interview/pages/InterviewPage";
import PostsPage from "@/features/posts/pages/PostsPage";
import MyPostsPage from "@/features/posts/pages/MyPostsPage";
import HelpPage from "@/shared/components/HelpPage";
import FollowersPage from "@/features/follow/pages/FollowersPage";
import FollowingPage from "@/features/follow/pages/FollowingPage";
import MyFollowersPage from "@/features/follow/pages/MyFollowersPage";
import MyFollowingPage from "@/features/follow/pages/MyFollowingPage";
import NotificationsPage from "@/features/notifications/pages/NotificationsPage";

const MainRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={isAuthenticated ? <Navigate to="/profile" replace /> : <HomePage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile/my/followers" element={<MyFollowersPage />} />
            <Route path="/profile/my/following" element={<MyFollowingPage />} />
            <Route path="/profile/:userId/followers" element={<FollowersPage />} />
            <Route path="/profile/:userId/following" element={<FollowingPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="/jobs" element={<JobsListPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/interview/:jobId" element={<InterviewPage />} />
            <Route path="/job-tracker" element={<JobTrackerPage />} />
            <Route path="/company/dashboard" element={<CompanyDashboard />} />
            <Route path="/company/jobs/:jobId/applicants" element={<JobApplicantsPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/roadmaps" element={<RoadmapsPage />} />
            <Route path="/roadmaps/:id" element={<RoadmapDetailsPage />} />
            <Route path="/ai" element={<AiPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/my" element={<MyPostsPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Route>
        </Route>

        <Route path="*" element={<PublicLayout />}>
          <Route index element={<NotFoundPage />} />
        </Route>

        <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" replace /> : <AuthLayout variant="login"><LoginPage /></AuthLayout>} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/profile" replace /> : <AuthLayout variant="register"><RegisterPage /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout variant="forgot"><ForgotPasswordPage /></AuthLayout>} />
        <Route path="/auth/forgetPassword" element={<AuthLayout variant="reset"><ResetPasswordPage /></AuthLayout>} />
        <Route path="/resetPassword" element={<AuthLayout variant="reset"><ResetPasswordPage /></AuthLayout>} />
        <Route path="/emailConfirmation" element={<AuthLayout variant="verify"><VerifyEmailPage /></AuthLayout>} />
        <Route path="/auth/emailConfirmation" element={<AuthLayout variant="verify"><ConfirmEmailPage /></AuthLayout>} />
        <Route path="/confirm-email" element={<AuthLayout variant="verify"><ConfirmEmailPage /></AuthLayout>} />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
      </Routes>
    </>
  );
};

export default MainRouter;
````

## File: src/features/admin/components/RoleDialog.tsx
````typescript
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  createRoleSchema,
  updateRoleSchema,
  type CreateRoleFormData,
  type UpdateRoleFormData,
} from "@/features/admin/schemas/adminSchemas";
import { useCreateRole, useUpdateRole, useGetRoleById } from "@/features/admin/hooks/useAdmin";
import type { RoleListItem } from "@/features/admin/types/admin";

interface RoleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingRole: RoleListItem | null;
  permissions: string[];
}

export const RoleDialog: React.FC<RoleDialogProps> = ({
  isOpen,
  onClose,
  editingRole,
  permissions,
}) => {
  const createRole = useCreateRole();
  const updateRole = useUpdateRole();
  
  // Only fetch details if editing
  const { data: roleDetails, isLoading: detailsLoading } = useGetRoleById(editingRole?.id || "");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateRoleFormData | UpdateRoleFormData>({
    resolver: zodResolver(editingRole ? updateRoleSchema : createRoleSchema),
    defaultValues: {
      name: "",
      permissions: [],
    },
  });

  useEffect(() => {
    if (editingRole && roleDetails) {
      reset({
        name: roleDetails.name,
        permissions: roleDetails.permissions,
      });
    } else if (!editingRole) {
      reset({
        name: "",
        permissions: [],
      });
    }
  }, [editingRole, roleDetails, reset, isOpen]);

  const onSubmit = (data: CreateRoleFormData | UpdateRoleFormData) => {
    if (editingRole) {
      updateRole.mutate(
        { id: editingRole.id, data },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createRole.mutate(data as CreateRoleFormData, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const selectedPermissions = watch("permissions") || [];

  // Group permissions for better UI
  const groupedPermissions = useMemo(() => {
    const groups: Record<string, string[]> = {
      "Users": permissions.filter(p => p.startsWith("users:")),
      "Roles": permissions.filter(p => p.startsWith("roles:")),
      "Profile": permissions.filter(p => p.startsWith("profile:")),
      "Jobs": permissions.filter(p => p.startsWith("jobs:")),
      "Membership": permissions.filter(p => p.startsWith("membership")),
    };
    
    // Add any others
    const categorized = Object.values(groups).flat();
    const other = permissions.filter(p => !categorized.includes(p));
    if (other.length > 0) groups["Other"] = other;
    
    return groups;
  }, [permissions]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{editingRole ? `Edit Role: ${editingRole.name}` : "Create New Role"}</DialogTitle>
        </DialogHeader>
        
        {editingRole && detailsLoading ? (
          <div className="py-20 text-center">Loading role details...</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4 overflow-y-auto pr-2">
            <div className="space-y-2">
              <Label htmlFor="roleName">Role Name</Label>
              <Input
                id="roleName"
                placeholder="e.g. Editor, Moderator"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-xs text-destructive font-medium">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold">Permissions</Label>
                <span className="text-xs text-muted-foreground">
                  {selectedPermissions.length} selected
                </span>
              </div>
              
              <div className="space-y-6">
                {Object.entries(groupedPermissions).map(([group, groupPermissions]) => (
                  groupPermissions.length > 0 && (
                    <div key={group} className="space-y-3">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                        {group}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {groupPermissions.map((permission) => (
                          <div
                            key={permission}
                            className={`flex items-center space-x-3 p-2 rounded-md border transition-colors ${
                              selectedPermissions.includes(permission)
                                ? "bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/30"
                                : "bg-card border-border hover:bg-muted/50"
                            }`}
                          >
                            <Checkbox
                              id={`perm-${permission}`}
                              checked={selectedPermissions.includes(permission)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setValue("permissions", [...selectedPermissions, permission]);
                                } else {
                                  setValue("permissions", selectedPermissions.filter((p) => p !== permission));
                                }
                              }}
                            />
                            <Label
                              htmlFor={`perm-${permission}`}
                              className="text-sm font-medium cursor-pointer flex-1"
                            >
                              {permission.replace(/:/g, " ")}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
              {errors.permissions && (
                <p className="text-xs text-destructive font-medium">{errors.permissions.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-2 pt-4 sticky bottom-0 bg-background py-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createRole.isPending || updateRole.isPending}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {createRole.isPending || updateRole.isPending
                  ? "Saving..."
                  : editingRole
                  ? "Update Role"
                  : "Create Role"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
````

## File: src/features/admin/components/RoleManagement.tsx
````typescript
import React from "react";
import { Edit, Eye, EyeOff, Plus, Search } from "lucide-react";
import type { RoleListItem } from "@/features/admin/types/admin";
import { useToggleRoleStatus } from "@/features/admin/hooks/useAdmin";
import { inlineStyles } from "@/lib/styleConstants";

interface RoleManagementProps {
  roles: RoleListItem[];
  onEditRole: (role: RoleListItem) => void;
  onAddRole: () => void;
}

const PAGE_SIZE = 10;

export const RoleManagement: React.FC<RoleManagementProps> = ({
  roles,
  onEditRole,
  onAddRole,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const toggleRoleStatus = useToggleRoleStatus();

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = filteredRoles.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;
  const paginatedRoles = filteredRoles.slice(startIndex, startIndex + PAGE_SIZE);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <div style={inlineStyles.searchWrapper}>
          <Search style={inlineStyles.searchIcon} aria-hidden="true" />
          <input
            type="text"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={inlineStyles.searchInput}
          />
        </div>

        {/* Add Role button */}
        <button
          onClick={onAddRole}
          style={inlineStyles.addButton}
          aria-label="Add new role"
        >
          <Plus style={{ width: "14px", height: "14px" }} aria-hidden="true" />
          Add Role
        </button>
      </div>

      {/* Table card */}
      <div style={inlineStyles.tableContainer}>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13.5px",
            }}
          >
            <thead>
              <tr style={inlineStyles.tableHeaderRow}>
                {["ROLE NAME", "STATUS", "ACTIONS"].map((col) => (
                  <th
                    key={col}
                    style={col === "ACTIONS" ? inlineStyles.tableHeaderCellRight : inlineStyles.tableHeaderCell}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedRoles.length === 0 ? (
                <tr>
                  <td colSpan={3} style={inlineStyles.tableEmptyCell}>
                    No roles found.
                  </td>
                </tr>
              ) : (
                paginatedRoles.map((role) => (
                  <tr
                    key={role.id}
                    className="interactive-row"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onEditRole(role);
                      }
                    }}
                  >
                    {/* Role Name */}
                    <td
                      style={{
                        padding: "12px 16px",
                        fontWeight: 500,
                        color: "var(--foreground)",
                      }}
                    >
                      {role.name}
                    </td>

                    {/* Status */}
                    <td style={inlineStyles.tableCell}>
                      {role.isDeleted ? (
                        <span className="badge-error" role="status">
                          <span className="status-dot status-dot-error" aria-hidden="true" />
                          Inactive
                        </span>
                      ) : (
                        <span className="badge-success" role="status">
                          <span className="status-dot status-dot-success" aria-hidden="true" />
                          Active
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td style={{ padding: "12px 16px", textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "2px",
                        }}
                      >
                        {/* Edit */}
                        <button
                          onClick={() => onEditRole(role)}
                          title="Edit role"
                          aria-label="Edit role"
                          className="icon-btn icon-btn-primary"
                        >
                          <Edit style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                        </button>

                        {/* Toggle Status */}
                        <button
                          onClick={() => toggleRoleStatus.mutate(role.id)}
                          title={role.isDeleted ? "Activate Role" : "Deactivate Role"}
                          aria-label={role.isDeleted ? "Activate role" : "Deactivate role"}
                          className={`icon-btn ${role.isDeleted ? "icon-btn-success" : "icon-btn-warning"}`}
                        >
                          {role.isDeleted ? (
                            <Eye style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                          ) : (
                            <EyeOff style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div style={inlineStyles.paginationBar}>
          <span style={inlineStyles.paginationText}>
            {totalEntries === 0
              ? "No entries"
              : `Showing ${startIndex + 1} to ${Math.min(
                  startIndex + PAGE_SIZE,
                  totalEntries
                )} of ${totalEntries.toLocaleString()} entries`}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              style={safeCurrentPage === 1 ? inlineStyles.paginationBtnDisabled : inlineStyles.paginationBtn}
              aria-label="Previous page"
            >
              Prev
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={page === safeCurrentPage ? inlineStyles.paginationBtnActive : inlineStyles.paginationBtn}
                aria-label={`Go to page ${page}`}
                aria-current={page === safeCurrentPage ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              style={safeCurrentPage === totalPages ? inlineStyles.paginationBtnDisabled : inlineStyles.paginationBtn}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/admin/components/StatsCards.tsx
````typescript
import React from "react";
import { Users, ClipboardList, UserCheck } from "lucide-react";

interface StatsCardsProps {
  totalUsers: number;
  totalRoles: number;
  activeRoles: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({
  totalUsers,
  totalRoles,
  activeRoles,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Total Users */}
      <div className="data-card p-5 flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
            TOTAL USERS
          </span>
          <span className="text-3xl font-bold text-foreground leading-tight">
            {totalUsers.toLocaleString()}
          </span>
          <span className="text-xs text-success flex items-center gap-1">
            <span className="text-sm">↑</span>
            <span className="font-semibold">12%</span>
            <span className="text-muted-foreground font-normal"> vs last month</span>
          </span>
        </div>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Users className="w-4.5 h-4.5 text-primary" />
        </div>
      </div>

      {/* Total Roles */}
      <div className="data-card p-5 flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
            TOTAL ROLES
          </span>
          <span className="text-3xl font-bold text-foreground leading-tight">
            {totalRoles}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="font-semibold">—0%</span>
            <span className="font-normal"> vs last month</span>
          </span>
        </div>
        <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
          <ClipboardList className="w-4.5 h-4.5 text-success" />
        </div>
      </div>

      {/* Active Roles */}
      <div className="data-card p-5 flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
            ACTIVE ROLES
          </span>
          <span className="text-3xl font-bold text-foreground leading-tight">
            {activeRoles}
          </span>
          <span className="text-xs text-success flex items-center gap-1">
            <span className="text-sm">↑</span>
            <span className="font-semibold">2</span>
            <span className="text-muted-foreground font-normal"> added recently</span>
          </span>
        </div>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <UserCheck className="w-4.5 h-4.5 text-primary" />
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/admin/components/UserDialog.tsx
````typescript
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  createUserSchema,
  updateUserSchema,
  type CreateUserFormData,
  type UpdateUserFormData,
} from "@/features/admin/schemas/adminSchemas";
import { useCreateAdminUser, useUpdateAdminUser } from "@/features/admin/hooks/useAdmin";
import type { AdminUserListItem, RoleListItem } from "@/features/admin/types/admin";

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingUser: AdminUserListItem | null;
  roles: RoleListItem[];
}

export const UserDialog: React.FC<UserDialogProps> = ({
  isOpen,
  onClose,
  editingUser,
  roles,
}) => {
  const createUser = useCreateAdminUser();
  const updateUser = useUpdateAdminUser();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateUserFormData | UpdateUserFormData>({
    resolver: zodResolver(editingUser ? updateUserSchema : createUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roles: [],
    },
  });

  useEffect(() => {
    if (editingUser) {
      reset({
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        email: editingUser.email,
        password: "",
        roles: editingUser.roles,
      });
    } else {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        roles: [],
      });
    }
  }, [editingUser, reset, isOpen]);

  const onSubmit = (data: CreateUserFormData | UpdateUserFormData) => {
    if (editingUser) {
      updateUser.mutate(
        { id: editingUser.id, data: data as UpdateUserFormData },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createUser.mutate(data as CreateUserFormData, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const selectedRoles = watch("roles") || [];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{editingUser ? "Edit User" : "Add New User"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName")}
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive font-medium">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName")}
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <p className="text-xs text-destructive font-medium">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Password {editingUser && <span className="text-muted-foreground font-normal">(leave blank to keep current)</span>}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={errors.password ? "border-destructive" : ""}
            />
            {errors.password && (
              <p className="text-xs text-destructive font-medium">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>Assign Roles</Label>
            <div className="grid grid-cols-2 gap-3 p-3 border border-border rounded-lg bg-muted/30">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`role-${role.id}`}
                    checked={selectedRoles.includes(role.name)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("roles", [...selectedRoles, role.name]);
                      } else {
                        setValue("roles", selectedRoles.filter((r) => r !== role.name));
                      }
                    }}
                  />
                  <Label
                    htmlFor={`role-${role.id}`}
                    className="text-sm font-normal cursor-pointer text-foreground"
                  >
                    {role.name}
                  </Label>
                </div>
              ))}
            </div>
            {errors.roles && (
              <p className="text-xs text-destructive font-medium">{errors.roles.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createUser.isPending || updateUser.isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {createUser.isPending || updateUser.isPending
                ? "Saving..."
                : editingUser
                ? "Update User"
                : "Create User"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
````

## File: src/features/admin/components/UserManagement.tsx
````typescript
import React from "react";
import { Edit, Eye, EyeOff, Unlock, Search, Filter, UserPlus } from "lucide-react";
import type { AdminUserListItem } from "@/features/admin/types/admin";
import { useToggleUserStatus, useUnlockUser } from "@/features/admin/hooks/useAdmin";
import { inlineStyles } from "@/lib/styleConstants";

interface UserManagementProps {
  users: AdminUserListItem[];
  onEditUser: (user: AdminUserListItem) => void;
  onAddUser: () => void;
}

// INTENTIONAL: Categorical hex colors for visual user distinction.
// These are not dark-mode targets. See migration report exceptions.
const getAvatarInfo = (firstName: string, lastName: string) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  const colors = [
    { bg: "#dbeafe", text: "#1d4ed8" },
    { bg: "#dcfce7", text: "#15803d" },
    { bg: "#fce7f3", text: "#be185d" },
    { bg: "#fef3c7", text: "#b45309" },
    { bg: "#ede9fe", text: "#7c3aed" },
    { bg: "#fee2e2", text: "#dc2626" },
    { bg: "#cffafe", text: "#0e7490" },
  ];
  const index =
    (firstName.charCodeAt(0) + lastName.charCodeAt(0)) % colors.length;
  return { initials, ...colors[index] };
};

const StatusBadge: React.FC<{ isDisabled: boolean; isLocked?: boolean }> = ({
  isDisabled,
  isLocked,
}) => {
  if (isLocked) {
    return (
      <span className="badge-warning" role="status">
        <span className="status-dot status-dot-warning" aria-hidden="true" />
        Locked
      </span>
    );
  }
  if (isDisabled) {
    return (
      <span className="badge-error" role="status">
        <span className="status-dot status-dot-error" aria-hidden="true" />
        Disabled
      </span>
    );
  }
  return (
    <span className="badge-success" role="status">
      <span className="status-dot status-dot-success" aria-hidden="true" />
      Active
    </span>
  );
};

const RoleBadge: React.FC<{ role: string }> = ({ role }) => (
  <span className="badge-neutral">{role}</span>
);

const PAGE_SIZE = 10;

export const UserManagement: React.FC<UserManagementProps> = ({
  users,
  onEditUser,
  onAddUser,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const toggleUserStatus = useToggleUserStatus();
  const unlockUser = useUnlockUser();

  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = filteredUsers.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + PAGE_SIZE);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      pages.push(i);
    }
    return pages;
  };

  // Heuristic: if a user is disabled and has no roles — treat as locked
  const isLockedUser = (user: AdminUserListItem) =>
    user.isDisabled && user.roles.length === 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <div style={inlineStyles.searchWrapper}>
          <Search style={inlineStyles.searchIcon} aria-hidden="true" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={inlineStyles.searchInput}
          />
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Filter button */}
          <button style={inlineStyles.filterButton}>
            <Filter style={{ width: "14px", height: "14px" }} aria-hidden="true" />
            Filter
          </button>

          {/* Add User button */}
          <button onClick={onAddUser} style={inlineStyles.addButton} aria-label="Add new user">
            <UserPlus style={{ width: "14px", height: "14px" }} aria-hidden="true" />
            Add User
          </button>
        </div>
      </div>

      {/* Table card */}
      <div style={inlineStyles.tableContainer}>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13.5px",
            }}
          >
            <thead>
              <tr style={inlineStyles.tableHeaderRow}>
                {[
                  "NAME",
                  "EMAIL",
                  "ROLES",
                  "STATUS",
                  "LAST ACTIVE",
                  "ACTIONS",
                ].map((col) => (
                  <th
                    key={col}
                    style={col === "ACTIONS" ? inlineStyles.tableHeaderCellRight : inlineStyles.tableHeaderCell}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} style={inlineStyles.tableEmptyCell}>
                    No users found.
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user, idx) => {
                  const avatar = getAvatarInfo(user.firstName, user.lastName);
                  const locked = isLockedUser(user);
                  const lastActiveLabels = [
                    "2 hours ago",
                    "Yesterday",
                    "3 days ago",
                    "1 week ago",
                    "Just now",
                  ];
                  const lastActive =
                    lastActiveLabels[idx % lastActiveLabels.length];

                  return (
                    <tr
                      key={user.id}
                      className="interactive-row"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onEditUser(user);
                        }
                      }}
                    >
                      {/* Name + Avatar */}
                      <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              background: avatar.bg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              fontWeight: 700,
                              color: avatar.text,
                              flexShrink: 0,
                              border: "1.5px solid rgba(0,0,0,0.06)",
                            }}
                          >
                            {avatar.initials}
                          </div>
                          <span style={{ fontWeight: 500, color: "var(--foreground)" }}>
                            {user.firstName} {user.lastName}
                          </span>
                        </div>
                      </td>

                      {/* Email */}
                      <td style={inlineStyles.tableCellMuted}>
                        {user.email}
                      </td>

                      {/* Roles */}
                      <td style={inlineStyles.tableCell}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                          {user.roles.length > 0 ? (
                            user.roles.map((role) => (
                              <RoleBadge key={role} role={role} />
                            ))
                          ) : (
                            <span style={{ color: "var(--border-strong)", fontSize: "12px" }}>
                              —
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Status */}
                      <td style={inlineStyles.tableCell}>
                        <StatusBadge
                          isDisabled={user.isDisabled}
                          isLocked={locked}
                        />
                      </td>

                      {/* Last Active */}
                      <td style={inlineStyles.tableCellMuted}>
                        {lastActive}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "12px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                          {/* Edit */}
                          <button
                            onClick={() => onEditUser(user)}
                            title="Edit user"
                            aria-label="Edit user"
                            className="icon-btn icon-btn-primary"
                          >
                            <Edit style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                          </button>

                          {/* Toggle Status */}
                          <button
                            onClick={() => toggleUserStatus.mutate(user.id)}
                            title={user.isDisabled ? "Enable User" : "Disable User"}
                            aria-label={user.isDisabled ? "Enable user" : "Disable user"}
                            className={`icon-btn ${user.isDisabled ? "icon-btn-success" : "icon-btn-warning"}`}
                          >
                            {user.isDisabled ? (
                              <Eye style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                            ) : (
                              <EyeOff style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                            )}
                          </button>

                          {/* Unlock (only when disabled) */}
                          {user.isDisabled && (
                            <button
                              onClick={() => unlockUser.mutate(user.id)}
                              title="Unlock User"
                              aria-label="Unlock user"
                              className="icon-btn icon-btn-purple"
                            >
                              <Unlock style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div style={inlineStyles.paginationBar}>
          <span style={inlineStyles.paginationText}>
            {totalEntries === 0
              ? "No entries"
              : `Showing ${startIndex + 1} to ${Math.min(
                  startIndex + PAGE_SIZE,
                  totalEntries
                )} of ${totalEntries.toLocaleString()} entries`}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              style={safeCurrentPage === 1 ? inlineStyles.paginationBtnDisabled : inlineStyles.paginationBtn}
              aria-label="Previous page"
            >
              Prev
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={page === safeCurrentPage ? inlineStyles.paginationBtnActive : inlineStyles.paginationBtn}
                aria-label={`Go to page ${page}`}
                aria-current={page === safeCurrentPage ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              style={safeCurrentPage === totalPages ? inlineStyles.paginationBtnDisabled : inlineStyles.paginationBtn}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/admin/hooks/useAdmin.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { adminService } from "../services/adminService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  CreateRoleRequest,
  UpdateRoleRequest,
  CreateUserRequest,
  UpdateUserRequest,
} from "@/features/admin/types/admin";

// Roles hooks
export const useGetRoles = () => {
  return useQuery({
    queryKey: ["admin-roles"],
    queryFn: ({ signal }) => adminService.getRoles(signal),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetRoleById = (id: string) => {
  return useQuery({
    queryKey: ["admin-roles", id],
    queryFn: ({ signal }) => adminService.getRoleById(id, signal),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetPermissions = () => {
  return useQuery({
    queryKey: ["admin-permissions"],
    queryFn: ({ signal }) => adminService.getPermissions(signal),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCreateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateRoleRequest) => adminService.createRole(data),
    onSuccess: () => {
      toast.success("Role created successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateRoleRequest }) =>
      adminService.updateRole(id, data),
    onSuccess: () => {
      toast.success("Role updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useToggleRoleStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => adminService.toggleRoleStatus(id),
    onSuccess: () => {
      toast.success("Role status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

// Users hooks
export const useGetAdminUsers = () => {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: ({ signal }) => adminService.getUsers(signal),
    staleTime: 3 * 60 * 1000, // 3 minutes
  });
};

export const useCreateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => adminService.createUser(data),
    onSuccess: () => {
      toast.success("User created successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useUpdateAdminUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserRequest }) =>
      adminService.updateUser(id, data),
    onSuccess: () => {
      toast.success("User updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useToggleUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => adminService.toggleUserStatus(id),
    onSuccess: () => {
      toast.success("User status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useUnlockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => adminService.unlockUser(id),
    onSuccess: () => {
      toast.success("User unlocked successfully!");
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};
````

## File: src/features/admin/pages/AdminDashboard.tsx
````typescript
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePermissions } from "@/features/auth/hooks/usePermissions";
import {
  useGetAdminUsers,
  useGetRoles,
  useGetPermissions,
} from "@/features/admin/hooks/useAdmin";
import { StatsCards } from "@/features/admin/components/StatsCards";
import { UserManagement } from "@/features/admin/components/UserManagement";
import { RoleManagement } from "@/features/admin/components/RoleManagement";
import { UserDialog } from "@/features/admin/components/UserDialog";
import { RoleDialog } from "@/features/admin/components/RoleDialog";
import type { RoleListItem, AdminUserListItem } from "@/features/admin/types/admin";
import { Search, Bell } from "lucide-react";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { isAdmin } = usePermissions();
  const [activeTab, setActiveTab] = useState("users");

  // Dialog States
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUserListItem | null>(null);
  const [editingRole, setEditingRole] = useState<RoleListItem | null>(null);

  // Redirect non-admin users
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  // Data fetching
  const { data: users = [], isLoading: usersLoading } = useGetAdminUsers();
  const { data: roles = [], isLoading: rolesLoading } = useGetRoles();
  const { data: permissions = [] } = useGetPermissions();

  // Handlers
  const handleEditUser = (user: AdminUserListItem) => {
    setEditingUser(user);
    setIsUserDialogOpen(true);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsUserDialogOpen(true);
  };

  const handleEditRole = (role: RoleListItem) => {
    setEditingRole(role);
    setIsRoleDialogOpen(true);
  };

  const handleAddRole = () => {
    setEditingRole(null);
    setIsRoleDialogOpen(true);
  };

  if (usersLoading || rolesLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "3px solid var(--border)",
            borderTopColor: "var(--primary)",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const totalUsers = users.length;
  const totalRoles = roles.length;
  const activeRoles = roles.filter((role: RoleListItem) => !role.isDeleted).length;

  const tabs = [
    { key: "users", label: "User Management" },
    { key: "roles", label: "Role Management" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-8 pb-12 font-sans bg-background text-foreground">
      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Left: Title + description */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight m-0">
            Admin Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage users, roles, and system configurations securely.
          </p>
        </div>

        {/* Right: Search + Bell + Avatar */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Global search */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-full sm:w-48 pl-9 pr-4 border border-border rounded-lg text-sm text-foreground bg-card outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Notification bell */}
          <div className="relative">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-card text-foreground cursor-pointer hover:bg-accent transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-destructive border-2 border-card" />
          </div>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground text-sm font-bold cursor-pointer shrink-0">
            A
          </div>
        </div>
      </div>

      {/* ── Stats Cards ── */}
      <StatsCards
        totalUsers={totalUsers}
        totalRoles={totalRoles}
        activeRoles={activeRoles}
      />

      {/* ── Tabs ── */}
      <div className="mb-5 overflow-x-auto scrollbar-hide">
        <div className="flex border-b border-border min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-1 py-2.5 mr-6 text-sm font-medium transition-all relative
                  ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tab Content ── */}
      {activeTab === "users" && (
        <UserManagement
          users={users}
          onEditUser={handleEditUser}
          onAddUser={handleAddUser}
        />
      )}

      {activeTab === "roles" && (
        <RoleManagement
          roles={roles}
          onEditRole={handleEditRole}
          onAddRole={handleAddRole}
        />
      )}

      {/* Dialogs */}
      <UserDialog
        isOpen={isUserDialogOpen}
        onClose={() => setIsUserDialogOpen(false)}
        editingUser={editingUser}
        roles={roles}
      />

      <RoleDialog
        isOpen={isRoleDialogOpen}
        onClose={() => setIsRoleDialogOpen(false)}
        editingRole={editingRole}
        permissions={permissions}
      />
    </div>
  );
};

export default AdminDashboard;
````

## File: src/features/admin/schemas/adminSchemas.ts
````typescript
import { z } from "zod";

export const createRoleSchema = z.object({
  name: z.string().min(2, "Role name must be at least 2 characters").max(50, "Role name must be at most 50 characters"),
  permissions: z.array(z.string()).min(1, "At least one permission is required"),
});

export const updateRoleSchema = z.object({
  name: z.string().min(2, "Role name must be at least 2 characters").max(50, "Role name must be at most 50 characters"),
  permissions: z.array(z.string()).min(1, "At least one permission is required"),
});

export const createUserSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters").max(100, "First name must be at most 100 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(100, "Last name must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
  roles: z.array(z.string()).min(1, "At least one role is required"),
});

export const updateUserSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters").max(100, "First name must be at most 100 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(100, "Last name must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
    .optional(),
  roles: z.array(z.string()).min(1, "At least one role is required"),
});

export type CreateRoleFormData = z.infer<typeof createRoleSchema>;
export type UpdateRoleFormData = z.infer<typeof updateRoleSchema>;
export type CreateUserFormData = z.infer<typeof createUserSchema>;
export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
````

## File: src/features/admin/services/adminService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  RoleListItem,
  RoleDetails,
  CreateRoleRequest,
  UpdateRoleRequest,
  AdminUserListItem,
  CreateUserRequest,
  UpdateUserRequest,
} from "../types/admin";


// Roles API endpoints
export const adminService = {
  // Roles
  async getRoles(signal?: AbortSignal): Promise<RoleListItem[]> {
    const response = await apiClient.get<any>("/Roles", { signal });
    return response.value !== undefined ? response.value : response;
  },

  async getRoleById(id: string, signal?: AbortSignal): Promise<RoleDetails> {
    const response = await apiClient.get<any>(`/Roles/${id}`, { signal });
    return response.value !== undefined ? response.value : response;
  },

  async getPermissions(signal?: AbortSignal): Promise<string[]> {
    const response = await apiClient.get<any>("/Roles/permissions", { signal });
    return response.value !== undefined ? response.value : response;
  },

  async createRole(data: CreateRoleRequest): Promise<RoleDetails> {
    const response = await apiClient.post<RoleDetails>("/Roles", data);
    return response;
  },

  async updateRole(id: string, data: UpdateRoleRequest): Promise<void> {
    await apiClient.put(`/Roles/${id}`, data);
  },

  async toggleRoleStatus(id: string): Promise<void> {
    await apiClient.put(`/Roles/${id}/toggle-status`);
  },

  // Users
  async getUsers(signal?: AbortSignal): Promise<AdminUserListItem[]> {
    const response = await apiClient.get<any>("/Users", { signal });
    return response.value !== undefined ? response.value : response;
  },

  async getUserById(id: string): Promise<AdminUserListItem> {
    const response = await apiClient.get<any>(`/Users/${id}`);
    return response.value !== undefined ? response.value : response;
  },

  async createUser(data: CreateUserRequest): Promise<AdminUserListItem> {
    const response = await apiClient.post<AdminUserListItem>("/Users", data);
    return response;
  },

  async updateUser(id: string, data: UpdateUserRequest): Promise<void> {
    await apiClient.put(`/Users/${id}`, data);
  },

  async toggleUserStatus(id: string): Promise<void> {
    await apiClient.put(`/Users/${id}/toggle-status`);
  },

  async unlockUser(id: string): Promise<void> {
    await apiClient.put(`/Users/${id}/unlock`);
  },
};
````

## File: src/features/admin/types/admin.ts
````typescript
export interface RoleListItem {
  id: string;
  name: string;
  isDeleted: boolean;
}

export interface RoleDetails extends RoleListItem {
  permissions: string[];
}

export interface CreateRoleRequest {
  name: string;
  permissions: string[];
}

export interface UpdateRoleRequest {
  name: string;
  permissions: string[];
}

export interface AdminUserListItem {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isDisabled: boolean;
  roles: string[];
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  roles: string[];
}
````

## File: src/features/ai/components/AiHeroSection.tsx
````typescript
import React from "react";
import { BotMessageSquare, Download, Share2 } from "lucide-react";

export const AiHeroSection: React.FC = () => {
  return (
    <div className="mb-6 sm:mb-8">
      {/* Live badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-[11px] sm:text-[11.5px] font-semibold text-primary mb-2.5 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <BotMessageSquare className="w-3 h-3 sm:w-[13px] sm:h-[13px]" />
        AI CAREER ASSISTANT
      </div>

      {/* Title row */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
        <div className="max-w-[480px]">
          <h1 className="text-2xl sm:text-[28px] font-extrabold text-foreground mb-1.5 tracking-tight leading-tight">
            Career Optimization Engine
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Leverage AI to align your profile with market demands and discover
            your perfect roles.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 h-9 px-3.5 border border-border rounded-lg bg-card text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-colors">
            <Download className="w-3 h-3 sm:w-[13px] sm:h-[13px]" />
            <span className="whitespace-nowrap">Export PDF Report</span>
          </button>
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 h-9 px-3.5 border border-border rounded-lg bg-card text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-colors">
            <Share2 className="w-3 h-3 sm:w-[13px] sm:h-[13px]" />
            <span className="whitespace-nowrap">Share with Recruiter</span>
          </button>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/ai/components/CvAnalysisTab.tsx
````typescript
import React, { useState } from "react";
import { useAnalyseCV } from "@/features/ai/hooks/useAi";
import {
  Upload,
  Download,
  Loader2,
  Zap,
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertTriangle,
  MoreHorizontal,
  FileText,
  BarChart3,
} from "lucide-react";

interface CvAnalysisTabProps {
  hasResume: boolean | undefined;
}

/* ── Circular Score Ring ── */
const RoleScoreRing: React.FC<{ score: number; max?: number }> = ({ score, max = 100 }) => {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const filled = (score / max) * circ;
  return (
    <div className="relative w-[110px] h-[110px] mx-auto mb-2">
      <svg width="110" height="110" viewBox="0 0 110 110" className="rotate-[-90deg]">
        <circle cx="55" cy="55" r={r} fill="none" stroke="currentColor" className="text-border" strokeWidth="7" />
        <circle cx="55" cy="55" r={r} fill="none" stroke="currentColor" className="text-primary" strokeWidth="7"
          strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[26px] font-extrabold text-foreground leading-none">{score}</span>
        <span className="text-[11px] text-muted-foreground">/{max}</span>
      </div>
    </div>
  );
};

const SkillChip: React.FC<{ label: string; level?: string; color: string }> = ({ label, color }) => (
  <span className={`
    inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-medium
    ${color === "blue" ? "bg-primary/10 border-primary/20 text-primary" : 
      color === "green" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" : 
      "bg-muted border-border text-muted-foreground"}
  `}>
    {label}
    <span className="text-[10px] opacity-70">◆</span>
  </span>
);

export const CvAnalysisTab: React.FC<CvAnalysisTabProps> = ({ hasResume: _hasResume }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: 'Quantify performance improvements (e.g., "Reduced load time by 6%")', checked: true },
    { id: 2, text: "Highlight mentoring or leadership experience explicitly. Crucial for transitioning to Staff/Lead roles.", checked: false },
    { id: 3, text: "Add specific architectural decisions to project descriptions. Move beyond just listing technologies used.", checked: false },
  ]);

  const analyseCVMutation = useAnalyseCV();

  const validateFile = (file: File): boolean => {
    const allowedTypes = [".pdf", ".doc", ".docx"];
    const maxSize = 5 * 1024 * 1024;
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) { alert("Please select a PDF, DOC, or DOCX file"); return false; }
    if (file.size > maxSize) { alert("File size must be less than 5MB"); return false; }
    return true;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) { setSelectedFile(file); }
    else { setSelectedFile(null); event.target.value = ""; }
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) setSelectedFile(file);
  };

  const handleAnalyseCV = () => {
    if (selectedFile) {
      analyseCVMutation.mutate(selectedFile, { onSuccess: (result) => setAnalysisResult(result) });
    }
  };

  const handleDownloadAnalysis = () => {
    const blob = new Blob([analysisResult], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "cv-analysis.txt"; a.click();
    window.URL.revokeObjectURL(url);
  };

  const parseAnalysisText = (text: string) => {
    const sections: { [key: string]: string } = {};
    const lines = text.split("\n");
    let currentSection = "", currentContent = "";
    for (const line of lines) {
      const t = line.trim();
      if (t.endsWith(":") && !t.startsWith("*") && !t.startsWith("-")) {
        if (currentSection) sections[currentSection] = currentContent.trim();
        currentSection = t.replace(/:$/, ""); currentContent = "";
      } else { currentContent += line + "\n"; }
    }
    if (currentSection) sections[currentSection] = currentContent.trim();
    return sections;
  };

  const toggleChecklist = (id: number) => {
    setChecklistItems((prev) => prev.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const cardClassName = "bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm";
  const sectionTitleClassName = "text-[14.5px] font-bold text-foreground mb-3.5";

  return (
    <div className="flex flex-col gap-5">

      {/* ── Upload card ── */}
      <div className={cardClassName}>
        <div
          onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
          onClick={() => document.getElementById("cv-upload")?.click()}
          className={`
            border-2 border-dashed rounded-lg p-7 sm:p-10 text-center cursor-pointer mb-3.5 transition-all
            ${isDragging ? "border-primary bg-primary/10" : "border-border bg-muted/50 hover:bg-muted/80"}
          `}
        >
          <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileSelect} className="hidden" />
          <Upload className="w-7 h-7 text-muted-foreground/60 mx-auto mb-2.5" />
          <p className="text-sm font-semibold text-foreground mb-1">
            {selectedFile ? selectedFile.name : "Select or Drop CV"}
          </p>
          <p className="text-xs text-muted-foreground/80">
            {selectedFile ? "Click or drag to replace" : "Supports PDF, DOC, DOCX up to 5MB"}
          </p>
        </div>

        <button
          onClick={handleAnalyseCV}
          disabled={!selectedFile || analyseCVMutation.isPending}
          className={`
            w-full h-10 border-none rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors
            ${!selectedFile || analyseCVMutation.isPending ? "bg-primary/50 cursor-not-allowed text-primary-foreground/75" : "bg-primary hover:bg-primary/90 text-primary-foreground"}
          `}
        >
          {analyseCVMutation.isPending ? (
            <><Loader2 className="w-[15px] h-[15px] animate-spin" /> Running Deep Analysis...</>
          ) : (
            <><Zap className="w-3.5 h-3.5" /> Launch AI Analysis</>
          )}
        </button>
      </div>

      {/* ── Results (shown after analysis) ── */}
      {analysisResult && (
        <>
          {/* Top 3 metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {/* Role Alignment Score */}
            <div className={cardClassName}>
              <p className="text-xs font-semibold text-muted-foreground mb-2.5 uppercase tracking-wider">Role Alignment Score</p>
              <RoleScoreRing score={85} />
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Highly aligned for <strong>Senior Frontend Engineer</strong> positions.
              </p>
            </div>

            {/* Market Readiness */}
            <div className={cardClassName}>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Market Readiness</p>
              <div className="flex justify-between text-[11px] text-muted-foreground/80 mb-1.5 font-medium">
                <span>Top 10%</span><span>Applicant Pool</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted mb-4 overflow-hidden">
                <div className="w-[78%] h-full bg-primary rounded-full" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5 items-start">
                  <TrendingUp className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-normal">
                    <strong className="text-foreground">High Demand Profile</strong><br />
                    Your React & TypeScript combination is requested in 78% of target listings.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <BarChart3 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-normal">
                    <strong className="text-foreground">Compensation Tier</strong><br />
                    Positioned for Tier 1 comp packages in the current macro-environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Skill DNA */}
            <div className={`${cardClassName} md:col-span-2 lg:col-span-1`}>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Skill DNA Analysis</p>
              <div className="flex flex-col gap-3.5">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-foreground">Technical</span>
                    <span className="text-[11px] text-primary font-semibold">Expert</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <SkillChip label="React" level="Expert" color="blue" />
                    <SkillChip label="TypeScript" level="Expert" color="blue" />
                    <SkillChip label="Node.js" level="Expert" color="blue" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-foreground">Power Skills</span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Advanced</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <SkillChip label="Mentorship" level="Adv" color="green" />
                    <SkillChip label="System Design" level="Adv" color="green" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-foreground">Tools</span>
                    <span className="text-[11px] text-muted-foreground font-semibold">Proficient</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <SkillChip label="Figma" level="Prof" color="gray" />
                    <SkillChip label="Docker" level="Prof" color="gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths + Strategic Gaps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {/* Strengths */}
            <div className={cardClassName}>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <h3 className={sectionTitleClassName + " mb-0"}>Strengths &amp; Differentiators</h3>
              </div>
              {[
                { n: 1, title: "Frontend Architecture Setup", desc: "Proven ability to design scalable component libraries, reducing technical debt by an estimated 30% based on project history." },
                { n: 2, title: "Performance Optimization", desc: "Consistent track record of improving Core Web Vitals, a highly sought-after metric in top-tier consumer applications." },
                { n: 3, title: "Cross-functional Collaboration", desc: "Strong signals in working alongside Product and Design, indicated by frequent successful feature deliveries." },
              ].map((s) => (
                <div key={s.n} className="flex gap-3 mb-3.5 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[11px] font-bold text-muted-foreground shrink-0 mt-0.5">{s.n}</div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-0.5">{s.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Gaps */}
            <div className={cardClassName}>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className={sectionTitleClassName + " mb-0"}>Strategic Gaps</h3>
              </div>
              {[
                { title: "Cloud Orchestration (Kubernetes)", priority: "High Priority", priority_color: "text-destructive", bg: "bg-destructive/10", link: "Bridge this gap →", desc: "Required for 65% of Principal/Staff level roles." },
                { title: "Advanced CI/CD Pipelines", priority: "Medium Priority", priority_color: "text-amber-600", bg: "bg-amber-500/10", link: "Explore learning modules →", desc: "Expected competency for technical leadership." },
              ].map((g, i) => (
                <div key={i} className="border border-border rounded-lg p-3.5 mb-2.5 last:mb-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-foreground">{g.title}</span>
                    <span className={`px-2 py-0.5 rounded-full ${g.bg} text-[10px] font-bold uppercase tracking-tight ${g.priority_color}`}>{g.priority}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{g.desc}</p>
                  <button className="text-xs text-primary font-semibold hover:underline bg-none border-none p-0 cursor-pointer">{g.link}</button>
                </div>
              ))}
            </div>
          </div>

          {/* Career Trajectory */}
          <div className={cardClassName}>
            <div className="flex justify-between items-center mb-5">
              <h3 className={sectionTitleClassName + " mb-0"}>Career Trajectory: Path to Lead Architect</h3>
              <button className="bg-none border-none cursor-pointer text-muted-foreground/60 hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { active: true, tag: "CURRENT STATE", title: "Senior Frontend Engineer", desc: "Mastery of UI/UX implementation and frontend state management.", chips: [] },
                { active: false, tag: "6-12 MONTHS (AI RECOMMENDATION)", title: "Staff Engineer / Tech Lead", desc: "Focus on system design, cross-team architecture, and mentoring.", chips: ["System Design", "Leadership"] },
                { active: false, tag: "2-3 YEARS", title: "Principal Architect", desc: "Defining technical vision, org-wide standards, and evaluating new tech stacks.", chips: [] },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`
                      w-3.5 h-3.5 rounded-full mt-1 shrink-0
                      ${step.active ? "bg-primary" : "bg-card border-2 border-border"}
                    `} />
                    {i < 2 && <div className="w-[1px] flex-1 bg-border my-1.5" />}
                  </div>
                  <div className={`${i < 2 ? "pb-5" : "pb-0"} flex-1`}>
                    {step.active ? (
                      <div className="bg-muted/50 border border-border rounded-lg p-3.5">
                        <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1">{step.tag}</p>
                        <p className="text-sm font-bold text-foreground mb-1">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-normal">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="pl-1">
                        <p className="text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase mb-1">{step.tag}</p>
                        <p className="text-sm font-bold text-foreground mb-1">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-normal mb-2">{step.desc}</p>
                        {step.chips.length > 0 && (
                          <div className="flex gap-1.5 flex-wrap">
                            {step.chips.map((c) => (
                              <span key={c} className="px-2 py-0.5 rounded bg-muted border border-border text-[11px] font-medium text-muted-foreground">{c}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Optimization Checklist */}
          <div className={cardClassName}>
            <h3 className={sectionTitleClassName}>Resume Optimization Checklist</h3>
            <div className="flex flex-col gap-3 mb-5">
              {checklistItems.map((item) => (
                <label key={item.id} className="flex gap-3 cursor-pointer items-start">
                  <input type="checkbox" checked={item.checked} onChange={() => toggleChecklist(item.id)}
                    className="w-4 h-4 mt-0.5 accent-primary shrink-0" />
                  <div className="flex-1">
                    <p className={`text-sm leading-relaxed ${item.checked ? "font-semibold text-muted-foreground" : "font-medium text-foreground"}`}>{item.text}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="h-9 px-5 border-none rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-colors">
                Auto-Update Resume
              </button>
            </div>
          </div>

          {/* Raw AI sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {Object.entries(parseAnalysisText(analysisResult)).map(([section, content]) => {
              const isStrengths = section.toLowerCase().includes("strength") || section.toLowerCase().includes("good");
              const isWeaknesses = section.toLowerCase().includes("weakness") || section.toLowerCase().includes("improve");
              return (
                <div key={section} className={cardClassName}>
                  <div className="flex items-center gap-2 mb-3">
                    {isStrengths && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                    {isWeaknesses && <XCircle className="w-3.5 h-3.5 text-amber-500" />}
                    {!isStrengths && !isWeaknesses && <FileText className="w-3.5 h-3.5 text-primary" />}
                    <h4 className="text-sm font-bold text-foreground">{section}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
                </div>
              );
            })}
          </div>

          {/* Download button */}
          <div className="flex justify-end mt-2">
            <button onClick={handleDownloadAnalysis} className="inline-flex items-center gap-2 h-9 px-4 border border-border rounded-lg bg-card text-xs font-bold text-foreground hover:bg-muted transition-colors shadow-sm">
              <Download className="w-3.5 h-3.5" />
              Export Report
            </button>
          </div>
        </>
      )}
    </div>
  );
};
````

## File: src/features/ai/components/JobMatchingTab.tsx
````typescript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobMatches } from "@/features/ai/hooks/useAi";
import {
  Briefcase,
  Target,
  BarChart3,
  Search,
  Loader2,
  MapPin,
  Building2,
  DollarSign,
  Zap,
} from "lucide-react";

interface JobMatchingTabProps {
  hasResume: boolean | undefined;
  setActiveTab: (tab: string) => void;
}

/* ── Circular score ring ── */
const ScoreRing: React.FC<{ score: number }> = ({ score }) => {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ;
  const colorClass =
    score >= 80 ? "text-primary stroke-primary" : score >= 60 ? "text-amber-500 stroke-amber-500" : "text-destructive stroke-destructive";
  const label =
    score >= 85
      ? "LIKELY INTERVIEW"
      : score >= 70
      ? "GOOD FIT"
      : "PARTIAL FIT";

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="relative w-[72px] h-[72px]">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          className="-rotate-90"
        >
          <circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            stroke="var(--border)"
            strokeWidth="5"
          />
          <circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            className={colorClass.split(" ")[1]}
            strokeWidth="5"
            strokeDasharray={`${filled} ${circ}`}
            strokeLinecap="round"
          />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center text-sm font-extrabold ${colorClass.split(" ")[0]}`}>
          {score}%
        </div>
      </div>
      <span className="text-[9.5px] font-bold tracking-wider text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
};

export const JobMatchingTab: React.FC<JobMatchingTabProps> = ({
  hasResume,
  setActiveTab,
}) => {
  const navigate = useNavigate();
  const {
    data: jobMatches,
    isLoading: loadingMatches,
    refetch: refetchMatches,
  } = useGetJobMatches();

  const [minScore, setMinScore] = useState(75);
  const [empTypes, setEmpTypes] = useState<string[]>(["Full-time", "Remote"]);
  const [salary, setSalary] = useState("$120k - $150k");

  const handleFindMatches = () => {
    refetchMatches();
  };

  const handleViewJob = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };

  const toggleEmpType = (type: string) => {
    setEmpTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const noResume = (hasResume as boolean | undefined) === false;

  /* ── No-resume gate ── */
  if (noResume) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[320px] border-2 border-dashed border-border rounded-xl bg-muted/30 gap-3 p-12 text-center">
        <Target className="w-10 h-10 text-primary" />
        <h3 className="text-lg font-bold text-foreground">
          CV Required
        </h3>
        <p className="text-sm text-muted-foreground max-w-[360px]">
          Upload your CV to let our AI scan thousands of jobs and find your
          perfect matches instantly.
        </p>
        <button
          onClick={() => setActiveTab("cv-analysis")}
          className="mt-2 h-10 px-5 rounded-lg border-none bg-primary hover:bg-primary/90 text-white text-[13.5px] font-semibold transition-colors"
        >
          Go to CV Analysis to Upload
        </button>
      </div>
    );
  }

  /* ── analytics helpers ── */
  const totalMatches = jobMatches?.length ?? 0;
  const highAlignment = jobMatches?.filter((m) => m.match_percentage >= 85).length ?? 0;
  const avgScore =
    jobMatches && jobMatches.length > 0
      ? Math.round(
          jobMatches.reduce((s, m) => s + m.match_percentage, 0) /
            jobMatches.length
        )
      : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 items-start">
      {/* ── LEFT: Filter Panel ── */}
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm lg:sticky lg:top-24">
        <h3 className="text-[14.5px] font-bold text-foreground mb-4">
          Match Criteria
        </h3>

        {/* Match Score Range */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-foreground mb-2.5">
            Match Score Range
          </p>
          <input
            type="range"
            min={0}
            max={100}
            value={minScore}
            onChange={(e) => setMinScore(Number(e.target.value))}
            className="w-full accent-primary h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-muted-foreground/80 mt-2">
            <span>0%</span>
            <span className="text-primary font-bold">
              {minScore}%+ MIN
            </span>
            <span>100%</span>
          </div>
        </div>

        {/* Employment Type */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-foreground mb-2.5">
            Employment Type
          </p>
          <div className="flex flex-col gap-2">
            {["Full-time", "Contract", "Remote"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2.5 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                <input
                  type="checkbox"
                  checked={empTypes.includes(type)}
                  onChange={() => toggleEmpType(type)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:border-primary"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Salary Expectations */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-foreground mb-2.5">
            Salary Expectations
          </p>
          <select
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full h-9 px-3 border border-border rounded-lg text-sm text-foreground bg-card outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          >
            {[
              "$80k - $100k",
              "$100k - $120k",
              "$120k - $150k",
              "$150k - $180k",
              "$180k+",
            ].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Find Matches button */}
        <button
          onClick={handleFindMatches}
          disabled={loadingMatches}
          className={`
            w-full h-9 border-none rounded-lg text-white text-[13px] font-semibold flex items-center justify-center gap-2 transition-all
            ${loadingMatches ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90 shadow-sm active:transform active:scale-[0.98]"}
          `}
        >
          {loadingMatches ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5" />
              Find Matches
            </>
          )}
        </button>
      </div>

      {/* ── RIGHT: Results ── */}
      <div className="flex flex-col gap-4">
        {/* Analytics cards — only shown when we have data */}
        {jobMatches && jobMatches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Matches Found */}
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest text-muted-foreground uppercase mb-1">MATCHES FOUND</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-foreground">{totalMatches}</span>
                    <span className="text-[11.5px] text-green-500 font-bold">+2 this week</span>
                  </div>
                </div>
                <Briefcase className="w-[18px] h-[18px] text-primary" />
              </div>
            </div>

            {/* High Alignment */}
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest text-muted-foreground uppercase mb-1">HIGH ALIGNMENT</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-foreground">{highAlignment}</span>
                    <span className="text-[11.5px] text-muted-foreground font-medium">Top 10% Match</span>
                  </div>
                </div>
                <Target className="w-[18px] h-[18px] text-primary" />
              </div>
            </div>

            {/* Avg Match Score */}
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest text-muted-foreground uppercase mb-1">AVG MATCH SCORE</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-foreground">{avgScore}%</span>
                    <span className="text-[11.5px] text-green-500 font-bold">Healthy Range</span>
                  </div>
                </div>
                <BarChart3 className="w-[18px] h-[18px] text-emerald-500" />
              </div>
            </div>
          </div>
        )}

        {/* Job match cards */}
        {jobMatches && jobMatches.length > 0 ? (
          jobMatches
            .sort((a, b) => b.match_percentage - a.match_percentage)
            .map((match) => {
              const score = Math.round(match.match_percentage);
              const isLikelyInterview = score >= 88;

              return (
                <div
                  key={match.job_id}
                  className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                  onClick={() => handleViewJob(match.job_id)}
                >
                  {/* Badge row */}
                  {isLikelyInterview && (
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary">
                        <Zap className="w-2.5 h-2.5" />
                        Likely Interview
                      </span>
                    </div>
                  )}

                  {/* Title + Score ring row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {match.job_title}
                      </h3>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          {match.job_title.includes("Frontend")
                            ? "TechNova Inc."
                            : "DesignSystem Corp"}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          Remote
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                          $130k – $160k
                        </span>
                      </div>
                    </div>

                    {/* Circular score */}
                    <div className="self-center sm:self-start">
                      <ScoreRing score={score} />
                    </div>
                  </div>

                  {/* Skills row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 pt-5 border-t border-border/55">
                    {/* Matched skills */}
                    {match.matched_skills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <p className="text-[10.5px] font-bold tracking-widest text-muted-foreground uppercase">MATCHED SKILLS</p>
                          <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            {match.matched_skills.length} Matches
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {match.matched_skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[12px] font-medium text-emerald-600 dark:text-emerald-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Missing skills */}
                    {match.missing_skills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <p className="text-[10.5px] font-bold tracking-widest text-muted-foreground uppercase">SKILLS TO ACQUIRE</p>
                          <span className="px-1.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                            {match.missing_skills.length} Gaps
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {match.missing_skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[12px] font-medium text-amber-600 dark:text-amber-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-end mt-4 pt-4 border-t border-border/55">
                    <button
                      onClick={() => handleViewJob(match.job_id)}
                      className={`
                        h-9 px-5 rounded-lg text-sm font-semibold transition-colors
                        ${score >= 88 ? "bg-primary text-primary-foreground hover:bg-primary/90 border-none" : "bg-card text-foreground border border-border hover:bg-muted"}
                      `}
                    >
                      View Match Details
                    </button>
                  </div>
                </div>
              );
            })
        ) : !loadingMatches ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center min-h-[280px] border-2 border-dashed border-border rounded-xl bg-muted/30 gap-2.5 p-10 text-center">
            <Search className="w-9 h-9 text-muted-foreground/60" />
            <h3 className="text-base font-bold text-foreground">
              No matches yet
            </h3>
            <p className="text-[13.5px] text-muted-foreground max-w-[320px]">
              Click "Find Matches" to scan thousands of roles aligned to your
              profile.
            </p>
          </div>
        ) : null}
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
};
````

## File: src/features/ai/hooks/useAi.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { aiService } from "@/features/ai/services/aiService";
import { extractErrorMessage } from "@/lib/api/errors";
import { authService } from "@/features/auth/services/authService";

export const useCheckHasResume = () => {
  return useQuery({
    queryKey: ["has-resume"],
    queryFn: () => aiService.checkHasResume(),
    staleTime: 2 * 60 * 1000, // 2 minutes
    enabled: authService.isAuthenticated(),
  });
};

export const useAnalyseCV = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cvFile: File) => aiService.analyseCV(cvFile),
    onSuccess: () => {
      toast.success("CV analysed successfully!");
      queryClient.invalidateQueries({ queryKey: ["has-resume"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

export const useGetJobMatches = () => {
  return useQuery({
    queryKey: ["job-matches"],
    queryFn: () => aiService.getJobMatches(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: authService.isAuthenticated(), // Only run if authenticated
  });
};
````

## File: src/features/ai/pages/AiPage.tsx
````typescript
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCheckHasResume } from "@/features/ai/hooks/useAi";
import { Button } from "@/shared/components/ui/button";
import { Loader2, LogIn } from "lucide-react";
import { authService } from "@/features/auth/services/authService";
import { AiHeroSection } from "@/features/ai/components/AiHeroSection";
import { CvAnalysisTab } from "@/features/ai/components/CvAnalysisTab";
import { JobMatchingTab } from "@/features/ai/components/JobMatchingTab";

const AiPage: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("cv-analysis");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "cv-analysis") {
      setActiveTab("cv-analysis");
    } else if (tab === "job-matching") {
      setActiveTab("job-matching");
    }
  }, [searchParams]);

  const { data: hasResume, isLoading: checkingResume } = useCheckHasResume();

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] p-8">
        <div className="bg-card border border-border rounded-2xl p-12 max-w-[420px] w-full text-center shadow-lg">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <LogIn className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-xl font-extrabold text-foreground mb-2">
            Authentication Required
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Please log in or create an account to access the AI Career
            Assistant and unlock your personalized insights.
          </p>
          <div className="flex flex-col gap-2.5">
            <Button
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/register")}
              className="font-semibold"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (checkingResume) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <Loader2 className="w-9 h-9 text-primary animate-spin" />
        <p className="text-sm text-muted-foreground font-medium">
          Waking up the AI...
        </p>
      </div>
    );
  }

  const tabs = [
    { key: "cv-analysis", label: "CV Analysis" },
    { key: "job-matching", label: "Job Matching" },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-14 font-sans">
      <AiHeroSection />

      {/* ── Tab strip ── */}
      <div className="flex border-b border-border mb-6 gap-0 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                py-2.5 mr-7 border-none bg-transparent text-sm transition-all whitespace-nowrap -mb-[1px]
                ${isActive 
                  ? "font-semibold text-primary border-b-2 border-primary" 
                  : "font-medium text-muted-foreground border-b-2 border-transparent"}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Tab content ── */}
      <div className="mt-2">
        {activeTab === "cv-analysis" && (
          <CvAnalysisTab hasResume={hasResume} />
        )}
        {activeTab === "job-matching" && (
          <JobMatchingTab hasResume={hasResume} setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
};

export default AiPage;
````

## File: src/features/ai/services/aiService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type { JobMatch } from "../types/ai";

export const aiService = {
  /**
   * GET /UserProfile/has-resumes
   * Check if current user has a CV uploaded
   */
  async checkHasResume(): Promise<boolean> {
    const response = await apiClient.get<boolean>("/UserProfile/has-resumes");
    return response;
  },

  /**
   * POST /Resume/update/analayse
   * Upload CV and get AI analysis
   */
  async analyseCV(cvFile: File): Promise<string> {
    const formData = new FormData();
    formData.append("CvFile", cvFile);
    
    const response = await apiClient.post("/Resume/update/analayse", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000, // 60 seconds timeout
    });
    return response as string;
  },

  /**
   * GET /Match
   * Get job matches based on user's CV/skills
   */
  async getJobMatches(): Promise<JobMatch[]> {
    const response = await apiClient.get<JobMatch[]>("/Match", {
      timeout: 60000, // 60 seconds timeout
    });
    return response;
  },
};
````

## File: src/features/ai/types/ai.ts
````typescript
export interface JobMatch {
  job_id: string;
  job_title: string;
  match_percentage: number;
  matched_skills: string[];
  missing_skills: string[];
}

export interface CvAnalysisResult {
  rawText: string;
}
````

## File: src/features/auth/components/AuthLayout.tsx
````typescript
import React from "react";
import { Link } from "react-router-dom";
import { Users, Quote } from "lucide-react";
import verify from "@/assets/imgs/auth/vertical-for-vrfiy.webp";
import laptop from "@/assets/imgs/auth/laptop-for-register.webp";
import authVideo from "@/assets/imgs/auth/Use_the_uploaded_image_as_the_ONLY_character_and_facial_reference.____IMPORTANT___One_woman_only.__N_seed4158426707.mp4";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant?: "register" | "login" | "forgot" | "reset" | "verify";
  leftContent?: React.ReactNode;
}

/**
 * Auth layout component with a left side for promotional content and a right side for the auth form
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  variant = "register",
  leftContent,
}) => {
  const defaultLeftContent = (
    <div className="relative h-full flex flex-col justify-between p-8 lg:p-12 pt-4">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end items-center text-center space-y-6 z-10 pb-8 lg:pb-16">
        {variant === "register" && (
          <>

            <h2 className="text-4xl font-bold text-white">
              Build your dream team today
            </h2>
            <p className="text-lg text-white/80 max-w-md">
              Join thousands of teams managing projects efficiently. Start your
              journey with Career Path now and streamline your workflow.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 border-2 border-white bg-[var(--purple)] text-white text-xs flex items-center justify-center rounded-full">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">+2k</p>
                <p className="text-white/70 text-sm">
                  Trusted by leading teams
                </p>
              </div>
            </div>
          </>
        )}

        {variant === "login" && (
          <>
            <h2 className="text-4xl font-bold text-white">Welcome back</h2>
            <p className="text-lg text-white/80 max-w-md">
              Enter your details to access your workspace and continue building
              amazing projects with your team.
            </p>

            {/* Testimonial */}
            <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-lg p-6 max-w-md border border-white/10">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <Quote className="h-6 w-6 text-white/60 mb-2" />
              <p className="text-white text-sm italic mb-4">
                "Career Path has completely transformed how our remote teams form and
                execute projects. It's seamless."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-[var(--purple)] text-white flex items-center justify-center rounded-full">
                  AM
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Adham Khaled
                  </p>
                  <p className="text-white/70 text-xs">
                    Backend Developer at TiTans
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {(variant === "forgot" ||
          variant === "reset" ||
          variant === "verify") && (
          <>
            <h2 className="text-4xl font-bold text-white">
              {variant === "forgot"
                ? "Reset your password"
                : variant === "reset"
                ? "Create new password"
                : "Verify your email"}
            </h2>
            <p className="text-lg text-white/80 max-w-md">
              {variant === "forgot"
                ? "Enter your email address and we'll send you a link to reset your password."
                : variant === "reset"
                ? "Enter your new password below to secure your account."
                : "We've sent a verification code to your email. Please enter it below."}
            </p>
          </>
        )}
      </div>

    </div>
  );

  const navbarHeader = (
    <div className="h-20 flex items-center px-8 lg:px-12 border-b border-white/5 bg-black/40 backdrop-blur-md z-20 shrink-0">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
          <Users className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-white">Career Path</span>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 flex-col relative overflow-hidden bg-black">
        {navbarHeader}
        
        <div className="flex-1 relative overflow-hidden">
          {/* Background Video */}
          <video
            src={authVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          
          {/* Subtle Overlays for Readability */}
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-0" />
          
          {/* Content on top of video */}
          <div className="relative z-10 w-full h-full">
            {leftContent || defaultLeftContent}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-muted/20 px-4 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
````

## File: src/features/auth/components/EmailVerificationForm.tsx
````typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const emailVerificationSchema = z.object({
  code: z.string().min(6, "Verification code must be at least 6 characters"),
});

const resendEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailVerificationFormData = z.infer<typeof emailVerificationSchema>;
type ResendEmailFormData = z.infer<typeof resendEmailSchema>;

export const EmailVerificationForm = () => {
  const [searchParams] = useSearchParams();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const {
    confirmEmail,
    resendConfirmationCode,
    isConfirmEmailLoading,
    isResendConfirmationLoading,
  } = useAuth();

  const userId = searchParams.get("userId") || searchParams.get("id");
  const code = searchParams.get("code");
  const email = searchParams.get("email");

  const form = useForm<EmailVerificationFormData>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      code: code || "",
    },
  });

  const resendForm = useForm<ResendEmailFormData>({
    resolver: zodResolver(resendEmailSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit = (data: EmailVerificationFormData) => {
    if (!userId) {
      form.setError("root", { message: "Invalid verification link" });
      return;
    }

    form.clearErrors();
    confirmEmail(
      {
        userId: userId,
        code: data.code,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  // Auto-submit if both userId and code are provided in URL
  useEffect(() => {
    if (userId && code && code.length >= 6) {
      form.setValue("code", code);
      // Use setTimeout to ensure form state is updated
      setTimeout(() => {
        form.handleSubmit(onSubmit)();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  const handleResendCode = () => {
    // If email is in URL params, use it directly
    if (email) {
      resendConfirmationCode({ email });
      return;
    }

    // Otherwise, show email input form
    setShowEmailInput(true);
  };

  const handleResendSubmit = (data: ResendEmailFormData) => {
    resendConfirmationCode(
      { email: data.email },
      {
        onSuccess: () => {
          setShowEmailInput(false);
          resendForm.reset({ email: data.email });
        },
      }
    );
  };

  if (!userId) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Career Path</span>
        </div>
        <div className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--purple)]/10">
            <Mail className="h-6 w-6 text-[var(--purple)]" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Check your email</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We've sent you a verification email. Please check your inbox and click the verification link to activate your account.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium mb-2">Didn't receive the email?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes for the email to arrive</li>
            </ul>
          </div>

          <Link to="/login" className="block">
            <Button
              variant="outline"
              className="w-full h-11 text-base font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Career Path</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Verify your email
        </h1>
        <p className="text-muted-foreground">
          {email ? (
            <>
              We've sent a verification code to <strong>{email}</strong>
            </>
          ) : code ? (
            "Please verify your email address"
          ) : (
            "Enter the verification code sent to your email"
          )}
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="pr-10 text-center text-2xl tracking-widest"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold"
            disabled={isConfirmEmailLoading}
          >
            {isConfirmEmailLoading ? "Verifying..." : "Verify Email"}
          </Button>
        </form>
      </Form>

      {/* Resend Code */}
      <div className="text-center space-y-4">
        {!showEmailInput ? (
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto text-[var(--purple)] font-semibold"
              onClick={handleResendCode}
              disabled={isResendConfirmationLoading}
            >
              {isResendConfirmationLoading ? "Sending..." : "Resend Code"}
            </Button>
          </p>
        ) : (
          <form
            onSubmit={resendForm.handleSubmit(handleResendSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="resend-email">Email Address</Label>
              <Input
                id="resend-email"
                type="email"
                placeholder="Enter your email address"
                {...resendForm.register("email")}
                disabled={isResendConfirmationLoading}
              />
              {resendForm.formState.errors.email && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {resendForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={isResendConfirmationLoading}
                className="flex-1 bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90"
              >
                {isResendConfirmationLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Code
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowEmailInput(false);
                  resendForm.reset({ email: email || "" });
                }}
                disabled={isResendConfirmationLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-[var(--purple)] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};
````

## File: src/features/auth/components/ForgotPasswordForm.tsx
````typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Mail, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const { forgotPassword, isForgotPasswordLoading } = useAuth();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    form.clearErrors();
    forgotPassword(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Career Path</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Reset your password
        </h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      className="pr-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold"
            disabled={isForgotPasswordLoading}
          >
            {isForgotPasswordLoading
              ? "Sending reset link..."
              : "Send Reset Link"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-[var(--purple)] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
````

## File: src/features/auth/components/LoginForm.tsx
````typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { loginSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";


type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginLoading } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    form.clearErrors();

    login(data, {
      onError: (error) => {
        setFormErrors(error, form.setError);
      },
    });
  };

  const handleGoogleLogin = () => {
    const externalLoginUrl = `${env.AUTH_BASE_URL}/auth/google-login`;
    window.location.href = externalLoginUrl;
  };
  const handleGithubLogin = () => {
  window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
};

  return (
    <div className="w-full space-y-6 rounded-2xl border border-border/60 bg-card/90 p-8 shadow-xl backdrop-blur-sm sm:p-10">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Career Path</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
        <p className="text-muted-foreground">
          Enter your details to access your workspace.
        </p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
         <Button
          type="button"
          variant="outline"
          className="w-full border border-border hover:bg-accent"
          onClick={handleGithubLogin}
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">
            OR CONTINUE WITH EMAIL
          </span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="pl-10 pr-12"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-[var(--purple)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? "Signing in..." : "Log In"}
          </Button>
        </form>
      </Form>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[var(--purple)] font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
````

## File: src/features/auth/components/RegisterForm.tsx
````typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, User, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerAsync, isRegisterLoading } = useAuth();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerAsync(data);
    } catch (error) {
      setFormErrors(error, form.setError);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/google-login`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${env.AUTH_BASE_URL}/auth/github-login`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Career Path</span>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
        <p className="text-muted-foreground">Enter your details to start your journey.</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" className="w-full border border-border hover:bg-accent" onClick={handleGoogleLogin}>
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </Button>
        <Button type="button" variant="outline" className="w-full border border-border hover:bg-accent" onClick={handleGithubLogin}>
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="your first name" className="pr-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Work Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="example@company.com" className="pr-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type={showPassword ? "text" : "password"} placeholder="At least 8 characters" className="pr-10" {...field} />
                  <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="agreeToTerms" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[var(--purple)] hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-[var(--purple)] hover:underline">Privacy Policy</Link>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )} />

          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button type="submit" className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold" disabled={isRegisterLoading}>
            {isRegisterLoading ? "Creating Account..." : "Create Free Account"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-[var(--purple)] font-semibold hover:underline">Login</Link>
      </p>
    </div>
  );
};
````

## File: src/features/auth/components/ResetPasswordForm.tsx
````typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { resetPasswordSchema } from "@/features/auth/schemas/authSchemas";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, Lock, ArrowLeft } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const { resetPassword, isResetPasswordLoading } = useAuth();

  // Support both old (id, token) and new (userId, code) query params
  const email = searchParams.get("email");
  const code = searchParams.get("code") || searchParams.get("token");

  const form = useForm<ResetPasswordFormData>({
      resolver: zodResolver(resetPasswordSchema),
      defaultValues: {
        email: email || "",   // prefilled from URL
        code: code || "",     // prefilled from URL
        newPassword: "",
      },
    });

  const onSubmit = (data: ResetPasswordFormData) => {
    if (!email || !code) {
      form.setError("root", { message: "Invalid reset link" });
      return;
    }

    form.clearErrors();
    resetPassword(
      {
        email: email || "",
        code: code || "",
        newPassword: data.newPassword,
      },
      {
        onError: (error) => {
          setFormErrors(error, form.setError);
        },
      }
    );
  };

  if (!email || !code) {
    return (
      <div className="w-full space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Career Path</span>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-destructive">Invalid Link</h1>
          <p className="text-muted-foreground">
            This password reset link is invalid or has expired.
          </p>
        </div>
        <Link to="/forgot-password" className="block">
          <Button className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold">
            Request New Reset Link
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)]">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground">Career Path</span>
      </div>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Create new password
        </h1>
        <p className="text-muted-foreground">
          Enter your new password below to secure your account.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="pr-10"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          {form.formState.errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90 h-11 text-base font-semibold"
            disabled={isResetPasswordLoading}
          >
            {isResetPasswordLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-[var(--purple)] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
};
````

## File: src/features/auth/context/AuthContext.tsx
````typescript
// src/features/auth/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "../types/auth";
import { QUERY_KEYS } from "../types/auth";
import { authService } from "../services/authService";
import { apiClient } from "@/lib/api/client";

interface AuthContextType {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, token: string, refreshToken: string, expiresIn: number, refreshTokenExpiryDate?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [, setTick] = React.useState(0);
  const forceUpdate = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    const unsubscribe = authService.subscribe(() => {
      forceUpdate();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.auth.user, "me"] });
    });
    return () => unsubscribe();
  }, [queryClient, forceUpdate]);

  const logout = useCallback(() => {
    authService.clearAuthData();
    queryClient.clear();
    forceUpdate();
  }, [queryClient, forceUpdate]);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [QUERY_KEYS.auth.user, "me"],
    queryFn: async () => {
      if (!authService.isAuthenticated()) return null;
      try {
        const userData = await apiClient.getMe();
        authService.updateUser(userData);
        return userData;
      } catch (error: any) {
        console.error("Auth validation failed:", error);
        // Only logout if refresh token is actually expired
        const status = error?.response?.status;
        if (status === 401 && authService.isRefreshTokenExpired()) {
          logout();
        }
        // For any other error, return the cached user to prevent logout
        return authService.getUser();
      }
    },
    enabled: authService.isAuthenticated(),
    initialData: () => authService.getUser() ?? undefined,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (user) {
      queryClient.setQueryData(QUERY_KEYS.auth.user, { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email });
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    }
  }, [user, queryClient]);

  const login = useCallback((user: User, token: string, refreshTokenValue: string, expiresIn: number, refreshTokenExpiryDate?: string) => {
    authService.setAuthData(user, token, refreshTokenValue, expiresIn, refreshTokenExpiryDate);
    queryClient.setQueryData(QUERY_KEYS.auth.user, { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email });
    queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
  }, [queryClient]);

  const token = authService.getToken();
  const refreshToken = authService.getRefreshToken();
  const hasSession = authService.isAuthenticated();
  const storedUser = authService.getUser();
  const resolvedUser = user ?? storedUser;
  const isAuthenticated = !!(token && refreshToken && hasSession && resolvedUser);

  const value: AuthContextType = {
    user: resolvedUser,
    token,
    refreshToken,
    isAuthenticated,
    isLoading: hasSession && isLoadingUser && !resolvedUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
````

## File: src/features/auth/hooks/useAuth.ts
````typescript
// src/features/auth/hooks/useAuth.ts
import { useAuthContext } from "../context/AuthContext";
import { useLogin, useRegister, useForgotPassword, useResetPassword, useResendConfirmationEmail, useConfirmEmail, useLogout, useRevokeRefreshToken } from "./useAuthMutations";
import type { LoginRequest } from "../types/auth";

export const useAuth = () => {
  const authContext = useAuthContext();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const forgotPasswordMutation = useForgotPassword();
  const resetPasswordMutation = useResetPassword();
  const resendConfirmationMutation = useResendConfirmationEmail();
  const confirmEmailMutation = useConfirmEmail();
  const logoutFn = useLogout();
  const revokeRefreshTokenMutation = useRevokeRefreshToken();

  const login = (data: LoginRequest, options?: { onError?: (error: unknown) => void }) => {
    loginMutation.mutate(data, {
      onSuccess: async (response) => {
        authContext.login({ id: response.id, firstName: response.firstName, lastName: response.lastName, email: response.email }, response.token, response.refreshToken, response.expiresIn, response.refreshTokenExpiration);
      },
      onError: options?.onError,
    });
  };

  return {
    user: authContext.user,
    token: authContext.token,
    isAuthenticated: authContext.isAuthenticated,
    isLoading: authContext.isLoading,
    login,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    resendConfirmationCode: resendConfirmationMutation.mutate,
    confirmEmail: confirmEmailMutation.mutate,
    logout: logoutFn,
    revokeRefreshToken: revokeRefreshTokenMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isForgotPasswordLoading: forgotPasswordMutation.isPending,
    isResetPasswordLoading: resetPasswordMutation.isPending,
    isResendConfirmationLoading: resendConfirmationMutation.isPending,
    isConfirmEmailLoading: confirmEmailMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    forgotPasswordError: forgotPasswordMutation.error,
    resetPasswordError: resetPasswordMutation.error,
    resendConfirmationError: resendConfirmationMutation.error,
    confirmEmailError: confirmEmailMutation.error,
  };
};
````

## File: src/features/auth/hooks/useAuthMutations.ts
````typescript
// src/features/auth/hooks/useAuthMutations.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "../services/authApi";
import { authService } from "../services/authService";
import { QUERY_KEYS } from "../types/auth";
import { apiClient } from "@/lib/api/client";
import { extractErrorMessage, extractValidationErrors } from "@/lib/api/errors";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (data) => {
      const basicUser = { id: data.id, firstName: data.firstName, lastName: data.lastName, email: data.email };
      authService.setAuthData(basicUser, data.token, data.refreshToken, data.expiresIn, data.refreshTokenExpiration);
      try {
        const fullUser = await apiClient.getMe();
        authService.updateUser(fullUser);
        queryClient.setQueryData(QUERY_KEYS.auth.user, { id: fullUser.id, firstName: fullUser.firstName, lastName: fullUser.lastName, email: fullUser.email });
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], fullUser);
        toast.success("Login successful!");
        navigate("/profile");
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        queryClient.setQueryData(QUERY_KEYS.auth.user, basicUser);
        queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], basicUser);
        toast.success("Login successful!");
        navigate("/profile");
      }
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Registration successful! Please check your email for verification.");
      navigate("/emailConfirmation");
    },
    onError: (error) => {
      const validationErrors = extractValidationErrors(error);
      if (Object.keys(validationErrors).length === 0) {
        const message = extractErrorMessage(error);
        toast.error(message);
      }
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      toast.success("Password reset email sent! Please check your inbox.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      toast.success("Password reset successful! Please login with your new password.");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useResendConfirmationEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation code sent! Please check your email.");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useConfirmEmail = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.confirmEmail,
    onSuccess: () => {
      toast.success("Email confirmed successfully!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.refreshToken,
    onSuccess: (data) => {
      authService.updateTokens(data);
      const user = { id: data.id, firstName: data.firstName, lastName: data.lastName, email: data.email };
      queryClient.setQueryData(QUERY_KEYS.auth.user, user);
      queryClient.setQueryData([QUERY_KEYS.auth.user, "me"], user);
    },
    onError: (error) => {
      authService.clearAuthData();
      queryClient.clear();
      toast.error(extractErrorMessage(error) || "Session expired. Please login again.");
    },
  });
};

export const useRevokeRefreshToken = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.revokeRefreshToken,
    onSuccess: () => {
      authService.clearAuthData();
      queryClient.clear();
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error) || "Failed to revoke token");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return () => {
    authService.clearAuthData();
    queryClient.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  };
};

export const useResendConfirmEmail = () => {
  return useMutation({
    mutationFn: authApi.resendConfirmationEmail,
    onSuccess: () => {
      toast.success("Confirmation email sent successfully!");
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
````

## File: src/features/auth/hooks/usePermissions.ts
````typescript
// src/features/auth/hooks/usePermissions.ts
import { useMemo } from "react";
import { getUserRoles, getUserPermissions, getUserId } from "@/lib/jwt";
import { useAuth } from "./useAuth";

export const usePermissions = () => {
  const { token } = useAuth();
  const roles = useMemo(() => getUserRoles(), [token]);
  const permissions = useMemo(() => getUserPermissions(), [token]);
  const userId = useMemo(() => getUserId(), [token]);

  return {
    roles,
    permissions,
    userId,
    isCompany: roles.some((r) => r.toLowerCase() === "company"),
    isAdmin: roles.some((r) => r.toLowerCase() === "admin"),
    isMember: roles.some((r) => r.toLowerCase() === "member"),
    hasPermission: (permission: string) => permissions.includes(permission),
    hasRole: (role: string) => roles.some((r) => r.toLowerCase() === role.toLowerCase()),
    companyId: userId,
  };
};
````

## File: src/features/auth/pages/ConfirmEmailPage.tsx
````typescript
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { CheckCircle2, XCircle, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resendConfirmationEmailSchema } from "@/features/auth/schemas/authSchemas";
import { useConfirmEmail, useResendConfirmEmail } from "@/features/auth/hooks/useAuthMutations";


const ConfirmEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirmEmail = useConfirmEmail();
  const resendEmail = useResendConfirmEmail();
  const [showEmailInput, setShowEmailInput] = useState(false);

  const userId = searchParams.get("userId");
  const code = searchParams.get("code");

  const resendForm = useForm<{ email: string }>({
    resolver: zodResolver(resendConfirmationEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Only attempt confirmation if we have both userId and token
    if (
      userId &&
      code &&
      !confirmEmail.isSuccess &&
      !confirmEmail.isError &&
      !confirmEmail.isPending
    ) {
      confirmEmail.mutate({ userId: userId, code: code });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  // Redirect on success
  useEffect(() => {
    if (confirmEmail.isSuccess) {
      const timer = setTimeout(() => {
        navigate("/profile");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [confirmEmail.isSuccess, navigate]);

  // Show loading state while confirming
  if (confirmEmail.isPending) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-12 w-12 text-[var(--purple)] animate-spin" />
              </div>
              <CardTitle className="text-2xl">Confirming Email</CardTitle>
              <CardDescription>
                Please wait while we verify your email address...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show success state
  if (confirmEmail.isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3">
                  <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">
                Email Confirmed!
              </CardTitle>
              <CardDescription>
                Your email has been successfully confirmed. Redirecting you to
                projects...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show error state
  if (confirmEmail.isError || !userId || !code) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-3">
                  <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <CardTitle className="text-2xl text-red-600 dark:text-red-400">
                Confirmation Failed
              </CardTitle>
              <CardDescription>
                {!userId || !code
                  ? "Invalid confirmation link. Please check your email and try again."
                  : "We couldn't confirm your email. The link may have expired or is invalid."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showEmailInput ? (
                <Button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Resend Confirmation Email
                </Button>
              ) : (
                <form
                  onSubmit={resendForm.handleSubmit((data) => {
                    resendEmail.mutate(
                      {
                        email: data.email,
                      },
                      {
                        onSuccess: () => {
                          setShowEmailInput(false);
                          resendForm.reset();
                        },
                      }
                    );
                  })}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...resendForm.register("email")}
                      disabled={resendEmail.isPending}
                    />
                    {resendForm.formState.errors.email && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {resendForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={resendEmail.isPending}
                      className="flex-1 bg-[var(--purple)] text-[var(--purple-foreground)] hover:bg-[var(--purple)]/90"
                    >
                      {resendEmail.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowEmailInput(false);
                        resendForm.reset();
                      }}
                      disabled={resendEmail.isPending}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
              <Button
                variant="outline"
                onClick={() => navigate("/profile/settings")}
                className="w-full"
              >
                Back to Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfirmEmailPage;
````

## File: src/features/auth/pages/ForgotPasswordPage.tsx
````typescript
import React from "react";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
````

## File: src/features/auth/pages/LoginPage.tsx
````typescript
import React from "react";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
};

export default Login;
````

## File: src/features/auth/pages/OAuthCallbackPage.tsx
````typescript
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "@/features/auth/context/AuthContext";
import { Loader2 } from "lucide-react";

const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");
    const expiresIn = searchParams.get("expiresIn");
    const userId = searchParams.get("userId");
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const refreshTokenExpiration = searchParams.get("refreshTokenExpiration"); // ✅ زود

    if (token && refreshToken && expiresIn && userId && email) {
      const expiresInNumber = parseInt(expiresIn, 10);

      const user = {
        id: userId,
        email: email,
        firstName: firstName || "",
        lastName: lastName || "",
      };

      login(user, token, refreshToken, expiresInNumber, refreshTokenExpiration || undefined); // ✅ زود

      navigate("/profile", { replace: true }); // ✅ صح
    } else {
      console.error("Missing required OAuth parameters");
      navigate("/login", { replace: true });
    }
  }, [searchParams, login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="p-8 text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Completing sign in...</h1>
        <p className="text-muted-foreground">Please wait while we set up your session.</p>
      </div>
    </div>
  );
};

export default OAuthCallback;
````

## File: src/features/auth/pages/RegisterPage.tsx
````typescript
import React from "react";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
};

export default Register;
````

## File: src/features/auth/pages/ResetPasswordPage.tsx
````typescript
import React from "react";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
````

## File: src/features/auth/pages/VerifyEmailPage.tsx
````typescript
import React from "react";
import { EmailVerificationForm } from "@/features/auth/components/EmailVerificationForm";

const VerifyEmail: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <EmailVerificationForm />
    </div>
  );
};

export default VerifyEmail;
````

## File: src/features/auth/schemas/authSchemas.ts
````typescript
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
  firstName: z.string().min(3, "First name must be at least 3 characters").max(100, "First name must be at most 100 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(100, "Last name must be at most 100 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  code: z.string().min(1, "Verification code is required"),
  newPassword: z.string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one non-alphanumeric character"),
});

export const confirmEmailSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  code: z.string().min(1, "Verification code is required"),
});

export const resendConfirmationEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
});
````

## File: src/features/auth/services/authApi.ts
````typescript
// src/features/auth/services/authApi.ts
import axios from "axios";
import { env } from "@/lib/env";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgetPasswordRequest,
  ResetPasswordRequest,
  ResendConfirmationEmailRequest,
  ConfirmationEmailRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RevokeRefreshTokenRequest,
} from "../types/auth";

const authClient = axios.create({
  baseURL: env.AUTH_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await authClient.post<LoginResponse>("/auth", data);
    return response.data;
  },
  register: async (data: RegisterRequest): Promise<void> => {
    await authClient.post("/auth/register", data);
  },
  forgotPassword: async (data: ForgetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/forget-password", data);
  },
  resetPassword: async (data: ResetPasswordRequest): Promise<void> => {
    await authClient.post("/auth/reset-password", data);
  },
  resendConfirmationEmail: async (data: ResendConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/resend-confirmation-email", data);
  },
  confirmEmail: async (data: ConfirmationEmailRequest): Promise<void> => {
    await authClient.post("/auth/confirm-email", data);
  },
  refreshToken: async (data: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    const response = await authClient.post<RefreshTokenResponse>("/Auth/refresh", data);
    return response.data;
  },
  revokeRefreshToken: async (data: RevokeRefreshTokenRequest): Promise<void> => {
    await authClient.post("/auth/revoke-refresh-token", data);
  },
};
````

## File: src/features/auth/services/authService.ts
````typescript
// src/features/auth/services/authService.ts
import type { RefreshTokenResponse, User } from "../types/auth";
import { authApi } from "./authApi";

class AuthService {
  private refreshPromise: Promise<RefreshTokenResponse> | null = null;
  private readonly TOKEN_KEY = "auth_token";
  private readonly REFRESH_TOKEN_KEY = "auth_refresh_token";
  private readonly USER_KEY = "auth_user";
  private readonly EXPIRES_IN_KEY = "auth_expires_in";
  private readonly REFRESH_TOKEN_EXPIRY_KEY = "auth_refresh_token_expiry";
  private readonly TOKEN_ISSUED_AT_KEY = "auth_token_issued_at";
  private listeners: Array<() => void> = [];

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter((l) => l !== listener); };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }

  isRefreshing(): boolean {
    return this.refreshPromise !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }

  getTokenExpiry(): number | null {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return null;
    const expiresInSeconds = parseInt(expiresIn, 10);
    if (isNaN(expiresInSeconds)) return null;
    const issuedAt = localStorage.getItem(this.TOKEN_ISSUED_AT_KEY);
    if (issuedAt) {
      return parseInt(issuedAt, 10) + expiresInSeconds * 1000;
    }
    return null;
  }

  isTokenExpiredOrExpiringSoon(): boolean {
    const expiry = this.getTokenExpiry();
    if (!expiry) return true;
    const fiveMinutesFromNow = Date.now() + 5 * 60 * 1000;
    return expiry <= fiveMinutesFromNow;
  }

  isRefreshTokenExpired(): boolean {
    const expiryStr = localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    if (!expiryStr) return false;
    try {
      const expiry = new Date(expiryStr).getTime();
      if (isNaN(expiry)) return false;
      return expiry <= Date.now();
    } catch {
      return false;
    }
  }

  setAuthData(user: User, token: string, refreshToken: string, expiresIn: number, refreshTokenExpiration?: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.EXPIRES_IN_KEY, expiresIn.toString());
    localStorage.setItem(this.TOKEN_ISSUED_AT_KEY, Date.now().toString());
    if (refreshTokenExpiration) {
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, refreshTokenExpiration);
    } else if (!localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY)) {
      const thirtyDays = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      localStorage.setItem(this.REFRESH_TOKEN_EXPIRY_KEY, thirtyDays.toISOString());
    }
    this.notifyListeners();
  }

  clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.EXPIRES_IN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.TOKEN_ISSUED_AT_KEY);
    this.notifyListeners();
  }

  updateTokens(response: RefreshTokenResponse): void {
    const user: User = {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    };
    this.setAuthData(user, response.token, response.refreshToken, response.expiresIn, response.refreshTokenExpiration);
  }

  async refreshToken(): Promise<RefreshTokenResponse> {
    if (this.refreshPromise) return this.refreshPromise;
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) {
      throw new Error("No tokens available for refresh");
    }
    if (this.isRefreshTokenExpired()) {
      this.clearAuthData();
      throw new Error("Refresh token expired");
    }
    this.refreshPromise = authApi
      .refreshToken({ token, refreshToken })
      .then((response) => {
        this.updateTokens(response);
        return response;
      })
      .finally(() => {
        this.refreshPromise = null;
      });
    return this.refreshPromise;
  }

  async ensureValidToken(): Promise<string | null> {
    if (!this.getToken()) return null;

    // If token will expire in 5 minutes, refresh it now
    if (this.isTokenExpiredOrExpiringSoon()) {
      try {
        const res = await this.refreshToken();
        return res.token;
      } catch {
        return null;
      }
    }
    return this.getToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    if (!token || !refreshToken) return false;
    if (this.isRefreshTokenExpired()) return false;
    return true;
  }

  getExpiresIn(): number {
    const expiresIn = localStorage.getItem(this.EXPIRES_IN_KEY);
    if (!expiresIn) return 0;
    return parseInt(expiresIn, 10) || 0;
  }

  getRefreshTokenExpiryDate(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_EXPIRY_KEY);
  }

  updateUser(user: User): void {
    const token = this.getToken();
    const refreshToken = this.getRefreshToken();
    const expiresIn = this.getExpiresIn();
    const refreshTokenExpiration = this.getRefreshTokenExpiryDate();
    if (token && refreshToken) {
      this.setAuthData(user, token, refreshToken, expiresIn, refreshTokenExpiration || undefined);
    }
  }
}

export const authService = new AuthService();
````

## File: src/features/auth/types/auth.ts
````typescript
// src/features/auth/types/auth.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
} as const;
````

## File: src/features/chat/components/ChatModal.tsx
````typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/shared/components/ui/dialog";
import { ChatWindow } from "./ChatWindow";
import { X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  otherUserId: string;
  otherUserName?: string;
}

export function ChatModal({ isOpen, onClose, otherUserId, otherUserName }: ChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-[95vw] h-[85vh] sm:h-[650px] p-0 flex flex-col gap-0 overflow-hidden shadow-2xl border-border bg-card">
        <DialogHeader className="sr-only">
          <DialogTitle>Chat with {otherUserName || "User"}</DialogTitle>
          <DialogDescription>Private conversation window</DialogDescription>
        </DialogHeader>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-3 top-3 h-8 w-8 rounded-full z-10 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex-1 overflow-hidden flex flex-col w-full">
          <ChatWindow otherUserId={otherUserId} otherUserName={otherUserName} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
````

## File: src/features/chat/components/ChatWindow.tsx
````typescript
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import * as signalR from "@microsoft/signalr";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { useGetConversation, useMarkAsRead, useSignalRConnection } from "../hooks/useChat";
import { signalrService } from "../services/signalrService";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getUserId } from "@/lib/jwt";
import type { Message } from "../types/chat";

interface ChatWindowProps {
  otherUserId: string;
  otherUserName?: string;
}

export function ChatWindow({ otherUserId, otherUserName }: ChatWindowProps) {
  const { user, token } = useAuth();
  const { data: messages, isLoading } = useGetConversation(otherUserId);
  const markAsRead = useMarkAsRead();
  const [localMessages, setLocalMessages] = useState<Message[]>([]);
  const { connectionState: connState } = useSignalRConnection();

  // Extract user ID robustly (fallback to token if user.id is missing or named differently)
  const currentUserId = useMemo(() => {
    return user?.id || (user as any)?.userId || getUserId() || undefined;
  }, [user, token]);

  // Connect to SignalR when component mounts or token changes
  useEffect(() => {
    if (token) {
      signalrService.connect();
    }

    return () => {
      signalrService.disconnect();
    };
  }, [token]);

  // Mark messages as read when conversation loads
  useEffect(() => {
    if (messages && messages.length > 0) {
      const hasUnreadMessages = messages.some(
        (m) => !m.isRead && m.senderId === otherUserId
      );
      if (hasUnreadMessages) {
        markAsRead.mutate(otherUserId);
      }
    }
  }, [messages, otherUserId, markAsRead.mutate]);

  // Listen for incoming messages
  const handleReceiveMessage = useCallback((message: Message) => {
    setLocalMessages((prev) => {
      // Prevent duplicate messages
      if (prev.some((m) => m.id === message.id)) return prev;
      return [...prev, message];
    });
  }, []);

  useEffect(() => {
    signalrService.onReceiveMessage(handleReceiveMessage);

    return () => {
      signalrService.offReceiveMessage(handleReceiveMessage);
    };
  }, [handleReceiveMessage]);

  // Update local messages when conversation loads
  useEffect(() => {
    if (messages) {
      setLocalMessages(messages);
    }
  }, [messages]);

  const allMessages = localMessages;

  return (
    <div className="flex flex-col h-full w-full bg-card relative text-foreground">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border bg-muted/50 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex items-center gap-3 pr-8"> {/* pr-8 to avoid overlap with close button */}
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold text-lg">
                {(otherUserName || "U").charAt(0).toUpperCase()}
              </span>
            </div>
            <span 
              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card ${
                connState === signalR.HubConnectionState.Connected ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-foreground text-base leading-none mb-1.5">{otherUserName || "Chat"}</h3>
            <p className="text-xs text-muted-foreground leading-none">
              {connState === signalR.HubConnectionState.Connected ? "Online" : "Connecting..."}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <MessageList
        messages={allMessages}
        currentUserId={currentUserId}
        isLoading={isLoading}
      />

      {/* Input */}
      <MessageInput
        receiverId={otherUserId}
        onMessageSent={() => {
          // Message will be received via SignalR
        }}
      />
    </div>
  );
}
````

## File: src/features/chat/components/MessageBubble.tsx
````typescript
import { User } from "lucide-react";
import type { Message } from "../types/chat";

interface MessageBubbleProps {
  message: Message;
  currentUserId?: string;
}

export function MessageBubble({ message, currentUserId }: MessageBubbleProps) {
  const isOwnMessage = message.senderId === currentUserId;

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`flex w-full ${isOwnMessage ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${isOwnMessage ? "flex-row-reverse" : "flex-row"}`}
      >
        {!isOwnMessage && (
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-auto">
            <span className="text-primary text-xs font-semibold">
              {(message.senderName || "U").charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <div
          className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"}`}
        >
          {!isOwnMessage && (
            <span className="text-[11px] font-medium text-muted-foreground mb-1 ml-1">
              {message.senderName}
            </span>
          )}
          <div
            className={`px-4 py-2.5 rounded-2xl shadow-sm ${
              isOwnMessage
                ? "bg-primary text-primary-foreground rounded-br-sm"
                : "bg-muted text-foreground rounded-bl-sm border border-border/50"
            }`}
          >
            <p className="text-sm break-words leading-relaxed">{message.content}</p>
          </div>
          <div className={`flex items-center gap-1.5 mt-1 ${isOwnMessage ? "mr-1" : "ml-1"}`}>
            <span className="text-[10px] text-muted-foreground/70 font-medium">
              {formatTime(message.sentAt)}
            </span>
            {isOwnMessage && (
              <span className={`text-[10px] font-bold ${message.isRead ? "text-primary" : "text-muted-foreground/50"}`}>
                {message.isRead ? "✓✓" : "✓"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/features/chat/components/MessageInput.tsx
````typescript
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useSendMessage } from "../hooks/useChat";

interface MessageInputProps {
  receiverId: string;
  onMessageSent?: () => void;
}

export function MessageInput({ receiverId, onMessageSent }: MessageInputProps) {
  const [content, setContent] = useState("");
  const sendMessage = useSendMessage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    sendMessage.mutate(
      { receiverId, content: content.trim() },
      {
        onSuccess: () => {
          setContent("");
          onMessageSent?.();
        },
      }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-card border-t border-border mt-auto">
      <div className="flex items-end gap-2 bg-muted rounded-3xl border border-border focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all p-1.5 pl-4 shadow-sm">
        <Textarea
          placeholder="Type a message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[44px] max-h-[120px] py-3 resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent shadow-none w-full scrollbar-thin"
          disabled={sendMessage.isPending}
          rows={1}
        />
        <Button
          type="submit"
          disabled={!content.trim() || sendMessage.isPending}
          size="icon"
          className="h-11 w-11 rounded-full shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50"
        >
          <Send className="h-[18px] w-[18px] ml-0.5" />
        </Button>
      </div>
    </form>
  );
}
````

## File: src/features/chat/components/MessageList.tsx
````typescript
import { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { Loader2 } from "lucide-react";
import type { Message } from "../types/chat";

interface MessageListProps {
  messages: Message[];
  currentUserId?: string;
  isLoading?: boolean;
}

export function MessageList({ messages, currentUserId, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages are loaded or new message arrives
  useEffect(() => {
    // Small timeout ensures the DOM has updated before scrolling
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, 100);
  }, [messages?.length]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8 flex-1">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!messages || messages.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 flex-1">
        <p className="text-muted-foreground text-sm">No messages yet. Start a conversation!</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          currentUserId={currentUserId}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
````

## File: src/features/chat/hooks/useChat.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { chatService } from "../services/chatService";
import { signalrService } from "../services/signalrService";
import type { Message } from "../types/chat";

export const CHAT_QUERY_KEYS = {
  conversation: (otherUserId: string) => ["chat", "conversation", otherUserId] as const,
};

/**
 * Get conversation with a specific user
 */
export const useGetConversation = (otherUserId: string, enabled = true) => {
  return useQuery({
    queryKey: CHAT_QUERY_KEYS.conversation(otherUserId),
    queryFn: () => chatService.getConversation(otherUserId),
    enabled: enabled && !!otherUserId,
    refetchInterval: 3000, // Poll every 3 seconds to update read receipts
  });
};

/**
 * Mark messages as read
 */
export const useMarkAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (senderId: string) => chatService.markAsRead(senderId),
    onSuccess: () => {
      // Invalidate conversations to update read status
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },
  });
};

/**
 * Send a message via SignalR
 */
export const useSendMessage = () => {
  return useMutation({
    mutationFn: async ({ receiverId, content }: { receiverId: string; content: string }) => {
      await signalrService.sendMessage(receiverId, content);
    },
  });
};

import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

/**
 * Connect to SignalR
 */
export const useSignalRConnection = () => {
  const [connectionState, setConnectionState] = useState<signalR.HubConnectionState>(
    signalrService.getConnectionState()
  );

  useEffect(() => {
    const unsubscribe = signalrService.subscribeState((state) => {
      setConnectionState(state);
    });
    return unsubscribe;
  }, []);

  const connectMutation = useMutation({
    mutationFn: () => signalrService.connect(),
  });

  const disconnectMutation = useMutation({
    mutationFn: () => signalrService.disconnect(),
  });

  return {
    connect: connectMutation.mutate,
    disconnect: disconnectMutation.mutate,
    isConnecting: connectMutation.isPending,
    isDisconnecting: disconnectMutation.isPending,
    connectionState,
  };
};
````

## File: src/features/chat/services/chatService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type { Message } from "../types/chat";

class ChatService {
  /**
   * Get conversation with a specific user
   */
  async getConversation(
    otherUserId: string,
    signal?: AbortSignal
  ): Promise<Message[]> {
    return apiClient.get<Message[]>(`/chat/${otherUserId}`, { signal });
  }

  /**
   * Mark messages as read
   */
  async markAsRead(senderId: string): Promise<void> {
    return apiClient.put<void>(`/chat/${senderId}/read`);
  }
}

export const chatService = new ChatService();
````

## File: src/features/chat/services/signalrService.ts
````typescript
import * as signalR from "@microsoft/signalr";
import type { Message } from "../types/chat";

class SignalRService {
  private connection: signalR.HubConnection | null = null;
  private stateListeners: Array<(state: signalR.HubConnectionState) => void> = [];

  subscribeState(listener: (state: signalR.HubConnectionState) => void): () => void {
    this.stateListeners.push(listener);
    listener(this.getConnectionState());
    return () => {
      this.stateListeners = this.stateListeners.filter((l) => l !== listener);
    };
  }

  private notifyStateListeners(): void {
    const state = this.getConnectionState();
    this.stateListeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error("Error in SignalR state listener:", err);
      }
    });
  }

  /**
   * Create and start the SignalR connection
   */
  async connect(): Promise<void> {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      return;
    }

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(import.meta.env.VITE_HUB_URL, {
        accessTokenFactory: () => localStorage.getItem("auth_token") || "",
      })
      .withAutomaticReconnect()
      .build();

    this.connection.onclose(() => this.notifyStateListeners());
    this.connection.onreconnecting(() => this.notifyStateListeners());
    this.connection.onreconnected(() => this.notifyStateListeners());

    try {
      this.notifyStateListeners(); // updates state to connecting
      await this.connection.start();
      console.log("Connected to Chat Hub ✓");
      this.notifyStateListeners();
    } catch (error) {
      console.error("Failed to connect to Chat Hub:", error);
      this.notifyStateListeners();
      throw error;
    }
  }

  /**
   * Disconnect from the SignalR hub
   */
  async disconnect(): Promise<void> {
    if (this.connection) {
      try {
        await this.connection.stop();
        console.log("Disconnected from Chat Hub");
      } catch (error) {
        console.error("Failed to disconnect from Chat Hub:", error);
      }
      this.connection = null;
      this.notifyStateListeners();
    }
  }

  /**
   * Listen for incoming messages
   */
  onReceiveMessage(callback: (message: Message) => void): void {
    if (this.connection) {
      this.connection.on("ReceiveMessage", callback);
    }
  }

  /**
   * Stop listening for incoming messages
   */
  offReceiveMessage(callback: (message: Message) => void): void {
    if (this.connection) {
      this.connection.off("ReceiveMessage", callback);
    }
  }

  /**
   * Send a message to a specific user
   */
  async sendMessage(receiverId: string, content: string): Promise<void> {
    if (!this.connection || this.connection.state !== signalR.HubConnectionState.Connected) {
      throw new Error("Not connected to Chat Hub");
    }

    await this.connection.invoke("SendMessage", receiverId, content);
  }

  /**
   * Get the current connection state
   */
  getConnectionState(): signalR.HubConnectionState {
    if (!this.connection) {
      return signalR.HubConnectionState.Disconnected;
    }
    return this.connection.state;
  }
}

export const signalrService = new SignalRService();
````

## File: src/features/chat/types/chat.ts
````typescript
export interface Message {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
  sentAt: string;
  isRead: boolean;
}

export interface SendMessageRequest {
  receiverId: string;
  content: string;
}
````

## File: src/features/company/pages/CompanyDashboard.tsx
````typescript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePermissions } from "@/features/auth/hooks/usePermissions";
import { useGetAllJobs, useAddJob, useUpdateJob, useDeleteJob } from "@/features/jobs/hooks/useJobs";
import { Button } from "@/shared/components/ui/button";

import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import {
  MapPin, Briefcase, DollarSign, Plus,
  Edit, AlertTriangle, X,
  CheckCircle2, XCircle, TrendingUp,
  Search, Filter, ArrowUpDown, MoreVertical,
} from "lucide-react";
import { useForm } from "react-hook-form";
import type { AddJobRequest, JobResponse } from "@/features/jobs/types/jobs";

/* ── helpers (unchanged) ── */
function getDaysAgo(d: string) {
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 86_400_000);
  return days === 0 ? "Today" : days === 1 ? "Yesterday" : `${days} days ago`;
}

const JobCardSkeleton = () => (
  <div className="bg-card border border-border rounded-xl p-5 space-y-3">
    <div className="flex justify-between">
      <div className="space-y-2 flex-1"><Skeleton className="h-3 w-24" /><Skeleton className="h-5 w-2/3" /></div>
      <Skeleton className="h-6 w-16 rounded-full" />
    </div>
    <Skeleton className="h-2 w-full rounded-full" />
    <div className="flex gap-2"><Skeleton className="h-8 w-20 rounded-lg" /><Skeleton className="h-8 w-16 rounded-lg" /></div>
  </div>
);

const CompanyDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { isCompany, hasPermission } = usePermissions();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobResponse | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => { if (!isCompany) navigate("/"); }, [isCompany, navigate]);

  const { data: jobsData, isLoading } = useGetAllJobs();
  const addJob       = useAddJob();
  const updateJob    = useUpdateJob();
  const deleteJob    = useDeleteJob();

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      jobTitle: "", jobType: "", jobDescription: "", location: "",
      jobRequirements: [""] as string[],
      experienceLevel: null as number | null,
      salaryMin: null as number | null,
      salaryMax: null as number | null,
      deadlineDate: "",
    },
  });

  const jobRequirements = watch("jobRequirements");

  const handleJobSubmit = (data: any) => {
    const payload: AddJobRequest = {
      jobTitle: data.jobTitle, jobType: data.jobType,
      jobDescription: data.jobDescription, location: data.location || null,
      jobRequirements: data.jobRequirements.filter((r: string) => r.trim() !== ""),
      experienceLevel: data.experienceLevel ? Number(data.experienceLevel) : null,
      salaryMin: data.salaryMin ? Number(data.salaryMin) : null,
      salaryMax: data.salaryMax ? Number(data.salaryMax) : null,
      deadlineDate: data.deadlineDate || null,
    };
    if (editingJob) {
      updateJob.mutate({ jobId: editingJob.id, request: payload }, { onSuccess: closeForm });
    } else {
      addJob.mutate(payload, { onSuccess: closeForm });
    }
  };

  const openAddForm = () => {
    setEditingJob(null);
    reset({ jobTitle:"", jobType:"", jobDescription:"", location:"", jobRequirements:[""], experienceLevel:null, salaryMin:null, salaryMax:null, deadlineDate:"" });
    setIsFormOpen(true);
  };

  const openEditForm = (job: JobResponse) => {
    setEditingJob(job);
    reset({
      jobTitle: job.jobTitle ?? "", jobType: job.jobType ?? "",
      jobDescription: job.jobDescription ?? "", location: job.location ?? "",
      jobRequirements: job.jobRequirements ?? [""],
      experienceLevel: job.experienceLevel as any,
      salaryMin: job.salaryMin as any, salaryMax: job.salaryMax as any,
      deadlineDate: job.deadlineDate ? new Date(job.deadlineDate).toISOString().split("T")[0] : "",
    });
    setIsFormOpen(true);
  };

  const closeForm = () => { setIsFormOpen(false); setEditingJob(null); reset(); };

  const addReq    = () => setValue("jobRequirements", [...(jobRequirements ?? []), ""]);
  const removeReq = (i: number) => setValue("jobRequirements", (jobRequirements ?? []).filter((_: any, idx: number) => idx !== i));
  const updateReq = (i: number, v: string) => {
    const next = [...(jobRequirements ?? [])]; next[i] = v; setValue("jobRequirements", next);
  };

  const jobs        = jobsData?.items ?? [];
  const activeCount = jobs.filter(j => j.isActive).length;
  const inactiveCount = jobs.length - activeCount;

  const filteredJobs = jobs.filter(j =>
    !searchValue || (j.jobTitle ?? "").toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!isCompany) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-6">

      {/* ── Page Header ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Company Portal</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Manage your recruitment pipeline and active listings.</p>
        </div>
        {hasPermission("jobs:add") && (
          <Button
            onClick={openAddForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-10 gap-2 font-semibold shadow-sm"
          >
            <Plus className="w-4 h-4" /> Post New Job
          </Button>
        )}
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Jobs",   value: isLoading ? "…" : (jobsData?.totalCount ?? 0),      icon: Briefcase,   badge: "+5%",   badgeColor: "text-emerald-500 bg-emerald-500/10"  },
          { label: "Active",       value: isLoading ? "…" : activeCount,      icon: CheckCircle2, badge: "0%",   badgeColor: "text-muted-foreground bg-muted"   },
          { label: "Inactive",     value: isLoading ? "…" : inactiveCount,    icon: XCircle,     badge: "-2%",   badgeColor: "text-destructive bg-destructive/10"      },
          { label: "Growth",       value: isLoading ? "…" : "+12%",           icon: TrendingUp,  badge: "+12%",  badgeColor: "text-emerald-500 bg-emerald-500/10"  },
        ].map(s => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded ${s.badgeColor}`}>
                ↑ {s.badge}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-0.5">{s.label}</p>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* ── Active Postings Section ── */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-foreground">Active Postings</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-lg border-border text-muted-foreground text-sm h-8 gap-1.5 hover:bg-accent">
            <Filter className="w-3.5 h-3.5" /> Filter
          </Button>
          <Button variant="outline" className="rounded-lg border-border text-muted-foreground text-sm h-8 gap-1.5 hover:bg-accent">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort
          </Button>
        </div>
      </div>

      {/* Search / Filter bar */}
      <div className="bg-card border border-border rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/55 transition-all">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <Input
              placeholder="Search jobs by title or keyword..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="border-none bg-transparent h-auto text-sm text-foreground focus-visible:ring-0 placeholder:text-muted-foreground/50 p-0"
            />
          </div>
          <select className="h-9 px-3 text-sm border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Departments</option>
          </select>
          <select className="h-9 px-3 text-sm border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* ── Job Cards ── */}
      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => <JobCardSkeleton key={i} />)}
        </div>
      )}

      {!isLoading && filteredJobs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
            <Briefcase className="w-7 h-7 text-muted-foreground/30" />
          </div>
          <h3 className="text-base font-semibold text-muted-foreground mb-1">No Jobs Posted Yet</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-xs">Start attracting talent by posting your first job opening.</p>
          {hasPermission("jobs:add") && (
            <Button onClick={openAddForm} className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
              <Plus className="w-4 h-4" /> Post First Job
            </Button>
          )}
        </div>
      )}

      {!isLoading && filteredJobs.length > 0 && (
        <div className="space-y-3">
          {filteredJobs.map((job) => {
            /* progress calc: days remaining as % of 30-day window */
            const daysLeft = job.deadlineDate
              ? Math.max(0, Math.ceil((new Date(job.deadlineDate).getTime() - Date.now()) / 86_400_000))
              : null;
            const progress = daysLeft !== null ? Math.min(100, Math.round((1 - daysLeft / 30) * 100)) : 60;

            return (
              <div key={job.id} className="bg-card border border-border rounded-xl p-5">
                {/* Top row: status + date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                    job.isActive
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {job.isActive ? "Active" : "Inactive"}
                  </span>
                  <span className="text-xs text-muted-foreground">Posted {getDaysAgo(job.postedDate)}</span>
                </div>

                {/* Main row: info + apps count + actions */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors mb-1.5"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      {job.jobTitle ?? "Untitled Position"}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      {job.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                      )}
                      {(job.salaryMin || job.salaryMax) && (
                        <span className="flex items-center gap-1 text-emerald-500 font-medium">
                          <DollarSign className="w-3 h-3" />
                          {job.salaryMin ? `$${(job.salaryMin/1000).toFixed(0)}k` : ""}
                          {job.salaryMin && job.salaryMax ? " - " : ""}
                          {job.salaryMax ? `$${(job.salaryMax/1000).toFixed(0)}k` : ""}
                        </span>
                      )}
                      {job.jobType && (
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />{job.jobType}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Apps count circle */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-full border border-primary/20 bg-primary/10">
                    <p className="text-base font-bold text-primary leading-none">—</p>
                    <p className="text-[9px] text-primary font-medium uppercase">APPS</p>
                  </div>

                  {/* Action buttons */}
                  <div className="shrink-0 flex items-center gap-2">
                    <Button
                      size="sm"
                      className="h-8 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      View
                    </Button>
                    {hasPermission("jobs:update") && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-lg border-border text-foreground text-xs font-semibold px-4 hover:bg-accent"
                        onClick={() => openEditForm(job)}
                      >
                        Edit
                      </Button>
                    )}

                    {/* More menu */}
                    <div className="relative">
                      {deleteConfirmId === job.id ? (
                        <div className="flex items-center gap-1.5 rounded-lg border border-destructive/20 bg-destructive/10 px-2 py-1">
                          <AlertTriangle className="w-3 h-3 text-destructive" />
                          <button className="text-[11px] text-muted-foreground hover:text-foreground" onClick={() => setDeleteConfirmId(null)}>Cancel</button>
                          <button className="text-[11px] font-bold text-destructive" onClick={() => { deleteJob.mutate(job.id); setDeleteConfirmId(null); }} disabled={deleteJob.isPending}>Delete</button>
                        </div>
                      ) : (
                        <button
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"
                          onClick={() => setDeleteConfirmId(job.id)}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Health: {daysLeft !== null ? `${daysLeft} days left` : "No deadline"}</span>
                    <span>{progress}% Complete</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Pagination ── */}
      {jobsData && (jobsData as any).totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6">
          <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:bg-accent">‹</button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-8 h-8 rounded border text-sm font-medium ${p === 1 ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:bg-accent"}`}>
              {p}
            </button>
          ))}
          <span className="px-1 text-muted-foreground">...</span>
          <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:bg-accent">›</button>
        </div>
      )}

      {/* ── Add / Edit Dialog (unchanged) ── */}
      <Dialog open={isFormOpen} onOpenChange={(o) => !o && closeForm()}>
        <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border-gray-200 p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  {editingJob ? <Edit className="w-4 h-4 text-blue-600" /> : <Plus className="w-4 h-4 text-blue-600" />}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{editingJob ? "Editing Job" : "New Posting"}</p>
                  <DialogTitle className="text-base font-bold text-gray-900 mt-0.5">{editingJob ? "Edit Job Details" : "Post a New Job"}</DialogTitle>
                </div>
              </div>
              <button onClick={closeForm} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleJobSubmit)} className="px-6 py-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="jobTitle" className="text-sm font-semibold text-gray-700">Job Title <span className="text-red-500">*</span></Label>
                <Input id="jobTitle" placeholder="e.g. Senior Frontend Developer" className="h-10 rounded-lg border-gray-200" {...register("jobTitle", { required: true })} />
                {errors.jobTitle && <p className="text-xs text-red-500">Required.</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="jobType" className="text-sm font-semibold text-gray-700">Job Type <span className="text-red-500">*</span></Label>
                <Input id="jobType" placeholder="e.g. Full-time, Contract" className="h-10 rounded-lg border-gray-200" {...register("jobType", { required: true })} />
                {errors.jobType && <p className="text-xs text-red-500">Required.</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="jobDescription" className="text-sm font-semibold text-gray-700">Description <span className="text-red-500">*</span></Label>
              <Textarea id="jobDescription" rows={4} placeholder="Describe the role, responsibilities, and team…" className="rounded-lg border-gray-200 resize-none" {...register("jobDescription", { required: true })} />
              {errors.jobDescription && <p className="text-xs text-red-500">Required.</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="location" className="text-sm font-semibold text-gray-700">Location</Label>
              <Input id="location" placeholder="e.g. New York / Remote" className="h-10 rounded-lg border-gray-200" {...register("location")} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="salaryMin" className="text-sm font-semibold text-gray-700">Min Salary</Label>
                <Input id="salaryMin" type="number" placeholder="50000" className="h-10 rounded-lg border-gray-200" {...register("salaryMin")} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="salaryMax" className="text-sm font-semibold text-gray-700">Max Salary</Label>
                <Input id="salaryMax" type="number" placeholder="90000" className="h-10 rounded-lg border-gray-200" {...register("salaryMax")} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="deadlineDate" className="text-sm font-semibold text-gray-700">Deadline</Label>
                <Input id="deadlineDate" type="date" className="h-10 rounded-lg border-gray-200" {...register("deadlineDate")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Requirements</Label>
              <div className="space-y-2">
                {(jobRequirements ?? []).map((req: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[10px] font-bold text-blue-600">{i + 1}</span>
                    <Input value={req} onChange={(e) => updateReq(i, e.target.value)} placeholder={`Requirement ${i + 1}`} className="h-9 rounded-lg border-gray-200 flex-1 text-sm" />
                    <button type="button" onClick={() => removeReq(i)} className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addReq} className="rounded-lg gap-1.5 h-8 text-xs font-semibold border-gray-200">
                <Plus className="w-3.5 h-3.5" /> Add Requirement
              </Button>
            </div>

            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <Button type="button" variant="outline" onClick={closeForm} className="flex-1 h-10 rounded-lg font-semibold border-gray-200">Cancel</Button>
              <Button type="submit" className="flex-1 h-10 rounded-lg font-semibold gap-2 bg-blue-600 hover:bg-blue-700 text-white" disabled={addJob.isPending || updateJob.isPending}>
                {addJob.isPending || updateJob.isPending ? "Saving…" : editingJob ? "Save Changes" : "Post Job"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompanyDashboard;
````

## File: src/features/follow/hooks/useFollow.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { followService } from "../services/followService";
import type { PaginatedFollowList } from "../types/follow";

/**
 * Follow User Mutation
 */
export const useFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (followingId: string) => followService.followUser(followingId),
    onMutate: async (followingId) => {
      // 1. Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["userProfile", followingId] });
      await queryClient.cancelQueries({ queryKey: ["userProfile"] });

      // 2. Snapshot previous values
      const previousOtherProfile = queryClient.getQueryData(["userProfile", followingId]);
      const previousMyProfile = queryClient.getQueryData(["userProfile"]);

      // We'll also update lists broadly, so snapshot them
      const listPredicate = (query: any) => {
        const key = query.queryKey[0] as string;
        return ["followers", "following", "my-followers", "my-following", "users"].includes(key);
      };
      const previousLists = queryClient.getQueriesData({ predicate: listPredicate });

      // 3. Optimistically update other user's profile
      queryClient.setQueryData(["userProfile", followingId], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          isFollowing: true,
          isFollowedByMe: true,
          followersCount: (old.followersCount || 0) + 1,
        };
      });

      // 4. Optimistically update my profile's following count
      queryClient.setQueryData(["userProfile"], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          followingCount: (old.followingCount || 0) + 1,
        };
      });

      // 5. Optimistically update any lists containing this user
      queryClient.setQueriesData({ predicate: listPredicate }, (old: any) => {
        if (!old || !old.items) return old;
        return {
          ...old,
          items: old.items.map((item: any) =>
            item.userId === followingId || item.id === followingId
              ? { ...item, isFollowedByMe: true }
              : item
          ),
        };
      });

      return { previousOtherProfile, previousMyProfile, previousLists, followingId };
    },
    onSuccess: () => {
      toast.success("User followed successfully!");
    },
    onError: (error: any, followingId, context) => {
      // Rollback
      if (context?.previousOtherProfile) {
        queryClient.setQueryData(["userProfile", followingId], context.previousOtherProfile);
      }
      if (context?.previousMyProfile) {
        queryClient.setQueryData(["userProfile"], context.previousMyProfile);
      }
      if (context?.previousLists) {
        context.previousLists.forEach(([key, data]) => {
          queryClient.setQueryData(key, data);
        });
      }
      const message = error?.response?.data?.errors?.[0] || "Failed to follow user";
      toast.error(message);
    },
    onSettled: (_, __, followingId) => {
      // Sync with server
      queryClient.invalidateQueries({
        predicate: (query) => {
          const key = query.queryKey[0] as string;
          return ["followers", "following", "my-followers", "my-following", "users"].includes(key);
        },
      });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile", followingId] });
    },
  });
};

/**
 * Unfollow User Mutation
 */
export const useUnfollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (followingId: string) => followService.unfollowUser(followingId),
    onMutate: async (followingId) => {
      // 1. Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["userProfile", followingId] });
      await queryClient.cancelQueries({ queryKey: ["userProfile"] });

      // 2. Snapshot previous values
      const previousOtherProfile = queryClient.getQueryData(["userProfile", followingId]);
      const previousMyProfile = queryClient.getQueryData(["userProfile"]);

      const listPredicate = (query: any) => {
        const key = query.queryKey[0] as string;
        return ["followers", "following", "my-followers", "my-following", "users"].includes(key);
      };
      const previousLists = queryClient.getQueriesData({ predicate: listPredicate });

      // 3. Optimistically update other user's profile
      queryClient.setQueryData(["userProfile", followingId], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          isFollowing: false,
          isFollowedByMe: false,
          followersCount: Math.max(0, (old.followersCount || 0) - 1),
        };
      });

      // 4. Optimistically update my profile's following count
      queryClient.setQueryData(["userProfile"], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          followingCount: Math.max(0, (old.followingCount || 0) - 1),
        };
      });

      // 5. Optimistically update any lists containing this user
      queryClient.setQueriesData({ predicate: listPredicate }, (old: any) => {
        if (!old || !old.items) return old;
        return {
          ...old,
          items: old.items.map((item: any) =>
            item.userId === followingId || item.id === followingId
              ? { ...item, isFollowedByMe: false }
              : item
          ),
        };
      });

      return { previousOtherProfile, previousMyProfile, previousLists, followingId };
    },
    onSuccess: () => {
      toast.success("User unfollowed successfully!");
    },
    onError: (error: any, followingId, context) => {
      // Rollback
      if (context?.previousOtherProfile) {
        queryClient.setQueryData(["userProfile", followingId], context.previousOtherProfile);
      }
      if (context?.previousMyProfile) {
        queryClient.setQueryData(["userProfile"], context.previousMyProfile);
      }
      if (context?.previousLists) {
        context.previousLists.forEach(([key, data]) => {
          queryClient.setQueryData(key, data);
        });
      }
      const message = error?.response?.data?.errors?.[0] || "Failed to unfollow user";
      toast.error(message);
    },
    onSettled: (_, __, followingId) => {
      // Sync with server
      queryClient.invalidateQueries({
        predicate: (query) => {
          const key = query.queryKey[0] as string;
          return ["followers", "following", "my-followers", "my-following", "users"].includes(key);
        },
      });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile", followingId] });
    },
  });
};

/**
 * Get Followers Query
 */
export const useGetFollowers = (
  userId: string,
  pageNumber: number = 1,
  pageSize: number = 10,
  searchValue?: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: ["followers", userId, pageNumber, pageSize, searchValue],
    queryFn: ({ signal }) =>
      followService.getFollowers(userId, pageNumber, pageSize, searchValue, signal),
    enabled: !!userId && enabled,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Get Following Query
 */
export const useGetFollowing = (
  userId: string,
  pageNumber: number = 1,
  pageSize: number = 10,
  searchValue?: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: ["following", userId, pageNumber, pageSize, searchValue],
    queryFn: ({ signal }) =>
      followService.getFollowing(userId, pageNumber, pageSize, searchValue, signal),
    enabled: !!userId && enabled,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Get My Followers Query (uses token to get logged-in user's followers)
 */
export const useGetMyFollowers = (
  pageNumber: number = 1,
  pageSize: number = 10,
  searchValue?: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: ["my-followers", pageNumber, pageSize, searchValue],
    queryFn: ({ signal }) =>
      followService.getMyFollowers(pageNumber, pageSize, searchValue, signal),
    enabled,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Get My Following Query (uses token to get logged-in user's following)
 */
export const useGetMyFollowing = (
  pageNumber: number = 1,
  pageSize: number = 10,
  searchValue?: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: ["my-following", pageNumber, pageSize, searchValue],
    queryFn: ({ signal }) =>
      followService.getMyFollowing(pageNumber, pageSize, searchValue, signal),
    enabled,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
````

## File: src/features/follow/pages/FollowersPage.tsx
````typescript
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetFollowers } from "../hooks/useFollow";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent } from "@/shared/components/ui/card";
import { User, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "../hooks/useFollow";

const FollowersPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const { data: followersData, isLoading, error } = useGetFollowers(
    userId || "",
    page,
    pageSize
  );

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = (id: string) => {
    followMutation.mutate(id);
  };

  const handleUnfollow = (id: string) => {
    unfollowMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-48 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !followersData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <Card className="max-w-md border border-border bg-card shadow-md">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">
              Failed to load followers. Please try again.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 px-2 sm:px-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">Followers</h1>
          <span className="text-muted-foreground text-sm sm:text-base">
            ({followersData.totalCount})
          </span>
        </div>

        {/* Followers List */}
        {followersData.items.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {followersData.items.map((follower) => (
              <Card key={follower.userId} className="border border-border bg-card shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Clickable Area for Profile Navigation */}
                    <div 
                      className="flex items-center gap-2 sm:gap-4 flex-1 cursor-pointer hover:opacity-80 transition-opacity min-w-0"
                      onClick={() => navigate(`/profile/${follower.userId}`)}
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {follower.profilePictureUrl ? (
                          <img
                            src={follower.profilePictureUrl}
                            alt={follower.fullName}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">
                          {follower.fullName}
                        </h3>
                        {follower.jobTitle && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <Briefcase className="h-3 w-3 shrink-0" />
                            <span className="truncate">{follower.jobTitle}</span>
                          </div>
                        )}
                        {follower.country && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">{follower.country}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Follow Button */}
                    {follower.isFollowedByMe ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnfollow(follower.userId)}
                        disabled={unfollowMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleFollow(follower.userId)}
                        disabled={followMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            {followersData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={!followersData.hasPreviousPage}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {followersData.pageNumber} of {followersData.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={!followersData.hasNextPage}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-12 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No followers yet</h3>
              <p className="text-muted-foreground">
                This user doesn't have any followers yet.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FollowersPage;
````

## File: src/features/follow/pages/FollowingPage.tsx
````typescript
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetFollowing } from "../hooks/useFollow";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent } from "@/shared/components/ui/card";
import { User, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "../hooks/useFollow";

const FollowingPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const { data: followingData, isLoading, error } = useGetFollowing(
    userId || "",
    page,
    pageSize
  );

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = (id: string) => {
    followMutation.mutate(id);
  };

  const handleUnfollow = (id: string) => {
    unfollowMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-48 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !followingData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <Card className="max-w-md border border-border bg-card shadow-md">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">
              Failed to load following. Please try again.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 px-2 sm:px-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">Following</h1>
          <span className="text-muted-foreground text-sm sm:text-base">
            ({followingData.totalCount})
          </span>
        </div>

        {/* Following List */}
        {followingData.items.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {followingData.items.map((user) => (
              <Card key={user.userId} className="border border-border bg-card shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Clickable Area for Profile Navigation */}
                    <div 
                      className="flex items-center gap-2 sm:gap-4 flex-1 cursor-pointer hover:opacity-80 transition-opacity min-w-0"
                      onClick={() => navigate(`/profile/${user.userId}`)}
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {user.profilePictureUrl ? (
                          <img
                            src={user.profilePictureUrl}
                            alt={user.fullName}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">
                          {user.fullName}
                        </h3>
                        {user.jobTitle && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <Briefcase className="h-3 w-3 shrink-0" />
                            <span className="truncate">{user.jobTitle}</span>
                          </div>
                        )}
                        {user.country && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">{user.country}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Follow Button */}
                    {user.isFollowedByMe ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnfollow(user.userId)}
                        disabled={unfollowMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleFollow(user.userId)}
                        disabled={followMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            {followingData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={!followingData.hasPreviousPage}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {followingData.pageNumber} of {followingData.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={!followingData.hasNextPage}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-12 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Not following anyone yet</h3>
              <p className="text-muted-foreground">
                This user doesn't follow anyone yet.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FollowingPage;
````

## File: src/features/follow/pages/MyFollowersPage.tsx
````typescript
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyFollowers } from "../hooks/useFollow";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent } from "@/shared/components/ui/card";
import { User, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "../hooks/useFollow";

const MyFollowersPage: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const { data: followersData, isLoading, error } = useGetMyFollowers(
    page,
    pageSize
  );

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = (id: string) => {
    followMutation.mutate(id);
  };

  const handleUnfollow = (id: string) => {
    unfollowMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-48 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !followersData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <Card className="max-w-md border border-border bg-card shadow-md">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">
              Failed to load followers. Please try again.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 px-2 sm:px-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">My Followers</h1>
          <span className="text-muted-foreground text-sm sm:text-base">
            ({followersData.totalCount})
          </span>
        </div>

        {/* Followers List */}
        {followersData.items.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {followersData.items.map((follower) => (
              <Card key={follower.userId} className="border border-border bg-card shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Clickable Area for Profile Navigation */}
                    <div 
                      className="flex items-center gap-2 sm:gap-4 flex-1 cursor-pointer hover:opacity-80 transition-opacity min-w-0"
                      onClick={() => navigate(`/profile/${follower.userId}`)}
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {follower.profilePictureUrl ? (
                          <img
                            src={follower.profilePictureUrl}
                            alt={follower.fullName}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">
                          {follower.fullName}
                        </h3>
                        {follower.jobTitle && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <Briefcase className="h-3 w-3 shrink-0" />
                            <span className="truncate">{follower.jobTitle}</span>
                          </div>
                        )}
                        {follower.country && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">{follower.country}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Follow Button */}
                    {follower.isFollowedByMe ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnfollow(follower.userId)}
                        disabled={unfollowMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleFollow(follower.userId)}
                        disabled={followMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            {followersData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={!followersData.hasPreviousPage}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {followersData.pageNumber} of {followersData.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={!followersData.hasNextPage}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-8 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No followers yet</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyFollowersPage;
````

## File: src/features/follow/pages/MyFollowingPage.tsx
````typescript
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyFollowing } from "../hooks/useFollow";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card, CardContent } from "@/shared/components/ui/card";
import { User, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "../hooks/useFollow";

const MyFollowingPage: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const { data: followingData, isLoading, error } = useGetMyFollowing(
    page,
    pageSize
  );

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = (id: string) => {
    followMutation.mutate(id);
  };

  const handleUnfollow = (id: string) => {
    unfollowMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-48 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !followingData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <Card className="max-w-md border border-border bg-card shadow-md">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">
              Failed to load following. Please try again.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 px-2 sm:px-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold">My Following</h1>
          <span className="text-muted-foreground text-sm sm:text-base">
            ({followingData.totalCount})
          </span>
        </div>

        {/* Following List */}
        {followingData.items.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {followingData.items.map((user) => (
              <Card key={user.userId} className="border border-border bg-card shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Clickable Area for Profile Navigation */}
                    <div 
                      className="flex items-center gap-2 sm:gap-4 flex-1 cursor-pointer hover:opacity-80 transition-opacity min-w-0"
                      onClick={() => navigate(`/profile/${user.userId}`)}
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {user.profilePictureUrl ? (
                          <img
                            src={user.profilePictureUrl}
                            alt={user.fullName}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">
                          {user.fullName}
                        </h3>
                        {user.jobTitle && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <Briefcase className="h-3 w-3 shrink-0" />
                            <span className="truncate">{user.jobTitle}</span>
                          </div>
                        )}
                        {user.country && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">{user.country}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Follow Button */}
                    {user.isFollowedByMe ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnfollow(user.userId)}
                        disabled={unfollowMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleFollow(user.userId)}
                        disabled={followMutation.isPending}
                        className="rounded-full text-xs sm:text-sm px-3 sm:px-4 shrink-0"
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            {followingData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={!followingData.hasPreviousPage}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {followingData.pageNumber} of {followingData.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={!followingData.hasNextPage}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-8 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Not following anyone yet</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyFollowingPage;
````

## File: src/features/follow/services/followService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  PaginatedFollowList,
} from "../types/follow";

class FollowService {
  async followUser(followingId: string, signal?: AbortSignal): Promise<void> {
    await apiClient.post(`/follow/${followingId}`, undefined, { signal });
  }

  async unfollowUser(followingId: string, signal?: AbortSignal): Promise<void> {
    await apiClient.delete(`/follow/${followingId}`, { signal });
  }

  async getFollowers(
    userId: string,
    pageNumber: number = 1,
    pageSize: number = 10,
    searchValue?: string,
    signal?: AbortSignal
  ): Promise<PaginatedFollowList> {
    const params = new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      ...(searchValue && { searchValue }),
    });

    return await apiClient.get<PaginatedFollowList>(
      `/follow/${userId}/followers?${params}`,
      { signal }
    );
  }

  async getFollowing(
    userId: string,
    pageNumber: number = 1,
    pageSize: number = 10,
    searchValue?: string,
    signal?: AbortSignal
  ): Promise<PaginatedFollowList> {
    const params = new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      ...(searchValue && { searchValue }),
    });

    return await apiClient.get<PaginatedFollowList>(
      `/follow/${userId}/following?${params}`,
      { signal }
    );
  }

  async getMyFollowers(
    pageNumber: number = 1,
    pageSize: number = 10,
    searchValue?: string,
    signal?: AbortSignal
  ): Promise<PaginatedFollowList> {
    const params = new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      ...(searchValue && { searchValue }),
    });

    return await apiClient.get<PaginatedFollowList>(
      `/follow/my/followers?${params}`,
      { signal }
    );
  }

  async getMyFollowing(
    pageNumber: number = 1,
    pageSize: number = 10,
    searchValue?: string,
    signal?: AbortSignal
  ): Promise<PaginatedFollowList> {
    const params = new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      ...(searchValue && { searchValue }),
    });

    return await apiClient.get<PaginatedFollowList>(
      `/follow/my/following?${params}`,
      { signal }
    );
  }
}

export const followService = new FollowService();
````

## File: src/features/follow/types/follow.ts
````typescript
export interface FollowerListItem {
  userId: string;
  fullName: string;
  jobTitle: string | null;
  profilePictureUrl: string | null;
  country: string | null;
  isFollowedByMe: boolean;
}

export interface PaginatedFollowList {
  items: FollowerListItem[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface FollowRequest {
  followingId: string;
}
````

## File: src/features/home/components/AudienceSection.tsx
````typescript
import { Building, UserCircle } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureList } from "./FeatureList";

gsap.registerPlugin(ScrollTrigger);

export const AudienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const jobSeekerFeatures = [
    { text: "AI Resume & Profile Analysis" },
    { text: "Smart Job Discovery & Filtering" },
    { text: "Skill Gap Analysis & Insights" },
    { text: "Interview Preparation & Mock Interviews" },
  ];

  const recruiterFeatures = [
    { text: "Access to Pre-vetted Talent Pool" },
    { text: "AI-Powered Candidate Matching" },
    { text: "Company Branding & Employer Profile" },
    { text: "Automated Application Tracking" },
  ];

  useGSAP(() => {
    gsap.fromTo(".audience-box", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Two Powerful Experiences.</span>
          </h2>
          <p className="text-lg text-muted-foreground">Tailored tools for students, professionals, and recruiters to succeed in the modern job market.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400"><UserCircle className="h-8 w-8" /></div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Job Seekers & Grads</h3>
            <p className="text-muted-foreground mb-8">Build a standout digital portfolio and let our AI match you with companies looking for your exact skills.</p>
            <FeatureList features={jobSeekerFeatures} />
          </div>

          <div className="audience-box relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400"><Building className="h-8 w-8" /></div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Recruiters</h3>
            <p className="text-muted-foreground mb-8">Stop sifting through resumes. Post jobs and instantly get matched with AI-vetted tech professionals.</p>
            <FeatureList features={recruiterFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/CTASection.tsx
````typescript
import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold">
          <Zap className="h-4 w-4" /> Available for Free & Premium Users
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to elevate your professional journey?</h2>
        <p className="text-lg text-muted-foreground mb-10">Start with a free account, or upgrade to <strong className="text-foreground">Premium</strong> for advanced AI insights and prioritized matching.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => navigate("/register")} size="lg" className="w-full sm:w-auto h-14 px-10 bg-purple-600 rounded-xl">Create Your Account Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
          <Button onClick={() => navigate("/pricing")} size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-xl">View Premium Plans</Button>
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/FeatureCard.tsx
````typescript
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/shared/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  colorClass,
  bgClass,
  textClass,
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full",
        bgClass,
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-inner",
              colorClass
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
        </div>
        <h3 className={cn("mb-3 text-xl font-bold tracking-tight", textClass)}>{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
````

## File: src/features/home/components/FeatureList.tsx
````typescript
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export const FeatureList = ({ features, className }: FeatureListProps) => {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-sm text-foreground md:text-base">
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
};
````

## File: src/features/home/components/FeaturesSection.tsx
````typescript
import { FileText, Briefcase, Compass, LayoutTemplate, LineChart, Video } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: FileText, title: "AI Resume Analysis", description: "Get smart feedback on your resume to pass ATS filters and highlight strengths.", gradient: "from-purple-500 to-fuchsia-500" },
  { icon: Briefcase, title: "Application Tracking", description: "Manage your job hunt. Track statuses, follow-ups, and upcoming interviews.", gradient: "from-indigo-500 to-blue-500" },
  { icon: Compass, title: "Smart Discovery", description: "Get job recommendations based on your unique skills and career goals.", gradient: "from-teal-500 to-emerald-500" },
  { icon: LineChart, title: "Skill Gap Analysis", description: "Identify missing skills and get tailored learning paths for your dream role.", gradient: "from-emerald-500 to-green-500" },
  { icon: LayoutTemplate, title: "Digital Portfolio", description: "Create a stunning professional portfolio effortlessly to showcase your work.", gradient: "from-orange-500 to-rose-500" },
  { icon: Video, title: "Mock Interviews", description: "Practice with AI-driven interview simulations for technical and HR rounds.", gradient: "from-blue-500 to-cyan-500" },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.fromTo(".feat-header", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } });
    gsap.fromTo(".feat-card", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: ".feat-grid", start: "top 70%" } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="feat-header mb-16 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4">Advanced Tools</p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl mb-6">Manage your entire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">career journey</span></h2>
        </div>
        <div className="feat-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feat-card group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1">
              <div className={cn("mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md", feature.gradient)}><feature.icon className="h-5 w-5" /></div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/HeroSection.tsx
````typescript
import { Button } from "@/shared/components/ui/button";
import team from "@/assets/imgs/home/hero.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { ArrowRight, Sparkles, Building2, Code, Laptop } from "lucide-react";

gsap.registerPlugin(TextPlugin);

interface HeroSectionProps {
  onGetStarted?: () => void;
  onBrowseJobs?: () => void;
}

export const HeroSection = ({
  onGetStarted,
  onBrowseJobs,
}: HeroSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const typeWriterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-glow", { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 2, stagger: 0.2 });
    tl.fromTo(".hero-reveal", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=1.4");
    tl.fromTo(".hero-image-card", { autoAlpha: 0, y: 60, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, "-=0.8");
    tl.fromTo(".floating-shape", { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 1, stagger: 0.3 }, "-=1");
    tl.fromTo(".trusted-by", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.5");

    const words = ["Developers", "Graduates", "Job Seekers", "Recruiters"];
    const mainTimeline = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      const textTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.8 });
      textTl.to(typeWriterRef.current, { duration: 0.8, text: word, ease: "none" });
      mainTimeline.add(textTl);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="hero-glow absolute top-[-10%] left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10 pointer-events-none" />
      <div className="hero-glow absolute bottom-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5 pointer-events-none" />
      <div className="hero-glow absolute top-[20%] left-[5%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[80px] dark:bg-blue-600/5 pointer-events-none" />

      {/* Floating Shapes */}
      <div className="floating-shape absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-xl animate-bounce pointer-events-none" style={{ animationDuration: '6s' }} />
      <div className="floating-shape absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-xl animate-bounce pointer-events-none" style={{ animationDuration: '8s' }} />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-10 shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>Next-Gen AI Career Platform</span>
        </div>

        <h1 className="hero-reveal text-center text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          Elevate Your Career <br className="hidden sm:block" />
          With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600">Precision AI</span>
        </h1>

        <p className="hero-reveal mt-8 text-center text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl max-w-3xl font-medium">
          Build your professional profile, analyze your skills, and let our intelligent algorithm match you with the perfect job opportunities.
        </p>

        <div className="hero-reveal mt-12 flex flex-col items-center gap-5 sm:flex-row">
          <Button onClick={onGetStarted} size="lg" className="group h-14 px-10 bg-primary text-white text-lg font-bold shadow-2xl shadow-primary/30 rounded-2xl transition-all hover:scale-105 hover:shadow-primary/40">
            <span className="flex items-center gap-2">Get Started Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
          </Button>
          <Button onClick={onBrowseJobs} variant="outline" size="lg" className="h-14 px-10 text-lg font-bold border-border/80 rounded-2xl backdrop-blur-sm hover:bg-accent/50 transition-all">
            Explore Opportunities
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="hero-image-card mt-20 w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-muted/20 p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden group">
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/40 rounded-t-[2.2rem] border-b border-white/5">
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500/60 shadow-sm" />
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/60 shadow-sm" />
                <div className="h-3.5 w-3.5 rounded-full bg-green-500/60 shadow-sm" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-b-[2.2rem]">
              <img src={team} alt="Platform Dashboard" className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="trusted-by mt-32 w-full max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
            <p className="text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">Trusted by Industry Leaders</p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic"><Building2 className="h-7 w-7 text-primary"/> TECHCORP</div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic"><Laptop className="h-7 w-7 text-purple-500"/> DEVSTUDIO</div>
            <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground italic"><Code className="h-7 w-7 text-blue-500"/> INNOVATE</div>
          </div>
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/HowItWorksSection.tsx
````typescript
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileEdit, Sparkles, Target, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const steps = [
    { stepNumber: 1, title: "Build Your Profile", description: "Upload your resume and let our AI create a premium digital portfolio.", icon: FileEdit, gradient: "from-purple-500 to-fuchsia-500", accentTitle: "text-purple-400" },
    { stepNumber: 2, title: "Get Matched", description: "Our algorithm filters thousands of listings to find your perfect fit.", icon: Sparkles, gradient: "from-indigo-400 to-blue-500", accentTitle: "text-indigo-400" },
    { stepNumber: 3, title: "Land The Job", description: "Track applications and practice with AI interviews to step into your new role.", icon: Target, gradient: "from-teal-400 to-emerald-500", accentTitle: "text-teal-400" },
  ];

  useGSAP(() => {
    gsap.fromTo(".hiw-card", { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.7, stagger: 0.2, scrollTrigger: { trigger: ".hiw-grid", start: "top 75%" } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">How Career Path Works</h2>
        </div>
        <div className="hiw-grid relative flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6 w-full md:w-1/3">
              <div className="hiw-card group relative w-full rounded-3xl border border-border/50 bg-background/50 p-8 text-center flex flex-col items-center">
                <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black opacity-10", step.accentTitle)}>{step.stepNumber}</div>
                <div className={cn("relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-white", step.gradient)}><step.icon className="h-8 w-8" /></div>
                <h3 className="mt-6 mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < 2 && <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/index.ts
````typescript
// src/features/home/components/index.ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { HowItWorksSection } from "./HowItWorksSection";
export { StatsSection } from "./StatsSection";
export { AudienceSection } from "./AudienceSection";
export { SocialProofSection } from "./SocialProofSection";
export { CTASection } from "./CTASection";
export { FeatureCard } from "./FeatureCard";
export { FeatureList } from "./FeatureList";
export { StatCard } from "./StatCard";
export { StepCard } from "./StepCard";
````

## File: src/features/home/components/SocialProofSection.tsx
````typescript
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Full-Stack Developer",
    text: "The AI resume analysis was a game-changer. It helped me structure my .NET and Laravel projects perfectly, and I landed multiple interviews within a week.",
    avatar: "AH",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Sarah Mitchell",
    role: "Fresh Graduate",
    text: "As a fresh graduate, I didn't know where to start. The skill gap analysis showed me exactly what to focus on, and the smart matching found me an amazing junior role.",
    avatar: "SM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Omar Khaled",
    role: "Technical Recruiter",
    text: "Career Path's intelligent filtering saves our company hours of sourcing. We only connect with candidates whose skills genuinely match our technical stack.",
    avatar: "OK",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const stats = [
  { value: "50K+", label: "Active Job Seekers" },
  { value: "12,000+", label: "Successful Hires" },
  { value: "2M+", label: "Resumes Analyzed" },
  { value: "500+", label: "Partner Companies" },
];

export const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".sp-header", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } });
    gsap.fromTo(".sp-stat", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".sp-stats", start: "top 75%" } });
    gsap.fromTo(".sp-card", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: ".sp-grid", start: "top 75%" } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="sp-stats flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="sp-stat text-center">
              <p className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="sp-header mb-14 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">Trusted by professionals</h2>
        </div>

        <div className="sp-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="sp-card group relative rounded-2xl border border-border/50 bg-background/80 dark:bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1">
              <Quote className="h-8 w-8 text-purple-500/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white text-sm font-bold ${t.gradient}`}>{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/StatCard.tsx
````typescript
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-card p-4 shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--success)] text-[var(--success-foreground)]">
          <Users className="h-4 w-4" />
        </div>
        <div>
          <p className="text-lg font-semibold text-card-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/home/components/StatsSection.tsx
````typescript
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { value: "50,000+", label: "Active Job Seekers" },
    { value: "12,000+", label: "Successful Hires" },
    { value: "2M+", label: "Resumes Analyzed" },
    { value: "500+", label: "Partner Companies" },
  ];

  useGSAP(() => {
    gsap.fromTo(".stat-item", { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-muted border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-muted/50 to-muted" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-sm font-semibold uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
````

## File: src/features/home/components/StepCard.tsx
````typescript
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  colorClass: string;
  className?: string;
}

export const StepCard = ({
  stepNumber,
  title,
  description,
  colorClass,
  className,
}: StepCardProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* Numbered Circle */}
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-3xl bg-gradient-to-br",
          colorClass
        )}
      >
        {stepNumber}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
};
````

## File: src/features/home/pages/HomePage.tsx
````typescript
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection, CTASection } from "@/features/home/components";
import Footer from "@/shared/components/navigation/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleBrowseJobs = () => {
    navigate("/jobs");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection
        onGetStarted={handleGetStarted}
        onBrowseJobs={handleBrowseJobs}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
````

## File: src/features/interview/hooks/useInterview.ts
````typescript
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
````

## File: src/features/interview/services/interviewService.ts
````typescript
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
````

## File: src/features/interview/types/interview.ts
````typescript
export interface InterviewOption {
  id: number;
  optionText: string;
}

export interface InterviewQuestion {
  id: number;
  question: string;
  options: InterviewOption[];
}

export interface InterviewAnswer {
  questionId: number;
  selectedOptionId: number;
}

export interface SubmitInterviewRequest {
  answers: InterviewAnswer[];
}

export interface InterviewResultDetail {
  questionId: number;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface InterviewResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  details: InterviewResultDetail[];
}
````

## File: src/features/job-tracker/hooks/useJobTracker.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { jobTrackerService } from "@/features/job-tracker/services/jobTrackerService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  JobTrackerQueryParams,
  JobApplicationRequest,
} from "@/features/job-tracker/types/jobTracker";

/**
 * Hook for getting all job applications
 */
export const useGetJobApplications = (params?: JobTrackerQueryParams) => {
  return useQuery({
    queryKey: ["job-tracker", params],
    queryFn: ({ signal }) => jobTrackerService.getJobApplications(params, signal),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Hook for getting single job application
 */
export const useGetJobApplication = (id: string) => {
  return useQuery({
    queryKey: ["job-tracker", id],
    queryFn: () => jobTrackerService.getJobApplication(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!id,
  });
};

/**
 * Hook for adding job application
 */
export const useAddJobApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: JobApplicationRequest) =>
      jobTrackerService.addJobApplication(request),
    onSuccess: () => {
      toast.success("Application added successfully!");
      queryClient.invalidateQueries({ queryKey: ["job-tracker"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for updating job application
 */
export const useUpdateJobApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: JobApplicationRequest }) =>
      jobTrackerService.updateJobApplication(id, request),
    onSuccess: () => {
      toast.success("Application updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["job-tracker"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for deleting job application
 */
export const useDeleteJobApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => jobTrackerService.deleteJobApplication(id),
    onSuccess: () => {
      toast.success("Application deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["job-tracker"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};
````

## File: src/features/job-tracker/hooks/useJobTrackerStats.ts
````typescript
import { useMemo } from "react";
import { ApplicationStatus } from "@/features/job-tracker/types/jobTracker";
import type { JobApplicationResponse } from "@/features/job-tracker/types/jobTracker";

export const useJobTrackerStats = (applications: JobApplicationResponse[] | undefined) => {
  return useMemo(() => {
    if (!applications) return { applied: 0, interviews: 0, offers: 0, rejected: 0 };
    
    return applications.reduce(
      (acc, app) => {
        switch (app.status) {
          case ApplicationStatus.Applied:
            return { ...acc, applied: acc.applied + 1 };
          case ApplicationStatus.Interviewed:
            return { ...acc, interviews: acc.interviews + 1 };
          case ApplicationStatus.Offered:
            return { ...acc, offers: acc.offers + 1 };
          case ApplicationStatus.Rejected:
            return { ...acc, rejected: acc.rejected + 1 };
          default:
            return acc;
        }
      },
      { applied: 0, interviews: 0, offers: 0, rejected: 0 }
    );
  }, [applications]);
};
````

## File: src/features/job-tracker/pages/JobTrackerPage.tsx
````typescript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "@/features/auth/services/authService";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetJobApplications, useAddJobApplication, useUpdateJobApplication, useDeleteJobApplication } from "@/features/job-tracker/hooks/useJobTracker";
import { Button } from "@/shared/components/ui/button";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";

import { Plus, Edit, Trash2, Briefcase, Building, Calendar, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationSchema, type JobApplicationFormData } from "@/features/job-tracker/schemas/jobTrackerSchemas";
import { ApplicationStatus, ApplicationStatusLabels, ApplicationStatusColors } from "@/features/job-tracker/types/jobTracker";

const JobTrackerPage: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState<any>(null);

  // Redirect unauthenticated users
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const { data: applicationsData, isLoading } = useGetJobApplications({
    searchValue: debouncedSearch,
    pageNumber,
    pageSize,
  });

  const addApplication = useAddJobApplication();
  const updateApplication = useUpdateJobApplication();
  const deleteApplication = useDeleteJobApplication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema) as any,
    defaultValues: {
      jobTitle: "",
      companyName: "",
      applicationDate: new Date().toISOString().split('T')[0],
      status: ApplicationStatus.Applied,
      applicationSource: "",
      notes: "",
    },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPageNumber(1);
  };

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const handleAddApplication = (data: JobApplicationFormData) => {
    addApplication.mutate(data, {
      onSuccess: () => {
        setIsAddOpen(false);
        reset();
      }
    });
  };

  const handleEditApplication = (application: any) => {
    setEditingApplication(application);
    reset({
      jobTitle: application.jobTitle || "",
      companyName: application.companyName || "",
      applicationDate: application.applicationDate ? new Date(application.applicationDate).toISOString().split('T')[0] : "",
      status: String(application.status) as any,
      applicationSource: application.applicationSource || "",
      notes: application.notes || "",
    });
    setIsAddOpen(true);
  };


  const handleUpdateApplication = (data: JobApplicationFormData) => {
    if (!editingApplication) return;
    
    updateApplication.mutate({
      id: editingApplication.id,
      request: data,
    }, {
      onSuccess: () => {
        setIsAddOpen(false);
        setEditingApplication(null);
        reset();
      }
    });
  };

  const handleDeleteApplication = (application: any) => {
    if (window.confirm(`Are you sure you want to delete this application?`)) {
      deleteApplication.mutate(application.id);
    }
  };


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center bg-card p-8 rounded-[2rem] shadow-xl border border-border max-w-sm w-full">
          <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black mb-2 text-foreground">Sign In Required</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Please log in to your account to manage your job applications.</p>
          <Button 
            className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-xl shadow-primary/20"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8 lg:p-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex justify-between items-center mb-10">
            <div className="space-y-2">
              <Skeleton className="h-10 w-48 rounded-xl" />
              <Skeleton className="h-5 w-64 rounded-lg" />
            </div>
            <Skeleton className="h-12 w-40 rounded-xl hidden sm:block" />
          </div>
          <Skeleton className="h-14 w-full rounded-2xl mb-8" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-[1.5rem] p-6 shadow-sm flex items-center gap-4">
                <Skeleton className="w-14 h-14 rounded-2xl shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-1/2 rounded-lg" />
                  <Skeleton className="h-4 w-1/3 rounded-lg" />
                </div>
                <Skeleton className="h-8 w-24 rounded-full shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  /* ── status badge helper ── */
  const getStatusBadge = (status: ApplicationStatus) => {
    const label = ApplicationStatusLabels[status] ?? String(status);
    const color = ApplicationStatusColors[status] ?? "#6b7280";
    return (
      <span
        className="inline-flex items-center gap-1.5 text-[10px] font-black px-3 py-1 rounded-xl border uppercase tracking-wider"
        style={{
          backgroundColor: color + "12",
          color,
          borderColor: color + "20",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: color }} />
        {label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-10">
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div className="space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Job Tracker</h1>
            <p className="text-lg text-muted-foreground font-medium leading-tight">Keep track of your career progress.</p>
          </div>

          <Sheet open={isAddOpen} onOpenChange={(open) => {
            setIsAddOpen(open);
            if (!open) setEditingApplication(null);
          }}>
            <SheetTrigger asChild>
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-2xl h-14 px-8 gap-3 font-bold shadow-xl shadow-primary/20 w-full sm:w-auto justify-center transition-all active:scale-[0.98]"
                onClick={() => {
                  setEditingApplication(null);
                  reset({ jobTitle: "", companyName: "", applicationDate: new Date().toISOString().split('T')[0], status: ApplicationStatus.Applied, applicationSource: "", notes: "" });
                }}
              >
                <Plus className="w-5 h-5" /> Add Application
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl rounded-l-[2.5rem] p-8">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-black tracking-tight">{editingApplication ? "Update Details" : "New Application"}</SheetTitle>
              </SheetHeader>
              <form onSubmit={handleSubmit((editingApplication ? handleUpdateApplication : handleAddApplication) as any)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Job Title *</Label>
                  <Input id="jobTitle" {...register("jobTitle")} className="h-12 rounded-xl bg-muted/50 border-none shadow-inner" placeholder="e.g. Senior Frontend Developer" />
                  {errors.jobTitle && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{errors.jobTitle.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Company Name</Label>
                  <Input id="companyName" {...register("companyName")} className="h-12 rounded-xl bg-muted/50 border-none shadow-inner" placeholder="e.g. Google" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="applicationDate" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Date Applied</Label>
                    <Input id="applicationDate" type="date" {...register("applicationDate")} className="h-12 rounded-xl bg-muted/50 border-none shadow-inner text-xs" />
                    {errors.applicationDate && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{errors.applicationDate.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Status *</Label>
                    <select id="status" {...register("status")} className="w-full h-12 rounded-xl bg-muted/50 border-none shadow-inner text-xs px-3 font-medium outline-none">
                      {Object.entries(ApplicationStatusLabels).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicationSource" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Application Source</Label>
                  <Input id="applicationSource" {...register("applicationSource")} className="h-12 rounded-xl bg-muted/50 border-none shadow-inner" placeholder="e.g. LinkedIn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Notes & Details</Label>
                  <Textarea id="notes" rows={4} {...register("notes")} className="rounded-2xl bg-muted/50 border-none shadow-inner resize-none p-4 text-sm" placeholder="Any specific details about the interview process..." />
                </div>
                <Button type="submit" className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-xl shadow-primary/20 mt-4 transition-all active:scale-[0.98]" disabled={addApplication.isPending || updateApplication.isPending}>
                  {addApplication.isPending || updateApplication.isPending ? "Saving..." : editingApplication ? "Update Application" : "Save Application"}
                </Button>
              </form>
            </SheetContent>
          </Sheet>
        </div>


        {/* ── Search + Filter Bar ── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <Input
              placeholder="Search by job title or company..."
              value={searchValue}
              onChange={handleSearch}
              className="pl-12 w-full h-14 bg-card border border-border shadow-sm focus:ring-2 focus:ring-primary/20 rounded-2xl transition-all text-base"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl border-border h-14 px-6 bg-card shadow-sm hover:bg-muted flex-1 md:flex-none font-bold text-muted-foreground gap-2">
              <Calendar className="w-4 h-4" /> Newest
            </Button>
          </div>
        </div>

        {/* ── Applications List ── */}
        <div className="space-y-4">
          {applicationsData?.items?.length === 0 && (
            <div className="bg-card border border-border rounded-[2.5rem] p-16 text-center shadow-sm">
              <div className="w-20 h-20 bg-muted text-muted-foreground/60 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">{searchValue ? "No Results Found" : "Start Tracking Today"}</h3>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {searchValue ? "We couldn't find any applications matching your search terms." : "Add your first job application and start managing your journey to success."}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {applicationsData?.items?.map((application, idx) => (
              <div
                key={application.id}
                className="group bg-card border border-border rounded-[2rem] p-2 pr-4 md:pr-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer"
                onClick={() => handleEditApplication(application)}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-center gap-4 p-4 flex-1">
                  {/* Company avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center shrink-0 shadow-inner transition-colors">
                    <span className="text-xl font-black text-muted-foreground group-hover:text-primary transition-colors">
                      {(application.companyName || "?")[0].toUpperCase()}
                    </span>
                  </div>

                  {/* Job info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-foreground text-lg leading-tight truncate group-hover:text-primary transition-colors">
                      {application.jobTitle || "Untitled Position"}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <p className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 opacity-60" />
                        {application.companyName || "Unknown"}
                      </p>
                      {application.applicationSource && (
                        <p className="text-xs font-semibold text-muted-foreground/80 px-2 py-0.5 bg-muted rounded-lg">
                          {application.applicationSource}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status + Date (Desktop) */}
                <div className="hidden sm:flex flex-col items-end shrink-0 py-4 min-w-[140px]">
                  {getStatusBadge(application.status)}
                  {application.applicationDate && (
                    <p className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-tighter">
                      Applied {new Date(application.applicationDate).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                    </p>
                  )}
                </div>

                {/* Mobile Status Row */}
                <div className="flex sm:hidden items-center justify-between px-6 pb-4 pt-0 border-t border-border/60">
                   <div className="flex gap-2 pt-4">
                     <Button 
                       variant="ghost" 
                       size="sm" 
                       className="h-10 w-10 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10"
                       onClick={(e) => { e.stopPropagation(); handleEditApplication(application); }}
                     >
                       <Edit className="w-4 h-4" />
                     </Button>
                     <Button 
                       variant="ghost" 
                       size="sm" 
                       className="h-10 w-10 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                       onClick={(e) => { e.stopPropagation(); handleDeleteApplication(application); }}
                     >
                       <Trash2 className="w-4 h-4" />
                     </Button>
                   </div>
                   <div className="pt-4 flex flex-col items-end">
                     {getStatusBadge(application.status)}
                      {application.applicationDate && (
                        <span className="text-[10px] font-bold text-muted-foreground mt-1 uppercase">
                          {new Date(application.applicationDate).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                        </span>
                      )}
                   </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden sm:flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditApplication(application)}
                    className="w-10 h-10 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteApplication(application)}
                    className="w-10 h-10 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pagination ── */}
        {(applicationsData?.hasNextPage || applicationsData?.hasPreviousPage) && (
          <div className="flex items-center justify-center gap-3 mt-12 mb-10">
            {applicationsData.hasPreviousPage && (
              <Button
                variant="outline"
                className="h-12 rounded-xl border-border bg-card shadow-sm font-bold text-muted-foreground px-6 hover:bg-muted"
                onClick={() => handlePageChange(pageNumber - 1)}
              >
                ← Previous
              </Button>
            )}
            
            {applicationsData.hasNextPage && (
              <Button
                variant="outline"
                className="h-12 rounded-xl border-border bg-card shadow-sm font-bold text-muted-foreground px-8 hover:bg-muted gap-2 shadow-xl"
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                Load More <Plus className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobTrackerPage;
````

## File: src/features/job-tracker/schemas/jobTrackerSchemas.ts
````typescript
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
````

## File: src/features/job-tracker/services/jobTrackerService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  JobApplicationsListResponse,
  JobTrackerQueryParams,
  JobApplicationRequest,
  JobApplicationResponse,
} from "../types/jobTracker";


/**
 * Job Tracker Service
 * Handles all Job Tracker endpoints
 */
class JobTrackerService {
  /**
   * Get all job applications for current user
   * GET /JobTracker
   */
  async getJobApplications(params?: JobTrackerQueryParams, signal?: AbortSignal): Promise<JobApplicationsListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    
    const queryString = queryParams.toString();
    const response = await apiClient.get<any>(`/JobTracker?${queryString}`, { signal });
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Get single job application by id
   * GET /JobTracker/{id}
   */
  async getJobApplication(id: string): Promise<JobApplicationResponse> {
    const response = await apiClient.get<any>(`/JobTracker/${id}`);
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Add new job application
   * POST /JobTracker
   */
  async addJobApplication(request: JobApplicationRequest): Promise<JobApplicationResponse> {
    const response = await apiClient.post<JobApplicationResponse>("/JobTracker", request);
    return response;
  }

  /**
   * Update job application
   * PUT /JobTracker/{id}
   */
  async updateJobApplication(id: string, request: JobApplicationRequest): Promise<void> {
    await apiClient.put(`/JobTracker/${id}`, request);
  }

  /**
   * Delete job application
   * DELETE /JobTracker/{id}
   */
  async deleteJobApplication(id: string): Promise<void> {
    await apiClient.delete(`/JobTracker/${id}`);
  }
}

export const jobTrackerService = new JobTrackerService();
````

## File: src/features/job-tracker/types/jobTracker.ts
````typescript
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
````

## File: src/features/jobs/components/JobApplySheet.tsx
````typescript
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Phone, MessageSquare, Upload, Send, Sparkles } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { applyJobSchema } from "@/features/jobs/schemas/jobSchemas";
import type { ApplyJobRequest } from "@/features/jobs/types/jobs";

interface JobApplySheetProps {
  jobTitle: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: ApplyJobRequest) => void;
  isSubmitting: boolean;
}

export const JobApplySheet: React.FC<JobApplySheetProps> = ({
  jobTitle,
  isOpen,
  onOpenChange,
  onSubmit,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ApplyJobRequest>({
    resolver: zodResolver(applyJobSchema),
    defaultValues: { phone: "", notes: "" },
  });

  const cvFile = watch("cv");
  const hasFile = cvFile && (cvFile as unknown as FileList)?.length > 0;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button className="w-full h-11 rounded-xl font-bold gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/30">
          <Send className="w-4 h-4" />
          Apply Now
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="pb-6 border-b border-border/60">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Quick Apply
              </p>
              <SheetTitle className="text-base font-extrabold leading-tight mt-0.5">
                {jobTitle}
              </SheetTitle>
            </div>
          </div>
        </SheetHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-6">

          {/* CV Upload */}
          <div className="space-y-2">
            <Label htmlFor="cv" className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" />
              CV / Resume <span className="text-destructive">*</span>
            </Label>
            <label
              htmlFor="cv"
              className={`flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                hasFile
                  ? "border-primary/50 bg-primary/5"
                  : "border-border hover:border-primary/40 hover:bg-muted/40 bg-muted/20"
              }`}
            >
              <Upload className={`w-6 h-6 mb-2 ${hasFile ? "text-primary" : "text-muted-foreground/40"}`} />
              <p className={`text-xs font-bold ${hasFile ? "text-primary" : "text-muted-foreground/60"}`}>
                {hasFile
                  ? (cvFile as unknown as FileList)[0]?.name ?? "File selected"
                  : "Click to upload your CV"}
              </p>
              <p className="text-[10px] text-muted-foreground/40 mt-0.5">PDF, DOC, DOCX</p>
              <Input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                {...register("cv")}
              />
            </label>
            {errors.cv && (
              <p className="text-xs text-destructive font-medium">
                {errors.cv.message as string}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="h-11 rounded-xl font-medium border-border/60 focus-visible:ring-primary/30"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              Cover Note
              <span className="text-[10px] font-normal text-muted-foreground ml-1">(Optional)</span>
            </Label>
            <Textarea
              id="notes"
              placeholder="Introduce yourself, highlight relevant experience, or ask questions…"
              rows={4}
              className="rounded-xl font-medium resize-none border-border/60 focus-visible:ring-primary/30"
              {...register("notes")}
            />
            {errors.notes && (
              <p className="text-xs text-destructive font-medium">{errors.notes.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-11 rounded-xl font-bold gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⚙</span>
                Submitting…
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit Application
              </>
            )}
          </Button>

          <p className="text-center text-[11px] text-muted-foreground/50 font-medium">
            By applying you agree to our terms of service.
          </p>
        </form>
      </SheetContent>
    </Sheet>
  );
};
````

## File: src/features/jobs/pages/JobDetailsPage.tsx
````typescript
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetJobById, useApplyToJob, useUpdateJob,
  useDeleteJob, useToggleJobStatus,
} from "@/features/jobs/hooks/useJobs";
import { useGenerateQuestions } from "@/features/interview/hooks/useInterview";
import { usePermissions } from "@/features/auth/hooks/usePermissions";
import { authService } from "@/features/auth/services/authService";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/shared/components/ui/sheet";

import { JobApplySheet } from "@/features/jobs/components/JobApplySheet";
import {
  Edit, Trash2, Power, Eye, BrainCircuit,
  ArrowLeft, CheckCircle2, XCircle,
  AlertTriangle, Plus, X, DollarSign,
  Briefcase,
} from "lucide-react";
import { useForm } from "react-hook-form";
import type { ApplyJobRequest, AddJobRequest } from "@/features/jobs/types/jobs";


/* ─────────────────────────────────────────
   Loading skeleton
───────────────────────────────────────── */
const DetailsSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="h-48 bg-muted animate-pulse" />
    <div className="container max-w-5xl mx-auto px-4 -mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-10 w-3/4 rounded-xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-48 w-full rounded-2xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-40 w-full rounded-2xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);


/* ─────────────────────────────────────────
   Main page
───────────────────────────────────────── */
const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isCompany, hasPermission } = usePermissions();
  const [isApplySheetOpen, setIsApplySheetOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const { data: job, isLoading, error } = useGetJobById(id ?? "");
  const applyToJob    = useApplyToJob();
  const updateJob     = useUpdateJob();
  const deleteJob     = useDeleteJob();
  const toggleStatus  = useToggleJobStatus();
  const genQuestions  = useGenerateQuestions();
  const isAuthenticated = authService.isAuthenticated();

  const {
    register, handleSubmit, setValue, watch, reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: "",
      jobType: "",
      jobDescription: "",
      location: "",
      jobRequirements: [""] as string[],
      experienceLevel: null as number | null,
      salaryMin: null as number | null,
      salaryMax: null as number | null,
      deadlineDate: "",
    },
  });

  const jobRequirements = watch("jobRequirements");

  /* ── Handlers ── */
  const handleApply = (data: ApplyJobRequest) => {
    if (!job) return;
    applyToJob.mutate({ jobId: job.id, request: data });
    setIsApplySheetOpen(false);
  };

  const handleEditClick = () => {
    if (!job) return;
    reset({
      jobTitle: job.jobTitle ?? "",
      jobType: job.jobType ?? "",
      jobDescription: job.jobDescription ?? "",
      location: job.location ?? "",
      jobRequirements: job.jobRequirements ?? [""],
      experienceLevel: job.experienceLevel as any,
      salaryMin: job.salaryMin as any,
      salaryMax: job.salaryMax as any,
      deadlineDate: job.deadlineDate ? new Date(job.deadlineDate).toISOString().split("T")[0] : "",
    });
    setIsEditSheetOpen(true);
  };

  const handleUpdateJob = (data: any) => {
    if (!job) return;
    const jobData: AddJobRequest = {
      jobTitle: data.jobTitle,
      jobType: data.jobType,
      jobDescription: data.jobDescription,
      location: data.location || null,
      jobRequirements: data.jobRequirements.filter((r: string) => r.trim() !== ""),
      experienceLevel: data.experienceLevel ? Number(data.experienceLevel) : null,
      salaryMin: data.salaryMin ? Number(data.salaryMin) : null,
      salaryMax: data.salaryMax ? Number(data.salaryMax) : null,
      deadlineDate: data.deadlineDate || null,
    };
    updateJob.mutate({ jobId: job.id, request: jobData }, {
      onSuccess: () => setIsEditSheetOpen(false),
    });
  };

  const handleDeleteJob = () => {
    if (!job) return;
    deleteJob.mutate(job.id, {
      onSuccess: () => navigate("/company/dashboard"),
    });
  };

  const addRequirement = () =>
    setValue("jobRequirements", [...(jobRequirements ?? []), ""]);

  const removeRequirement = (i: number) =>
    setValue("jobRequirements", (jobRequirements ?? []).filter((_: any, idx: number) => idx !== i));

  const updateRequirement = (i: number, val: string) => {
    const next = [...(jobRequirements ?? [])];
    next[i] = val;
    setValue("jobRequirements", next);
  };

  /* ── Loading ── */
  if (isLoading) return <DetailsSkeleton />;

  /* ── Error ── */
  if (error || !job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-destructive" />
          </div>
          <h2 className="text-xl font-bold mb-2">Job Not Found</h2>
          <p className="text-muted-foreground text-sm mb-6">
            We couldn't load this job listing. It may have been removed or the link is invalid.
          </p>
          <Button onClick={() => navigate("/jobs")} className="rounded-xl gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Button>
        </div>
      </div>
    );
  }

  /* ── Page ── */
  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ══ Main Column ══ */}
          <div className="lg:col-span-2 space-y-4">

            {/* Back */}
            <button onClick={() => navigate("/jobs")}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Jobs
            </button>

            {/* Job Header Card */}
            <div className="bg-card border border-border rounded-xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div 
                  className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity mx-auto sm:mx-0"
                  onClick={() => navigate(`/profile/${job.companyDetails?.companyId}`)}
                >
                  {job.companyDetails?.profilePictureUrl ? (
                    <img src={job.companyDetails.profilePictureUrl} alt={job.companyDetails.name ?? ""}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-border shadow-sm" />
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
                      <span className="text-xl sm:text-2xl font-bold text-primary">
                        {(job.companyDetails?.name ?? "C")[0].toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h1 className="text-xl sm:text-2xl font-bold text-foreground leading-tight truncate">
                        {job.jobTitle ?? "Untitled Position"}
                      </h1>
                      <p 
                        className="text-primary font-medium mt-1 flex items-center justify-center sm:justify-start gap-1 cursor-pointer hover:underline"
                        onClick={() => navigate(`/profile/${job.companyDetails?.companyId}`)}
                      >
                        {job.companyDetails?.name ?? "Company"}
                        {job.isActive && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
                      </p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
                      {job.iApplied && (
                        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 gap-1 text-xs font-semibold px-2.5 py-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Applied
                        </Badge>
                      )}
                      {!job.isActive && (
                        <Badge variant="outline" className="text-muted-foreground text-xs px-2.5 py-0.5">
                          <XCircle className="w-3 h-3 mr-1" /> Closed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
                    {job.location && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground border border-border rounded-full px-3 py-1 bg-muted/30 font-medium">
                        📍 {job.location}
                      </span>
                    )}
                    {(job.salaryMin || job.salaryMax) && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground border border-border rounded-full px-3 py-1 bg-muted/30 font-medium">
                        💵 ${job.salaryMin?.toLocaleString() ?? "?"} – ${job.salaryMax?.toLocaleString() ?? "?"}
                      </span>
                    )}
                    {job.jobType && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground border border-border rounded-full px-3 py-1 bg-muted/30 font-medium">
                        🕐 {job.jobType}
                      </span>
                    )}
                    {job.deadlineDate && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground border border-border rounded-full px-3 py-1 bg-muted/30 font-medium">
                        📅 {new Date(job.deadlineDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            {job.jobDescription && (
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-base font-bold text-foreground mb-3">Role Overview</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{job.jobDescription}</p>
              </div>
            )}

            {/* Responsibilities + Requirements */}
            {job.jobRequirements && job.jobRequirements.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <h3 className="font-bold text-foreground text-sm">Key Responsibilities</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {job.jobRequirements.slice(0, Math.ceil(job.jobRequirements.length / 2)).map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <h3 className="font-bold text-foreground text-sm">Requirements</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {job.jobRequirements.slice(Math.ceil(job.jobRequirements.length / 2)).map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowLeft className="w-3 h-3 text-primary shrink-0 mt-1 -rotate-180" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Company management */}
            {job.isMine && (
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mb-4">Employer Controls</h3>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                  <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border text-xs font-semibold h-9"
                    onClick={() => navigate(`/company/jobs/${job.id}/applicants`)}>
                    <Eye className="w-3.5 h-3.5 text-primary" /> Applicants
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border text-xs font-semibold h-9"
                    onClick={() => toggleStatus.mutate({ jobId: job.id })} disabled={toggleStatus.isPending}>
                    <Power className="w-3.5 h-3.5" /> {job.isActive ? "Pause" : "Resume"}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border text-xs font-semibold h-9"
                    onClick={handleEditClick}>
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </Button>
                  {!deleteConfirm ? (
                    <Button variant="outline" size="sm" className="gap-2 rounded-xl border-destructive/20 text-destructive hover:bg-destructive/10 text-xs font-semibold h-9"
                       onClick={() => setDeleteConfirm(true)}>
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </Button>
                  ) : (
                    <div className="col-span-2 flex items-center justify-between gap-3 bg-destructive/10 p-2 rounded-xl border border-destructive/20 mt-1">
                      <span className="text-[10px] text-destructive font-bold uppercase tracking-tight flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Confirm Delete?
                      </span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-7 text-xs font-bold hover:bg-muted/50"
                          onClick={() => setDeleteConfirm(false)} disabled={deleteJob.isPending}>No</Button>
                        <Button size="sm" className="h-7 text-xs font-bold bg-destructive hover:bg-destructive/90 text-white"
                          onClick={handleDeleteJob} disabled={deleteJob.isPending}>
                          Yes, Delete
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ══ Right Sidebar ══ */}
          <div className="space-y-4">

            {/* Ready to Apply */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-1">Ready to Apply?</h3>
              <p className="text-xs text-muted-foreground mb-4">
                {job.deadlineDate
                  ? `Applications close ${new Date(job.deadlineDate).toLocaleDateString("en-US", { month: "long", day: "numeric" })}. Join our engineering team today.`
                  : "Join our team today. Submit your application now."}
              </p>

              {job.isMine ? (
                <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 text-center">
                  <Briefcase className="w-7 h-7 text-primary mx-auto mb-1" />
                  <p className="text-sm font-bold text-primary">Your Job Listing</p>
                  <p className="text-xs text-muted-foreground mt-0.5">You are the owner of this position.</p>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg h-10 gap-2"
                      onClick={() => navigate(`/company/jobs/${job.id}/applicants`)}>
                      <Eye className="w-4 h-4" /> Manage Applicants
                    </Button>
                    <Button variant="outline" className="w-full rounded-lg h-10 border-border text-foreground hover:bg-muted font-medium gap-2"
                      onClick={handleEditClick}>
                      <Edit className="w-4 h-4" /> Edit Position
                    </Button>
                  </div>
                </div>
              ) : job.iApplied ? (
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-center">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mx-auto mb-1" />
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Application Submitted</p>
                  <p className="text-xs text-emerald-500 mt-0.5">You've already applied.</p>
                </div>
              ) : !isAuthenticated ? (
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg h-10 gap-2"
                  onClick={() => navigate("/login")}>
                  Sign In to Apply
                </Button>
              ) : (
                <div className="space-y-2">
                  <JobApplySheet
                    jobTitle={job.jobTitle ?? "this Position"}
                    isOpen={isApplySheetOpen}
                    onOpenChange={setIsApplySheetOpen}
                    onSubmit={handleApply}
                    isSubmitting={applyToJob.isPending}
                  />
                  <Button variant="outline" className="w-full rounded-lg h-10 border-border text-foreground hover:bg-muted font-medium gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Save for Later
                  </Button>
                </div>
              )}
            </div>

            {/* AI Interview Prep */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">AI Interview Prep</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Practice technical questions tailored specifically for this {job.jobType ?? ""} role at <span 
                  className="text-primary cursor-pointer hover:underline font-medium"
                  onClick={() => navigate(`/profile/${job.companyDetails?.companyId}`)}
                >
                  {job.companyDetails?.name ?? "this company"}
                </span>.
              </p>
              <button className="text-sm font-semibold text-primary hover:text-primary/95 flex items-center gap-1"
                onClick={() => navigate(`/interview/${job.id}`)}>
                Start Mock Interview →
              </button>
              {job.isMine && (
                <Button variant="outline" size="sm" className="w-full mt-3 rounded-lg border-border gap-2 text-xs"
                  onClick={() => genQuestions.mutate(job.id)} disabled={genQuestions.isPending}>
                  <BrainCircuit className="w-3.5 h-3.5" />
                  {genQuestions.isPending ? "Generating…" : "Generate Questions"}
                </Button>
              )}
            </div>

            {/* Similar Roles */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-4">Similar Roles</h3>
              <div className="space-y-3">
                {[
                  { title: "Staff UI Engineer", company: "CloudMatrix", location: "Remote" },
                  { title: "Lead Frontend Developer", company: "Nexus Systems", location: "New York" },
                  { title: "Senior React Developer", company: "FinTech Solutions", location: "Remote" },
                ].map((role, i) => (
                  <div key={i} className={i < 2 ? "pb-3 border-b border-border" : ""}>
                    <p className="text-sm font-semibold text-foreground">{role.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{role.company} • {role.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ── Edit Sheet ── */}
      <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="pb-6 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Edit className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Editing
                </p>
                <SheetTitle className="text-base font-extrabold leading-tight mt-0.5">
                  Job Details
                </SheetTitle>
              </div>
            </div>
          </SheetHeader>

          <form onSubmit={handleSubmit(handleUpdateJob)} className="space-y-5 pt-6">

            {/* Job Title */}
            <div className="space-y-1.5">
              <Label htmlFor="jobTitle" className="text-sm font-bold">
                Job Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="jobTitle"
                className="h-10 rounded-xl border-border/60"
                placeholder="e.g. Senior Frontend Developer"
                {...register("jobTitle", { required: true })}
              />
              {errors.jobTitle && <p className="text-xs text-destructive font-medium">Job title is required.</p>}
            </div>

            {/* Job Type */}
            <div className="space-y-1.5">
              <Label htmlFor="jobType" className="text-sm font-bold">
                Job Type <span className="text-destructive">*</span>
              </Label>
              <Input
                id="jobType"
                className="h-10 rounded-xl border-border/60"
                placeholder="e.g. Full-time, Contract"
                {...register("jobType", { required: true })}
              />
              {errors.jobType && <p className="text-xs text-destructive font-medium">Job type is required.</p>}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label htmlFor="jobDescription" className="text-sm font-bold">
                Job Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="jobDescription"
                rows={4}
                className="rounded-xl border-border/60 resize-none"
                placeholder="Describe the role, responsibilities, and team…"
                {...register("jobDescription", { required: true })}
              />
              {errors.jobDescription && <p className="text-xs text-destructive font-medium">Description is required.</p>}
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <Label htmlFor="location" className="text-sm font-bold">Location</Label>
              <Input
                id="location"
                className="h-10 rounded-xl border-border/60"
                placeholder="e.g. New York, NY / Remote"
                {...register("location")}
              />
            </div>

            {/* Salary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="salaryMin" className="text-sm font-bold flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> Min Salary
                </Label>
                <Input
                  id="salaryMin"
                  type="number"
                  className="h-10 rounded-xl border-border/60"
                  placeholder="50000"
                  {...register("salaryMin")}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="salaryMax" className="text-sm font-bold flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> Max Salary
                </Label>
                <Input
                  id="salaryMax"
                  type="number"
                  className="h-10 rounded-xl border-border/60"
                  placeholder="90000"
                  {...register("salaryMax")}
                />
              </div>
            </div>

            {/* Deadline */}
            <div className="space-y-1.5">
              <Label htmlFor="deadlineDate" className="text-sm font-bold">Application Deadline</Label>
              <Input
                id="deadlineDate"
                type="date"
                className="h-10 rounded-xl border-border/60"
                {...register("deadlineDate")}
              />
            </div>

            {/* Requirements */}
            <div className="space-y-2">
              <Label className="text-sm font-bold">Requirements</Label>
              <div className="space-y-2">
                {(jobRequirements ?? []).map((req: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-[10px] font-black text-primary">
                      {i + 1}
                    </span>
                    <Input
                      value={req}
                      onChange={(e) => updateRequirement(i, e.target.value)}
                      placeholder={`Requirement ${i + 1}`}
                      className="h-9 rounded-xl border-border/60 flex-1 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => removeRequirement(i)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground/40 hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-xl gap-1.5 h-8 text-xs font-bold mt-1 border-border/60"
                onClick={addRequirement}
              >
                <Plus className="w-3.5 h-3.5" />
                Add Requirement
              </Button>
            </div>

            {/* Submit */}
            <div className="pt-2 pb-2">
              <Button
                type="submit"
                className="w-full h-11 rounded-xl font-bold gap-2"
                disabled={updateJob.isPending}
              >
                {updateJob.isPending ? "Saving Changes…" : "Save Changes"}
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default JobDetailsPage;
````

## File: src/features/jobs/pages/JobsListPage.tsx
````typescript
import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetAllJobs } from "@/features/jobs/hooks/useJobs";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  MapPin, Briefcase, Calendar, DollarSign, Search,
  ChevronLeft, ChevronRight,
  Clock, AlertCircle, Bookmark, CheckCircle,
  ChevronDown, Zap, Users, Star, X, SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";

// ── Helpers ──────────────────────────────────────────────────────────────────

function getPostedLabel(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (minutes < 60) return `Posted ${minutes}m ago`;
  if (hours < 24) return `Posted ${hours}h ago`;
  if (days === 1) return "Posted yesterday";
  return `Posted ${days} days ago`;
}

function getCompanyInitial(name: string | null | undefined) {
  return (name ?? "C").charAt(0).toUpperCase();
}

const LOGO_COLORS = [
  { bg: "#4F8EF7", text: "#fff" },
  { bg: "#34C17B", text: "#fff" },
  { bg: "#2D2D2D", text: "#fff" },
  { bg: "#F76B4F", text: "#fff" },
  { bg: "#A855F7", text: "#fff" },
  { bg: "#F59E0B", text: "#fff" },
  { bg: "#06B6D4", text: "#fff" },
];

function getLogoColor(name: string | null | undefined) {
  const key = (name ?? "").charCodeAt(0) % LOGO_COLORS.length;
  return LOGO_COLORS[key];
}

// Fake match % based on job index for visual demo
function getFakeMatch(idx: number) {
  const vals = [98, 91, 87, 94, 82, 79, 95, 88];
  return vals[idx % vals.length];
}

// ── Job Type Options (based on backend JobType string field) ─────────────────
const JOB_TYPE_OPTIONS = [
  { value: "", label: "All Types" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Remote", label: "Remote" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
  { value: "Freelance", label: "Freelance" },
];

// ── Salary Range Options ─────────────────────────────────────────────────────
const SALARY_OPTIONS = [
  { value: "", label: "Any Salary" },
  { value: "0-50", label: "Up to $50k" },
  { value: "50-100", label: "$50k – $100k" },
  { value: "100-150", label: "$100k – $150k" },
  { value: "150+", label: "$150k+" },
];

// ── Sort Options ─────────────────────────────────────────────────────────────
const SORT_OPTIONS = [
  { value: "default", label: "Relevant", sortColumn: "", sortDirection: "" as "" },
  { value: "newest", label: "Newest First", sortColumn: "PostedDate", sortDirection: "Desc" as const },
  { value: "oldest", label: "Oldest First", sortColumn: "PostedDate", sortDirection: "Asc" as const },
  { value: "salary_high", label: "Highest Salary", sortColumn: "SalaryMax", sortDirection: "Desc" as const },
  { value: "salary_low", label: "Lowest Salary", sortColumn: "SalaryMin", sortDirection: "Asc" as const },
];

// ── Skeleton ──────────────────────────────────────────────────────────────────

const JobCardSkeleton = () => (
  <div className="bg-card border border-border rounded-[2.5rem] p-2 pr-6 sm:pr-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
    <div className="p-4 sm:p-6 shrink-0">
      <Skeleton className="h-20 w-20 sm:h-24 sm:w-24 rounded-[1.75rem]" />
    </div>
    <div className="flex-1 space-y-3 p-4 sm:p-0">
      <Skeleton className="h-6 w-1/2" />
      <div className="flex gap-3">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-xl" />
        <Skeleton className="h-6 w-24 rounded-xl" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-3 p-6 sm:p-4 border-t sm:border-t-0 sm:border-l border-border/60 min-w-[140px]">
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  </div>
);

// ── Custom Dropdown (fully theme-aware, no native select) ────────────────────
interface SelectOption { value: string; label: string; }

const FilterSelect: React.FC<{
  id: string;
  icon: React.ReactNode;
  value: string;
  options: SelectOption[];
  onChange: (v: string) => void;
  compact?: boolean;
}> = ({ id, icon, value, options, onChange, compact = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find(o => o.value === value)?.label ?? options[0].label;
  const isActive = value !== "" && value !== options[0].value;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div id={id} ref={ref} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(p => !p)}
        className={`
          inline-flex items-center gap-2 rounded-xl px-5 text-xs font-black
          border transition-all duration-300 uppercase tracking-widest whitespace-nowrap
          ${compact ? "h-12" : "h-16"}
          ${isActive
            ? "bg-primary text-primary-foreground border-primary shadow-xl"
            : "bg-card text-foreground border-border shadow-sm hover:border-primary/50 hover:text-primary"
          }`}
      >
        {icon}
        {selectedLabel}
        <ChevronDown className={`w-3 h-3 ml-1 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full mt-2 left-0 z-50 min-w-[160px] bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {options.map(o => (
            <button
              key={o.value}
              type="button"
              onClick={() => { onChange(o.value); setOpen(false); }}
              className={`
                w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors
                ${o.value === value
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
                }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────

const JobsListPage: React.FC = () => {
  const navigate = useNavigate();

  // ── Filter state ──────────────────────────────────────────────────────────
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 400);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [sortKey, setSortKey] = useState("default");
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Resolve backend sort params from chosen sort option
  const sortOption = SORT_OPTIONS.find(o => o.value === sortKey) ?? SORT_OPTIONS[0];

  // ── API call ──────────────────────────────────────────────────────────────
  const { data: jobsData, isLoading, error } = useGetAllJobs({
    searchValue: debouncedSearch || undefined,
    pageNumber,
    pageSize,
    sortColumn: sortOption.sortColumn || undefined,
    sortDirection: (sortOption.sortDirection as "Asc" | "Desc") || undefined,
  });

  // ── Client-side filtering (JobType & Salary) on current page results ──────
  const filteredItems = useMemo(() => {
    let items = jobsData?.items ?? [];

    // Filter by Job Type
    if (jobTypeFilter) {
      items = items.filter(j =>
        j.jobType?.toLowerCase() === jobTypeFilter.toLowerCase()
      );
    }

    // Filter by Salary range
    if (salaryFilter) {
      items = items.filter(j => {
        const salary = j.salaryMax ?? j.salaryMin ?? 0;
        const k = salary / 1000;
        if (salaryFilter === "0-50")   return k <= 50;
        if (salaryFilter === "50-100") return k > 50 && k <= 100;
        if (salaryFilter === "100-150") return k > 100 && k <= 150;
        if (salaryFilter === "150+")   return k > 150;
        return true;
      });
    }

    return items;
  }, [jobsData?.items, jobTypeFilter, salaryFilter]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPageNumber(1);
  };

  const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setter(value);
      setPageNumber(1);
    };

  const clearAllFilters = () => {
    setSearchValue("");
    setJobTypeFilter("");
    setSalaryFilter("");
    setSortKey("default");
    setPageNumber(1);
  };

  const handlePageChange = (newPage: number) => setPageNumber(newPage);
  const handleJobClick = (jobId: string) => navigate(`/jobs/${jobId}`);

  const toggleSave = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation();
    setSavedJobs((prev) => {
      const next = new Set(prev);
      next.has(jobId) ? next.delete(jobId) : next.add(jobId);
      return next;
    });
  };

  const hasActiveFilters = !!debouncedSearch || !!jobTypeFilter || !!salaryFilter || sortKey !== "default";
  const totalResults = jobsData?.totalCount ?? 0;
  const displayCount = filteredItems.length;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-10">
      <div className="max-w-6xl mx-auto">

        {/* ── Search & Filter Card ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-8 mb-10 shadow-sm relative">
          <div className="relative z-10 space-y-5">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-none">
                Explore <span className="text-primary">Opportunities</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Find your next career move with AI-powered matching.
              </p>
            </div>

            {/* ── Search bar row ── */}
            <div className="flex flex-col lg:flex-row items-stretch gap-3">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground/80 group-focus-within:text-primary transition-colors" />
                </div>
                <Input
                  id="job-search"
                  placeholder="Search roles, skills, or companies..."
                  value={searchValue}
                  onChange={handleSearch}
                  className="pl-14 w-full h-16 bg-muted border-none shadow-inner rounded-2xl transition-all text-base font-medium focus:ring-2 focus:ring-primary/20"
                />
                {searchValue && (
                  <button
                    onClick={() => { setSearchValue(""); setPageNumber(1); }}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Toggle filter panel button */}
              <button
                id="toggle-filters-btn"
                onClick={() => setShowFilters(p => !p)}
                className={`
                  inline-flex items-center gap-2 rounded-2xl px-6 h-16 text-xs font-black
                  border transition-all duration-300 uppercase tracking-widest whitespace-nowrap
                  ${showFilters
                    ? "bg-primary text-primary-foreground border-primary shadow-xl"
                    : "bg-card text-muted-foreground border-border shadow-sm hover:border-primary/50 hover:text-primary"
                  }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-1 bg-white/30 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center">
                    {[!!debouncedSearch, !!jobTypeFilter, !!salaryFilter, sortKey !== "default"].filter(Boolean).length}
                  </span>
                )}
              </button>
            </div>

            {/* ── Expandable Filter Panel ── */}
            {showFilters && (
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Job Type */}
                <FilterSelect
                  id="job-type-filter"
                  icon={<Briefcase className="w-3.5 h-3.5" />}
                  value={jobTypeFilter}
                  options={JOB_TYPE_OPTIONS}
                  onChange={handleFilterChange(setJobTypeFilter)}
                />

                {/* Salary */}
                <FilterSelect
                  id="salary-filter"
                  icon={<DollarSign className="w-3.5 h-3.5" />}
                  value={salaryFilter}
                  options={SALARY_OPTIONS}
                  onChange={handleFilterChange(setSalaryFilter)}
                />

                {/* Sort */}
                <FilterSelect
                  id="sort-filter"
                  icon={<ArrowUpDown className="w-3.5 h-3.5" />}
                  value={sortKey}
                  options={SORT_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
                  onChange={(v) => { setSortKey(v); setPageNumber(1); }}
                />

                {/* Clear all */}
                {hasActiveFilters && (
                  <button
                    id="clear-all-filters-btn"
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[10px] font-black border border-destructive/30 text-destructive bg-destructive/5 hover:bg-destructive/10 transition-all uppercase tracking-widest"
                  >
                    <X className="w-3 h-3" /> Clear All
                  </button>
                )}
              </div>
            )}

            {/* ── Active Filter Pills ── */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {debouncedSearch && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <Search className="w-3 h-3" />
                    "{debouncedSearch}"
                    <button onClick={() => setSearchValue("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {jobTypeFilter && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <Briefcase className="w-3 h-3" />
                    {jobTypeFilter}
                    <button onClick={() => setJobTypeFilter("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {salaryFilter && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <DollarSign className="w-3 h-3" />
                    {SALARY_OPTIONS.find(o => o.value === salaryFilter)?.label}
                    <button onClick={() => setSalaryFilter("")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {sortKey !== "default" && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg px-3 py-1.5">
                    <ArrowUpDown className="w-3 h-3" />
                    {SORT_OPTIONS.find(o => o.value === sortKey)?.label}
                    <button onClick={() => setSortKey("default")} className="ml-1 hover:text-primary/70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Results Header ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 px-4">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-foreground uppercase tracking-widest">
              {debouncedSearch ? "Search Results" : "Featured Jobs"}
            </h2>
            <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              {isLoading ? "Loading..." : (
                jobTypeFilter || salaryFilter
                  ? `${displayCount} of ${totalResults} positions`
                  : `${totalResults} positions found`
              )}
            </p>
          </div>

          {/* Inline Sort dropdown */}
          <FilterSelect
            id="sort-select-inline"
            icon={<ArrowUpDown className="w-3.5 h-3.5" />}
            value={sortKey}
            options={SORT_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
            onChange={(v) => { setSortKey(v); setPageNumber(1); }}
            compact
          />
        </div>

        {/* ── Job List Content ── */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6">
              {Array.from({ length: 5 }).map((_, i) => <JobCardSkeleton key={i} />)}
            </div>
          ) : error ? (
            <div className="bg-card border border-border rounded-[2.5rem] p-20 text-center shadow-sm">
              <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-3xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">Something went wrong</h3>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto mb-8 leading-relaxed">
                We couldn't load the job listings. Please check your connection and try again.
              </p>
              <Button variant="outline" onClick={() => window.location.reload()} className="rounded-xl h-12 px-8 font-black">Try Again</Button>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="bg-card border border-border rounded-[2.5rem] p-20 text-center shadow-sm">
              <div className="w-20 h-20 bg-muted text-muted-foreground/60 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">No Jobs Found</h3>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto mb-8 leading-relaxed">
                No positions match your current filters. Try adjusting your search criteria.
              </p>
              <Button onClick={clearAllFilters} variant="outline" className="rounded-xl h-12 px-8 font-black">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {filteredItems.map((job, idx) => {
                const logoColor = getLogoColor(job.companyDetails?.name);
                const hasApplied = job.iApplied;
                const isSaved = savedJobs.has(job.id);
                const matchPct = getFakeMatch(idx);
                const isHot = idx % 3 === 1;

                return (
                  <div
                    key={job.id}
                    onClick={() => handleJobClick(job.id)}
                    className="group relative bg-card border border-border rounded-[2.5rem] p-2 pr-6 sm:pr-8 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
                  >
                    {/* Company Logo & Match */}
                    <div className="p-4 sm:p-6 shrink-0 flex items-center justify-center">
                      <div className="relative">
                        <div
                          className="absolute -top-3 -left-3 z-10 flex items-center gap-1
                                     px-3 py-1.5 rounded-xl text-[10px] font-black text-white shadow-lg"
                          style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}
                        >
                          <Star className="w-3 h-3 fill-white" />
                          {matchPct}%
                        </div>
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.75rem] flex items-center justify-center
                                     text-3xl font-black shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundColor: logoColor.bg, color: logoColor.text }}
                        >
                          {job.companyDetails?.profilePictureUrl ? (
                            <img
                              src={job.companyDetails.profilePictureUrl}
                              alt={job.companyDetails.name ?? "Company"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            getCompanyInitial(job.companyDetails?.name)
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 p-4 sm:p-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors truncate">
                          {job.jobTitle ?? "Untitled Position"}
                        </h3>
                        {isHot && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-lg border border-primary/20 w-fit">
                            <Zap className="w-3 h-3 fill-primary" /> Recruiting
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <p className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {job.companyDetails?.name || "Premium Partner"}
                        </p>
                        {job.location && (
                          <p className="text-sm font-medium text-muted-foreground/80 flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </p>
                        )}
                        <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.postedDate ? getPostedLabel(job.postedDate) : "Recently"}
                        </p>
                        {job.deadlineDate && (
                          <p className="text-[10px] font-black text-amber-500/80 uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            Deadline: {new Date(job.deadlineDate).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {job.jobType && (
                          <span className="text-[10px] font-black text-muted-foreground bg-muted px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-border">
                            {job.jobType}
                          </span>
                        )}
                        {(job.salaryMin || job.salaryMax) && (
                          <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-primary/20 flex items-center gap-0.5">
                            <DollarSign className="w-3 h-3 inline" />
                            {job.salaryMin && `$${(job.salaryMin / 1000).toFixed(0)}k`}
                            {job.salaryMax && ` – $${(job.salaryMax / 1000).toFixed(0)}k`}
                          </span>
                        )}
                        {job.jobRequirements?.slice(0, 2).map((req, i) => (
                          <span key={i} className="text-[10px] font-black text-muted-foreground bg-muted/65 px-3 py-1.5 rounded-xl uppercase tracking-tighter border border-border">
                            {typeof req === "string" ? req : (req as { name?: string }).name ?? ""}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 p-6 sm:p-4 border-t sm:border-t-0 sm:border-l border-border/60 min-w-[140px]">
                      {hasApplied ? (
                        <div className="flex flex-col items-center gap-1.5">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Applied</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 w-full justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-12 w-12 rounded-xl transition-all ${isSaved ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground/60 hover:text-primary"}`}
                            onClick={(e) => toggleSave(e, job.id)}
                          >
                            <Bookmark className={`w-5 h-5 ${isSaved ? "fill-primary" : ""}`} />
                          </Button>
                          <Button className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-[0.98]">
                            View
                          </Button>
                        </div>
                      )}
                      <div className="hidden sm:flex items-center gap-1 text-[9px] font-black text-muted-foreground/60 uppercase tracking-tighter">
                        <Users className="w-3 h-3" /> Hiring
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {jobsData && jobsData.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-20 mb-12 px-6">
            <p className="text-[10px] font-black text-muted-foreground/80 uppercase tracking-[0.2em]">
              Page {pageNumber} of {jobsData.totalPages} · {totalResults} total
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary disabled:opacity-30 transition-all shadow-sm"
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={!jobsData.hasPreviousPage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: Math.min(jobsData.totalPages, 5) }, (_, i) => {
                  // Window around current page
                  let page: number;
                  const total = jobsData.totalPages;
                  if (total <= 5) {
                    page = i + 1;
                  } else if (pageNumber <= 3) {
                    page = i + 1;
                  } else if (pageNumber >= total - 2) {
                    page = total - 4 + i;
                  } else {
                    page = pageNumber - 2 + i;
                  }
                  const isCurrent = page === pageNumber;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[48px] h-12 rounded-2xl text-xs font-black transition-all duration-300 ${
                        isCurrent
                          ? "bg-primary text-primary-foreground shadow-xl scale-110"
                          : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary disabled:opacity-30 transition-all shadow-sm"
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={!jobsData.hasNextPage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsListPage;
````

## File: src/features/jobs/schemas/jobSchemas.ts
````typescript
import { z } from "zod";

export const applyJobSchema = z.object({
  cv: z
    .any()
    .refine((files) => files && files.length > 0, "CV file is required")
    .transform((files) => files[0])
    .refine((file) => file.size <= 5 * 1024 * 1024, "CV file must be less than 5MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "CV must be a PDF, DOC, or DOCX file"
    ),
  phone: z
    .string({ message: "Phone number is required" })
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters"),
  notes: z
    .string()
    .max(500, "Notes must be at most 500 characters")
    .optional(),
});
````

## File: src/features/notifications/components/NotificationItem.tsx
````typescript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Briefcase, ShieldAlert, FileText, CheckCircle2, Trash2, MailOpen } from "lucide-react";
import { useNotifications } from "../context/NotificationsContext";
import type { Notification } from "../types/notifications";
import { NotificationType } from "../types/notifications";
import { cn, formatRelativeTime } from "@/lib/utils";

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const navigate = useNavigate();
  const { markAsRead, deleteNotification } = useNotifications();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMarkAsRead = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!notification.isRead) {
      await markAsRead(notification.id);
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleting(true);
    await deleteNotification(notification.id);
    // Note: No need to set isDeleting(false) since the component will unmount
  };

  // Select appropriate icon based on notification type
  const getIcon = () => {
    switch (notification.type) {
      case NotificationType.NewMessage:
        return <MailOpen className="h-5 w-5 text-blue-500" />;
      case NotificationType.JobApplicationStatusChanged:
        return <Briefcase className="h-5 w-5 text-green-500" />;
      case NotificationType.SecurityAlert:
        return <ShieldAlert className="h-5 w-5 text-red-500" />;
      case NotificationType.NewJobPosted:
        return <FileText className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getInitials = (name?: string) => {
    if (!name) return null;
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleNotificationClick = async () => {
    if (!notification.isRead) {
      await markAsRead(notification.id);
    }
    
    // Determine where to navigate based on entityType
    switch (notification.entityType) {
      case "JobApplication":
        navigate("/job-tracker");
        break;
      case "Job":
        navigate(`/jobs/${notification.entityId}`);
        break;
      case "Post":
        navigate("/posts");
        break;
      case "User":
      case "Follow":
        navigate(`/profile/${notification.actorId}`);
        break;
      default:
        // Default to actor's profile if applicable
        if (notification.actorId) {
          navigate(`/profile/${notification.actorId}`);
        }
        break;
    }
  };

  const handleActorClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking the container
    if (notification.actorId) {
      navigate(`/profile/${notification.actorId}`);
    }
  };

  return (
    <div
      onClick={handleNotificationClick}
      className={cn(
        "group relative flex gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-sm",
        notification.isRead
          ? "bg-card border-border hover:border-border"
          : "bg-primary/5 border-primary/20 hover:border-primary/30",
        isDeleting ? "opacity-50 pointer-events-none" : ""
      )}
    >
      {/* Unread dot indicator */}
      {!notification.isRead && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full" />
      )}

      {/* Avatar / Icon */}
      <div 
        className="shrink-0 pt-1" 
        onClick={handleActorClick}
        title={notification.actorName ? `Go to ${notification.actorName}'s profile` : ""}
      >
        {notification.actorPhotoUrl ? (
          <img
            src={notification.actorPhotoUrl}
            alt={notification.actorName}
            className="h-10 w-10 rounded-full object-cover border border-border hover:ring-2 ring-primary/20 transition-all"
          />
        ) : notification.actorName ? (
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center border border-primary/20 hover:ring-2 ring-primary/30 transition-all">
            {getInitials(notification.actorName)}
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            {getIcon()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h4
            className={cn(
              "text-sm font-semibold truncate",
              notification.isRead ? "text-foreground/80" : "text-foreground"
            )}
          >
            {notification.title}
          </h4>
          <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
            {formatRelativeTime(notification.createdAt)}
          </span>
        </div>
        
        <p
          className={cn(
            "text-sm mt-1 line-clamp-2",
            notification.isRead ? "text-muted-foreground" : "text-foreground/90 font-medium"
          )}
        >
          {notification.message}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {!notification.isRead && (
          <button
            onClick={handleMarkAsRead}
            className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            title="Mark as read"
          >
            <CheckCircle2 className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          title="Delete notification"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
````

## File: src/features/notifications/context/NotificationsContext.tsx
````typescript
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
````

## File: src/features/notifications/pages/NotificationsPage.tsx
````typescript
import { useEffect } from "react";
import { useNotifications } from "../context/NotificationsContext";
import { NotificationItem } from "../components/NotificationItem";
import { Bell, CheckCheck, Loader2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function NotificationsPage() {
  const {
    notifications,
    isLoading,
    error,
    fetchNotifications,
    markAllAsRead,
    unreadCount,
  } = useNotifications();

  // Fetch notifications on mount
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const handleMarkAllAsRead = async () => {
    await markAllAsRead();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Bell className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Notifications
            </h1>
            <p className="text-sm text-muted-foreground">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
                : "You're all caught up!"}
            </p>
          </div>
        </div>

        {unreadCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleMarkAllAsRead}
            className="shrink-0 gap-2"
          >
            <CheckCheck className="h-4 w-4" />
            Mark all as read
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
            {error}
          </div>
        )}

        {isLoading && notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin mb-4" />
            <p>Loading notifications...</p>
          </div>
        ) : notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-card rounded-2xl border border-dashed border-border">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Bell className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No notifications yet
            </h3>
            <p className="text-muted-foreground max-w-sm">
              We'll let you know when something important happens, like a new
              job match or a message from an employer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
````

## File: src/features/notifications/services/notificationsService.ts
````typescript
// src/features/notifications/services/notificationsService.ts
import { apiClient } from "@/lib/api/client";
import type {
  NotificationsListResponse,
  UnreadCountResponse,
  NotificationPreferencesResponse,
  UpdateNotificationPreferencesRequest,
  GetNotificationsParams,
} from "../types/notifications";

/**
 * Notifications Service
 * Handles all Notifications API endpoints
 */
class NotificationsService {
  /**
   * Get notifications (paginated)
   * GET /api/notifications
   */
  async getNotifications(params?: GetNotificationsParams, signal?: AbortSignal): Promise<NotificationsListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.pageSize) queryParams.append("pageSize", params.pageSize.toString());
    if (params?.unreadOnly !== undefined) queryParams.append("unreadOnly", params.unreadOnly.toString());

    const queryString = queryParams.toString();
    const url = queryString ? `/notifications?${queryString}` : "/notifications";

    const response = await apiClient.get<NotificationsListResponse>(url, { signal });
    return response;
  }

  /**
   * Get unread count
   * GET /api/notifications/unread-count
   */
  async getUnreadCount(signal?: AbortSignal): Promise<UnreadCountResponse> {
    const response = await apiClient.get<UnreadCountResponse>("/notifications/unread-count", { signal });
    return response;
  }

  /**
   * Mark notification as read
   * PUT /api/notifications/{notificationId}/read
   */
  async markAsRead(notificationId: string): Promise<void> {
    await apiClient.put(`/notifications/${notificationId}/read`);
  }

  /**
   * Mark all notifications as read
   * PUT /api/notifications/read-all
   */
  async markAllAsRead(): Promise<void> {
    await apiClient.put("/notifications/read-all");
  }

  /**
   * Delete notification
   * DELETE /api/notifications/{notificationId}
   */
  async deleteNotification(notificationId: string): Promise<void> {
    await apiClient.delete(`/notifications/${notificationId}`);
  }

  /**
   * Get notification preferences
   * GET /api/notifications/preferences
   */
  async getPreferences(signal?: AbortSignal): Promise<NotificationPreferencesResponse> {
    const response = await apiClient.get<NotificationPreferencesResponse>("/notifications/preferences", { signal });
    return response;
  }

  /**
   * Update notification preferences
   * PUT /api/notifications/preferences
   */
  async updatePreferences(request: UpdateNotificationPreferencesRequest): Promise<void> {
    await apiClient.put("/notifications/preferences", request);
  }
}

export const notificationsService = new NotificationsService();
````

## File: src/features/notifications/services/notificationsSignalrService.ts
````typescript
// src/features/notifications/services/notificationsSignalrService.ts
import * as signalR from "@microsoft/signalr";
import type { Notification } from "../types/notifications";

class NotificationsSignalRService {
  private connection: signalR.HubConnection | null = null;
  private readonly hubUrl = import.meta.env.VITE_NOTIFICATIONS_HUB_URL as string;

  async connect(): Promise<void> {
    if (this.connection?.state === signalR.HubConnectionState.Connected) {
      return;
    }

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl, {
        accessTokenFactory: () => localStorage.getItem("auth_token") || "",
      })
      .withAutomaticReconnect()
      .build();

    try {
      await this.connection.start();
      console.log("Connected to Notifications Hub ✓");
    } catch (error) {
      console.error("Failed to connect to Notifications Hub:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (this.connection) {
      try {
        await this.connection.stop();
        console.log("Disconnected from Notifications Hub");
      } catch (error) {
        console.error("Failed to disconnect from Notifications Hub:", error);
      }
      this.connection = null;
    }
  }

  onReceiveNotification(callback: (notification: Notification) => void): void {
    if (!this.connection) {
      console.warn("SignalR: Cannot register listener — not connected");
      return;
    }
    this.connection.on("ReceiveNotification", callback);
  }

  offReceiveNotification(callback: (notification: Notification) => void): void {
    if (!this.connection) return;
    this.connection.off("ReceiveNotification", callback);
  }

  onUnreadCountUpdated(callback: (count: number) => void): void {
    if (!this.connection) {
      console.warn("SignalR: Cannot register listener — not connected");
      return;
    }
    this.connection.on("UnreadCountUpdated", callback);
  }

  offUnreadCountUpdated(callback: (count: number) => void): void {
    if (!this.connection) return;
    this.connection.off("UnreadCountUpdated", callback);
  }

  getConnectionState(): signalR.HubConnectionState {
    return this.connection?.state ?? signalR.HubConnectionState.Disconnected;
  }
}

export const notificationsSignalrService = new NotificationsSignalRService();
````

## File: src/features/notifications/types/notifications.ts
````typescript
// src/features/notifications/types/notifications.ts

/**
 * Notification Types
 */
export const NotificationType = {
  NewFollower: "NewFollower",
  PostLiked: "PostLiked",
  PostCommented: "PostCommented",
  CommentReplied: "CommentReplied",
  CommentReacted: "CommentReacted",
  JobApplicationReceived: "JobApplicationReceived",
  JobApplicationStatusChanged: "JobApplicationStatusChanged",
  NewMessage: "NewMessage",
  SecurityAlert: "SecurityAlert",
  GeneralInfo: "GeneralInfo",
  NewJobPosted: "NewJobPosted",
} as const;

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * Notification Priority
 */
export const NotificationPriority = {
  High: "High",
  Normal: "Normal",
  Low: "Low",
} as const;

export type NotificationPriority = (typeof NotificationPriority)[keyof typeof NotificationPriority];

/**
 * Notification Response
 */
export interface Notification {
  id: string;
  type: NotificationType;
  priority: NotificationPriority;
  title: string;
  message: string;
  actorId: string;
  actorName: string;
  actorPhotoUrl: string;
  entityType: string;
  entityId: string;
  isRead: boolean;
  createdAt: string;
  readAt: string | null;
}

/**
 * Paginated Notifications Response
 */
export interface NotificationsListResponse {
  items: Notification[];
  totalCount: number;
  unreadCount: number;
  pageNumber: number;
  pageSize: number;
  hasMore: boolean;
}

/**
 * Unread Count Response
 */
export interface UnreadCountResponse {
  count: number;
}

/**
 * Notification Preference
 */
export interface NotificationPreference {
  type: NotificationType;
  inAppEnabled: boolean;
  emailEnabled: boolean;
}

/**
 * Notification Preferences Response
 */
export interface NotificationPreferencesResponse {
  preferences: NotificationPreference[];
}

/**
 * Update Notification Preferences Request
 */
export interface UpdateNotificationPreferencesRequest {
  preferences: NotificationPreference[];
}

/**
 * Get Notifications Query Parameters
 */
export interface GetNotificationsParams {
  page?: number;
  pageSize?: number;
  unreadOnly?: boolean;
}
````

## File: src/features/posts/components/CommentsSection.tsx
````typescript
// src/features/posts/components/CommentsSection.tsx
import { useState } from "react";
import { Heart, MessageCircle, MoreHorizontal, Pencil, Send, Trash2 } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  useComments,
  useCreateComment,
  useUpdateComment,
  useDeleteComment,
  useToggleCommentLike,
  useReplies,
  useCreateReply,
  useUpdateReply,
  useDeleteReply,
  useToggleReplyLike,
} from "@/features/posts/hooks/usePosts";
import type { PostCommentResponse, CommentReplyResponse } from "@/features/posts/types/comment";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn, formatRelativeTime } from "@/lib/utils";

interface CommentsSectionProps {
  postId: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CommentSkeleton = () => (
  <div className="flex gap-3 py-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full" />
    </div>
  </div>
);

const CommentItem = ({
  comment,
  postId,
  isReply = false,
}: {
  comment: PostCommentResponse | CommentReplyResponse;
  postId: string;
  isReply?: boolean;
}) => {
  const { user } = useAuth();

  // Call hooks unconditionally at top level
  const toggleReplyLike = useToggleReplyLike();
  const toggleCommentLike = useToggleCommentLike();
  const updateReply = useUpdateReply();
  const updateComment = useUpdateComment();
  const deleteReply = useDeleteReply();
  const deleteComment = useDeleteComment();

  const [liked, setLiked] = useState(comment.iLiked);
  const [likesCount, setLikesCount] = useState(comment.likesCount);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyOpen, setReplyOpen] = useState(false);

  const isOwner = comment.isOwner || user?.id === comment.author.userId;
  const commentId = "replyId" in comment ? comment.replyId : comment.commentId;

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    if (isReply) {
      toggleReplyLike.mutate(
        { postId, commentId, replyId: commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    } else {
      toggleCommentLike.mutate(
        { postId, commentId },
        {
          onError: () => {
            setLiked(wasLiked);
            setLikesCount(comment.likesCount);
          },
        }
      );
    }
  };

  const handleEdit = () => {
    if (isReply) {
      updateReply.mutate(
        { postId, commentId, replyId: commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    } else {
      updateComment.mutate(
        { postId, commentId, request: { content: editContent.trim() } },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    if (isReply) {
      deleteReply.mutate({ postId, commentId, replyId: commentId });
    } else {
      deleteComment.mutate({ postId, commentId });
    }
  };

  const isPendingLike = isReply ? toggleReplyLike.isPending : toggleCommentLike.isPending;
  const isPendingUpdate = isReply ? updateReply.isPending : updateComment.isPending;
  const isPendingDelete = isReply ? deleteReply.isPending : deleteComment.isPending;

  return (
    <div className={cn("flex gap-3 py-3", isReply && "ml-12 border-l-2 border-border pl-3")}>
      {comment.author.profilePictureUrl ? (
        <img
          src={comment.author.profilePictureUrl}
          alt={comment.author.fullName}
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {getInitials(comment.author.fullName)}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-foreground truncate">
            {comment.author.fullName}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
              className="min-h-[60px] resize-none text-sm border-border bg-card text-foreground"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                onClick={handleEdit}
                disabled={isPendingUpdate}
                className="h-7 rounded-full"
              >
                {isPendingUpdate ? "Saving..." : "Save"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsEditing(false);
                  setEditContent(comment.content);
                }}
                className="h-7 rounded-full border-border text-foreground hover:bg-accent"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-foreground whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        )}

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            onClick={handleLike}
            disabled={isPendingLike}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer",
              liked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            {likesCount}
          </button>

          {!isReply && "repliesCount" in comment && comment.repliesCount > 0 && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {comment.repliesCount} {comment.repliesCount === 1 ? "reply" : "replies"}
            </button>
          )}

          {!isReply && (
            <button
              type="button"
              onClick={() => setReplyOpen(!replyOpen)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Reply
            </button>
          )}

          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditing(true)}>
                  <Pencil className="h-3.5 w-3.5 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isPendingDelete}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {replyOpen && !isReply && <ReplySection postId={postId} commentId={comment.commentId} />}
      </div>
    </div>
  );
};

const ReplySection = ({ postId, commentId }: { postId: string; commentId: string }) => {
  const { data: replies, isLoading } = useReplies(postId, commentId, true);
  const createReply = useCreateReply();
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = () => {
    if (!replyContent.trim()) return;
    createReply.mutate(
      { postId, commentId, request: { content: replyContent.trim() } },
      {
        onSuccess: () => {
          setReplyContent("");
        },
      }
    );
  };

  return (
    <div className="mt-3 space-y-3">
      {isLoading ? (
        <CommentSkeleton />
      ) : replies?.items && replies.items.length > 0 ? (
        replies.items.map((reply) => (
          <CommentItem key={reply.replyId} comment={reply} postId={postId} isReply />
        ))
      ) : null}

      <div className="flex gap-2 items-start">
        <Input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          className="flex-1 h-9 text-sm border-border bg-card text-foreground"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          onClick={handleSubmit}
          disabled={!replyContent.trim() || createReply.isPending}
          className="h-9 rounded-full"
        >
          {createReply.isPending ? (
            <span className="text-xs">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const { data: comments, isLoading } = useComments(postId, true);
  const createComment = useCreateComment();
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = () => {
    if (!commentContent.trim()) return;
    createComment.mutate(
      { postId, request: { content: commentContent.trim() } },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  return (
    <div className="border-t border-border px-4 py-4 sm:px-6">
      <div className="space-y-1">
        {isLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : comments?.items && comments.items.length > 0 ? (
          comments.items.map((comment) => (
            <CommentItem key={comment.commentId} comment={comment} postId={postId} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-3">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      <div className="flex gap-2 items-start mt-4 pt-4 border-t border-border">
        <Input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 h-10 text-sm border-border bg-card text-foreground"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!commentContent.trim() || createComment.isPending}
          className="h-10 rounded-full"
        >
          {createComment.isPending ? (
            <span className="text-sm">Sending...</span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
````

## File: src/features/posts/components/CreatePostBar.tsx
````typescript
// src/features/posts/components/CreatePostBar.tsx
import { ImagePlus } from "lucide-react";
import { useGetUserProfile as useMyProfile } from "@/features/profile/hooks/useProfile";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface CreatePostBarProps {
  onOpen: () => void;
  onOpenPhoto?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostBar = ({ onOpen, onOpenPhoto }: CreatePostBarProps) => {
  const { data: profile, isLoading } = useMyProfile();

  const handlePhotoClick = () => {
    if (onOpenPhoto) {
      onOpenPhoto();
    } else {
      onOpen();
    }
  };

  if (isLoading) {
    return (
      <div
        className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4"
        aria-busy="true"
      >
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
        <Skeleton className="h-10 flex-1 rounded-full" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      </div>
    );
  }

  const fullName = profile?.fullName ?? "You";

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:mb-6 sm:gap-4 sm:p-4">
      {profile?.profilePictureUrl ? (
        <img
          src={profile.profilePictureUrl}
          alt={fullName}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
          {getInitials(fullName)}
        </div>
      )}

      <button
        type="button"
        onClick={onOpen}
        className="flex h-10 min-w-0 flex-1 items-center rounded-full bg-muted px-4 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/80 cursor-pointer"
      >
        What&apos;s on your mind?
      </button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handlePhotoClick}
        className="h-10 w-10 shrink-0 rounded-full text-muted-foreground hover:text-foreground"
        aria-label="Add photo to post"
      >
        <ImagePlus className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
};
````

## File: src/features/posts/components/CreatePostModal.tsx
````typescript
// src/features/posts/components/CreatePostModal.tsx
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, Loader2, X } from "lucide-react";
import { useGetUserProfile as useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreatePost } from "@/features/posts/hooks/usePosts";
import { cn } from "@/lib/utils";

interface CreatePostFormValues {
  content: string;
}

interface CreatePostModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CreatePostModal = ({ open, onOpenChange, isOpen, onClose }: CreatePostModalProps) => {
  const { data: profile } = useMyProfile();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createPost = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    defaultValues: { content: "" },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const resetForm = () => {
    reset({ content: "" });
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  };

  const actualOpen = open ?? isOpen ?? false;

  const handleClose = (nextOpen: boolean) => {
    if (onOpenChange) onOpenChange(nextOpen);
    if (!nextOpen && onClose) onClose();
    if (!nextOpen) resetForm();
  };

  const handleFileChange = (selected: File | null) => {
    if (!selected || !selected.type.startsWith("image/")) return;
    setFile(selected);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selected));
  };

  const onSubmit = (values: CreatePostFormValues) => {
    createPost.mutate(
      { content: values.content.trim(), file: file ?? undefined },
      {
        onSuccess: () => handleClose(false),
      }
    );
  };

  const fullName = profile?.fullName ?? "You";

  return (
    <Dialog open={actualOpen} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl bg-card border-border"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Create Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => handleClose(false)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              placeholder="What's on your mind?"
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative overflow-hidden rounded-xl">
                <img src={preview} alt="Upload preview" className="max-h-64 w-full object-cover" />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full bg-secondary text-secondary-foreground"
                  onClick={() => {
                    setFile(null);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(null);
                  }}
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 px-4 py-8 transition-colors hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">Add Photo/Video</span>
              </button>
            )}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="rounded-full border-border text-foreground hover:bg-accent"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createPost.isPending} className="rounded-full">
              {createPost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
````

## File: src/features/posts/components/EditPostModal.tsx
````typescript
// src/features/posts/components/EditPostModal.tsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, X } from "lucide-react";
import { useGetUserProfile as useMyProfile } from "@/features/profile/hooks/useProfile";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useUpdatePost } from "@/features/posts/hooks/usePosts";
import type { PostResponse } from "@/features/posts/types/post";
import { cn } from "@/lib/utils";

interface EditPostFormValues {
  content: string;
}

interface EditPostModalProps {
  post: PostResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const EditPostModal = ({ post, open, onOpenChange }: EditPostModalProps) => {
  const { data: profile } = useMyProfile();
  const updatePost = useUpdatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    defaultValues: { content: post.content },
  });

  useEffect(() => {
    if (open) {
      reset({ content: post.content });
    }
  }, [open, post.content, reset]);

  const onSubmit = (values: EditPostFormValues) => {
    updatePost.mutate(
      { postId: post.postId, request: { content: values.content.trim() } },
      { onSuccess: () => onOpenChange(false) }
    );
  };

  const fullName = profile?.fullName ?? post.author.fullName;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-w-lg sm:rounded-xl bg-card border-border"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Edit Post</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {profile?.profilePictureUrl ? (
                <img
                  src={profile.profilePictureUrl}
                  alt={fullName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {getInitials(fullName)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">{fullName}</p>
                <p className="text-xs text-muted-foreground">Public</p>
              </div>
            </div>

            <Textarea
              rows={5}
              className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full border-border text-foreground hover:bg-accent"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updatePost.isPending} className="rounded-full">
              {updatePost.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
````

## File: src/features/posts/components/LikesListModal.tsx
````typescript
// src/features/posts/components/LikesListModal.tsx
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { usePostLikers } from "@/features/posts/hooks/usePosts";
import { formatRelativeTime, cn } from "@/lib/utils";

interface LikesListModalProps {
  postId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const LikesListModal = ({ postId, open, onOpenChange }: LikesListModalProps) => {
  const { data: likers, isLoading } = usePostLikers(postId, open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex h-full max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-h-[80vh] sm:max-w-md sm:rounded-xl bg-card border-border"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Likes</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto" aria-busy={isLoading}>
          {isLoading ? (
            <div className="space-y-0 px-4 py-3 sm:px-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-border-subtle py-4 last:border-b-0"
                >
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : !likers?.items?.length ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <p className="text-sm">No likes yet</p>
            </div>
          ) : (
            <ul>
              {likers.items.map((liker, index) => (
                <li
                  key={`${liker.userId || liker.userProfileId}-${liker.likedAt}`}
                  className={cn(
                    "flex items-center gap-3 px-4 py-4 sm:px-6",
                    index < likers.items.length - 1 && "border-b border-border-subtle"
                  )}
                >
                  {liker.profilePictureUrl ? (
                    <img
                      src={liker.profilePictureUrl}
                      alt={liker.fullName}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                      {getInitials(liker.fullName)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {liker.fullName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatRelativeTime(liker.likedAt)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
````

## File: src/features/posts/components/PostCard.tsx
````typescript
// src/features/posts/components/PostCard.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Loader2, MessageCircle, MoreHorizontal } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useToggleLike, useDeletePost } from "@/features/posts/hooks/usePosts";
import { EditPostModal } from "@/features/posts/components/EditPostModal";
import { LikesListModal } from "@/features/posts/components/LikesListModal";
import { CommentsSection } from "@/features/posts/components/CommentsSection";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import type { PostResponse } from "@/features/posts/types/post";
import { cn, formatRelativeTime } from "@/lib/utils";

interface PostCardProps {
  post: PostResponse;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const PostCard = ({ post }: PostCardProps) => {
  const { user } = useAuth();
  const toggleLike = useToggleLike();
  const deletePost = useDeletePost();

  const [liked, setLiked] = useState(post.iLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [editOpen, setEditOpen] = useState(false);
  const [likesOpen, setLikesOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);

  const isOwner = post.isOwner ?? user?.id === post.author.userId;
  const commentsCount = post.commentsCount ?? 0;
  const location = post.author.city;

  const handleLike = () => {
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikesCount((count) => (wasLiked ? Math.max(0, count - 1) : count + 1));

    toggleLike.mutate(
      { postId: post.postId, isLiked: wasLiked },
      {
        onSuccess: (data) => {
          setLikesCount(data.likesCount);
          setLiked(!wasLiked);
        },
        onError: () => {
          setLiked(wasLiked);
          setLikesCount(post.likesCount);
        },
      }
    );
  };

  const handleDelete = () => {
    deletePost.mutate(post.postId, {
      onSuccess: () => setDeleteOpen(false),
    });
  };

  const metaParts = [location, formatRelativeTime(post.createdAt)].filter(Boolean);

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm text-foreground">
      <header className="flex items-start gap-3 p-4">
        <Link
          to={`/profile/${post.author.userId}`}
          className="shrink-0"
          aria-label={`View ${post.author.fullName}'s profile`}
        >
          {post.author.profilePictureUrl ? (
            <img
              src={post.author.profilePictureUrl}
              alt={post.author.fullName}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
              {getInitials(post.author.fullName)}
            </div>
          )}
        </Link>

        <div className="min-w-0 flex-1">
          <Link
            to={`/profile/${post.author.userId}`}
            className="block truncate text-sm font-bold text-foreground hover:text-primary sm:text-base"
          >
            {post.author.fullName}
          </Link>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {metaParts.join(" • ")}
          </p>
        </div>

        {isOwner && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label="Post options"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditOpen(true)} className="cursor-pointer">Edit Post</DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => setDeleteOpen(true)} className="cursor-pointer">
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
      <div className="space-y-3 px-4 pb-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
          {post.content}
        </p>

        {post.fileUrl && (
          <img
            src={post.fileUrl}
            alt="Post attachment"
            className="max-h-[500px] w-full rounded-xl object-cover"
          />
        )}
      </div>
      <footer className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div
          className={cn(
            "inline-flex h-8 items-center overflow-hidden rounded-full text-sm font-medium border border-border",
            liked ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground hover:bg-muted"
          )}
        >
          <button
            type="button"
            onClick={handleLike}
            disabled={toggleLike.isPending}
            aria-label={liked ? "Unlike post" : "Like post"}
            className="flex items-center gap-1.5 py-1 pl-3 pr-1 transition-colors cursor-pointer"
          >
            <Heart className={cn("h-4 w-4", liked && "fill-current")} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => likesCount > 0 && setLikesOpen(true)}
            disabled={likesCount === 0}
            className={cn(
              "py-1 pr-3 transition-colors cursor-pointer",
              likesCount > 0 && "hover:underline",
              likesCount === 0 && "cursor-default"
            )}
            aria-label="View who liked this post"
          >
            {likesCount}
          </button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setCommentsOpen(!commentsOpen)}
          className={cn(
            "h-8 rounded-full gap-1.5 px-3 border border-border hover:bg-accent",
            commentsOpen ? "text-primary border-primary bg-primary/5" : "text-muted-foreground"
          )}
          aria-label={`${commentsCount} comments`}
        >
          <MessageCircle
            className={cn("h-4 w-4", commentsOpen && "fill-current")}
            aria-hidden="true"
          />
          {commentsCount}
        </Button>
      </footer>
      <EditPostModal post={post} open={editOpen} onOpenChange={setEditOpen} />
      <LikesListModal postId={post.postId} open={likesOpen} onOpenChange={setLikesOpen} />
      {commentsOpen && (
        <CommentsSection postId={post.postId} />
      )}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-sm rounded-xl bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground">Delete Post</h2>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this post? This action cannot be undone.
          </p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteOpen(false)}
              className="rounded-full border-border text-foreground hover:bg-accent"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={deletePost.isPending}
              className="rounded-full"
            >
              {deletePost.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};
````

## File: src/features/posts/hooks/usePaginatedPosts.ts
````typescript
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedPosts = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = usePosts({
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setPosts([]);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    reset,
    error,
    page,
  };
};
````

## File: src/features/posts/hooks/usePaginatedUserPosts.ts
````typescript
import { useState, useEffect } from "react";
import { useUserPosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedUserPosts = (userId: string) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = useUserPosts(userId, {
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setPosts([]);
  }, [userId]);

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    error,
    page,
  };
};
````

## File: src/features/posts/hooks/usePosts.ts
````typescript
// src/features/posts/hooks/usePosts.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { postService } from "@/features/posts/services/postService";
import { commentService } from "@/features/posts/services/commentService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
} from "@/features/posts/types/post";
import type {
  CreateCommentRequest,
  CreateReplyRequest,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "@/features/posts/types/comment";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddPostRequest) => postService.addPost(request),
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: UpdatePostRequest }) =>
      postService.updatePost(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deletePost(postId),
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => postService.getPost(postId),
    enabled: !!postId,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePosts = (params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postService.getPosts(params),
    staleTime: 2 * 60 * 1000,
  });
};

export const useGetUserPosts = (params?: PostsQueryParams) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["user-posts", user?.id, params],
    queryFn: () =>
      user?.id ? postService.getUserPostsById(user.id, params) : Promise.resolve(undefined),
    enabled: !!user?.id,
    staleTime: 2 * 60 * 1000,
  });
};

export const useUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["user-posts", userId, params],
    queryFn: () => postService.getUserPostsById(userId, params),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isLiked }: { postId: string; isLiked: boolean }) =>
      isLiked ? postService.deleteLike(postId) : postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deleteLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const usePostLikers = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["likes", postId],
    queryFn: () => postService.getLikes(postId),
    enabled: !!postId && enabled,
    staleTime: 1 * 60 * 1000,
  });
};

// Comment hooks
export const useComments = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentService.getComments(postId),
    enabled: !!postId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: CreateCommentRequest }) =>
      commentService.createComment(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment added successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: UpdateCommentRequest;
    }) => commentService.updateComment(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.toggleCommentLike(postId, commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useReplies = (postId: string, commentId: string, enabled = true) => {
  return useQuery({
    queryKey: ["replies", commentId],
    queryFn: () => commentService.getReplies(postId, commentId),
    enabled: !!postId && !!commentId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: CreateReplyRequest;
    }) => commentService.createReply(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply added successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
      request,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
      request: UpdateReplyRequest;
    }) => commentService.updateReply(postId, commentId, replyId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.deleteReply(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      toast.success("Reply deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleReplyLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.toggleReplyLike(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

// Backward compatible alias
export const useGetUserPostsById = useUserPosts;
````

## File: src/features/posts/pages/MyPostsPage.tsx
````typescript
// src/features/posts/pages/MyPostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const MyPostsPage = () => {
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedUserPosts(
    user?.id ?? ""
  );

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6 text-foreground bg-background">
      <h1 className="mb-5 text-2xl font-bold text-foreground sm:mb-6">My Posts</h1>

      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You haven&apos;t posted anything yet. Share your first update!
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6 border-border hover:bg-accent text-foreground"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyPostsPage;
````

## File: src/features/posts/pages/PostsPage.tsx
````typescript
// src/features/posts/pages/PostsPage.tsx
import { useState } from "react";
import { FileText } from "lucide-react";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostBar } from "@/features/posts/components/CreatePostBar";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { usePaginatedPosts } from "@/features/posts/hooks/usePaginatedPosts";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";

const PostSkeleton = () => (
  <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const PostsPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const { posts, isLoading, isFetching, hasMore, loadMore, page } = usePaginatedPosts();

  return (
    <div className="mx-auto w-full max-w-[680px] px-4 py-6 text-foreground bg-background">
      <CreatePostBar onOpen={() => setCreateOpen(true)} />
      <CreatePostModal open={createOpen} onOpenChange={setCreateOpen} />

      {isLoading && page === 1 ? (
        <div className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-4 py-16 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <FileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <p className="font-semibold text-foreground">No posts yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Be the first to share something with the community.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isFetching}
                className="rounded-full px-6 border-border hover:bg-accent text-foreground"
              >
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostsPage;
````

## File: src/features/posts/services/commentService.ts
````typescript
// src/features/posts/services/commentService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse } from "@/shared/types/pagination";
import type {
  CommentReplyResponse,
  CommentsQueryParams,
  CreateCommentRequest,
  CreateReplyRequest,
  PostCommentResponse,
  ToggleCommentLikeResponse,
  ToggleReplyLikeResponse,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "../types/comment";

class CommentService {
  /**
   * Add a comment to a post
   * POST /posts/{postId}/comments
   */
  async createComment(postId: string, request: CreateCommentRequest): Promise<PostCommentResponse> {
    return apiClient.post(`/posts/${postId}/comments`, {
      postId,
      content: request.content,
    });
  }

  /**
   * Get comments for a post
   * GET /posts/{postId}/comments
   */
  async getComments(
    postId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<PostCommentResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments?${queryString}`
      : `/posts/${postId}/comments`;
    return apiClient.get<PaginatedResponse<PostCommentResponse>>(url);
  }

  /**
   * Update a comment
   * PUT /posts/{postId}/comments/{commentId}
   */
  async updateComment(
    postId: string,
    commentId: string,
    request: UpdateCommentRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}`, request);
  }

  /**
   * Delete a comment
   * DELETE /posts/{postId}/comments/{commentId}
   */
  async deleteComment(postId: string, commentId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
  }

  /**
   * Toggle like on a comment
   * POST /posts/{postId}/comments/{commentId}/like
   */
  async toggleCommentLike(postId: string, commentId: string): Promise<ToggleCommentLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/like`);
  }

  /**
   * Add a reply to a comment
   * POST /posts/{postId}/comments/{commentId}/replies
   */
  async createReply(
    postId: string,
    commentId: string,
    request: CreateReplyRequest
  ): Promise<CommentReplyResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies`, {
      commentId,
      content: request.content,
    });
  }

  /**
   * Get replies for a comment
   * GET /posts/{postId}/comments/{commentId}/replies
   */
  async getReplies(
    postId: string,
    commentId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<CommentReplyResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments/${commentId}/replies?${queryString}`
      : `/posts/${postId}/comments/${commentId}/replies`;
    return apiClient.get<PaginatedResponse<CommentReplyResponse>>(url);
  }

  /**
   * Update a reply
   * PUT /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async updateReply(
    postId: string,
    commentId: string,
    replyId: string,
    request: UpdateReplyRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}/replies/${replyId}`, request);
  }

  /**
   * Delete a reply
   * DELETE /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async deleteReply(postId: string, commentId: string, replyId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}/replies/${replyId}`);
  }

  /**
   * Toggle like on a reply
   * POST /posts/{postId}/comments/{commentId}/replies/{replyId}/like
   */
  async toggleReplyLike(
    postId: string,
    commentId: string,
    replyId: string
  ): Promise<ToggleReplyLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies/${replyId}/like`);
  }
}

export const commentService = new CommentService();
````

## File: src/features/posts/services/postService.ts
````typescript
// src/features/posts/services/postService.ts
import { apiClient } from "@/lib/api/client";
import type {
  Post,
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
  LikeUser,
  LikeResponse,
} from "../types/post";
import type { PaginatedResponse } from "@/shared/types/pagination";

/**
 * Posts Service
 * Handles all Posts and Likes endpoints
 */
class PostService {
  /**
   * Add a new post
   * POST /posts
   */
  async addPost(request: AddPostRequest): Promise<Post> {
    const formData = new FormData();
    formData.append("Content", request.content);
    if (request.file) {
      formData.append("File", request.file);
    }

    const response = await apiClient.post<Post>("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  /**
   * Update a post's content
   * PUT /posts/{postId}
   */
  async updatePost(postId: string, request: UpdatePostRequest): Promise<void> {
    await apiClient.put(`/posts/${postId}`, request);
  }

  /**
   * Delete a post
   * DELETE /posts/{postId}
   */
  async deletePost(postId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}`);
  }

  /**
   * Get a single post by ID
   * GET /posts/{postId}
   */
  async getPost(postId: string): Promise<Post> {
    return apiClient.get<Post>(`/posts/${postId}`);
  }

  /**
   * Get all posts (paginated)
   * GET /posts
   */
  async getPosts(params?: PostsQueryParams): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts?${queryString}` : "/posts";
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Get posts by a specific user ID (paginated)
   * GET /posts/user/{userId}
   */
  async getUserPostsById(
    userId: string,
    params?: PostsQueryParams
  ): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/user/${userId}?${queryString}` : `/posts/user/${userId}`;
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async addLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async deleteLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Get list of users who liked a post
   * GET /posts/{postId}/likers
   */
  async getLikes(postId: string, params?: PostsQueryParams): Promise<PaginatedResponse<LikeUser>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/${postId}/likers?${queryString}` : `/posts/${postId}/likers`;
    return apiClient.get<PaginatedResponse<LikeUser>>(url);
  }
}

export const postService = new PostService();
````

## File: src/features/posts/types/comment.ts
````typescript
// src/features/posts/types/comment.ts
import type { PostsQueryParams } from "./post";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface PostCommentResponse {
  commentId: string;
  postId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  repliesCount: number;
  createdAt: string;
}

export interface CommentReplyResponse {
  replyId: string;
  commentId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  createdAt: string;
}

export interface CreateCommentRequest {
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface CreateReplyRequest {
  content: string;
}

export interface UpdateReplyRequest {
  content: string;
}

export interface ToggleCommentLikeResponse {
  commentId: string;
  isLiked: boolean;
  likesCount: number;
}

export interface ToggleReplyLikeResponse {
  replyId: string;
  isLiked: boolean;
  likesCount: number;
}

export type CommentsQueryParams = PostsQueryParams;
````

## File: src/features/posts/types/post.ts
````typescript
export interface PostAuthor {
  userId: string;
  userProfileId: string;
  fullName: string;
  profilePictureUrl: string | null;
  city: string | null;
}

export interface Post {
  postId: string;
  id?: string;
  content: string;
  fileUrl: string | null;
  createdAt: string;
  likesCount: number;
  commentsCount?: number;
  iLiked: boolean;
  isOwner?: boolean;
  author: PostAuthor;
}

export interface AddPostRequest {
  content: string;
  file?: File;
}

export interface UpdatePostRequest {
  content: string;
}

export interface PostsQueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: "Asc" | "Desc";
}

export interface LikeUser {
  userProfileId: string;
  userId?: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}

export interface LikeResponse {
  postId: string;
  likesCount: number;
  iLiked: boolean;
}

export type PostResponse = Post;

export interface PostLikerResponse {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
  likedAt: string;
}
````

## File: src/features/profile/components/BasicInfoForm.tsx
````typescript
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
````

## File: src/features/profile/components/ChangePasswordForm.tsx
````typescript
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
````

## File: src/features/profile/components/CvSection.tsx
````typescript
import React from "react";
import { FileText, CloudUpload, X, Download } from "lucide-react";
import { Label } from "@/shared/components/ui/label";

interface CvSectionProps {
  cvFileUrl: string | null | undefined;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  isDeleting: boolean;
}

export const CvSection: React.FC<CvSectionProps> = ({
  cvFileUrl,
  onUpload,
  onDelete,
  isDeleting,
}) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const syntheticEvent = {
        target: { files: [file] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onUpload(syntheticEvent);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <FileText className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        <h3 className="text-[15px] font-bold text-foreground">Resume / CV</h3>
      </div>
      <p className="text-[12.5px] text-muted-foreground mb-4">
        Upload your latest resume for fast applications.
      </p>

      {/* Drag & drop zone */}
      <Label
        htmlFor="cv-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 gap-1.5 bg-muted/40 hover:bg-muted/70 ${
          isDragging ? "border-primary bg-primary/10 shadow-inner" : "border-border"
        }`}
      >
        <CloudUpload className="w-8 h-8 text-muted-foreground/60" aria-hidden="true" />
        <p className="text-[13px] font-semibold text-foreground">
          Drag &amp; drop file
        </p>
        <p className="text-[12px] text-muted-foreground/60">or</p>
        <span className="text-[13px] font-bold text-primary hover:underline">
          Browse Files
        </span>
        <p className="text-[11px] text-muted-foreground/60 mt-0.5">
          PDF, DOCX (Max 5MB)
        </p>
        <input
          id="cv-upload"
          type="file"
          accept=".pdf,.docx,application/pdf"
          className="hidden"
          onChange={onUpload}
        />
      </Label>

      {/* Existing file */}
      {cvFileUrl && (
        <div className="mt-4 flex items-center gap-3 p-3 bg-muted/50 border border-border rounded-lg shadow-sm group">
          <div className="w-9 h-9 rounded-md bg-destructive/10 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-destructive" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-foreground truncate">
              Resume.pdf
            </p>
            <p className="text-[11px] text-muted-foreground">
              Uploaded 2 days ago
            </p>
          </div>
          <div className="flex items-center gap-1">
            <a
              href={cvFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
              title="View CV"
              aria-label="View CV"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={onDelete}
              disabled={isDeleting}
              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors disabled:opacity-50"
              title="Remove CV"
              aria-label="Remove CV"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
````

## File: src/features/profile/components/ProfilePhotoSection.tsx
````typescript
import React from "react";
import { User, Upload, X, Image } from "lucide-react";
import { Label } from "@/shared/components/ui/label";

interface ProfilePhotoSectionProps {
  photoPreview: string | null;
  coverPreview?: string | null;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  isDeleting: boolean;
  onCoverUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverDelete?: () => void;
  isCoverDeleting?: boolean;
}

export const ProfilePhotoSection: React.FC<ProfilePhotoSectionProps> = ({
  photoPreview,
  coverPreview,
  onUpload,
  onDelete,
  isDeleting,
  onCoverUpload,
  onCoverDelete,
  isCoverDeleting,
}) => (
  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
    {/* Cover area */}
    <div className="relative">
      <div
        className={`w-full h-32 sm:h-40 ${
          !coverPreview ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900" : ""
        }`}
      >
        {coverPreview && (
          <img
            src={coverPreview}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Profile avatar overlapping cover */}
      <div className="absolute left-1/2 lg:left-6 bottom-0 translate-y-1/2 -translate-x-1/2 lg:translate-x-0 w-24 h-24 rounded-full border-4 border-card overflow-hidden bg-muted shadow-md">
        {photoPreview ? (
          <img
            src={photoPreview}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground/60">
            <User className="w-8 h-8" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Cover edit button */}
      {onCoverUpload && (
        <Label
          htmlFor="cover-upload-combined"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-card/85 backdrop-blur-sm rounded-full cursor-pointer hover:bg-card transition-colors shadow-sm"
        >
          <Image className="w-4 h-4 text-foreground" aria-hidden="true" />
          <input
            id="cover-upload-combined"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onCoverUpload}
          />
        </Label>
      )}
    </div>

    {/* Body */}
    <div className="pt-14 pb-5 px-5 lg:pt-16">
      <h3 className="text-[15px] font-bold text-foreground mb-1">
        Profile &amp; Media
      </h3>
      <p className="text-[12.5px] text-muted-foreground mb-4">
        Update your profile and cover photos to stand out.
      </p>

      <div className="flex flex-col gap-2">
        {/* Upload new photo */}
        <Label
          htmlFor="photo-upload"
          className="flex items-center justify-center gap-1.5 h-9 px-4 text-[13px] font-bold text-primary border border-primary/20 rounded-lg bg-primary/10 cursor-pointer hover:bg-primary/15 transition-colors"
        >
          <Upload className="w-3.5 h-3.5" aria-hidden="true" />
          Upload Photo
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUpload}
          />
        </Label>

        {/* Remove current */}
        {photoPreview && (
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="flex items-center justify-center gap-1.5 h-8 text-[12px] font-semibold text-destructive hover:bg-destructive/10 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            {isDeleting ? "Removing..." : "Remove Profile"}
          </button>
        )}

        {/* Cover remove */}
        {coverPreview && onCoverDelete && (
          <button
            onClick={onCoverDelete}
            disabled={isCoverDeleting}
            className="flex items-center justify-center gap-1.5 h-8 text-[12px] font-semibold text-muted-foreground hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            {isCoverDeleting ? "Removing..." : "Remove Cover"}
          </button>
        )}
      </div>
    </div>
  </div>
);
````

## File: src/features/profile/hooks/useProfile.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { profileService } from "@/features/profile/services/profileService";
import { extractErrorMessage } from "@/lib/api/errors";
import { authService } from "@/features/auth/services/authService";
import type {
  BasicInfoRequest,
  ChangePasswordRequest,
} from "@/features/profile/types/profile";

/**
 * Hook for getting user profile
 */
export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => profileService.getUserProfile(),
    enabled: authService.isAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook for getting specific user profile by ID
 */
export const useGetUserProfileById = (userId: string) => {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => profileService.getUserProfileById(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook for getting profile picture
 */
export const useGetProfilePicture = () => {
  return useQuery({
    queryKey: ["userProfile", "picture"],
    queryFn: () => profileService.getProfilePicture(),
    enabled: authService.isAuthenticated(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook for updating basic info
 */
export const useUpdateBasicInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BasicInfoRequest) => profileService.updateBasicInfo(data),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for updating profile picture
 */
export const useUpdateProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => profileService.updateProfilePicture(file),
    onSuccess: () => {
      toast.success("Profile picture updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for updating cover picture
 */
export const useUpdateCoverPicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => profileService.updateCoverPicture(file),
    onSuccess: () => {
      toast.success("Cover picture updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for updating CV
 */
export const useUpdateCv = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => profileService.updateCv(file),
    onSuccess: () => {
      toast.success("CV updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for deleting profile picture
 */
export const useDeleteProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => profileService.deleteProfilePicture(),
    onSuccess: () => {
      toast.success("Profile picture deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for deleting cover picture
 */
export const useDeleteCoverPicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => profileService.deleteCoverPicture(),
    onSuccess: () => {
      toast.success("Cover picture deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for deleting CV
 */
export const useDeleteCv = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => profileService.deleteCv(),
    onSuccess: () => {
      toast.success("CV deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for changing password
 */
export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: ChangePasswordRequest) => profileService.changePassword(data),
    onSuccess: () => {
      toast.success("Password changed successfully!");
    },
  });
};
````

## File: src/features/profile/hooks/userHooks.ts
````typescript
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/shared/types/api";
import { userService } from "@/features/profile/services/userService";

/**
 * Minimal User Hooks (read-only)
 * Social Links and other non-supported editing are disabled.
 */
export const useMe = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.auth.user, "me"],
    queryFn: () => userService.getMe(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * GET /api/Users/{id}
 */
export const useUser = (id: string | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userService.getUserById(id!),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * GET /api/Users
 * List/search users with filters
 */
export const useUsersList = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: ["users", "list", filters],
    queryFn: () => userService.getUsers(filters),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
````

## File: src/features/profile/pages/ChangePasswordPage.tsx
````typescript
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
````

## File: src/features/profile/pages/EditProfilePage.tsx
````typescript
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useGetUserProfile,
  useUpdateBasicInfo,
  useUpdateProfilePicture,
  useUpdateCoverPicture,
  useUpdateCv,
  useDeleteProfilePicture,
  useDeleteCoverPicture,
  useDeleteCv,
} from "@/features/profile/hooks/useProfile";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { setFormErrors } from "@/lib/api/errors";
import type { BasicInfoRequest } from "@/features/profile/types/profile";
import { UserGender } from "@/features/profile/types/profile";

// Components
import { ProfilePhotoSection } from "@/features/profile/components/ProfilePhotoSection";
import { CvSection } from "@/features/profile/components/CvSection";
import { BasicInfoForm } from "@/features/profile/components/BasicInfoForm";


const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.string().optional().or(z.literal("")),
  country: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  jobTitle: z.string().optional().or(z.literal("")),
  yearsOfExperience: z.string().optional().or(z.literal("")),
  currentCompany: z.string().optional().or(z.literal("")),
  summary: z.string().optional().or(z.literal("")),
  university: z.string().optional().or(z.literal("")),
  degree: z.string().optional().or(z.literal("")),
  graduationYear: z.string().optional().or(z.literal("")),
  skills: z.array(z.string()).default([]),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

// splitFullName helper removed as firstName and lastName are now directly exposed by the API

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { data: profile, isLoading } = useGetUserProfile();

  const updateBasicInfo = useUpdateBasicInfo();
  const updateProfilePicture = useUpdateProfilePicture();
  const updateCoverPicture = useUpdateCoverPicture();
  const updateCv = useUpdateCv();

  const deleteProfilePicture = useDeleteProfilePicture();
  const deleteCoverPicture = useDeleteCoverPicture();
  const deleteCv = useDeleteCv();

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema) as any,
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      city: "",
      jobTitle: "",
      yearsOfExperience: "",
      currentCompany: "",
      summary: "",
      university: "",
      degree: "",
      graduationYear: "",
      skills: [],
    },
  });

  React.useEffect(() => {
    if (!profile) return;

    profileForm.reset({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      gender: profile.gender === null ? "" : String(profile.gender),
      country: profile.country ?? "",
      city: profile.city ?? "",
      jobTitle: profile.jobTitle ?? "",
      yearsOfExperience:
        profile.yearsOfExperience === null
          ? ""
          : String(profile.yearsOfExperience),
      currentCompany: profile.currentCompany ?? "",
      summary: profile.summary ?? "",
      university: profile.university ?? "",
      degree: profile.degree ?? "",
      graduationYear:
        profile.graduationYear === null ? "" : String(profile.graduationYear),
      skills: profile.skills ?? [],
    });

    setPhotoPreview(profile.profilePictureUrl ?? null);
    setCoverPreview(profile.coverPictureUrl ?? null);
  }, [profile, profileForm]);

  const onProfileSubmit = async (data: ProfileFormData) => {
    try {
      const payload: BasicInfoRequest = {
        firstName: data.firstName,
        lastName: data.lastName,
        gender:
          data.gender && data.gender.trim() !== ""
            ? (Number(data.gender) as UserGender)
            : undefined,
        country: data.country?.trim() ? data.country.trim() : undefined,
        city: data.city?.trim() ? data.city.trim() : undefined,
        jobTitle: data.jobTitle?.trim() ? data.jobTitle.trim() : undefined,
        yearsOfExperience: data.yearsOfExperience?.trim()
          ? Number(data.yearsOfExperience)
          : undefined,
        currentCompany: data.currentCompany?.trim()
          ? data.currentCompany.trim()
          : undefined,
        summary: data.summary?.trim() ? data.summary.trim() : undefined,
        university: data.university?.trim() ? data.university.trim() : undefined,
        degree: data.degree?.trim() ? data.degree.trim() : undefined,
        graduationYear: data.graduationYear?.trim()
          ? Number(data.graduationYear)
          : undefined,
        skills: data.skills,
      };

      await updateBasicInfo.mutateAsync(payload);
    } catch (error) {
      setFormErrors(error, profileForm.setError);
    }
  };

  const handleProfilePictureUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoPreview(URL.createObjectURL(file));
    try {
      await updateProfilePicture.mutateAsync(file);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  const handleDeleteProfilePicture = async () => {
    try {
      await deleteProfilePicture.mutateAsync();
      setPhotoPreview(null);
    } catch (error) {
      console.error("Error deleting profile picture:", error);
    }
  };

  const handleCoverPictureUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverPreview(URL.createObjectURL(file));
    try {
      await updateCoverPicture.mutateAsync(file);
    } catch (error) {
      console.error("Error uploading cover picture:", error);
    }
  };

  const handleDeleteCoverPicture = async () => {
    try {
      await deleteCoverPicture.mutateAsync();
      setCoverPreview(null);
    } catch (error) {
      console.error("Error deleting cover picture:", error);
    }
  };

  const handleCvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await updateCv.mutateAsync(file);
    } catch (error) {
      console.error("Error uploading CV:", error);
    }
  };

  const handleDeleteCv = async () => {
    try {
      await deleteCv.mutateAsync();
    } catch (error) {
      console.error("Error deleting CV:", error);
    }
  };

  /* ── trigger the hidden form submit button ── */
  const handleSaveChanges = () => {
    const btn = document.getElementById(
      "basic-info-submit-btn"
    ) as HTMLButtonElement | null;
    btn?.click();
  };

  if (isLoading || !profile) {
    return (
      <div className="max-w-[1200px] mx-auto p-4 md:p-8 lg:p-10">
        <Skeleton className="h-20 rounded-[2rem] mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
          <div className="flex flex-col gap-6">
            <Skeleton className="h-[320px] rounded-[2.5rem]" />
            <Skeleton className="h-[240px] rounded-[2.5rem]" />
          </div>
          <div className="flex flex-col gap-6">
            <Skeleton className="h-[600px] rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* ── Page Header ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-8 mb-10 shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                 <span>Account</span>
                 <ChevronRight className="w-3 h-3" />
                 <span className="text-primary">Preferences</span>
               </div>
               <h1 className="text-3xl font-black tracking-tight leading-none text-foreground">
                 Update <span className="text-primary">Profile</span>
               </h1>
               <p className="text-lg text-muted-foreground font-medium">Manage your professional identity and assets.</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => navigate("/profile")}
                className="flex-1 sm:flex-none h-14 px-8 border-border bg-card text-muted-foreground font-black text-xs uppercase tracking-widest hover:bg-accent transition-all rounded-2xl"
              >
                Discard
              </Button>
            </div>
          </div>
        </div>

        {/* ── Content Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Visual Assets */}
            <div className="space-y-6">
               <h2 className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Visual Identity</h2>
               <ProfilePhotoSection
                  photoPreview={photoPreview}
                  coverPreview={coverPreview}
                  onUpload={handleProfilePictureUpload}
                  onDelete={handleDeleteProfilePicture}
                  isDeleting={deleteProfilePicture.isPending}
                  onCoverUpload={handleCoverPictureUpload}
                  onCoverDelete={handleDeleteCoverPicture}
                  isCoverDeleting={deleteCoverPicture.isPending}
                />
            </div>

            {/* Document Assets */}
            <div className="space-y-6">
               <h2 className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Career Assets</h2>
               <CvSection
                  cvFileUrl={profile.cvFileUrl}
                  onUpload={handleCvUpload}
                  onDelete={handleDeleteCv}
                  isDeleting={deleteCv.isPending}
                />
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Core Information</h2>
            <div className="bg-card border border-border rounded-[2.5rem] shadow-sm overflow-hidden p-2">
              <BasicInfoForm
                form={profileForm}
                onSubmit={onProfileSubmit}
                isSaving={updateBasicInfo.isPending}
              />
            </div>

          </div>
        </div>

        {/* ── Bottom Save Action ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            onClick={handleSaveChanges}
            disabled={updateBasicInfo.isPending}
            className={`
              h-16 px-16 rounded-2xl text-sm font-black uppercase tracking-widest text-primary-foreground transition-all shadow-xl
              ${updateBasicInfo.isPending ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90 shadow-primary/10 w-full sm:w-auto active:scale-[0.98]"}
            `}
          >
            {updateBasicInfo.isPending ? "Synchronizing..." : "Save Changes"}
          </Button>
          <p className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest hidden sm:block">Changes reflect immediately</p>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
````

## File: src/features/profile/pages/ProfilePage.tsx
````typescript
import React from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useGetUserProfile } from "@/features/profile/hooks/useProfile";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  User,
  MapPin,
  Mail,
  FileText,
  Download,
  Edit,
  Share2,
  CheckCircle2,
  ExternalLink,
  Plus,
  Calendar,
  Star,
  ChevronRight,
  UserPlus,
  UserMinus,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { UserGender } from "@/features/profile/types/profile";
import { useGetUserProfileById } from "@/features/profile/hooks/useProfile";
import { usePaginatedUserPosts } from "@/features/posts/hooks/usePaginatedUserPosts";
import { PostCard } from "@/features/posts/components/PostCard";
import { CreatePostModal } from "@/features/posts/components/CreatePostModal";
import { Button } from "@/shared/components/ui/button";
import { useFollow, useUnfollow } from "@/features/follow/hooks/useFollow";
import { ChatModal } from "@/features/chat/components/ChatModal";

/* ── helpers ── */
const getGenderText = (gender: number | null) => {
  if (gender === UserGender.Male) return "Male";
  if (gender === UserGender.Female) return "Female";
  return "Not specified";
};

const formatDateJoined = (dateString: string | null | undefined) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  } catch {
    return "Recent";
  }
};

/* ─── tiny sub-components ─── */
const InfoRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex flex-wrap justify-between items-center py-2.5 border-b border-border text-[13.5px] gap-2">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-semibold text-foreground">{value}</span>
  </div>
);

const SkillBadge: React.FC<{ label: string; variant?: "primary" | "gray" }> = ({
  label,
  variant = "primary",
}) => (
  <span
    className={
      variant === "primary"
        ? "inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[12.5px] font-medium bg-primary/10 text-primary border border-primary/20"
        : "inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[12.5px] font-medium bg-muted text-muted-foreground border border-border"
    }
  >
    {variant === "primary" && (
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    )}
    {label}
  </span>
);

/* ─── MAIN COMPONENT ─── */
const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const { logout, user, isLoading: isAuthLoading } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = React.useState(false);

  // Check if it's own profile by comparing userId with logged-in user's id
  const isOwnProfileById = !userId || userId === "undefined" || userId === user?.id;

  const ownProfileQuery = useGetUserProfile();
  const otherProfileQuery = useGetUserProfileById(userId && userId !== "undefined" && userId !== user?.id ? userId : "");

  const { data: profile, isLoading, error } = isOwnProfileById ? ownProfileQuery : otherProfileQuery;

  // Check if it's own profile using isMe from backend, fallback to ID or email matching
  const isOwnProfile = profile
    ? (profile.isMe === true ||
       (!userId || userId === "undefined" || userId === user?.id) ||
       (user?.email && profile.email === user.email))
    : isOwnProfileById;

  const actualUserId = userId && userId !== "undefined" ? userId : user?.id;

  const {
    posts: userPosts,
    isLoading: postsLoading,
    isFetching: postsFetching,
    hasMore: postsHasMore,
    loadMore: postsLoadMore,
  } = usePaginatedUserPosts(actualUserId ?? "");

  const followMutation = useFollow();
  const unfollowMutation = useUnfollow();

  const handleFollow = () => {
    if (userId && userId !== "undefined") {
      followMutation.mutate(userId);
    }
  };

  const handleUnfollow = () => {
    if (userId && userId !== "undefined") {
      unfollowMutation.mutate(userId);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-[1400px] mx-auto pb-12 animate-pulse p-4 md:p-8">
        <div className="h-[180px] sm:h-[240px] w-full bg-muted rounded-3xl" />
        <div className="px-4 sm:px-8">
          <div className="h-[220px] w-full bg-card border border-border rounded-3xl -mt-12 shadow-sm" />
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-8">
            <div className="h-[400px] bg-card border border-border rounded-3xl" />
            <div className="flex flex-col gap-6">
              <div className="h-[180px] bg-card border border-border rounded-3xl" />
              <div className="h-[300px] bg-card border border-border rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center text-foreground">
        <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-muted-foreground/30" />
        </div>
        <h3 className="text-2xl font-black mb-2">Profile Not Found</h3>
        <p className="text-lg text-muted-foreground max-w-xs mb-8">We couldn't retrieve the requested profile data at this time.</p>
        {isOwnProfile && (
          <Button onClick={() => logout()} variant="outline" className="h-12 px-8 rounded-xl font-black">
            Sign Out
          </Button>
        )}
      </div>
    );
  }

  const location = [profile.city, profile.country].filter(Boolean).join(", ");

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* ── Cover Banner ── */}
      <div className="relative group overflow-hidden h-[180px] sm:h-[240px] bg-gradient-to-br from-primary/60 via-primary/30 to-background">
        {profile.coverPictureUrl && (
          <img
            src={profile.coverPictureUrl}
            alt="Cover"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* ── Profile Header Card ── */}
        <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-10 -mt-16 sm:-mt-24 relative shadow-xl shadow-foreground/5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
              {/* Avatar */}
              <div className="relative shrink-0 group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] border-[6px] border-card overflow-hidden bg-muted shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  {profile.profilePictureUrl ? (
                    <img
                      src={profile.profilePictureUrl}
                      alt={profile.fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                </div>
                {isOwnProfile && (
                  <button 
                    onClick={() => navigate("/edit-profile")}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-card border border-border rounded-2xl flex items-center justify-center text-primary shadow-xl hover:bg-accent transition-all active:scale-90"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Identity */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {profile.fullName}
                </h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm font-semibold text-muted-foreground">
                  <button
                    onClick={() => {
                      if (isOwnProfile) {
                        navigate("/profile/my/followers");
                      } else if (userId) {
                        navigate(`/profile/${userId}/followers`);
                      }
                    }}
                    className="hover:text-primary hover:underline transition-colors cursor-pointer"
                  >
                    {profile.followersCount} followers
                  </button>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <button
                    onClick={() => {
                      if (isOwnProfile) {
                        navigate("/profile/my/following");
                      } else if (userId) {
                        navigate(`/profile/${userId}/following`);
                      }
                    }}
                    className="hover:text-primary hover:underline transition-colors cursor-pointer"
                  >
                    {profile.followingCount} following
                  </button>
                </div>
                <p className="text-lg font-bold text-muted-foreground flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                  {profile.jobTitle || "Professional Developer"}
                  {profile.currentCompany && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
                      <span className="text-muted-foreground/80">@ {profile.currentCompany}</span>
                    </>
                  )}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                  {location && (
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" /> {location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-[11px] font-black text-emerald-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open to work
                  </span>
                  {profile.createdAt && (
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" /> Joined {formatDateJoined(profile.createdAt)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              {isOwnProfile ? (
                <Button
                  onClick={() => navigate("/edit-profile")}
                  className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                >
                  <Edit className="w-4 h-4" /> Edit Profile
                </Button>
              ) : (
                <>
                  {profile.isFollowing ? (
                    <Button
                      onClick={handleUnfollow}
                      disabled={unfollowMutation.isPending}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-card border border-border hover:bg-accent text-card-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <UserMinus className="w-4 h-4" /> Unfollow
                    </Button>
                  ) : (
                    <Button
                      onClick={handleFollow}
                      disabled={followMutation.isPending}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <UserPlus className="w-4 h-4" /> Follow
                    </Button>
                  )}
                  {profile.canSendMessage && (
                    <Button
                      onClick={() => setIsChatModalOpen(true)}
                      className="flex-1 lg:flex-none h-14 px-8 rounded-2xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-xs uppercase tracking-widest gap-3 shadow-xl transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4" /> Message
                    </Button>
                  )}
                </>
              )}
              <Button variant="outline" className="h-14 w-14 p-0 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary transition-all shadow-sm">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 mt-10 items-start">
          
          {/* ── Sidebar ── */}
          <div className="space-y-6">
            {/* Stats/Strength */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-6">Profile Insight</h3>
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="12" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="264" strokeDashoffset="52.8" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-black text-primary text-lg">80%</div>
                </div>
                <div>
                  <p className="font-black text-foreground uppercase tracking-tight">Profile Rating</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Expert Level</p>
                </div>
              </div>

              <div className="space-y-5 border-t border-border/50 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Publications</span>
                  <span className="font-black text-foreground">{profile.postsCount ?? 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Views</span>
                  <span className="font-black text-foreground">1.2k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Ranking</span>
                  <span className="font-black text-foreground">#42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Gender</span>
                  <span className="font-black text-foreground">{getGenderText(profile.gender)}</span>
                </div>
              </div>
            </div>

            {/* Resume Card */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-6">Documentation</h3>
               {profile.cvFileUrl ? (
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-muted/50 border border-border rounded-2xl group hover:border-primary/50 transition-all">
                       <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <p className="font-black text-foreground text-sm truncate">Professional_CV.pdf</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase">PDF · 2.4 MB</p>
                       </div>
                       <a href={profile.cvFileUrl} target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors">
                          <Download className="w-5 h-5" />
                       </a>
                    </div>
                    {isOwnProfile && (
                      <Button variant="outline" onClick={() => navigate("/edit-profile")} className="w-full rounded-2xl h-12 border-border font-black text-[10px] uppercase tracking-widest text-primary hover:bg-accent">
                        Update Resume
                      </Button>
                    )}
                 </div>
               ) : (
                 <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-muted text-muted-foreground/30 rounded-2xl flex items-center justify-center mx-auto">
                       <FileText className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground">No resume available</p>
                    {isOwnProfile && (
                      <Button onClick={() => navigate("/edit-profile")} className="w-full rounded-2xl h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10">
                        Upload Resume
                      </Button>
                    )}
                 </div>
               )}
            </div>
          </div>

          {/* ── Main Content Area ── */}
          <div className="space-y-8">
            
            {/* About Me */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-6">Introduction</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none">
                {profile.summary ? (
                  <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                    {profile.summary}
                  </p>
                ) : (
                  <p className="text-lg text-muted-foreground/50 font-medium italic">
                    Recruiters love reading summaries. Add one to stand out from the crowd.
                  </p>
                )}
              </div>
            </div>

            {/* Expertise & Skills */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Expertise & Skills</h2>
                 <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Verified</span>
              </div>
              
              {profile.skills && profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-3 bg-muted/50 border border-border rounded-2xl text-sm font-black text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-muted/50 rounded-[2rem] border border-dashed border-border">
                  <p className="text-sm font-bold text-muted-foreground">Add your technical expertise to match with relevant roles.</p>
                </div>
              )}
            </div>

            {/* Professional Journey */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
               <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-10">Professional Journey</h2>
               
               <div className="space-y-12">
                 {/* Experience */}
                 <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-px h-full bg-border" />
                    <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary border-[3px] border-card shadow-xl shadow-primary/20" />
                    
                    <div className="space-y-4">
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-black text-foreground tracking-tight">{profile.jobTitle || "Job Title"}</h3>
                            <p className="text-sm font-black text-primary uppercase tracking-widest mt-1">{profile.currentCompany || "Company Name"}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-[10px] font-black uppercase tracking-widest w-fit">
                             <Calendar className="w-3.5 h-3.5" /> Present
                          </span>
                       </div>
                       <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                         Driving technical innovation and leading high-performance engineering teams to deliver world-class software solutions.
                       </p>
                    </div>
                 </div>

                 {/* Education */}
                 {(profile.university || profile.degree) && (
                   <div className="relative pl-12">
                      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-muted border-[3px] border-card" />
                      <div className="space-y-2">
                         <h3 className="text-lg font-black text-foreground tracking-tight">{profile.degree || "Degree Information"}</h3>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{profile.university || "University Name"}</p>
                         {profile.graduationYear && (
                           <span className="inline-flex text-[10px] font-black text-muted-foreground uppercase tracking-widest pt-2">Class of {profile.graduationYear}</span>
                         )}
                      </div>
                   </div>
                 )}
               </div>
            </div>

            {/* Posts */}
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Latest Content</h2>
                {isOwnProfile && (
                  <Button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="h-10 px-6 rounded-xl bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-widest gap-2 shadow-lg shadow-primary/10 hover:bg-primary/90"
                  >
                    <Plus className="w-3.5 h-3.5" /> Create Post
                  </Button>
                )}
              </div>

              {postsLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-40 w-full rounded-3xl" />
                  <Skeleton className="h-40 w-full rounded-3xl" />
                </div>
              ) : userPosts && userPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {userPosts.map((post) => (
                    <PostCard key={post.postId} post={post} />
                  ))}
                  {postsHasMore && (
                    <div className="mt-4 flex justify-center">
                      <Button
                        variant="outline"
                        onClick={postsLoadMore}
                        disabled={postsFetching}
                        className="rounded-full px-6 border-border hover:bg-accent text-foreground text-xs uppercase tracking-widest font-black"
                      >
                        {postsFetching ? "Loading..." : "Load More"}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/50 rounded-[2rem] border border-border">
                  <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Plus className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">No publications yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        otherUserId={userId || ""}
        otherUserName={profile?.fullName || ""}
      />
      
      <CreatePostModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
};

export default ProfilePage;
````

## File: src/features/profile/services/profileService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  UserProfileResponse,
  BasicInfoRequest,
  ChangePasswordRequest,
} from "../types/profile";


/**
 * Profile Service
 * Handles all UserProfile endpoints
 */
class ProfileService {
  /**
   * Get user profile (paths are relative to `env.API_BASE_URL`, which already includes `/api`).
   */
  async getUserProfile(): Promise<UserProfileResponse> {
    const response = await apiClient.get<any>("/UserProfile");
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Get specific user profile by ID
   */
  async getUserProfileById(userId: string): Promise<UserProfileResponse> {
    const response = await apiClient.get<any>(`/UserProfile/${userId}`);
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Get profile picture URL
   */
  async getProfilePicture(): Promise<string> {
    const response = await apiClient.get<any>("/UserProfile/profile-picture");
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Update basic info
   */
  async updateBasicInfo(data: BasicInfoRequest): Promise<void> {
    await apiClient.put("/UserProfile/basic-Info", data);
  }

  /**
   * Update profile picture
   */
  async updateProfilePicture(file: File): Promise<void> {
    const formData = new FormData();
    formData.append("profilePicture", file);
    
    await apiClient.put("/UserProfile/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Update cover picture
   */
  async updateCoverPicture(file: File): Promise<void> {
    const formData = new FormData();
    formData.append("coverPicture", file);
    
    await apiClient.put("/UserProfile/cover-picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Update CV file
   */
  async updateCv(file: File): Promise<void> {
    const formData = new FormData();
    formData.append("cvFile", file);
    
    await apiClient.put("/UserProfile/cv", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Delete profile picture
   */
  async deleteProfilePicture(): Promise<void> {
    await apiClient.delete("/UserProfile/picture");
  }

  /**
   * Delete cover picture
   */
  async deleteCoverPicture(): Promise<void> {
    await apiClient.delete("/UserProfile/cover-picture");
  }

  /**
   * Delete CV file
   */
  async deleteCv(): Promise<void> {
    await apiClient.delete("/UserProfile/cv");
  }

  /**
   * Change user password
   */
  async changePassword(data: ChangePasswordRequest): Promise<void> {
    await apiClient.put("/UserProfile/password", data);
  }
}

// Export singleton instance
export const profileService = new ProfileService();
````

## File: src/features/profile/services/userService.ts
````typescript
import { apiClient } from "@/lib/api/client";

/**
 * Minimal User Service (read-only)
 * Kept intentionally aligned with supported profile flow.
 */
export const userService = {
  async getMe(signal?: AbortSignal): Promise<any> {
    return apiClient.get<any>("/api/UserProfile", { signal });
  },

  async getUserById(id: string, signal?: AbortSignal): Promise<any> {
    return apiClient.get<any>(`/api/UserProfile/${id}`, { signal });
  },

  async getUsers(params?: Record<string, any>, signal?: AbortSignal): Promise<any[]> {
    const queryParams = new URLSearchParams();

    if (params?.Name) queryParams.append("Name", params.Name);

    if (Array.isArray(params?.Skills) && params.Skills.length > 0) {
      params.Skills.forEach((skill: string) => queryParams.append("Skills", skill));
    }

    // Optional pagination (if backend supports it)
    if (params?.page) queryParams.append("PageNumber", String(params.page));
    if (params?.pageSize) queryParams.append("PageSize", String(params.pageSize));

    const url = queryParams.toString()
      ? `/api/Users?${queryParams.toString()}`
      : "/api/Users";

    const response = await apiClient.get<any>(url, { signal });

    // Handle possible wrapped response shapes
    if (Array.isArray(response)) return response;
    if (response && typeof response === "object" && Array.isArray(response.data)) {
      return response.data;
    }

    return [];
  },
};
````

## File: src/features/profile/types/profile.ts
````typescript
export const UserGender = {
  Male: 0,
  Female: 1,
} as const;

export type UserGender = (typeof UserGender)[keyof typeof UserGender];

export interface UserProfileResponse {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;

  gender: UserGender | null;
  jobTitle: string | null;
  country: string | null;
  city: string | null;
  university: string | null;
  currentCompany: string | null;
  degree: string | null;
  yearsOfExperience: number | null;
  summary: string | null;
  graduationYear: number | null;
  cvFileUrl: string | null;
  profilePictureUrl: string | null;
  coverPictureUrl: string | null;
  skills: string[];

  isMe: boolean;
  isFollowing: boolean;
  canSendMessage: boolean;

  followersCount: number;
  followingCount: number;
  postsCount: number;

  createdAt: string; // ISO date string
}

export interface BasicInfoRequest {
  firstName: string;
  lastName: string;
  gender?: UserGender | null;
  country?: string | null;
  city?: string | null;
  jobTitle?: string | null;
  yearsOfExperience?: number | null;
  currentCompany?: string | null;
  summary?: string | null;
  university?: string | null;
  degree?: string | null;
  graduationYear?: number | null;
  skills?: string[];
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}
````

## File: src/features/roadmaps/hooks/useRoadmap.ts
````typescript
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
````

## File: src/features/roadmaps/pages/RoadmapDetailsPage.tsx
````typescript
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetRoadmapById, useToggleSaveRoadmap } from "@/features/roadmaps/hooks/useRoadmap";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  ArrowLeft, Bookmark, BookmarkCheck, Clock,
  AlertTriangle, ExternalLink, Briefcase,
  BookOpen, Sparkles,
  Play, FileText,
} from "lucide-react";

/* ── type badges (unchanged logic) ── */



function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short" });
}



/* ── resource icon helper ── */
const ResourceIcon = ({ type }: { type: string }) => {
  const t = type.toLowerCase();
  if (t === "video") return <Play className="w-3.5 h-3.5 text-blue-500 shrink-0" />;
  return <FileText className="w-3.5 h-3.5 text-red-400 shrink-0" />;
};

/* ── loading skeleton ── */
const DetailsSkeleton = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-6">
    <Skeleton className="h-4 w-32 mb-4" />
    <div className="bg-card border border-border rounded-xl p-6 mb-5 space-y-3">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[0,1,2].map(i => <Skeleton key={i} className="h-24 rounded-xl" />)}
    </div>
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-card border border-border rounded-xl p-5 space-y-3">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);

/* ── main page ── */
const RoadmapDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const roadmapId = parseInt(id!);

  const { data: roadmap, isLoading, error } = useGetRoadmapById(roadmapId);
  const toggleSave = useToggleSaveRoadmap();

  const handleToggleSave = () => { if (roadmap) toggleSave.mutate(roadmap.id); };

  if (isLoading) return <DetailsSkeleton />;

  if (error || !roadmap) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-lg font-bold mb-2">Roadmap Not Found</h2>
          <p className="text-sm text-muted-foreground mb-5">The requested roadmap was not found or could not be loaded.</p>
          <Button onClick={() => navigate("/roadmaps")} className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
          </Button>
        </div>
      </div>
    );
  }

  const { roadmapData } = roadmap;
  const totalModules    = roadmapData.modules.length;
  const projectModules  = roadmapData.modules.filter(m => m.project).length;
  const totalResources  = roadmapData.modules.reduce((sum, m) => sum + m.resources.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-6">

      {/* Back */}
      <button
        onClick={() => navigate("/roadmaps")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
      </button>

      {/* ── Hero Card ── */}
      <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-border rounded-xl p-7 mb-5">

        {/* Generation failed banner */}
        {roadmapData.generation_failed && (
          <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 mb-5">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-500">
              This roadmap was generated with partial data. Some information may be incomplete.
            </p>
          </div>
        )}

        {/* Path badge */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-border bg-card text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            {roadmapData.roadmap_type ?? "Advanced Path"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-3 leading-tight text-foreground">
          {roadmapData.roadmap_title}
        </h1>

        {/* Description — use a fallback if none */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
          {(roadmapData as any).description ??
            "Master the technical depth and strategic oversight required to lead complex engineering initiatives. This roadmap covers system architecture, team management, and scaling cloud infrastructure."}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {roadmapData.duration_weeks} Weeks
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Updated {formatDate(roadmap.createdAt)}
          </span>
          {roadmap.isSaved && (
            <span className="flex items-center gap-1.5 text-primary font-medium">
              <BookmarkCheck className="w-4 h-4" />
              Saved
            </span>
          )}
        </div>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalModules}</p>
            <p className="text-xs text-muted-foreground">Core Modules</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{projectModules}</p>
            <p className="text-xs text-muted-foreground">Capstone Projects</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalResources}+</p>
            <p className="text-xs text-muted-foreground">Curated Resources</p>
          </div>
        </div>
      </div>

      {/* ── Learning Modules ── */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Learning Modules</h2>

        <div className="relative space-y-0">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-border hidden sm:block" />

          {roadmapData.modules.map((module, index) => (
            <div key={index} className="relative flex gap-4 pb-4">
              {/* Week dot */}
              <div className="hidden sm:flex shrink-0 z-10">
                <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold bg-card ${
                  module.project
                    ? "border-amber-300 text-amber-600"
                    : "border-primary bg-primary text-primary-foreground"
                }`}>
                  W{module.week}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-5">
                  {/* Week badge mobile */}
                  <span className="sm:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-2">
                    W{module.week}
                  </span>

                  <h3 className="text-base font-bold text-foreground mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{module.description}</p>

                  {/* Skills */}
                  {module.skills_covered.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Skills Covered</p>
                      <div className="flex flex-wrap gap-1.5">
                        {module.skills_covered.map((skill, si) => (
                          <span
                            key={si}
                            className="text-xs text-muted-foreground bg-muted border border-border px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resources */}
                  {module.resources.length > 0 && (
                    <div className="border-t border-border pt-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Resources</p>
                      <div className="space-y-2.5">
                        {module.resources.map((resource, ri) => (
                          <a
                            key={ri}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 group"
                          >
                            <ResourceIcon type={resource.type} />
                            <div className="min-w-0">
                              <p className="text-sm text-primary group-hover:text-primary/80 font-medium leading-tight truncate">
                                {resource.url}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 capitalize">
                                {resource.type} • {resource.type === "video" ? "45 min" : "15 min read"}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Footer ── */}
      <div className="bg-card border border-border rounded-xl p-8 text-center mt-2">
        <h3 className="text-lg font-bold text-foreground mb-1">Ready to start learning?</h3>
        <p className="text-sm text-muted-foreground mb-5">Save this roadmap to your dashboard to track your progress.</p>
        <Button
          onClick={handleToggleSave}
          disabled={toggleSave.isPending}
          className={`rounded-lg font-semibold gap-2 h-10 px-8 ${
            roadmap.isSaved
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          }`}
        >
          {roadmap.isSaved
            ? <><Bookmark className="w-4 h-4" /> Unsave Roadmap</>
            : <><BookmarkCheck className="w-4 h-4" /> Save Roadmap</>
          }
        </Button>
      </div>
    </div>
  );
};

export default RoadmapDetailsPage;
````

## File: src/features/roadmaps/pages/RoadmapsPage.tsx
````typescript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRoadmaps, useGetSavedRoadmaps, useToggleSaveRoadmap } from "@/features/roadmaps/hooks/useRoadmap";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  BookOpen, Bookmark, BookmarkCheck,
  ChevronLeft, ChevronRight, Map, Sparkles,
  Calendar,
} from "lucide-react";
import type { RoadmapListItem } from "@/features/roadmaps/types/roadmap";

/* ── helpers (unchanged) ── */
const GRADIENT_PAIRS = [
  "from-violet-500/20 to-purple-500/10",
  "from-blue-500/20 to-cyan-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-amber-500/20 to-orange-500/10",
  "from-rose-500/20 to-pink-500/10",
  "from-indigo-500/20 to-blue-500/10",
];

const ICON_COLORS = [
  "text-violet-500", "text-blue-500", "text-emerald-500",
  "text-amber-500",  "text-rose-500",  "text-indigo-500",
];

const BG_COLORS = [
  "bg-violet-100", "bg-blue-100", "bg-emerald-100",
  "bg-amber-100",  "bg-rose-100",  "bg-indigo-100",
];

const TOP_COLORS = [
  "border-t-violet-400", "border-t-blue-400", "border-t-emerald-400",
  "border-t-amber-400",  "border-t-rose-400",  "border-t-indigo-400",
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}



/* ── card skeleton ── */
const RoadmapSkeleton = () => (
  <div className="bg-card border border-border rounded-[2rem] p-6 space-y-6 shadow-sm">
    <div className="flex items-start justify-between">
      <Skeleton className="w-14 h-14 rounded-2xl" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
    <div className="space-y-3">
      <Skeleton className="h-6 w-3/4 rounded-lg" />
      <Skeleton className="h-4 w-full rounded-md" />
      <Skeleton className="h-4 w-5/6 rounded-md" />
    </div>
    <div className="flex gap-3 pt-2">
      <Skeleton className="h-12 flex-1 rounded-xl" />
      <Skeleton className="h-12 w-12 rounded-xl" />
    </div>
  </div>
);

/* ── roadmap card ── */
const RoadmapCard: React.FC<{
  roadmap: RoadmapListItem;
  index: number;
  onView: (id: number) => void;
  onToggleSave: (r: RoadmapListItem) => void;
  isSaving: boolean;
}> = ({ roadmap, index, onView, onToggleSave, isSaving }) => {
  const colorIdx = index % GRADIENT_PAIRS.length;

  return (
    <div 
      className="group bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 cursor-pointer flex flex-col"
      onClick={() => onView(roadmap.id)}
    >
      <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-5">
        {/* Icon + ID badge row */}
        <div className="flex items-start justify-between">
          <div className={`w-14 h-14 ${BG_COLORS[colorIdx]} rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
            <Map className={`w-7 h-7 ${ICON_COLORS[colorIdx]}`} />
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-black font-mono text-muted-foreground/45 tracking-widest uppercase">ID #{String(roadmap.id).padStart(3, "0")}</span>
            {roadmap.isSaved && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
                <BookmarkCheck className="w-3 h-3" /> Saved
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 flex-1">
          <h3 className="text-xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
            Skill Path #{roadmap.id}
          </h3>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3">
            A comprehensive, structured learning journey designed to master core competencies and achieve professional excellence.
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 py-2 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-muted-foreground uppercase tracking-tighter">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(roadmap.createdAt)}
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter flex items-center gap-1">
             <Sparkles className="w-3.5 h-3.5 text-amber-400" /> AI Guided
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
          <Button
            className="flex-1 h-12 rounded-xl font-bold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs transition-all active:scale-[0.98] group-hover:bg-primary/95"
            onClick={() => onView(roadmap.id)}
          >
            Explore Map <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className={`h-12 w-12 p-0 rounded-xl border-border transition-all active:scale-[0.98] ${
              roadmap.isSaved ? "bg-primary/10 border-primary/20 text-primary" : "bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20"
            }`}
            onClick={(e) => { e.stopPropagation(); onToggleSave(roadmap); }}
            disabled={isSaving}
          >
            {roadmap.isSaved
              ? <BookmarkCheck className="w-5 h-5 fill-primary text-primary" />
              : <Bookmark className="w-5 h-5" />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ── main page ── */
const RoadmapsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  const { data: allData,   isLoading: loadingAll   } = useGetRoadmaps({ PageNumber: currentPage, PageSize: PAGE_SIZE });
  const { data: savedData, isLoading: loadingSaved } = useGetSavedRoadmaps({ PageNumber: currentPage, PageSize: PAGE_SIZE });
  const toggleSave = useToggleSaveRoadmap();

  const currentData = activeTab === "all" ? allData : savedData;
  const isLoading   = activeTab === "all" ? loadingAll : loadingSaved;

  const handleTabChange = (t: string) => { setActiveTab(t); setCurrentPage(1); };
  const handleView      = (id: number) => navigate(`/roadmaps/${id}`);
  const handleToggle    = (r: RoadmapListItem) => toggleSave.mutate(r.id);

  const items = currentData?.items ?? [];
  const totalPages = currentData?.totalPages ?? 1;
  const totalCount = currentData?.totalCount ?? 0;

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-10">
      <div className="max-w-6xl mx-auto">


        {/* ── Tabs ── */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <TabsList className="bg-card border border-border p-1.5 h-14 rounded-2xl w-full sm:w-auto flex shadow-sm">
              <TabsTrigger
                value="all"
                className="flex-1 sm:flex-none px-10 rounded-xl font-black text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                All Paths
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="flex-1 sm:flex-none px-10 rounded-xl font-black text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                My Collection
              </TabsTrigger>
            </TabsList>

            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              Showing {items.length} of {totalCount || items.length} results
            </div>
          </div>

          <TabsContent value="all" className="mt-0 outline-none">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => <RoadmapSkeleton key={i} />)}
              </div>
            ) : items.length === 0 ? (
              <div className="bg-card border border-border rounded-[3rem] p-24 text-center shadow-sm">
                <div className="w-24 h-24 bg-muted text-muted-foreground/30 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <Map className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-foreground">No Paths Available</h3>
                <p className="text-lg text-muted-foreground max-w-sm mx-auto leading-relaxed">We're still curating high-impact roadmaps for your profile. Check back shortly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {items.map((r, i) => (
                  <RoadmapCard
                    key={r.id} roadmap={r} index={i}
                    onView={handleView} onToggleSave={handleToggle}
                    isSaving={toggleSave.isPending}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="saved" className="mt-0 outline-none">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => <RoadmapSkeleton key={i} />)}
              </div>
            ) : items.length === 0 ? (
              <div className="bg-card border border-border rounded-[3rem] p-24 text-center shadow-sm">
                <div className="w-24 h-24 bg-muted text-muted-foreground/30 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <Bookmark className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-foreground">Empty Collection</h3>
                <p className="text-lg text-muted-foreground max-w-sm mx-auto mb-10 leading-relaxed">
                  Start bookmarking roadmaps to build your personalized skill development library.
                </p>
                <Button variant="outline" onClick={() => handleTabChange("all")} className="rounded-2xl h-14 px-10 font-black border-border text-primary gap-3 hover:bg-accent transition-all shadow-xl shadow-foreground/5">
                  <Map className="w-5 h-5" /> Browse All Paths
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {items.map((r, i) => (
                  <RoadmapCard
                    key={r.id} roadmap={r} index={i}
                    onView={handleView} onToggleSave={handleToggle}
                    isSaving={toggleSave.isPending}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── Pagination ── */}
        {currentData && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-20 mb-12 px-6">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              Showing {((currentPage - 1) * PAGE_SIZE) + 1} - {Math.min(currentPage * PAGE_SIZE, totalCount)} of {totalCount} Paths
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={!currentData.hasPreviousPage}
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/20 disabled:opacity-30 transition-all shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                  const page = i + 1;
                  const isCurrent = page === currentPage;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[48px] h-12 rounded-2xl text-xs font-black transition-all duration-300 ${
                        isCurrent
                          ? "bg-primary text-primary-foreground shadow-xl shadow-primary/10 scale-110"
                          : "bg-card border border-border text-muted-foreground hover:border-primary/20 hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={!currentData.hasNextPage}
                className="w-12 h-12 rounded-2xl border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/20 disabled:opacity-30 transition-all shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapsPage;
````

## File: src/features/roadmaps/services/roadmapService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  RoadmapListItem,
  RoadmapDetails,
  RoadmapQueryParams,
} from "../types/roadmap";
import type { PaginatedResponse } from "@/shared/types/pagination";

export const roadmapService = {
  /**
   * GET /Roadmap
   * Get all roadmaps with pagination
   */
  async getRoadmaps(params?: RoadmapQueryParams): Promise<PaginatedResponse<RoadmapListItem>> {
    const queryParams = new URLSearchParams();
    
    if (params?.PageNumber) queryParams.append("PageNumber", params.PageNumber.toString());
    if (params?.PageSize) queryParams.append("PageSize", params.PageSize.toString());
    
    const queryString = queryParams.toString();
    const response = await apiClient.get<PaginatedResponse<RoadmapListItem>>(
      `/Roadmap${queryString ? `?${queryString}` : ""}`
    );
    return response;
  },

  /**
   * GET /Roadmap/{id}
   * Get single roadmap by integer id
   */
  async getRoadmapById(id: number): Promise<RoadmapDetails> {
    const response = await apiClient.get<RoadmapDetails>(`/Roadmap/${id}`);
    return response;
  },

  /**
   * GET /Roadmap/saved
   * Get saved roadmaps for current user
   */
  async getSavedRoadmaps(params?: RoadmapQueryParams): Promise<PaginatedResponse<RoadmapListItem>> {
    const queryParams = new URLSearchParams();
    
    if (params?.PageNumber) queryParams.append("PageNumber", params.PageNumber.toString());
    if (params?.PageSize) queryParams.append("PageSize", params.PageSize.toString());
    
    const queryString = queryParams.toString();
    const response = await apiClient.get<PaginatedResponse<RoadmapListItem>>(
      `/Roadmap/saved${queryString ? `?${queryString}` : ""}`
    );
    return response;
  },

  /**
   * POST /Roadmap/{id}/toggle-status
   * Toggle save/unsave roadmap
   */
  async toggleSaveRoadmap(id: number): Promise<void> {
    await apiClient.post(`/Roadmap/${id}/toggle-status`);
  },
};
````

## File: src/features/roadmaps/types/roadmap.ts
````typescript
export interface RoadmapResource {
  type: string;
  url: string;
}

export interface RoadmapModule {
  week: number;
  title: string;
  description: string;
  skills_covered: string[];
  resources: RoadmapResource[];
  project: boolean;
}

export interface RoadmapData {
  roadmap_title: string;
  roadmap_type: string;
  duration_weeks: number;
  modules: RoadmapModule[];
  generation_failed: boolean;
}

export interface RoadmapListItem {
  id: number;
  createdAt: string;
  isSaved: boolean;
}

export interface RoadmapDetails {
  id: number;
  roadmapData: RoadmapData;
  createdAt: string;
  isSaved: boolean;
}

export interface RoadmapQueryParams {
  PageNumber?: number;
  PageSize?: number;
}
````

## File: src/lib/api/client.ts
````typescript
// src/lib/api/client.ts
import axios, { 
  AxiosError, 
  type AxiosInstance, 
  type AxiosRequestConfig, 
  type AxiosResponse, 
  type InternalAxiosRequestConfig 
} from "axios";
import { env } from "@/lib/env";
import { authService } from "@/features/auth/services/authService";
import type { User } from "@/features/auth/types/auth";

const API_BASE_URL = env.API_BASE_URL;

function isAuthApiPath(url: string | undefined): boolean {
  if (!url) return false;
  const u = url.toLowerCase();
  return u.includes("/auth/") || u.endsWith("/auth");
}

interface QueuedRequest {
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
  config: InternalAxiosRequestConfig;
}

class ApiClient {
  private client: AxiosInstance;
  private failedQueue: QueuedRequest[] = [];
  private isRefreshingToken = false;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // ══════════════════════════════════════════════════════════
    // REQUEST INTERCEPTOR: Add token to every request
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Skip auth header for /auth routes
        if (isAuthApiPath(config.url)) {
          return config;
        }

        // ✅ بعت التوكن الموجود بس — مش ensureValidToken
        const token = authService.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // ══════════════════════════════════════════════════════════
    // RESPONSE INTERCEPTOR: Handle 401 errors and refresh token
    // ══════════════════════════════════════════════════════════
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // Don't retry auth endpoints
        if (isAuthApiPath(originalRequest?.url)) {
          return Promise.reject(error);
        }

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          console.error("❌ 401 Unauthorized error received");
          console.error("Request URL:", originalRequest.url);
          console.error("Error response:", error.response?.data);

          // ─────────────────────────────────────────────────────
          // SCENARIO 1: Already refreshing - queue this request
          // ─────────────────────────────────────────────────────
          if (this.isRefreshingToken) {
            console.log("🔄 Token refresh in progress, queuing request...");

            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve,
                reject,
                config: originalRequest,
              });
            });
          }

          // ─────────────────────────────────────────────────────
          // SCENARIO 2: First 401 - start refresh process
          // ─────────────────────────────────────────────────────
          originalRequest._retry = true;
          this.isRefreshingToken = true;

          // ✅ تأكد إن authService مش بيعمل refresh بالفعل
          if (authService.isRefreshing()) {
            return authService.refreshToken()
              .then((res) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${res.token}`;
                }
                return this.client(originalRequest);
              })
              .catch(() => {
                authService.clearAuthData();
                return Promise.reject(error);
              })
              .finally(() => {
                this.isRefreshingToken = false;
              });
          }

          const currentRefreshToken = authService.getRefreshToken();
          console.log("Current refresh token exists:", !!currentRefreshToken);
          console.log("Refresh token expired:", authService.isRefreshTokenExpired());

          // No refresh token or expired
          if (!currentRefreshToken || authService.isRefreshTokenExpired()) {
            console.error("❌ No valid refresh token available");
            authService.clearAuthData();
            this.isRefreshingToken = false;
            this.processQueue(new Error("No valid refresh token"), null);
            // Don't redirect here - let AuthContext handle it
            return Promise.reject(error);
          }

          try {
            console.log("🔄 Refreshing token...");
            console.log("Current token:", authService.getToken()?.substring(0, 20) + "...");
            console.log("Current refresh token:", authService.getRefreshToken()?.substring(0, 20) + "...");

            // Call refresh endpoint
            const refreshResponse = await authService.refreshToken();

            console.log("✅ Token refreshed successfully");
            console.log("New token:", refreshResponse.token.substring(0, 20) + "...");
            console.log("New refresh token:", refreshResponse.refreshToken.substring(0, 20) + "...");

            // Store new tokens (already done in authService.refreshToken via updateTokens)
            const newToken = refreshResponse.token;

            // Update the failed request with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }

            // Process all queued requests with new token
            this.processQueue(null, newToken);

            // Reset refresh flag
            this.isRefreshingToken = false;

            // Retry the original request with new token
            console.log("🔁 Retrying original request with new token");
            return this.client(originalRequest);

          } catch (refreshError) {
            console.error("❌ Token refresh failed:", refreshError);

            // Clear auth data on refresh failure
            authService.clearAuthData();
            this.isRefreshingToken = false;

            // Reject all queued requests
            this.processQueue(
              refreshError instanceof Error
                ? refreshError
                : new Error("Token refresh failed"),
              null
            );

            // Don't redirect here - let AuthContext handle it
            return Promise.reject(refreshError);
          }
        }

        // Other errors - pass through
        return Promise.reject(error);
      }
    );
  }

  /**
   * Process all queued requests after token refresh
   * @param error - Error if refresh failed
   * @param token - New token if refresh succeeded
   */
  private processQueue(error: Error | null, token: string | null) {
    console.log(`📋 Processing ${this.failedQueue.length} queued requests...`);

    this.failedQueue.forEach((queuedRequest) => {
      if (error) {
        // Reject all queued requests if refresh failed
        queuedRequest.reject(error);
      } else if (token) {
        // Update queued request with new token and retry
        if (queuedRequest.config.headers) {
          queuedRequest.config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Retry the request
        this.client(queuedRequest.config)
          .then((response) => queuedRequest.resolve(response))
          .catch((err) => queuedRequest.reject(err));
      }
    });

    // Clear the queue
    this.failedQueue = [];
  }

  // ══════════════════════════════════════════════════════════
  // PUBLIC API METHODS
  // ══════════════════════════════════════════════════════════

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  public async getMe(): Promise<User> {
    const response = await this.get<any>("/UserProfile");
    if (response && !response.id) {
      try {
        const token = localStorage.getItem("auth_token");
        if (token) {
          const parts = token.split(".");
          if (parts.length === 3) {
            const payload = parts[1];
            const paddedPayload = payload + "=".repeat((4 - (payload.length % 4)) % 4);
            const decodedPayload = atob(paddedPayload.replace(/-/g, "+").replace(/_/g, "/"));
            const parsed = JSON.parse(decodedPayload);
            if (parsed && parsed.sub) {
              response.id = parsed.sub;
            }
          }
        }
        if (!response.id) {
          const storedUserStr = localStorage.getItem("auth_user");
          if (storedUserStr) {
            const storedUser = JSON.parse(storedUserStr);
            if (storedUser && storedUser.id) {
              response.id = storedUser.id;
            }
          }
        }
      } catch (e) {
        console.error("Error reading stored user id in getMe:", e);
      }
    }
    return response;
  }

  /**
   * Get the raw axios instance for advanced use cases
   */
  public getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();
````

## File: src/lib/api/errors.ts
````typescript
// src/lib/api/errors.ts
import axios, { AxiosError } from "axios";
import type { Path, UseFormSetError } from "react-hook-form";

export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export const isValidationError = (error: unknown): error is AxiosError<ValidationError> => {
  return axios.isAxiosError(error) && error.response?.data !== undefined && typeof error.response.data === "object" && "errors" in error.response.data && "status" in error.response.data && "title" in error.response.data;
};

const isErrorCode = (str: string): boolean => {
  if (!str || typeof str !== "string") return false;
  if (str.includes(".")) return true;
  const isPascalCase = /^[A-Z][a-zA-Z]*$/.test(str);
  const isShort = str.length < 30;
  if (isPascalCase && isShort) {
    const lowerStr = str.toLowerCase();
    const hasMessageWords = lowerStr.includes("invalid") || lowerStr.includes("already") || lowerStr.includes("taken") || lowerStr.includes("required") || lowerStr.includes("must") || lowerStr.includes("should");
    return !hasMessageWords;
  }
  return false;
};

const getDefaultErrorMessage = (errorCode: string): string => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const defaultMessages: Record<string, string> = {
    DuplicateUserName: "This username is already taken",
    DuplicateEmail: "This email is already registered",
    InvalidEmail: "Please enter a valid email address",
    InvalidPassword: "Invalid password",
    PasswordTooShort: "Password is too short",
    PasswordRequiresDigit: "Password must contain at least one digit",
    PasswordRequiresLower: "Password must contain at least one lowercase letter",
    PasswordRequiresUpper: "Password must contain at least one uppercase letter",
    PasswordRequiresNonAlphanumeric: "Password must contain at least one special character",
    InvalidLogin: "Invalid email or username",
    InvalidCredentials: "Invalid email/password",
    UserNotFound: "User not found",
    EmailNotConfirmed: "Email not confirmed",
    InvalidToken: "Invalid token",
    ExpiredToken: "Token has expired",
    InvalidCode: "Invalid verification code",
  };
  return defaultMessages[code ?? ""] || errorCode;
};

const mapErrorCodeToField = (errorCode: string): string | null => {
  const code = errorCode.includes(".") ? errorCode.split(".").pop() : errorCode;
  const errorCodeMap: Record<string, string> = {
    DuplicateUserName: "userName",
    DuplicateEmail: "email",
    InvalidEmail: "email",
    InvalidPassword: "password",
    PasswordTooShort: "password",
    PasswordRequiresDigit: "password",
    PasswordRequiresLower: "password",
    PasswordRequiresUpper: "password",
    PasswordRequiresNonAlphanumeric: "password",
    InvalidLogin: "emailOrUsername",
    InvalidCredentials: "emailOrUsername",
    UserNotFound: "email",
    EmailNotConfirmed: "email",
    InvalidToken: "code",
    ExpiredToken: "code",
    InvalidCode: "code",
  };
  return errorCodeMap[code ?? ""] || null;
};

export const extractErrorMessage = (error: unknown): string => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (validationError?.errors) {
      if (Array.isArray(validationError.errors)) {
        const descriptiveError = validationError.errors.find((err) => typeof err === "string" && err.length > 1 && !isErrorCode(err));
        if (descriptiveError) return descriptiveError;
        const meaningfulError = validationError.errors.find((err) => typeof err === "string" && err.length > 1);
        if (meaningfulError) {
          if (isErrorCode(meaningfulError)) return getDefaultErrorMessage(meaningfulError);
          return meaningfulError;
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      } else if (typeof validationError.errors === "object") {
        for (const errorKey of Object.keys(validationError.errors)) {
          const errorMessages = (validationError.errors as Record<string, string[]>)[errorKey];
          if (Array.isArray(errorMessages) && errorMessages.length > 0) {
            const descriptiveMsg = errorMessages.find((msg) => typeof msg === "string" && msg.length > 1 && !isErrorCode(msg));
            if (descriptiveMsg) return descriptiveMsg;
            const meaningfulMsg = errorMessages.find((msg) => typeof msg === "string" && msg.length > 1);
            if (meaningfulMsg) {
              if (isErrorCode(meaningfulMsg)) return getDefaultErrorMessage(meaningfulMsg);
              return meaningfulMsg;
            }
          }
        }
        if (validationError.title && validationError.title.length > 1) return validationError.title;
      }
    }
    if (validationError?.title && validationError.title.length > 1) return validationError.title;
    return "Validation error occurred";
  }
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      const data = error.response.data as unknown;
      if (typeof data === "object" && data !== null && "message" in data) {
        const message = (data as { message: string }).message;
        if (typeof message === "string" && message.length > 1) return message;
      }
      if (typeof data === "string" && data.length > 1) return data;
    }
    if (error.message && error.message.length > 1) return error.message;
    return "An error occurred";
  }
  if (error instanceof Error) {
    if (error.message && error.message.length > 1) return error.message;
  }
  return "An unexpected error occurred";
};

export const extractValidationErrors = (error: unknown): Record<string, string[]> => {
  if (isValidationError(error)) {
    const validationError = error.response?.data;
    if (!validationError?.errors) return {};
    if (Array.isArray(validationError.errors)) {
      const fieldErrors: Record<string, string[]> = {};
      const errors = validationError.errors as string[];
      for (let i = 0; i < errors.length; i++) {
        const errorItem = errors[i];
        if (typeof errorItem !== "string") continue;
        if (isErrorCode(errorItem)) {
          const message = i + 1 < errors.length && typeof errors[i + 1] === "string" && !isErrorCode(errors[i + 1]) ? errors[i + 1] : null;
          const fieldName = mapErrorCodeToField(errorItem);
          if (fieldName) {
            const errorMessage = message || getDefaultErrorMessage(errorItem);
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorMessage);
          } else {
            const errorMessage = message || errorItem;
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorMessage);
          }
          if (message) i++;
        } else {
          const lowerError = errorItem.toLowerCase();
          let fieldName: string | null = null;
          if (lowerError.includes("username") || lowerError.includes("user name")) fieldName = "userName";
          else if (lowerError.includes("email")) fieldName = "email";
          else if (lowerError.includes("password")) fieldName = "password";
          else if (lowerError.includes("code") || lowerError.includes("verification")) fieldName = "code";
          if (fieldName) {
            fieldErrors[fieldName] = fieldErrors[fieldName] || [];
            fieldErrors[fieldName].push(errorItem);
          } else {
            fieldErrors["root"] = fieldErrors["root"] || [];
            fieldErrors["root"].push(errorItem);
          }
        }
      }
      return fieldErrors;
    }
    if (typeof validationError.errors === "object") {
      return validationError.errors as Record<string, string[]>;
    }
  }
  return {};
};

export const extractAllErrorMessages = (error: unknown): string[] => {
  const validationErrors = extractValidationErrors(error);
  const messages: string[] = [];
  Object.values(validationErrors).forEach((fieldErrors) => {
    messages.push(...fieldErrors);
  });
  return messages.length > 0 ? messages : [extractErrorMessage(error)];
};

export const setFormErrors = <T extends Record<string, unknown>>(
  error: unknown,
  setError: UseFormSetError<T>,
  fieldMapping?: Record<string, keyof T>
): void => {
  const validationErrors = extractValidationErrors(error);
  if (Object.keys(validationErrors).length === 0) {
    const message = extractErrorMessage(error);
    setError("root" as Path<T>, { type: "server", message });
    return;
  }
  Object.entries(validationErrors).forEach(([fieldName, messages]) => {
    const formFieldName = (fieldMapping?.[fieldName] || fieldName) as keyof T;
    const errorMessage = Array.isArray(messages) ? messages[0] : messages;
    if (errorMessage) {
      setError(formFieldName as Path<T>, { type: "server", message: errorMessage });
    }
  });
};
````

## File: src/lib/env.ts
````typescript
// src/lib/env.ts
function normalizeApiBaseUrl(raw: string | undefined): string {
  const fallback = "https://localhost:7283/api";
  if (!raw?.trim()) return fallback;
  let base = raw.trim().replace(/\s+/g, "");
  if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
  return base.replace(/\/+$/, "");
}

export const env = {
  API_BASE_URL: normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL),
  get AUTH_BASE_URL() {
    return this.API_BASE_URL.replace(/\/api$/, "");
  },
  APP_NAME: import.meta.env.VITE_APP_NAME || "Freeqy",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  ENABLE_DEVTOOLS: import.meta.env.VITE_ENABLE_DEVTOOLS === "true" || import.meta.env.DEV,
} as const;
````

## File: src/lib/jwt.ts
````typescript
// src/lib/jwt.ts
import { authService } from "@/features/auth/services/authService";

export interface JwtPayload {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  jti: string;
  roles: string[];
  permissions: string[];
  exp: number;
  iss: string;
  aud: string;
  [key: string]: unknown; // Allow additional properties
}

export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1];
    const paddedPayload = payload + "=".repeat((4 - (payload.length % 4)) % 4);
    const decodedPayload = atob(paddedPayload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload) as JwtPayload;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

export const getUserRoles = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  const roles =
    decoded.roles ||
    decoded.role ||
    decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
    decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role"] ||
    [];
  return Array.isArray(roles) ? (roles as string[]) : [roles as string];
};

export const getUserPermissions = (): string[] => {
  const token = authService.getToken();
  if (!token) return [];
  const decoded = decodeJwt(token);
  if (!decoded) return [];
  const permissions = decoded.permissions || [];
  return Array.isArray(permissions) ? (permissions as string[]) : [permissions as string];
};

export const hasRole = (role: string): boolean => getUserRoles().includes(role);
export const hasPermission = (permission: string): boolean => getUserPermissions().includes(permission);
export const getUserId = (): string | null => {
  const token = authService.getToken();
  if (!token) return null;
  const decoded = decodeJwt(token);
  return decoded?.sub || null;
};

export const getTokenAccountHints = (): { firstName: string; lastName: string; email: string } | null => {
  const token = authService.getToken();
  if (!token) return null;
  const d = decodeJwt(token);
  if (!d) return null;
  const email = (d.email as string) || (d.unique_name as string) || (d.preferred_username as string) || "";
  const firstName = (d.given_name as string) || "";
  const lastName = (d.family_name as string) || "";
  if (!email && !firstName && !lastName) return null;
  return { firstName: firstName || "Account", lastName, email: email || "" };
};

export const isCompany = (): boolean => hasRole("Company");
export const isAdmin = (): boolean => hasRole("Admin");
export const isMember = (): boolean => hasRole("Member");
````

## File: src/lib/queryClient.ts
````typescript
// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const isAxiosError = (
  error: unknown
): error is { response?: { status?: number } } => {
  return error !== null && typeof error === "object" && "response" in error;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: (failureCount, error: unknown) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          if (status && status >= 400 && status < 500) return false;
        }
        return failureCount < 1;
      },
      retryDelay: 1000,
    },
  },
});
````

## File: src/lib/styleConstants.ts
````typescript
/**
 * Shared inline style constants for components that require inline styles.
 *
 * All values use CSS custom properties so they automatically respond to theme changes.
 * This file is the ONLY acceptable source for inline style objects containing colors.
 *
 * IMPORTANT: These are CSSProperties objects compatible with React's style prop.
 */

import type { CSSProperties } from "react";

export const inlineStyles = {
  // ── INPUT FIELD ──
  input: {
    width: "100%",
    height: "40px",
    padding: "0 12px",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    fontSize: "13.5px",
    color: "var(--foreground)",
    background: "var(--background)",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color var(--duration-normal) var(--ease-standard)",
  } as CSSProperties,

  inputWithLeftIcon: {
    width: "100%",
    height: "40px",
    padding: "0 12px 0 34px",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    fontSize: "13.5px",
    color: "var(--foreground)",
    background: "var(--background)",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color var(--duration-normal) var(--ease-standard)",
  } as CSSProperties,

  // ── LABEL ──
  label: {
    display: "block",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "var(--foreground)",
    marginBottom: "6px",
  } as CSSProperties,

  // ── SECTION CARD ──
  sectionCard: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "22px 24px",
    boxShadow: "var(--shadow-sm)",
  } as CSSProperties,

  // ── SECTION HEADER ──
  sectionTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--foreground)",
    margin: "0 0 4px",
  } as CSSProperties,

  sectionDesc: {
    fontSize: "12.5px",
    color: "var(--muted-foreground)",
    margin: "0 0 16px",
  } as CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid var(--border-subtle)",
    margin: "0 0 16px",
  } as CSSProperties,

  // ── DATA TABLE ──
  tableContainer: {
    background: "var(--card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
  } as CSSProperties,

  tableHeaderRow: {
    borderBottom: "1px solid var(--border-subtle)",
  } as CSSProperties,

  tableHeaderCell: {
    padding: "11px 16px",
    textAlign: "left" as const,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: "var(--muted-foreground)",
    whiteSpace: "nowrap" as const,
    background: "var(--card)",
  } as CSSProperties,

  tableHeaderCellRight: {
    padding: "11px 16px",
    textAlign: "right" as const,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: "var(--muted-foreground)",
    whiteSpace: "nowrap" as const,
    background: "var(--card)",
  } as CSSProperties,

  tableCell: {
    padding: "12px 16px",
    color: "var(--foreground)",
  } as CSSProperties,

  tableCellMuted: {
    padding: "12px 16px",
    color: "var(--muted-foreground)",
    whiteSpace: "nowrap" as const,
    fontSize: "13px",
  } as CSSProperties,

  tableEmptyCell: {
    padding: "48px 16px",
    textAlign: "center" as const,
    color: "var(--muted-foreground)",
    fontSize: "14px",
  } as CSSProperties,

  // ── PAGINATION ──
  paginationBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderTop: "1px solid var(--border-subtle)",
    flexWrap: "wrap" as const,
    gap: "8px",
  } as CSSProperties,

  paginationText: {
    fontSize: "13px",
    color: "var(--muted-foreground)",
  } as CSSProperties,

  paginationBtn: {
    height: "30px",
    padding: "0 10px",
    borderRadius: "6px",
    border: "1px solid var(--border)",
    background: "var(--card)",
    fontSize: "13px",
    color: "var(--foreground)",
    cursor: "pointer",
    fontWeight: 500,
    transition: "background-color var(--duration-fast) var(--ease-standard)",
  } as CSSProperties,

  paginationBtnActive: {
    height: "30px",
    width: "30px",
    borderRadius: "6px",
    border: "none",
    background: "var(--primary)",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--primary-foreground)",
    cursor: "pointer",
  } as CSSProperties,

  paginationBtnDisabled: {
    height: "30px",
    padding: "0 10px",
    borderRadius: "6px",
    border: "1px solid var(--border-subtle)",
    background: "var(--card)",
    fontSize: "13px",
    color: "var(--text-disabled)",
    cursor: "not-allowed",
    fontWeight: 500,
  } as CSSProperties,

  // ── SEARCH INPUT ──
  searchWrapper: {
    position: "relative" as const,
    flex: "1",
    maxWidth: "320px",
  } as CSSProperties,

  searchInput: {
    width: "100%",
    height: "36px",
    padding: "0 12px 0 36px",
    border: "1px solid var(--border)",
    borderRadius: "7px",
    fontSize: "13.5px",
    color: "var(--foreground)",
    background: "var(--card)",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color var(--duration-normal) var(--ease-standard)",
  } as CSSProperties,

  searchIcon: {
    position: "absolute" as const,
    left: "11px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "15px",
    height: "15px",
    color: "var(--muted-foreground)",
    pointerEvents: "none" as const,
  } as CSSProperties,

  // ── TOOLBAR BUTTONS ──
  filterButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    height: "36px",
    padding: "0 14px",
    border: "1px solid var(--border)",
    borderRadius: "7px",
    background: "var(--card)",
    fontSize: "13.5px",
    fontWeight: 500,
    color: "var(--foreground)",
    cursor: "pointer",
    transition: "background-color var(--duration-fast) var(--ease-standard)",
  } as CSSProperties,

  addButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    height: "36px",
    padding: "0 16px",
    border: "none",
    borderRadius: "7px",
    background: "var(--primary)",
    fontSize: "13.5px",
    fontWeight: 600,
    color: "var(--primary-foreground)",
    cursor: "pointer",
    transition: "opacity var(--duration-fast) var(--ease-standard)",
  } as CSSProperties,

  // ── PROFILE PHOTO SECTION ──
  photoSectionCard: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
  } as CSSProperties,

  coverArea: {
    width: "100%",
    height: "160px",
    overflow: "hidden",
  } as CSSProperties,

  coverGradient: {
    width: "100%",
    height: "160px",
    background:
      "linear-gradient(135deg, oklch(0.25 0.12 265) 0%, var(--primary) 60%, oklch(0.70 0.15 265) 100%)",
    overflow: "hidden",
  } as CSSProperties,

  avatarOverlay: {
    position: "absolute" as const,
    bottom: "-36px",
    left: "20px",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    border: "3px solid var(--background)",
    overflow: "hidden",
    background: "var(--muted)",
    boxShadow: "var(--shadow-md)",
  } as CSSProperties,

  coverEditButton: {
    position: "absolute" as const,
    top: "10px",
    right: "10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "color-mix(in oklch, var(--background) 90%, transparent)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  } as CSSProperties,

  // ── CV SECTION ──
  cvSectionCard: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "var(--shadow-sm)",
  } as CSSProperties,

  cvFileCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    background: "var(--surface-1)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
  } as CSSProperties,

  cvIconBox: {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    background: "color-mix(in oklch, var(--destructive) 12%, transparent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  } as CSSProperties,
} as const;
````

## File: src/lib/utils.ts
````typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a relative time string (e.g., "2 hours ago", "just now")
 */
export function formatRelativeTime(dateString: string | Date): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return rtf.format(-diffInMinutes, "minute");
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return rtf.format(-diffInHours, "hour");
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return rtf.format(-diffInDays, "day");
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return rtf.format(-diffInMonths, "month");
  
  const diffInYears = Math.floor(diffInDays / 365);
  return rtf.format(-diffInYears, "year");
}
````

## File: src/shared/components/BaseLoader.tsx
````typescript
import React from "react";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface BaseLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const BaseLoader: React.FC<BaseLoaderProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <Skeleton className={`rounded-full ${sizeClasses[size]} animate-spin border-4 border-muted border-t-primary bg-transparent`} />
    </div>
  );
};
````

## File: src/shared/components/HelpPage.tsx
````typescript
import React from "react";
import { 
  HelpCircle, 
  Lightbulb, 
  Target, 
  Rocket, 
  Mail, 
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

const HelpPage: React.FC = () => {
  const email = "sayed732004444@gmail.com";

  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
      title: "AI-Powered Career Guidance",
      description: "Our advanced AI analyzes your skills and aspirations to suggest the perfect career path for you."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Personalized Learning Roadmaps",
      description: "Get step-by-step guides and curated resources to master the skills needed for your dream job."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Job Tracker",
      description: "Manage all your job applications in one place with our intuitive tracking system."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
      title: "Verified Assessments",
      description: "Take skill assessments and add verified badges to your profile to stand out to recruiters."
    }
  ];

  const benefits = [
    {
      title: "Identify Skill Gaps",
      content: "Understand exactly what you need to learn to reach the next level in your career."
    },
    {
      title: "Save Time",
      content: "Stop searching for resources; let our AI curate the best learning materials for you."
    },
    {
      title: "Boost Visibility",
      content: "Professional profiles and verified skills make you 3x more likely to be noticed by top companies."
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-2">
          <HelpCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          How can we help you today?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover how Career Path can transform your professional journey and help you achieve your goals with the power of AI.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {feature.icon}
                </div>
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How You Benefit Section */}
      <div className="space-y-8 bg-muted/30 rounded-[2rem] p-8 md:p-12 border border-border/50">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">How You Benefit</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ChevronRight className="h-5 w-5" />
                <span>Benefit {index + 1}</span>
              </div>
              <h4 className="text-xl font-bold">{benefit.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="relative rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 overflow-hidden">
        <div className="absolute top-0 right-0 -m-20 h-80 w-80 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 -m-20 h-60 w-60 rounded-full bg-black/10 blur-[60px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-sm font-bold backdrop-blur-md">
              <Rocket className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Empowering the next generation of professionals.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl">
              We believe that everyone deserves a clear path to success. Career Path uses cutting-edge technology to level the playing field and provide expert guidance to everyone, everywhere.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform" asChild>
              <a href={`mailto:${email}`}>
                Join Our Mission
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center space-y-8 pb-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Still have questions?</h2>
          <p className="text-muted-foreground text-lg">
            We're always here to listen. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-md mx-auto p-8 rounded-3xl bg-card shadow-2xl border border-border/50 space-y-6">
          <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Direct Email</p>
            <p className="text-2xl font-bold text-foreground break-all">{email}</p>
          </div>
          <Button size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20" asChild>
            <a href={`mailto:${email}`}>
              Send us a message
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
````

## File: src/shared/components/navigation/AppHeader.tsx
````typescript
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

/**
 * App shell header: same chrome as `PublicHeader`, with sidebar toggle for `AppLayout`.
 */
const AppHeader = () => {
  return (
    <PublicHeader
      leading={
        <SidebarTrigger className="shrink-0 md:-ml-1" aria-label="Toggle sidebar" />
      }
    />
  );
};

export default AppHeader;
````

## File: src/shared/components/navigation/AppLayout.tsx
````typescript
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import AppHeader from "@/shared/components/navigation/AppHeader";
import AppSidebar from "@/shared/components/navigation/AppSidebar";
import PublicHeader from "@/shared/components/navigation/PublicHeader";
import MinimalFooter from "@/shared/components/navigation/MinimalFooter";
import { useSidebarConfig } from "@/shared/hooks/useSidebarConfig";

/**
 * Authenticated app shell: fixed `AppHeader`, collapsible `AppSidebar`, main content area.
 * Profile (and similar) routes must be nested here so header + sidebar render.
 */
const AppLayout = () => {
  const config = useSidebarConfig();

  if (!config) {
    return (
      <div className="flex flex-col min-h-screen">
        <PublicHeader />
        <div className="flex flex-1 flex-col pt-16">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "13rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar config={config} />
      <div className="flex-1 min-w-0 flex flex-col min-h-svh">
        <AppHeader />
        <div className="flex flex-1 flex-col pt-16 min-h-[calc(100vh-64px)]">
          <div className="flex-1">
            <Outlet />
          </div>
          <MinimalFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
````

## File: src/shared/components/navigation/AppSidebar.tsx
````typescript
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type LucideIcon, Settings, LogOut, HelpCircle } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useNotifications } from "@/features/notifications/context/NotificationsContext";

export interface SidebarLink {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarConfig {
  navigationLinks: SidebarLink[];
  actionLinks?: SidebarLink[];
  navigationLabel?: string;
  actionLabel?: string;
}

interface AppSidebarProps {
  config: SidebarConfig;
}

const AppSidebar = ({ config }: AppSidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();
  const { unreadCount } = useNotifications();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (pathname === "/profile") {
      return (
        location.pathname === "/profile" ||
        location.pathname.startsWith("/edit-profile")
      );
    }
    if (pathname === "/") {
      return location.pathname === "/";
    }
    return (
      location.pathname === pathname ||
      location.pathname.startsWith(`${pathname}/`)
    );
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border bg-sidebar"
    >
      {/* ── Brand Header ── */}
      <SidebarHeader className="px-4 py-4 border-b border-sidebar-border relative overflow-hidden">
        {/* Subtle brand gradient accent (Raycast-style) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 8%, transparent), transparent)",
          }}
          aria-hidden="true"
        />
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex flex-col group-data-[state=collapsed]:items-center relative"
        >
          <span
            className="text-lg font-bold text-sidebar-primary tracking-tight leading-tight group-data-[state=collapsed]:hidden"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Career Path
          </span>
          <span className="text-xs text-sidebar-foreground/50 font-medium group-data-[state=collapsed]:hidden">
            Career Platform
          </span>
          {/* Collapsed icon fallback */}
          <span className="hidden text-lg font-bold text-sidebar-primary group-data-[state=collapsed]:block">
            CP
          </span>
        </Link>
      </SidebarHeader>

      {/* ── Main Navigation ── */}
      <SidebarContent className="px-3 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {config.navigationLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <SidebarMenuItem key={`${link.label}-${link.path}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={link.label}
                      onClick={handleLinkClick}
                      className={cn(
                        "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                        active
                          ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      )}
                    >
                      <Link to={link.path} className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0 transition-colors",
                              active
                                ? "text-sidebar-primary"
                                : "text-sidebar-foreground/50"
                            )}
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </div>
                        {link.label === "Notifications" && unreadCount > 0 && (
                          <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center shrink-0">
                            {unreadCount > 99 ? "99+" : unreadCount}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ── Bottom: Settings + Help + Logout ── */}
      <SidebarFooter className="px-3 py-3 border-t border-sidebar-border">
        <SidebarMenu className="gap-0.5">
          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              onClick={handleLinkClick}
              className={cn(
                "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                isActive("/settings")
                  ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <Link to="/settings" className="flex items-center gap-3">
                <Settings
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/settings")
                      ? "text-sidebar-primary"
                      : "text-sidebar-foreground/50"
                  )}
                  aria-hidden="true"
                />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Help */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Help"
              onClick={handleLinkClick}
              className={cn(
                "h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm relative",
                isActive("/help")
                  ? "bg-sidebar-accent text-sidebar-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-1 before:bg-sidebar-primary before:rounded-r-full"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <Link to="/help" className="flex items-center gap-3">
                <HelpCircle
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/help")
                      ? "text-sidebar-primary"
                      : "text-sidebar-foreground/50"
                  )}
                  aria-hidden="true"
                />
                <span>Help</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              onClick={() => logout()}
              className="h-10 px-3 rounded-md transition-colors duration-[var(--duration-normal)] font-medium text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground cursor-pointer"
            >
              <LogOut className="h-4 w-4 shrink-0 text-sidebar-foreground/50" aria-hidden="true" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
````

## File: src/shared/components/navigation/Footer.tsx
````typescript
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, MessageSquare, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/40 backdrop-blur-md border-t border-border/50 text-foreground py-16 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Career <span className="text-primary">Path</span>
              </span>
              <span className="text-xs text-muted-foreground font-medium">Elevate Your Career Journey</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empowering professionals to navigate their career journey with AI-driven insights, smart application tracking, interactive mock interviews, and personalized roadmaps.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/job-tracker" className="text-muted-foreground hover:text-primary transition-colors">Job Tracker</Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-muted-foreground hover:text-primary transition-colors">AI Roadmaps</Link>
              </li>
              <li>
                <Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">AI Analysis</Link>
              </li>
              <li>
                <Link to="/posts" className="text-muted-foreground hover:text-primary transition-colors">Community Posts</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing Plans</Link>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              </li>
              <li>
                <a href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Support</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:support@careerpath.com" className="hover:text-primary transition-colors">support@careerpath.com</a>
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                <ShieldCheck className="h-3.5 w-3.5" /> All systems operational
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Career Path. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
````

## File: src/shared/components/navigation/MinimalFooter.tsx
````typescript
import { Link } from "react-router-dom";

const MinimalFooter = () => {
  return null;
};

export default MinimalFooter;
````

## File: src/shared/components/navigation/ProtectedRoute.tsx
````typescript
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
````

## File: src/shared/components/navigation/PublicHeader.tsx
````typescript
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { useQuery } from "@tanstack/react-query";
import { profileService } from "@/features/profile/services/profileService";
import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PublicHeaderProps {
  leading?: ReactNode;
}

const PublicHeader = ({ leading }: PublicHeaderProps) => {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const { data: profilePic } = useQuery({
    queryKey: ["userProfile", "picture"],
    queryFn: () => profileService.getProfilePicture(),
    enabled: isAuthenticated,
    staleTime: 10 * 60 * 1000,
  });

  const guestLinks: { label: string; path: string }[] = [];

  // No primary nav links shown in navbar for authenticated users — all navigation is in the sidebar
  const primaryMemberLinks: { label: string; path: string }[] = [];

  const isActive = (path: string) => {
    const pathname = path.split("?")[0];
    if (path.includes("#")) return location.pathname === pathname.split("#")[0];
    if (pathname === "/") return location.pathname === "/";
    if (pathname === "/profile") return location.pathname === "/profile" || location.pathname.startsWith("/edit-profile");
    return location.pathname === pathname || location.pathname.startsWith(`${pathname}/`);
  };



  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md transition-[left] duration-200 ease-linear md:group-data-[state=expanded]/sidebar-wrapper:left-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:left-(--sidebar-width-icon)">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-6">
            {leading}
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
              <span className="text-xl font-bold tracking-tight text-primary">
                Career Path
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden items-center gap-1 md:flex shrink-0">
              {(isAuthenticated && user ? primaryMemberLinks : guestLinks).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-accent/50 whitespace-nowrap",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-in" />
                  )}
                </Link>
              ))}


            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full overflow-hidden p-0 ring-offset-background transition-all hover:ring-2 hover:ring-primary/20"
                  >
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-10 w-10 bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center rounded-full">
                        {`${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.trim() ||
                          user.userName?.slice(0, 2).toUpperCase() ||
                          "U"}
                      </div>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 glass p-2 mt-2">
                  <DropdownMenuLabel className="font-normal px-2 py-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem asChild className="cursor-pointer rounded-md focus:bg-primary/10 focus:text-primary">
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-3 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="cursor-pointer rounded-md text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="font-semibold text-muted-foreground hover:text-foreground">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 px-5">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
````

## File: src/shared/components/navigation/PublicLayout.tsx
````typescript
import PublicHeader from "./PublicHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * PublicLayout - For public-facing pages
 * Used for: home, about, blog, contact, privacy, terms, help
 * Shows different navigation based on authentication status
 * Always shows full footer
 */
const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
````

## File: src/shared/components/navigation/ScrollToTop.tsx
````typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
````

## File: src/shared/components/NotFoundPage.tsx
````typescript
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2.5 bg-primary text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-primary">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
````

## File: src/shared/components/PageSkeleton.tsx
````typescript
import React from "react";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const PageSkeleton: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="h-16 border-b border-border flex items-center px-6">
        <Skeleton className="w-32 h-8 rounded" />
        <div className="ml-auto flex gap-4">
          <Skeleton className="w-20 h-8 rounded" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {/* Content Skeleton */}
      <main className="container mx-auto p-6 max-w-7xl">
        {/* Page Title */}
        <div className="mb-8">
          <Skeleton className="w-64 h-10 rounded mb-2" />
          <Skeleton className="w-96 h-4 rounded" />
        </div>

        {/* Grid layout similar to dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
        </div>

        {/* Main body area */}
        <div className="space-y-4">
          <Skeleton className="w-full h-16 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-64 rounded-xl" />
        </div>
      </main>
    </div>
  );
};
````

## File: src/shared/components/theme/ThemeProvider.tsx
````typescript
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
} & Omit<NextThemesProviderProps, 'children'>;

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey="freeqy-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
````

## File: src/shared/components/theme/ThemeToggle.tsx
````typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

type ThemeToggleProps = {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

export function ThemeToggle({
  variant = "ghost",
  size = "icon",
  className,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={className}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Switch to {isDark ? "light" : "dark"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
````

## File: src/shared/components/ThemedToaster.tsx
````typescript
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemedToaster = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, render a neutral Toaster to avoid hydration mismatch
  if (!mounted) {
    return <Toaster position="top-right" expand richColors closeButton />;
  }

  return (
    <Toaster
      position="top-right"
      expand
      richColors
      closeButton
      theme={resolvedTheme as "light" | "dark"}
    />
  );
};
````

## File: src/shared/components/ui/alert.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "destructive" | "warning";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border p-4",
      {
        "bg-background text-foreground border-border": variant === "default",
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive": variant === "destructive",
        "border-yellow-200 bg-yellow-50 text-yellow-800": variant === "warning",
      },
      className
    )}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
````

## File: src/shared/components/ui/badge.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
````

## File: src/shared/components/ui/button.tsx
````typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-11 rounded-md px-8 has-[>svg]:px-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
````

## File: src/shared/components/ui/card.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
````

## File: src/shared/components/ui/checkbox.tsx
````typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
````

## File: src/shared/components/ui/dialog.tsx
````typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-popover p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
````

## File: src/shared/components/ui/dropdown-menu.tsx
````typescript
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
````

## File: src/shared/components/ui/field.tsx
````typescript
import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { Separator } from "./separator";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  );
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors) {
      return null;
    }

    if (errors?.length === 1 && errors[0]?.message) {
      return errors[0].message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
````

## File: src/shared/components/ui/form.tsx
````typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/shared/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
````

## File: src/shared/components/ui/input.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
````

## File: src/shared/components/ui/label.tsx
````typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label };
````

## File: src/shared/components/ui/progress.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: number;
    max?: number;
  }
>(({ className, value, max = 100, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - ((value || 0) / max) * 100}%)` }}
    />
  </div>
));
Progress.displayName = "Progress";

export { Progress };
````

## File: src/shared/components/ui/select.tsx
````typescript
import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: src/shared/components/ui/separator.tsx
````typescript
import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
````

## File: src/shared/components/ui/sheet.tsx
````typescript
"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-[1001] flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: src/shared/components/ui/sidebar.tsx
````typescript
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"
import { Slot } from "radix-ui"

import { useIsMobile } from "@/shared/hooks/useMobile"
import { cn } from "@/lib/utils"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Separator } from "@/shared/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet"
import { Skeleton } from "@/shared/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH_MOBILE = "14rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": "var(--sidebar-width)",
              "--sidebar-width-icon": "var(--sidebar-width-icon)",
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block w-(--sidebar-width) transition-[width] duration-200 ease-linear data-[state=collapsed]:w-(--sidebar-width-icon)"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed top-(--header-height) bottom-0 left-0 z-[1000] hidden h-[calc(100vh-var(--header-height))] w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-3 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(6))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex min-w-0 w-full flex-1 flex-col bg-background transition-[margin] duration-200 ease-linear",
        "md:peer-data-[state=expanded]:ml-(--sidebar-width) md:peer-data-[state=collapsed]:ml-(--sidebar-width-icon)",
        "md:group-data-[state=expanded]/sidebar-wrapper:ml-(--sidebar-width) md:group-data-[state=collapsed]/sidebar-wrapper:ml-(--sidebar-width-icon)",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
````

## File: src/shared/components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...props}
    />
  )
}

export { Skeleton }
````

## File: src/shared/components/ui/sonner.tsx
````typescript
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
````

## File: src/shared/components/ui/table.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=columnheader])]:px-6",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=cell])]:px-6", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
````

## File: src/shared/components/ui/tabs.tsx
````typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-background",
        underline: "border-b-2 border-transparent underline-offset-4 underline-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: src/shared/components/ui/textarea.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
````

## File: src/shared/components/ui/tooltip.tsx
````typescript
import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: src/shared/components/UnderConstruction.tsx
````typescript
import { Construction } from "lucide-react";

export const UnderConstruction = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <Construction className="w-16 h-16 text-muted-foreground/40" />
      <h2 className="text-2xl font-bold text-foreground">Under Construction</h2>
      <p className="text-muted-foreground max-w-sm">
        This page is coming soon. We're working hard to bring it to you.
      </p>
    </div>
  );
};
````

## File: src/shared/components/UserCard.tsx
````typescript
import { useNavigate } from "react-router-dom";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

interface UserCardProps {
  user: Record<string, any>;
}

export const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  const name = user.fullName || `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Unknown User";
  const initials = name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase();
  const skills: string[] = Array.isArray(user.skills)
    ? user.skills.map((s: any) => (typeof s === "string" ? s : s?.name ?? "")).filter(Boolean)
    : [];

  const handleClick = () => {
    if (user.id) navigate(`/profile/${user.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="card-interactive p-5 cursor-pointer flex flex-col gap-3"
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-subtle"
          />
        ) : (
          <div className="w-12 h-12 rounded-full avatar-fallback shrink-0">
            <span className="text-sm font-bold">{initials}</span>
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-primary text-sm leading-tight truncate">{name}</p>
          {user.jobTitle && (
            <p className="text-xs text-secondary truncate flex items-center gap-1 mt-0.5">
              <Briefcase className="w-3 h-3 shrink-0" />
              {user.jobTitle}
            </p>
          )}
        </div>
      </div>

      {/* Location / Education */}
      <div className="space-y-1">
        {(user.city || user.country) && (
          <p className="text-xs text-muted flex items-center gap-1">
            <MapPin className="w-3 h-3 shrink-0" />
            {[user.city, user.country].filter(Boolean).join(", ")}
          </p>
        )}
        {user.university && (
          <p className="text-xs text-muted flex items-center gap-1">
            <GraduationCap className="w-3 h-3 shrink-0" />
            {user.university}
          </p>
        )}
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skills.slice(0, 4).map((skill) => (
            <span key={skill} className="badge badge-info text-[10px]">
              {skill}
            </span>
          ))}
          {skills.length > 4 && (
            <span className="text-[10px] text-muted">+{skills.length - 4} more</span>
          )}
        </div>
      )}
    </div>
  );
};
````

## File: src/shared/hooks/useDebounce.ts
````typescript
import { useState, useEffect } from "react";

/**
 * useDebounce Hook
 * Delays updating a value until a certain amount of time has passed.
 * Useful for search inputs to prevent excessive API calls.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
````

## File: src/shared/hooks/useMobile.ts
````typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
````

## File: src/shared/hooks/useSidebarConfig.ts
````typescript
import type { SidebarConfig } from "@/shared/components/navigation/AppSidebar";
import {
  User,
  Briefcase,
  ClipboardList,
  Brain,
  Map,
  Building2,
  Shield,
  FileText,
  Bell,
  Lock,
} from "lucide-react";
import { usePermissions } from "@/features/auth/hooks/usePermissions";
import { authService } from "@/features/auth/services/authService";

export const useSidebarConfig = (): SidebarConfig | null => {
  const { isAdmin, isCompany } = usePermissions();

  const hasSession = authService.isAuthenticated();
  if (!hasSession) {
    return null;
  }

  // Core tabs visible to every authenticated user (role: user/member)
  const navigationLinks = [
    { label: "Profile", path: "/profile", icon: User },
    { label: "Notifications", path: "/notifications", icon: Bell },
    { label: "Jobs", path: "/jobs", icon: Briefcase },
    { label: "Job Tracker", path: "/job-tracker", icon: ClipboardList },
    { label: "AI Analysis", path: "/ai", icon: Brain },
    { label: "Roadmaps", path: "/roadmaps", icon: Map },
    { label: "Posts", path: "/posts", icon: FileText },
    { label: "Change Password", path: "/change-password", icon: Lock },
  ];

  // Company tab: visible to company and admin roles
  if (isCompany || isAdmin) {
    navigationLinks.push({
      label: "Company",
      path: "/company/dashboard",
      icon: Building2,
    });
  }

  // Admin tab: visible to admin role only
  if (isAdmin) {
    navigationLinks.push({
      label: "Admin",
      path: "/admin/dashboard",
      icon: Shield,
    });
  }

  return {
    navigationLinks,
    navigationLabel: "Navigation",
  };
};
````

## File: src/shared/types/api.ts
````typescript
// Authentication Request Types
// Type definitions for API requests and responses

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ResendConfirmationEmailRequest {
  email: string;
}

export interface ConfirmationEmailRequest {
  userId: string;
  code: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  token: string;
  refreshToken: string;
}

// Authentication Response Types
export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

export interface RefreshTokenResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshTokenExpiration: string; // ISO date string
}

// API Error Types
export interface ValidationError {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]> | string[];
  traceId?: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  type?: string;
  title?: string;
  traceId?: string;
}

// Generic API Response
export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  success: boolean;
}

// User Types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  isEmailConfirmed?: boolean;
}

// Auth State Types
export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Query Keys
export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
} as const;
````

## File: src/shared/types/pagination.ts
````typescript
export interface PaginatedResponse<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface RequestFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: 'ASC' | 'DESC';
}
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "types": [
      "vite/client"
    ],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": [
    "src"
  ]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vercel.json
````json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
          form: ['react-hook-form', 'zod'],
        }
      }
    }
  }
});
````

## File: src/features/jobs/hooks/useJobs.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { jobService } from "@/features/jobs/services/jobService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  JobsQueryParams,
  ApplyJobRequest,
  AddJobRequest,
} from "@/features/jobs/types/jobs";


/**
 * Hook for getting all jobs
 */
export const useGetAllJobs = (params?: JobsQueryParams) => {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: ({ signal }) => jobService.getAllJobs(params, signal),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Hook for getting job by id
 */
export const useGetJobById = (id: string) => {
  return useQuery({
    queryKey: ["jobs", id],
    queryFn: () => jobService.getJobById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook for applying to a job
 */
export const useApplyToJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ jobId, request }: { jobId: string; request: ApplyJobRequest }) =>
      jobService.applyToJob(jobId, request),
    onSuccess: () => {
      toast.success("Applied successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};


/**
 * Hook for updating a job
 */
export const useUpdateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ jobId, request }: { jobId: string; request: AddJobRequest }) =>
      jobService.updateJob(jobId, request),
    onSuccess: () => {
      toast.success("Job updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for deleting a job
 */
export const useDeleteJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobId: string) => jobService.deleteJob(jobId),
    onSuccess: () => {
      toast.success("Job deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for toggling job status
 */
export const useToggleJobStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ jobId }: { jobId: string }) => jobService.toggleJobStatus(jobId),
    onSuccess: () => {
      toast.success("Job status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};


/**
 * Hook for getting job applicants
 */
export const useGetJobApplicants = (jobId: string, params?: JobsQueryParams) => {
  return useQuery({
    queryKey: ["jobApplicants", jobId, params],
    queryFn: ({ signal }) => jobService.getJobApplicants(jobId, params, signal),
    enabled: !!jobId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};


/**
 * Hook for adding a job
 */
export const useAddJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddJobRequest) =>
      jobService.addJob(request),
    onSuccess: () => {
      toast.success("Job added successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for accepting an applicant
 */
export const useAcceptApplicant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ companyId, jobId, submissionId }: { companyId: string; jobId: string; submissionId: string }) =>
      jobService.acceptApplicant(companyId, jobId, submissionId),
    onSuccess: () => {
      toast.success("Applicant accepted successfully!");
      queryClient.invalidateQueries({ queryKey: ["jobApplicants"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};

/**
 * Hook for rejecting an applicant
 */
export const useRejectApplicant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ companyId, jobId, submissionId }: { companyId: string; jobId: string; submissionId: string }) =>
      jobService.rejectApplicant(companyId, jobId, submissionId),
    onSuccess: () => {
      toast.success("Applicant rejected.");
      queryClient.invalidateQueries({ queryKey: ["jobApplicants"] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      toast.error(message);
    },
  });
};
````

## File: src/features/jobs/types/jobs.ts
````typescript
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
````

## File: src/features/jobs/services/jobService.ts
````typescript
import { apiClient } from "@/lib/api/client";
import type {
  JobsListResponse,
  JobsQueryParams,
  JobResponse,
  ApplyJobRequest,
  AddJobRequest,
  ApplicantsListResponse,
  ApiResult,
} from "../types/jobs";


/**
 * Jobs Service
 * Handles all Jobs endpoints
 */
class JobService {
  /**
   * Get all jobs with filters
   * GET /Jobs
   */
  async getAllJobs(params?: JobsQueryParams, signal?: AbortSignal): Promise<JobsListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const response = await apiClient.get<any>(`/jobs?${queryString}`, { signal });
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Get job by id
   * GET /api/jobs/{id}
   */
  async getJobById(id: string): Promise<JobResponse> {
    const response = await apiClient.get<ApiResult<JobResponse>>(`/jobs/${id}`);
    return response.value;
  }

  /**
   * Apply to a job
   * POST /api/jobs/{jobId}/apply
   */
  async applyToJob(jobId: string, request: ApplyJobRequest): Promise<void> {
    const formData = new FormData();
    formData.append("CV", request.cv);
    formData.append("Phone", request.phone);
    if (request.notes) formData.append("Notes", request.notes);
    
    await apiClient.post(`/jobs/${jobId}/apply`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Add new job
   * POST /api/jobs
   */
  async addJob(request: AddJobRequest): Promise<JobResponse> {
    const response = await apiClient.post<JobResponse>(`/jobs`, request);
    return response;
  }

  /**
   * Update job
   * PUT /api/jobs/{jobId}
   */
  async updateJob(jobId: string, request: AddJobRequest): Promise<void> {
    await apiClient.put(`/jobs/${jobId}`, request);
  }

  /**
   * Delete job
   * DELETE /api/jobs/{jobId}
   */
  async deleteJob(jobId: string): Promise<void> {
    await apiClient.delete(`/jobs/${jobId}`);
  }

  /**
   * Toggle job active/inactive status
   * PUT /api/jobs/{jobId}/toggle-status
   */
  async toggleJobStatus(jobId: string): Promise<void> {
    await apiClient.put(`/jobs/${jobId}/toggle-status`);
  }

  /**
   * Get job applicants
   * GET /api/jobs/{jobId}/applicants
   */
  async getJobApplicants(jobId: string, params?: JobsQueryParams, signal?: AbortSignal): Promise<ApplicantsListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);
    
    const url = queryParams.toString()
      ? `/jobs/${jobId}/applicants?${queryParams.toString()}`
      : `/jobs/${jobId}/applicants`;

    const response = await apiClient.get<any>(url, { signal });
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Get jobs by company id
   * GET /api/jobs/company/{companyId}
   */
  async getJobsByCompany(companyId: string, params?: JobsQueryParams, signal?: AbortSignal): Promise<JobsListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    
    const url = queryParams.toString()
      ? `/jobs/company/${companyId}?${queryParams.toString()}`
      : `/jobs/company/${companyId}`;

    const response = await apiClient.get<any>(url, { signal });
    return response.value !== undefined ? response.value : response;
  }

  /**
   * Accept an applicant
   * PUT /companies/{companyId}/jobs/{jobId}/submissions/{submissionId}/accept
   */
  async acceptApplicant(companyId: string, jobId: string, submissionId: string): Promise<void> {
    await apiClient.put(`/JobSubmissions/companies/${companyId}/jobs/${jobId}/submissions/${submissionId}/accept`);
  }

  /**
   * Reject an applicant
   * PUT /companies/{companyId}/jobs/{jobId}/submissions/{submissionId}/reject
   */
  async rejectApplicant(companyId: string, jobId: string, submissionId: string): Promise<void> {
    await apiClient.put(`/JobSubmissions/companies/${companyId}/jobs/${jobId}/submissions/${submissionId}/reject`);
  }

}

export const jobService = new JobService();
````

## File: src/features/interview/pages/InterviewPage.tsx
````typescript
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetInterviewQuestions, useSubmitInterview } from "../hooks/useInterview";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Flag,
  Clock,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { InterviewAnswer } from "@/features/interview/types/interview";

/* ─── Expandable review card ─── */
const ReviewCard: React.FC<{
  idx: number;
  detail: { questionId: number; question: string; yourAnswer: string; correctAnswer: string; isCorrect: boolean; explanation?: string };
}> = ({ idx, detail }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        {detail.isCorrect ? (
          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500 shrink-0" />
        )}
        <span className="text-sm font-semibold text-foreground flex-1 leading-relaxed">
          <span className="text-muted-foreground mr-2 font-medium">{idx + 1}.</span>
          {detail.question}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        }
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className={`p-4 rounded-xl border ${detail.isCorrect ? "bg-emerald-500/10 border-emerald-500/20" : "bg-red-500/10 border-red-500/20"}`}>
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${detail.isCorrect ? "text-emerald-500" : "text-red-500"}`}>YOUR ANSWER</p>
              <p className="text-sm text-foreground leading-relaxed">{detail.yourAnswer}</p>
            </div>
            <div className="p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/20">
              <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-500 mb-2">CORRECT ANSWER</p>
              <p className="text-sm text-foreground leading-relaxed">{detail.correctAnswer}</p>
            </div>
          </div>
          {detail.explanation && (
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-foreground">Explanation</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─── MAIN COMPONENT ─── */
const InterviewPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { data: questions, isLoading, error } = useGetInterviewQuestions(jobId || "");
  const submitInterview = useSubmitInterview();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<InterviewAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [timer, setTimer] = useState(45 * 60);

  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  /* ── Loading ── */
  if (isLoading) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <Skeleton className="h-2 rounded-full mb-8" />
        <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
          <Skeleton className="h-7 w-3/5 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-7" />
          {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-[60px] rounded-[10px] mb-2.5" />)}
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error || !questions) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-10 text-center">
          <XCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
          <p className="text-[15px] text-muted-foreground mb-4">Failed to load interview questions.</p>
          <button
            onClick={() => navigate(-1)}
            className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ── Empty ── */
  if (questions.length === 0) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-10 text-center">
          <p className="text-[15px] text-muted-foreground mb-4">No questions found for this interview.</p>
          <button
            onClick={() => navigate(-1)}
            className="h-9 px-5 border border-border rounded-lg bg-card text-foreground cursor-pointer font-semibold text-[13.5px] hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ── Results view ── */
  if (isSubmitted && submitInterview.data) {
    const result = submitInterview.data;

    return (
      <div className="bg-background min-h-screen font-sans">
        <div className="max-w-[720px] mx-auto p-4 sm:p-8 pb-16">

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">
            Interview Results
          </h1>

          {/* Score — only real data */}
          <div className="bg-card border border-border rounded-2xl p-10 shadow-sm mb-8 flex flex-col items-center text-center">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
              Your Score
            </p>
            <div className="flex items-end justify-center gap-3">
              <span className="text-8xl font-black text-primary leading-none">{result.correctAnswers}</span>
              <span className="text-4xl font-black text-muted-foreground mb-2">/ {result.totalQuestions}</span>
            </div>
            <p className="text-base text-muted-foreground mt-4">correct answers</p>
          </div>

          {/* Detailed review */}
          <h2 className="text-lg font-bold text-foreground mb-1">Detailed Review</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Review your answers and understand the correct solutions.
          </p>
          <div className="space-y-4">
            {result.details.map((detail, idx) => (
              <ReviewCard key={detail.questionId} idx={idx} detail={detail} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setAnswers([]);
                setCurrentQuestionIndex(0);
                setTimer(45 * 60);
              }}
              className="h-10 px-6 border border-border rounded-xl bg-card text-sm font-bold text-foreground cursor-pointer hover:bg-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="h-10 px-8 rounded-xl bg-primary text-sm font-bold text-primary-foreground cursor-pointer hover:bg-primary/90 transition-all shadow-md"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Assessment view ── */
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = (currentQuestionIndex / questions.length) * 100;
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);
  const hasSelected = !!currentAnswer;

  const handleSelectOption = (optionId: number) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === currentQuestion.id);
      if (existing >= 0) {
        const next = [...prev];
        next[existing] = { questionId: currentQuestion.id, selectedOptionId: optionId };
        return next;
      }
      return [...prev, { questionId: currentQuestion.id, selectedOptionId: optionId }];
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      if (!jobId) return;
      submitInterview.mutate(
        { jobId, request: { answers } },
        { onSuccess: () => setIsSubmitted(true) }
      );
    } else {
      setCurrentQuestionIndex((p) => p + 1);
    }
  };

  const handlePrevious = () => setCurrentQuestionIndex((p) => Math.max(0, p - 1));
  const timerWarning = timer < 5 * 60;

  return (
    <div className="bg-background min-h-screen font-sans">
      <div className="max-w-[720px] mx-auto p-4 sm:p-8 pb-24">

        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <span className="text-sm text-muted-foreground font-medium">
            Technical Assessment <span className="mx-1 text-border">/</span>
            <span className="text-foreground font-bold">React Core</span>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setFlagged((f) => !f)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 h-9 px-4 border rounded-xl text-xs font-bold transition-all shadow-sm
                ${flagged
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                  : "bg-card border-border text-muted-foreground hover:bg-muted"
                }`}
            >
              <Flag className="w-3.5 h-3.5" />
              {flagged ? "Flagged" : "Flag"}
            </button>
            <div className={`flex items-center gap-2 h-9 px-4 border rounded-xl text-sm font-bold shadow-sm
              ${timerWarning
                ? "bg-red-500/10 border-red-500/30 text-red-500 animate-pulse"
                : "bg-card border-border text-foreground"
              }`}>
              <Clock className="w-3.5 h-3.5" />
              {formatTime(timer)}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest">
            <span className="text-primary">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Done</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight mb-10 tracking-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const selected = currentAnswer?.selectedOptionId === option.id;
              return (
                <label
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-center gap-4 p-4 sm:p-5 border-2 rounded-2xl cursor-pointer transition-all duration-200 group
                    ${selected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/40 bg-card hover:bg-muted/50"
                    }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                    ${selected
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40 group-hover:border-primary/60 bg-background"
                    }`}>
                    {selected && <div className="w-2 h-2 rounded-full bg-primary-foreground shadow-sm" />}
                  </div>
                  <span className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors
                    ${selected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
                    {option.optionText}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || submitInterview.isPending}
            className="flex items-center gap-2 h-11 px-5 border border-border rounded-xl bg-card text-sm font-bold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!hasSelected || submitInterview.isPending}
            className={`flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-bold transition-all shadow-md
              ${!hasSelected || submitInterview.isPending
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"
              }`}
          >
            {submitInterview.isPending ? "Submitting..." : isLastQuestion ? "Submit Interview" : "Next Question"}
            {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
````

## File: src/features/company/pages/JobApplicantsPage.tsx
````typescript
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePermissions } from "@/features/auth/hooks/usePermissions";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetJobApplicants, useAcceptApplicant, useRejectApplicant } from "@/features/jobs/hooks/useJobs";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Mail, Phone, Calendar, Download,
  Search, Users, AlertCircle, ChevronLeft, ChevronRight,
  FileText, MoreHorizontal, CheckCircle, XCircle, Loader2,
} from "lucide-react";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import { SubmissionStatus } from "@/features/jobs/types/jobs";

const getFullUrl = (path: string | null | undefined, apiBase: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("blob:")) return path;
  const base = apiBase.replace("/api", "");
  return `${base}/${path.replace(/\\/g, "/")}`;
};

function formatDate(d: string) {
  if (!d) return "N/A";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getDaysAgo(d: string) {
  if (!d) return "";
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 86_400_000);
  return days === 0 ? "Today" : days === 1 ? "Yesterday" : `${days} days ago`;
}

/** Normalize status from backend (string OR number OR undefined) → numeric SubmissionStatus */
function normalizeStatus(status: unknown): number {
  if (status === null || status === undefined) return SubmissionStatus.Pending;
  if (typeof status === "number") return status;
  const map: Record<string, number> = {
    Pending: SubmissionStatus.Pending,
    Accepted: SubmissionStatus.Accepted,
    Rejected: SubmissionStatus.Rejected,
  };
  return map[status as string] ?? SubmissionStatus.Pending;
}


const ApplicantSkeleton = () => (
  <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
    <div className="flex items-start gap-4">
      <Skeleton className="w-14 h-14 rounded-2xl shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded-lg" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton className="h-20 w-full rounded-2xl" />
    </div>
    <div className="flex gap-3">
      <Skeleton className="h-11 flex-1 rounded-xl" />
      <Skeleton className="h-11 flex-1 rounded-xl" />
    </div>
  </div>
);

const JobApplicantsPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { isCompany, companyId } = usePermissions();
  const acceptMutation = useAcceptApplicant();
  const rejectMutation = useRejectApplicant();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 400);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    if (!isCompany) navigate("/");
  }, [isCompany, navigate]);

  const { data, isLoading, error } = useGetJobApplicants(jobId ?? "", {
    searchValue: debouncedSearch,
    pageNumber,
    pageSize,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPageNumber(1);
  };

  const applicants = data?.items ?? [];
  const total = data?.totalCount ?? 0;

  if (!isCompany) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Job Applicants
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                Senior Product Designer
              </span>
              {!isLoading && !error && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm">
                  {total} Candidates
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex-1 md:flex-none relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                placeholder="Search candidates..."
                value={searchValue}
                onChange={handleSearch}
                className="pl-12 w-full md:w-72 lg:w-96 h-12 bg-card border-border shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-2xl transition-all text-base"
              />
              {searchValue && (
                <button
                  onClick={() => {
                    setSearchValue("");
                    setPageNumber(1);
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <AlertCircle className="w-5 h-5" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              className="rounded-2xl border-border text-muted-foreground h-12 w-12 p-0 shrink-0 bg-card hover:bg-accent shadow-sm transition-all"
            >
              <MoreHorizontal className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ApplicantSkeleton key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-card rounded-[2.5rem] border border-border shadow-xl">
            <div className="w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center mb-8 animate-pulse">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">
              Unable to load applicants
            </h3>
            <p className="text-muted-foreground mb-10 max-w-md text-lg leading-relaxed">
              We encountered a technical issue while fetching the candidates list. Please check your connection and try again.
            </p>
            <Button
              variant="default"
              onClick={() => window.location.reload()}
              className="rounded-2xl px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
            >
              Retry Connection
            </Button>
          </div>
        )}

        {!isLoading && !error && applicants.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-card rounded-[2.5rem] border border-border shadow-xl">
            <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center mb-8">
              <Users className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">
              {searchValue ? "No matching candidates" : "No applications yet"}
            </h3>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              {searchValue
                ? `We couldn't find any applicants matching "${searchValue}". Try using broader search terms.`
                : "It looks like no one has applied for this position yet."}
            </p>
            {searchValue && (
              <Button
                variant="outline"
                onClick={() => setSearchValue("")}
                className="mt-10 rounded-2xl px-8 h-12 border-border text-muted-foreground font-bold hover:bg-accent transition-all"
              >
                Clear all filters
              </Button>
            )}
          </div>
        )}

        {!isLoading && !error && applicants.length > 0 && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {applicants.map((applicant, idx) => {
                const cvUrl = getFullUrl(applicant.cvPath || applicant.cVPath, env.API_BASE_URL);
                const imgUrl = getFullUrl(applicant.applicantImageUrl, env.API_BASE_URL);
                const initials = (applicant.applicantName ?? "?")
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={applicant.id}
                    className="group bg-card border border-border rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div
                          className="flex items-center gap-4 cursor-pointer min-w-0"
                          onClick={() => {
                            const id = (applicant as any).applicantionId ||
                              (applicant as any).applicantId ||
                              (applicant as any).ApplicantId ||
                              (applicant as any).userId ||
                              (applicant as any).UserId ||
                              applicant.id;

                            if (id && id !== "undefined") {
                              navigate(`/profile/${id}`);
                            }
                          }}
                        >
                          <div className="relative shrink-0">
                            {imgUrl ? (
                              <img
                                src={imgUrl}
                                alt={applicant.applicantName}
                                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-muted group-hover:ring-primary/20 transition-all duration-500"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center ring-4 ring-muted group-hover:ring-primary/20 transition-all duration-500">
                                <span className="text-xl font-black text-muted-foreground/50">
                                  {initials}
                                </span>
                              </div>
                            )}
                            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-card rounded-full shadow-sm" />
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-black text-foreground text-lg leading-tight truncate group-hover:text-primary transition-colors">
                              {applicant.applicantName}
                            </h3>
                            <div className="flex flex-col gap-1 mt-1.5">
                              <span className="text-xs font-medium text-muted-foreground flex items-center gap-2 truncate">
                                <Mail className="w-4 h-4 shrink-0 opacity-40" />
                                <span className="truncate">{applicant.applicantEmail}</span>
                              </span>
                              {applicant.phone && (
                                <span className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                                  <Phone className="w-4 h-4 shrink-0 opacity-40" />
                                  {applicant.phone}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground hover:bg-accent h-10 w-10 p-0 rounded-xl shrink-0 transition-all"
                        >
                          <MoreHorizontal className="w-6 h-6" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between gap-3 mb-6 py-4 border-y border-border/50">
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/60">
                          <Calendar className="w-4 h-4 text-muted-foreground/45" />
                          <span className="uppercase tracking-wider">Applied {formatDate(applicant.appliedAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Status badge */}
                          <span className={cn(
                            "text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border",
                            normalizeStatus(applicant.status) === SubmissionStatus.Accepted
                              ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                              : normalizeStatus(applicant.status) === SubmissionStatus.Rejected
                              ? "bg-destructive/10 text-destructive border-destructive/20"
                              : "bg-primary/5 text-primary border-primary/10"
                          )}>
                            {normalizeStatus(applicant.status) === SubmissionStatus.Accepted
                              ? "✓ Accepted"
                              : normalizeStatus(applicant.status) === SubmissionStatus.Rejected
                              ? "✗ Rejected"
                              : getDaysAgo(applicant.appliedAt)}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 mb-8">
                        <h4 className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mb-3 px-1">
                          Applicant Summary
                        </h4>
                        <div className="bg-muted/50 rounded-3xl p-5 border border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 italic font-medium">
                            {applicant.notes
                              ? `"${applicant.notes}"`
                              : "No professional notes provided."}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto pt-2">
                        {/* Accept / Reject actions — hidden when already decided */}
                        {normalizeStatus(applicant.status) === SubmissionStatus.Pending && (() => {
                          // Track loading per-card using mutation.variables
                          const isAccepting = acceptMutation.isPending && acceptMutation.variables?.submissionId === applicant.id;
                          const isRejecting = rejectMutation.isPending && rejectMutation.variables?.submissionId === applicant.id;
                          const isBusy = isAccepting || isRejecting;
                          return (
                            <div className="flex gap-3">
                              <Button
                                size="lg"
                                className="flex-1 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-black gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all disabled:opacity-60"
                                disabled={isBusy}
                                onClick={() =>
                                  companyId && jobId &&
                                  acceptMutation.mutate({ companyId, jobId, submissionId: applicant.id })
                                }
                              >
                                {isAccepting ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                                Accept
                              </Button>
                              <Button
                                size="lg"
                                variant="destructive"
                                className="flex-1 h-12 rounded-2xl text-sm font-black gap-2 active:scale-[0.98] transition-all disabled:opacity-60"
                                disabled={isBusy}
                                onClick={() =>
                                  companyId && jobId &&
                                  rejectMutation.mutate({ companyId, jobId, submissionId: applicant.id })
                                }
                              >
                                {isRejecting ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <XCircle className="w-4 h-4" />
                                )}
                                Reject
                              </Button>
                            </div>
                          );
                        })()}

                        {normalizeStatus(applicant.status) === SubmissionStatus.Accepted && (
                          <div className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-black">
                            <CheckCircle className="w-4 h-4" /> Application Accepted
                          </div>
                        )}
                        {normalizeStatus(applicant.status) === SubmissionStatus.Rejected && (
                          <div className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-black">
                            <XCircle className="w-4 h-4" /> Application Rejected
                          </div>
                        )}
                        {/* CV download */}
                        <Button
                          size="lg"
                          className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-black gap-2 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
                          onClick={() => cvUrl && window.open(cvUrl, "_blank")}
                          disabled={!cvUrl}
                        >
                          <Download className="w-4 h-4" /> Download CV
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {data && data.totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 pb-10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber((p) => p - 1)}
                  disabled={!data.hasPreviousPage}
                  className="w-12 h-12 rounded-2xl border-border shadow-sm hover:shadow-md transition-all disabled:opacity-30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from(
                    { length: Math.min(data.totalPages, 5) },
                    (_, i) => {
                      const page = i + 1;
                      const isCurrent = page === pageNumber;
                      return (
                        <Button
                          key={page}
                          variant={isCurrent ? "default" : "outline"}
                          size="icon"
                          onClick={() => setPageNumber(page)}
                          className={cn(
                            "w-12 h-12 rounded-2xl font-black text-sm shadow-sm transition-all duration-300",
                            isCurrent
                              ? "bg-primary hover:bg-primary/90 border-none scale-110 shadow-primary/20 shadow-lg text-primary-foreground"
                              : "border-border text-muted-foreground hover:bg-accent"
                          )}
                        >
                          {page}
                        </Button>
                      );
                    }
                  )}

                  {data.totalPages > 5 && (
                    <>
                      <span className="px-2 text-muted-foreground font-black">...</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPageNumber(data.totalPages)}
                        className="w-12 h-12 rounded-2xl border-border text-muted-foreground font-black shadow-sm"
                      >
                        {data.totalPages}
                      </Button>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber((p) => p + 1)}
                  disabled={!data.hasNextPage}
                  className="w-12 h-12 rounded-2xl border-border shadow-sm hover:shadow-md transition-all disabled:opacity-30"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicantsPage;
````
