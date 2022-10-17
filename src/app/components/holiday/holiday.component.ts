import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-holiday',
  styleUrls: ['./holiday.component.scss'],
  templateUrl: './holiday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayComponent {
holidays$: Observable<HolidayModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
