import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ViewController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDashPage } from '../user-dash/user-dash';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
 usdash=UserDashPage;
 public rate: any;
 public nam: any;
 private myForm : FormGroup;
ratings: Array<{title: string}>;
names: Array<{title: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController,
    public modalCtrl: ModalController, private formBuilder: FormBuilder,
     public peopleServiceProvider: PeopleServiceProvider,
     public http: Http) {
  this.myForm = this.formBuilder.group({mapStyle: ['']})
   this.ratings = [
        {title: 'Excellent'}, {title: 'Very Good'}, {title: 'Good'}, {title: 'Fair'},
        {title: 'Satisfactory'}
        ]
    this.names = [
        {title: 'Shreya'}, {title: 'Harika'}, {title: 'Snepika'}, {title: 'Navya'}
        ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
