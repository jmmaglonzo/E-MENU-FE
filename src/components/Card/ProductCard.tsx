"use client";
import api from "@/utils/axios";
import getProducts from "@/utils/getMenuFn";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ProductCard = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get("https://e-menu-be.onrender.com/api/products")
        .then((res) => res.data),
  });

  console.log(data);
  return <div>ProductCard</div>;
};

export default ProductCard;
