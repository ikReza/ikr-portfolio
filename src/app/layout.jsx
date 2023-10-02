import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ibrahim Kaiser",
  description: "Portfolio of Ibrahim Kaiser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full flex flex-col min-h-screen bg-[whitesmoke]`}
      >
        <NextTopLoader color="#16A34A" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
