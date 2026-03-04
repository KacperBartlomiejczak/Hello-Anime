"use client";

import { toggleLike } from "@/actions/toggleLike";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LikeButtonProps {
  animeId: number;
  initialLiked: boolean;
  animeImage: string;
  animeName: string;
}

export default function LikeButton({
  animeId,
  initialLiked,
  animeImage,
  animeName,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const { data, status } = useSession();
  const router = useRouter();

  const handleClick = async () => {
    if (!data && status === "unauthenticated") {
      router.push("/login");
      return;
    }
    setIsLiked((prevState) => !prevState);

    try {
      const result = await toggleLike(animeId, animeName, animeImage);
      if (result.error) {
        throw new Error("You re unauthorized");
      }
    } catch (err) {
      console.error("There was a problem adding your like");
      setIsLiked((prevState) => !prevState);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-row justify-center items-center gap-2 w-full py-3 bg-black text-white text-center font-bold rounded-xl hover:bg-brand/80 transition-all shadow-lg shadow-brand/20"
    >
      <Heart
        fill={isLiked ? "red" : "none"}
        className={`${isLiked ? "text-red-500" : "text-white"} transition-colors duration-200`}
      />
      <p>{isLiked ? "You liked this anime" : "Like anime"}</p>
    </button>
  );
}
