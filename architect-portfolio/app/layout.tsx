import type { Metadata } from "next";


import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "Youcef Merine Sassi",
    template: "%s | Youcef Merine Sassi",
  },
  description:
    "Architect & Project Planning Specialist — portfolio showcasing selected works and experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // 👈 Add this attribute
      
      className={` h-full antialiased`}
    >
      <body
      suppressHydrationWarning 
      className={`${inter.className} min-h-full flex flex-col`}>
        
        {children}</body>
    </html>
  );
}
