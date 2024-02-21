

import "./globals.scss";
import "./homePageLayout.scss";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });


export const metadata = {
  title: {
    template: "%s | Glamar | Гламар",
    default: "Glamar | Гламар",
  },
  description: "Питомник черных шнауцеров",
  keywords: [
    "Гламар",
    "Ukfvfh",
    "Glamar",
    "Пдфьфк",
    "питомник",
    "шнауцеры",
    "Glamarkennel",
    "Пдфьфклуттуд",
    "питомник СПБ",
    "черный шнауцер",
    "kennel",
    "питомник",
    "питомник гламар",
    "Glamar kennel",
    "Пдфьфк луттуд",
    "glamar-kennel",
  ],
  openGraph: {
    title: "Glamar | Гламар",
    description: "Питомник черных шнауцеров",
    url: "https://glamarkennel.com/",
    siteName: "Glamar | Гламар",
    type: "website",
    images: ["/images/metainfo/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamar | Гламар",
    description: "Питомник черных шнауцеров",
    url: "https://glamarkennel.com/",
    images: ["/images/metainfo/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={comfortaa.className}>
        <div className="wrapper container">
          <div className="wrapper__header">
            <Header />
          </div>
          <div className="wrapper__content">{children}</div>
          <div className="wrapper__footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
