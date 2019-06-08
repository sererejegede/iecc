import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const SETTINGMODULE_ROUTES: Routes = [
    {
        path: '', component: SettingsComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: 'change-password', component: ChangePasswordComponent },
        ]
    }
];

export const SettingModuleRoute = RouterModule.forChild(SETTINGMODULE_ROUTES);