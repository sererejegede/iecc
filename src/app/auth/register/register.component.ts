import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CoolLocalStorage } from 'angular2-cool-storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  user: any = <any>{};
  userForm: FormGroup;
  hide = true;
  
  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UserService) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('auth-layout');
    this.userForm = this._formBuilder.group({
      firstName: ['', [<any>Validators.required, Validators.minLength(3)]],
      lastName: ['', [<any>Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      telephoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^\+?([0-9]+)\)?[-. ]?([0-9]+)\)?[-. ]?([0-9]+)[-. ]?([0-9]+)$/)])],
      password: ['', [<any>Validators.required]],
      address: ['', [<any>Validators.required]]
    })
  }

  onRegister() {
    this._userService.postUser(this.userForm.value).subscribe(
      (payload) => {
        swal.fire({
          type: 'success',
          title: 'Registration Successful',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(payload);
        this._userService.selectUser(payload);
        this.router.navigate(['/core-module']);
      },
      (error) => {
        swal.fire({
          type: 'warning',
          title: 'Error Occur while registering',
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }


  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
		body.classList.remove('auth-layout');
  }


}
