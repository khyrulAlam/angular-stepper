import { Component, OnInit, Renderer2 } from '@angular/core';
import { IService, IServiceList } from './models/b-services';
import { StepperService } from './services/stepper.service';

@Component({
  selector: 'app-service-stepper',
  templateUrl: './service-stepper.component.html',
  styleUrls: ['./service-stepper.component.scss']
})
export class ServiceStepperComponent implements OnInit {

  public serviceList: IServiceList[];
  public staffList: string[];

  public selectedItem: string = ""
  public startTime: string = "11:00";
  public pickServices: any[] = []

  constructor(private renderer: Renderer2, private stepperService: StepperService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.stepperService.getServicesList().subscribe((serviceData: IServiceList[]) => {
      this.serviceList = serviceData;
    });
    this.stepperService.getStaffList().subscribe((staffData: string[]) => {
      this.staffList = staffData;
    })
  }

  timeSet(event) {
    this.startTime = event;
  }

  selectOption(option) {
    if (option.value) {
      this.animationFadeIn();
      let obj: IService = {
        duration: option.value.duration,
        serviceName: option.value.name,
        staffName: "John doe",
        startTime: this.startTime,
        durationValue: option.value.durationValue
      }
      this.pickServices.push(obj);
      this.setCurrentPickTime(option.value.durationValue, 'plus');
      setTimeout(() => {
        this.selectedItem = "";
      }, 0)
    }
  }

  removeService(event) {
    this.pickServices.splice(event.index, 1);
    this.setCurrentPickTime(event.service.durationValue, 'minus');
  }

  setCurrentPickTime(durationValue: number, direction: string) {
    let nextStartTime;
    if (direction === 'plus') {
      nextStartTime = (Number(this.startTime.replace(':', ".")) +
        Number(durationValue)).toFixed(2).replace(".", ":");
    } else {
      nextStartTime = (Number(this.startTime.replace(':', ".")) -
        Number(durationValue)).toFixed(2).replace(".", ":");
    }
    this.startTime = nextStartTime;
  }

  animationFadeIn() {
    let target = document.querySelector("#rootInput");
    this.renderer.addClass(target, "animate-left");
    setTimeout(() => {
      this.renderer.removeClass(target, "animate-left");
    }, 1000)
  }
}
