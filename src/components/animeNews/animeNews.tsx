"use client";

import { useInView } from "react-intersection-observer";
import Title from "../ui/title";
import Section from "../ui/section";
import NewsList from "./newsList";

export default function AnimeNews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Section ref={ref} className="bg-secondary-background">
      <Title>Anime News</Title>

      {inView ? (
        <NewsList />
      ) : (
        <div className="h-40 flex items-center justify-center text-gray-600">
          Waiting for display
        </div>
      )}
    </Section>
  );
}
