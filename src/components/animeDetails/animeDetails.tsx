import Image from "next/image";
import { Anime } from "@/types/anime";
import AnimeDescription from "./animeDescription";


interface AnimeDetailsCardProps {
  anime: Anime;
}

export default function AnimeDetailsCard({ anime }: AnimeDetailsCardProps) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 lg:gap-12 items-start">
        
        <div className="w-full md:sticky md:top-24 flex flex-col gap-4">
          <div className="relative aspect-2/3 w-full rounded-2xl overflow-hidden shadow-2xl shadow-brand/20">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
            
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
              {anime.status}
            </div>
          </div>

          
          <a
            href={anime.url}
            target="_blank"
            className="w-full py-3 bg-brand text-white text-center font-bold rounded-xl hover:bg-brand/80 transition-all shadow-lg shadow-brand/20"
          >
            See On MAL
          </a>
        </div>

       
        <div className="flex flex-col gap-6">
          
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-2">
              <span>{anime.year || "Unknown Year"}</span>
              <span>•</span>
              <span>{anime.type}</span>
              <span>•</span>
              <span className="uppercase">{anime.season || "Unknown"}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins leading-tight mb-2">
              {anime.title}
            </h1>
            {anime.title_english && (
              <h2 className="text-xl text-gray-500 font-medium">
                {anime.title_english}
              </h2>
            )}
          </div>

          
          <div className="grid grid-cols-3 gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <StatBox label="Score" value={anime.score ?? "N/A"} icon="⭐" />
            <StatBox label="Rank" value={`#${anime.rank ?? "-"}`} icon="🏆" />
            <StatBox
              label="Popularity"
              value={`#${anime.popularity ?? "-"}`}
              icon="❤️"
            />
          </div>

          
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((genre) => (
              <span
                key={genre.mal_id}
                className="px-3 py-1 bg-white/10 hover:bg-brand hover:text-white transition-colors rounded-full text-xs font-semibold cursor-pointer"
              >
                {genre.name}
              </span>
            ))}
          </div>

          
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold mb-3 border-l-4 border-brand pl-3">
              Synopsis
            </h3>
            <AnimeDescription
              desc={anime.synopsis || "No description available."}
            />
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            <InfoItem label="Episodes" value={anime.episodes ?? "?"} />
            <InfoItem label="Duration" value={anime.duration} />
            <InfoItem label="Source" value={anime.source} />
            <InfoItem label="Rating" value={anime.rating} />
            {anime.studios && anime.studios.length > 0 && (
              <InfoItem label="Studio" value={anime.studios[0].name} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



function StatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="text-2xl font-bold text-white flex gap-2 items-center">
        {value}{" "}
        <span className="text-sm opacity-50 hidden md:inline">{icon}</span>
      </span>
      <span className="text-xs text-gray-400 uppercase tracking-wide mt-1">
        {label}
      </span>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 mb-1">{label}</span>
      <span className="font-semibold text-sm md:text-base text-gray-200">
        {value}
      </span>
    </div>
  );
}
