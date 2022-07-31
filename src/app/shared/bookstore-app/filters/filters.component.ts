import { Component, OnInit } from '@angular/core';
import { book } from '../product-list/product-item/model/book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
