import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { OrderTableTypes } from "@/types/table";

interface KitchenOrderCardProps {
  data: OrderTableTypes;
}

const KitchenOrderCard = ({ data }: KitchenOrderCardProps) => {
  return (
    <Card className="relative">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Table {data.tableNo}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{data.guests} Guests</Badge>
          <div className="text-sm text-muted-foreground">{data.date}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-muted-foreground">
              Order
              <span className="font-bold">{data.orderNo}</span>
            </p>
            <Badge variant="secondary">{data.status}</Badge>
          </div>
          <ul className="space-y-1 text-sm">
            {data.orderList.map((order, index) => (
              <li key={index}>{order}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenOrderCard;
