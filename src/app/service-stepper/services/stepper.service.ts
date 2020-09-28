import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StepperService {

  constructor(private _http: HttpClient) { }

  getServicesList() {
    return this._http.get('../assets/data/services-list.json')
  }

  getStaffList() {
    return this._http.get("../assets/data/staff-list.json");
  }
}
