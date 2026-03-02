"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { and, eq } from "drizzle-orm";
import { favoriteAnimes } from "@/db/schema";
import { db } from "@/db";
export const checkIfLiked = async (animeId: number) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return false;
  }

  const result = await db.query.favoriteAnimes.findFirst({
    where: and(
      eq(favoriteAnimes.userId, session.user.id),
      eq(favoriteAnimes.animeId, animeId),
    ),
  });

  return !!result;
};
