import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [CommonModule,CalendarModule,FormsModule,ButtonModule],
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }
