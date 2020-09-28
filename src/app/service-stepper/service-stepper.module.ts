import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';

import { ServiceStepperComponent } from './service-stepper.component';
import { ChildServiceComponent } from './components/child-service/child-service.component';
import { StepperService } from './services/stepper.service';


@NgModule({
  declarations: [ServiceStepperComponent, ChildServiceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    RouterModule.forChild([
      { path: "", component: ServiceStepperComponent }
    ])
  ],
  providers: [StepperService]
})
export class ServiceStepperModule { }
