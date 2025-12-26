"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { User, LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import NavLink from "./navLink";
import Link from "next/link";

export default function UserMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!session) {
    return (
      <NavLink isButton onClick={() => signIn()}>
        <User size={28} />
      </NavLink>
    );
  }
  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-brand transition-all mt-1 focus:outline-none focus:border-brand"
      >
        <Image
          src={session.user?.image || "/placeholder-avatar.jpg"}
          alt={session.user?.name || "User"}
          fill
          className="object-cover"
        />
      </button>

      {/* Menu rozwijane */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Kliknięcie w tło zamyka menu */}
            <div
              className="fixed inset-0 z-40 cursor-default"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-secondary-background rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 flex flex-col"
            >
              {/* Nagłówek z danymi */}
              <div className="p-4 border-b border-white/10 bg-white/5">
                <p className="text-sm text-white font-bold truncate">
                  {session.user?.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {session.user?.email}
                </p>
              </div>

              {/* --- TU JEST LINK DO PROFILU --- */}
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-4 py-3 text-sm text-gray-200 hover:bg-brand/20 hover:text-brand flex items-center gap-3 transition-colors"
              >
                <User size={18} />
                Mój Profil
              </Link>
              {/* ------------------------------- */}

              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 flex items-center gap-3 transition-colors border-t border-white/10"
              >
                <LogOut size={18} />
                Wyloguj się
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
