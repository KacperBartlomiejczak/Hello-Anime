import Image from "next/image";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";

interface Recommendation {
  entry: {
    mal_id: number;
    url: string;
    images: {
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
  url: string;
  votes: number;
}

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
  title?: string;
}

export default function RecommendationsSection({
  recommendations,
  title = "Recommendations",
}: RecommendationsSectionProps) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold mb-6 font-poppins flex items-center gap-2">
        <span className="w-1 h-6 bg-brand rounded-full block"></span>
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recommendations.map((rec) => (
          <Link
            key={rec.entry.mal_id}
            href={`/anime/${rec.entry.mal_id}`}
            className="group relative bg-secondary-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/5 hover:border-brand/30 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-3/4 overflow-hidden">
              <Image
                src={rec.entry.images.webp.large_image_url}
                alt={rec.entry.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />

              {/* Votes Badge */}
              {rec.votes > 0 && (
                <div className="absolute top-2 left-2 bg-brand/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                  <ThumbsUp size={12} className="fill-white" />
                  {rec.votes}
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-3 flex flex-col gap-2 flex-1 bg-secondary-background/50">
              <h4 className="font-poppins font-semibold text-sm leading-tight line-clamp-2 group-hover:text-brand transition-colors">
                {rec.entry.title}
              </h4>

              <div className="text-xs text-gray-400 mt-auto">
                Recommended by {rec.votes} user{rec.votes !== 1 ? "s" : ""}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
