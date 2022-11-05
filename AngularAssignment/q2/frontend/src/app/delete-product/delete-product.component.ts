import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productDetails: any;
  isData: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient,) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (param) => {
      await this.http.get(`http://localhost:3000/getProduct/${param['id']}`).subscribe((data) => {
        this.isData = true
        this.productDetails = data
      })
    })
  }
  delete(id: any) {
    // console.log(id)
    this.http.delete("http://localhost:3000/deleteProduct/" + id).subscribe((data) => {
      console.log("Data Deleted ", data)
    })
    this.router.navigate([''])
  }

}
