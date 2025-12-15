"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimeDescriptionProps {
  desc: string;
}

export default function AnimeDescription({ desc }: AnimeDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2 pb-4">
      <motion.div
        initial={{ height: isExpanded ? "auto" : "4.5rem" }}
        animate={{ height: isExpanded ? "auto" : "4.5rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden relative"
      >
        <p className="text-gray-300, leading-6">{desc}</p>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-background to-transparent"></div>
        )}
      </motion.div>
      <button
        onClick={() => setIsExpanded((prevState) => !prevState)}
        className="text-brand font-bold text-sm hover:underline mt-1 transition-all duration-300 cursor-pointer"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
