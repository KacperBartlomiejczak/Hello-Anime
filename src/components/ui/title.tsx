import { cn } from "@/lib/utils";
interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h3
      className={cn(
        "text-white font-poppins font-bold text-xl hover:text-brand transition-colors duration-300", className
      )}
    >
      {children}
    </h3>
  );
}
