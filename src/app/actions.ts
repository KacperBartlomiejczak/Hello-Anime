"use server";

import { getMixedAnimeNews } from "@/hooks/getAnimeNews";

export async function fetchNewsAction() {
  const data = await getMixedAnimeNews();
  return data;
}
