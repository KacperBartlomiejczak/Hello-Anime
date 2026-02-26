"use client";

import { Day, daysOptions } from "@/hooks/getAnimeAiring";
import { useRef, useEffect, useState } from "react";
import { Anime } from "@/types/anime";
import AnimeCalenderButtons from "./animeCalenderButtons";
import CardSlider from "../cardSlider/cardSlider";
import { getAnimeAiringAction } from "@/actions/getAnimeAiringAction";

export default function AnimeCalender({ data }: { data: Anime[] }) {
  const [day, setDay] = useState<Day>("monday");
  const [animeAiring, setAnimeAiring] = useState<Anime[]>(data);
  const [loading, setLoading] = useState(false);
  const isInitialMount = useRef(true);

  const changeDayHandler = (dayChanger: Day) => {
    if (day === dayChanger) return;
    setDay(dayChanger);
  };

  const handleFetchAiringAnime = async () => {
    setLoading(true);
    // setAnimeAiring([]); // Optional: keep previous data while loading to prevent flash
    try {
      const data = await getAnimeAiringAction(day);
      setAnimeAiring(data);
    } catch {
      console.error("Error while fetching aired anime");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInitialMount.current === true) {
      isInitialMount.current = false;
      return;
    }
    handleFetchAiringAnime();
  }, [day]); //eslint-disable-line

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
