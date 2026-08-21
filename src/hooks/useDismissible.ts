"use client";

import { useEffect, useRef, type RefObject } from "react";

let lockDepth = 0;
let restoreOverflowTo: string | null = null;

function acquireScrollLock() {
  if (lockDepth === 0) {
    restoreOverflowTo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockDepth += 1;
}

function releaseScrollLock() {
  lockDepth = Math.max(0, lockDepth - 1);
  if (lockDepth === 0 && restoreOverflowTo !== null) {
    document.body.style.overflow = restoreOverflowTo;
    restoreOverflowTo = null;
  }
}

interface UseDismissibleOptions {
  open: boolean;
  onDismiss: () => void;
  restoreFocusTo?: RefObject<HTMLElement | null>;
  lockScroll?: boolean;
  closeOnEscape?: boolean;
}

export function useDismissible({
  open,
  onDismiss,
  restoreFocusTo,
  lockScroll = true,
  closeOnEscape = true,
}: UseDismissibleOptions): void {
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    if (lockScroll) acquireScrollLock();

    const onKeyDown = closeOnEscape
      ? (event: KeyboardEvent) => {
          if (event.key === "Escape") onDismissRef.current();
        }
      : undefined;

    if (onKeyDown) document.addEventListener("keydown", onKeyDown);

    return () => {
      if (onKeyDown) document.removeEventListener("keydown", onKeyDown);
      if (lockScroll) releaseScrollLock();

      // The current trigger is authoritative if it re-rendered while open.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const target = restoreFocusTo?.current ?? previouslyFocused;
      const active = document.activeElement;
      const focusWasLost = !active || active === document.body || active === document.documentElement;
      if (focusWasLost && target?.isConnected) target.focus();
    };
  }, [open, lockScroll, closeOnEscape, restoreFocusTo]);
}
