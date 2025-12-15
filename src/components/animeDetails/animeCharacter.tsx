import { Character } from "@/types/character";
import Image from "next/image";
interface CharactersGridProps {
  characters: Character[];
}

export default function CharactersGrid({ characters }: CharactersGridProps) {
  
  if (!characters || characters.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold mb-4 font-poppins flex items-center gap-2">
        <span className="w-1 h-6 bg-brand rounded-full block"></span>
        Postacie
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {characters.map((item) => (
          <div
            key={item.character.mal_id}
            className="group relative bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors border border-white/5"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden">
              <Image
                src={item.character.images.jpg.image_url}
                alt={item.character.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 150px, 200px"
              />

              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 to-transparent p-2 pt-6">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    item.role === "Main"
                      ? "text-brand bg-brand/20 border border-brand/50"
                      : "text-gray-400"
                  }`}
                >
                  {item.role}
                </span>
              </div>
            </div>

            <div className="p-3">
              <h4
                className="font-semibold text-sm text-gray-200 line-clamp-1 group-hover:text-brand transition-colors"
                title={item.character.name}
              >
                {item.character.name}
              </h4>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
