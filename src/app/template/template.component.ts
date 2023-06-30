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


  cartService: CartService = inject(CartService);
  constructor() {
  }
  filterResult(text: string) {

  }

  changeEmailValue(): void {
    this.emailTemplateChildToParent.emit(this.email)
  }
  ngOnInit() {
  }

}
