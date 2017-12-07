import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';


import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  contacto_id: any;
  usuarios: any;


  constructor(/*private emailComposer: EmailComposer, private callNumber: CallNumber,*/ public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  	this.contacto_id = this.navParams.get('id');
  	this.getUsuario();
  }


  getUsuario(){
  	console.log(this.contacto_id);
  	this.userProvider.getUsuarios()
  	.subscribe(res=>{
  		this.usuarios = res.filter(item => item.id == this.contacto_id);
  	 })
  }

  llamar(telefono){
    /*this.callNumber.callNumber(telefono, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));*/

  }

  email(email){
  /*  this.emailComposer.isAvailable().then((available: boolean) =>{
     if(available) {
       //Now we know we can send
     }
    });

    let email = {
      to: emailInput,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Contacto finca VacApp',
      body: '',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
