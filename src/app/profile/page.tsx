import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";
import Title from "@/components/ui/title";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-20 mt-16 min-h-[60vh] flex flex-col items-center">
      <div className="bg-secondary-background/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-md w-full flex flex-col items-center gap-6">
        <Title>Your Profile</Title>

        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand/20 shadow-xl">
          <Image
            src={session.user.image || "/placeholder-avatar.jpg"}
            alt={session.user.name || "User Avatar"}
            fill
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
    </div>
  );
}
