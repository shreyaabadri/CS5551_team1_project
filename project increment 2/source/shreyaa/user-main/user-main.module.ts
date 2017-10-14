import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMainPage } from './user-main';

@NgModule({
  declarations: [
    UserMainPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMainPage),
  ],
})
export class UserMainPageModule {}
