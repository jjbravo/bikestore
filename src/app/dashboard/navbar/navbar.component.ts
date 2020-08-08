import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';
import { LoginService } from 'src/app/auth/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  collapsed = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private accountService: AccountService

    ) { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
