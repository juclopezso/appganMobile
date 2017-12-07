webpackJsonp([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__certificados_certificados__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productos_productos__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacto_contacto__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_finca_add_finca__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the FincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FincaPage = (function () {
    function FincaPage(userProvider, fincaProvider, navCtrl, navParams) {
        this.userProvider = userProvider;
        this.fincaProvider = fincaProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getMyFincas();
    }
    FincaPage.prototype.getMyFincas = function () {
        var _this = this;
        this.fincaProvider.getMyFincas(this.userProvider.shareObj['id'])
            .subscribe(function (res) { return _this
            .fincas = res; });
    };
    FincaPage.prototype.certificados = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__certificados_certificados__["a" /* CertificadosPage */], { id: id });
    };
    FincaPage.prototype.productos = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__productos_productos__["a" /* ProductosPage */], { id: id });
    };
    FincaPage.prototype.mapa = function (finca) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */], { finca: finca });
    };
    FincaPage.prototype.contacto = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contacto_contacto__["a" /* ContactoPage */], { id: id });
    };
    FincaPage.prototype.addFinca = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__add_finca_add_finca__["a" /* AddFincaPage */]);
    };
    return FincaPage;
}());
FincaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finca',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/finca/finca.html"*/'<!--\n  Generated template for the FincaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Mis Fincas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let finca of fincas">\n	  <img src= {{finca.foto_url}} />\n	  <ion-card-content>\n	    <ion-card-title>\n	      {{finca.nombre}}\n	    </ion-card-title>\n      	<p>{{finca.area}} metros cuadrados</p>\n      	<p>{{finca.direccion}}</p>\n      	<button ion-button color="secondary" full (click)="certificados(finca.id)">Ver Certificados</button>\n      	<button ion-button color="secondary" full (click)="productos(finca.id)">Ver Productos</button>\n      	<button ion-button color="secondary" full (click)="mapa(finca)">Ver Ubicación</button>\n	  </ion-card-content>\n	</ion-card>\n<button ion-button color="primary" full (click)="addFinca()">Añadir Finca</button>\n</ion-content>'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/finca/finca.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FincaPage);

//# sourceMappingURL=finca.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    LandingPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    return LandingPage;
}());
LandingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/landing/landing.html"*/'<ion-header>\n</ion-header>\n<ion-content>\n	<div id="bg">\n  <img src="https://i.imgur.com/9O3H5it.png" alt="">\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n      <ion-row>\n          <ion-col col-6 width-50><button ion-button color="secondary" full (click)="login()">Entrar</button></ion-col>\n          <ion-col col-6 width-75><button ion-button color="secondary" full full (click)="signup()">Registrarse</button></ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/landing/landing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LandingPage);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(app, userProvider, navCtrl, navParams) {
        this.app = app;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.userData);
        this.userProvider.postLogin(this.userData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            _this.userProvider.shareObj['id'] = _this.responseData['id'];
            console.log(_this.userProvider.shareObj['id']);
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            // Error log
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Entrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)="login()">\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password" name="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block color="secondary">Entrar</button>\n    </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(alertCtrl, userProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log(this.userData);
        this.userProvider.postData(this.userData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            _this.navCtrl.pop();
            _this.alert("Registro exitoso!", "Ahora puede entrar a la aplicacion en [Entrar]");
        }, function (err) {
            // Error log
        });
    };
    SignupPage.prototype.alert = function (tittle, message) {
        var alert = this.alertCtrl.create({
            title: tittle,
            subTitle: message,
            buttons: ['Okay']
        });
        alert.present();
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Registrarse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n  <ion-card>\n    <ion-card-content>\n    <form (ngSubmit)="signup()">\n      <ion-item>\n        <ion-label stacked>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.nombre" name="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Apellido</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.apellido" name="apellido"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="userData.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password" name="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block color="secondary">Registrarse</button>\n    </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_finca_add_finca__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioPage = (function () {
    function UsuarioPage(userProvider, navCtrl, navParams) {
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_id = this.userProvider.shareObj['id'];
        this.getUsuario();
    }
    UsuarioPage.prototype.getUsuario = function () {
        var _this = this;
        console.log(this.user_id);
        this.userProvider.getUsuarios()
            .subscribe(function (res) {
            _this.usuarios = res.filter(function (item) { return item.id == _this.user_id; });
        });
    };
    UsuarioPage.prototype.addFinca = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_finca_add_finca__["a" /* AddFincaPage */]);
    };
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioPage');
    };
    return UsuarioPage;
}());
UsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usuario',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/usuario/usuario.html"*/'<!--\n  Generated template for the UsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let user of usuarios">\n	  <ion-card-content>\n	    <ion-card-title>\n	      Mis datos: \n	    </ion-card-title>\n      	<p>Nombres: {{user.nombre}}</p>\n      	<p>Apellidos: {{user.apellido}}</p>\n      	<p>Email: {{user.email}}</p>\n      	<p>Telefono: {{user.telefono}}</p>\n	  </ion-card-content>\n	</ion-card>\n	<button ion-button color="primary" full (click)="editar()">Editar datos</button>\n  <button ion-button color="secondary" full (click)="addFinca()">Añadir Finca</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/usuario/usuario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], UsuarioPage);

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-finca/add-finca.module": [
		280,
		9
	],
	"../pages/certificados/certificados.module": [
		281,
		8
	],
	"../pages/contacto/contacto.module": [
		282,
		7
	],
	"../pages/finca/finca.module": [
		283,
		6
	],
	"../pages/landing/landing.module": [
		284,
		5
	],
	"../pages/login/login.module": [
		285,
		4
	],
	"../pages/map/map.module": [
		286,
		3
	],
	"../pages/productos/productos.module": [
		287,
		2
	],
	"../pages/signup/signup.module": [
		288,
		1
	],
	"../pages/usuario/usuario.module": [
		289,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificadoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CertificadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CertificadoProvider = (function () {
    function CertificadoProvider(http) {
        this.http = http;
        //apiUrl = 'http://192.168.43.20:3000';
        this.apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';
        console.log('Hello CertificadoProvider Provider');
    }
    CertificadoProvider.prototype.getCertificados_by_finca = function (id) {
        return this.http.get(this.apiUrl + '/certificados_by_finca/' + id)
            .map(function (res) { return res.json(); });
    };
    return CertificadoProvider;
}());
CertificadoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CertificadoProvider);

//# sourceMappingURL=certificado.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductoProvider = (function () {
    function ProductoProvider(http) {
        this.http = http;
        this.apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';
        console.log('Hello ProductoProvider Provider');
    }
    //apiUrl = 'http://192.168.0.19:3000';
    ProductoProvider.prototype.getProductos_by_finca = function (id) {
        return this.http.get(this.apiUrl + '/productos_by_finca/' + id)
            .map(function (res) { return res.json(); });
    };
    return ProductoProvider;
}());
ProductoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ProductoProvider);

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_finca_finca__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_usuario_usuario__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_certificados_certificados__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_productos_productos__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contacto_contacto__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_finca_add_finca__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_finca_finca__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_certificado_certificado__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_producto_producto__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_finca_finca__["a" /* FincaPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_usuario_usuario__["a" /* UsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_certificados_certificados__["a" /* CertificadosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_productos_productos__["a" /* ProductosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contacto_contacto__["a" /* ContactoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_finca_add_finca__["a" /* AddFincaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-finca/add-finca.module#AddFincaPageModule', name: 'AddFincaPage', segment: 'add-finca', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/certificados/certificados.module#CertificadosPageModule', name: 'CertificadosPage', segment: 'certificados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/finca/finca.module#FincaPageModule', name: 'FincaPage', segment: 'finca', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_finca_finca__["a" /* FincaPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_usuario_usuario__["a" /* UsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_certificados_certificados__["a" /* CertificadosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_productos_productos__["a" /* ProductosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contacto_contacto__["a" /* ContactoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_finca_add_finca__["a" /* AddFincaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_finca_finca__["a" /* FincaProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_certificado_certificado__["a" /* CertificadoProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_producto_producto__["a" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_finca_finca__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(app, alertCtrl, platform, statusBar, splashScreen) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mi Cuenta', component: __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */] },
            { title: 'Mis Fincas', component: __WEBPACK_IMPORTED_MODULE_6__pages_finca_finca__["a" /* FincaPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signout = function () {
        this.alert('Sesion terminada', '');
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */]);
    };
    MyApp.prototype.alert = function (tittle, message) {
        var alert = this.alertCtrl.create({
            title: tittle,
            subTitle: message,
            buttons: ['Okay']
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar color="secondary" >\n      <ion-title color="light"  >Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item color="balanced" (click)=signout() >Sign Out</button> \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.shareObj = {};
        //apiUrl = 'http://192.168.43.20:3000';
        this.apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getUsuarios = function () {
        return this.http.get(this.apiUrl + '/usuarios')
            .map(function (res) { return res.json(); });
    };
    UserProvider.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/usuarios', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UserProvider.prototype.postLogin = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FincaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FincaProvider = (function () {
    function FincaProvider(http) {
        this.http = http;
        //apiUrl = 'http://192.168.43.20:3000';
        this.apiUrl = 'https://arcane-wildwood-86496.herokuapp.com';
        console.log('Hello FincaProvider Provider');
    }
    FincaProvider.prototype.getFincas = function () {
        return this.http.get(this.apiUrl + '/fincas')
            .map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.getMyFincas = function (id) {
        return this.http.get(this.apiUrl + '/fincas_by_user/' + id)
            .map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/fincas', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return FincaProvider;
}());
FincaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FincaProvider);

//# sourceMappingURL=finca.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__certificados_certificados__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_productos__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacto_contacto__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(fincaProvider, navCtrl, navParams) {
        this.fincaProvider = fincaProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getFincas();
    }
    HomePage.prototype.getFincas = function () {
        var _this = this;
        this.fincaProvider.getFincas()
            .subscribe(function (res) { return _this
            .fincas = res; });
    };
    HomePage.prototype.certificados = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__certificados_certificados__["a" /* CertificadosPage */], { id: id });
    };
    HomePage.prototype.productos = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productos_productos__["a" /* ProductosPage */], { id: id });
    };
    HomePage.prototype.mapa = function (finca) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */], { finca: finca });
    };
    HomePage.prototype.contacto = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contacto_contacto__["a" /* ContactoPage */], { id: id });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Fincas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let finca of fincas">\n	  <img src= {{finca.foto_url}} />\n	  <ion-card-content>\n	    <ion-card-title>\n	      {{finca.nombre}}\n	    </ion-card-title>\n      	<p>{{finca.area}} metros cuadrados</p>\n      	<p>{{finca.direccion}}</p>\n      	<button ion-button color="secondary" full (click)="certificados(finca.id)">Ver Certificados</button>\n      	<button ion-button color="secondary" full (click)="productos(finca.id)">Ver Productos</button>\n      	<button ion-button color="secondary" full (click)="mapa(finca)">Ver Ubicación</button>\n      	<button ion-button color="primary" full (click)="contacto(finca.usuario_id)">Contactar Dueño</button>\n	  </ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finca_finca__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFincaPage = (function () {
    function AddFincaPage(app, userProvider, geolocation, alertCtrl, fincaProvider, navCtrl, navParams) {
        this.app = app;
        this.userProvider = userProvider;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.fincaProvider = fincaProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fincaData = {};
        this.fincaData['usuario_id'] = this.userProvider.shareObj['id'];
        this.fincaData['foto_url'] = 'http://ryanbremner.com/images/illus_beef.jpg';
        this.getPosition();
    }
    AddFincaPage.prototype.addFinca = function () {
        var _this = this;
        this.fincaProvider.postData(this.fincaData).then(function (result) {
            _this.responseData = result;
            console.log(_this.fincaData);
            console.log(_this.responseData);
            localStorage.setItem('fincaData', JSON.stringify(_this.responseData));
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            _this.alert("Finca añadida!", "Ahora puede ver su finca en [Mis fincas]");
        }, function (err) {
            // Error log
        });
    };
    AddFincaPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.fincaData['coordenadaX'] = resp.coords.latitude;
            _this.fincaData['coordenadaY'] = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AddFincaPage.prototype.alert = function (tittle, message) {
        var alert = this.alertCtrl.create({
            title: tittle,
            subTitle: message,
            buttons: ['Okay']
        });
        alert.present();
    };
    AddFincaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFincaPage');
    };
    return AddFincaPage;
}());
AddFincaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-finca',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/add-finca/add-finca.html"*/'<!--\n  Generated template for the AddFincaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Añadir Finca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-content padding class="appBackground">\n	  <ion-card>\n	    <ion-card-content>\n	    <form (ngSubmit)="addFinca()">\n	      <ion-item>\n	        <ion-label stacked>Nombre</ion-label>\n	        <ion-input type="text" [(ngModel)]="fincaData.nombre" name="nombre"></ion-input>\n	      </ion-item>\n	      <ion-item>\n	        <ion-label stacked>Area</ion-label>\n	        <ion-input type="number" [(ngModel)]="fincaData.area" name="area"></ion-input>\n	      </ion-item>\n	      <ion-item>\n	        <ion-label stacked>Direccion</ion-label>\n	        <ion-input type="text" [(ngModel)]="fincaData.direccion" name="direccion"></ion-input>\n	      </ion-item>\n	      <ion-item>\n	        <ion-label stacked>Coordenadas (se usarán las coordenadas actuales)</ion-label>\n	      </ion-item>\n	      <button ion-button type="submit" block color="secondary">Añadir</button>\n	    </form>\n	    </ion-card-content>\n	  </ion-card>\n	</ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/add-finca/add-finca.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_finca_finca__["a" /* FincaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_finca_finca__["a" /* FincaProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _g || Object])
], AddFincaPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-finca.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_certificado_certificado__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CertificadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CertificadosPage = (function () {
    function CertificadosPage(certificadoProvider, navCtrl, navParams) {
        this.certificadoProvider = certificadoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.finca_id = this.navParams.get('id');
        this.getCertificados();
    }
    CertificadosPage.prototype.getCertificados = function () {
        var _this = this;
        console.log(this.finca_id);
        this.certificadoProvider.getCertificados_by_finca(this.finca_id)
            .subscribe(function (res) { return _this
            .certificados = res; });
    };
    CertificadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CertificadosPage');
    };
    return CertificadosPage;
}());
CertificadosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-certificados',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/certificados/certificados.html"*/'<!--\n  Generated template for the CertificadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Certificados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let cert of certificados">\n	  <ion-card-content>\n	    <ion-card-title>\n	      {{cert.nombre}}\n	    </ion-card-title>\n      	<p>Numero de certifiado: {{cert.numero}}</p>\n	  </ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/certificados/certificados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_certificado_certificado__["a" /* CertificadoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CertificadosPage);

//# sourceMappingURL=certificados.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_producto_producto__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = (function () {
    function ProductosPage(productoProvider, navCtrl, navParams) {
        this.productoProvider = productoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.finca_id = this.navParams.get('id');
        this.getProductos();
    }
    ProductosPage.prototype.getProductos = function () {
        var _this = this;
        console.log(this.finca_id);
        this.productoProvider.getProductos_by_finca(this.finca_id)
            .subscribe(function (res) { return _this
            .productos = res; });
    };
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    return ProductosPage;
}());
ProductosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-productos',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/productos/productos.html"*/'<!--\n  Generated template for the ProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let prod of productos">\n	  <ion-card-content>\n	    <ion-card-title>\n	      {{prod.tipo}}\n	    </ion-card-title>\n      	<p>{{prod.subtipo}}</p>\n      	<p>Cantidad actual: {{prod.cantidad}}</p>\n      	<p>Produccion mensual: {{prod.produccion}}</p>\n	  </ion-card-content>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/productos/productos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_producto_producto__["a" /* ProductoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProductosPage);

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(googleMaps, navCtrl, navParams) {
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.finca = this.navParams.get('finca');
        this.descripcion = "Finca: " + this.finca.nombre + "\nArea: " + this.finca.area;
    }
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.finca.coordenadaX,
                    lng: this.finca.coordenadaY
                },
                zoom: 18,
                tilt: 30,
            },
            mapType: "MAP_TYPE_HYBRID"
        };
        this.map = this.googleMaps.create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: _this.descripcion,
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: _this.finca.coordenadaX,
                    lng: _this.finca.coordenadaY
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    //alert(this.finca.nombre);
                });
            });
        });
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        console.log('ionViewDidLoad MapPage');
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div id="map_canvas"></div>\n</ion-content>\n\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoPage = (function () {
    function ContactoPage(/*private emailComposer: EmailComposer, private callNumber: CallNumber,*/ userProvider, navCtrl, navParams) {
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacto_id = this.navParams.get('id');
        this.getUsuario();
    }
    ContactoPage.prototype.getUsuario = function () {
        var _this = this;
        console.log(this.contacto_id);
        this.userProvider.getUsuarios()
            .subscribe(function (res) {
            _this.usuarios = res.filter(function (item) { return item.id == _this.contacto_id; });
        });
    };
    ContactoPage.prototype.llamar = function (telefono) {
        /*this.callNumber.callNumber(telefono, true)
          .then(() => console.log('Launched dialer!'))
          .catch(() => console.log('Error launching dialer'));*/
    };
    ContactoPage.prototype.email = function (email) {
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
    };
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    return ContactoPage;
}());
ContactoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contacto',template:/*ion-inline-start:"/home/juan/Desktop/VacApp/appganMobile/src/pages/contacto/contacto.html"*/'<!--\n  Generated template for the ContactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Contacto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let user of usuarios">\n	  <ion-card-content>\n	    <ion-card-title>\n	      Propietario: \n	    </ion-card-title>\n      	<p>Nombres: {{user.nombre}}</p>\n      	<p>Apellidos: {{user.apellido}}</p>\n      	<p>Email: {{user.email}}</p>\n      	<p>Telefono: {{user.telefono}}</p>\n	  </ion-card-content>\n	</ion-card>\n    <button ion-button color="primary" full (click)="llamar(user.telefono)">Llamar</button>\n    <button ion-button color="secondary" full (click)="email(user.email)">Escribir correo</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/juan/Desktop/VacApp/appganMobile/src/pages/contacto/contacto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ContactoPage);

//# sourceMappingURL=contacto.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map