import { Anime } from "@/types/anime";
import Image from "next/image";

import Link from "next/link";
import CardContent from "./cardContent";
import CardImage from "./cardImage";
import { cn } from "@/lib/utils";

interface CardProps extends Anime {
  className?: string;
}

export default function Card({ className, ...anime }: CardProps) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className={cn(
        "group relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/5 hover:border-brand/30",
        className
      )}
    >
      <CardImage {...anime} />

      <CardContent {...anime} />
    </Link>
  );
}
