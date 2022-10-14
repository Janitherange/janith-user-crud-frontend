import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  isList: number = 0;
  table_interact1: boolean = false;
  table_interact2: boolean = false;
  table_interact3: boolean = false;
  table_interact4: boolean = false;
  table_interact5: boolean = false;
  table_interact6: boolean = false;
  table_interact7: boolean = false;

  constructor() {}
  checkAll(value:any) {
    this.table_interact1 = value;
    this.table_interact2 = value;
    this.table_interact3 = value;
    this.table_interact4 = value;
    this.table_interact5 = value;
    this.table_interact6 = value;
    this.table_interact7 = value;
  }

  ngOnInit(): void {
  }
}
