import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetails: any;
  isData: boolean = false;
  editProductGroup: FormGroup
  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient,
    private fb: FormBuilder) {
    this.editProductGroup = this.fb.group({
      prodName: '',
      prodDesc: '',
      prodPrice: '',
      prodCategory: ''
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (param) => {
      await this.http.get(`http://localhost:3000/getProduct/${param['id']}`).subscribe((data) => {
        this.isData = true
        this.productDetails = data
        // console.log(this.productDetails)
      })
    })

  }
  onEditSubmit(): void {

    this.route.params.subscribe(async (param) => {

      console.log(param['id'])
      await this.http.put(`http://localhost:3000/updateProduct/${param['id']}`, this.editProductGroup.value).subscribe((data) => {
        console.log("Edit Successful: ", data)
      })
    })
    this.route.params.subscribe(param => {
      this.router.navigate([`/Product/${param['id']}`])
    })
    // console.log(this.editProductGroup.value)
  }
}
