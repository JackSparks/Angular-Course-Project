import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 


export class Product{
  constructor(
    public english_description: string,
    public french_description: string,
    public brand_name_english: string,
    public brand_name_french: string,
    public type: string,
    public identification: string,
    public img_url: string,
    public status: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

     getProducts()
  {
    console.log("test call2222");
    return this.httpClient.get<Product[]>('http://localhost:8080/Products');
  }

  public createProduct(product) {
    return this.httpClient.post<Product>("http://localhost:8080/Products", product);
  }
}