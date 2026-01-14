"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Genre {
  mal_id: number;
  name: string;
  count: number;
}

interface GenreListProps {
  genres: Genre[];
  selectedGenreId?: string | null;
  onGenreSelect?: (id: string | null) => void;
}

export default function GenreList({
  genres,
  selectedGenreId,
  onGenreSelect,
}: GenreListProps) {
  const searchParams = useSearchParams();
  const urlGenreId = searchParams.get("genre");

  // Use prop if provided (controlled mode), otherwise fall back to URL (uncontrolled)
  const currentGenre =
    selectedGenreId !== undefined ? selectedGenreId : urlGenreId;

  // Sort genres alphabetically
  const sortedGenres = [...genres].sort((a, b) => a.name.localeCompare(b.name));

  const ButtonOrLink = ({
    href,
    isActive,
    onClick,
    children,
    className,
  }: {
    href: string;
    isActive: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
  }) => {
    const baseClasses = cn(
      "px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-white/5 flex items-center gap-2 group cursor-pointer",
      isActive
        ? "bg-brand text-white shadow-lg shadow-brand/20 font-semibold"
        : "bg-secondary-background text-gray-400 hover:bg-white/10 hover:text-white",
      className
    );

    if (onGenreSelect && onClick) {
      return (
        <button onClick={onClick} className={baseClasses}>
          {children}
        </button>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold mb-4 font-poppins flex items-center gap-2">
        <span className="w-1 h-6 bg-brand rounded-full block"></span>
        Genres
      </h3>

      <div className="flex flex-wrap gap-2">
        <ButtonOrLink
          href="/top-anime"
          isActive={!currentGenre}
          onClick={() => onGenreSelect && onGenreSelect(null)}
          className="justify-center"
        >
          All Genres
        </ButtonOrLink>

        {sortedGenres.map((genre) => (
          <ButtonOrLink
            key={genre.mal_id}
            href={`/top-anime?genre=${genre.mal_id}`}
            isActive={currentGenre === genre.mal_id.toString()}
            onClick={() =>
              onGenreSelect && onGenreSelect(genre.mal_id.toString())
            }
          >
            <span>{genre.name}</span>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full bg-black/20",
                currentGenre === genre.mal_id.toString()
                  ? "text-white/80"
                  : "text-gray-600 group-hover:text-gray-400"
              )}
            >
              {genre.count}
            </span>
          </ButtonOrLink>
        ))}
      </div>
    </div>
  );
}
