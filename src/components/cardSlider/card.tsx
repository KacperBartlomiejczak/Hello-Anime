import { Anime } from "@/types/anime";
import Image from "next/image";
import { Star, Clock } from "lucide-react";
import Link from "next/link";
import CardContent from "./cardContent";
import CardImage from "./cardImage";

export default function Card({ ...anime }: Anime) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="group relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/5 hover:border-brand/30"
    >
      <CardImage {...anime} />

      <CardContent {...anime} />
    </Link>
  );
}
