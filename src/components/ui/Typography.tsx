import { HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const typographyVariants = cva("text-stone-900", {
  variants: {
    variant: {
      h1: "font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight",
      h2: "font-serif text-3xl md:text-5xl font-medium tracking-tight leading-tight",
      h3: "font-serif text-2xl md:text-3xl font-medium leading-snug",
      h4: "font-serif text-xl md:text-2xl font-medium leading-snug",
      lead: "text-lg md:text-xl lg:text-2xl text-stone-600 leading-relaxed font-light",
      body: "text-base md:text-lg text-stone-700 leading-relaxed",
      small: "text-sm text-stone-500 leading-normal",
      caption: "text-xs text-stone-400 uppercase tracking-widest font-medium",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    // Determine the default tag based on the variant
    const defaultTag = 
      variant === "h1" ? "h1" :
      variant === "h2" ? "h2" :
      variant === "h3" ? "h3" :
      variant === "h4" ? "h4" :
      variant === "small" || variant === "caption" ? "span" :
      "p";
      
    const Component = as || defaultTag;

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Typography.displayName = "Typography";
