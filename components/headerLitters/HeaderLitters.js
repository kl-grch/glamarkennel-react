"use client";

import Link from "next/link";
import "./headerLitters.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function HeaderLitters() {
  const pathname = usePathname();

  return (
    <div className="header-litters">
      <Link
        href="/litters/afterRegistration"
        className={clsx({
          active: pathname.startsWith("/litters/afterRegistration"),
        })}
      >
        После регистрации питомника
      </Link>
      <Link
        href="/litters/beforeRegistration"
        className={clsx({
          active: pathname.startsWith("/litters/beforeRegistration"),
        })}
      >
        До регистрации питомника
      </Link>
    </div>
  );
}
