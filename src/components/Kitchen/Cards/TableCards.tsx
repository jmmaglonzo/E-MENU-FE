import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TableTypes } from "@/types/TableTypes";

interface TableProps {
  data: TableTypes;
}

const TableCards = ({ data }: TableProps) => {
  return (
    <Card className="relative">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Table {data.tableNo}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{data.guests} guests</Badge>
          <div className="text-sm text-muted-foreground">{data.date}</div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 font-bold">
        <Button variant="outline" className="w-full bg-red-600 text-white">
          Declined
        </Button>
        <Button variant="outline" className="w-full bg-green-500 text-white">
          Approved
        </Button>
      </CardContent>
    </Card>
  );
};

export default TableCards;
