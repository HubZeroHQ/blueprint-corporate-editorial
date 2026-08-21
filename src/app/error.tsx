"use client";

import { useEffect } from "react";
import Link from "next/link";

import { logger } from "@/lib/logger";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    logger.error("Unhandled route error", error);
  }, [error]);

  return (
    <main id="main-content" role="alert" className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-serif text-3xl font-semibold">
        Something went wrong
      </h1>

      <div className="flex items-center gap-6">
        <button type="button" onClick={reset}>Try again</button>
        <Link href="/">Return to homepage</Link>
      </div>
    </main>
  );
}
