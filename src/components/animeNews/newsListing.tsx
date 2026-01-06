import { News } from "@/types/news";
import AnimeTile from "./AnimeTile";

interface NewsProps {
  news: News[];
}

export default function NewsListing({ news }: NewsProps) {
  // Deduplicate news based on mal_id to prevent key collisions, then slice
  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.mal_id === item.mal_id)
  );

  // Fix: slice(1) instead of slice(1, -1) to include the last item
  // We want to skip the first one because it's the MainNews
  const listedNews = uniqueNews.slice(1);

  return (
    <div className="grid grid-cols-1 gap-3 w-full lg:grid-cols-2 xl:grid-cols-1 lg:w-full xl:w-[30%]">
      {listedNews.map((n) => (
        <AnimeTile key={n.mal_id} news={n} />
      ))}
    </div>
  );
}
