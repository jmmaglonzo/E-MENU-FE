import { ProductCard } from "@/components/Card/ProductCard";
import { dummyData } from "@/dummy-data/data";

export default function Home() {
  return (
    <main className="min-sm:px-5 container my-5 flex max-sm:px-1">
      <ul className="grid h-full w-full grid-cols-2 grid-rows-1 gap-2">
        {dummyData.map((data, index) => (
          <li className="flex h-full w-full" key={index}>
            <ProductCard data={data} />
          </li>
        ))}
      </ul>
      
    </main>
  );
}
