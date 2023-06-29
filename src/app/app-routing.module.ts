import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { BookComponent } from './Learn/book/book.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home page' },
  { path: '', component: HomeComponent, title: 'Home page' },
  { path: 'template-form', component: TemplateComponent, title: 'Template-form' },
  { path: 'book', component: BookComponent, title: 'Book' },
  { path: 'product-list', component: ProductListComponent, title: 'Product' },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'shipping', component: ShippingComponent, title: 'Shipping' },
  { path: '**', component: PageNotFoundComponent, title: 'Page not found' }, //404

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
