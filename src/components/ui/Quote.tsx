import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface QuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  author?: string;
  role?: string;
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, author, role, ...props }, ref) => {
    return (
      <figure className={cn("flex flex-col gap-6 md:gap-8 border-l-2 border-stone-900 pl-6 md:pl-10 py-2 my-12", className)}>
        <blockquote
          ref={ref}
          className="font-serif text-2xl md:text-4xl text-stone-900 font-medium leading-snug tracking-tight"
          {...props}
        >
          &quot;{children}&quot;
        </blockquote>
        {(author || role) && (
          <figcaption className="flex flex-col gap-1">
            {author && <span className="font-medium text-stone-900">{author}</span>}
            {role && <span className="text-sm text-stone-500">{role}</span>}
          </figcaption>
        )}
      </figure>
    );
  }
);
Quote.displayName = "Quote";
