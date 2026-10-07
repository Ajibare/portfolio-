import { cn } from "@/lib/utils";
import { WordReveal } from "@/components/ui/WordReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "right" && "items-end text-right",
        className,
      )}
    >
      <p className={cn("eyebrow")}>
        <span className="text-accent">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className={cn("text-display max-w-4xl text-paper")}>
        <WordReveal text={title} />
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-muted",
            align === "right" && "text-right",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}