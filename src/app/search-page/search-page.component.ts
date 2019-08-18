import { Component, OnInit } from '@angular/core';
import { ProductService, product } from "../services/product-service.service";

@Component({
  selector: '[app-search-page]',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  productId: number;
  productDescriptionEnglish: string;
  products = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

  getProducts(){
    this.service.get();
  }

  search(){
    this.service.getProducts().subscribe((results) => {
      this.products = [];
      for(let result of results) {
        this.products.push(result);
      }      
    });
  }
  

}
