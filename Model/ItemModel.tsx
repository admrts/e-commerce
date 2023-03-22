export type ItemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

export type ItemCart = {
  title: string;
  image: string;
  price: number;
};

export type Rating = {
  count: number;
  rate: number;
};
