import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  constructor(public http: Http) {
    console.log('Hello ProductoProvider Provider');
  }

  apiUrl = 'http://192.168.43.20:3000';
  //apiUrl = 'http://192.168.0.19:3000';


  getProductos_by_finca(id){
	return this.http.get(this.apiUrl+'/productos_by_finca/'+id)
	        .map(res => res.json());
	    }
	    
}
