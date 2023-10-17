"use client";

import "./footer.scss";

export default function Footer() {
  const nowYear = new Date().getFullYear();
  return (
    <div className="footer">
      © {nowYear}, Glamar |<a href="https://klgrch.ru">| klgrch.ru</a>
    </div>
  );
}
