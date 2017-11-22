import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunMainPage } from './volun-main';

@NgModule({
  declarations: [
    VolunMainPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunMainPage),
  ],
})
export class VolunMainPageModule {}
