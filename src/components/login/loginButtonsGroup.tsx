"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Google from "@/components/ui/google";
import { Github } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import LoginButton from "@/components/login/loginButton";

export default function LoginButtonsGroup() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (provider: string) => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: "/" });
  };
  return (
    <>
      <LoginButton onLogin={() => handleLogin("google")}>
        {isLoading ? (
          <Spinner className="h-5 w-5 text-black" />
        ) : (
          <>
            <Google className="h-5 w-5" />
            <p className="text-black">Login with Google</p>
          </>
        )}
      </LoginButton>
      <LoginButton
        onLogin={() => handleLogin("github")}
        classNames="bg-black text-white"
      >
        {isLoading ? (
          <Spinner className="h-5 w-5" />
        ) : (
          <>
            <Github className="text-[1.25rem]" />
            <p className="text-white">Login with github</p>
          </>
        )}
      </LoginButton>
    </>
  );
}
