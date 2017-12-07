import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CertificadoProvider } from '../../providers/certificado/certificado';

/**
 * Generated class for the CertificadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-certificados',
  templateUrl: 'certificados.html',
})
export class CertificadosPage {

	finca_id: any;
	certificados: any;

	espera_cola: number;
	espera_sistema: number;	

  constructor(public certificadoProvider: CertificadoProvider, public navCtrl: NavController, public navParams: NavParams) {
	this.finca_id = this.navParams.get('id');
	this.getCertificados();  
  }


  getCertificados(){
	console.log(this.finca_id);
	this.certificadoProvider.getCertificados_by_finca(this.finca_id)
	.subscribe(res=>this
		.certificados=res);
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad CertificadosPage');
  }

}
