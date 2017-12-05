import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserMainPage } from '../user-main/user-main';
import { VolunMainPage } from '../volun-main/volun-main';
import { UserDashPage } from '../user-dash/user-dash';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserData } from '../../providers/user-data';
import 'rxjs/add/operator/catch';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
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
    role;
    
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,
   public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook,
   public googlePlus:GooglePlus, public userData: UserData, public peopleServiceProvider: PeopleServiceProvider) {
    this.role = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.userData.is_logged_in();
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

signInUser() {
    this.peopleServiceProvider.signIn(this.user.value, this.password.value, this.role)
    .then( data => {
      if (data['status'] == 'success')
      {
        this.userData.login(data['user']);
      if ((String(localStorage.getItem('user_role')) != null) && (String(localStorage.getItem('user_role')) == '2')) {
          this.navCtrl.setRoot(VolunMainPage);
        } else if ((String(localStorage.getItem('user_role')) != null) && (String(localStorage.getItem('user_role')) == '1')) {
          this.navCtrl.setRoot(UserDashPage);
      }        
        // this.navCtrl.setRoot(UserMainPage);
      } else {
        this.alert('Wrong Data Provided');
      }
    }).catch( error => {
      this.alert(error.message);
    })
  }
    
    glogin(){
        this.googlePlus.login({
            'webClientId':'718609963148-2pdaui6tp558s6p2gecfliijsms7hfaj.apps.googleusercontent.com',
            'offline':true
        }).then(res=>{
            firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
                .then(success=>{
                  console.log('amar firebase')
                this.navCtrl.setRoot(UserMainPage);
      })
      .catch( error => {
        console.log('amar firebase 2');
                alert("got an error")
            })
    }).catch(err => {this.navCtrl.setRoot(UserMainPage); 
    console.log('amar firebase 3')});
        }
    

fblogin(){
this.facebook.login(['email']).then(res=>{
const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
firebase.auth().signInWithCredential(fc).then(fs=>{
this.alert('Success! Logged in');
this.navCtrl.setRoot( UserMainPage );
}).catch(ferr=>{
alert("got an error")
})

}).catch(err=>{
 alert(JSON.stringify(err))
})
}
}
