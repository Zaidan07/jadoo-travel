import { Volkhov, Poppins } from "next/font/google";

export const volkhov = Volkhov({
    subsets: ["latin"],
    weight: ["400","700"],
    variable: "--font-playfair",
  });
  
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    variable: "--font-poppins",
  });

