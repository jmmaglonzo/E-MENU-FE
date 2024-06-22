import { FaFire } from 'react-icons/fa';
import { FaHotdog } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
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
    { title: 'Side Dishes', img: <MdEmojiFoodBeverage /> },
    
];

export default categoryItems;