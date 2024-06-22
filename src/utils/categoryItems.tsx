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

const categoryItems: CategoryItem[] = [
  { title: "All" },
  { title: "Popular", icon: <FaFire /> },
  { title: "Appetizers", icon: <FaHotdog /> },
  { title: "Main Course", icon: <PiBowlFoodFill /> },
  { title: "Side Dishes", icon: <FaCarrot /> },
  { title: "Drinks", icon: <FaCocktail /> },
  { title: "Soup", icon: <TbSoupFilled /> },
  { title: "Desserts", icon: <IoMdIceCream /> },
];

export default categoryItems;
