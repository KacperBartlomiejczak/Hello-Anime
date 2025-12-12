import { cn } from "@/lib/utils";
interface SectionProps {
  classNames?: string;
  children?: React.ReactNode;
}

export default function Section({ classNames, children }: SectionProps) {
  return (
    <section className={cn("bg-background p-4 w-full", classNames)}>
      <div className="relative container gap-4 mx-auto flex flex-col  p-4 md:text-2xl">
        {children}
      </div>
    </section>
  );
}
