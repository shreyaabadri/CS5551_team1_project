import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('map') mapElement: ElementRef;
map: any;

  constructor(public navCtrl: NavController) {}
  
  ionViewDidLoad(){
  this.loadMap();
  }
  
  loadMap() {
let latLng = new google.maps.LatLng(38.980881,-94.665106);

let mapOptions = {
  center: latLng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

var locations = [
  ['Louis park', 39.031444, -94.594452, 4],
  ['Raytown', 39.007998, -94.463601, 5],
  ['Hindu temple', 39.013140, -94.761942, 3],
  ['mc donalds', 39.016262, -94.575762, 2],
  ['Olathe', 39.016262, -94.575762, 1]
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