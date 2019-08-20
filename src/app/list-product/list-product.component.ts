import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ProductService, product } from "../services/product-service.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  Products: any[];

  constructor(
    private service: ProductService,
    private httpClientService:HttpClientService
  ) { 
    this.Products = service.get();
  }

  ngOnInit() {
    // this.httpClientService.getProducts().subscribe(
    //  response =>this.handleSuccessfulResponse(response),
    // );
    
    console.log(this.service.get());
  }

  handleSuccessfulResponse(response)
  {
      // this.Products=response;
  }
}
