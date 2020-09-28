import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IService, IServiceList } from '../../models/b-services';

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.scss']
})
export class ChildServiceComponent implements OnInit {
  @Input('index') index: number;
  @Input('serviceObj') serviceObj: IService;
  @Input('serviceList') serviceList: IServiceList[];
  @Input('staffList') staffList: string[];

  @Output() public removeService: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("<=>", this.serviceObj, this.staffList, this.serviceObj);
  }
  removeItem() {
    this.removeService.emit({ index: this.index, service: this.serviceObj })
  }

}
