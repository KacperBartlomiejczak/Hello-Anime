import Link from "next/link";
import { ChevronsUp } from "lucide-react";

export default function FooterHeading() {
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
      <Link href="/" className="p-2  bg-brand rounded-xl" scroll={true}>
        <ChevronsUp />
      </Link>
    </div>
  );
}
