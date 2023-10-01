"use client";

import "./footer.scss";

export default function Footer() {
  const nowYear = new Date().getFullYear();
  return <div className="footer">© {nowYear}, Glamar</div>;
}
