import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Registration Successful',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/core-module']);
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

}
