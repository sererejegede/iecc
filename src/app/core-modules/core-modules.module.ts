import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModulesComponent } from './core-modules.component';
import { CoreModuleRoute } from './core-modules.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared-module/material-module';


@NgModule({
    declarations: [CoreModulesComponent, DashboardComponent],
    imports: [CommonModule, CoreModuleRoute, MaterialModule]
})
export class CoreModule { }