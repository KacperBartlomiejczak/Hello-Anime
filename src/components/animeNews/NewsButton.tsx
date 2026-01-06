import Link from "next/link";
import { cn } from "@/lib/utils";

interface NewsButtonProps {
  url: string;
  className?: string;
  name?: string;
}

export default function NewsButton({ url, className, name }: NewsButtonProps) {
  return (
    <Link
      target="_blank"
      className={cn(
        "py-2 px-4 bg-brand font-poppins font-bold rounded-xl hover:bg-brand/60 shadow-brand/20 shadow-md transition-colors lg:text-lg text-white text-center",
        className
      )}
      href={url}
    >
      {name ? name : "Read more"}
    </Link>
  );
}
