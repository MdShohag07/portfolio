"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";
import { transition } from "@/lib/motion";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-soft disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-electric to-cyber text-white shadow-[var(--glow-electric)] hover:shadow-[var(--glow-cyber)]",
        secondary:
          "border border-glass-border-strong bg-glass text-foreground backdrop-blur-md hover:border-electric-soft/60 hover:bg-glass-strong",
        ghost: "text-silver hover:text-foreground",
      },
      size: {
        md: "h-11 px-6 text-(length:--text-small)",
        lg: "h-14 px-8 text-(length:--text-body)",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  }
);

type ButtonProps = Omit<
  React.ComponentProps<"button">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> &
  VariantProps<typeof buttonVariants> & {
    magnetic?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = true, children, ...props }, forwardedRef) => {
    const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic<HTMLButtonElement>(0.3);

    return (
      <motion.button
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        style={magnetic ? { x, y } : undefined}
        onPointerMove={magnetic ? onPointerMove : undefined}
        onPointerLeave={magnetic ? onPointerLeave : undefined}
        whileTap={{ scale: 0.96 }}
        transition={transition.micro}
        className={cn(buttonVariants({ variant, size }), className)}
        data-cursor="interactive"
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
