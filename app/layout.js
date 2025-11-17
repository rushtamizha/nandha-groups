import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactBtn from "@/components/contactBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nandha Groups Railway S&T Contactor",
  description: "Leading provider of advanced signaling and telecommunication solutions for Indian Railways. Committed to safety, innovation and operational excellence"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <ContactBtn /> {/* floating contact button */}
      </body>
    </html>
  );
}

