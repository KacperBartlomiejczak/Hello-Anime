import { News } from "@/types/news";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimeTileProps {
  news: News;
  className?: string;
}

export default function AnimeTile({ news, className }: AnimeTileProps) {
  return (
    <Link
      href={news.url}
      target="_blank"
      className={cn(
        "flex flex-col w-[95%] border-brand/20 border p-3 rounded-xl bg-background shadow-brand/10 shadow-sm hover:scale-[1.02] hover:border-brand/50 hover:shadow-brand/20 hover:shadow-md transition-all duration-300 group",
        className
      )}
    >
      <h4 className="font-poppins font-bold text-sm/loose group-hover:text-brand transition-colors line-clamp-2">
        {news.title}
      </h4>
      <div className="flex flex-row w-full items-center justify-between mt-auto pt-2">
        <p className="text-brand text-xs font-medium truncate max-w-[50%]">
          {news.author_username}
        </p>
        <p
          className="text-gray-400 text-[10px] uppercase tracking-wide"
          suppressHydrationWarning
        >
          {new Date(news.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
