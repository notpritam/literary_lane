import Header from "@/components/shared/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiteraryLane",
  description:
    "Explore, Enrich, Enlighten – Your Journey on LiteraryLane Begins Here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
