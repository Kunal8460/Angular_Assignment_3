import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfProducts: any = []
  constructor(private http: HttpClient) {
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/getAllProducts").subscribe((data) => {
      this.listOfProducts = data
    })
  }

}
