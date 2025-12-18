import CardPlaceholder from "@/components/cardSlider/cardPlaceholder";
import Title from "../ui/title";
import Section from "../ui/section";

export default function CardSliderSkeleton() {
  return (
    <Section>
      <Title>Top Anime</Title>
      <div className="w-full flex items-center justify-center p-2 gap-5">
        <div className="w-full flex items-center justify-center gap-5 md:gap-[50px] overflow-x-hidden">
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </div>
      </div>
    </Section>
  );
}
