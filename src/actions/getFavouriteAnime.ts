

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { favoriteAnimes } from "@/db/schema";

export const getFavouriteAime = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return [];
  }

  try {
    const result = await db.query.favoriteAnimes.findMany({
      where: eq(favoriteAnimes.userId, session.user.id),
    });
    return result;
  } catch (err) {
    console.error(`there was error connecting to database, ${err}`);
    return [];
  }
};
