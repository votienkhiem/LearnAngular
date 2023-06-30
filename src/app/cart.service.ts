import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems(): Product[] {
    return this.items;
  }
  getItemsById(id: number) {
    return this.items.find(itemProduct => itemProduct.id === id)
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



}
