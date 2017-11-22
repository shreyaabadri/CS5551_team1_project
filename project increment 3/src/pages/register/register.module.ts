import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
// import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
   exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}

export class FormsPage {
            constructor() {
      
      }
    }
      