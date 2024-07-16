import { Item } from "./KitchenInventory";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import EditModal from "./KitchenModal/EditModal";
import KitchenDeleteModal from "./KitchenModal/KitchenDeleteModal";
interface KitchenProductsProps {
  item: Item;
}
const KitchenProducts = ({
  item: { name, quantity, category },
}: KitchenProductsProps) => {
  return (
    <Card className="flex flex-col gap-4 rounded-sm border p-4 shadow-sm">
      <CardHeader className="p-0">
        <h3 className="font-bold">{name}</h3>
        <CardContent className="flex items-center justify-between gap-2 p-0">
          <p>{category}</p>
          <p>{quantity} Remaining</p>
        </CardContent>
      </CardHeader>
      <CardFooter className="mt-auto flex items-center gap-2 p-0">
        <EditModal />
        <KitchenDeleteModal />
      </CardFooter>
    </Card>
  );
};

export default KitchenProducts;
