import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuNavbarComponent } from './top-menu-navbar/top-menu-navbar.component';
import { ProductsAvailableComponent } from './products-available/products-available.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateProductComponent } from './create-product/create-product.component'; //Soukhee Lee

@NgModule({
  declarations: [
    AppComponent,
    TopMenuNavbarComponent,
    ProductsAvailableComponent,
    AddProductComponent,
    FooterComponent,
    SearchPageComponent,
    ListProductComponent,
    CreateProductComponent //Soukhee Lee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
