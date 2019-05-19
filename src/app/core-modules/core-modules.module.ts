import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModulesComponent } from './core-modules.component';
import { CoreModuleRoute } from './core-modules.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared-module/material-module';
import { pageloaderService } from '../services/pageloaderService';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [CoreModulesComponent, DashboardComponent, ProfileComponent],
    imports: [CommonModule, CoreModuleRoute, MaterialModule],
    providers: [pageloaderService]
})
export class CoreModule { }