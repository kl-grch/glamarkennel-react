import Link from "next/link";
import "./articlesPage.scss";

export const metadata = {
  title: "Статьи",
};

export default function ArticlesPage() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="white"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
      />
    </svg>
  );

  return (
    <div className="articles">
      <h1 className="articles__title">Полезные статьи</h1>
      <div className="articles__items">
        <div className="items__article">
          <div className="article__title">
            Методы формирования правильного постава некупированных ушей у
            шнауцеров
          </div>
          <Link href={"/articles/ear-shaping-method"}>
            <div className="article__button">{arrow} </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
