import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }



  constructor() {

  }

  ngOnInit(): void {
  }

}
