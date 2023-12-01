import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const noto_sans = Noto_Sans_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "প্রত্যয় শিল্পীগোষ্ঠি",
  description: "পেশাদার ইসলামী সাংস্কৃতিক সংস্থা।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} bg-white text-[#181818] font-noto-sans`}
      >
        <main className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
