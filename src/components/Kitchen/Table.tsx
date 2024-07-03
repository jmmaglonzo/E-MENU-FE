"use client";

import TableCards from "./Cards/TableCards";
import { useGetTableQueue } from "@/services/queries";

const Table = () => {
  const { data } = useGetTableQueue();

  if (
    data?.length === 0 ||
    data?.filter((table) => table.status === false).length === 0
  ) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-xl text-muted-foreground">
        No table queues
      </h1>
    );
  }

  return (
    <main className="grid grid-cols-4 gap-4">
      {data?.map((table, index) => <TableCards key={index} data={table} />)}
    </main>
  );
};

export default Table;
