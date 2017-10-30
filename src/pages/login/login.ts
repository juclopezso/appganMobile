import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, AlertController, App } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  	userData = {"email": "", "password": ""};	

  constructor(public app: App, public platform: Platform, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
     this.userProvider.postData(this.userData).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.app.getRootNav().setRoot( HomePage );
    }, (err) => {
      // Error log
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
