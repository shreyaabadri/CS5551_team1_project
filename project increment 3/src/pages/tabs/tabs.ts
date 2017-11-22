import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ContactusPage } from '../contactus/contactus';
import { AboutusPage } from '../aboutus/aboutus';
import { LocationsPage } from '../locations/locations';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = AboutusPage;
  tab2Root: any = LoginPage;
  tab3Root: any = RegisterPage;
  tab4Root: any = LocationsPage;
  tab5Root: any = ContactusPage;
  constructor() {
  }


}
