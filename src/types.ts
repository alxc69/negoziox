export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSoldOut?: boolean;
  isPreorder?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
