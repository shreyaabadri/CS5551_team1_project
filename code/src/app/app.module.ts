import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';

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
import { UserMainPage,ModalContentPage } from '../pages/user-main/user-main';
import { SplashPage } from '../pages/splash/splash';
import { FinalPage } from '../pages/final/final';
import { UserDashPage } from '../pages/user-dash/user-dash';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { FeedbackPage } from '../pages/feedback/feedback';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Camera } from "@ionic-native/camera";
import { EventProvider } from '../providers/event/event';
import { UserData } from '../providers/user-data';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { PeopleServiceProvider } from '../providers/people-service/people-service';

export const firebaseAuth = {
    apiKey: "AIzaSyAnfzeSZ4ZudLkTcmLTFbnFInzxRNJ3d-k",
    authDomain: "foodcycled-f1ff0.firebaseapp.com",
    databaseURL: "https://foodcycled-f1ff0.firebaseio.com",
    projectId: "foodcycled-f1ff0",
    storageBucket: "foodcycled-f1ff0.appspot.com",
    messagingSenderId: "96928136513"
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
    UserMainPage,
    SplashPage,
    FinalPage,
    ModalContentPage,
    UserDashPage,
    FeedbackPage,
    ThankyouPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule,
    IonicStorageModule.forRoot()
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
    UserMainPage,
    SplashPage,
    FinalPage,
    ModalContentPage,
    UserDashPage,
    FeedbackPage,
    ThankyouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Camera,
    UserData,
    EventProvider,
    GooglePlus,
    PeopleServiceProvider
  ]
})
export class AppModule {}
