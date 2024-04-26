"use client";

import Loader from "@/components/loader/Loader";
import { useDogs } from "@/hooks/useDogs";
import "./dogsPage.scss";
import Link from "next/link";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Search from "@/components/search/Search";

export default function DogsPage({ params }) {
  const { data } = useDogs();
  const { dogs } = params;
  const [enterSex, setEnterSex] = useState("");
  const [filterText, setFilterText] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [searchArray, setSearchArray] = useState([]);

  const fetchData = async () => {
    const response = await data;
    setSearchArray(response.dogs);
  };

  if (searchText !== "") {
    fetchData();
  }

  const filteredSearchDogs = searchArray.filter((dog) => {
    return dog.name.toLowerCase().includes(searchText.toLowerCase());
  });

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
      <Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onClick={searchText !== "" ? fetchData : null}
      >
        {filteredSearchDogs.length == 0 ? <p>Мы ничего не нашли</p> : filteredSearchDogs.map((dog) => {
          return (
            <Link
              className="search__link"
              href={`/dogs/${dog.id}?from=search&text_search=${searchText}`}
              key={dog.id}
            >
              <p style={{ width: "100%" }}>{dog.name}</p>
            </Link>
          );
        })}
      </Search>

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
