import { Anime } from "@/types/anime";
import Link from "next/link";
import CardContent from "./cardContent";
import CardImage from "./cardImage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends Anime {
  className?: string;
}

const MotionLink = motion.create(Link);

export default function Card({ className, ...anime }: CardProps) {
  return (
    <MotionLink
      href={`/anime/${anime.mal_id}`}
      className={cn(
        "group relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg border border-white/5",
        className
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
      
      <CardImage {...anime} />

      <CardContent {...anime} />
    </MotionLink>
  );
}
