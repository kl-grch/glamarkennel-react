"use client";

import Image from "next/image";
import "./homePage.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__title">
        <h1 className="title__title">
          Питомник чёрных шнауцеров и австралийских шелковистых терьеров
        </h1>
        <div className="title__descr">
          28 лет мы занимаемся разведением собак с устойчивой психикой, для
          души, племенной деятельности и выставочной карьеры
        </div>
      </div>

      <div className="home-page__img">
        <Image
          src="/images/homePage/dog_main.png"
          alt="home page image"
          width={500}
          height={590}
        />
      </div>
    </div>
  );
}