(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <app-user-info></app-user-info> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/search/search.component */ "./src/app/header/search/search.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _header_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/home-page/home-page.component */ "./src/app/header/home-page/home-page.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _header_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _header_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__["UserInfoComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_9__["routes"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__["OrderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
            ],
            providers: [_service_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"], _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/search/search.component */ "./src/app/header/search/search.component.ts");
/* harmony import */ var _header_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/home-page/home-page.component */ "./src/app/header/home-page/home-page.component.ts");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");






var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'homepage', component: _header_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]] },
    { path: 'friends', component: _header_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]] },
    { path: 'user/reset/:token', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.BASE_URL = baseUrl;
    AppSettings.USER_REGISTER = 'user/register';
    AppSettings.USER_LOGIN = 'user/login';
    AppSettings.USER_LIST = 'user/list';
    AppSettings.USER_FORGOT = 'user/forgot';
    AppSettings.USER_RESET = 'user/reset/';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: flex;\n  margin: 20px;\n}\n\n.head{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  \n}\n\n.post{\n  margin: 0 100px;\n}\n\n.event{\n  margin: 0 200px;\n}\n\n.post{\n  float: right;\n}\n\n.container1{\n  width: 69%;\n}\n\n.container2{\n  width: 29%;\n}\n\n.dashboard-card {\n\n  padding: 20px 50px;\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.post-img{\n  height: 80%;\n}\n\n.mat-card-content{\n  margin-bottom: 0;\n}\n\n.main-post{\n  display: flex;\n  /* flex-direction: column; */\n  /* border: 1px solid green; */\n  max-width: 100%;\n  /* align-items: center; */\n  /* justify-content: center; */\n  margin: 2% ;\n}\n\n.text-post{\n  flex-direction: column;\n  flex: 1;\n  /* border: 1px solid yellow; */\n}\n\n.upload{\n  width: 70%;\n  color: firebrick;\n  /* border: 1px solid green; */\n \n}\n\n.placeholder{\n  height: 200px;\n  min-height: 200px;\n  max-height: 220px;\n  font-size: 20px;\n  padding-top: 27px;\n  margin-left: 10px;\n}\n\n.btn-1{\n  background-color:rgb(200, 38, 38);\n  color: white; \n  padding: 5px;\n  font-size: 20px;\n  font-weight:200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border: 1px solid lightgray;\n  margin-left: 1%;\n}\n\n/* .btn-2{\n  background-color:rgb(200, 38, 38);\n  color: white; \n  padding: 9px;\n  font-size: 20px;\n  font-weight:200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border: 1px solid lightgray;\n} */\n\n.example-card {\n  max-width: 580px;\n  flex: 1;\n  height: 580px;\n}\n\n.example-header-image {\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-fT-6OU9Fca5NtqPJMcabn0hKUVincjlwVs2jdFWyoB6Zk_lTw');\n  background-size: cover;\n  \n}\n\n.hide-inp{\n  position: relative;\n  width: 200px;\n  height: 50px;\n  /* background-color: firebrick; */\n  float: right;\n  margin-right:33%; \n  border: 2px solid lightgray;\n}\n\n.fake-btn{\n  background-color:rgb(83, 76, 76);\n  color: white; \n  /* padding: 5px; */\n  font-size: 20px;\n  font-weight:bold 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  position: absolute;\n  top: 0%;\n  bottom: 0%;\n  left: 0%;\n  right: 0%;\n  display: flex;\n  justify-content: center;\n}\n\n.fake-btn:hover{\n  background-color: white;\n}\n\n.file-inp{\n  position: absolute;\n  top: 0%;\n  bottom: 0%;\n  left: 0%;\n  right: 0%;\n  width: 200px;\n  height: 50px;\n  opacity: 0;\n}\n\n.btn-2{\n  width:100%;\n  height: 100%;\n}\n\n.btn-1:hover{\n  color: firebrick;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: 1px solid black;\n  background-color: #fafafa;\n}\n\n.hide-inp:hover{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: 1px solid black;\n}\n\n.card-img{\n  display: flex;\n  width: 100%;\n  height: 63%;\n  margin-left: .1%;\n  margin-top: 2.5%;\n\n}\n\n.capt{\n  color: firebrick;\n  font-size: 19px;\n\n}\n\np{  \n    max-width: 100%;\n    overflow-wrap: break-word;\n    overflow: auto;\n    height: 100px;\n}\n\n.preview{\n flex-direction: column;\n font-size: 20px;\n  font-weight:bold 400;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  -ms-grid-row-align: center;\n      align-self: center;\n \n}"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-post\">\n  <div class=\"text-post\">\n    <mat-form-field appearance=\"fill\" class=\"upload\">\n      <mat-label style=\"font-size:33px;\">What's on your mind!</mat-label>\n      <textarea matInput placeholder=\"Write Here .....\" class=\"placeholder\" (click)=\"showCard()\"  ></textarea>\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n    </mat-form-field>\n    <div class=\"post-btn\" >\n      <button mat-raised-button class=\"btn-1\">Post</button>\n      <div class=\"hide-inp\">\n        <div class=\"fake-btn\">\n          <a style=\"align-self:center;\" >Upload a image</a>\n        </div>\n        <div class=\"file-inp\">\n          <input type=\"file\" #Image accept=\"image/*\" class=\"btn-2\" (change)=\"handleFileInput($event.target.files)\">\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"example-card\" *ngIf=\"!show\"></div>\n  <mat-card class=\"example-card\"  *ngIf=\"show\" >\n      <div class=\"preview\">Preview</div>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title style=\"margin-top:10px;\" > {{ userName }} </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image [src]=\"imageUrl\" class=\"card-img\">\n    <mat-card-content class=\"capt\">\n      <p class=\"text\">\n        {{Caption}}\n      </p>\n    </mat-card-content>\n  \n  </mat-card>\n\n</div>\n\n\n<div class=\"head\">\n  <h1 class=\"post\">Posts</h1>\n  <h1 class=\"event\">Upcoming Events</h1>\n</div>\n\n<div class=\"grid-container\">\n\n  <mat-grid-list class=\"container1\" cols=\"1\" rowHeight=\"820px\">\n    <mat-grid-tile *ngFor=\"let card1 of cards1 | async\" [colspan]=\"card1.cols\" [rowspan]=\"card1.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{'Name'}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Share</button>\n            </mat-menu>\n          </mat-card-title>\n          <mat-card-subtitle> {{'Designation'}} </mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image class=\"post-img\" src=\"https://images.unsplash.com/photo-1534109284468-ad30ffd1f41d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4748c1ef0d8c04f6a5a8163d87e97dd&auto=format&fit=crop&w=500&q=60\">\n\n\n        <mat-card-content>\n          {{'Say something about the post........'}}\n        </mat-card-content>\n\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <mat-grid-list class='container2' cols=\"1\" rowHeight=\"250px\">\n    <mat-grid-tile *ngFor=\"let card2 of cards2 | async\" [colspan]=\"card2.cols\" [rowspan]=\"card2.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title> {{'Event Name'}} </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <h1>Accion Cricket League</h1>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(breakpointObserver, router, service) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.service = service;
        this.imageUrl = "/assets/img/No-image-full.jpg";
        this.fileToUpload = null;
        this.show = false;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards1 = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
            ];
        }));
        this.cards2 = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 }
            ];
        }));
    }
    BlogComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.show = true;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    BlogComponent.prototype.showCard = function () {
        this.show = true;
    };
    BlogComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    BlogComponent.prototype.getData = function () {
        var _this = this;
        this.service.shareDataSubject.subscribe(function (recievedData) { _this.userName = recievedData; });
        this.userName = localStorage.getItem('name');
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-layout{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n} \n\n.flex-layout>.card-layout{\n  text-align: center;\n  box-shadow: 1px 5px 10px 5px #ededed;\n  background-color: white;\n  padding: 15px 20px;\n  margin-bottom: 80px;\n  margin-top: 60px;\n  height: 370px;\n} \n\n.primary-sub{\n  font-weight: 350px;\n  font-size: 25px;\n} \n\n.forgotcard{\n  position: relative;\n  height: 181px;\n  width: 483px;\n  font-size: 23px;\n  margin-top: 70px;\n  font-weight: 300;\n} \n\n.forgot-layout{\n  position: absolute;\n  top: -30px;\n} \n\n.PasswordInp{\n  display: inline-block;\n  width: 400px;\n  margin-left: 30px;\n  font-size: 18px;\n  margin-bottom: 7px;\n} \n\n.btn{\n  margin: 15px 35px;\n} \n\n.btn-layout{\n  display: block;\n } \n\n.heading-text{\n   position: absolute;\n } \n\nh1{\n   position: relative;\n   top: 100px;\n   left: 695px;\n   font-size: 60px;\n  font-weight: 300;\n  color: firebrick;\n  margin-top: 25px;\n} \n\n.img-layout{\n  position: absolute;\n} \n\n.img{\n  position: relative;\n  top: 13px;\n  right: 10px;\n  height: 65px;\n  width: 250px;\n}\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-layout\">\n        <img class=\"img\" src=\"https://static1.squarespace.com/static/5ab6b93e5b409be7fa331cf1/t/5ac67b8c575d1f09cf1c833c/1535701410823/?format=1500w\" alt=\"accion-logo\">\n</div>\n<div class=\"heading-text\">\n     <h1>Accion Friends Book</h1>\n</div>\n<div class=\"flex-layout\">\n    <div class=\"card-layout\">\n        <span class=\"primary-sub\">Reset your password here!</span>\n        <div class=\"forgotcard\">\n            <div class=\"forgot-layout\">\n              <form [formGroup] = \"forgotForm\">\n                  <mat-form-field class=\"PasswordInp\">\n                      <input matInput placeholder=\"New Password\" [type]=\"hide1 ? 'password' : 'text'\" formControlName = \"newPassword\">\n                      <mat-icon matSuffix (click)=\"hide1 = !hide1\">{{hide1 ? 'visibility' : 'visibility_off'}}</mat-icon>\n                      <mat-error *ngIf=\"!forgotForm.hasError('newPassword')\">\n                          Password field is <strong>empty</strong>\n                        </mat-error> \n                      </mat-form-field>\n                      <mat-form-field class=\"PasswordInp\">\n                         <input matInput placeholder=\"Confirm Password\" [type]=\"hide2 ? 'password' : 'text'\" formControlName = \"confirmPassword\">\n                         <mat-icon matSuffix (click)=\"hide2 = !hide2\">{{hide2 ? 'visibility' : 'visibility_off'}}</mat-icon>\n                         <mat-error *ngIf=\"!forgotForm.hasError('confirmPassword')\">\n                            Password field is <strong>empty</strong>\n                          </mat-error> \n                         </mat-form-field>\n                      <div class=\"btn-layout\">\n                              <button [disabled] = \"forgotForm.invalid\" mat-button color = \"warn\" class=\"btn\" (click) = \"onSubmit()\">Update</button>     \n                       </div>\n              </form>\n                   </div>\n           </div> \n     </div> \n</div> "

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, service, router, route) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.route = route;
        this.hide1 = true;
        this.hide2 = true;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotForm = this.fb.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.router.params.subscribe(function (params) {
            _this.id = params.token;
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var passwordMatch = this.forgotForm.get('newPassword').value === this.forgotForm.get('confirmPassword').value;
        if (passwordMatch) {
            var passwordData = { "user": { "password": this.forgotForm.get('confirmPassword').value } };
            console.log(passwordData);
            this.service.forgotPassword(passwordData, this.id).subscribe(function (response) {
                if (response.success) {
                    _this.route.navigate(['login']);
                    swal("Success", "Your password has been changed.", "success");
                }
                else {
                    swal("Sorry", "Please try again");
                }
            });
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".links{\n    position: absolute;\n    right: 150px;\n  }\n\n  .fb,.web,.ins,.you,.twitter{\n  \n    width: 35px;\n    margin:0 5px;\n    margin-top: 10px;\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n     \n  }\n\n  .fb:hover,.web:hover,.ins:hover,.you:hover,.twitter:hover{\n    opacity: 1;\n    border-radius: 30%;\n    padding: 3px; \n  }\n\n  .navbar {\n    position: fixed;\n    width: 100%;\n    height: 100px;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 8vh; \n    background-color:rgba(219, 9, 9, 0.4);\n  }\n\n  .btn-1,.btn-2,.btn-3{\n    font-size: 21px;\n    /* background-color:rgba(219, 9, 9, 0.1); */\n    padding: 4px 0 ;\n    cursor: -webkit-grabbing; cursor: grabbing;\n    outline: none;\n    margin-left: 15px;\n    padding: 0 7px;\n  }\n\n  /* .btn-1.active,.btn-2.active,.btn-3.active{\n    color:;\n  } */\n\n  /* .active a:hover{\n    color: rgb(93, 93, 92);\n  } */\n\n  .btn-3{\n    position: absolute;\n    right: 30px;\n    padding: 0 7px;\n  }    "

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\n  <mat-toolbar-row class=\"active\">\n    <button mat-button class=\"btn-1\" (click)=\"toHome()\">HOME</button>\n    <button mat-button class=\"btn-2\" (click)=\"toFriends()\">FRIENDS</button>\n    <!-- <span> <img class=\"img\" src=\"https://static1.squarespace.com/static/5ab6b93e5b409be7fa331cf1/t/5ac67b8c575d1f09cf1c833c/1535701410823/?format=1500w\" alt=\"\"> </span> -->\n    <div class=\"links\">\n    <a target=\"_blank\" href=\"https://www.facebook.com/accionlabsinc/\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7dnLyw9RHMfxR+63XIsNRSmUEpYuG4RCynWlFArhH2BDuW6JxI7EhlxiQ5aKkoXkfleIInfh/annV7/M55k5Z2Z+h5586rXhnDPzfX4zc+acafufTpyRWImDuIwXeI9f+IG3uI1T2I6Z6IN/IoOxCdegE471CUcxB12QPEOxC42/eB1uYDGSFKSDrMZruJOpgy7LcWhZhuAs3MHr9hlrUHvG4hHcQVvpMLqhlkzBG7gDpXAGPVAp4/EK7gApnUBXlIruiSdwA8f6Bs0jP5v+LdZeREdPp6o39l3ohtVE2YjGHYH52A1NkK6voz/CAkRFj1g3WKjT6ImiTIXr3xFd5pqEg6JLqsrN/RB9EZLYQuQAgqIZ2w0QagNCU6YQvbeNQW70s32AGyBU8z3xZ/pjFEa3Wwo3RhHNL7nZCNcx1Du46NGpt94qT61mmvkHosNch+sY6gFcJsC1r6LDVxhdEq5DjJtwKXMvFDkPGy2KXIcYKQvREqI7MtHKznUo8hVaWMlxuExEo02zO3BjhpqETK7ANS7yGGWzCm7MUCuQyTO4xkWqFLIfbsxQW5BJ2WVrlUKuwo0Zyr5IuoYhyhaiBZPmAzdmKP2imXyHa1zkJSa30/rFpR8abRrKzurN9iETzcqucYyUj1/ZgUxuwTWOkboQ7allojWEaxwjdSHzkMk2uMYxUhdi37RnwTWOkbKQ+7DpjY9wnUKlLCR3pXgMrlOolIXMQIeZDdcpVKpCtO7J3ezWf2pX3HUOkaqQdSiMtvZd5xApCnmKXiiMfpVLcIMUSVHIcgRH3yf0NckNlKfVhVxEdNbCDZZHb8JLDK0bXPsY+iY5DKVyCG7Q1HR15D5ui6L9qDrewarQzmL05rWLNqNPwh2k1bTwWoTaol9Gy8q6dgpDaME2DS3JQqT4gnUBw9HSDIJe2HTtupOo4jmWIWm0tX8EX+BOKoa+qaxH0IzdqgyANpTPIeaTxD1od3M6cl8A/0a0xaNtTO0AbsUe6GS127ETmzEX+o74P504bW2/AStNd+yjYan8AAAAAElFTkSuQmCC\" class=\"fb\"></a>\n    <a target=\"_blank\" href=\"https://www.accionlabs.com/\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVGhD7dlN6A1RGMfxP5K8p7yULJQFSclCZCEikhSxUBQRJSWUjSJ5WWAhikjeUhJRJEUpKUV5W4jythBJIgohb99n8a/r9ptnzpwzM7d0f/XZzD3nOad778ycOdPRTjvtVJq+eI4/CX5jB1qaRVCTK+oDuqNlOQc1sRgz0ZL0xheoScU4hJZkPtSEYr1FN9SeU1ATSjEFtaYHPkFNJsU+1Jo5UBNJ9QpdUFuOQk2kDBNRS+x6/x5qEmXYjVoyHWoCZXmBWnIQagJlGodK0xVvoAYv03ZUmslQA3ueiGN5HqHS7IEa2LMMr5uOhRiNSmLX95dQg2b5iUE43HAs1CZUkvFQA3quwzIX6nPPfVSSnVADetbC0gffoNp4RqD0xJy0w9GZK1BtPBtQasZCDeS5h8asg2rnuYVSswVqIM9mNGYUVDuPPc8PQ2l5CDWQZwya8wyqrWcNSslIqAE8T6GyF6q9p/PKl5yNUAN4slawM6Dae35hCJJzB2oAzySo2JNlzIbFSiTFLp+qsMcWlba4zMolqH6eq0jKeqjCnrxtnVVQ/Tw/MADRuQlV2GOXanv4yjIbql+epYjKUNiJpoqmsHuDLSbVZ56LiMpqqIKpHuNA07EQtlazTfPCuQZVMMUDDMbUhmNFLEShDETMz++5jc4T1nZiPkK185xFoSyHKhTrBvqhMWeg2no+oyeCcxmqUAy7B/RCc5ZAtc8zD0Hpj+9QRYq6ALubq9i5EnNVPImgLIYqUNRp5L2FugvV12PnVtaX80/OQxUo4hhC3nVsheqfZxbc2LP1V6jOofYjdEd9AlSNPEfgZgFUx1C7UOS1gC0u7U2VquV5B/cXt/+16hjC1lgxOQ5VL880ZCbm27G1U8puh92tVd0825CZFbAbVSj7Be1de0rsymZPlKp+lhOobEu1nXb+v3R0/AUPflagnqh4owAAAABJRU5ErkJggg==\" class=\"web\"></a>\n    <a target=\"_blank\" href=\"https://www.instagram.com/accionlabs/\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANmSURBVGhD7dpJyI1RHMfx10yUWcRCWdgQEfYoCkVJpgUZSmwkomShTAsUybSUIVFiYVgoKwvKsJFxoyxMmcsQvr96T93efue5z7n3vPfexfurz+ae8zzvPe7znPN/zqOtK11pfrphOvbhLl7jF/5l8gVPcA3rMRLZMxcP4L5AZ/mNkxiFujMAl+D+UKN8w3LUnNF4BHfyRvuLPUhOfzyGO2kzbUNSLsOdqNn+QPdrqcyBO0mreI5eKIym2IdwJ2iU7+azjjaiMDPgDmyUdeiOcdC/vOsjWgoKsxfuwEbo+OXWwvULxiIardjuoHq8R5nL5QX0a4RshesXrEI0KjvcQSnuYwvGozdCBmI2juID3LFaySdiKT62fxazC9HUUzs9wyJUpgdUYmgQlRmE/VAZ4s5VxnFE4w4o4yYGQ9GX3I570Lwf+nzCRSxAiH6h2K9TzVlE4w6o5hZ6QtEl8Q6uX6XbGANlEsrcQx1lHYimyHDZ7IRqItfPeQPdD8piuD5Fsg4k3BPLkDKIQDPVUCg34PrEZBuIZidFv0iZyynmCJQpcO0x2QaiKVbZAddelmbKEVA087k+TraBaJ1QNDu59hRroByGa3eyDUSLndaJyim2ViegqBh07U6WgbyFog0C157qChRNHq7dyTKQH1B0o7v2VBegrIBrd7JdWmH9+AzXnuIAlGqFYqVsA1F5oajscO0pZkFJOVe2gaiKVebBtZf1Cnp07YOv7Z+VkW0gKvZUICp34PqUofpM0dOha4/JNhAJ17YKQNVOrk+R01C0/ZR6fNaBaA2ZCWUCXsL1czQIrUXa8DjX/lmKrAMRXWKToQyB7p2fcH1F90S4nDSI3XD9qsk+ENH+7BKEqHZS2aGnuKs4Dz0RanYKzy7aV67llwjOIBpt7buDyrqOaShKX+jGruWeqnQQ0TyFOyiVqthD2ISFWAktdlonUqbYIpsRjS4Dd1Armo9oUufyZtEzfj9Eo2q2ni2aRtHbgqo5BXdwq9DewFRUjTbUNJ26k7QCTdmlo+eCWnZFOpsqh+FIil5Du5M1i3Yqwz5YcvTOLsczeb1U1tQ8iBC9iit66dKZdHnrnhiGLNGDzwY06j8NaJ3Q+/1Ss1Ot0Zui1dD7iWPQO40cVNKo7NBufeFi15WuNCxtbf8Bp01RYjO59oUAAAAASUVORK5CYII=\" class=\"ins\">  </a>\n    <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCWfjWGa9T53J8w14l1eTywQ\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQoSURBVGhD7ZlZyG5THIeXFJkpx1hIpnRIKcmQDBnjxlScwjkRF8LFOYbiAmXMGHLhwjyVXBgucA4hZShEEpI5ZJ5nz7P3/mu1W9/3vt9+3+97d3p/9fSt/1p7r3f9vr3WXsNOU001VSetBifDy/A7/DNhvoX7YScYWpq4DUoVTpof4QAYSj6JUiV94QtYHwbqFShV0OYv+Loh734/NXnfZXnj5lSYVXarYceERrYDdQlE/h5moDMhv36c3AKzagMo3TgTV4HaGjT2ahXV/5C3oXTPOLgbZtVcjXwD64J6DM6ok+kQiGt+Bk1G/AfY9b5vxT808TCM3YicDupgiEH4OLwEi8GnszacBL/Bs6D2Ae+P+Aho1z0T82LkTbCxIceNT2DnKkppCexaJ9O10FsjchCEboDP6mTaESxfWUUpHQm9NvIwKMeLr93XqyilXcDyvPG9NvIBqGj4G1X0PzDyVRWltA38DY9WUUrHQDR8b/Da5VXUUyNyuBloT9i0TqYH4d06mVaH7cF7VC+MfALbwmFZnitW/9sa0ZQ/HmUXwV5wJbwI3rsMonwQ82ZkoZkaGQaXHA7y9zLeATdnr2V58hG4LHGmL9U1iJGNPAnHgwPUheJGsBaMqg1hEThW9oUV4KRaaoOMZORyyJci863N4C0otaWzESv0dbnQOhBK7els5EJQa8DuBWIuKMmu5zWuu+Yqe8CH0G5PZyP+Z9RWUCqPCbGkmCRjRp+rPD1p/15nI1uC2gSeABtl/i9NPFvFoxq5GPK2SGcjboxyxZOJJxFdLvYg0Z2M20Y8m9q8Tv6nNcFNWDtfnQ15W6STkT+hrbaRiNvLd+NIPwe3NulfwUWj8nXucsZ8eQTWg9BSiLKgkxF/pK0uRvyHuG/RkLGm/D2Pjz6Ho+B2sOw8CJ0A5uVM1MgLoGKV62GFR0emfQoqyh6oolq9MxJjJN9QRfpTsPHxEgljamxGfPRtjdvIl+DbL7gUQieC1+R0MiLtWX0UI/tBxGEknsDG4EHGblVUy7Myr8npbMTFYa6ZjLwPW8BDTZwbsczZ/ZwmtvHuEE0/A+poML6jimqdD+bldDYS51KhthHnmfzM2O7h39zIx+AyP65xonMJ8hS4r38a7GK+3TypDN0EcU/Q2YifGnLZBRycN1dRrePgruavRi2/Okvb8B3gergG4qjVyfAsuBNuBLfAuZ6Hdns6G7kXJiH3KKXNV2cjVuYSYqHlkyu1Z6AR+3rpRrGPHwoLsblaB3wFO3ZKbbEbDpSfCko3B05eDmaXEy4zHAeXwbngG+m0hlPg2BbOCVHudvYCcOd5HVjXPbAK4pPDTFwBA3UflG7uE/vDQLnMdjYvVdAH4vh1KPkJ2K+npYomiSZ8Ic1Jfn2yL/vh0XlgUviG8mh16O/rU001VVsp/Qv/Wo/tLlCg7gAAAABJRU5ErkJggg==\" class=\"you\"> </a>\n    <a target=\"_blank\" href=\"https://twitter.com/AccionLabs\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL4SURBVGhD7dlJyE1hHMfxa86QJFKIEgsKIZF5KCuRhAUKUWTDBisbQsgYVshQbCxkjEhRkowLSRGZiQwlM9/fy/t2nPs/9557nuece9X51ac7dJ7nTM/z3Oc8t5AnT548WaQ5hmMGFmAS+qER/ov0wQG8xy/DI6xBO0RFJzsRHes+hTLs72taaYL1+AbrBMJeQ3crmGaYjpu4rC/C6YGvmFn3yX/UjE7BOuBSfmIl5mA/3qL++9EoijbWBl+gtuo7+xA8QFebYOY86jfSnZkNX5mG4EG40p1pDPUTdYcBaMhzBDfWrVsO1xFE/eIegnUn9QN7oWa2BQ9wFWq2DfkIq/AxmCNDzIyFVa8Pj9EV/0QjhLWxPMEUJMlmWHW6eoreKIqGMqtA0BnoN6CSnIRVl4u70ChrZh2sQmFqp0cwEnFyDVY9SemCt0VkNDVQB7cKR7mBFeiJqFyAVTapnSibo7AKx3EHGlEWYgi6QCOWpiLW9kntQNl0xztYFSTxHZ9D37lai8joyrX587YwDlFDcS1Yhsg0he7EdmhaPQoa3qyKqi08iSzKKwQLaJoS/FwrBqFkXDp6VnRxW6Fk5sEqXEuuoGxaIjxxrDUbECuzYFVQKzQIxc5uWJVU2wvoGSR29JuyB1Zl1bQViTIX4SG5WjRRLTWfK5vWWIxzqHRC6dNxJMp43MZZXEc1pyy6gAORKJqyPIRVcdYOwymTYVWcpQ/oBudsg7WDrCyCl2go3gVrJ2k7De+L2RqK38DaYRruoz1SiR74l+AS4i5CJ6Hnor7IJJpKaxHAOhAXOomhyCS6WlqmtA7EhVbZRyD1DMYhpNGstDbcC6lEI0Z/LMVFWAfggxb7vHTsCVgFrbyvhtaNtMyZ9oRRTUnPP14zBnqMtHbo2ydsRAekEjUlrbifgBbWrINw8RJ6VPUy5YibzlBTuwWX6bua50HoH6sWqGo6YSrUf9QxNfQ+g9q4lkP1qn+OdNL6s1PNZj60/lTRo2mePHnSSqHwGytirHRZXEWhAAAAAElFTkSuQmCC\" class=\"twitter\"></a>\n    </div>\n    <button mat-button class=\"btn-3\" (click)=\"logout()\" >LOGOUT</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem("name");
        localStorage.removeItem("isLogin");
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.toFriends = function () {
        this.router.navigate(['friends']);
    };
    HeaderComponent.prototype.toHome = function () {
        this.router.navigate(['homepage']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/home-page/home-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/header/home-page/home-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n.image-layout {\n  margin: 0;\n  width: 100%;\n  height: 59vh;\n  background-repeat: no-repeat;\n  background: linear-gradient(to right bottom,rgba(219, 9, 9, 0.9), rgba(51, 51, 51, 0.8)),\n  url(\"https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4da34155a3f00b7f6d31c44201e1df94&auto=format&fit=crop&w=1350&q=80\");\n  background-size: cover;\n  background-position: center;\n}\n.text-wrapper {\n  border: 1px solid white;\n\n}\n.hash-tags {\n  border:none;\n  \n  font-weight: 300;\n  color: white;\n  letter-spacing: 5px;\n  word-spacing: 10px;\n  float: left;\n  padding: 20px;\n  margin: 8% 80px;\n  font-size: 40px;\n  flex-direction: column;\n  text-transform: capitalize;\n}\n.name{\n  font-weight: 400;\n  color:lightslategray;\n}\np {\n  font-size: 20px;\n}\n.container-layout{\n  max-width: 100%;\n  background-color:lightgray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 10px;\n  padding: 20px;\n}\n.container-layout:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.inner-layout {\n  border: 1px solid black;\n}\n.dash-bar {\n  font-size: 35px;\n  /* font-family: 'Exo 2', sans-serif; */\n}\n.access-btn {\n  color: white;\n  padding: 15px 40px;\n  margin: 10px;\n  font-size: 17px;\n  /* font-family: 'Exo 2', sans-serif; */\n  text-transform: uppercase;\n  border-radius: 1px;\n  border: none;\n  border: 1px solid ;\n  background-color:rgba(219, 9, 9, 0.8);\n  display: inline-block;\n  transition-duration: 1s;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  letter-spacing: 2px;\n}\n.access-btn:hover {\n  cursor: -webkit-grabbing; cursor: grabbing;\n  color: firebrick;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: 1px solid black;\n  background-color: #fafafa;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n}\n/* about section */\n.about-us{\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n  /* font-family: 'Exo 2', sans-serif; */\n  font-weight: bold 500;\n  letter-spacing: 2px;\n  font-size: 40px;\n  text-transform: uppercase;\n}\n.wrap-about {\n  width: 100%;\n  background-color: #fafafa;\n  display: flex;\n  justify-content: center;\n}\n.wrap-content {\n  width: 900px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  padding: 40px;\n  text-align: center;\n  /* font-family: 'Exo 2', sans-serif; */\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n.col1 {\n  width: 100%;\n  height: 125px;\n  background-color: #4B515D;\n}\n/* Search bar */\n.search{\n  position: absolute;\n  right:  200px;\n  color: lightslategray;\n}\ninput[type = text]{\n  position: absolute;\n  right: 180px;\n  width: 20%;\n  height: 30px;\n  border-radius: 25px;\n  border: 1px solid white;\n  opacity: 0.6;\n  outline: none;\n  font-size: 18px;\n  padding: 15px 20px;\n  transition: all .3s ease;\n}\ninput:focus{\n  width: 25%;\n}\n/* nav buttons */\n/* Conatct details */\n.grid-wrp {\n  margin: 30px;\n  padding: 20px;\n  -webkit-column-span: 20px;\n          column-span: 20px;\n}\n.wrap-contact{\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.wrap-about:hover {\n  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.wrap-contact {\n  border: none;\n  padding: 30px;\n  font-size: 40px;\n  /* font-family: 'Exo 2', sans-serif; */\n  text-transform: capitalize;\n  letter-spacing: 2px;\n}\n/* footer */\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  font-size: 18px;\n}"

/***/ }),

/***/ "./src/app/header/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/header/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"image-layout\">\n\n    <div class=\"hash-tags\">Hi {{userName}}, WELCOME TO <span class=\"name\">ACCIONLABS</span>  <p>Trusted Partner To Global Brands</p> </div>\n\n</div>\n\n\n<!-- team container -->\n<div class=\"container\">`\n  <!-- <div class=\"about-us\">\n    About us\n  </div> -->\n\n  \n  <div class=\"wrap-about\">\n    <!-- <div class=\"wrap-content\">\n      At Accion Labs, we work with Technology organizations of all sizes from small \n      startups to established enterprises across the globe who are looking \n      to harness power of emerging technologies to add value to their businesses.\n      <br>\n      <br>\n      We Are A Team Of Engineers, Designers, Thinkers, Product Managers, Problem Solvers And More. We Are Bound By Our Commitment To Help Teams Succeed And Our Culture Of Innovation.\n    </div> -->\n\n    \n  </div>\n  <app-blog></app-blog>\n\n<div class=\"redirect\">\n  <div class=\"container-layout\">\n    <div class=\"dash-bar\">Find Your Co-Workers Here!</div>\n    <button class=\"access-btn\" (click)=\"toFriends()\" >view friends</button>\n  </div>\n</div>\n\n<div class=\"col1\">\n  <div class=\"copyright\">\n    <p>@ Copyright 2018, Accion Labs, Inc.</p>\n  </div>\n    \n  </div> \n    <!-- <mat-grid-list cols=\"4\" rowHeight=\"100px\" class=\"grid-wrp\">\n      <mat-grid-tile\n          *ngFor=\"let tile of tiles\"\n          [colspan]=\"tile.cols\"\n          [style.background]=\"tile.color\">\n        <div class=\"wrap-contact\">\n          {{tile.conatct}}\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list> --> \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/header/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomePageComponent.prototype.toFriends = function () {
        this.router.navigate(['friends']);
    };
    HomePageComponent.prototype.getData = function () {
        var _this = this;
        this.service.shareDataSubject.subscribe(function (recievedData) { _this.userName = recievedData; });
        this.userName = localStorage.getItem('name');
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/header/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/header/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/header/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/search/search.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n   \n    margin: 0;\n    width: 100%;\n    height: 59vh;\n    background-repeat: no-repeat;\n    \n    background: linear-gradient(to right bottom,rgba(219, 9, 9, 0.9), rgba(51, 51, 51, 0.8)),\n    url(\"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=555e87ecbee5d64ab3ae0e0eb6cb1e29&auto=format&fit=crop&w=500&q=60\");\n    background-size: cover;\n    background-position: bottom;\n \n  }\n.grid{\n    max-width: 60%;\n    margin: 5px;\n    \n}\n.header{\n    color: firebrick;\n    font-size: 20px;\n    text-transform: capitalize;\n}\n.email,.phone,.birthday,.emp,.sex{\n    color: firebrick;\n    font-size: 20px;\n    font-weight: 200;\n    letter-spacing: 2px;\n}\ninput[type = text]{\n    position: absolute;\n    right: 30px;\n    width: 18%;\n    height: 30px;\n    border-radius: 25px;\n    border: 1px solid white;\n    opacity: 0.6;\n    outline: none;\n    font-size: 18px;\n    margin-top: 70px;\n    padding: 17px 17px;\n    transition: all .3s ease;\n}\ninput:focus{\n    width: 23%;\n}\n.bir,.se{\n    float:right;\n}\n.icon{\n    color: black;\n    margin-right: 7px;\n    margin-top: 4px;\n}\n.icon-1{\n    font-size: 18px;\n    margin-right: 1px;\n    margin-top: 10px;\n}\n.search{\n    position: absolute;\n    right:  50px;\n    margin-top: 76px;\n    color: lightslategray;\n}\n.main {\n    padding: 16px;\n    margin-top: 50px;\n    height: 150px; \n    margin-left: 550px;\n    \n  }\n.page{\n      \n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 50px;\n      \n  }\n.navbar {\n    \n    position: fixed;\n    width: 100%;\n    height: 100px;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 8vh; \n    \n    background-color:rgba(219, 9, 9, 0.9);\n    \n}\n.text-1{\n    color:whitesmoke;\n    display: block;\n    font-size: 40px;\n    font-weight: 200;\n    letter-spacing: 7px;\n    margin-top: 40px;\n    text-align: center;\n    \n  }\n.img{\n\n     position: static;\n     float: inherit;\n     margin-left: 39%;\n      width: 400px;\n      margin-top: 190px;\n    \n  }\n.btn-1,.btn-2,.btn-3{\n      font-size: 21px;\n      background-color:rgba(219, 9, 9, 0.1);\n      padding: 4px 0 ;\n      outline: none;\n      margin-left: 15px;\n      padding: 0 7px;\n  }\n.btn-3{\n      position: absolute;\n      right: 30px;\n      padding: 0 7px;\n  }\n.page .ngx-pagination .current {\n  \n    background-color: firebrick;\n  \n  }"

/***/ }),

/***/ "./src/app/header/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/header/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"head\">\n   <div> <input type=\"text\" [(ngModel)]=\"filteredName\" (input) = \"onSearch($event)\" placeholder=\"Search A Fellow Accionite\"><mat-icon class=\"search\">search</mat-icon></div>\n\n        <img class=\"img\" src=\"https://static1.squarespace.com/static/5ab6b93e5b409be7fa331cf1/t/5ac67b8c575d1f09cf1c833c/1535701410823/?format=1500w\" alt=\"\">\n        <div class=\"text-1\">\n          <p>Your Friends At <span style=\"color:lightslategrey;font-weight: 500;\">Accion Labs</span></p>\n        </div>\n </div>\n\n<div class=\"main\">\n \n  <mat-accordion>\n     <mat-expansion-panel class=\"grid\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" *ngFor=\"let tile of tiles | orderBy: 'firstname'  | paginate: { itemsPerPage: 5,currentPage: p}\"> \n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"header\">\n          <mat-icon class=\"icon\">person</mat-icon> {{tile.firstname}} {{ tile.surname}}\n        </mat-panel-title>\n       \n      </mat-expansion-panel-header>\n      <div class=\"details\">\n        Email : <span class=\"email\"> {{tile.email}}</span>\n        <span class=\"bir\"> Birthday : <span class=\"birthday\"> {{tile.dob | date}}</span></span> <br>\n        Phone : <span class=\"phone\"> {{tile.mobile}}</span>\n        <span class=\"se\">Sex : <span class=\"sex\"> {{tile.gender}} </span></span> <br>\n        Employee Id : <span class=\"emp\"> {{tile.emp_id}} </span>\n      </div>\n    </mat-expansion-panel>\n    <div class=\"page\">\n      <pagination-controls class=\"custom-pagination-style\" (pageChange)=\"p=$event\"></pagination-controls>\n    </div>\n  </mat-accordion>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth-gaurd.service */ "./src/app/service/auth-gaurd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, service, auth) {
        this.router = router;
        this.service = service;
        this.auth = auth;
        this.p = 1;
        this.tiles = [];
        this.success = false;
    }
    SearchComponent.prototype.logout = function () {
        // let tocken = localStorage.removeItem('isLogin');
        // if(tocken){
        //   this.router.navigate(['login']);
        // }
        localStorage.removeItem("isLogin");
        localStorage.removeItem("name");
        this.router.navigate(['login']);
    };
    SearchComponent.prototype.userData = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (response) {
            _this.success = true;
            var a = response.user;
            _this.tiles = a;
            _this.resultData = a;
            // this.tiles = response.user;  
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.userData();
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
    };
    SearchComponent.prototype.onSearch = function (searchData) {
        var filterData = Object.assign([], this.resultData);
        this.tiles = this.search(filterData, this.filteredName, 'firstname', 'surname');
    };
    SearchComponent.prototype.search = function (value, filterString, propName, propName2) {
        if (!value)
            return [];
        if (!filterString)
            return value;
        filterString = filterString.toLowerCase();
        return value.filter(function (it) {
            return it[propName].toLowerCase().includes(filterString) || it[propName2].toLowerCase().includes(filterString);
        });
    };
    SearchComponent.prototype.sorted = function (value, fname) {
        return value.sort(function (a, b) {
            if (a[fname] > b[fname]) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/header/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/header/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n  padding: 30px;\n  overflow: hidden;\n}\n.header{\n    height: 90vh;\n    background-image: linear-gradient(to right bottom,rgba(219, 9, 9, 0.8), rgba(51, 51, 51, 0.8)), url(\"https://images.unsplash.com/photo-1525248152312-434c15a82f37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=278e9355f4294b036c0ad9d60750e752&auto=format&fit=crop&w=1980&q=80\"); \n    background-size: cover;\n    background-position: center;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85.3vh, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 85.3vh, 0 100%);\n    max-width:1860px;\n    max-height: 955px;\n}\n.flex-layout{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n.flex-layout>.card-layout{\n  text-align: center;\n  box-shadow: 1px 1px 1px 1px #ededed;\n  background-color: white;\n  padding: 15px 20px;\n  margin-bottom: 80px;\n  margin-top: 50px;\n}\n.heading-primary{\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.textbox{\n  margin-left: 25px;\n}\n.heading-primary-main{\n  display: block;\n  font-size: 50px;\n  font-weight: 400;\n  letter-spacing: 15px;\n  -webkit-animation: moveInLeft 1.5s ease-out;\n          animation: moveInLeft 1.5s ease-out;\n}\n.heading-primary-sub{\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 9px;\n  -webkit-animation: moveInRight 1.5s ease-out;\n          animation: moveInRight 1.5s ease-out;\n;\n}\n@-webkit-keyframes moveInRight {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px);\n            transform: translate(0px);\n  }\n}\n@keyframes moveInRight {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px);\n            transform: translate(0px);\n  }\n}\n@-webkit-keyframes moveInLeft {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px);\n            transform: translate(0px);\n  }\n}\n@keyframes moveInLeft {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px);\n            transform: translate(0px);\n  }\n}\nh1{\n  font-weight: 300;\n  margin-bottom: 12px;\n}\n.red{\n  color: firebrick;\n}\n.reg-msg{\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.4);\n  margin-right: 4px;\n}\n.btn-layout{\n  display: inline-block;\n}\n.btn-layout>.mat-button{\n  margin-top: 13px;\n  margin-right: 15px;\n  font-size: 20px;\n  margin-bottom: 25px;\n}\n.login-form-layout{\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.login-full-width{\n  width: 80%;\n  margin-bottom: 10px;\n}\n.forgot{\n  display: block;\n  margin-left: 265px;\n  margin-top: -25px;\n  padding-bottom: 9px;\n  color: #909090;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.1s;\n}\n.forgot:hover{\n  color: firebrick;\n}\n.forgotcard{\n  position: relative;\n  height: 181px;\n  width: 483px;\n  font-size: 23px;\n  margin-top: 70px;\n  font-weight: 300;\n}\n.forgot-layout{\n  position: absolute;\n  top: -30px;\n}\n.emailInp{\n  display: inline-block;\n  width: 400px;\n  margin-left: 30px;\n  font-size: 18px;\n}\n.btn-layout2{\n display: block;\n}\n.btn1{\n  margin: 15px 35px;;\n}\n.mail-icon{\n  display: inline-block;\n  font-size: 110px;\n  opacity: 0.7;\n  margin-right: 15px;\n  position: relative;\n  top:-50.5px;\n  left: 140px;\n}\n@media screen and (max-width:1859px){\n  .header{\n    width: 100%;\n  }\n}\n@media screen and (max-width:1410px){\n  .header{\n    width: 100%;\n  }\n}\n@media screen and (max-width:1180px){\n  .heading-primary-main{\n    display: block;\n    font-size: 40px;\n    font-weight: 400;\n    letter-spacing: 15px;\n  }\n  \n  .heading-primary-sub{\n    display: block;\n    font-size: 15px;\n    font-weight: 700;\n    letter-spacing: 9px;\n  }\n}\n@media screen and (max-width:900px){\n  .heading-primary-main{\n    display: block;\n    font-size: 30px;\n    font-weight: 400;\n    letter-spacing: 15px;\n  }\n  \n  .heading-primary-sub{\n    display: block;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: 9px;\n  }\n\n  .flex-layout{\n    width: 95%;\n  }\n}\n@media screen and (max-width: 720px) {\n    .main{\n      width: 100%;\n      padding: 10px;\n    }\n  \n    .heading-primary-main{\n      font-size: 25px;\n    }\n  \n    .heading-primary-sub{\n      font-size: 15px;\n    }\n\n    .flex-layout{\n      width: 95%;\n    }\n  }\n@media screen and (max-width: 630px ) {\n    .main{\n      width: 100%;\n      padding: 20px;\n    }\n  \n    .heading-primary-main{\n      font-size: 22px;\n    }\n  \n    .heading-primary-sub{\n      font-size: 11px;\n    }\n\n    .flex-layout{\n      width: 90%;\n    }\n\n    .card-layout{\n      width: 90%;\n    }\n  }\n\n \n\n\n  \n\n\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<header class=\"header\">\n        <div class=\"flex-layout\">\n            <div class=\"card-layout\">\n                <h1> <span *ngIf = \"show\"> Welcome </span><span *ngIf = \"!show\"> Hey </span><span class=\"red\">Accionite</span>!</h1>\n                <form class=\"login-form-layout\" [formGroup] = \"loginForm\" *ngIf = \"show\">\n                    <mat-form-field class=\"login-full-width\" >\n                      <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"Email\" [errorStateMatcher]=\"matcher\">\n                      <span matSuffix style=\"color: firebrick;\" >@accionlabs.com</span>\n                      <mat-error *ngIf=\"!loginForm.hasError('Email')  && !loginForm.hasError('required')\">\n                          Please enter a valid email address\n                        </mat-error>                  \n                    </mat-form-field>\n                    <mat-form-field class=\"login-full-width\">\n                      <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                      <mat-error *ngIf=\"!loginForm.hasError('password')\">\n                          Password is <strong>required</strong>\n                        </mat-error>       \n                    </mat-form-field> \n                    <a class=\"forgot\" (click) = \"onReset()\">Forgot password?</a>\n                \n                    <div class=\"btn-layout\">\n                        <button [disabled] = \"loginForm.invalid\" role=\"button\" (click)=\"onNavDash()\" mat-button color=\"primary\" type=\"submit\">Login</button>\n                        <button mat-button color=\"warn\" role=\"button\" (click)=\"navigateReg() \" ><span class=\"reg-msg\" >Not Yet Registered? </span> Register</button>\n                    </div>\n                </form>  \n                 <div class=\"forgotcard\" *ngIf = \"!show\">\n                     <div class=\"forgot-layout\">\n                            <mat-form-field class=\"emailInp\">\n                            <input matInput placeholder=\"Email to reset password\" type=\"email\" #passEmailInput>\n                             <span matSuffix style=\"color: firebrick;\" >@accionlabs.com</span>\n                            </mat-form-field>\n                            <div class=\"btn-layout2\">\n                                    <button mat-stroked-button color = \"primary\" class=\"btn1\" (click) = \"resetPassword(passEmailInput)\">Submit</button>\n                                    <button mat-stroked-button color = \"warn\" class=\"btn2\" (click) = \"navigateBack()\">Back</button>       \n                             </div>\n                            </div>\n                    </div>       \n            </div>     \n        </div>\n        \n    <div class=\"textbox\">\n      <div class=\"heading-primary\">\n        <span class=\"heading-primary-main\">Accion Friends Book</span>\n        <span class=\"heading-primary-sub\">Driving Outcomes Through Actions</span>\n      </div>\n    </div>\n  </header>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.Email = "";
        this.pass = "";
        this.success = false;
        this.hide = true;
        this.show = true;
        this.matcher = new MyErrorStateMatcher();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9_.]+$/i)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        var tocken = localStorage.getItem('isLogin');
        if (tocken) {
            this.router.navigate(['homepage']);
        }
    };
    LoginComponent.prototype.onNavDash = function () {
        var _this = this;
        var data = this.loginForm.value;
        var data1 = { "user": { email: data.Email + "@accionlabs.com", password: data.password } };
        this.service.login(data1).subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['homepage']);
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Good job!", "Succesfully Logged In", "success");
                localStorage.setItem('isLogin', 'true');
                _this.service.getUsers().subscribe(function (response) {
                    for (var i = 0; i < response.user.length; i++) {
                        _this.mail = _this.loginForm.value.Email + "@accionlabs.com";
                        if (_this.mail === response.user[i].email) {
                            _this.name = response.user[i].firstname;
                            localStorage.name = _this.name;
                            // localStorage.setItem('name',name);
                            _this.service.sendDataToOtherComponent(_this.name);
                        }
                    }
                });
                _this.router.navigate(['homepage']);
            }
            else if (response.success) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Good job!", "something is fishy", "success");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Sorry!", "Incorrect login", "error");
            }
        }, function (err) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Sorry", "Incorrect Login", "error");
        });
    };
    LoginComponent.prototype.navigateReg = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.navigateDash = function () {
        this.router.navigate(['homepage']);
    };
    LoginComponent.prototype.navigateBack = function () {
        this.show = true;
    };
    LoginComponent.prototype.onReset = function () {
        this.show = false;
    };
    LoginComponent.prototype.resetPassword = function (emailInput) {
        var _this = this;
        var emailData = emailInput.value + '@accionlabs.com';
        var data = { "user": { "email": emailData } };
        this.service.resetPassword(data).subscribe(function (response) {
            if (response.success) {
                _this.show = true;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("", "Email sent to " + emailData, "success");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Sorry ", "Email not found", "error");
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-1{\n    padding: 30px;\n}\n.main-layout{\n    display: flex;\n    flex-basis: 75%;\n    margin: 50px;\n    max-width:1860px;\n    max-height: 955px;\n    justify-content: center;\n    align-items: center;\n    background-repeat:no-repeat;\n    background-size: cover;\n    background-position: top;\n    margin: 0;\n    margin-top: 2.5px;\n    height: 90vh; \n    -webkit-clip-path: polygon(0 0, 100% 0,100% 85vh, 0 100%); \n            clip-path: polygon(0 0, 100% 0,100% 85vh, 0 100%);\n    background-image: linear-gradient(to right bottom,rgba(219, 9, 9, 0.8), rgba(51, 51, 51, 0.8)),\n    url(\"https://images.unsplash.com/photo-1527664557558-a2b352fcf203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4341976025ae49162643ccdb47a72a4d&auto=format&fit=crop&w=1051&q=80\");\n}\n.form-layout{\n    flex-direction: column;\n    background-color: white;\n    padding: 40px 30px;\n    margin-bottom: 40px;    \n}\n.inp-1,.inp-4,.inp-5{\n    margin-right: 4%;\n    \n}\n.div-3,.div-1,.div-2,.div-4{\n    min-width: 150px;\n    max-width: 100%;\n    width: 100%;\n    margin-top: 5px;\n    \n}\n.inp-1,.inp-2,.inp-4,.inp-6,.inp-8,.inp-5{\n    width: 48%;\n    \n}\n.inp-3{\n    width: 100%;\n}\n/* .inp-5{\n    width: 62.8%;\n} */\n.heading-primary{\n    color: #fff;\n    text-transform: uppercase;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n.textbox{\n    margin-left: 25px;\n  }\n.heading-primary-main{\n    display: block;\n    font-size: 50px;\n    font-weight: 400;\n    letter-spacing: 15px;\n    margin-right: 30px; \n    -webkit-animation: moveInLeft 1.5s ease-out; \n            animation: moveInLeft 1.5s ease-out;\n  }\n.heading-primary-sub{\n    display: block;\n    font-size: 20px;\n    font-weight: 700;\n    letter-spacing: 9px;\n    -webkit-animation: moveInRight 1.5s ease-out;\n            animation: moveInRight 1.5s ease-out;\n  }\n.content{\n    display: block;\n    font-size: 19px;\n    max-width: 500px;\n    margin-left:100px;\n    margin-top: 60px; \n    text-align: justify;\n    text-justify: inter-word;\n    -webkit-animation: moveFromBottom 1s ease-out;\n            animation: moveFromBottom 1s ease-out;\n}\n.swal-button{\n      background-color: firebrick;\n  }\n@-webkit-keyframes moveInRight {\n\n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(-100px);\n              transform: translateX(-100px);\n    }\n  \n    /* 70%{\n      transform: translateX(20px);\n    } */\n  \n    100% {\n      opacity: 1;\n      -webkit-transform: translate(0px);\n              transform: translate(0px);\n    }\n  }\n@keyframes moveInRight {\n\n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(-100px);\n              transform: translateX(-100px);\n    }\n  \n    /* 70%{\n      transform: translateX(20px);\n    } */\n  \n    100% {\n      opacity: 1;\n      -webkit-transform: translate(0px);\n              transform: translate(0px);\n    }\n  }\n@-webkit-keyframes moveInLeft {\n  \n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(100px);\n              transform: translateX(100px);\n    }\n  \n    /* 60%{\n      transform: translateX(-20px);\n    } */\n  \n    100% {\n      opacity: 1;\n      -webkit-transform: translate(0px);\n              transform: translate(0px);\n    }\n}\n@keyframes moveInLeft {\n  \n    0% {\n      opacity: 0;\n      -webkit-transform: translateX(100px);\n              transform: translateX(100px);\n    }\n  \n    /* 60%{\n      transform: translateX(-20px);\n    } */\n  \n    100% {\n      opacity: 1;\n      -webkit-transform: translate(0px);\n              transform: translate(0px);\n    }\n}\n@-webkit-keyframes moveFromBottom {\n\n        0% {\n            opacity: 0;\n            -webkit-transform: translateY(100px);\n                    transform: translateY(100px);\n          }\n/* \n          70% {\n              transform: translateY(-20px);\n          } */\n\n        100% {\n            opacity: 1;\n            -webkit-transform: translate(0px);\n                    transform: translate(0px);\n          } \n    }\n@keyframes moveFromBottom {\n\n        0% {\n            opacity: 0;\n            -webkit-transform: translateY(100px);\n                    transform: translateY(100px);\n          }\n/* \n          70% {\n              transform: translateY(-20px);\n          } */\n\n        100% {\n            opacity: 1;\n            -webkit-transform: translate(0px);\n                    transform: translate(0px);\n          } \n    }\n.swal-model{\n      \n      border: 3px solid black;\n  }\n.text-1{\n    \n    text-align: center;\n    margin-right: 45px;\n    margin-bottom: 20px;\n}\n@media screen and (max-width:1859px){\n    .main-layout{\n        width: 100%;\n    }\n    .form-layout{\n        margin-right: 30px;\n        margin-bottom: 45px;\n    }\n    .heading-primary-main{\n        display: block;\n    font-size: 40px;\n    font-weight: 400;\n    letter-spacing: 15px;\n    }\n    .heading-primary-sub{\n        display: block;\n        font-size: 15px;\n        font-weight: 700;\n        letter-spacing: 9px;\n    }\n    .content{\n        width: 70%;\n    }\n}\n@media screen and (max-width:1410px){\n    .main-layout{\n        width: 100%;\n    }\n    .heading-primary-main{\n        display: block;\n    font-size: 25px;\n    font-weight: 400;\n    letter-spacing: 15px;\n    }\n    .heading-primary-sub{\n        display: block;\n        font-size: 12px;\n        font-weight: 700;\n        letter-spacing: 9px;\n    }\n    .content{\n        width: 70%;\n    }\n}\n@media screen and (max-width:1230px){\n        .main-layout{\n            width: 100%;\n        }\n        .heading-primary-main{\n            display: block;\n            font-size: 20px;\n            font-weight: 400;\n            letter-spacing: 15px;\n        }\n        .heading-primary-sub{\n            display: block;\n            font-size: 0px;\n            font-weight: 700;\n            letter-spacing: 9px;\n        }\n        .content{\n            width: 70%;\n            font-size: 15px;\n        }\n        \n        .btn-2{\n            margin-top:40px;\n        }\n    \n}\n@media screen and (max-width:1230px){\n    .main-layout{\n        width: 1230px;\n    }\n}\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container-1\" [formGroup]=\"registerForm\"  >\n\n\n  <div class=\"main-layout\">\n    <div class=\"textbox\">\n      <div class=\"heading-primary\">\n        <span class=\"heading-primary-main\">Accion Friends Book</span>\n        <span class=\"heading-primary-sub\">Driving Outcomes Through Actions</span>\n        <span class=\"content\">\n          <p style=\"font-size:25px;\" class=\"content-animation\"> Fostering Collaboration </p> <br>\n          It's not enough to just encourage collaboration.\n          Companies need to create an environment where\n          collaboration happens seamlessly and effortlessly\n          and that's what differentiates most successful\n          companies from the rest.\n        </span>\n      </div>\n    </div>\n    <div class=\"form-layout\">\n      <h1 class=\"text-1\" style=\"font-weight:350;margin-left:50px;\">Register Here <span style=\"color:firebrick;\">\n          Accionite!</span></h1>\n      <div class=\"div-1\">\n        <mat-form-field class=\"inp-1\">\n          <input matInput placeholder=\"First Name\" formControlName=\"fname\" [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"!registerForm.hasError('required')\">\n            Enter <strong>valid</strong> Name\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"inp-2\">\n          <input matInput placeholder=\"Last Name\" formControlName=\"lname\" [errorStateMatcher]=\"matcher\" >\n          <mat-error *ngIf=\"!registerForm.hasError('pattern')\">\n            Enter <strong>valid </strong>Name\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"div-2\">\n        <mat-form-field class=\"inp-3\">\n          <input matInput placeholder=\"Email\" formControlName=\"Email\" [errorStateMatcher]=\"matcher\">\n          <span matSuffix style=\"color: firebrick;\" >@accionlabs.com</span>\n          \n          <mat-error *ngIf=\"!registerForm.hasError('pattern')\">\n            Enter <strong>valid </strong>Email Id\n          </mat-error>\n          \n        </mat-form-field>\n        \n      </div>\n      <div class=\"div-3\">\n        <mat-form-field class=\"inp-4\">\n            <span matPrefix>+91 &nbsp;</span>\n          <input matInput placeholder=\"Phone Number\" formControlName=\"phone\" [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"!registerForm.hasError('pattern')\">\n            Enter <strong>valid </strong>Phone Number\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"inp-6\">\n          <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"DOB\" formControlName=\"date\" [errorStateMatcher]=\"matcher\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"div-4\">\n        \n        <mat-form-field class=\"inp-5\">\n          <input matInput placeholder=\"Password\"  [type]=\"hide ? 'password' : 'text'\" formControlName=\"pass\" [errorStateMatcher]=\"matcher\">\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n          <mat-error *ngIf=\"!registerForm.hasError('required')\">\n            Password is <strong>Required </strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"inp-8\">\n          <input matInput placeholder=\"Employee Id\" formControlName=\"emp\" [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"!registerForm.hasError('required')\">\n             Enter <strong>valid </strong> Employee Id\n          </mat-error>\n        </mat-form-field>\n\n\n      </div>\n      <div class=\"div-5\">\n        <mat-radio-group value=\"Female\" class=\"inp-7\" style=\"margin-left:35%;\" formControlName=\"gender\">\n          <mat-radio-button style=\"margin-right:5px;\" value=\"Male\" > Male </mat-radio-button>\n          <mat-radio-button  value=\"Female\"> Female </mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <button mat-fab color=\"warn\" class=\"btn-2\" (click)=\"navigateLogin1()\" > <mat-icon >\n          keyboard_arrow_left</mat-icon> </button>\n      <button mat-button color=\"primary\" role=\"button\" class=\"btn-1\" style=\"margin-left:300px; font-size: 20px;\" type=\"submit\" [disabled]=\"registerForm.invalid\" (click)=\"navigateLogin()\" >Register</button>\n    </div>\n\n\n  </div>\n\n\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date(2000, 0, 1);
        this.registerForm = fb.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+[a-zA-Z ]+$')]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+[a-zA-Z ]*$')]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9._]+$')]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{10}$')]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            emp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{4}')])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.navigateLogin = function () {
        var _this = this;
        var data = this.registerForm.value;
        var data1 = { firstname: data.fname, surname: data.lname, mobile: data.phone, email: data.Email + "@accionlabs.com", dob: data.date, password: data.pass, emp_id: data.emp, gender: data.gender };
        this.service.register(data1).subscribe(function (response) {
            if (response.success) {
                swal("Congrats!!", " You are a member of Accion Labs", "success");
                ;
                _this.router.navigate(['login']);
            }
            else {
                alert(response.error);
            }
        });
    };
    RegisterComponent.prototype.navigateLogin1 = function () {
        this.router.navigate(['login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/service/auth-gaurd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-gaurd.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        var tocken = localStorage.getItem('isLogin');
        if (tocken) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceService = /** @class */ (function () {
    function ServiceService(http, router) {
        this.http = http;
        this.router = router;
        this.shareDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ServiceService.prototype.register = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].USER_REGISTER;
        return this.getPost(url, data, httpOption);
    };
    ServiceService.prototype.login = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].USER_LOGIN;
        return this.getPost(url, data, httpOption);
    };
    ServiceService.prototype.resetPassword = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].USER_FORGOT;
        return this.getPost(url, data, httpOption);
    };
    ServiceService.prototype.getPost = function (url, data, key) {
        return this.http.post(url, { "data": data }, key);
    };
    ServiceService.prototype.getUsers = function () {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].USER_LIST;
        return this.http.get(url).map(function (data) { return data; });
    };
    ServiceService.prototype.sendDataToOtherComponent = function (data) {
        this.shareDataSubject.next(data);
    };
    ServiceService.prototype.forgotPassword = function (data, id) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].USER_RESET + id;
        console.log({ "data": data });
        return this.http.post(url, { "data": data });
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-info/user-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    \n    position: fixed;\n    width: 100%;\n    height: 100px;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 8vh; \n    \n    background-color:rgba(219, 9, 9, 0.9);\n    \n}\n\n  .btn-1,.btn-2,.btn-3,.btn-4{\n    font-size: 21px;\n    background-color:rgba(219, 9, 9, 0.1);\n    padding: 4px 0 ;\n    outline: none;\n    margin-left: 15px;\n    padding: 0 7px;\n}\n\n  .btn-3{\n    position: absolute;\n    right: 30px;\n    padding: 0 7px;\n}\n\n  .head{\n\n    margin-top:8vh;\n    height: 59vh; \n\n    background-image: linear-gradient(to right bottom,rgba(219, 9, 9, 0.8), rgba(51, 51, 51, 0.8)),\n    url(\"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-0.3.5&s=11c31aebc80ec24448a30fd7f6f60c2c&auto=format&fit=crop&w=1189&q=80\");\n    background-repeat:no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    \n\n  }\n\n  .img{\n      \n    margin-left: 1600px;\n    width: 300px;\n    margin-top: 30px;\n  \n}\n\n  .info{\n    color:black;\n    display: block;\n    font-size: 50px;\n    font-weight: 100;\n    letter-spacing: 15px;\n    margin-top: 40px;\n    text-align: center;\n}\n\n  .pp{\n    border:2px solid black;\n    height: 200px;\n    -moz-border-radius:175px;\n    -webkit-border-radius: 175px;\n    width: 200px;\n    margin-top: 5%;\n    margin-left: 5%;\n}\n\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\n    <mat-toolbar-row>\n      <button mat-flat-button  class=\"btn-1\" >HOME</button>\n      <button mat-flat-button class=\"btn-2\" >FRIENDS</button>\n      <button mat-flat-button class=\"btn-4\">PROFILE</button>\n      <button mat-flat-button class=\"btn-3\" >LOGOUT</button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  \n  <div class=\"head\">\n    <img class=\"img\" src=\"https://static1.squarespace.com/static/5ab6b93e5b409be7fa331cf1/t/5ac67b8c575d1f09cf1c833c/1535701410823/?format=1500w\" alt=\"\"> \n  \n</div>\n\n<div class=\"personal-info\">\n  <div class=\"info\">\n      <p>Personal Information</p>\n  </div>\n  <div class=\"details\">\n    \n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/naresh/AFB-Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map