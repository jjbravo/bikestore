import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.styl']
})
export class MainDashboardComponent implements OnInit {
  collapsedSideBar: boolean;

  constructor() {
   
   }

  ngOnInit(): void {
    this.collapsedSideBar = true;
  }

  receiveCollapsed($event: any): void {
    this.collapsedSideBar = $event;
    console.log('event ',this.collapsedSideBar);
  }
}
