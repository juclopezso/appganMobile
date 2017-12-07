import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FincaPage } from '../pages/finca/finca';
import { UsuarioPage } from '../pages/usuario/usuario';
import { CertificadosPage } from '../pages/certificados/certificados';
import { ProductosPage } from '../pages/productos/productos';
import { MapPage } from '../pages/map/map';
import { ContactoPage } from '../pages/contacto/contacto';
import { AddFincaPage } from '../pages/add-finca/add-finca';


import { FincaProvider } from '../providers/finca/finca';
import { UserProvider } from '../providers/user/user';
import { CertificadoProvider } from '../providers/certificado/certificado';
import { ProductoProvider } from '../providers/producto/producto';

import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage, 
    FincaPage, 
    UsuarioPage,
    LoginPage,
    SignupPage,
    CertificadosPage,
    ProductosPage,
    MapPage,
    ContactoPage,
    AddFincaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage, 
    FincaPage, 
    UsuarioPage,
    LoginPage,
    SignupPage,
    CertificadosPage,
    ProductosPage,
    MapPage,
    ContactoPage,
    AddFincaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FincaProvider,
    UserProvider,
    CertificadoProvider,
    ProductoProvider,
    GoogleMaps,
    Geolocation,
    CallNumber,
    EmailComposer
  ]
})
export class AppModule {}
