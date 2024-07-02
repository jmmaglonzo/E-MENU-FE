import { TableTypes } from "@/types/TableTypes";
import TableCards from "./Cards/TableCards";

const Table = () => {
  const tables: TableTypes[] = [
    {
      tableNo: 1,
      guests: 4,
      date: "July 01, 10:30 AM",
    },
    {
      tableNo: 2,
      guests: 2,
      date: "July 01, 11:00 AM",
    },
    {
      tableNo: 3,
      guests: 3,
      date: "July 01, 11:30 AM",
    },
    {
      tableNo: 4,
      guests: 2,
      date: "July 01, 12:00 PM",
    },
    {
      tableNo: 5,
      guests: 4,
      date: "July 01, 12:30 PM",
    },
    {
      tableNo: 6,
      guests: 2,
      date: "July 01, 1:00 PM",
    },
    {
      tableNo: 7,
      guests: 3,
      date: "July 01, 1:30 PM",
    },
    {
      tableNo: 8,
      guests: 2,
      date: "July 01, 2:00 PM",
    },
  ];
  return (
    <main className="grid grid-cols-4 gap-4">
      {tables.map((table) => (
        <TableCards key={table.tableNo} data={table} />
      ))}
    </main>
  );
};

export default Table;
