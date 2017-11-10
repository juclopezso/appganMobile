import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  finca: any;
  descripcion: any;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public navParams: NavParams) {
  this.finca = this.navParams.get('finca');
  this.descripcion = "Finca: " + this.finca.nombre + "\nArea: " + this.finca.area;

  }

   loadMap() {



    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.finca.coordenadaX,
          lng: this.finca.coordenadaY
        },
        zoom: 18,
        tilt: 30,
      },
      	mapType: "MAP_TYPE_HYBRID"
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);


    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        
        this.map.addMarker({
            title: this.descripcion,
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: this.finca.coordenadaX,
              lng: this.finca.coordenadaY
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                //alert(this.finca.nombre);
              });
          });

      });
  }

  ionViewDidLoad() {
  	this.loadMap();
    console.log('ionViewDidLoad MapPage');
  }

}
