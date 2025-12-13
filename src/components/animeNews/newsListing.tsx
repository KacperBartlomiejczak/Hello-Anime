import { News } from "@/types/news";
import Link from "next/link";

interface NewsProps {
  news: News[];
}

export default function NewsListing({ news }: NewsProps) {
  return(
    <div className="flex flex-col gap-5 mt-2">
      {news.slice(1, -1).map((n, index) => {
        return (
          <Link
            href={n.url}
            key={index}
            target="_blank"
            className="flex flex-col w-full border-brand/20 border p-2 rounded-lg bg-background shadow-brand shadow-sm hover:scale-110 hover:border-brand transition-all duration-300"
          >
            <h4 className="font-poppins font-bold text-sm/loose">{n.title}</h4>
            <div className="flex flex-row w-full items-center justify-between">
              <p className="text-brand text-sm">{n.author_username}</p>
              <p className="text-gray-400 text-xs py-1">
                {new Date(n.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
