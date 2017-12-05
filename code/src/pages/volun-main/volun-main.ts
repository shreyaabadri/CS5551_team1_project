import { Component ,ViewChild} from '@angular/core';
import { NavController, Slides, LoadingController} from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { UserData } from '../../providers/user-data';
import { UserMainPage } from '../user-main/user-main';
import { UserDashPage } from '../user-dash/user-dash';

@Component({
  selector: 'page-volun-main ',
  templateUrl: 'volun-main.html'
})
export class VolunMainPage {
  user_data;
  user_data_key;
  orders;
  logged;
  loading;
   // @ViewChild(NavController) navCtrl: NavController;
 @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  public vol_root: UserDashPage;
  relationship: string='Notification'
 
  constructor(
   public peopleServiceProvider: PeopleServiceProvider,
   public loadingCtrl: LoadingController,
   public navCtrl: NavController,
   public userData: UserData) {
    this.user_data = localStorage.getItem('user_object');
    this.user_data = JSON.parse(this.user_data);
    this.user_data_key = Object.keys(this.user_data);
    
  	this.tabs=["Notification","History","Profile"];
    this.orders = [];
  }
  onChange(event: any){
    if (event.value == 'Profile')
    {
      this.user_data = localStorage.getItem('user_object');
      this.user_data = JSON.parse(this.user_data)
      this.user_data_key = Object.keys(this.user_data)
    } else if (event.value == 'Notification') {
      
       this.get_notifications();
       // this.loading.dismiss();
    } else if (event.value == 'History') {
        this.orders = [];
        this.loading = this.loadingCtrl.create({
          content: 'Fetching Details. Please wait...'
        });
        this.loading.present();
        var token = localStorage.getItem('access_token');
        this.peopleServiceProvider.get_order_history(token)
        .then( data => {
          this.loading.dismiss();
          this.orders = data['data']
        })
        .catch( error => {
          alert(error.message);
        })
      }
  }
  ionViewDidLoad() {
    this.get_notifications();
    // this.user_data = localStorage.getItem('user_object');
    // this.user_data = JSON.parse(this.user_data)
    // this.user_data_key = Object.keys(this.user_data)
  }
  ionViewDidEnter() {
    // this.get_notifications();
    // this.user_data = localStorage.getItem('user_object');
    // this.user_data = JSON.parse(this.user_data)
    // console.log("user_data")
    // console.log(user_data)
    // this.user_data_key = Object.keys(this.user_data)
  }
  
  update_order(id){
    this.peopleServiceProvider.update_status(id, localStorage.getItem('access_token'))
    .then( data => {
      this.get_notifications();
    })
    .catch( error => {
      alert(error.message);
    })
  }

  get_notifications() {
    this.loading = this.loadingCtrl.create({
          content: 'Fetching Details. Please wait...'
        });
        this.loading.present();
    this.orders = [];
      this.peopleServiceProvider.get_orders(localStorage.getItem('access_token'))
        .then( data => {
          this.loading.dismiss();
          this.orders = data['data']
      })
      .catch( error => {
        this.loading.dismiss();
        alert(error.message);
      })
  };

  // selectTab(index) {  
  //   this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
  //   this.SwipedTabsSlider.slideTo(index, 500);
  // }

  // updateIndicatorPosition() {
  //     // this condition is to avoid passing to incorrect index
  // 	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  // 	{
  // 		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  // 	}
    
  //   }

  // animateIndicator($event) {
  // 	if(this.SwipedTabsIndicator)
  //  	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  // }

 

}

