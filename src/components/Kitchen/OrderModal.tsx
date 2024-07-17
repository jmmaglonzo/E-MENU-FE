import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import useKitchenOrderStore from "@/store/kitchenOrder-store";
import { Badge } from "../ui/badge";
import { formatDate, capitalize, getStatusColor } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OrderStatus } from "@/types/myOrder";
import { useUpdateOrderStatus } from "@/services/queries";
import { useState } from "react";
import { useWebSocketContext } from "@/providers/WebSocketProvider";

const OrderModal = () => {
  const setSelectedItem = useKitchenOrderStore(
    (state) => state.setSelectedItem,
  );
  const selectedItem = useKitchenOrderStore((state) => state.selectedItem);
  const STATUS = Object.values(OrderStatus);
  /*   const { mutate: updateStatus } = useUpdateOrderStatus(); */
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>(
    selectedItem?.status as OrderStatus,
  );
  const socketEvents = useWebSocketContext();
  const updateStatus = socketEvents?.updateStatus;

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleUpdateStatus = () => {
    if (selectedStatus === selectedItem?.status) return;

    /*  updateStatus({
      orderNo: selectedItem?.orderNo as number,
      status: selectedStatus,
    }); */
    if (updateStatus)
      updateStatus(Number(selectedItem?.orderNo), selectedStatus);
    closeModal();
  };

  if (!selectedItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <Card
        className="mobile-container flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="relative flex aspect-square h-full max-h-[120px] w-full items-center overflow-hidden rounded-tl-md rounded-tr-md">
          <Badge
            className={`absolute right-0 ${getStatusColor(selectedItem.status)}`}
          >
            {capitalize(
              selectedItem.status === "ONGOING"
                ? "In-progress"
                : selectedItem.status,
            )}
          </Badge>
          <CardTitle>Table {selectedItem.tableNo}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {formatDate(selectedItem.createdAt.toString())}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="overflow-hidden p-0 px-3 text-black">
          <RadioGroup defaultValue={selectedItem.status}>
            {STATUS.map((status) => {
              return (
                <div className="flex items-center gap-x-3" key={status}>
                  <RadioGroupItem
                    value={status as string}
                    onClick={() => setSelectedStatus(status)}
                  />
                  <div className="font-bold">
                    {capitalize(
                      String(status === "ONGOING" ? "In-progress" : status),
                    )}
                  </div>
                </div>
              );
            })}
          </RadioGroup>
        </CardContent>
        <CardFooter className="mt-4 flex items-center justify-between gap-4 px-2 py-2">
          <Button onClick={handleUpdateStatus} className="w-full">
            Update Status
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderModal;
