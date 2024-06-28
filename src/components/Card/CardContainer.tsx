"use client";
import { useMenuStore } from "@/store/menuTab-store";
import ErrorPage from "../common/ErrorPage";
import Loader from "../common/Loader";
import ProductCard from "./ProductCard";
import { useGetProducts } from "@/services/queries";
const CardContainer = () => {
  const { data, isLoading, error } = useGetProducts();
  const selected = useMenuStore((state) => state.selected);

  const filteredItems = data?.filter((food) =>
    selected === "all" ? true : food.categories.includes(selected),
  );

  if (isLoading)
    return (
      <div className="container mt-36 flex h-dvh justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <ErrorPage />
      </div>
    );

  return (
    <div className="grid h-[540px] grid-cols-2 gap-3 overflow-y-scroll rounded-sm bg-[#E8E9EA] px-2 py-4 no-scrollbar">
      {filteredItems?.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default CardContainer;
