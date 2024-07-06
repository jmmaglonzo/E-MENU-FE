import { StaticImageData } from 'next/image';
import  dummyImg  from '/public/dummyImg.jpg';

export type dummyDataProps = {
    id: number,
    name: string,
    desc: string,
    qty: string,
    price: string,
    image: StaticImageData;
}

export const dummyData: dummyDataProps[] = [
    {
        id: 1,
        name: "Mashed potato with bacons",
        desc: "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
        qty: "1",
        price: "P200",
        image: dummyImg,
    },
    {
        id: 2,
        name: "Mashed potato with bacons",
        desc: "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
        qty: "1",
        price: "P200",
        image: dummyImg,
    },
    {
        id: 3,
        name: "Mashed potato with bacons",
        desc: "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
        qty: "1",
        price: "P200",
        image: dummyImg,
    },
    {
        id: 4,
        name: "Mashed potato with bacons",
        desc: "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
        qty: "1",
        price: "P200",
        image: dummyImg,
    }
];