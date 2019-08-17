import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

let products: Array<product> = [];

export interface product {
  english_description: string;
  french_description: string;
  brand_name_english: string;
  brand_name_french: string;
  type: string;
  identification: string;
  img_url: string;
  status: string;
  target_market: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  get() {
    return products.slice();
  }

  add(product){
    products.push(product);
    return this.get();
  }


}
