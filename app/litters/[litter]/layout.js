export function generateStaticParams() {
  return [{ litter: "afterRegistration" }, { litter: "beforeRegistration" }];
}

export const dynamicParams = false;

export default function LitterLayout({ children }) {
  return <>{children}</>;
}
