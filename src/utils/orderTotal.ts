import { useGetCartItems, useGetProducts } from "@/services/queries";

export default function TotalAmount() {
  const getCartItems = useGetCartItems();
  const { data } = useGetProducts();

  const items = getCartItems.data || [];

  if (items.length === 0) return 0;

  return items.reduce((amount, cartItem) => {
    const item = data?.find((item) => item.id == cartItem.id);
    const price = item?.price || 0;
    return amount + price * cartItem.quantity;
  }, 0);
}
