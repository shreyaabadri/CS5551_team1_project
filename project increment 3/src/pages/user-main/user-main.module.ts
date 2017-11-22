import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { UserMainPage } from './user-main';

@NgModule({
  declarations: [
    UserMainPage,
  ],
  imports: [
    BrowserModule,
	IonicPageModule.forChild(UserMainPage),
    HttpModule
  ],
   providers: [PeopleServiceProvider],
})
export class UserMainPageModule {}
export class ModalContentPage {}
