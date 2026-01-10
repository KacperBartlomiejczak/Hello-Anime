"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, PenTool } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputClasses =
    "w-full bg-secondary-background/50 border border-white/10 rounded-lg py-3 px-4 outline-none text-text placeholder:text-gray-500 transition-all duration-300 focus:border-brand focus:shadow-[0_0_15px_rgba(255,46,99,0.3)]";

  const labelClasses =
    "flex items-center gap-2 text-sm font-medium text-gray-300 mb-2";
  const iconClasses = "w-4 h-4 text-brand";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-lg bg-secondary-background/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label htmlFor="name" className={labelClasses}>
              <User className={iconClasses} /> Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Naruto Uzumaki"
              className={inputClasses}
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className={labelClasses}>
              <Mail className={iconClasses} /> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="naruto@konoha.com"
              className={inputClasses}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="subject" className={labelClasses}>
            <PenTool className={iconClasses} /> Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Feedback about the anime list..."
            className={inputClasses}
            onFocus={() => setFocusedInput("subject")}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className={labelClasses}>
            <MessageSquare className={iconClasses} /> Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us what's on your mind..."
            className={cn(inputClasses, "resize-none")}
            onFocus={() => setFocusedInput("message")}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-brand hover:bg-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand/25 group"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </motion.form>
  );
}
