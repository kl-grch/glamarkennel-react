"use client";

import Loader from "@/components/loader/Loader";
import "./littersPageBeforeAfter.scss";
import { useLitters } from "@/hooks/useLitters";

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
                    s. {item.parents.father}
                  </div>
                  <div className="parents__mother">
                    d. {item.parents.mother}
                  </div>
                </div>
                <div className="item__puppies">
                  {!item.puppies.males ? null : (
                    <div className="puppies__males">
                      <div className="males__title">Кобели:</div>
                      {item.puppies.males.map((item, i) => {
                        return (
                          <div className="males__item" key={i}>
                            {item}
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
                            {item}
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
