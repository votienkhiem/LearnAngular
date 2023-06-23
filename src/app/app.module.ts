import { HttpServerService } from './Services/http-server.service';
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
import { AboutComponent } from './about/about.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http';
import { TypescriptComponent } from './TypeScipt/typescript/typescript.component';
import { BookComponent } from './Learn/book/book.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';




const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template-form', component: TemplateComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'get-data', component: GetDataComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'book', component: BookComponent },
  { path: 'product-list', component: ProductListComponent },

  { path: '**', component: PageNotFoundComponent }, //404

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    AboutComponent,
    TemplateComponent,
    ReactiveFormComponent,
    GetDataComponent,
    TypescriptComponent,
    BookComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }

