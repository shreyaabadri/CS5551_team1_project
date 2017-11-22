import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { VolunMainPage } from '../volun-main/volun-main';
import { HomePage } from '../home/home';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
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
@ViewChild('username') username;
	@ViewChild('password') password;
  vol_password;
  vol_user;
vrpage=VolunRegisterPage;
volunpage=VolunPage;
homepage = HomePage;
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook, public googlePlus:GooglePlus) {
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
    this.fire.auth.signInWithEmailAndPassword(this.vol_user, this.vol_password)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.navCtrl.setRoot( VolunMainPage );
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.vol_user, this.vol_password);
    }
 glogin(){
        this.googlePlus.login({
            'webClientId':'718609963148-2pdaui6tp558s6p2gecfliijsms7hfaj.apps.googleusercontent.com',
            'offline':true
        }).then(res=>{
            firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
                .then(success=>{
                this.navCtrl.setRoot(VolunMainPage);
      })
      .catch( error => {
                alert("got an error")
            })
    }).catch(err => {this.navCtrl.setRoot(VolunMainPage)});
        }
fblogin(){
this.facebook.login(['email']).then(res=>{
const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
firebase.auth().signInWithCredential(fc).then(fs=>{
this.alert("Success!logged in");
this.navCtrl.setRoot(VolunMainPage);
}).catch(ferr=>{
alert("got an error")
})

}).catch(err=>{
 alert(JSON.stringify(err))
})
}
}
