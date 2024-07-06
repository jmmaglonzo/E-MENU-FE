import { Key } from "react";
import dummyImg from "/public/dummyImg.jpg";
import { StaticImageData } from "next/image";

interface OrderData1 {
  product_id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
}

export interface OrderData {
  product_id: Key | null | undefined;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
export const fakeOrderData: OrderData1[] = [
  {
    product_id: 1,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
  {
    product_id: 2,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
  {
    product_id: 3,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
  {
    product_id: 4,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
  {
    product_id: 5,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
  {
    product_id: 6,
    name: "Mashed potato with bacons",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200,
    image: dummyImg,
  },
];
