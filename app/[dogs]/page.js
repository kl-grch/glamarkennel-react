"use client";

import Loader from "@/components/loader/Loader";
import { useDogs } from "@/hooks/useDogs";
import "./dogsPage.scss";
import Link from "next/link";

export default function DogsPage({ params }) {
  const { data } = useDogs();
  const { dogs } = params;

  function updateBackgroungImg(img, breed) {
    if (img === "" && breed === "schnauzer") {
      return "/images/dogs/noPhoto/schnauzer_no_photo.png";
    } else if (img === "" && breed === "australian_terrier") {
      return "/images/dogs/noPhoto/australian_terier_no_photo.png";
    } else {
      return img;
    }
  }

  return (
    <div className="dogs__items">
      {!data ? (
        <Loader />
      ) : (
        data.dogs
          .filter((item) => {
            if (dogs === "schnauzer") {
              return item.breed === "schnauzer";
            } else if (dogs === "australian_terrier") {
              return item.breed === "australian_terrier";
            } else {
              return item.breed !== "";
            }
          })
          .map((item) => (
            <Link key={item.id} href={`/dogs/${item.id}`}>
              <div
                className="items__item"
                style={{
                  backgroundImage: `url(${updateBackgroungImg(
                    item.imgMain,
                    item.breed
                  )})`,
                }}
              >
                <div className="item__title">{item.name}</div>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}
