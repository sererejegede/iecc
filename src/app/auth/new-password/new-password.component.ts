import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  hide = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChangePassword() {
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Password Changed Successful',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/login']);
  }

  onBackLogin(){
    this.router.navigate([ '/login' ]);
  }
}
