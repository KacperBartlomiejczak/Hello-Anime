import Image from "next/image";
import { Star } from "lucide-react";
import { Anime } from "@/types/anime";

export default function CardImage({ images, title, score }: Anime) {
  return (
    <div className="relative w-full h-64 shrink-0 overflow-hidden">
      <Image
        src={images.webp.large_image_url}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-110 rounded-xl"
        sizes="100%"
      />

      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-white flex items-center gap-1">
        <Star size={12} className="text-yellow-400 " />
        {score || "N/A"}
      </div>
    </div>
  );
}
