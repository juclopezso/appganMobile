import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddFincaPage } from '../add-finca/add-finca';

import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  user_id: any;
  //user_telefono: any;
  //user_email: any;
  usuarios: any;

  constructor(public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.user_id = this.userProvider.shareObj['id'];
  	this.getUsuario();
  }

  getUsuario(){
	console.log(this.user_id);
	this.userProvider.getUsuarios()
	.subscribe(res=>{
		this.usuarios = res.filter(item => item.id == this.user_id);
	})
  }

  addFinca(){
    this.navCtrl.push(AddFincaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

}
