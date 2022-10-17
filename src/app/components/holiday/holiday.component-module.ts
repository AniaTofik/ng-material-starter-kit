import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidayComponent } from './holiday.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [HolidayComponent],
  providers: [],
  exports: [HolidayComponent]
})
export class HolidayComponentModule {
}
