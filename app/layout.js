import "./globals.scss";
import "./homePageLayout.scss";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Glamar | Гламар",
  description: "Питомник черных шнауцеров",
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
