import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TopBar from "@/components/Header/Topbar";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/components/Context/useAuth";
import Providers from "@/components/Context/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijata",
  description: "Website chính thức của Công ty TNHH Việt Nhật Đài",
  openGraph: {
    title: "Vijata",
    description: "Website chính thức của Công ty TNHH Việt Nhật Đài",
    siteName: "Vijata",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "https://vijata-website.vercel.app/images/vijatameta.png",
        width: 1200,
        height: 630,
        alt: "About Vijata",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Providers>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
