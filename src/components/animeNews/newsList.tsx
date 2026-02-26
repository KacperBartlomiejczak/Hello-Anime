import { cn } from "@/lib/utils";
import { News } from "@/types/news";

import MainNews from "./mainNews";
import NewsListing from "./newsListing";

interface NewsProps {
  news: News[];
}

export default function NewsList({ news }: NewsProps) {
  if (!news || news.length === 0)
    return (
      <div>
        <p>There is no news for today!</p>
      </div>
    );

  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row gap-6 justify-center w-full mt-4 flex-1 min-h-0",
      )}
    >
      <MainNews news={news[0]} />
      <NewsListing news={news} />
    </div>
  );
}
