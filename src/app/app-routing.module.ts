import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsAvailableComponent} from './products-available/products-available.component';
import {AddProductComponent} from './add-product/add-product.component';
import {SearchPageComponent} from './search-page/search-page.component';
import { FormsModule } from '@angular/forms';
/** Soukhee Lee */
import {ListProductComponent} from './list-product/list-product.component'; 
import {CreateProductComponent} from './create-product/create-product.component'; 

const routes: Routes = [
  {path: '', component: ProductsAvailableComponent },
  {path: 'products-available', component: ProductsAvailableComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'search-product', component: SearchPageComponent},
  /** Soukhee Lee */
  {path: 'all-product', component: ListProductComponent},
  {path: 'create-product', component: CreateProductComponent}
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
