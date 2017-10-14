import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { VolunMainPage } from '../volun-main/volun-main';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { VolunRegisterPage } from '../volun-register/volun-register';
import { VolunPage } from '../volun/volun';
/**
 * Generated class for the VolunLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volun-login',
  templateUrl: 'volun-login.html',
})
export class VolunLoginPage {
@ViewChild('uname') us;
	@ViewChild('pwd') passwd;
vrpage=VolunRegisterPage;
volunpage=VolunPage;
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunLoginPage');
  }
alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInVolun() {
    this.fire.auth.signInWithEmailAndPassword(this.us.value, this.passwd.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! Logged in');
      this.navCtrl.setRoot( VolunMainPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.us.value, this.passwd.value);
    }

fblogin(){
this.facebook.login(['email']).then(res=>{
const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
firebase.auth().signInWithCredential(fc).then(fs=>{
alert("firebase sec")
}).catch(ferr=>{
alert("firebase errc")
})

}).catch(err=>{
 alert(JSON.stringify(err))
})
}
}
