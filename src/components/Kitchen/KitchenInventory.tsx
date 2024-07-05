"use client";
import React, { useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { FaFilter, FaSort, FaSearch } from "react-icons/fa";
import Modal from "react-modal";

interface Item {
  name: string;
  quantity: number;
  category: string;
}

const initialItems: Item[] = [
  { name: "Bacon", quantity: 12, category: "Meat" },
  { name: "Beef Tenderloin", quantity: 12, category: "Meat" },
  { name: "Broccoli", quantity: 12, category: "Produce" },
  { name: "Cheddar Cheese", quantity: 12, category: "Dairy" },
  { name: "Chicken Breasts", quantity: 12, category: "Meat" },
  { name: "Eggs", quantity: 12, category: "Dairy" },
  { name: "Milk", quantity: 12, category: "Dairy" },
  { name: "Lettuce", quantity: 12, category: "Produce" },
  { name: "Potatoes", quantity: 12, category: "Produce" },
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
      </div>

      {/* Add Item Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add New Item"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="rounded-lg bg-white p-6">
          <h2 className="mb-4 text-xl">Add New Item</h2>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Item name"
              className="w-full rounded border p-2"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full rounded border p-2"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
              }
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full rounded border p-2"
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
            />
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="rounded border p-2"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="rounded bg-orange-500 p-2 text-white"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>
      </Modal>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Item</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">
                <button className="mr-2">
                  <HiOutlinePencilAlt className="mr-2" />
                </button>
                <button className="text-red-600">
                  <HiOutlineTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KitchenInventory;
