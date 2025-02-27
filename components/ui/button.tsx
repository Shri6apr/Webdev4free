import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-xs font-mono rounded-none text-black border border-black bg-transparent hover:bg-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        minimal: "bg-transparent hover:bg-gray-100",
      },
      size: {
        default: "h-8 px-4",
        sm: "h-6 px-3",
        lg: "h-10 px-5",
      },
    },
    defaultVariants: {
      variant: "minimal",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
