import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  title: String;

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
