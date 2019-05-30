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
import { ClientsComponent } from './clients/clients.component';
import { RotaComponent } from './rota/rota.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewRosterComponent } from './rota/new-roster/new-roster.component';
import { RotaDetailsComponent } from './rota/rota-details/rota-details.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { PayrollReportComponent } from './payroll-report/payroll-report.component';


@NgModule({
    declarations: [CoreModulesComponent, DashboardComponent, ProfileComponent, NotificationComponent, StaffTrackingComponent, RequestComponent, NewRequestComponent, ClientsComponent, RotaComponent, NewRosterComponent, RotaDetailsComponent, NewClientComponent, ClientDetailsComponent, PayrollReportComponent],
    imports: [CommonModule, CoreModuleRoute, FullCalendarModule, MaterialModule, HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyChkzU73DZa-DM-JfpmEO1k4PCW8xX98c4'
        })],
    providers: [pageloaderService]
})
export class CoreModule { }