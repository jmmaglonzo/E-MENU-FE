import { toast } from "sonner";

import { ItemTypes } from "@/types/productCard";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useAddCart } from "@/services/queries";
import { AxiosError } from "axios";
import useCardStore from "@/store/productCard-store";
import { useEffect } from "react";

interface ProductCardProps {
  data: ItemTypes;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { error, isError, mutate } = useAddCart();

  useEffect(() => {
    if (isError) {
      const errStatus = (error as AxiosError).response?.request.status;

      if (errStatus === 404) toast.warning("Go visit our restaurant!");
      if (errStatus === 401) toast.warning("You are not allowed to order!");
    }
  }, [error, isError]);
  const setSelectedItem = useCardStore((state) => state.setSelectedItem);
  const selectedItem = useCardStore((state) => state.selectedItem);

  function handleAddCart(e: React.MouseEvent) {
    e.stopPropagation();

    mutate(data.id);
  }

  useEffect(() => {
    if (isError) {
      const errStatus = (error as AxiosError).response?.request.status;

      if (errStatus === 404) toast.warning("Go visit our restaurant!");
      if (errStatus === 401) toast.warning("You are not allowed to order!");
    }
  }, [error, isError]);

  const handleClick = () => {
    setSelectedItem(data);
  };

  return (
    <Card className="flex cursor-pointer flex-col" onClick={handleClick}>
      <CardHeader className="relative aspect-square h-[120px] w-full overflow-hidden rounded-tl-md rounded-tr-md md:h-[150px]">
        <Image
          fill
          src={data.image}
          alt={data.name}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 120px"
          priority
        />
      </CardHeader>
      <CardContent className="overflow-hidden p-0 px-3">
        <h2 className="my-2 truncate text-base font-semibold leading-4">
          {data.name}
        </h2>
        <p className="line-clamp-3 text-sm leading-3 text-muted-foreground">
          {data.description}
        </p>
        <div className="mt-1 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <PiClockCountdownFill className="h-4 w-4" />
            <span>{data.estimatedCookingTimeMin} mins</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <FaStar className="h-4 w-4 text-yellow-500" />
            <span>{data.ratings}/5</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between px-2 py-2">
        <span className="pl-1 text-base font-bold md:text-lg">
          ₱{data.price.toFixed(2)}
        </span>
        <Button
          variant="outline"
          className="h-7 w-7 rounded-full bg-primary p-0 text-white hover:bg-primary/90 hover:text-white"
          onClick={handleAddCart}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
