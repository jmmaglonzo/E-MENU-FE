"use client";
import api from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
const ProductCard = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("users").then((res) => res.data),
  });

  console.log(data);
  return <div>ProductCard</div>;
};

export default ProductCard;
