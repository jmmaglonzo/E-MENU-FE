import { TableTypes } from "@/types/table";
import TableCards from "./Cards/TableCards";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  data: TableTypes[] | undefined;
  headerText: string;
};

const TableLayout = ({ data, headerText }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">{headerText}</h1>
      {data?.length === 0 ? (
        <h1 className="sticky mt-10 flex text-xl text-muted-foreground">
          No table queues.
        </h1>
      ) : (
        <ScrollArea className="h-screen w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data?.map((table, index) => (
              <TableCards key={index} data={table} />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default TableLayout;
