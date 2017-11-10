import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  user_id: any;
  //user_telefono: any;
  //user_email: any;
  usuarios: any;

  constructor(public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.user_id = this.navParams.get('id');
  	this.getUsuario();
  }


  getUsuario(){
	console.log(this.user_id);
	this.userProvider.getUsuarios()
	.subscribe(res=>{
		this.usuarios = res.filter(item => item.id === this.user_id);
	})
  }

  llamar(telefono){

  }

  email(email){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
