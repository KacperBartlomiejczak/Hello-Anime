"use client";

import { useState, useEffect } from "react";

export default function AnimeFetcher() {
  const [animes, setAnimes] = useState<{ name: string }[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/anime");
        if (!response.ok) throw new Error("Error with connecting with api");

        const data = await response.json();
        setAnimes(data);
      } catch (err) {
        console.error("There was a problem connecting with database ", err);
        setAnimes([]);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData();
  }, []);

  return (
    <>
      {animes === null && isLoading && <div>Loading</div>}
      <div>
        {animes?.map((anime) => (
          <p key={anime.name}>{anime.name}</p>
        ))}
      </div>
    </>
  );
}
