export type ItemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

export type Rating = {
  count: number;
  rate: number;
};

export type ItemCart = {
  title: string;
  image: string;
  price: number;
  id: number;
  rating: Rating;
};

export type BasketCart = {
  title: string;
  image: string;
  price: number;
  count: number;
  id: number;
  totalPrice: number;
  rating: Rating;
};
