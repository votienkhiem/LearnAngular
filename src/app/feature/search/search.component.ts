import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { products } from 'src/app/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  faSearch = faSearch;
  products = [...products];
  @Input() disableSearch: boolean | undefined;
  // @Input('disableSearch') disableSearch: boolean = true;


  listItems: Array<any> = []
  public search: string = ''

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
}
