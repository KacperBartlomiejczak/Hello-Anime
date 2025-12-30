"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

import Google from "@/components/ui/google";
import { Github } from "lucide-react";
import Spinner from "@/components/ui/spinner";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (provider: string) => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: "/" });
  };
  return (
    <section className="relative w-full h-full z-20">
      <div className="w-full h-full flex justify-center items-center fixed z-20">
        <div className="bg-secondary-background p-10 rounded-xl text-center">
          <h2 className="font-bold text-xl mb-2">
            Welcome to <span className="text-brand">HelloAnime!</span>
          </h2>

          <p>Create account by login with this options</p>
          <div className="flex flex-row items-center justify-center mt-4 gap-2">
            <button className="p-2 bg-white rounded-full">
              <Google className="h-5 w-5" />
            </button>
            <button
              className="p-2 bg-black rounded-full cursor-pointer"
              onClick={() => handleLogin("github")}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner className="h-5 w-5 text-white" />
              ) : (
                <Github className="text-[1.25rem]" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inste-0 w-screen h-screen bg-background/90 z-10" />
      <div
        className="absolute inset-0 h-screen w-screen z-0 object-center object-cover"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      ></div>
    </section>
  );
}
