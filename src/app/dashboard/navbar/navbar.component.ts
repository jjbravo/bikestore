import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  collapsed = false;
  constructor(private authService: AuthService, private router: Router
    ) { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isAuthenticated(): void {
   // return this.authService.isAuthenticated();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
