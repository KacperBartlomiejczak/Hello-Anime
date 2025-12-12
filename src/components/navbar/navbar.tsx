"use client";

import { User, Search } from "lucide-react";
import NavLink from "./navLink";
import NavHamburger from "./navHamburger";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

import NavSearchAnime from "./navSearchAnime";
import { cn } from "@/lib/utils";
import { useBlockScroll } from "@/hooks/useBlockScroll";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  
  const [isSearch, setIsSearch] = useState(false);

  useBlockScroll(isActive)
  return (
    <>
      <nav
        className={cn(
          "fixed bg-secondary-background w-[90%] min-h-[5vh] flex items-center justify-between top-10 py-4 px-2 rounded-full  z-50 max-w-7xl mx-auto"
        )}
      >
        <div className="w-full flex flex-row items-center justify-between px-2">
          <Link
            href="/"
            className="font-poppins font-bold p-2 text-base cursor-pointer z-50 md:text-lg hover:text-brand transition-colors xl:text-xl"
          >
            <span className="text-brand">Hello</span> Anime!
          </Link>
          <NavLinks isActive={isActive} onClick={() => setIsActive(false)} />
          <div className="flex flex-row gap-3 items-center z-50">
            <NavLink isButton onClick={() => setIsSearch(true)}>
              <Search size={28} />
            </NavLink>
            <NavLink href="/login">
              <User size={28} />
            </NavLink>
            <NavHamburger
              isActive={isActive}
              onClick={() => {
                setIsActive((prevState) => !prevState);
              }}
            />
          </div>
        </div>
      </nav>
      <NavSearchAnime isSearch={isSearch} onClick={() => setIsSearch(false)} />
    </>
  );
}
