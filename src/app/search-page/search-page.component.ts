import { Component, OnInit } from '@angular/core';
import { ProductService, product } from "../services/product-service.service";

@Component({
  selector: '[app-search-page]',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  productId: string;
  productDescriptionEnglish: string;
  products = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

  getProducts(){
    this.service.get();
  }

  search(){
    if ((this.productId != null && this.productId != "") && (this.productDescriptionEnglish != null && this.productDescriptionEnglish != "")){
      this.service.getProductsByIdAndProductDescription(this.productId, this.productDescriptionEnglish).subscribe((results) => {
        this.products = [];
        for(let result of results) {
          this.products.push(result);
        }      
      });
    }
    else if ((this.productId != null && this.productId != "") && (this.productDescriptionEnglish == null || this.productDescriptionEnglish == "")){
      this.service.getProductsById(this.productId).subscribe((results) => {
        this.products = [];
        for(let result of results) {
          this.products.push(result);
        }      
      });
    }
    else if ((this.productId == null || this.productId == "") && (this.productDescriptionEnglish != null && this.productDescriptionEnglish != "")){
      this.service.getProductsByProductDescription(this.productDescriptionEnglish).subscribe((results) => {
        this.products = [];
        for(let result of results) {
          this.products.push(result);
        }      
      });
    }
    else{ //No id or description provided
      this.service.getProducts().subscribe((results) => {
        this.products = [];
        for(let result of results) {
          this.products.push(result);
        }      
      });
    }
  }

}
