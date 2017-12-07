import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { FincaProvider } from '../../providers/finca/finca';
import { UserProvider } from '../../providers/user/user';

import { HomePage } from '../home/home';
/**
 * Generated class for the AddFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-finca',
  templateUrl: 'add-finca.html',
})
export class AddFincaPage {

	fincaData = {};	
	responseData : any;

  constructor(public app: App, public userProvider: UserProvider, private geolocation: Geolocation, public alertCtrl: AlertController, public fincaProvider: FincaProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.fincaData['usuario_id'] = this.userProvider.shareObj['id'];
  	this.fincaData['foto_url'] = 'http://ryanbremner.com/images/illus_beef.jpg';
  	this.getPosition();
  }

  addFinca(){
     this.fincaProvider.postData(this.fincaData).then((result) => {
      this.responseData = result;
      console.log(this.fincaData);
      console.log(this.responseData);
      localStorage.setItem('fincaData', JSON.stringify(this.responseData));
      this.app.getRootNav().setRoot( HomePage );
      this.alert("Finca añadida!", "Ahora puede ver su finca en [Mis fincas]");
    }, (err) => {
      // Error log
    });

  }

  getPosition(){
  	this.geolocation.getCurrentPosition().then((resp) => {
		 // resp.coords.latitude
		 // resp.coords.longitude
		 this.fincaData['coordenadaX']=resp.coords.latitude;
		 this.fincaData['coordenadaY']=resp.coords.longitude;
		}).catch((error) => {
		  console.log('Error getting location', error);
		});
  }

  alert(tittle: string, message: string) {
    const alert = this.alertCtrl.create({
      title: tittle,
      subTitle: message,
      buttons: ['Okay']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFincaPage');
  }

}
