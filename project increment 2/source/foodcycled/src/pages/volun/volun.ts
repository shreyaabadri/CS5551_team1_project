import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VolunLoginPage } from '../volun-login/volun-login';
import { VolunRegisterPage } from '../volun-register/volun-register';
import { HomePage } from '../home/home';
/*
 * Generated class for the VolunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volun',
  templateUrl: 'volun.html',
})
export class VolunPage {
vlpage=VolunLoginPage;
vrpage=VolunRegisterPage;
homepage=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunPage');
  }

}
