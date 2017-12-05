import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ViewController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { FinalPage } from '../final/final';
import { Camera } from 'ionic-native'
import firebase from 'firebase'
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDashPage } from '../user-dash/user-dash';

@IonicPage()
@Component({
  selector: 'page-user-main',
  templateUrl: 'user-main.html',
    providers: [PeopleServiceProvider]
})

export class UserMainPage {
    picdata:any
    picurl:any
    mypicref:any
  public cuisine: any;
  public title: any;
  public prep_date: any;
  public expiry_date: any;
  public spice_value: any;
  public people: any;
  
  private myForm : FormGroup;
        
  options:any;
  captureDataUrl: string;
  names: Array<{title: string}>;
  cuisine_names: Array<{title: string}>;


//  homepage=HomePage;
//  finalPage=FinalPage;
// constructor(  ) {
//     this.todo = this.formBuilder.group({
//        emaill: ['', Validators.compose([
//        Validators.required, Validators.email
//        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
//      ])],
//       // emaill: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
//       password: [''],
//     });
//   }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController,
    public modalCtrl: ModalController, private formBuilder: FormBuilder,
     public peopleServiceProvider: PeopleServiceProvider,
     public http: Http
     ) {
    this.myForm = this.formBuilder.group({mapStyle: ['']})
    
      this.mypicref=firebase.storage().ref('/')
      this.alertCtrl = alertCtrl;

      this.names = [
        {title: 'Pizza'}, {title: 'Burger'}, {title: 'Chocolates'}, {title: 'Rice'},
        {title: 'Chicken'}, {title: 'Fish'}, {title: 'Sandwich'}, {title: 'Mashed Potatoes'},
        {title: 'Tortilla'},{title: 'Fruits'}, {title: 'vegetables '}, {title: 'bread'},
        {title: 'fries'},{title: 'onion rings'}, {title: 'hot dog '}, {title: 'eggs'},
        {title: 'Pork'},{title: 'Beef'}, {title: 'Waffles'},{title: 'Pancakes'}
        ,
      ]
      this.cuisine_names = [
        {title: 'American'}, {title: 'Chinese'}, {title: 'French'}, {title: 'Italian'},
        {title: 'Indian  '}, {title: 'Mexican'}, {title: 'Fast food'}, {title: 'Steak'}, 
        {title: 'Barbeque'}, {title: 'Fondue'}, {title: 'Seafood'}, {title: 'Brazilian'}, 
        {title: 'Japanese'}, {title: 'Pizza'}, {title: 'Sushi'}, {title: 'Thai'}
      ]
  }

  get_info(){
    let modal = this.modalCtrl.create(ModalContentPage, {name: this.title});
    modal.present();
  }

  place_order(){
    this.peopleServiceProvider.place_order(this.cuisine, this.title, this.prep_date, this.expiry_date, this.spice_value)
    .then(data => {
      this.navCtrl.goToRoot(UserDashPage);
    });
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
  }}

@Component({
  providers: [PeopleServiceProvider],
  template: `<ion-header>
              <ion-toolbar>
                <ion-title>
                  Details
                </ion-title>
                <ion-buttons start>
                  <button ion-button (click)="dismiss()">
                    <span ion-text color="primary" showWhen="ios">Cancel</span>
                    <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
                  </button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ion-content >
              <ion-list>
                  <ion-item *ngIf="cuisine.image">
                    <ion-avatar item-left>
                     <img src="{{cuisine.image}}">
                    </ion-avatar>
                     <h2>{{title}}</h2>
                    <p>{{cuisine.label}}</p>
                  </ion-item>
                  <ion-item *ngFor="let item of cuisine.digest">
                    {{item.label}}
                    <ion-note item-right>
                      {{item.total}} {{item.unit}}
                    </ion-note>
                  </ion-item>
              </ion-list>
            </ion-content>`
})
export class ModalContentPage {
  character;
  cuisine;
  title;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public peopleServiceProvider: PeopleServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.cuisine = {'digest': []}
    let loading = this.loadingCtrl.create({
      content: 'Fetching Details. Please wait...'
    });
    
    loading.present();
    
    this.title = this.params.get('name');

    this.peopleServiceProvider.loadin(this.title)
        .then(data => {
          loading.dismiss();
          console.log(data['hits'])
          var resp = data['hits'].sort(function(a,b) { return parseFloat(a.recipe.yield) - parseFloat(b.recipe.yield) } )
          this.cuisine = resp[resp.length - 1].recipe;
        });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}