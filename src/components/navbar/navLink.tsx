import { cn } from "@/lib/utils";
import Link from "next/link";

interface navLinkProps {
  isButton?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function NavLink({
  isButton,
  href,
  children,
  className,
  onClick,
  ariaLabel,
}: navLinkProps) {
  return (
    <>
      {isButton ? (
        <button
          className={cn(
            "text-white hover:text-brand focus:text-brand transition-colors duration-300 cursor-pointer",
            className
          )}
          onClick={onClick}
          aria-label={ariaLabel || "Navigation button"}
        >
          {children}
        </button>
      ) : (
        <Link
          href={href || "/"}
          className={cn(
            "text-white hover:text-brand focus:text-brand transition-colors duration-300 cursor-pointer",
            className
          )}
          aria-label={ariaLabel || "Navigation link"}
        >
          {children}
        </Link>
      )}
    </>
  );
}
