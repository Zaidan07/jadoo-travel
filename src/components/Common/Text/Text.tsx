import React from "react";
import { poppins, volkhov } from "@/app/fonts/fonts";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary"
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  fontFamily?: "poppins" | "volkhov"
}

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  variant = "default",
  size = "p",
  fontFamily = "poppins",
}) => {
  const variantClasses = {
    default: "text-[#212832]",
    primary: "text-[#14183E]",
    secondary: "text-[#5E6282]",
  };

  const sizeClasses = {
    h1: "text-[44px] md:text-[84px] leading-[48px] md:leading-[89px] font-bold",
    h2: "text-[50px] leading-[64px]",
    h3: "text-[30px] leading-[54px]",
    h4: "text-[14px] md:text-[20px] leading-[29px]",
    h5: "text-[12px] md:text-[18px] leading-[26px]",
    h6: "md:text-[17px] leading-[24px]",
    p: "text-[12px] md:text-[16px] leading-[15px] md:leading-[26px]",
  };
  const fontFamilyClasses = {
    volkhov: "var(--font-volkhov)",
    poppins: "var(--font-poppins)",
  };

  const combinedClasses = [
    variantClasses[variant],
    sizeClasses[size],
    fontFamilyClasses[fontFamily],
    fontFamily === "volkhov" ? volkhov.className : poppins.className,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = size as keyof JSX.IntrinsicElements;

  return <Component className={combinedClasses}>{children}</Component>;
};

export default Text;
