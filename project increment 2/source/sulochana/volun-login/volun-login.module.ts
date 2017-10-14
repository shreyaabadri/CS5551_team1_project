import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunLoginPage } from './volun-login';

@NgModule({
  declarations: [
    VolunLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunLoginPage),
  ],
})
export class VolunLoginPageModule {}
