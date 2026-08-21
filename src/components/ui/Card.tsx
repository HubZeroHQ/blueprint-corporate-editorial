import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("group relative flex flex-col gap-6 transition-colors duration-300", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardImage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative aspect-[4/3] w-full overflow-hidden bg-stone-100", className)}
      {...props}
    />
  )
);
CardImage.displayName = "CardImage";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-serif text-2xl font-medium leading-snug tracking-tight text-stone-900",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base leading-relaxed text-stone-600", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-auto flex items-center pt-2", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardImage, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
