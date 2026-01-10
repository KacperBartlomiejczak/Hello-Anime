"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-12 flex items-center justify-center">
      <main className="pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start"
        >
          <ContactInfo />

          <div className="flex-1 w-full relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-20 -right-20 w-96 h-96 border-2 border-dashed border-white/5 rounded-full z-0 pointer-events-none"
            />
            <ContactForm />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
