"use client";

import { useGetProducts } from "@/services/queries";

const ProductCard = () => {
  const { data } = useGetProducts();
  console.log(data);
  return <div>ProductCard</div>;
};

export default ProductCard;
