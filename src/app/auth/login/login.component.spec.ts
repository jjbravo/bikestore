import {LoginComponent} from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    // let loginService: LoginService;

    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        // loginService = fixture.debugElement.injector.get(LoginService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should detect form is valid', () => {
        fixture.debugElement.nativeElement.querySelector('button').click();
        expect(component.login()).toEqual('invalid_form');
    });

    it('should validate correct user and password', () => {
        /*component.loginForm = formBuilder.group({
            username: 'admin',
            password: '12345',
            rememberMe: false
        });*/

        component.loginForm.patchValue(
            {
                username: 'admin',
                password: '12345',
                rememberMe: false
            }
        );
        fixture.debugElement.nativeElement.querySelector('button').click();
        expect(component.login()).toEqual('login_valid');
    });

    it ('should deny access with incorrect password', () => {
        component.loginForm.patchValue(
            {
                username: 'admin',
                password: '123',
                rememberMe: false
            }
        );
        fixture.debugElement.nativeElement.querySelector('button').click();
        expect(component.login()).toEqual('login_invalid');
    });

});
