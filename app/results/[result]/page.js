"use client";

import { useResults } from "@/hooks/useResults";
import "./result.scss";
import Loader from "@/components/loader/Loader";

export default function Result({ params }) {
  const { data } = useResults();
  const { result } = params;

  return (
    <div className="result-items">
      {!data ? (
        <Loader />
      ) : (
        data[result]?.map((item, i) => (
          <div className="result-items__item" key={i}>
            <div className="item__date">{item.date}</div>
            <div className="item__name">{item.exhibition}</div>
            <div className="item__judge">Судья: {item.judge}</div>
            <div className="item__winners">
              {!item.males ? null : (
                <div className="winners__dogs">
                  <div className="dogs__title">Кобели</div>
                  <ul>
                    {item.males.map((male, i) => (
                      <li key={i}>
                        <div>{male.dog}</div>
                        <div>Класс {male.class}</div>
                        <div>
                          Титулы:{" "}
                          {male.titles.map((title, i) => (
                            <span key={i}>{title}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!item.females ? null : (
                <div className="winners__dogs">
                  <div className="dogs__title">Суки</div>
                  <ul>
                    {item.females.map((female, i) => (
                      <li key={i}>
                        <div>{female.dog}</div>
                        <div>Класс {female.class}</div>
                        <div>
                          Титулы:{" "}
                          {female.titles.map((title, i) => (
                            <span key={i}>{title}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
