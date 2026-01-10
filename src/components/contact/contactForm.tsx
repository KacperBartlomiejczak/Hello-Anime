"use client";

import { motion } from "framer-motion";
import { User, Mail, PenTool, MessageSquare } from "lucide-react";
import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

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
          <ContactInput
            id="name"
            type="text"
            placeholder="Naruto Uzumaki"
            label="Name"
            icon={User}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
          />

          <ContactInput
            id="email"
            type="email"
            placeholder="naruto@konoha.com"
            label="Email"
            icon={Mail}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        <ContactInput
          id="subject"
          type="text"
          placeholder="Feedback about the anime list..."
          label="Subject"
          icon={PenTool}
          onFocus={() => setFocusedInput("subject")}
          onBlur={() => setFocusedInput(null)}
        />

        <ContactTextArea
          id="message"
          rows={5}
          placeholder="Tell us what's on your mind..."
          label="Message"
          icon={MessageSquare}
          onFocus={() => setFocusedInput("message")}
          onBlur={() => setFocusedInput(null)}
        />

        <SubmitButton />
      </div>
    </motion.form>
  );
}
