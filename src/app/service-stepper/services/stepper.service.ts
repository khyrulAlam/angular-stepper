import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StepperService {

  constructor(private _http: HttpClient) { }

  getServicesList() {
    return this._http.get('https://raw.githubusercontent.com/khyrulAlam/angular-stepper/master/src/assets/data/services-list.json')
  }

  getStaffList() {
    return this._http.get("https://raw.githubusercontent.com/khyrulAlam/angular-stepper/master/src/assets/data/staff-list.json");
  }
}
