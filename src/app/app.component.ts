import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { FincaPage } from '../pages/finca/finca';
import { UsuarioPage } from '../pages/usuario/usuario';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public app: App, public alertCtrl: AlertController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Mi Cuenta', component: UsuarioPage },
      { title: 'Mis Fincas', component: FincaPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signout(){
    this.alert('Sesion terminada', '');
    this.app.getRootNav().setRoot( LandingPage );
  }

  alert(tittle: string, message: string) {
    const alert = this.alertCtrl.create({
      title: tittle,
      subTitle: message,
      buttons: ['Okay']
    });
    alert.present();
  }
}
