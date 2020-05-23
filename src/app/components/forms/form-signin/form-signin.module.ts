import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSigninComponent } from './form-signin.component';
import { FormModule } from '../form/form.module';
import { InputModule } from '../controls/input/input.module';



@NgModule({
  declarations: [FormSigninComponent],
  imports: [
    CommonModule,
    FormModule,
    InputModule
  ],
  exports: [
    FormSigninComponent
  ]
})
export class FormSigninModule { }
