"use client";

import { useGetTableQueue } from "@/services/queries";
import TableLayout from "./TableLayout";

const Table = () => {
  const { data } = useGetTableQueue();

  const approvedTableList = data?.filter((table) => table.status === true);
  const pendingTableList = data?.filter((table) => table.status === false);

  return (
    <main className="grid min-h-screen grid-cols-2 gap-4">
      <TableLayout data={pendingTableList} headerText="Pending" />
      <TableLayout data={approvedTableList} headerText="Approved" />
    </main>
  );
};

export default Table;
