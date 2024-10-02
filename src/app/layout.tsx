import type { Metadata } from "next";
import { volkhov, poppins } from "./fonts/fonts";
import "./globals.css";
import PaddingContainer from "@/components/Common/PaddingContainer/PaddingContainer";

export const metadata: Metadata = {
  title: "Jadoo Travel",
  description: "Travel Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <body className={`${volkhov.className} ${poppins.className}antialiased`}>
        <PaddingContainer>{children}</PaddingContainer>
      </body>
    </html>
  );
}
