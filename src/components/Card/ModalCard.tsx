import useCardStore from "@/store/productCard-store";
import { FaStar } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import { Toaster } from "sonner";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { useAddCart } from "@/services/queries";

const ModalCard = () => {
  const setSelectedItem = useCardStore((state) => state.setSelectedItem);
  const selectedItem = useCardStore((state) => state.selectedItem);
  const { error, isError, mutate } = useAddCart();

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (!selectedItem) return null;

  function handleAddCart(e: React.MouseEvent) {
    e.stopPropagation();
    mutate(selectedItem?.id as string);
  }

  if (isError) {
    const errStatus = (error as AxiosError).response?.request.status;

    if (errStatus === 401) toast("You are not allowed to order!");
  }

  return (
    <div
      className="container fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <Card
        className="flex w-[90%] flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="relative aspect-square h-[220px] w-full overflow-hidden rounded-tl-md rounded-tr-md md:h-[300px]">
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            fill
            sizes="160px"
            className="object-cover"
          />
        </CardHeader>
        <CardContent className="overflow-hidden p-0 px-3">
          <Toaster />
          <h2 className="my-2 truncate text-base font-semibold leading-4 md:text-xl">
            {selectedItem.name}
          </h2>
          <p className="text-base leading-4 text-muted-foreground">
            {selectedItem.description}
          </p>
          <div className="mt-1 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <PiClockCountdownFill className="h-4 w-4" />
              <span>{selectedItem.estimatedCookingTimeMin} mins</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <FaStar className="h-4 w-4 text-yellow-500" />
              <span>{selectedItem.ratings}/5</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex items-center justify-between gap-4 px-2 py-2">
          <span className="pl-1 text-xl font-bold">
            ₱{selectedItem.price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddCart}
            variant={"default"}
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition active:scale-110"
          >
            Order Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ModalCard;
