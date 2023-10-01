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
        href="/dogs/schnauzer"
        className={clsx({
          active: pathname.startsWith("/dogs/schnauzer"),
        })}
      >
        Шнауцер
      </Link>
      <Link
        href="/dogs/australian-terrier"
        className={clsx({
          active: pathname.startsWith("/dogs/australian-terrier"),
        })}
      >
        Австралийский терьер
      </Link>
    </div>
  );
}
