"use client";

import { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return <div style={{ animationDelay: `${delay}s` }} className="content-reveal">{children}</div>;
}
