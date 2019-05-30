import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  hide = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onForget() {
    this.router.navigate(['/forget-password']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Login Successful',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/core-module']);
  }


}



