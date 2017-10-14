import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserMainPage } from '../user-main/user-main';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	@ViewChild('username') user;
	@ViewChild('password') password;
    registerpage=RegisterPage;
    homepage=HomePage;
    
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! Logged in');
      this.navCtrl.push( UserMainPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
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
