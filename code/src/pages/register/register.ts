import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import { UserData } from '../../providers/user-data';
import { UserMainPage } from '../user-main/user-main';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

// export class RegisterPage {
//       todo: FormGroup;
//       title : FormControl;
//       description : FormControl;
//       constructor(private formBuilder: FormBuilder) {
//       this.title = new FormControl("", Validators.compose([Validators.required, Validators.minLength(5)]));
//       this.description = new FormControl();
//         this.todo = formBuilder.group({
//           title: this.title,
//           description: this.description
//         });
//         this.todo.valueChanges.subscribe(data=>this.todoOnDataChange(data));
//       }
//       todoOnDataChange(data: any): void {
//          console.log(data);
//       }
//       logForm(){
//         console.log(this.todo.value)
//       }
//     }
     
export class RegisterPage {
@ViewChild('username') username;
// @ViewChild('password') password;
  homepage=HomePage;
emaill;
passwordd;
phone;
name;
address;
house;
code;
  private todo : FormGroup;
// public static EMAIL_REGEX = ;
  constructor( private formBuilder: FormBuilder, public navParams: NavParams,
   private fire: AngularFireAuth, public navCtrl: NavController, public peopleServiceProvider: PeopleServiceProvider, public userData: UserData) {
    this.todo = this.formBuilder.group({
       emaill: ['', Validators.compose([
       Validators.required, Validators.email
       // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
     ])],
      name: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      passwordd: ['', Validators.compose([
       Validators.required, Validators.minLength(4)])],
      phone: ['', Validators.compose([
       Validators.required])],
      address: ['', Validators.compose([
       Validators.required])],
      role: ['', Validators.compose([
       Validators.required])],
      code: ['', Validators.compose([
       Validators.required])]
    });
  }

  todoOnDataChange(data: any): void {
         console.log(data);
      }

      logForm(){
        console.log(this.todo.value)
      }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  registerUser() {
   this.peopleServiceProvider.signUp(this.todo.value.name,this.todo.value.emaill,this.todo.value.passwordd, this.todo.value.phone, this.todo.value.address, this.todo.value.code, this.todo.value.role  )
    .then( data => {
      this.userData.login(data['user']);
      this.navCtrl.setRoot(LoginPage);
    })
    .catch( error => {
      alert(error.message);
    })
  }
  // this.fire.auth.createUserWithEmailAndPassword(this.emaill,this.password.value)
  // .then(data => {
  // console.log('got data' , data);
  // // this.alert('Registered!');
  // this.navCtrl.setRoot( LoginPage );
  // })
  // .catch(error => {
  // console.log('got an error', error);
  // // this.alert(error.message);
  // });
  // console.log('Would register user with ', this.emaill, this.password.value);
  // }

}
