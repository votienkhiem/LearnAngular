import { products, Product } from './../products';
import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  faSearch = faSearch;
  products = [...products];


  listItems: Array<any> = []

  public search: string = ''

  constructor(private cartService: CartService) { }
  public share(): void {
    alert('The product has been shared!')
  }
  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
  public searchItems(): any {
    // const listItem = this.search;
    // const itemName = this.products.filter((data) => data.name === listItem)
    // if (itemName && itemName.length > 0) {

    //   this.listItems.push(itemName)

    //   console.log('name cua search', this.listItems)
    // } else {
    //   window.alert("No products found")
    // }
    const listFilter = this.search;
    const productSearch = this.products.filter((data) => data.name === listFilter)
    if (productSearch && productSearch.length > 0) {
      this.listItems = productSearch
    }
    else {

      window.alert("No products found")
    }

  }
  ngOnInit() {



  }
}
