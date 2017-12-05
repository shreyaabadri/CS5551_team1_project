import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunMainPage } from './volun-main';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';

@NgModule({
  declarations: [
    VolunMainPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunMainPage),
  ],
	providers: [PeopleServiceProvider]
})
export class VolunMainPageModule {}
