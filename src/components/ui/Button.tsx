import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "small" | "base" | "large";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export default function Button({
  children,
  size = "base",
  className,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-[4px] transition-colors bg-ime-accent hover:bg-blue-700 text-white",
        {
          "h-[26px] px-4 text-xs": size === "small",
          "h-[32px] px-[22px] text-xs": size === "base",
          "h-[40px] px-6 text-sm": size === "large",
        },
        {
          "pointer-events-none bg-slate-400 dark:bg-slate-500":
            disabled || loading,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
