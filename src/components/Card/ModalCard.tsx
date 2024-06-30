import useCardStore from "@/store/productCard-store";
import { FaStar } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import { Toaster } from "sonner";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";

const ModalCard = () => {
  const setSelectedItem = useCardStore((state) => state.setSelectedItem);
  const selectedItem = useCardStore((state) => state.selectedItem);

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (!selectedItem) return null;
  return (
    <div
      className="container fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <Card className="flex flex-col">
        <CardHeader className="relative aspect-square h-[120px] w-[full] overflow-hidden rounded-tl-md rounded-tr-md md:h-[150px]">
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className="overflow-hidden p-0 px-3">
          <Toaster />
          <h2 className="my-2 truncate text-base font-semibold leading-4">
            {selectedItem.name}
          </h2>
          <p className="text-sm leading-3 text-muted-foreground">
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
        <CardFooter className="mt-auto flex items-center justify-between px-2 py-2">
          <span className="pl-1 text-base font-bold md:text-lg">
            ₱{selectedItem.price.toFixed(2)}
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ModalCard;
