"use client";

import Loader from "@/components/loader/Loader";
import { useDogs } from "@/hooks/useDogs";
import "./dogsPage.scss";
import Link from "next/link";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function DogsPage({ params }) {
  const { data } = useDogs();
  const { dogs } = params;
  const [enterSex, setEnterSex] = useState("");
  const [filterText, setFilterText] = useState("All");

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
    <>
      <div className="filter">
        <Form>
          {filterText}
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={() => {
              if (enterSex === "" && filterText === "All") {
                setEnterSex("female");
                setFilterText("Male");
              } else if (enterSex === "female") {
                setEnterSex("male");
              } else if (enterSex === "male") {
                setEnterSex("female");
              }
            }}
          />
          Female
        </Form>
      </div>
      <div className="dogs__items">
        {!data ? (
          <Loader />
        ) : (
          data.dogs
            .filter((item) => item.imgMain !== "") // без фото
            .filter((item) => {
              if (enterSex === "male") {
                return item.gender === "male";
              } else if (enterSex === "female") {
                return item.gender === "female";
              } else {
                return item.gender;
              }
            })
            .filter((item) => {
              if (dogs === "schnauzer") {
                return item.breed === "schnauzer";
              } else if (dogs === "australian_terrier") {
                return item.breed === "australian_terrier";
              } else {
                return item.breed !== "";
              }
            })
            .sort((a, b) => (a.name > b.name ? 1 : -1))
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
    </>
  );
}
