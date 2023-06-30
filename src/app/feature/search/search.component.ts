import { CartService } from './../../cart.service';
import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product, products } from 'src/app/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  faSearch = faSearch;
  products = [...products];
  @Input() disableSearch!: boolean;

  constructor(private cartService: CartService) {

  }

  listItems: Array<any> = [];
  listEmpty: Product[] = [];


  public searchItems(text: string): void {

    if (!text) {
      this.listEmpty = this.listItems
    }

    this.listItems = this.products.filter(data => data.name.toLowerCase().includes(text.toLowerCase()));



  }
}
