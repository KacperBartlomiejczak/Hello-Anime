import { cn } from "@/lib/utils";
import { forwardRef } from "react";
interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, children },
  ref
) {
  return (
    <section className={cn("bg-background p-4 w-full", className)} ref={ref}>
      <div className="relative container gap-4 mx-auto flex flex-col p-4">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
