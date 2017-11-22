import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-volun-main ',
  templateUrl: 'volun-main.html'
})
export class VolunMainPage {
  user_data;
  user_data_key;
 @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

 
  constructor(public navCtrl: NavController) {
  	this.tabs=["Notification","History","Profile"];
  }
  onChange(event: any){
    console.log(event.value)
    if (event.value == 'Profile')
    {
      this.user_data = localStorage.getItem('user_object');
      this.user_data = JSON.parse(this.user_data)
      this.user_data_key = Object.keys(this.user_data)
      console.log(this.user_data)
    }
  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {  
  console.log(index)  
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

 

}