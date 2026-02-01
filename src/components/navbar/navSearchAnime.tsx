"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, TrendingUp } from "lucide-react";
import { searchAnime } from "@/hooks/searchAnime";
import { getTopAnime } from "@/hooks/getTopAnime";
import { useDebounce } from "@/hooks/useDebounce";
import { Anime } from "@/types/anime";
import Image from "next/image";
import { useBlockScroll } from "@/hooks/useBlockScroll";
import Link from "next/link";

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
  const [trendingAnime, setTrendingAnime] = useState<Anime[]>([]);
  const [showTrending, setShowTrending] = useState(false);
  const [loadingTrending, setLoadingTrending] = useState(false);

  const debounceQuery = useDebounce(query, 500);

  // Fetch trending anime when search opens
  useEffect(() => {
    const fetchTrending = async () => {
      if (isSearch && trendingAnime.length === 0) {
        setLoadingTrending(true);
        try {
          const data = await getTopAnime("airing", 1, 10);
          setTrendingAnime(data.data || []);
        } catch (error) {
          console.error("Error fetching trending anime:", error);
        } finally {
          setLoadingTrending(false);
        }
      }
    };
    fetchTrending();
  }, [isSearch]); //eslint-disable-line

  // Delay showing trending when query is empty
  useEffect(() => {
    if (query.length === 0) {
      setLoadingTrending(true);
      const timer = setTimeout(() => {
        setShowTrending(true);
        setLoadingTrending(false);
      }, 800);
      return () => {
        clearTimeout(timer);
        setLoadingTrending(false);
      };
    } else {
      setShowTrending(false);
      setLoadingTrending(false);
    }
  }, [query]);

  const handleFetchAnime = async () => {
    if (debounceQuery.length < 2) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const data = await searchAnime(debounceQuery);
      setResults(data.data || []);
    } catch {
      console.error("Error while fetching anime");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchAnime();
  }, [debounceQuery]); //eslint-disable-line

  useBlockScroll(isSearch);

  const onCloseNav = () => {
    onClick();
    setQuery("");
  };

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
            />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ delay: 0.1 }}
              className="absolute right-5 top-5 z-60"
            >
              <button
                className="p-4 cursor-pointer"
                onClick={onClick}
                aria-label="Close search"
              >
                <X size={32} />
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 50 }}
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
              {/* Loading for search results */}
              {isLoading && (
                <div className="p-4">
                  <p className="text-white text-center">Searching..</p>
                </div>
              )}
              {/* Loading for trending anime */}
              {loadingTrending && !isLoading && (
                <div className="p-4">
                  <p className="text-white text-center">
                    Loading trending anime..
                  </p>
                </div>
              )}
              {/* Search Results */}
              {!isLoading && results.length > 0 && (
                <div className="w-full max-w-4xl mt-8 px-4">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white font-poppins">
                      Results for <span className="text-brand">"{query}"</span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
                    {results.map((anime) => (
                      <Link
                        key={anime.mal_id}
                        href={`/anime/${anime.mal_id}`}
                        className="flex gap-4 p-3 bg-background/20 hover:bg-background/40 cursor-pointer transition-all rounded-xl border border-white/5"
                        onClick={onCloseNav}
                      >
                        <div className="relative w-20 h-28 shrink-0">
                          <Image
                            src={anime.images.webp.large_image_url}
                            alt={anime.title}
                            fill
                            unoptimized
                            className="object-cover object-center rounded-lg"
                            sizes="100px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-base line-clamp-2 mb-1">
                            {anime.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-2">
                            {anime.year} • {anime.type}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-brand text-sm font-semibold">
                              ⭐ {anime.score || "N/A"}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {anime.status}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {!isLoading && query.length > 2 && results.length === 0 && (
                <div className="p-4">
                  <p>There is no anime in that type</p>
                </div>
              )}
              {/* Show trending when no query - after 2 second delay */}
              {!isLoading && showTrending && trendingAnime.length > 0 && (
                <div className="w-full max-w-4xl mt-8 px-4">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-brand" size={24} />
                    <h3 className="text-xl font-bold text-white font-poppins">
                      Currently Trending
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
                    {trendingAnime.map((anime) => (
                      <Link
                        key={anime.mal_id}
                        href={`/anime/${anime.mal_id}`}
                        className="flex gap-4 p-3 bg-background/20 hover:bg-background/40 cursor-pointer transition-all rounded-xl border border-white/5"
                        onClick={onCloseNav}
                      >
                        <div className="relative w-20 h-28 shrink-0">
                          <Image
                            src={anime.images.webp.large_image_url}
                            alt={anime.title}
                            fill
                            unoptimized
                            className="object-cover object-center rounded-lg"
                            sizes="100px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-base line-clamp-2 mb-1">
                            {anime.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-2">
                            {anime.year} • {anime.type}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-brand text-sm font-semibold">
                              ⭐ {anime.score || "N/A"}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {anime.status}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
