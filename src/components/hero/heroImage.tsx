import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import HeroContent from "./heroContent";

import { Anime } from "@/types/anime";

interface HeroImageProps {
  anime: Anime;
}

export default function HeroImage({ anime }: HeroImageProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={anime.mal_id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className="object-cover object-center "
          fill
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-background/90 lg:bg-linear-to-r lg:from-[#0f172a] lg:via-[#0f172a]/60 lg:to-transparent z-0"></div>
        <HeroContent anime={anime} />
      </motion.div>
    </AnimatePresence>
  );
}
