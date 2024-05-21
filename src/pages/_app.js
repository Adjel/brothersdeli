import Page from "@/app/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Page>
  );
}

export default MyApp;
