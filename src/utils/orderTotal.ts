import { useGetProducts } from "@/services/queries";
import { useCartStore } from "@/store/cart-store";

export default function TotalAmount() {
  const cartItems = useCartStore((state) => state.items);
  const { data } = useGetProducts();

  const items = cartItems;

  if (items.length === 0) return 0;

  return items.reduce((amount, cartItem) => {
    const item = data?.find((item) => item.id == cartItem.id);
    const price = item?.price || 0;
    return amount + price * cartItem.quantity;
  }, 0);
}
