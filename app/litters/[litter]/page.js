"use client";

import Loader from "@/components/loader/Loader";
import "./littersPageBeforeAfter.scss";
import { useLitters } from "@/hooks/useLitters";
import Link from "next/link";

// export async function generateStaticParams() {
//   const litters = await fetch("/api/litters.json").then((res) => res.json());

//   return Object.keys(litters).map((item) => ({
//     litter: item.litter,
//   }));
// }

// export const dynamicParams = true;

export default function LittersPageBeforeAfter({ params }) {
  const { data } = useLitters();
  const { litter } = params;

  function updateLink(link, name) {
    if (link && link.startsWith("http")) {
      return <a href={link}>{name}</a>;
    } else if (link && link.startsWith("/dogs")) {
      return <Link href={link}>{name}</Link>;
    } else {
      return name;
    }
  }

  return (
    <div className="litters-page-before-after">
      {!data ? (
        <Loader />
      ) : (
        <>
          <div className="litters-page-before-after__header">
            <div className="header__date">Дата</div>
            <div className="header__parents">Родители</div>
            <div className="header__puppies">Щенки</div>
          </div>
          <div className="litters-page-before-after__items">
            {data[litter]?.map((item, i) => (
              <div key={i} className="items__item">
                <div className="item__date">
                  {item.litter} {item.date}
                </div>
                <div className="item__parents">
                  <div className="parents__father">
                    s.{" "}
                    {updateLink(
                      item.parents.father.link,
                      item.parents.father.name
                    )}
                  </div>
                  <div className="parents__mother">
                    d.{" "}
                    {updateLink(
                      item.parents.mother.link,
                      item.parents.mother.name
                    )}
                  </div>
                </div>
                <div className="item__puppies">
                  {!item.puppies.males ? null : (
                    <div className="puppies__males">
                      <div className="males__title">Кобели:</div>
                      {item.puppies.males.map((item, i) => {
                        return (
                          <div className="males__item" key={i}>
                            {updateLink(item.link, item.name)}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {!item.puppies.females ? null : (
                    <div className="puppies__females">
                      <div className="females__title">Суки:</div>
                      {item.puppies.females.map((item, i) => {
                        return (
                          <div className="females__item" key={i}>
                            {updateLink(item.link, item.name)}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
