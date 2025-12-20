import { Day } from "@/hooks/getAnimeAiring";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // 1. Importujemy motion

interface AnimeCalenderButtonsProps {
  day: Day;
  onDayChange: (dayChanger: Day) => void;
  daysOption: DaysOptions[];
}

interface DaysOptions {
  value: Day;
  label: string;
}

export default function AnimeCalenderButtons({
  day,
  onDayChange,
  daysOption,
}: AnimeCalenderButtonsProps) {
  return (
    <div className="flex justify-center items-center w-full py-2 gap-2 md:gap-3 lg:gap-4">
      {daysOption.map((dayValue) => {
        const isActive = dayValue.value === day;

        return (
          <button
            key={dayValue.value}
            onClick={() => onDayChange(dayValue.value)}
            className={cn(
              // 2. Ważne: 'relative' żeby tło wiedziało względem czego się pozycjonować
              "relative px-2 py-1.5 rounded-xl transition-colors duration-300 cursor-pointer text-sm font-medium outline-none",
              // Jeśli aktywny to biały tekst, jeśli nie to szary/domyślny
              isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
            )}
          >
            {/* 3. Tekst musi być na wierzchu (z-index), bo inaczej tło go przykryje */}
            <span className="relative z-10">{dayValue.label}</span>

            {/* 4. MAGICZNE TŁO */}
            {isActive && (
              <motion.div
                layoutId="active-pill-background"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 bg-brand rounded-xl z-0"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
