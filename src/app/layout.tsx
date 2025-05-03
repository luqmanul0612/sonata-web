import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/utils/styles/globals.scss";
import Navbar from "@/components/organisms/navbar";
import I18nProvider from "./I18nProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Sonata Indonesia",
  description:
    "PT. Sonata Indonesia provides professional oil & gas resource consulting services, delivering quality solutions tailored to client needs.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
