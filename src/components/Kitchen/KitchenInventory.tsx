"use client";
import React, { useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { FaFilter, FaSort, FaSearch } from "react-icons/fa";
import { Modal } from "../ui/modal";
import KitchenModal from "./KitchenModal/KitchenModal";
import EditModal from "./KitchenModal/EditModal";
import KitchenDeleteModal from "./KitchenModal/KitchenDeleteModal";
import { ScrollArea } from "../ui/scroll-area";

interface Item {
  name: string;
  quantity: number;
  category: string;
}

const initialItems: Item[] = [
  { name: "Bacon", quantity: 12, category: "Main-Dish" },
  { name: "Beef Tenderloin", quantity: 12, category: "Soup" },
  { name: "Broccoli", quantity: 12, category: "Produce" },
  { name: "Cheddar Cheese", quantity: 12, category: "Dairy" },
  { name: "Chicken Breasts", quantity: 12, category: "Meat" },
  { name: "Eggs", quantity: 12, category: "Dairy" },
  { name: "Milk", quantity: 12, category: "Dairy" },
  { name: "Lettuce", quantity: 12, category: "Produce" },
  { name: "Potatoes", quantity: 12, category: "Produce" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
];

const KitchenInventory: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [search, setSearch] = useState<string>("");
  const [newItem, setNewItem] = useState<Item>({
    name: "",
    quantity: 0,
    category: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [deleteItemModal, setDeleteItemModal] = useState<boolean>(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ name: "", quantity: 0, category: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search items"
            className="w-full rounded border p-2 pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 rounded border p-2">
            <FaFilter />
            <span>Filter by</span>
          </button>
          <button className="flex items-center space-x-2 rounded border p-2">
            <FaSort />
            <span>Sort by</span>
          </button>
        </div>

        <button
          className="rounded bg-orange-500 p-2 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          + Add New Item
        </button>

        <KitchenModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <EditModal
          editModalOpen={editModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
        <KitchenDeleteModal
          deleteItemModal={deleteItemModal}
          setDeleteItemModal={setDeleteItemModal}
        />
      </div>

      {/* Add Item Modal */}

      <ScrollArea className="h-dvh w-full">
        <div className="grid grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div key={index} className="border p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>{item.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{item.quantity}</h3>
                  <p>Remaining</p>
                </div>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="mr-2"
                >
                  <HiOutlinePencilAlt className="mr-2" />
                </button>

                <button
                  onClick={() => setDeleteItemModal(true)}
                  className="text-red-600"
                >
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default KitchenInventory;
