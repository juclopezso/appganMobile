import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CertificadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CertificadoProvider {

  constructor(public http: Http) {
    console.log('Hello CertificadoProvider Provider');
  }

  //apiUrl = 'http://192.168.43.20:3000';
  apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';


  getCertificados_by_finca(id){
	return this.http.get(this.apiUrl+'/certificados_by_finca/'+id)
	        .map(res => res.json());
	    }


}
