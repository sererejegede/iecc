import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  backToLogin() {
    this.router.navigate(['/login']);
  }

}
