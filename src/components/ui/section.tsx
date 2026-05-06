import { cn } from "@/lib/utils";
import { forwardRef } from "react";
interface SectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, id, children },
  ref,
) {
  return (
    // use a positive scroll-margin-top (with a CSS variable fallback) instead of the
    // previous negative utility which pushed anchored sections too far up
    <section
      className={cn(
        "bg-background p-4 w-full flex flex-col scroll-mt-(--header-height,80px)",
        className,
      )}
      ref={ref}
      id={id}
    >
      <div className="relative container gap-4 mx-auto flex flex-col p-4 flex-1 min-h-0">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
