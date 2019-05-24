import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModulesComponent } from './core-modules.component';
import { CoreModuleRoute } from './core-modules.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared-module/material-module';
import { pageloaderService } from '../services/pageloaderService';
import { ProfileComponent } from './profile/profile.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';
import { StaffTrackingComponent } from './staff-tracking/staff-tracking.component';
import { RequestComponent } from './request/request.component';
import { NewRequestComponent } from './request/new-request/new-request.component';


@NgModule({
    declarations: [CoreModulesComponent, DashboardComponent, ProfileComponent, NotificationComponent, StaffTrackingComponent, RequestComponent, NewRequestComponent],
    imports: [CommonModule, CoreModuleRoute, MaterialModule, HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyChkzU73DZa-DM-JfpmEO1k4PCW8xX98c4'
        })],
    providers: [pageloaderService]
})
export class CoreModule { }