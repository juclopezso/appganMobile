import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductoProvider } from '../../providers/producto/producto';
/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

	finca_id: any;
	productos: any;

  constructor(public productoProvider: ProductoProvider, public navCtrl: NavController, public navParams: NavParams) {
	this.finca_id = this.navParams.get('id');
	this.getProductos();  
  }


  getProductos(){
	console.log(this.finca_id);
	this.productoProvider.getProductos_by_finca(this.finca_id)
	.subscribe(res=>this
		.productos=res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
