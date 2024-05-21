import { Merriweather } from "next/font/google";
import "../styles/globals.css";

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Brotherdeli",
  description: "BROTHER DELI, LA RÉFÉRENCE DU PASTRAMI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${merri.variable}`}>{children}</body>
    </html>
  );
}
