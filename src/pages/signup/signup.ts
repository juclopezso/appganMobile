import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  	userData = {"nombre": "","apellido": "", "email": "", "password": "", "telefono": ""};	

  constructor(public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }


  signup(){
     this.userProvider.postData(this.userData).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.pop();
    }, (err) => {
      // Error log
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
