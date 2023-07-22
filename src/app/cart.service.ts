import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  url: string = 'http://localhost:3000/shoes';

  constructor(private http: HttpClient) { }
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems(): Product[] {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json')
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  async getAllShoes(): Promise<Product[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }


  async getItemsById(id: number): Promise<Product[] | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }

}
