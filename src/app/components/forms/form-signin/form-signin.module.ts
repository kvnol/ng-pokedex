import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSigninComponent } from './form-signin.component';
import { FormModule } from '../form/form.module';
import { InputModule } from '../controls/input/input.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FormSigninComponent],
  imports: [
    CommonModule,
    FormModule,
    InputModule,
    RouterModule
  ],
  exports: [
    FormSigninComponent
  ]
})
export class FormSigninModule { }
