import { StaticImageData } from "next/image";

export type CardObject = {
  product_id: string;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  time: {
    best_case: string;
    worst_case: string;
  };
  rating: number;
  category: string;
};

export type MenuArray = CardObject[];
