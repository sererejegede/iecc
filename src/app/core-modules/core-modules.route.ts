import { RouterModule, Routes } from '@angular/router';
import { CoreModulesComponent } from './core-modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { StaffTrackingComponent } from './staff-tracking/staff-tracking.component';
import { RequestComponent } from './request/request.component';
import { ClientsComponent } from './clients/clients.component';
import { RotaComponent } from './rota/rota.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { PayrollReportComponent } from './payroll-report/payroll-report.component';

const COREMODULE_ROUTES: Routes = [
    {
        path: '', component: CoreModulesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'staff-tracking', component: StaffTrackingComponent },
            { path: 'request', component: RequestComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'client-details', component: ClientDetailsComponent },
            { path: 'rota', component: RotaComponent },
            { path: 'reports', component: PayrollReportComponent }
        ]
    }
];

export const CoreModuleRoute = RouterModule.forChild(COREMODULE_ROUTES);