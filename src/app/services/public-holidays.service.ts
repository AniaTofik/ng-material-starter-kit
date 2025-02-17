import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HolidayModel } from '../models/holiday.model';
import {ProductModel} from "../models/product.model";

@Injectable()
export class PublicHolidaysService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<HolidayModel[]> {
    return this._httpClient.get<HolidayModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US', );
  }
}
