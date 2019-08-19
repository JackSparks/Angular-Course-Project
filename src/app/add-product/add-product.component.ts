import { Component, OnInit } from '@angular/core';
import { ProductService, product } from "../services/product-service.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';


@Component({
  selector: '[app-add-product]',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  title = 'Add Product';
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  constructor(private service: ProductService, private fb: FormBuilder, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

     //   newProduct = new product() {

  //   english_description: '',
  //   french_description: '',
  //   brand_name_english: '',
  //   brand_name_french: '',
  //   type: '',
  //   identification: '',
  //   img_url: '',
  //   status: '',
  //   target_market: ''

  // }

    // (function () {
    //   'use strict';
    //   window.addEventListener('load', function () {
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.getElementsByClassName('needs-validation');
    //     // Loop over them and prevent submission
    //     var validation = Array.prototype.filter.call(forms, function (form) {
    //       form.addEventListener('submit', function (event) {
    //         if (form.checkValidity() === false) {
    //           event.preventDefault();
    //           event.stopPropagation();
    //         }
    //         form.classList.add('was-validated');
    //       }, false);
    //     });
    //   }, false);
    // })();

    this.registerForm = this.formBuilder.group({

      english_description: ['', Validators.required],
      french_description: ['', Validators.required],
      brand_name_english: ['', Validators.required],
      brand_name_french: ['', Validators.required],
      type: ['', Validators.required],
      identification: ['', Validators.required],
      img_url: ['', Validators.required],
      status: ['', Validators.required],
      target_market: ['', Validators.required]
    }, {
        // validator: MustMatch('password', 'confirmPassword')
      });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

 
  }

  

  addNewProduct() {
    // this.service.add(this.newProduct);
  }
}





  // newProduct: product;


    // english_description: string;
    // french_description: string;
    // brand_name_english: string;
    // brand_name_french: string;
    // type: string;
    // identification: string;
    // img_url: string;
    // status: string;


  // addNewProduct() {
  //   const newProduct = <product>{
  //     english_description : document.getElementById("product_description_english").value,
  //     french_description : document.getElementById("product_description_french").value,
  //     brand_name_english : document.getElementById("brand_name_english").value,
  //     brand_french_english : document.getElementById("brand_name_french").value,
  //     type : document.getElementById("type").value,
  //     identification : document.getElementById("identification").value,
  //     img_url : document.getElementById("img_url").value,
  //     status : document.getElementById("status").value
  //   }

  //   ProductService.add(newProduct);

  // }

// }
