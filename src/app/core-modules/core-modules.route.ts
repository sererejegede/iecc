import { RouterModule, Routes } from '@angular/router';
import { CoreModulesComponent } from './core-modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const COREMODULE_ROUTES: Routes = [
    {
        path: '', component: CoreModulesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

export const CoreModuleRoute = RouterModule.forChild(COREMODULE_ROUTES);