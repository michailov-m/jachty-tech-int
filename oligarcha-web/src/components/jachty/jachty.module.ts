import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { YachtSelectionComponent } from './yacht-selection/yacht-selection.component';
import { YachtPanelComponent } from './yacht-panel/yacht-panel.component';
import { BookingPopupComponent } from './booking-popup/booking-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    YachtSelectionComponent,
    YachtPanelComponent,
    BookingPopupComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    YachtSelectionComponent,
    YachtPanelComponent
  ],
  providers: [
    DatePipe
  ]
})
export class JachtyModule { }
