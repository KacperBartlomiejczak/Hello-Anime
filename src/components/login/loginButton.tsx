import { cn } from "@/lib/utils";

interface LoginButtonProps {
  children: React.ReactNode;
  onLogin: () => void;
  classNames?: string;
}

export default function LoginButton({
  children,
  onLogin,
  classNames,
}: LoginButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-white rounded-full flex flex-row text-sm gap-2 items-center justify-center text-black cursor-pointer",
        classNames
      )}
      onClick={onLogin}
    >
      {children}
    </button>
  );
}
