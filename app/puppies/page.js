"use client";

import Link from "next/link";
import Image from "next/image";
import "./puppiesPage.scss";
import img1 from "public/images/puppiesPage/Litter-F.jpg";
import img2 from "public/images/puppiesPage/Litter-F2.JPG";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/puppiesPage/gallery/IMG_4497.jpg",
    thumbnail: "/images/puppiesPage/gallery/IMG_4497.jpg",
  },
  {
    original: "/images/puppiesPage/gallery/IMG_4503.JPG",
    thumbnail: "/images/puppiesPage/gallery/IMG_4503.JPG",
  },
  {
    original: "/images/puppiesPage/gallery/IMG_4530.JPG",
    thumbnail: "/images/puppiesPage/gallery/IMG_4530.JPG",
  },
  {
    original: "/images/puppiesPage/gallery/IMG_8480.JPG",
    thumbnail: "/images/puppiesPage/gallery/IMG_8480.JPG",
  },
  {
    original: "/images/puppiesPage/gallery/IMG_8411.JPG",
    thumbnail: "/images/puppiesPage/gallery/IMG_8411.JPG",
  },
];

export default function PuppiesPage() {
  return (
    <div className="puppies">
      <div className="puppies__info">
        <h2> У нас пополнение!</h2>
        <p>Помет Ф/ Litter F</p>
        <p>
          <Link href={"/dogs/43"}>TEAM PLAYER Gagatek</Link> &{" "}
          <Link href={"/dogs/33"}>Sterne Grinsen GLAFIRA Glamar</Link>
        </p>
        <p>27.01.2024</p>
        <p>4 boys | 1 girl</p>
      </div>
      <div className="puppies__photos">
        <Image
          alt=""
          src={img1}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <Image
          alt=""
          src={img2}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="puppies__gallery">
        <h3>Наши щеночки</h3>
        <div className="gallery__photos">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
}
