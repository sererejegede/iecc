import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { Router } from '@angular/router';
import { pageloaderService } from 'src/app/services/pageloaderService';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  title: String;

  constructor(private router: Router, private _pageloaderService: pageloaderService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Forms')
  }

}
