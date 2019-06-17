import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  auth: any = <any>{};
  loginForm: FormGroup;
  hide = true;

  btnDisabled: boolean = false;

  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private _locker: CoolLocalStorage,
    private _userService: UserService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('auth-layout');
    this.loginForm = this._formBuilder.group({
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }

  onForget() {
    this.router.navigate(['/forget-password']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    this.ngxService.start();
    this._userService.loginUser(this.loginForm.value).subscribe(
      (payload: any) => {
        this.ngxService.stop();
        swal.fire({
          type: 'success',
          title: 'Login Successful',
          showConfirmButton: true,
          timer: 1500
        });
        console.log(payload);
        this.btnDisabled = true;
        this._userService.selectUser(payload);
        this._locker.setObject('selectedUser', payload);
        this.router.navigate(['/core-module']);
      },
      (error) => {

        this.ngxService.stop();
        swal.fire({
          type: 'warning',
          title: 'Login Failed, Incorrect Username or Password',
          // description:'',
          showConfirmButton: false,
          timer: 1500
        });
      }
    )

  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('auth-layout');
  }

}



