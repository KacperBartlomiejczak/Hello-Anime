import Pagination from "@/components/ui/pagination";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";
import GenreList from "@/components/genres/genreList";
import AnimatedGrid from "@/components/animeList/AnimatedGrid";
import { getTopAnime } from "@/hooks/getTopAnime";
import { getGenres } from "@/hooks/getGenres";

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

  const selectedGenreName = genreId
    ? genres.find((g: any) => g.mal_id.toString() === genreId)?.name
    : null;

  return (
    <main className="w-full mt-30 min-h-screen">
      <div className="container mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-8">
        
        {/* Main Content */}
        <div className="flex-1 order-2 lg:order-1">
          <Title className="mb-8 ml-2">
            {selectedGenreName ? `Top ${selectedGenreName} Anime` : "Top Anime"}
          </Title>

          {data.length > 0 ? (
            <AnimatedGrid 
              key={`${genreId}-${currentPage}`} 
              animeList={data} 
            />
          ) : (
             <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <p className="text-xl">No anime found for this category.</p>
             </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={pagination?.last_visible_page || 1}
          />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 order-1 lg:order-2 h-fit lg:sticky lg:top-32">
          <GenreList genres={genres} />
        </aside>

      </div>
    </main>
  );
}