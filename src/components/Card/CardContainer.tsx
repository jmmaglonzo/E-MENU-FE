"use client";
import { useMenuStore } from "@/store/menuTab-store";
import ErrorPage from "../common/ErrorPage";
import ProductCard from "./ProductCard";
import { useGetProducts } from "@/services/queries";
import ModalCard from "./ModalCard";
import { useSearchStore } from "@/store/search-store";
import NoResults from "../common/NoResults";

const CardContainer = () => {
  const { data, error } = useGetProducts();
  const selected = useMenuStore((state) => state.selected);
  const search = useSearchStore((state) => state.search);
  const filteredItems =
    search !== ""
      ? data?.filter((product) =>
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : data?.filter((food) =>
          selected === "all" ? true : food.categories.includes(selected),
        );

  if (error)
    return (
      <div>
        <ErrorPage />
      </div>
    );

  return (
    <div
      className={`relative mb-40 gap-3 rounded-sm px-2 py-4 ${filteredItems?.length !== 0 && "grid grid-cols-2"} `}
    >
      {filteredItems?.length === 0 ? (
        <NoResults />
      ) : (
        filteredItems?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      )}
      <ModalCard />
    </div>
  );
};

export default CardContainer;
