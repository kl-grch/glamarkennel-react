"use client";

import "./header.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import logo from "/public/images/logo.png";

const linksHeader = [
  {
    name: "Собаки",
    link: "/dogs",
  },
  {
    name: "Пометы",
    link: "/litters",
  },
  {
    name: "Результаты",
    link: "/results",
  },
  {
    name: "Статьи",
    link: "/articles",
  },
  // {
  //   name: "О нас",
  //   link: "/about",
  // },
  {
    name: "Контакты",
    link: "/contacts",
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="header__nav">
        <div className="nav__logo">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="nav__links">
          {linksHeader.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.link}
                className={clsx({ active: pathname.startsWith(link.link) })}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div
          className="nav__menu"
          onClick={() => setActiveMenu(activeMenu ? false : true)}
        >
          <i className="bi bi-list"></i>
          <div
            className={clsx("menu__links", {
              "menu__links--active": activeMenu,
            })}
          >
            {linksHeader.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.link}
                  className={clsx({ active: pathname.startsWith(link.link) })}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="header__lang">
        <span>RU</span> | <span>EN</span>
      </div> */}
    </header>
  );
}
