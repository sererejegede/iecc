import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { pageloaderService } from '../services/pageloaderService';
import { Router } from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-core-modules',
  templateUrl: './core-modules.component.html',
  styleUrls: ['./core-modules.component.scss']
})
export class CoreModulesComponent implements OnInit {
  title: String;

  user;

  open = true;
  close = false;

  constructor(
    private _locker: CoolLocalStorage,
    private _pageloaderService: pageloaderService,
    private router: Router
  ) {
    this._pageloaderService.getTitle().subscribe(appTitle => {
      this.title = appTitle;
    });
  }

  ngOnInit() {
    this.user = this._locker.getObject('selectedUser');
    console.log(this.user);
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

  // onShowProfile() {
  //   this.router.navigate(['/core-module/profile']);
  // }

  onShowNotification() {
    this.router.navigate(['/core-module/notification']);
  }

  onOpenChat() {
    this.router.navigate(['/core-module/chat']);
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
