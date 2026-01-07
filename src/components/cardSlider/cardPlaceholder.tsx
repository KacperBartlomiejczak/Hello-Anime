import { motion } from "framer-motion";

export default function CardPlaceholder() {
  return (
    <div className="relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg border border-white/5">
      {/* Image Placeholder */}
      <div className="relative w-full h-[400px] shrink-0 bg-secondary/30 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
        {/* Score Badge Placeholder */}
        <div className="absolute top-2 right-2 bg-secondary/50 rounded-md w-12 h-6" />
      </div>

      {/* Content Placeholder */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 bg-secondary/30 rounded-md overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
                delay: 0.1,
              }}
            />
          </div>
          <div className="h-6 bg-secondary/30 rounded-md w-3/4 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
                delay: 0.2,
              }}
            />
          </div>
        </div>

        {/* Genres */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2 mb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 bg-secondary/30 rounded-md w-16 overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  delay: 0.3 + i * 0.1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
