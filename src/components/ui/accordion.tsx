"use client";

import { useState } from "react";
export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <button className="w-full py-2" onClick={handleClick}>
        {title}
      </button>
      {isOpen && children}
    </>
  );
}
