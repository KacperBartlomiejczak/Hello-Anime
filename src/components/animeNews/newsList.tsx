import { cn } from "@/lib/utils";
import { News } from "@/types/news";

import MainNews from "./mainNews";
import NewsListing from "./newsListing";

interface NewsProps {
  news: News[];
}
export default function NewsList({ news }: NewsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 lg:flex-row items-start justify-center lg:mt-4"
      )}
    >
      <MainNews news={news[0]} />

      <NewsListing news={news} />
    </div>
  );
}
