"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AnimatedGrid from "./AnimatedGrid";
import AnimeCardPlaceholder from "./AnimeCardPlaceholder";
import GenreList from "@/components/genres/genreList";
import Pagination from "@/components/ui/pagination";
import Title from "@/components/ui/title";
import { Anime } from "@/types/anime";

interface GenreWithCount {
  mal_id: number;
  name: string;
  count: number;
}

interface AnimeListContainerProps {
  initialAnimeList: Anime[];
  genres: GenreWithCount[];
  pagination: {
    last_visible_page: number;
  };
  currentPage: number;
  currentGenreId?: string;
}

export default function AnimeListContainer({
  initialAnimeList,
  genres,
  pagination,
  currentPage,
  currentGenreId,
}: AnimeListContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state
  const [animeData, setAnimeData] = useState<Anime[]>(initialAnimeList);
  const [loading, setLoading] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(
    currentGenreId || null
  );

  // Ref for debounce timer
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync with Server props when they change (navigation finished)
  useEffect(() => {
    setAnimeData(initialAnimeList);
    setLoading(false);
    // Sync external changes (e.g. back button) to internal state
    const genreParam = searchParams.get("genre");
    setSelectedGenreId(genreParam);
  }, [initialAnimeList, searchParams]);

  const handleGenreSelect = (id: string | null) => {
    // 1. Optimistic update
    setSelectedGenreId(id);
    setLoading(true);

    // 2. Clear existing timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 3. Set new timer (Debounce)
    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (id) {
        params.set("genre", id);
      } else {
        params.delete("genre");
      }
      // Reset to page 1 when genre changes to avoid empty pages
      params.set("page", "1");

      router.push(`/top-anime?${params.toString()}`);
    }, 500);
  };

  // Find selected genre name for Title
  const selectedGenreName = selectedGenreId
    ? genres.find((g) => g.mal_id.toString() === selectedGenreId)?.name
    : null;

  return (
    <div className="container mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 order-2 lg:order-1">
        <Title className="mb-8 ml-2">
          {selectedGenreName ? `Top ${selectedGenreName} Anime` : "Top Anime"}
        </Title>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 justify-items-center mt-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <AnimeCardPlaceholder key={i} />
            ))}
          </div>
        ) : animeData.length > 0 ? (
          <AnimatedGrid key={selectedGenreId || "all"} animeList={animeData} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-xl">No anime found for this category.</p>
          </div>
        )}

        {!loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagination?.last_visible_page || 1}
          />
        )}
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-72 shrink-0 order-1 lg:order-2 h-fit lg:sticky lg:top-32">
        <GenreList
          genres={genres}
          selectedGenreId={selectedGenreId}
          onGenreSelect={handleGenreSelect}
        />
      </aside>
    </div>
  );
}
