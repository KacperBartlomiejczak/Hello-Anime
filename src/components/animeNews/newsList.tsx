
import { cn } from "@/lib/utils";
import { News } from "@/types/news";

import MainNews from "./mainNews";
import NewsListing from "./newsListing";

interface NewsProps {
  news: News[];
}

export default function NewsList({ news }: NewsProps) {
  if (!news || news.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row gap-6 items-start justify-center w-full mt-4"
      )}
    >
      <MainNews news={news[0]} />

      <NewsListing news={news} />
    </div>
  );
}
