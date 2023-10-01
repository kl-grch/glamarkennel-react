import "./aboutPage.scss";
import aboutImg from "@/public/images/aboutPage/about.png";
import Image from "next/image";

export const metadata = {
  title: "О нас",
};

export default function AboutPage() {
  return (
    <div className="about">
      <div className="about__title">О нас</div>

      <div className="about__info">
        <div className="info__img">
          <Image
            src={aboutImg}
            alt="Ирина Аексеева с собаками"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="info__descr">
          <div className="descr__text">
            <p>
              <b>Glafira (Глаша)</b> - первый Шнауцер, который появился в нашем
              доме в марте 1995 года. Собака подарила море положительных эмоций.
            </p>
            <p>
              И чтобы достойно презентовать Глашу на выставках и подчеркнуть всю
              красоту породы, мы стали изучать основы хендлинга и подготовки
              собаки к турнирам.
            </p>
            <p>
              Заслуженные награды не заставили себя долго ждать. Посещая
              выставки, мы каждый раз убеждались в правильности своего выбора.
            </p>
          </div>
        </div>
      </div>

      <div className="about__achievements">
        <div className="achievements__item">
          <div className="item__img">
            <Image
              src={"/images/aboutPage/RKF.svg"}
              alt="РКФ"
              width={65}
              height={65}
            />
            <Image
              src={"/images/aboutPage/FCI.svg"}
              alt="FCI"
              width={65}
              height={65}
            />
          </div>
          <div className="item__text">
            РКФ/FCI Сертификат FCI №7464 от 13.06.2006
          </div>
        </div>
        <div className="achievements__item">
          <div className="item__title">
            99 <span>щенков</span>
          </div>
          <div className="item__text">
            Родились в питомнике с 2006 года и осчастливили собой столько же
            семей
          </div>
        </div>
        <div className="achievements__item">
          <div className="item__title">
            6<span>стран</span>
          </div>
          <div className="item__text">
            в которых наши собаки имеют титулы Чемпион Мира и Интерчемпион
          </div>
        </div>
      </div>
    </div>
  );
}
