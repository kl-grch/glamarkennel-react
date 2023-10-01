"use client";

import Link from "next/link";
import "./headerResults.scss";
import { useResults } from "@/hooks/useResults";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Loader from "../loader/Loader";

export default function HeaderResults() {
  const pathname = usePathname();

  const { data } = useResults();
  return (
    <div className="header-results">
      <nav>
        {!data ? (
          <Loader />
        ) : (
          Object.keys(data)
            .sort(function (a, b) {
              return b - a;
            })
            .map((item, i) => (
              <Link
                key={item}
                href={`/results/${item}`}
                className={clsx({
                  active: pathname.startsWith(`/results/${item}`),
                })}
              >
                {item}
              </Link>
            ))
        )}
      </nav>
    </div>
  );
}
