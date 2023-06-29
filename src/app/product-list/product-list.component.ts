import { products, Product } from './../products';
import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];


  constructor(private cartService: CartService) { }
  public share(): void {
    alert('The product has been shared!')
  }
  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {

  }
}
