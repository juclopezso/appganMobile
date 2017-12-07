import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface ShareObj {
  [id: number]: any;
}

@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  shareObj: ShareObj = {};

  //apiUrl = 'http://192.168.43.20:3000';
  apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';

  getUsuarios(){
	return this.http.get(this.apiUrl+'/usuarios')
	        .map(res => res.json());
	    }


  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl+'/usuarios', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postLogin(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl+'/login', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


}
