import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: '[app-products-available]',
  templateUrl: './products-available.component.html',
  styleUrls: ['./products-available.component.css']
})
export class ProductsAvailableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
		let dataPoints = [
			{ y: 71 },
			{ y: 55 },
			{ y: 50 },
			{ y: 65 },
			{ y: 95 },
			{ y: 68 },
			{ y: 28 },
			{ y: 34 },
			{ y: 14 }
		];
		
		let chart = new CanvasJS.Chart("chartContainer",{
			animationEnabled: true,
		// 	title:{
		// 		text: "Basic Column Chart in Angular 5"
		// 	},
		// 	data: [{
		// 		type: "column",
		// 		dataPoints : dataPoints
		// 	}]
		// });
		title: {
			text: "Available and Used Products"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0.00'%'",
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: 79.45, label: "Used"},
				{y: 7.31, label: "Unused"},
				// {y: 7.06, label: "Baidu"},
				// {y: 4.91, label: "Yahoo"},
				// {y: 1.26, label: "Others"}
			]
		}]
	});
		chart.render();
  }

}
