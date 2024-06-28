import { ItemTypes } from "@/types/productCard";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

interface ProductCardProps {
  data: ItemTypes;
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Card className="text-center">
      <CardHeader className="relative aspect-square h-[120px] w-full overflow-hidden rounded-md">
        <Image
          fill
          src={data.image}
          alt="Pastry and Boiled Egg on Plate"
          className="object-cover"
        />
      </CardHeader>
      <CardContent className="space-y-2 p-1">
        <h2 className="text-sm font-bold">{data.name}</h2>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {data.description}
        </p>
        <div className="flex items-center space-x-2 text-sm">
          <PiClockCountdownFill className="h-4 w-4 text-muted-foreground" />
          <span>30-45 mins</span>
          <FaStar className="h-4 w-4 text-yellow-500" />
          <span>5/5</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-4 py-2">
        <span className="text-base font-bold">₱{data.price}</span>
        <Button
          variant="outline"
          className="h-8 w-8 rounded-full bg-primary p-0 text-white hover:bg-primary/90 hover:text-white"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
