import { RouterModule, Routes, Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormListComponent } from './form-list/form-list.component';
import { MarChartComponent } from './mar-chart/mar-chart.component';
import { AbcChartComponent } from './abc-chart/abc-chart.component';
import { ObservationChartComponent } from './observation-chart/observation-chart.component';
import { SupportPlanChartComponent } from './support-plan-chart/support-plan-chart.component';

const FORMSMODULE_ROUTES: Routes = [
    {
        path: '', component: FormsComponent,
        children: [
            { path: '', redirectTo: 'form-list', pathMatch: 'full' },
            { path: 'form-list', component: FormListComponent },
            { path: 'mar-chart', component: MarChartComponent },
            { path: 'abc-chart', component: AbcChartComponent },
            { path: 'observation-chart', component: ObservationChartComponent },
            { path: 'support-plan-chart', component: SupportPlanChartComponent }
        ]
    }
];

export const FormModuleRoute = RouterModule.forChild(FORMSMODULE_ROUTES);