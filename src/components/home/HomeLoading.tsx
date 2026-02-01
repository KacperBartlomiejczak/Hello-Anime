"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Fast initially, then slows down
        const increment = prev < 50 ? 5 : prev < 80 ? 2 : 0.5;
        return Math.min(prev + increment, 99);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-background gap-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-brand shadow-lg shadow-brand/20"
      >
        <Image
          src="/placeholder-avatar.jpg"
          alt="Loading Avatar"
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.h2
          className="text-2xl font-bold text-white font-poppins tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Loading your anime...
        </motion.h2>

        <div className="h-2 w-64 overflow-hidden rounded-full bg-secondary-background">
          <motion.div
            className="h-full bg-brand"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
