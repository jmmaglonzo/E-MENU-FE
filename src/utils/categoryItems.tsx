import { FaFire } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { TbSoupFilled } from "react-icons/tb";
import { FaCarrot } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { IoMdIceCream } from "react-icons/io";

interface CategoryItem {
  title: string;
  icon?: JSX.Element;
}

export const categoryItems = [
  { value: "all", label: "All" },
  { value: "popular", label: "Popular", icon: <FaFire /> },
  { value: "appetizers", label: "Appetizers", icon: <FaHotdog /> },
  { value: "main-course", label: "Main Course", icon: <PiBowlFoodFill /> },
  { value: "side-dishes", label: "Side Dishes", icon: <FaCarrot /> },
  { value: "drinks", label: "Drinks", icon: <FaCocktail /> },
  { value: "soup", label: "Soup", icon: <TbSoupFilled /> },
  { value: "desserts", label: "Desserts", icon: <IoMdIceCream /> },
];

export default categoryItems;
