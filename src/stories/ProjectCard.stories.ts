import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@/components/Card/ProductCard'
import menu1 from '@/assets/menu1.jpg';

const dummyData =
{
    product_id: 'qwewe',
    name: 'adobo',
    description: 'blah blah blah',
    price: 100.00,
    image: menu1,
    time: {
        "best_case": '00:15:00',
        'worst_case': '00:40:00',
    },
    rating: 5,
}

const meta: Meta<typeof ProductCard> = {
    title: "ProductCard",
    component: ProductCard,
    parameters: {
        layout: 'centered',
      },
}

export default meta;
type Story = StoryObj<typeof ProductCard>;


export const Default: Story = {
    args: {
        data: dummyData
    },
  };









  