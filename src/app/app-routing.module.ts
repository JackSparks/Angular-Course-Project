import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsAvailableComponent} from './products-available/products-available.component';
import {AddProductComponent} from './add-product/add-product.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  {path: '', component: ProductsAvailableComponent },
  {path: 'products-available', component: ProductsAvailableComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'search-product', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
