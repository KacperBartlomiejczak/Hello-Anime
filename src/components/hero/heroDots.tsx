import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Anime } from "@/types/anime";

interface HeroDotProps {
  currentIndex: number;
  onDot: (index: number) => void;
  animes: Anime[];
}

export default function HeroDots({
  currentIndex,
  onDot,
  animes,
}: HeroDotProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {animes.map((_, index) => (
        <motion.div
          key={index}
          onClick={() => onDot(index)}
          className={cn(
            "w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
          )}
          animate={{
            width: index === currentIndex ? 32 : 10,
            backgroundColor: index === currentIndex ? "#ff2e63" : "#6b7280",
            opacity: index === currentIndex ? 1 : 0.7,
          }}
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      ))}
    </div>
  );
}
