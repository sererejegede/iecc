import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  auth: any = <any>{};
  loginForm: FormGroup;
  hide = true;

  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private _locker: CoolLocalStorage,
    private _userService: UserService) { }

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
    console.log(this.loginForm);
    // const email = this.loginForm.controls['email'].value;
    // const password = this.loginForm.controls['password'].value;
    this._userService.loginUser(this.loginForm.value).subscribe(
      (payload: any) => {
        swal.fire({
          type: 'success',
          title: 'Login Successful',
          showConfirmButton: true,
          timer: 1500
        });
        console.log(payload);
        this._userService.selectUser(payload);
        this._locker.setObject('selectedUser', payload);
        this.router.navigate(['/core-module']);
      },
      (error) => {
        swal.fire({
          type: 'warning',
          title: 'Login Failed, Plese check your Password',
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



