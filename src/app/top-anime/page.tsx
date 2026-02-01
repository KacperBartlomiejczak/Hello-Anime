import AnimeListContainer from "@/components/animeList/AnimeListContainer";
import { getGenres } from "@/hooks/getGenres";
import { getTopAnime } from "@/hooks/getTopAnime";

interface PageProps {
  searchParams: Promise<{ page?: string; genre?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const genreId = params.genre;

  const [animeData, genres] = await Promise.all([
    getTopAnime("bypopularity", currentPage, 24, genreId),
    getGenres(),
  ]);

  const { data, pagination } = animeData;

  // Debug logging
  console.log("Top Anime Page - Data length:", data?.length || 0);
  console.log("Top Anime Page - Has pagination:", !!pagination);

  return (
    <main className="w-full mt-30 min-h-screen">
      <AnimeListContainer
        initialAnimeList={data || []}
        genres={genres || []}
        pagination={pagination || { last_visible_page: 1 }}
        currentPage={currentPage}
        currentGenreId={genreId}
      />
    </main>
  );
}
