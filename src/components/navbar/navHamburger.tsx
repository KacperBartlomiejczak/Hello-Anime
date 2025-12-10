import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import classes from "./hamburger.module.css";

interface NavHamburgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export default function NavHamburger({
  isActive,
  className,
  ...props
}: NavHamburgerProps) {
  return (
    <button className={cn(classes.hamburger, className)} {...props} aria-label="Toggle navigation menu">
      <span className={classes.hamburgerLine}></span>
      <span className={classes.hamburgerLine}></span>
      <span className={classes.hamburgerLine}></span>
    </button>
  );
}
