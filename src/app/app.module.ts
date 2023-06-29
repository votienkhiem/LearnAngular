
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './Learn/book/book.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './feature/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    TemplateComponent,
    BookComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }

