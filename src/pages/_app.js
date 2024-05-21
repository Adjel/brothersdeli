import { Merriweather } from "next/font/google";
import Page from "@/app/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${merri.variable}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
