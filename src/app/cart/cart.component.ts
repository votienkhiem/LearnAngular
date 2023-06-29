import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  goBack(): void {
    this.location.back();
  }
}
