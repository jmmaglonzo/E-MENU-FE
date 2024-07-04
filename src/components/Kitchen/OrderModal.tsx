import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import useKitchenOrderStore from "@/store/kitchenOrder-store";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import { OrderStatus } from "@/types/myOrder";

const OrderModal = () => {
  const setSelectedItem = useKitchenOrderStore((state) => state.setSelectedItem);
  const selectedItem = useKitchenOrderStore((state) => state.selectedItem);
  console.log(selectedItem);
  const closeModal = () => {
    setSelectedItem(null);
  };

  const STATUS = Object.values(OrderStatus);

  if (!selectedItem) return null;

  return (
    <div
      className="fixed w-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <Card
        className="flex container flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="relative aspect-square w-full flex items-center overflow-hidden rounded-tl-md rounded-tr-md max-h-[120px] h-full">
          <Badge className="absolute right-0" variant="secondary">{selectedItem.status}</Badge>
          <CardTitle>Table {selectedItem.tableNo}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{formatDate(selectedItem.orderDate.toString())}</Badge>
          </div>
        </CardHeader>
        <CardContent className="overflow-hidden p-0 px-3 text-black">
           <RadioGroup defaultValue={selectedItem.status}>
              {
                STATUS.map((status) => {
                  console.log(status);
                  return <div className="flex items-center gap-x-3">
                    <RadioGroupItem value={status as string}/>
                    <div className="font-bold">{String(status)}</div>
                  </div>  
                })
              }
           </RadioGroup>
        </CardContent>
        <CardFooter className="mt-4 flex items-center justify-between gap-4 px-2 py-2">
           <Button className="w-full">Update Status</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderModal;
