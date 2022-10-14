import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.css']
})
export class SidebarButtonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  async loadDash(){
    await this.router.navigateByUrl("", {replaceUrl: true})
  }
}
