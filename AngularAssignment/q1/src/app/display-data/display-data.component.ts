import { NgPlural } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  num1: number = 0;
  fruits: Array<String> = ["Orange", "Apple", "Banana", "Kiwi"];
  submitted: boolean = false;
  myForm: FormGroup;
  comboControl: FormGroup
  searchVal: any;
  currentDate: number = Date.now()
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: '',
      email: ''
    })

    this.comboControl = this.fb.group({
      item: ""
    })
  }
  search() {
    console.log(this.comboControl.value.item)
  }
  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true
    // console.log(this.myForm)
  }
  increment() {
    this.num1 += 1
  }
}
