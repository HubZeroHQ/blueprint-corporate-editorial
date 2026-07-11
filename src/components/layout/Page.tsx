import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page({
  className,
  children,
  ...props
}: PageProps) {
  return (
    <main
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