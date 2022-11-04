import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productDetails: any;
  isData: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (param) => {
      await this.http.get(`http://localhost:3000/getProduct/${param['id']}`).subscribe((data) => {
        this.isData = true
        this.productDetails = data
        // console.log(this.productDetails)
      })
    })
  }

}

