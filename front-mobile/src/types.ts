export type Order = {
  id: number;
  adress: string;
  latitude: number;
  longitude: number;
  moment: string;
  total: number;
  status: string;
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
};
