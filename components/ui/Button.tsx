import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
  download?: string | boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-paper border border-transparent",
  ghost: "border border-line text-paper hover:border-accent hover:text-accent",
  text: "text-muted hover:text-paper",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2.5 text-[11px]",
  md: "px-6 py-3.5 text-[11px]",
  lg: "px-7 py-4 text-xs",
};

// A single motion policy applied across every button variant.
const motionPolicy =
  "transition-colors duration-300 motion-reduce:transition-none";

export function Button(props: ButtonProps) {
  const {
    variant = "ghost",
    size = "md",
    className,
    children,
    onClick,
    "aria-label": ariaLabel,
  } = props;

  const classNames = cn(
    "group relative inline-flex select-none items-center justify-center gap-2 font-mono uppercase tracking-[0.18em]",
    motionPolicy,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      <span className="inline-block translate-y-px">{children}</span>
    </>
  );

  if (typeof props.href === "string") {
    const { href, external, download } = props;
    const AnchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      className: classNames,
      onClick,
      "aria-label": ariaLabel,
    };
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="click" {...AnchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} download={download} data-cursor="click" {...AnchorProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled } = props;
  const ButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    className: classNames,
    type,
    disabled,
    onClick,
    "aria-label": ariaLabel,
  };
  return (
    <button data-cursor="click" {...ButtonProps}>
      {content}
    </button>
  );
}