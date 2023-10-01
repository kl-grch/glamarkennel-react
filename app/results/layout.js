import HeaderResults from "@/components/headerResults/HeaderResults";
import "./resultPageLayout.scss";

export const metadata = {
  title: "Результаты",
};

export default function ResultLayout({ children }) {
  return (
    <section>
      <div className="result-layout">
        <div className="result-layout__title">Результаты</div>
        <HeaderResults />
        {children}
      </div>
    </section>
  );
}
