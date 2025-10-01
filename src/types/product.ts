export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string | null;
  discount: string | null;
  installment: string;
  smemberDiscount: string | null;
  studentDiscount: string | null;
  promoText: string;
  rating: number;
  image: string;
  brand: string;
}