import HeaderLitters from "@/components/headerLitters/HeaderLitters";
import "./littersLayoutPage.scss";

export const metadata = {
  title: "Помёты",
};

export default function LittersPageLayout({ children }) {
  return (
    <div className="litters-layout">
      <div className="litters-layout__title">Помёты</div>
      <HeaderLitters/>
      {children}
    </div>
  );
}
