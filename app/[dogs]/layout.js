import HeaderDogs from "@/components/headerDods/HeaderDogs";

export const metadata = {
  title: "Собаки",
};

export default function DogsPageLayout({ children }) {
  return (
    <div className="dogs-page-layout">
      <HeaderDogs />
      {children}
    </div>
  );
}
