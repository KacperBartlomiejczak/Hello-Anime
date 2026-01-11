"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4 max-w-md"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-brand font-poppins tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Ara ara... Page Not Found
        </h2>
        <p className="text-gray-400 text-lg">
          It seems you&apos;ve wandered into the void. This timeline
          doesn&apos;t exist!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-2 px-8 py-3 rounded-full",
            "bg-brand text-white font-medium transition-all duration-300",
            "hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(255,46,99,0.5)]",
            "active:scale-95"
          )}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
