export type Display = 'table' | 'cards' | 'details';
export interface RatingType {
  rate: number;
  count: number;
}
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}
