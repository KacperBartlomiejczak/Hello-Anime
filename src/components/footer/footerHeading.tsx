"use client";

import { ChevronsUp } from "lucide-react";

export default function FooterHeading() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 md:items-start md:w-1/2">
      <h2 className="font-poppins font-bold  text-2xl text-center md:text-left">
        <span className="text-brand">Hello</span> anime!
      </h2>
      <p className="text-center md:text-left">
        Hello Anime! is your ultimate destination for premium anime streaming.
        Explore an ever-expanding library featuring thousands of titles—from
        timeless classics to the latest seasonal hits. Enjoy seamless, ad-free
        viewing in stunning HD quality, available anytime on your desktop or
        mobile devices.
      </p>
      <button
        onClick={scrollToTop}
        className="p-2 bg-brand rounded-xl cursor-pointer hover:bg-brand/80 transition-colors"
      >
        <ChevronsUp />
      </button>
    </div>
  );
}
