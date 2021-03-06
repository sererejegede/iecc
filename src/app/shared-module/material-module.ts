import { NgModule } from '@angular/core';
import {
	MatDatepickerModule,
	MatNativeDateModule,
	MatButtonModule,
	MatCheckboxModule,
	MatProgressSpinnerModule,
	MatError,
	MatDatepickerToggle,
	MatInputModule,
	MatAutocompleteModule,
	MatOptionModule,
	MatTabsModule,
	MatListModule,
	MatSelectBase,
	MatSelectModule,
	MatRadioModule,
	MatPaginatorModule,
	MatDialogModule,
	MatButtonToggleModule,
	MatTooltipModule,
	MatCardModule,
	MatIconModule,
	MatFormFieldModule,
	MatBadgeModule,
	MatTableModule,
	MatMenuModule,
	MatExpansionModule,
	MatSlideToggleModule,
	MatProgressBarModule,
	MatSidenavModule,
	MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [],
	imports: [
		MatNativeDateModule,
		MatDatepickerModule,
		MatButtonModule,
		MatRadioModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatAutocompleteModule,
		MatOptionModule,
		MatPaginatorModule,
		MatSelectModule,
		MatListModule,
		MatRadioModule,
		MatTabsModule,
		MatDialogModule,
		MatButtonToggleModule,
		MatTooltipModule,
		MatCardModule,
		MatIconModule,
		MatFormFieldModule,
		MatBadgeModule,
		MatTableModule,
		MatMenuModule,
		MatExpansionModule,
		MatSlideToggleModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatToolbarModule,
		MatMomentDateModule,
		DragDropModule
	],
	exports: [
		MatNativeDateModule,
		MatDatepickerModule,
		MatButtonModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatAutocompleteModule,
		MatOptionModule,
		MatDatepickerToggle,
		MatPaginatorModule,
		MatSelectModule,
		MatRadioModule,
		MatListModule,
		MatTabsModule,
		MatDialogModule,
		MatButtonToggleModule,
		MatTooltipModule,
		MatCardModule,
		MatIconModule,
		MatFormFieldModule,
		MatBadgeModule,
		MatTableModule,
		MatMenuModule,
		MatExpansionModule,
		MatSlideToggleModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatToolbarModule,
		MatMomentDateModule,
		DragDropModule
	],
	providers: []
})
export class MaterialModule {}
