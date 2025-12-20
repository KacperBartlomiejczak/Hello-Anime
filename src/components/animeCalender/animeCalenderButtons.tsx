import { Day } from "@/hooks/getAnimeAiring";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <div className="flex justify-center items-center w-full py-2 gap-2 md:gap-3 lg:gap-6">
      {daysOption.map((dayValue) => {
        const isActive = dayValue.value === day;

        return (
          <button
            key={dayValue.value}
            onClick={() => onDayChange(dayValue.value)}
            className={cn(
              "relative px-2 py-1.5 my-2 rounded-xl transition-colors duration-300 cursor-pointer text-sm md:text-base font-medium outline-none",

              isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
            )}
          >
            <span className="relative z-10">{dayValue.label}</span>

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
