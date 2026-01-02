import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:text-left">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            AI-Powered Course Generator
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Create full courses with units and chapters using OpenAI. Pulls relevant YouTube videos, generates summaries, and creates quizzes — all with a Stripe-powered subscription model.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="/dashboard">Get Started</a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button variant="outline" asChild>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href="https://github.com/your-repo/course-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}