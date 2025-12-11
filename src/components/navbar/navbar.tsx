"use client";

import { User, Search } from "lucide-react";
import NavLink from "./navLink";
import NavHamburger from "./navHamburger";
import Link from "next/link";
import { useState } from "react";

import NavLinks from "./NavLinks";

import NavSearchAnime from "./navSearchAnime";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  console.log(isFocused);
  return (
    <header className="w-screen min-h-[5vh] bg-background flex items-center justify-center p-2 text-white relative">
      <nav className="container bg-secondary-background max-w-[90%] p-4 rounded-full flex items-center justify-between sticky  z-50">
        <Link
          href="/"
          className="font-poppins font-bold p-2 text-base cursor-pointer z-50 md:text-lg hover:text-brand transition-colors"
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
      </nav>
      <NavSearchAnime isSearch={isSearch} onClick={() => setIsSearch(false)} />
    </header>
  );
}
