"use client";

import { fetchNewsAction } from "@/app/actions";
import { cn } from "@/lib/utils";
import { News } from "@/types/news";
import { useState, useEffect } from "react";

import MainNews from "./mainNews";
import NewsListing from "./newsListing";

export default function NewsList() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsAction().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <div className="p-10 text-center text-gray-400">Loading news</div>;

  if (news.length === 0) return <div>There is no news</div>;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 lg:flex-row items-start justify-center lg:mt-4"
      )}
    >
      <MainNews news={news[0]} />

      <NewsListing news={news} />
    </div>
  );
}
