import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private accountService: AccountService

    ) { }

  ngOnInit(): void {

  }

  login(): void {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
    .subscribe((res: any) => {
      console.warn('res ok Login ', res);
      Swal.fire('Login ', ` has iniciado sesión exitosamente`, 'success');
     // this.router.navigate(['/dashboard']);
    }, err => {
      if (err.status === 400) {
        Swal.fire('Login', 'Usuario o contraseña incorrectos', 'error');
      }
    });
  }
}
