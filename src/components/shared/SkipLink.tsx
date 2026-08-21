import type { ReactNode } from "react";

interface SkipLinkProps {
  targetId?: string;
  children?: ReactNode;
}

export function SkipLink({
  targetId = "main-content",
  children = "Skip to main content",
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-tooltip)] focus:rounded-md focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white"
    >
      {children}
    </a>
  );
}
