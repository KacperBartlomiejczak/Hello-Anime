"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";

interface AnimatedGridProps {
  animeList: any[];
}

export default function AnimatedGrid({ animeList }: AnimatedGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 justify-items-center mt-5"
    >
      {animeList.map((anime) => (
        <Card
          key={anime.mal_id}
          {...anime}
          className="w-full max-w-[320px] h-[510px]"
        />
      ))}
    </motion.div>
  );
}
