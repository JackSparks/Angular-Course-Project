import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product-service.service";

@Component({
  selector: '[app-search-page]',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  productId: number;
  productDescriptionEnglish: string;

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

  getProducts(){
    this.service.get();
  }

  search(){}
  

}
