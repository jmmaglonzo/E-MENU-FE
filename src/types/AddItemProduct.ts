export interface AddItemProduct {
  id?: string;
  name: string;
  quantity: number;
  description: string;
  price: number;
  image?: string;
  categories?: string[];
  estimatedCookingTimeMin?: number;
}
