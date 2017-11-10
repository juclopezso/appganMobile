import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FincaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FincaProvider {

  constructor(public http: Http) {
    console.log('Hello FincaProvider Provider');
  }

  //apiUrl = 'http://192.168.43.20:3000';
  apiUrl = 'http://192.168.0.19:3000';


  getFincas(){
	return this.http.get(this.apiUrl+'/fincas')
	        .map(res => res.json());
	    }


}
