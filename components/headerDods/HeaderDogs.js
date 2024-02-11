"use client";

import "./headerDogs.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function HeaderDogs() {
  const pathname = usePathname();

  return (
    <div className="header-dogs">
      <Link
        href="/dogs"
        className={clsx({
          active: pathname.endsWith("/dogs"),
        })}
      >
        Все собаки
      </Link>
      <Link
        href="/schnauzer"
        className={clsx({
          active: pathname.startsWith("/schnauzer"),
        })}
      >
        Шнауцер
      </Link>
      <Link
        href="/australian_terrier"
        className={clsx({
          active: pathname.startsWith("/australian_terrier"),
        })}
      >
        Австралийский шелковистый терьер
      </Link>
    </div>
  );
}
