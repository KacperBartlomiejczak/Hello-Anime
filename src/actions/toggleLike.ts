"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db";
import { favoriteAnimes } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

export const toggleLike = async (animeId: number) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { error: "unauthorized" };
  }

  const like = await db.query.favoriteAnimes.findFirst({
    where: and(
      eq(favoriteAnimes.userId, session.user.id),
      eq(favoriteAnimes.animeId, animeId),
    ),
  });

  if (like) {
    await db
      .delete(favoriteAnimes)
      .where(
        and(
          eq(favoriteAnimes.userId, session.user.id),
          eq(favoriteAnimes.animeId, animeId),
        ),
      );
    return { liked: false };
  } else {
    await db.insert(favoriteAnimes).values({
      userId: session?.user?.id,
      animeId: animeId,
    });
    return { liked: true };
  }
};
