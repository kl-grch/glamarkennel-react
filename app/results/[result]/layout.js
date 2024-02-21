export async function generateStaticParams() {
  const years = await fetch(process.env.URL + "/api/results.json").then((res) =>
    res.json()
  );

  return Object.keys(years).map((year) => ({
    result: year,
  }));
}

export const dynamicParams = false;

export default function ResultLayout({ children }) {
  return <>{children}</>;
}
