import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { UseMutationResult } from "@tanstack/react-query";
import { AssistanceRequest } from "@/types/assistance";
import { TableTypes } from "@/types/table";

interface TableProps {
  data: AssistanceRequest | TableTypes;
  getSession: (data: TableProps["data"]) => string;
  getStatus: (data: TableProps["data"]) => boolean;
  leftStatus: boolean;
  leftChoice: string;
  rightChoice: string;
  finalChoice: string;
  mutateLeft: UseMutationResult<void, Error, string, unknown>;
  mutateRight: UseMutationResult<void, Error, string, unknown>;
}

const TableCards = ({
  data,
  getSession,
  getStatus,
  leftStatus,
  leftChoice,
  rightChoice,
  finalChoice,
  mutateLeft,
  mutateRight,
}: TableProps) => {
  const { mutate: leftAction } = mutateLeft;
  const { mutate: rightAction } = mutateRight;

  const handleClick = (session: string, type: "decline" | "approve") => {
    type === "decline" ? leftAction(session) : rightAction(session);
  };

  const session = getSession(data);

  return (
    //if data.status === false then show the card else do not render

    <Card className="relative">
      <CardHeader className="flex items-center justify-between px-0 py-2 md:p-2">
        <CardTitle className="text-base md:text-xl lg:text-2xl">
          Table {data.tableNo}
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs md:text-sm">
            {formatDate(data.createdAt)}
          </Badge>
        </div>
        <div className="text-sm md:text-base xl:text-xl">{session}</div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between gap-4 p-4 font-bold lg:flex-row">
        {!getStatus(data) ? (
          <>
            <Button
              variant="outline"
              className="w-full bg-red-600 text-white"
              onClick={() => handleClick(session, "decline")}
            >
              {leftChoice}
            </Button>
            <Button
              variant="outline"
              className="w-full bg-green-500 text-white"
              onClick={() => handleClick(session, "approve")}
            >
              {rightChoice}
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-red-600 text-white hover:bg-red-600/90"
            onClick={() => handleClick(session, "decline")}
          >
            {finalChoice}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TableCards;
