import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
  target_market: string
}


export interface available_and_used_products {
  availableProducts: number;
  unusedProducts: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = environment.baseUrl;
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  constructor(private httpClient: HttpClient) { }

  get() {
    return products.slice();
  }

  getProducts() {
    return this.httpClient.get<product[]>(`${this.apiURL}/products`);
  }

  getProductsById(id) {
    return this.httpClient.get<product[]>(`${this.apiURL}/product/${id}`);
  }

  getProductsByProductDescription(description) {
    return this.httpClient.get<product[]>(`${this.apiURL}/product/productDescriptionEnglish/${description}`);
  }

  getProductsByIdAndProductDescription(id, description) {
    return this.httpClient.get<product[]>(`${this.apiURL}/product/${id}/productIdAndProductDescriptionEnglish/${description}`);
  }

  getAvailableAndUsedProducts(){
    return this.httpClient.get<available_and_used_products>(`${this.apiURL}/availableProducts`);
  }

  add(product){
    products.push(product);
    return this.get();
  }


}
