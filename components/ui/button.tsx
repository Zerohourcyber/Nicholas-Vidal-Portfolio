import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200",
      {
        "bg-accent-600 hover:bg-accent-700 text-white shadow-sm hover:shadow-glow-accent":
          variant === "default",
        "border-2 border-steel-300 text-steel-700 hover:border-accent-500 hover:bg-accent-50/50 hover:text-accent-700":
          variant === "outline",
        "px-4 py-2 text-sm": size === "sm",
        "px-6 py-3 text-base": size === "default",
        "px-8 py-4 text-lg": size === "lg",
      },
      className
    );

    // When asChild is true, just add the classes to the child element
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(buttonClasses, (children as any).props.className),
      });
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
