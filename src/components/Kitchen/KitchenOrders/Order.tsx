"use client";

import { Toaster, toast } from "sonner";

const Order = () => {
  type Order = {
    id: string;
    tableNumber: number;
    items: string[];
    status: string;
    notes: string;
  };

  const orders: Order[] = [
    {
      id: "#12345",
      tableNumber: 1,
      items: [
        "3 - Garlic Bread",
        "1 - Chicken Wings (Buffalo)",
        "3 - Caesar Salad",
        "3 - Pasta Alfredo",
        "2 - Onion Rings",
        "1 - French Fries",
        "3 - Cheesecakes",
        "3 - Iced Tea",
      ],
      status: "Pending",
      notes:
        "Additional sauce for the side dishes (Onion Rings and French Fries). Thanks!",
    },
    {
      id: "#12346",
      tableNumber: 2,
      items: [
        "3 - Garlic Bread",
        "1 - Chicken Wings (Buffalo)",
        "3 - Caesar Salad",
        "3 - Pasta Alfredo",
        "2 - Onion Rings",
        "1 - French Fries",
        "3 - Cheesecakes",
        "3 - Iced Tea",
      ],
      status: "Pending",
      notes:
        "Additional sauce for the side dishes (Onion Rings and French Fries). Thanks!",
    },
  ];

  const sendToKitchen = (id: string) => {
    toast.success(`Order ${id} sent to kitchen`);
  };

  return (
    <div className="p-6">
      <Toaster position="top-right" />
      <h1 className="mb-4 text-2xl font-bold">Order Details</h1>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Pending Orders</h2>
        <div className="mb-2 grid grid-cols-6 gap-4 font-semibold text-gray-700">
          <div>Order #</div>
          <div>Table #</div>
          <div>Items</div>
          <div>Status</div>
          <div>Note/s</div>
          <div>Action</div>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-6 gap-4 border-b py-2"
            >
              <div>{order.id}</div>
              <div>Table {order.tableNumber}</div>
              <div>
                <ul className="list-disc pl-5">
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="inline-block rounded-lg bg-slate-400 px-4 py-1">
                  {order.status}
                </span>
              </div>
              <div>{order.notes}</div>
              <div>
                <button
                  onClick={() => sendToKitchen(order.id)}
                  className="w-full rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-700"
                >
                  Send to Kitchen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
