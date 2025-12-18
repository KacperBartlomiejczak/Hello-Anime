"use client";

import Title from "../ui/title";
import Section from "../ui/section";
import NewsList from "./newsList";

export default function AnimeNews({news}: any) {
  return (
    <Section className="bg-secondary-background">
      <Title>Anime News</Title>

      <NewsList news={news}/>
    </Section>
  );
}
