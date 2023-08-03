import { Footer, Headeer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie app ",
  description: "movie app contain 100 best top movies list by imdb ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     
      <body className={inter.className}>
      <Providers>
              <Headeer/>
             {children}
              <Footer/>
       
      </Providers>
        </body>
       
    </html>
  );
}
