import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
interface MainNewsProps {
  news: News;
}

export default function MainNews({ news }: MainNewsProps) {
  const mainNews = news;
  return (
    <div className="group flex flex-col w-full h-120 gap-2 items-start justify-center lg:w-1/3 lg:h-130 lg:justify-start">
      <div className="relative w-full h-2/3">
        <Image
          src={mainNews.images.jpg.image_url}
          alt={mainNews.title}
          fill
          className="rounded-xl object-cover object-top group-hover:scale-105 transition-transform"
          sizes="100%"
        />
      </div>
      <div className="flex flex-row justify-between mt-2 w-full items-center">
        <p className="text-gray-400 text-xs">
          {new Date(mainNews.date).toLocaleDateString()}
        </p>
        <p className="text-brand text-sm">{mainNews.author_username}</p>
      </div>

      <h3 className="font-poppins font-bold text-xl ">{mainNews.title}</h3>
      <Link
        target="_blank"
        className="py-2 px-4 bg-brand font-poppins font-bold rounded-xl hover:bg-brand/60 shadow-brand/20 shadow-md transition-colors lg:text-lg"
        href={mainNews.url}
      >
        Read more
      </Link>
    </div>
  );
}
