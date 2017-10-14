import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ContactusPage } from '../pages/contactus/contactus';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { LocationsPage } from '../pages/locations/locations';
import { VolunPage } from '../pages/volun/volun';
import { VolunLoginPage } from '../pages/volun-login/volun-login';
import { VolunRegisterPage } from '../pages/volun-register/volun-register';
import { UserMainPage } from '../pages/user-main/user-main';
import { VolunMainPage } from '../pages/volun-main/volun-main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About Us', component: AboutusPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage }, 
      { title: 'Stall Locations', component: LocationsPage },
      { title: 'Volunteer', component: VolunPage },
      { title: 'Contact Us', component: ContactusPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
