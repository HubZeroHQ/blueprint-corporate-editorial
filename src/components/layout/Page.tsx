import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page({
  id = "main-content",
  className,
  children,
  ...props
}: PageProps) {
  return (
    <main
      id={id}
      className={cn(
        "min-h-screen",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
