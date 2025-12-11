import classes from "./navLinks.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { dataLinks } from "./Links";
interface NavLinksProps {
  isActive: boolean;
  onClick: () => void;
}

export default function NavLinks({ isActive, onClick }: NavLinksProps) {
  return (
    <ul
      className={cn(
        "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-secondary-background transition-transform gap-4 z-40",
        isActive ? "translate-x-0" : "translate-x-full cursor-pointer",
        "lg:relative lg:inset-0 lg:h-auto lg:w-auto lg:flex-row  lg:translate-x-0 lg:gap-6"
      )}
    >
      {dataLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.href} className={cn(classes.link, "text-base md:text-lg")} onClick={onClick}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
