import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components";

const inter = Inter({
  
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "IlyasDev",
  description: "Voila mon premier portfolio, cree par ilyas, developpeur web et web designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased text-white`}
      >
      <Header />
        
        {children}
      </body>
    </html>
  );
}
