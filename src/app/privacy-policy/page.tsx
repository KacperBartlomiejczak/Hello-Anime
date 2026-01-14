"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Cookie, Mail } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "1. Introduction",
    content:
      "Welcome to HelloAnime. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
  },
  {
    icon: Eye,
    title: "2. Information We Collect",
    content:
      "We currently do not collect any personal data such as names, email addresses, or phone numbers. Our application is a read-only interface for exploring anime data provided by the Jikan API. We may collect anonymous usage data to improve user experience, such as browser type and screen resolution.",
  },
  {
    icon: Server,
    title: "3. Third-Party Services",
    content:
      "HelloAnime utilizes the Jikan API (Unofficial MyAnimeList API) to fetch and display anime content. Please note that data transmission occurs between your client and their servers. We encourage you to review the privacy policies of any third-party services you interact with.",
  },
  {
    icon: Cookie,
    title: "4. Cookies and Tracking",
    content:
      "We use local storage to improved your experience, such as remembering your viewing preferences. We do not use persistent tracking cookies for advertising purposes. Your browsing habits on our site remain private.",
  },
  {
    icon: Lock,
    title: "5. Data Security",
    content:
      "We have put in place appropriate security measures to prevent your data from being accidentally lost, used, or accessed in an unauthorized way. Since we do not store personal user data on our servers, the risk to your personal information is minimal.",
  },
  {
    icon: Mail,
    title: "6. Contact Us",
    content:
      "If you have any questions about this privacy policy or our privacy practices, please contact us via our GitHub repository or the contact channels provided in the application footer.",
  },
];

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // Fix: Assert as const to avoid string inference
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full pt-32 pb-24 md:pt-40 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-brand drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Transparency is key. Here is how we handle your data and protect your
          privacy while you explore the world of anime.
        </p>
        <div className="h-1 w-24 bg-linear-to-r from-transparent via-brand to-transparent mx-auto mt-6 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-secondary-background/50 border border-white/5 hover:border-brand/30 transition-colors duration-300 p-8"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-brand/10 blur-3xl group-hover:bg-brand/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-background border border-white/10 text-brand">
                  <section.icon size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold font-poppins text-white  group-hover:text-brand transition-colors duration-300">
                  {section.title}
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center text-gray-500 text-sm"
      >
        <p>Last Updated: January 14, 2026</p>
      </motion.div>
    </div>
  );
}
