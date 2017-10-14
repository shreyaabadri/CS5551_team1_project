import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import { MyApp } from './app.component';
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
import {  VolunMainPage } from '../pages/volun-main/volun-main';
import { UserMainPage } from '../pages/user-main/user-main';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseAuth = {
    apiKey: "AIzaSyDzmp2V1yXL8uT0eOD-JX39ZXuG7G-_eWA",
    authDomain: "foodcycled.firebaseapp.com",
    databaseURL: "https://foodcycled.firebaseio.com",
    projectId: "foodcycled",
    storageBucket: "foodcycled.appspot.com",
    messagingSenderId: "718609963148"
  };
firebase.initializeApp(firebaseAuth);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ContactusPage,
    AboutusPage,
    LocationsPage,
    VolunRegisterPage,
    VolunMainPage,
    VolunLoginPage,
    VolunPage,
    UserMainPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ContactusPage,
    AboutusPage,
    LocationsPage,
    VolunRegisterPage,
    VolunMainPage,
    VolunLoginPage,
    VolunPage,
    UserMainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
