import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FincaProvider } from '../../providers/finca/finca';
import { UserProvider } from '../../providers/user/user';

import { CertificadosPage } from '../certificados/certificados';
import { ProductosPage } from '../productos/productos';
import { MapPage } from '../map/map';
import { ContactoPage } from '../contacto/contacto';
import { AddFincaPage } from '../add-finca/add-finca';
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

  fincas: any;

  constructor(public userProvider: UserProvider, public fincaProvider: FincaProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getMyFincas();
  }

  

  getMyFincas(){
    this.fincaProvider.getMyFincas( this.userProvider.shareObj['id'] )
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

  addFinca(){
    this.navCtrl.push(AddFincaPage);
  }

}
