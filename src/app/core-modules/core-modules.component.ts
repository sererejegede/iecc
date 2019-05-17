import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-core-modules',
  templateUrl: './core-modules.component.html',
  styleUrls: ['./core-modules.component.scss']
})
export class CoreModulesComponent implements OnInit {

  open = true;
  close = false;

  constructor() { }

  ngOnInit() {
  }


  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav").style.boxShadow = "10px 4px 15px rgba(73, 82, 104, 0.1)";
    document.getElementById("mySidenav").style.borderRight = "none";
    this.open = false;
    this.close = true;
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "70px";
    document.getElementById("mySidenav").style.boxShadow = "none";
    document.getElementById("mySidenav").style.borderRight = "1px solid rgba(158, 167, 187, 0.2)";
    this.open = true;
    this.close = false;
  }
}
