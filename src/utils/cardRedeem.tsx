import { ShoppingCartIcon } from "lucide-react";
import { FaBirthdayCake, FaIceCream } from "react-icons/fa";
import { FaBurger, FaCartShopping } from "react-icons/fa6";

export const cardRedeem = [
  {
    icon: <FaCartShopping className="mb-2 h-8 w-8 text-primary" />,
    title: "20% off discount",
    description: "Redeem 1000 points",
  },
  {
    icon: <FaBurger className="mb-2 h-8 w-8 text-primary" />,
    title: "Free Burger",
    description: "Redeem 500 points",
  },
  {
    icon: <FaIceCream className="mb-2 h-8 w-8 text-primary" />,
    title: "Free Ice Cream",
    description: "Redeem 300 points",
  },

  {
    icon: <FaBirthdayCake className="mb-2 h-8 w-8 text-primary" />,
    title: "Free Cake",
    description: "Redeem 800 points",
  },
];
