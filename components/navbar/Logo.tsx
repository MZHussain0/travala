"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Black_Ops_One } from "next/font/google";

interface LogoProps {}

const font = Black_Ops_One({ subsets: ["latin"], weight: "400" });

const Logo: FC<LogoProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="hidden md:block cursor-pointer uppercase text-2xl mr-2">
      <div className={font.className}>Travala</div>
    </div>
  );
};

export default Logo;
