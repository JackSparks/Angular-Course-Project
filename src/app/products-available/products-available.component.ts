import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { ProductService, available_and_used_products } from '../services/product-service.service';

@Component({
  selector: '[app-products-available]',
  templateUrl: './products-available.component.html',
  styleUrls: ['./products-available.component.css']
})
export class ProductsAvailableComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
		this.service.getAvailableAndUsedProducts().subscribe((results) => {
						
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
						{y: results[0].availableProducts, label: "Available"},
						{y: results[0].unusedProducts, label: "Used"},
					]
				}]
			});
			chart.render();
		});
	

  }

}
