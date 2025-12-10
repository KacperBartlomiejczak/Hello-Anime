import { cn } from "@/lib/utils";
import Link from "next/link";

interface navLinkProps {
  isButton?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  isButton,
  href,
  children,
  className,
  onClick,
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
          aria-label="Opening search bar to search your favourite anime"
        >
          {children}
        </button>
      ) : (
        <Link
          href={href ? href : "/"}
          className={cn(
            "text-white hover:text-brand focus:text-brand transition-colors duration-300 cursor-pointer",
            className
          )}
          aria-label="if you re logged its link to your profile when you re not its loggin"
        >
          {children}
        </Link>
      )}
    </>
  );
}
