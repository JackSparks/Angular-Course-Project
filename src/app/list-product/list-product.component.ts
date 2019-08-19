import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  Products:string[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getProducts().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
  {
      this.Products=response;
  }
}
