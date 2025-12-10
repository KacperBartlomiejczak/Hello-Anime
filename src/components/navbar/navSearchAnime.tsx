import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface NavSearchAnimeProps {
  isSearch: boolean;
  onClick: () => void;
}

export default function NavSearchAnime({
  isSearch,
  onClick,
}: NavSearchAnimeProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <AnimatePresence mode="wait">
      {isSearch && (
        <motion.div
          key="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-60 flex items-center justify-center p-8"
        >
          <motion.div
            initial={{ opacity: isSearch ? 1 : 0 }}
            animate={{ opacity: isSearch ? 1 : 0 }}
            exit={{ opacity: isSearch ? 1 : 0 }}
            className="absolute inset-0 bg-secondary-background blur-sm pointer-events-auto z-50"
          ></motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ delay: 0.1 }}
            className="absolute right-5 top-5 z-60"
          >
            <button className="p-4 cursor-pointer" onClick={onClick}>
              <X size={32} />
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isFocused ? -200 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="z-60 "
          >
            <input
              type="text"
              placeholder="Search for anime"
              className="px-4 py-2 border-b-white border-b-2 outline-none focus:border-b-brand transition-colors md:px-8"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
