"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { searchAnime } from "@/hooks/searchAnime";
import { useDebounce } from "@/hooks/useDebounce";
import { Anime } from "@/types/anime";
import Image from "next/image";
import { useBlockScroll } from "@/hooks/useBlockScroll";

interface NavSearchAnimeProps {
  isSearch: boolean;
  onClick: () => void;
}

export default function NavSearchAnime({
  isSearch,
  onClick,
}: NavSearchAnimeProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debounceQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchAnime = async () => {
      if (debounceQuery.length < 2) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      const data = await searchAnime(debounceQuery);

      if (data) {
        setResults(data.data);
      }
      setIsLoading(false);
    };

    fetchAnime();
  }, [debounceQuery]);

  useBlockScroll(isSearch);

  return (
    <AnimatePresence mode="wait">
      {isSearch && (
        <>
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
              className="absolute inset-0 bg-secondary-background  pointer-events-auto z-50"
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
              animate={{ y: isFocused || query !== "" ? 50 : 200 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col h-full z-60 items-center "
            >
              <input
                type="text"
                placeholder="Search for anime"
                className="px-4 py-2 border-b-white border-b-2 outline-none focus:border-b-brand transition-colors md:px-8"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {isLoading && (
                <div className="p-4">
                  <p className="text-white text-center">Searching..</p>
                </div>
              )}
              {!isLoading && results.length > 0 && (
                <div className="flex flex-col gap-4 p-2 self-start">
                  {results.map((anime) => (
                    <div
                      key={anime.mal_id}
                      className="flex-gap-4 p-2 hover:bg-white/10 vursor-pointer transition-all"
                    >
                      <div className="relative w-16 h-24 shrink-0">
                        <Image
                          src={anime.images.webp.large_image_url}
                          alt={anime.title}
                          fill
                          className="object-cover object-center rounded-xl"
                        ></Image>
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{anime.title}</h4>
                        <p className="text-gray-400 text-sm">
                          {anime.year} • {anime.type}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!isLoading && query.length > 2 && (
                <div className="p-4">
                  <p>There is no anime in that type</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
