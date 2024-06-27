interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductCategorize {
  categoryId: string;
  productId: string;
  category: Category;
}

interface ProductReview {}

export interface ProductType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  cookingTimeInSec: number;
  createdAt: string;
  updatedAt: string;
  productCategorize: ProductCategorize[];
  productReview: ProductReview[];
  categories: string[];
  ratings: number;
}
