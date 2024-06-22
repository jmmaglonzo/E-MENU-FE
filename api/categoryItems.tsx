import { FaFire } from 'react-icons/fa';
import { FaHotdog } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { FaCarrot } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { IoMdIceCream } from "react-icons/io";

import { ReactElement } from 'react';

type ImgType = string | ReactElement;

interface CategoryItem {
    title: string;
    img: ImgType;
}

const categoryItems: CategoryItem[] = [
    
    { title: 'All', img: "" },
    { title: 'Popular', img: <FaFire /> },
    { title: 'Appetizers', img: <FaHotdog /> },
    { title: 'Main Course', img: <GiChickenLeg /> },
    { title: 'Side Dishes', img: <FaCarrot /> },
    { title: 'Drinks', img: <FaCocktail /> },
    { title: 'Soup', img: <TbSoupFilled /> },
    { title: 'Desserts', img: <IoMdIceCream /> },
    
];

export default categoryItems;