import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBackLogin(){
    this.router.navigate([ '/login' ]);
  }

  onRequestPassword(){
    this.router.navigate(['/new-password']);
  }

}
