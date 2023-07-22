import { products, Product } from './../products';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';


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

  arrShoe: Product[] = []
  // cartService: CartService = inject(CartService);
  // constructor() {
  //   this.cartService.getAllShoes().then((arrShoe: Product[]) => {
  //     this.arrShoe = arrShoe
  //   })
  constructor(
    private cart: CartService,
    private route: ActivatedRoute
  ) {

    this.cart.getAllShoes().then((arrShoe: Product[]) => {
      this.arrShoe = arrShoe
    })

    const shoeId = parseInt(this.route.snapshot.params['id'], 10);
    this.cart.getItemsById(shoeId).then((arrShoe: Product[] | undefined) => { this.arrShoe = this.arrShoe });
  }

  filterResult() {
    console.log('mang day ', this.arrShoe)
  }

  changeEmailValue(): void {
    this.emailTemplateChildToParent.emit(this.email)
  }
  ngOnInit() {
  }

}
