"use client";
import { useMenuStore } from "@/store/menuTab-store";
import ErrorPage from "../common/ErrorPage";
import Loader from "../common/Loader";
import ProductCard from "./ProductCard";
import { useGetProducts } from "@/services/queries";
import ModalCard from "./ModalCard";
import { useSearchStore } from "@/store/search-store";

const CardContainer = () => {
  const { data, isLoading, error } = useGetProducts();
  const selected = useMenuStore((state) => state.selected);
  const { search } = useSearchStore();

  const filteredItems =
    search !== ""
      ? data?.filter((product) =>
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : data?.filter((food) =>
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
    <div className="relative grid grid-cols-2 gap-3 rounded-sm px-2 py-4">
      {filteredItems?.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
      <ModalCard />
    </div>
  );
};

export default CardContainer;
