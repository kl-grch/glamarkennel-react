export async function generateStaticParams() {
  const dogs = await await fetch(process.env.URL + "/api/dogs.json").then(
    (res) => res.json()
  );

  console.log(
    dogs.dogs.map((item) => ({
      dog: String(item.id),
    }))
  );

  return dogs.dogs.map((item) => ({
    dog: String(item.id),
  }));
}

export const dynamicParams = false;

export default function DogLayout({ children }) {
  return <>{children}</>;
}
