import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'inergio-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  rangeDates: Date[] | null;
  @Output() dateRange = new EventEmitter();
  @ViewChild('datepicker') datepicker: any;
  @Input() dateFormat = 'mm/dd/yy';
  @Input() placeholderText = 'Select Date Range';
  @Input() showFooter = false;
  @Input() showDateTime = false;
  @Input() rangeDateTime: any;
  @ViewChild('calendar') calendar: Calendar

  onApply() {
    if (!this.showDateTime) {
      if (this.rangeDates?.length === 2) {
        this.dateRange.emit({ startDate: this.rangeDates[0].valueOf(), endDate: this.rangeDates[1].valueOf() });
        this.datepicker.overlayVisible = false;
      }
    } else {
      this.calendar.hideOverlay();
      this.dateRange.emit(this.rangeDateTime);
    }
  }

  onClear() {
    this.datepicker.overlayVisible = false;
    this.rangeDates = null;
    this.dateRange.emit({ startDate: null, endDate: null });
  }

  // onBlur(){

  // }
}
