"use client";

import { useDogs } from "@/hooks/useDogs";
import "./dogPage.scss";
import Image from "next/image";
import Loader from "@/components/loader/Loader";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// export async function generateStaticParams() {
//   const dogs = await fetch("/api/dogs.json").then((res) => res.json());

//   return dogs.dogs.map((itemDog) => ({
//     dog: itemDog.id,
//   }));
// }

// export const dynamicParams = true;

export default function DogPage({ params }) {
  const { data } = useDogs();
  const { dog } = params;

  const [mainImg, setMainImg] = useState();

  function updateImgMain(src, breed) {
    if (src === "" && breed === "australian_terrier") {
      return "/images/dogs/noPhoto/australian_terier_no_photo.png";
    } else if (src === "" && breed === "schnauzer") {
      return "/images/dogs/noPhoto/schnauzer_no_photo.png";
    } else {
      return src;
    }
  }

  return (
    <div className="dog">
      <Container>
        {!data ? (
          <Loader />
        ) : (
          data.dogs
            .filter((itemFilter) => itemFilter.id == dog)
            .map((dogFilter) => {
              return (
                <div className="dog__item" key={dogFilter.id}>
                  <Row>
                    <Col lg={6} md={12}>
                      <div className="item__info">
                        <h1 className="info__name">{dogFilter.name}</h1>
                        <div className="info__breed">
                          Порода:{" "}
                          <span>
                            {dogFilter.breed === "schnauzer"
                              ? "шнауцер"
                              : "австралийский терьер"}
                          </span>
                        </div>
                        <div className="info__gender">
                          Пол:{" "}
                          <span>
                            {dogFilter.gender === "male" ? (
                              <i
                                className="bi bi-gender-male"
                                style={{ color: "blue" }}
                              />
                            ) : (
                              <i
                                className="bi bi-gender-female"
                                style={{ color: "red" }}
                              />
                            )}
                          </span>
                        </div>
                        <div className="info__date-birth">
                          Дата рождения: <span>{dogFilter.dateBirth}</span>
                        </div>
                        <div className="info__titles">
                          Титулы:{" "}
                          {dogFilter.titles.map((title, i) => (
                            <span key={i}>{title}</span>
                          ))}
                        </div>
                        <div className="info__location">
                          Локация: <span>{dogFilter.location}</span>
                        </div>
                        <div className="info__breeder">
                          Заводчик: <span>{dogFilter.breeder}</span>
                        </div>{" "}
                        <div className="info__owner">
                          Владелец: <span>{dogFilter.owner}</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="item__image">
                        <Image
                          src={updateImgMain(
                            dogFilter.imgMain,
                            dogFilter.breed
                          )}
                          alt={dogFilter.name}
                          width={400}
                          height={300}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          priority
                        />

                        {dogFilter.images.length < 1 ? null : (
                          <div className="image__galery">
                            <Image
                              src={dogFilter.imgMain}
                              alt={dogFilter.imgMain}
                              width={100}
                              height={100}
                              style={{
                                objectFit: "cover",
                                height: "100px",
                                width: "100px",
                              }}
                              onClick={() =>
                                setMainImg(() => dogFilter.imgMain)
                              }
                            />

                            {dogFilter.images.map((img, i) => {
                              return (
                                <Image
                                  key={i}
                                  src={`/images/dogs/${dogFilter.id}/${img}`}
                                  alt={img}
                                  width={100}
                                  height={100}
                                  style={{
                                    objectFit: "cover",
                                    height: "100px",
                                    width: "100px",
                                  }}
                                  onClick={() =>
                                    setMainImg(
                                      `/images/dogs/${dogFilter.id}/${img}`
                                    )
                                  }
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })
        )}
      </Container>
    </div>
  );
}
