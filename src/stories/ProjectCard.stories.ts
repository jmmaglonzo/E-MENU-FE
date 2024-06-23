import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "@/components/Card/ProductCard";
import menu1 from "@/assets/menu1.jpg";

const dummyData = {
  product_id: "qwewe",
  name: "Pastry and Boiled Egg on Plate",
  description:
    "Enjoy a freshly baked pastry, golden and flaky, paired perfectly with a hearty boiled egg.",
  price: 200.0,
  image: menu1,
  time: {
    best_case: "00:01:00",
    worst_case: "00:10:00",
  },
  rating: 5,
};

const meta: Meta<typeof ProductCard> = {
  title: "ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    data: dummyData,
  },
};
