import { Component ,ViewChild} from '@angular/core';
import { NavController, Slides, LoadingController} from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';
import { UserData } from '../../providers/user-data';
import { UserMainPage } from '../user-main/user-main';

@Component({
  selector: 'page-user-dash ',
  templateUrl: 'user-dash.html'
})
export class UserDashPage {
  user_data;
  user_data_key;
  orders;
  logged;
  loading;
   // @ViewChild(NavController) navCtrl: NavController;
 @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  relationship: string='History'
 
  constructor(
   public peopleServiceProvider: PeopleServiceProvider,
   public loadingCtrl: LoadingController,
   public navCtrl: NavController,
   public userData: UserData) {
  	this.tabs=["History","Profile"];
    this.orders = [];
    this.get_notifications();
    this.user_data = localStorage.getItem('user_object');
    this.user_data = JSON.parse(this.user_data);
  }
  onChange(event: any){
    if (event.value == 'Profile')
    { } else if (event.value == 'History') {
        this.get_notifications();
    }
  }
  ionViewDidLoad() {
    // this.get_notifications();
   this.update_user_data();
  }
  ionViewDidEnter() {
   }

   update_user_data(){
      this.user_data = localStorage.getItem('user_object');
      this.user_data = JSON.parse(this.user_data)
      this.user_data_key = Object.keys(this.user_data)
   }
  
  update_order(id){
    this.peopleServiceProvider.update_status(id, localStorage.getItem('access_token'))
    .then( data => {
      this.get_notifications();
    })
    .catch( error => {
      console.log('got an error', error);
      alert(error.message);
    })
  }

  get_notifications() {
    console.log('get_notifications')
    var token = localStorage.getItem('access_token');
    this.loading = this.loadingCtrl.create({
      content: 'Fetching Details. Please wait...'
    });
    this.loading.present();
    this.orders = [];
      this.peopleServiceProvider.get_user_order_history(token)
        .then( data => {
          this.loading.dismiss();
          this.orders = data['data']
          console.log(this.orders);
      }).catch( error => {
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

