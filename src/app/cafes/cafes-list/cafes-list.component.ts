import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {

  cafe: Array<Cafe> = [];
  constructor() { }

  ngOnInit() {
  }

}
