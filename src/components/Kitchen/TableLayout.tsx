import { TableTypes } from "@/types/table";
import TableCards from "./Cards/TableCards";
import { ScrollArea } from "../ui/scroll-area";
import { AssistanceRequest } from "@/types/assistance";
import { UseMutationResult } from "@tanstack/react-query";

type Props = {
  data: TableTypes[] | AssistanceRequest[];
  getSession: (data: any["data"]) => string;
  getStatus: (data: any["data"]) => boolean;
  leftStatus: boolean;
  headerText: string;
  emptyText: string;
  leftChoice: string;
  rightChoice: string;
  finalChoice: string;
  mutateLeft:  UseMutationResult<void, Error, string, unknown>;
  mutateRight: UseMutationResult<void, Error, string, unknown>;
};

const TableLayout = ({ data, getSession, getStatus, leftStatus, headerText, emptyText, leftChoice, rightChoice, finalChoice, mutateLeft, mutateRight }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">{headerText}</h1>
      {data?.length === 0 ? (
        <h1 className="sticky mt-10 flex text-xl text-muted-foreground">
          {emptyText}
        </h1>
      ) : (
        <ScrollArea className="h-screen w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data?.map((table, index) => (
              <TableCards key={index} data={table} getSession={getSession} getStatus={getStatus} leftStatus={leftStatus} leftChoice={leftChoice} rightChoice={rightChoice} finalChoice={finalChoice} mutateLeft={mutateLeft} mutateRight={mutateRight}/>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default TableLayout;
