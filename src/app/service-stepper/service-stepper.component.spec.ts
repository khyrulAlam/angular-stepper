import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStepperComponent } from './service-stepper.component';

describe('ServiceStepperComponent', () => {
  let component: ServiceStepperComponent;
  let fixture: ComponentFixture<ServiceStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
