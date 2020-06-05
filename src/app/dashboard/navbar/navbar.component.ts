import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  collapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  
}
