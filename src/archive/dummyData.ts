import { MenuArray } from "@/types/type";
import menu1 from "@/assets/menu1.jpg";

export const dummyData: MenuArray = [
  {
    product_id: "qwewe",
    name: "Pastry and Boiled Egg on Plate",
    description:
      "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
    price: 200.0,
    image: menu1,
    time: {
      best_case: "00:01:00",
      worst_case: "00:10:00",
    },
    rating: 5,
    category: "Main Course",
  },
  {
    product_id: "erty456",
    name: "Blueberry Muffin",
    description:
      "A moist muffin bursting with blueberries, perfect for a morning treat.",
    price: 120.0,
    image: menu1,
    time: {
      best_case: "00:03:00",
      worst_case: "00:07:00",
    },
    rating: 4,
    category: "Desserts",
  },
  {
    product_id: "asdw123",
    name: "Chocolate Croissant",
    description:
      "A delightful chocolate-filled croissant, perfect for breakfast or a snack.",
    price: 150.0,
    image: menu1,
    time: {
      best_case: "00:02:00",
      worst_case: "00:12:00",
    },
    rating: 4,
    category: "Desserts",
  },
  {
    product_id: "zxcv345",
    name: "Ham and Cheese Sandwich",
    description:
      "A classic sandwich with layers of ham and cheese, served with fresh greens.",
    price: 250.0,
    image: menu1,
    time: {
      best_case: "00:05:00",
      worst_case: "00:15:00",
    },
    rating: 5,
    category: "Main Course",
  },
  {
    product_id: "lkjh567",
    name: "Fruit Salad",
    description:
      "A refreshing mix of seasonal fruits, perfect for a healthy snack.",
    price: 180.0,
    image: menu1,
    time: {
      best_case: "00:03:00",
      worst_case: "00:08:00",
    },
    rating: 4,
    category: "Side Dishes",
  },
];
