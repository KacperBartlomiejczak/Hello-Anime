import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NewsButton from "./NewsButton";

interface MainNewsProps {
  news: News;
  className?: string;
}

export default function MainNews({ news: mainNews, className }: MainNewsProps) {
  return (
    <div
      className={cn(
        "group flex flex-col w-full gap-3 items-start justify-start xl:w-[70%]",
        className,
      )}
    >
      <div className="relative w-full aspect-video md:aspect-21/9 xl:aspect-video rounded-2xl overflow-hidden shadow-lg shadow-black/20">
        <Image
          src={mainNews.images.jpg.image_url}
          alt={mainNews.title}
          fill
          unoptimized
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 70vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full flex flex-col gap-2">
          <div className="flex flex-row justify-between w-full items-center text-white/80 text-xs md:text-sm font-medium">
            <span className="bg-brand/90 px-2 py-0.5 rounded text-white shadow-sm backdrop-blur-sm">
              Featured
            </span>
            <span>{new Date(mainNews.date).toLocaleDateString()}</span>
          </div>
          <h3 className="font-poppins font-bold text-lg md:text-2xl text-white line-clamp-2 md:line-clamp-none drop-shadow-md">
            {mainNews.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-2 px-1">
        <div className="flex justify-between items-center">
          <p className="text-brand font-semibold text-sm">
            {mainNews.author_username}
          </p>
          <NewsButton url={mainNews.url} />
        </div>
      </div>
    </div>
  );
}
