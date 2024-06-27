"use client";
import ErrorPage from "../common/ErrorPage";
import Loader from "../common/Loader";
import ProductCard from "./ProductCard";
import { useGetProducts } from "@/services/queries";
const CardContainer = () => {
  const { data, isLoading, error } = useGetProducts();

  if (isLoading)
    return (
      <div className="container mt-36 flex min-h-dvh justify-center">
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
    <div className="mt-4 grid h-dvh grid-cols-2 gap-4 overflow-y-scroll bg-slate-200 px-2 py-4 no-scrollbar">
      {data?.map((product) => <ProductCard key={product.id} data={product} />)}
    </div>
  );
};

export default CardContainer;
