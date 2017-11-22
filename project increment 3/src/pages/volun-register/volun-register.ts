import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VolunPage } from '../volun/volun';
import { AngularFireAuth } from 'angularfire2/auth';
import { VolunLoginPage } from '../volun-login/volun-login';
import { Camera } from 'ionic-native'
import firebase from 'firebase' 
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
    picdata:any
    picurl:any
    mypicref:any
    
@ViewChild('uname') us;
@ViewChild('pwd') passwd;
volunpage=VolunPage;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
      this.mypicref=firebase.storage().ref('/')
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
    takepic(){
        Camera.getPicture({
        quality:100,
        destinationType:Camera.DestinationType.DATA_URL,
        sourceType:Camera.PictureSourceType.CAMERA,
        encodingType:Camera.EncodingType.PNG,
        saveToPhotoAlbum:true    
        }).then(ImageData=>{
            this.picdata=ImageData;
            this.upload()
        })
    }
  upload(){
      this.mypicref.child(this.uid()).child('pic.png')
      .putString(this.picdata,'base64',{contentType:'image/png'})
      .then(savepic=>{
          this.picurl=savepic.downloadURL
      })
  }
 uid(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

}
