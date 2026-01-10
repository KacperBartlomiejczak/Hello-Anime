import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubmitButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 bg-brand hover:bg-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand/25 group"
    >
      <span>Send Message</span>
      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}
