import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';


  getFincas(){
	return this.http.get(this.apiUrl+'/fincas')
	        .map(res => res.json());
	    }

  getMyFincas(id){
    return this.http.get(this.apiUrl+'/fincas_by_user/'+id)
          .map(res => res.json());
  }    

  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl+'/fincas', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
