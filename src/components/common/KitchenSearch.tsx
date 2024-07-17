import Image from "next/image";
import results from "/public/barbecue.png";
const KitchenSearch = () => {
  return (
    <div className="mt-8 flex items-center justify-center text-center">
      <div className="flex flex-col gap-2">
        <div className="relative mx-auto aspect-auto h-[300px] w-[300px]">
          <Image src={results} alt="No Results Image" fill />
        </div>
        <h1 className="text-3xl font-bold lg:text-4xl">
          This search seems a bit underdone.
        </h1>
        <p className="">
          We couldn&apos;t find any results. Maybe try turning up the heat with
          different keywords?
        </p>
      </div>
    </div>
  );
};

export default KitchenSearch;
