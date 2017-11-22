import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
   exports: [
    LoginPage
  ],
  providers: [PeopleServiceProvider],
})
export class LoginPageModule {}
