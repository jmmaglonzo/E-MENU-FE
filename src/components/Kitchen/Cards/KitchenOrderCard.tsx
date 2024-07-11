import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatDate, capitalize } from "@/lib/utils";
import { OrderTableType } from "@/types/table";
import useKitchenOrderStore from "@/store/kitchenOrder-store";

interface KitchenOrderCardProps {
  data: OrderTableType;
}

const KitchenOrderCard = ({ data }: KitchenOrderCardProps) => {
  console.log(data);
  const setSelectedItem = useKitchenOrderStore(
    (state) => state.setSelectedItem,
  );
  return (
    <Card className="relative" onClick={() => setSelectedItem(data)}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Table {data.tableNo}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {formatDate(data.orderDate.toString())}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-muted-foreground">
              Order
              <span className="font-bold">#{data.orderNo}</span>
            </p>
            <Badge variant={
              data.status === "COMPLETED"
                ? "secondary"
                : data.status === "ONGOING"
                  ? "outline"
                  : "destructive"
            }>{capitalize(data.status)}</Badge>
          </div>
          <ul className="space-y-1 text-sm">
            {data.orders.map((order, index) => (
              <li key={index}>
                {order.quantity}x {order.product.name}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenOrderCard;
