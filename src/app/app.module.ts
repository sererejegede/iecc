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
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';

import swal from 'sweetalert2';
import { UserService } from './services/user.service';
import { ClientService } from './services/clients.service';
import { RoasterService } from './services/roaster.service';
import { CoolStorageModule } from 'angular2-cool-storage';
import { RequestService } from './services/request.service';
import { TrainingService } from './services/training.service';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

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
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,
  ],
  providers: [
    UserService,
    ClientService,
    RoasterService,
    RequestService,
    TrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
