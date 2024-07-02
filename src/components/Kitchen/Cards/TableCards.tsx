import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useApproveTableQueue, useDeclineTableQueue } from "@/services/queries";
import { TableTypes } from "@/types/table";

interface TableProps {
  data: TableTypes;
}

const TableCards = ({ data }: TableProps) => {
  const { mutate: decline } = useDeclineTableQueue();
  const { mutate: approve } = useApproveTableQueue();

  const handleClick = (session: string, type: "decline" | "approve") => {
    type === "decline" ? decline(data.session) : approve(data.session);
  };

  return (
    //if data.status === false then show the card else do not render
    !data.status && (
      <Card className="relative">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Table {data.tableNo}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{data.guests} guests</Badge>
            <div className="text-sm text-muted-foreground">{data.date}</div>
          </div>
        </CardHeader>
        <CardContent className="flex justify-between gap-4 font-bold">
          <Button
            variant="outline"
            className="w-full bg-red-600 text-white"
            onClick={() => handleClick(data.session, "decline")}
          >
            Declined
          </Button>
          <Button
            variant="outline"
            className="w-full bg-green-500 text-white"
            onClick={() => handleClick(data.session, "approve")}
          >
            Approved
          </Button>
        </CardContent>
      </Card>
    )
  );
};

export default TableCards;
