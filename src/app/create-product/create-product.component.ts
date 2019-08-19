import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/http-client.service'; /** Soukhee Lee */

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product("","","","","","","",""); /** Soukhee Lee */
  
  constructor(private httpClientService: HttpClientService) { } /** Soukhee Lee */


  ngOnInit() {
  }



  createProduct(): void {
    this.httpClientService.createProduct(this.product)
        .subscribe( data => {
          alert("Product created successfully.");
        });

  };
}
