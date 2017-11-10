import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { FincaProvider } from '../../providers/finca/finca';

import { CertificadosPage } from '../certificados/certificados';
import { ProductosPage } from '../productos/productos';
import { MapPage } from '../map/map';
import { ContactoPage } from '../contacto/contacto';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public fincaProvider: FincaProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.getFincas();
  }

  fincas: any;

  getFincas(){
  	this.fincaProvider.getFincas()
  	.subscribe(res=>this
  		.fincas=res);
  }

  certificados(id){
    this.navCtrl.push(CertificadosPage, { id: id });
  }


  productos(id){
    this.navCtrl.push(ProductosPage, { id: id });
  }

  mapa(finca){
    this.navCtrl.push(MapPage, { finca:finca});
  }

  contacto(id){
    this.navCtrl.push(ContactoPage, { id: id });
  }
}
