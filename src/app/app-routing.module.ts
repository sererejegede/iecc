import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'core-module', pathMatch: 'full' },
      {
        path: 'core-module', 
        loadChildren: './core-modules/core-modules.module#CoreModule'
      }
    ]
  }
];


export const Routing = RouterModule.forRoot(routes, { useHash: true });

