import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormModuleRoute } from './forms.routes';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { MarChartComponent } from './mar-chart/mar-chart.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MaterialModule } from 'src/app/shared-module/material-module';
import { NewMedicationComponent } from './mar-chart/new-medication/new-medication.component';
import { EditMedicationComponent } from './mar-chart/edit-medication/edit-medication.component';
import { AbcChartComponent } from './abc-chart/abc-chart.component';
import { NewAbcRecordComponent } from './abc-chart/new-abc-record/new-abc-record.component';
import { ObservationChartComponent } from './observation-chart/observation-chart.component';
import { NewObservationChartComponent } from './observation-chart/new-observation-chart/new-observation-chart.component';
import { SupportPlanChartComponent } from './support-plan-chart/support-plan-chart.component';

@NgModule({
    declarations:[FormsComponent, FormListComponent, MarChartComponent, NewMedicationComponent, EditMedicationComponent, AbcChartComponent, NewAbcRecordComponent, ObservationChartComponent, NewObservationChartComponent, SupportPlanChartComponent],
    imports: [CommonModule, FormModuleRoute, FullCalendarModule, MaterialModule],
    providers: [pageloaderService]
})

export class FormModule {}