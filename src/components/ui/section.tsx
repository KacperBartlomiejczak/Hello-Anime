import { cn } from "@/lib/utils";
import { forwardRef } from "react";
interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, children },
  ref,
) {
  return (
    <section className={cn("bg-background p-4 w-full flex flex-col", className)} ref={ref}>
      <div className="relative container gap-4 mx-auto flex flex-col p-4 flex-1 min-h-0">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
