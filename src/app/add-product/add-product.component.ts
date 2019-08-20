import { Component, OnInit } from '@angular/core';
import { ProductService, product } from "../services/product-service.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Product } from '../service/http-client.service';


@Component({
  selector: '[app-add-product]',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit, product {

  english_description: "";
  french_description: "";
  brand_name_english: "";
  brand_name_french: "";
  type: "";
  identification: "";
  img_url: "";
  status: "";
  target_market: "";


  registerForm: FormGroup;
  submitted = false;

  // title = 'Add Product';
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

    this.registerForm = this.formBuilder.group({

      english_description: ['', Validators.required],
      french_description: ['', Validators.required],
      brand_name_english: ['', Validators.required],
      brand_name_french: ['', Validators.required],
      type: ['', Validators.required],
      identification: ['', Validators.required],
      img_url: ['', Validators.required],
      status: ['', Validators.required],
      target_market: ['', Validators.required],

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

    console.log(this.english_description);

    console.log(this.english_description + "   -> class english description");

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    // alert(this.english_description + 'SUCCESS!! :-)\n\n')
    // console.log(this.english_description);
    // alert(newProduct.english_description+'SUCCESS!! :-)\n\n' )
  }

  addNewProduct() {

    this.service.add(this);
  }
}