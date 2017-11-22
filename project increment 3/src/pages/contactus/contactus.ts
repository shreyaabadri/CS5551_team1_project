import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
homepage=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log('Constrruct');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
    // localStorage.getItem('access_token');

  }



}
