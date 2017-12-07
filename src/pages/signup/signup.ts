import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { LandingPage } from '../landing/landing';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	 responseData : any;
   userData = {};	

  constructor(public alertCtrl: AlertController, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  signup(){
    console.log(this.userData);
     this.userProvider.postData(this.userData).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.pop();
      this.alert("Registro exitoso!", "Ahora puede entrar a la aplicacion en [Entrar]");
    }, (err) => {
      // Error log
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
    console.log('ionViewDidLoad SignupPage');
  }

}
