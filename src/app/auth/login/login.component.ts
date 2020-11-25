import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/*import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { LoginService } from './login.service';
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
  /*  private loginService: LoginService,
    private router: Router,
    private accountService: AccountService
*/
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: false
    });
   }

  ngOnInit(): void {
   /* if (this.accountService.existToken()) {
      this.router.navigate(['/dashboard']);
    }*/
  }

  login(): any {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      /* this.loginService.login(this.loginForm.value)
         .subscribe((res: any) => {
           console.warn('res ok Login ', res);
           Swal.fire('Login ', ` has iniciado sesión exitosamente`, 'success');
           // this.router.navigate(['/dashboard']);
         }, err => {
           if (err.status === 400 || err.status === 401) {
             Swal.fire('Login', 'Usuario o contraseña incorrectos', 'error');
           }
         }); */
      if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === '12345') {
        return 'login_valid';
      } else {
        return 'login_invalid';
      }
    } else {
      return 'invalid_form';
    }


  }
}
