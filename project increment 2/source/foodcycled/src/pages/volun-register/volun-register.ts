import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VolunPage } from '../volun/volun';
import { AngularFireAuth } from 'angularfire2/auth';
import { VolunLoginPage } from '../volun-login/volun-login';
/**
 * Generated class for the VolunRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volun-register',
  templateUrl: 'volun-register.html',
})
export class VolunRegisterPage {
@ViewChild('uname') us;
@ViewChild('pwd') passwd;
volunpage=VolunPage;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunRegisterPage');
  }
   alert(message: string){
     this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  registerVolun()
  {
  this.fire.auth.createUserWithEmailAndPassword(this.us.value,this.passwd.value)
  .then(data => {
  console.log('got data' , data);
  this.alert('Registered!');
  this.navCtrl.setRoot( VolunLoginPage );
  })
  .catch(error => {
  console.log('got an error', error);
  this.alert(error.message);
  });
  console.log('Would register user with ', this.us.value, this.passwd.value);
  }

}
