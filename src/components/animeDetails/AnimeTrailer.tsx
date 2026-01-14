"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Image from "next/image";
import { Anime } from "@/types/anime";

interface AnimeTrailerProps {
  trailer: Anime["trailer"];
  coverImage: string;
}

export default function AnimeTrailer({
  trailer,
  coverImage,
}: AnimeTrailerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Use embed_url if available, otherwise construct from youtube_id if available context
  const videoUrl =
    trailer?.embed_url ||
    (trailer?.youtube_id
      ? `https://www.youtube.com/embed/${trailer.youtube_id}?autoplay=1`
      : null);

  if (!videoUrl) return null;

  const thumbnail =
    trailer?.images?.maximum_image_url ||
    trailer?.images?.large_image_url ||
    trailer?.images?.medium_image_url ||
    coverImage;

  return (
    <>
      <div className="container mx-auto px-4 mt-8">
        <div
          className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg shadow-brand/20 border border-white/10"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Play trailer"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(true);
            }
          }}
        >
          <Image
            src={thumbnail}
            alt="Trailer Thumbnail"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-brand/90 rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-semibold text-sm">
            Watch Trailer
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              aria-label="Close trailer"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoUrl}
                title="Anime Trailer"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
