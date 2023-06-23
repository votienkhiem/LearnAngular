import { products } from './../products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  products = [...products]

  public share(): void {
    alert('The product has been shared!')
  }
  public onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
