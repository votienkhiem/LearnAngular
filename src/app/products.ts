export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'assets/images/shoe1.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: 'assets/images/shoe2.jpg'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image: 'assets/images/shoe3.jpg'
  }
];
