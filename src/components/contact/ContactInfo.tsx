"use client";

import { motion } from "framer-motion";
import Title from "@/components/ui/title";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactInfo() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const quotes = [
    {
      text: "Power comes in response to a need, not a desire. You have to create that need.",
      author: "Goku",
    },
    {
      text: "Simplicity is the easiest path to true beauty.",
      author: "Seishuu Handa",
    },
    {
      text: "If you don't take risks, you can't create a future.",
      author: "Monkey D. Luffy",
    },
    {
      text: "Human strength lies in the ability to change yourself.",
      author: "Saitama",
    },
    {
      text: "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
      author: "Roy Mustang",
    },
    {
      text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
      author: "Kenshin Himura",
    },
    {
      text: "Believe in the me that believes in you!",
      author: "Kamina",
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="flex-1 space-y-8 relative z-10 w-full">
      <motion.div variants={itemVariants} className="space-y-4">
        <Title className="text-4xl md:text-5xl lg:text-6xl text-brand mb-2">
          Let's Connect
        </Title>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
          Have a question about an anime? Found a bug in the matrix? Or just
          want to discuss the latest episode? We're always ready to chat!
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors">
            <Mail className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
          </div>
          <div>
            <h4 className="text-white font-medium">Email Us</h4>
            <p className="text-gray-400 text-sm">contact@helloanime.com</p>
          </div>
        </div>

        <Link
          href="https://discord.gg/helloanime"
          className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
        >
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors">
            <MessageCircle className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
          </div>
          <div>
            <h4 className="text-white font-medium">Discord Community</h4>
            <p className="text-gray-400 text-sm">Join our server</p>
          </div>
        </Link>

        <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors">
            <MapPin className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
          </div>
          <div>
            <h4 className="text-white font-medium">Headquarters</h4>
            <p className="text-gray-400 text-sm">Akihabara, Tokyo, Japan</p>
          </div>
        </div>
      </motion.div>

      {/* Anime-themed decorative text/quote */}
      <motion.div variants={itemVariants} className="pt-8 relative">
        <div className="absolute -left-4 top-4 text-8xl text-white/5 font-black -z-10 select-none">
          KONNICHIWA
        </div>
        <blockquote className="border-l-4 border-brand pl-4 italic text-gray-400">
          "{quote.text}"
          <span className="block text-brand text-xs not-italic font-bold mt-1 tracking-wider uppercase">
            - {quote.author}
          </span>
        </blockquote>
      </motion.div>
    </div>
  );
}
