import classes from "./navLinks.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface NavLinksProps {
  isActive: boolean;
  onClick: () => void;
  href: string[];
}

export default function NavLinks({ isActive, onClick, href }: NavLinksProps) {
  return (
    <ul
      className={cn(
        "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-secondary-background transition-transform gap-4 z-40",
        isActive ? "translate-x-0" : "translate-x-full cursor-pointer"
      )}
    >
      <li>
        <Link href={href[0]} className={cn(classes.link)} onClick={onClick}>
          Top Animes
        </Link>
      </li>
      <li>
        <Link href={href[0]} className={cn(classes.link)} onClick={onClick}>
          Categories
        </Link>
      </li>
      <li>
        <Link href={href[0]} className={cn(classes.link)} onClick={onClick}>
          News
        </Link>
      </li>
      <li>
        <Link href={href[0]} className={cn(classes.link)} onClick={onClick}>
          Contact us
        </Link>
      </li>
    </ul>
  );
}
