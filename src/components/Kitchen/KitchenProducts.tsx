import { ItemTypes } from "@/types/productCard";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import EditModal from "./KitchenModal/EditModal";
import KitchenDeleteModal from "./KitchenModal/KitchenDeleteModal";
interface KitchenProductsProps {
  card: ItemTypes;
}

const KitchenProducts = ({
  card: { description, name, quantity, price, id },
}: KitchenProductsProps) => {
  return (
    <Card className="flex flex-col gap-4 rounded-sm border p-4 shadow-sm">
      <CardHeader className="p-0">
        <h3 className="font-bold">{name}</h3>
        <CardContent className="flex items-start justify-between p-0">
          <p className="overflow-hidden break-words text-base leading-4">
            {description}
          </p>
        </CardContent>
      </CardHeader>
      <CardFooter className="mt-auto flex items-end justify-between gap-2 p-0">
        <div className="flex flex-col justify-end text-base font-semibold">
          <p>Price:&#8369; {price} </p>
          <p className="whitespace-nowrap">
            {quantity} <span className="font-normal">Remaining</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <EditModal id={id} />
          <KitchenDeleteModal id={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default KitchenProducts;
