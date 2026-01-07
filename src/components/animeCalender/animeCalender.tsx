"use client";

import { Day, daysOptions } from "@/hooks/getAnimeAiring";
import { useEffect, useState } from "react";
import { Anime } from "@/types/anime";
import AnimeCalenderButtons from "./animeCalenderButtons";
import CardSlider from "../cardSlider/cardSlider";
import { getAnimeAiringAction } from "@/actions/getAnimeAiringAction";

export default function AnimeCalender() {
  const [day, setDay] = useState<Day>("monday");
  const [animeAiring, setAnimeAiring] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  const changeDayHandler = (dayChanger: Day) => {
    if (day === dayChanger) return;
    setDay(dayChanger);
  };

  useEffect(() => {
    const fetchAiringAnime = async () => {
      setLoading(true);
      // setAnimeAiring([]); // Optional: keep previous data while loading to prevent flash
      const data = await getAnimeAiringAction(day);
      setAnimeAiring(data);
      setLoading(false);
    };

    fetchAiringAnime();
  }, [day]);

  return (
    <CardSlider
      title="Anime Scheduled"
      animes={animeAiring}
      isLoading={loading}
      hideDropdown={true}
    >
      <div className="container mx-auto relative ">
        <AnimeCalenderButtons
          day={day}
          daysOption={daysOptions}
          onDayChange={changeDayHandler}
        />
      </div>
    </CardSlider>
  );
}
