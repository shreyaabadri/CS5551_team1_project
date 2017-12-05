import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
declare var google: any;

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {

    // homepage=HomePage;
@ViewChild('map') mapElement: ElementRef;
map: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ContactusPage');

  //   // localStorage.getItem('access_token');

  // }
  
  ionViewDidLoad(){
    if (localStorage.getItem('access_token'))
    {
      this.loadMap();
    } else {
        this.alertCtrl.create({
          title: 'Info!',
          subTitle: 'Login Required',
          buttons: ['OK']
        }).present();
      this.navCtrl.setRoot(HomePage);
    }
  
  }
  
  loadMap() {
let latLng = new google.maps.LatLng(39.094222, -94.587453);



let mapOptions = {
  center: latLng,
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

var locations = [
  ['Harvesters The Community Food Network',39.055214, -94.515462, 4],
  ['United Way of Greater Kansas City', 39.041955,94.596603, 5],
  ['Bishop Sullivan Center', 39.054853, -94.572363, 3],
  ['Cross-Lines Community Outreach', 39.086102, -94.627763, 2],
  ['Metro Lutheran Ministry Food Pantry', 39.102868, -94.628464, 1],
  ['Kansas City Community Kitchen', 39.104211, -94.563967, 6],
  ['St. Mary’s Food Kitchen', 39.117238, -94.625425, 7],
  ['Cherith Brook Catholic Worker House', 39.098808, -94.542831, 8],
  ['City Union Mission Family Center', 39.096844, -94.552933, 9],
  ['Katie’s Kitchen', 39.044503, -94.598036, 10]
];

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: this.map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(this.map, marker);
    }
  })(marker, i));
}
}
}