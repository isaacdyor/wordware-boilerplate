"use client";

import { cn } from "@/lib/utils"; // Adjust this import path as necessary
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <>
      <Image
        src={"/logo-light.png"}
        alt="logo"
        width={786}
        height={190}
        className={cn("w-36 h-auto dark:hidden", className)}
      />
      <Image
        src={"/logo-dark.png"}
        alt="logo"
        width={786}
        height={190}
        className={cn("w-36 h-auto hidden dark:block", className)}
      />
    </>
  );
};
