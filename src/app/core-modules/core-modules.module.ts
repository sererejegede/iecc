import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModulesComponent } from './core-modules.component';
import { CoreModuleRoute } from './core-modules.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from '../shared-module/material-module';


@NgModule({
    declarations: [CoreModulesComponent, DashboardComponent, TopBarComponent],
    imports: [CommonModule, CoreModuleRoute, MaterialModule]
})
export class CoreModule { }