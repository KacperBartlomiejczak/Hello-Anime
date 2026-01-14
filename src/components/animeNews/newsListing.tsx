import { News } from "@/types/news";
import AnimeTile from "./AnimeTile";

interface NewsProps {
  news: News[];
}

export default function NewsListing({ news }: NewsProps) {
  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.mal_id === item.mal_id)
  );

  const listedNews = uniqueNews.slice(1);

  return (
    <div className="grid grid-cols-1 gap-3 w-full lg:grid-cols-2 xl:grid-cols-1 lg:w-full xl:w-[30%] overflow-y-scroll h-[50vh]">
      {listedNews.map((n) => (
        <AnimeTile key={n.mal_id} news={n} />
      ))}
    </div>
  );
}
