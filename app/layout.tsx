import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Front end developer, React js developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-12 sm:pt-6
       dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
        `}
      >
        <div
          className="bg-[#fff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
        sm:w-[88.75rem] dark:bg-[#454286]"
        ></div>

        <div
          className="bg-[#fff] absolute top-[-1rem] -z-10  left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[88.75rem] md:left-[-33rem]
         lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
         dark:bg-[#676394]
         "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
