import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { useApproveTableQueue, useDeclineTableQueue } from "@/services/queries";
import { TableTypes } from "@/types/table";

interface TableProps {
  data: TableTypes;
}

const TableCards = ({ data }: TableProps) => {
  const { mutate: decline } = useDeclineTableQueue();
  const { mutate: approve } = useApproveTableQueue();

  const handleClick = (session: string, type: "decline" | "approve") => {
    type === "decline" ? decline(session) : approve(session);
  };

  return (
    //if data.status === false then show the card else do not render

    <Card className="relative">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Table {data.tableNo}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{formatDate(data.createdAt)}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between gap-4 font-bold md:flex-row">
        {data.status === false ? (
          <>
            <Button
              variant="outline"
              className="w-full bg-red-600 text-white"
              onClick={() => handleClick(data.session, "decline")}
            >
              Decline
            </Button>
            <Button
              variant="outline"
              className="w-full bg-green-500 text-white"
              onClick={() => handleClick(data.session, "approve")}
            >
              Approve
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-red-600 text-white hover:bg-red-600/90"
            onClick={() => handleClick(data.session, "decline")}
          >
            Cancel
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TableCards;
