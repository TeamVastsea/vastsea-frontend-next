import { LanguageProvider } from "@inlang/paraglide-next";
import { languageTag } from "@/paraglide/runtime.js";
import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const pixelFont = localfont({
  src: [
    {
      path: "../../public/fonts/fusion-pixel.woff2",
    },
  ],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <LanguageProvider>
      <html lang={languageTag()}>
        <body
          className={`${pixelFont.variable} antialiased bg-vastsea-white m-2`}
        >
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;