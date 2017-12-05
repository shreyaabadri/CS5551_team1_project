import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDashPage } from './user-dash';

@NgModule({
  declarations: [
    UserDashPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDashPage),
  ],
})
export class UserDashPageModule {}
