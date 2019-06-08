import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared-module/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoolStorageModule } from 'angular2-cool-storage';
import { BroadCastSelectedUserService } from 'src/app/services/broadcast-selected-user.service';
import { SettingModuleRoute } from './settings.route';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PolicyProcedureComponent } from './policy-procedure/policy-procedure.component';


@NgModule({
  declarations: [SettingsComponent, ProfileComponent, ChangePasswordComponent, PolicyProcedureComponent],
  imports: [CommonModule, SettingModuleRoute, MaterialModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    CoolStorageModule],
  providers: [BroadCastSelectedUserService]
})
export class SettingsModule { }