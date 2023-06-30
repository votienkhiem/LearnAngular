import { products, Product } from './../products';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public name = 'admin'
  public pass = ''
  public email = 'emailChild@gmail.com'
  @Input() emailBookParentToChild: string | undefined;
  @Output() emailTemplateChildToParent = new EventEmitter<string>();

  filteredProduct: Product[] = []
  products2: Product[] = []
  shoe = [...products]
  cartService: CartService = inject(CartService);
  constructor() {

    this.products2 = this.shoe
  }
  filterResult(text: string) {
    if (!text) {
      this.filteredProduct = this.products2;
    }
    this.filteredProduct = this.products2.filter(data => data?.name.toLowerCase().includes(text.toLowerCase()));
  }

  changeEmailValue(): void {
    this.emailTemplateChildToParent.emit(this.email)
  }
  ngOnInit() {
  }

}
