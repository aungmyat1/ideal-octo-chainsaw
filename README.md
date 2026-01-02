# AI-Powered Course Generator SaaS

## Set Up Next.js

- **Action**: Created a new Next.js 13 app using `create-next-app` with TypeScript, ESLint, Tailwind, and `src/` dir.
- **Key Concepts**:
  - App Router basics (`/app` structure, file-based routing).
  - Server Components vs Client Components.
  - Next.js 13+ conventions (e.g., `page.tsx`, nested routes).

**What's Built**: An AI-powered course generator SaaS that creates full courses (units + chapters) using OpenAI, pulls relevant YouTube videos, generates summaries, and quizzes — all with a Stripe-powered subscription model.

## Tech Stack Preview
- Next.js 13 (App Router)
- OpenAI
- Stripe
- YouTube API
- Unsplash API
- ShadCN UI
- TailwindCSS
- Prisma
- PlanetScale

## Why It Matters
Teaches full-stack SaaS development from auth to payments to AI integration — and crucially, how to **self-host** for long-running tasks, unlike Vercel's 10s timeout.

## Project Structure
The project is organized in the [course-generator](file:///workspaces/ideal-octo-chainsaw/course-generator) directory with the following key components:
- `src/app` - Main application using the App Router
- `src/app/page.tsx` - Landing page for the course generator
- `src/app/dashboard/page.tsx` - Dashboard for creating and managing courses
- `src/app/layout.tsx` - Root layout for the application