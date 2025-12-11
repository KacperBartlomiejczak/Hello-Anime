import { ChevronRight, ChevronLeft } from "lucide-react";

interface HeroChevronsProps {
  onLeftSlide: () => void;
  onRightSlide: () => void;
}
export default function HeroChevrons({
  onLeftSlide,
  onRightSlide,
}: HeroChevronsProps) {
  return (
    <>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block z-20">
        <ChevronLeft size={48} onClick={onLeftSlide} />
      </button>

      <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block z-20">
        <ChevronRight size={48} onClick={onRightSlide} />
      </button>
    </>
  );
}
