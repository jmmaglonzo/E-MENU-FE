"use client";

import { TableTypes } from "@/types/table";
import TableCards from "./Cards/TableCards";
import { useGetTableQueue } from "@/services/queries";

const Table = () => {
  const { data } = useGetTableQueue();
  console.log(data);
  return (
    <main className="grid grid-cols-4 gap-4">
      {data?.map((table, index) => <TableCards key={index} data={table} />)}
    </main>
  );
};

export default Table;
