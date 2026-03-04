import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import Title from "@/components/ui/title";
import { getFavouriteAime } from "@/actions/getFavouriteAnime";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const result = await getFavouriteAime();

  return (
    <div className="w-screen">
      <div className="container mx-auto px-4 py-20 mt-16 min-h-[60vh] flex flex-col items-center justify-center gap-5">
        <div className="bg-secondary-background/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-md w-full flex flex-col items-center gap-6">
          <Title>Your Profile</Title>

          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand/20 shadow-xl">
            <Image
              src={session.user.image || "/placeholder-avatar.jpg"}
              alt={session.user.name || "User Avatar"}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              {session.user.name || "Unknown user"}
            </h2>
            <p className="text-gray-400">{session.user.email}</p>
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-4">
          <Title>Favourite Anime</Title>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {result.map((anime) => (
              <Link
                key={anime.animeId}
                href={`/anime/${anime.animeId}`}
                className="flex flex-col h-70 w-55 items-center group"
              >
                <div className="relative w-40 aspect-2/3">
                  <Image
                    src={anime.animeImage || "https://placehold.co/600x400"}
                    alt={`This is poster for anime ${anime.animeName}}`}
                    className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                    fill
                  />
                </div>
                <h3 className="text-center group-hover:text-brand mt-2 transition-all">
                  {anime.animeName}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
