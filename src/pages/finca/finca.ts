import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FincaProvider } from '../../providers/finca/finca';
/**
 * Generated class for the FincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finca',
  templateUrl: 'finca.html',
})
export class FincaPage {

  constructor(public fincaProvider: FincaProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.getFincas();

  }

  fincas: any;

  getFincas(){
  	this.fincaProvider.getFincas()
  	.subscribe(res=>this
  		.fincas=res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FincaPage');
  }

}
