import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared-module/material-module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import swal from 'sweetalert2';
import { UserService } from './services/user.service';
import { ClientService } from './services/clients.service';
import { RoasterService } from './services/roaster.service';
import { CoolStorageModule } from 'angular2-cool-storage';
import { RequestService } from './services/request.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule,
		CoolStorageModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule
  ],
  providers: [
    UserService,
    ClientService, 
    RoasterService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
