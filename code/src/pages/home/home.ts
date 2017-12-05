import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { VolunMainPage } from '../volun-main/volun-main';
import { UserDashPage } from '../user-dash/user-dash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(NavController) navCtrl: NavController;
  loginpage;
  constructor(private alertCtrl: AlertController) {
    this.loginpage=LoginPage;
  }
ionViewDidLoad() {
  if ((String(localStorage.getItem('user_role')) != null) && (String(localStorage.getItem('user_role')) == '2')) {
      this.loginpage=VolunMainPage;
  } else if (String(localStorage.getItem('user_role')) == '1') {
    this.loginpage=UserDashPage;
  } else {
    this.loginpage=LoginPage;
  }
}
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
