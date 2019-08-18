import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { ProductService, available_and_used_products } from '../services/product-service.service';

@Component({
  selector: '[app-products-available]',
  templateUrl: './products-available.component.html',
  styleUrls: ['./products-available.component.css']
})
export class ProductsAvailableComponent implements OnInit {
  products: Array<available_and_used_products> = [];
  constructor(private service: ProductService) { }

  ngOnInit() {
		this.service.getAvailableAndUsedProducts().subscribe((result) => {
			console.log("result: ", result);
			this.products.push(result);
			let chart = new CanvasJS.Chart("chartContainer",{
				animationEnabled: true,
				title: {
					text: "Available and Used Products"
				},
				data: [{
					type: "pie",
					startAngle: 240,
					yValueFormatString: "##0.00'%'",
					indexLabel: "{label} {y}",
					dataPoints: [
						{y: this.products[0].availableProducts, label: "Available"},
						{y: this.products[0].unusedProducts, label: "Used"},
					]
				}]
			});
			chart.render();
		});
	

  }

}
