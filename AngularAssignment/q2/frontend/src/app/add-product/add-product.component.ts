import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductGroup: FormGroup;
  imageName: String = '';
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.addProductGroup = this.fb.group({
      prodName: '',
      prodPrice: '',
      prodDesc: '',
      prodCategory: ''
    })

  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post("http://localhost:3000/addProduct", this.addProductGroup.value).subscribe((data) => {
      console.log("Data Posted :", data)
    })
    this.router.navigate([""])

  }

}
