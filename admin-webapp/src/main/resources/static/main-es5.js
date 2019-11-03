(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\" class=\"footer font-style\">UMOVE &copy; 2019\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navigation/navigation.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navigation/navigation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"push\" class=\"sidenav\">\n    <mat-toolbar color=\"primary\" class=\"box\">\n      <ngx-avatar src=\"assets/img_avatar.png\" fxLayoutAlign=\"center center\"></ngx-avatar>\n      <p *ngIf=\"loginService.isUserLoggedIn()\" class=\"font-style\">&nbsp;&nbsp;Admin</p>\n    </mat-toolbar>\n    <mat-nav-list>\n        <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/dashboard\" (click)=\"sidenav.toggle()\"\n        routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n          true}\">\n          <mat-icon mat-list-icon>dashboard</mat-icon>\n          <span class=\"title\" mat-line>Dashboard</span>\n        </a>\n        <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/report\" (click)=\"sidenav.toggle()\"\n        routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n          true}\">\n          <mat-icon mat-list-icon>signal_cellular_alt</mat-icon>\n          <span class=\"title\" mat-line>Reports</span>\n        </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/users\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <span class=\"title\" mat-line>Users</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/documents\" (click)=\"sidenav.toggle()\" \n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>verified_user</mat-icon>\n        <span class=\"title\" mat-line>KYC Approval</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/users/supervisor\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <span class=\"title\" mat-line>Supervisors</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/campaigns\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>local_offer</mat-icon>\n        <span class=\"title\" mat-line>Campaigns</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/zones\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>compass_calibration</mat-icon>\n        <span class=\"title\" mat-line>Zones</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/vehicles\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>motorcycle</mat-icon>\n        <span class=\"title\" mat-line>Vehicles</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/types\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>directions_bike</mat-icon>\n        <span class=\"title\" mat-line>Vehicle Types</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link font-style\" routerLink=\"/fuel\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>local_gas_station</mat-icon>\n        <span class=\"title\" mat-line>Fuels</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/settings\" (click)=\"sidenav.toggle()\"\n      routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">\n        <mat-icon mat-list-icon>settings_applications</mat-icon>\n        <span class=\"title\" mat-line>Other settings</span>\n      </a>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar id=\"appToolbar\" [ngClass]=\"{'toolbar-fullscreen': (fullscreen$ | async)}\" color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"md-icon-button sidenav-toggle-button\"\n      [hidden]=\"sidenav.opened\">\n      <mat-icon aria-label=\"Menu\" class=\"material-icons\">menu</mat-icon>\n    </button>\n    <h1 class=\"component-title\">\n      <a class=\"title-link font-style\">{{title}}</a>\n    </h1>\n    <span class=\"toolbar-filler\"></span>\n    <button id=\"button-logout\" *ngIf=\"loginService.isUserLoggedIn()\" mat-button routerLink=\"/logout\" class=\"logout font-style\">Log\n      Out</button>\n  </mat-toolbar>\n\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\n    <div fxLayout=\"column\">\n        <h1 class=\"header\">\n            Settings\n        </h1>\n    </div>\n    <form class=\"settings-form\">\n        <mat-form-field class=\"settings-full-width\">\n            <input matInput #autocancelTime name=\"autocancelTime\" value=\"{{autocancelTimeValue}}\" type=\"text\"\n            placeholder=\"Autocancel Time (in mins)\" (change)=\"onChange(autocancelTime.name, autocancelTime.value)\">\n        </mat-form-field>\n\n        <mat-form-field class=\"settings-full-width\">\n            <input matInput #cancelThresholdTime name=\"cancelThresholdTime\" value=\"{{cancelThresholdTimeValue}}\"\n            type=\"text\" placeholder=\"Cancel Threshold Time (in mins)\" (change)=\"onChange(cancelThresholdTime.name,\n            cancelThresholdTime.value)\">\n        </mat-form-field>\n\n        <mat-form-field class=\"settings-full-width\">\n            <input matInput #vicinityDistance name=\"vicinityDistance\" value=\"{{vicinityDistanceValue}}\"\n            type=\"text\" placeholder=\"Vicinity Distance (in km)\" (change)=\"onChange(vicinityDistance.name,\n            vicinityDistance.value)\">\n        </mat-form-field>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/page-not-found/page-not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center\" class=\"error\">\n    <img src=\"https://www.telegraph.co.uk/content/dam/spark/Images/robot-error.jpg?imwidth=450\"\n    alt=\"page not found\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/add-vehicle-type/add-vehicle-type.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/add-vehicle-type/add-vehicle-type.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n\n        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n            fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Type Name</mat-label>\n                    <input matInput #input placeholder=\"Type Name\" formControlName=\"name\" required class=\"font-style\" autocomplete=\"off\">\n\n                    <mat-error *ngIf=\"rName.invalid\" class=\"font-style\">\n\n                        {{getErrorType()}}\n                    </mat-error>\n\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Mileage</mat-label>\n                    <input matInput #input placeholder=\"Mileage\" formControlName=\"mileage\" required class=\"font-style\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"Rkm.invalid\">\n\n                        {{getErrorkm()}}\n                    </mat-error>\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Vehicle CC</mat-label>\n                    <input matInput #input placeholder=\"vehicle CC\" formControlName=\"vehicleCC\" required\n                        class=\"font-style\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"Rcc.invalid\" class=\"font-style\">\n                        {{getErrorCC()}}\n\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Base Fare</mat-label>\n                    <input matInput #input placeholder=\"Base Fare\" formControlName=\"baseFare\" required\n                        class=\"font-style\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"Rbasefare.invalid\" class=\"font-style\">\n                        {{getErrorBaseFare()}}\n\n                    </mat-error>\n\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Fuel Type</mat-label>\n                    <mat-select formControlName=\"fuel\">\n                        <mat-option *ngFor=\"let fuel of  fuels\" [value]=\"fuel\" class=\"font-style\" class=\"font-style\">\n                            {{fuel.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Cost Per Minute</mat-label>\n                    <input matInput #input placeholder=\"Cost Per Minute\" formControlName=\"costPerMin\" required\n                        class=\"font-style\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"Rcosttime.invalid\" class=\"font-style\">\n\n                        {{getErrorCosttime()}}\n                    </mat-error>\n\n                </mat-form-field>\n                \n            </div>\n            \n        </div>\n        <div fxLayoutAlign=\"center center\">\n            <input name=\"file\" type=\"file\" class=\"ng-hide font-style inputFile\" (change)=\"onFileChanged($event)\"\n            #fileInput required>\n        </div>\n        \n        <button mat-raised-button class=\"btn font-style\" [disabled]='!typeForm.valid' color=\"primary\">\n            Submit\n        </button>\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/type-deatils/type-deatils.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/type-deatils/type-deatils.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\">\n    <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName font-style\">\n                <i class=\"material-icons back-btn\" (click)=\"back()\">\n                        keyboard_backspace\n                </i> {{name}}\n\n        </h1>\n    </div>\n</div>\n<div fxLayout=\"column\" class=\"space-top\">\n    <mat-card class=\"type\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <mat-card-title fxLayoutAlign=\"start\" class=\"font-style\">Fuel-type: {{fuelname}}</mat-card-title>\n        <br><br>\n        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Vehicle cc: {{cc}}</mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Cost/KM: {{costPerKm | number: '1.2-2'}}</mat-card-title>\n        </div>\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Cost/Min: {{costPerMin | number: '1.2-2'}}\n                    <span>\n                    <i class=\"material-icons iconCapacity\" (click)=\"update()\" >\n                        create\n                    </i>\n                </span>\n\n                </mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Mileage: {{mileage}}</mat-card-title>\n\n            </div>\n\n        </div>\n      <mat-card-title style=\"padding-left: 180px;\" class=\"font-style\">Base Fare: {{baseFare}}</mat-card-title>\n\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/types.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/types.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Vehicle Types\n    </h1>\n    <div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n            <img src=\"assets/no-record-found.jpeg\">\n        </div>\n        <ng-template #data>\n            <div fxLayout=\"row\" class=\"search\">\n                <mat-form-field fxFlex=\"20%\">\n                    <input matInput [(ngModel)]=\"term\" placeholder=\"Search\" class=\"font-style\">\n                </mat-form-field>\n            </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\n        fxLayoutAlign.lt-sm=\"center center\">\n\n            <app-vehicle-type-card *ngFor=\"let type of vehicleTypes | paginate: { itemsPerPage: 12, currentPage: p}  | filter:term\" [vehicleTypes]=\"type\">\n\n            </app-vehicle-type-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\"></pagination-controls>\n        </div>\n        </ng-template>\n        <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n            <button mat-fab color=\"primary\" (click)=\"add()\">\n                <i class=\"material-icons\">\n                    add\n                </i>\n            </button>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/update-types/update-types.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/update-types/update-types.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Cost/min </mat-label>\n                <input matInput #input placeholder=\"Cost/Min\" formControlName=\"costPerMin\" [(ngModel)]=\"costPerMin\"\n                 required class=\"font-style\" autocomplete=\"off\">\n                <mat-error *ngIf=\"Rcosttime.invalid\" class=\"font-style\">\n\n                    {{getErrorCosttime()}}\n                </mat-error>\n            </mat-form-field>\n        </div>\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn font-style\" [disabled]='!typeForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/vehicle-type-card/vehicle-type-card.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/vehicle-type-card/vehicle-type-card.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card my-card2\">\n      <mat-card-content fxLayoutAlign=\"center center\" >\n                <img mat-card-image src=\"{{url}}\" [lazyLoad]=\"url\">\n        </mat-card-content>\n    <mat-card-title  class=\"typeName font-style\">{{name}}</mat-card-title>\n    <mat-card-content class=\"font-style content\">Cost/km : {{costPerKm | number: '1.2-2'}}</mat-card-content>\n    <mat-card-content class=\"font-style content\">Cost/min :{{costPerMin | number: '1.2-2'}}</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/add-vehicle/add-vehicle.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n            fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Insurance No.</mat-label>\n                    <input minlength=\"6\" maxlength=\"10\" matInput #input placeholder=\"Insurance No.\"\n                        formControlName=\"insuranceNo\" required class=\"font-style\" autocomplete=\"off\">\n                    <mat-hint class=\"font-style\">\n                        Insurence No. is between 6-10 characters long\n                    </mat-hint>\n                    <mat-error *ngIf=\"RinsuranceNo.invalid\" class=\"font-style\">\n                        {{getErrorInsuranceNo()}}\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Vehicle Type</mat-label>\n                    <mat-select formControlName=\"vehicleType\">\n                        <mat-option *ngFor=\"let vehicleType of Vehicletypes\" [value]=\"vehicleType\" class=\"font-style\">\n                            {{vehicleType.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n               \n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Chassis Number.</mat-label>\n                    <input minlength=\"11\" maxlength=\"17\" matInput #input placeholder=\"Chassis No.\"\n                        formControlName=\"chassisNumber\" class=\"font-style\" required autocomplete=\"off\">\n                    <mat-hint class=\"font-style\">\n                        Chassis No. is between 11-17 characters long\n                    </mat-hint>\n                    <mat-error *ngIf=\"RchassisNumber.invalid\" class=\"font-style\">\n                        {{getErrorChassisNo()}}\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Registration No.</mat-label>\n                    <input matInput #input placeholder=\"Registration No\" formControlName=\"registrationNo\" required\n                        class=\"font-style\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"rNum.invalid\" class=\"font-style\">\n                        {{getErrorRegistrationNo()}}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n            <mat-form-field style=\"padding-right: 40%;\">\n                <input matInput [matDatepicker]=\"purchasedDate\" formControlName=\"purchasedDate\" [max]=\"todaydate\"\n                    placeholder=\"Vehicle Purchased Date\" #input class=\"font-style\" required autocomplete=\"off\">\n                <mat-datepicker-toggle matSuffix [for]=\"purchasedDate\"></mat-datepicker-toggle>\n                <mat-datepicker #purchasedDate></mat-datepicker>\n            </mat-form-field>\n    \n        \n        <button mat-raised-button [disabled]='!vehicleForm.valid' class=\"btn font-style\" color=\"primary\">\n            Submit\n        </button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/update-vehicles/update-vehicles.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Insurance No.</mat-label>\n                <input minlength=\"6\" maxlength=\"10\"  matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" [(ngModel)]=\"insuranceNo\" \n                class=\"font-style\" required autocomplete=\"off\">\n                <mat-hint class=\"font-style\">\n                    Insurence No. is between 6-10 characters long\n                </mat-hint>\n                <mat-error *ngIf=\"RinsuranceNo.invalid\" class=\"font-style\">\n                    {{getErrorInsuranceNo()}}\n                </mat-error>\n            </mat-form-field>\n            \n\n        </div>\n    </div>\n\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            \n            <mat-form-field>\n                <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" [min]=\"minDate\" placeholder=\"Vehicle Last Service  Date\" #input\n                class=\"font-style\" autocomplete=\"off\">\n                <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n                <mat-datepicker #lastServiceDate></mat-datepicker>\n            </mat-form-field>\n\n        </div>\n    </div>\n\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn font-style\" [disabled]='!vehicleForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-card/vehicle-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-card/vehicle-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card my-card2\">\n        <mat-card-content fxLayoutAlign=\"space-between\" >\n                <ngx-avatar class=\"font-style\" name=\"{{type}}\"></ngx-avatar>\n                <mat-chip-list aria-label=\"Fish selection\">\n            <mat-chip [ngStyle]=\"{'background-color':getColor(status)}\" class=\"status font-style content\">{{status}}</mat-chip>\n            </mat-chip-list>\n        </mat-card-content>\n        <mat-card-title class=\"typeName font-style\">{{registrationNo}}</mat-card-title>\n        <mat-card-content class=\"font-style content\">Vehicle Type: {{type}}</mat-card-content>\n    \n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\"> \n    <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n      <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName font-style\">\n            <i class=\"material-icons back-btn\" (click)=\"back()\">\n                    keyboard_backspace\n            </i> {{registrationNo}}\n\n        </h1>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n            <mat-label class=\"font-style\">Vehicle Status</mat-label>\n            <mat-select [(ngModel)]=\"status1\" (ngModelChange)=\"onChange($event)\" class=\"font-style\">\n                <mat-option *ngFor=\"let z of vehicleStatus\" [value]=\"z.value\" class=\"font-style\">\n                    {{z.viewValue}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</div>\n\n<div fxLayout=\"column\" class=\"space-top\">\n<mat-card class=\"vehicle\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n    <mat-card-title fxLayoutAlign=\"start\" class=\"date font-style\">{{purchasedDate| date:\"dd LLLL yyyy\"}}\n        <button mat-button class=\"icon\" (click)=\"update()\">\n            <mat-icon>\n                    create\n            </mat-icon>\n    </button>\n    </mat-card-title>\n    <br><br>\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\"\n    class=\"form\" fxLayoutAlign=\"center center\">    \n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n         <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Insurance No: {{insuranceNo}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Last Service Date: {{lastServiceDate| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Vehicle Type: {{name}}</mat-card-title>\n</div>\n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n \n    <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Cost/KM: {{costkm | number: '1.2-2'}}</mat-card-title>\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Cost/Min: {{costtime | number: '1.2-2'}}</mat-card-title>\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Chassis No: {{chassisNumber}}</mat-card-title>\n\n\n        </div>\n\n    </div>\n\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicles.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n        <h1 class=\"header\">\n            Vehicles\n        </h1>\n        <div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n                <img src=\"assets/no-record-found.jpeg\">\n            </div>\n            <ng-template #data>\n                <div fxLayout=\"row\" class=\"search font-style\">\n                    <mat-form-field fxFlex=\"20%\">\n                        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n                    </mat-form-field>\n                </div>\n        <div fxLayout=\"column wrap\">\n                <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\n                 fxLayoutAlign.lt-sm=\"center center\">\n                    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 12, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n                </div>\n                <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\"></pagination-controls>\n                </div>\n                </ng-template>\n                <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n                    <button mat-fab color=\"primary\" (click)=\"add()\">\n                        <i class=\"material-icons\">\n                            add\n                        </i>\n                    </button>\n                </div>\n            </div>\n\n\n<!-- <app-search-vehicleType></app-search-vehicleType> -->\n<!-- <div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 9, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n          add\n      </i>\n    </button>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-supervisor/add-supervisor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-supervisor/add-supervisor.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label class=\"font-style\">Supervisor Name</mat-label>\n                                <input #input aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n                                class=\"font-style\" [(ngModel)]=\"sname2\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedclient($event)\" [displayWith]=\"getOptionText\">\n                                    <mat-option *ngFor=\"let option of options ; let i = index\" [value]=\"option\" class=\"font-style\">\n                                        {{option.name}}\n                                    </mat-option>\n                                </mat-autocomplete>\n        \n                            </mat-form-field>\n                            <button mat-raised-button class=\"btn font-style\" [disabled]='!zoneForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n        \n            </div>\n        </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-vehicle/add-vehicle.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-vehicle/add-vehicle.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                        <mat-label class=\"font-style\">Select Vehicle</mat-label>\n                        <input #input aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" class=\"font-style\">\n                        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedclient($event)\" [displayWith]=\"getOptionText\">\n                            <mat-option *ngFor=\"let option of options ; let i = index\" [value]=\"option\" class=\"font-style\">\n                                {{option.registrationNo}}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n    </div>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn font-style\"  color=\"primary\">\n            Submit\n        </button>\n\n    </div>\n\n\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-zone/add-zone.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-zone/add-zone.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Zone Locality</mat-label>\n                <input matInput #input placeholder=\"Zone Locality\" formControlName=\"locality\" required (keyup.enter)=\"getLocation()\"  (blur)=\"getLocation()\" autocomplete=\"off\">\n                <mat-hint class=\"font-style\">\n                    Press Enter after writing locality\n                </mat-hint>\n                <mat-error *ngIf=\"locality.invalid\" class=\"font-style\">\n                                        {{getErrorZoneLocality()}}\n                                    </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlex>\n\n                <mat-label class=\"font-style\">Zone Name</mat-label>\n                <input matInput #input placeholder=\"Zone Name\" formControlName=\"name\" required class=\"font-style\" autocomplete=\"off\">\n\n                <mat-error *ngIf=\"zone.invalid\" class=\"font-style\">\n\n                                            {{getErrorZoneName()}}\n                                        </mat-error>\n\n            </mat-form-field>\n\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Capacity</mat-label>\n                <input matInput #input placeholder=\"Capacity\" formControlName=\"capacity\" required class=\"font-style\" autocomplete=\"off\">\n                <mat-error *ngIf=\"capacity.invalid\" class=\"font-style\">\n\n                                                                {{getErrorCapacity()}}\n                                                            </mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button class=\"btn font-style\" [disabled]='!zoneForm.valid' color=\"primary\">\n                Submit\n            </button>\n\n\n    </div>\n\n\n\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/supervisor-details/supervisor-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/supervisor-details/supervisor-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n        <mat-card class=\"supervisor\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n                fxLayoutGap=\"20px\">\n\n                <div *ngIf=\"sName === null; else sup\">\n                        <mat-card-title fxLayoutAlign=\"start\" class=\"zoneName font-style\">Supervisor\n                        </mat-card-title>\n                        <br><br>\n                        <h2 fxLayoutAlign=\"center center\" class=\"font-style\">No Supervisor allocated!!!</h2>\n                        <div fxLayoutAlign=\"center center\">\n                                <button mat-flat-button (click)=\"addSupervisor()\" color=\"accent\" class=\"font-style  btn-sup\">\n                                        Add Supervisor\n                                </button>\n                        </div>\n                </div>\n                <br><br>\n\n                <ng-template #sup>\n                        <mat-card-title fxLayoutAlign=\"start\" class=\"zoneName font-style\">Supervisor\n                                <button mat-button class=\"icon\" disabled=\"{{buttonDisabled2}}\"\n                                        (click)=\"updateSupervisor()\">\n                                        <mat-icon>\n                                                create\n                                        </mat-icon>\n                                </button>\n                        </mat-card-title>\n                        <br><br>\n                        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n                                class=\"form\" fxLayoutAlign=\"center center\">\n                                <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\"\n                                        fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                                        <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Name: {{sName}}\n                                        </mat-card-title>\n                                        <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Contact No:\n                                                {{sNumber}}\n                                        </mat-card-title>\n\n\n                                </div>\n                                <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\"\n                                        fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                                        <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Email:\n                                                {{sEmail}}</mat-card-title>\n                                        <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Shift: Daily\n                                        </mat-card-title>\n\n                                </div>\n                        </div>\n                </ng-template>\n\n        </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/update-zones/update-zones.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/update-zones/update-zones.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n\n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label class=\"font-style\">Zone Capacity</mat-label>\n                                <input matInput maxlength=\"6\" #input placeholder=\"Zone Capacity\" formControlName=\"capacity\" [(ngModel)]=\"cap\" required\n                                class=\"font-style\" autocomplete=\"off\">\n                                <mat-error *ngIf=\"capacity.invalid\" class=\"font-style\">\n\n                                    {{getErrorCapacity()}}\n                                </mat-error>\n                            </mat-form-field>\n\n                     <button mat-raised-button class=\"btn font-style\" [disabled]='!zoneForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n\n                        </div>\n                    </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/vehicle-details/vehicle-details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/vehicle-details/vehicle-details.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicles font-style\">\n    Vehicles\n\n</h1>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n<div class=\"vehicle-list\">\n        <mat-list class=\"center-list\">\n                <div *ngIf=\"displayCount === 0\" fxLayoutAlign=\"center center\" class=\"error-handling font-style\">\n                        <img src=\"http://miceemporio.com/img/no-record-found.jpeg\">\n                    </div>\n            <mat-list-item *ngFor=\"let folder of vehicles; let i = index\">\n                \n                <mat-icon mat-list-icon class=\"icon-size\"><span class=\"space\"></span>motorcycle</mat-icon>\n                <h4 mat-line><span class=\"rNo font-style\">{{folder.registrationNo}}</span>\n                    <span class=\"type font-style\">{{folder.vehicleType.name}}</span>\n                </h4>\n                <mat-divider></mat-divider>\n            </mat-list-item>\n        </mat-list>\n        \n</div>\n\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" disabled=\"{{buttonDisable}}\" (click)=\"add()\">\n        <i class=\"material-icons\">\n            add\n        </i>\n    </button>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-card/zone-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-card/zone-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card my-card2\">\n\n    <mat-card-content fxLayoutAlign=\"space-between\" >\n            <ngx-avatar class=\"font-style\" name=\"{{locality}}\"></ngx-avatar>\n            <mat-chip-list aria-label=\"Fish selection\">\n        <mat-chip [ngStyle]=\"{'background-color':getColor(status)}\" class=\"status font-style content\">{{status}}</mat-chip>\n        </mat-chip-list>\n    </mat-card-content>\n    <mat-card-title class=\"zoneName font-style\">{{zoneNames}}</mat-card-title>\n    <mat-card-content class=\"font-style content\">{{city}}</mat-card-content>\n    <mat-card-content class=\"font-style content\">Total Vehicle Capacity: {{capacity}}</mat-card-content>\n    <mat-card-content class=\"font-style content\">Current Vehicle Capacity: {{count}}</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-details/zone-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-details/zone-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\">\n\n\n        <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n               \n                <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"zoneName space-name\">\n                               \n                        <i class=\"material-icons back-btn\" (click)=\"back()\">\n                                                keyboard_backspace\n                                        </i> {{name}}\n                </h1>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap.lt-md=\"0px\">\n                <mat-icon class=\"graph\">\n                        assessment\n                </mat-icon>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n                <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n                        <mat-label class=\"font-style\">Zone Status</mat-label>\n                        <mat-select [(ngModel)]=\"status\" (ngModelChange)=\"onChange($event)\" class=\"font-style\">\n                                <mat-option *ngFor=\"let z of zoneStatus\" [value]=\"z.value\"\n                                        [ngStyle]=\"{'color':getColor(z.viewValue)}\">\n                                        {{z.viewValue}}\n                                </mat-option>\n                        </mat-select>\n                </mat-form-field>\n        </div>\n</div>\n\n<div fxLayout=\"column\">\n        <mat-card class=\"zone\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n                fxLayoutGap=\"20px\">\n\n                <br><br><br><br>\n                <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n                        class=\"form\" fxLayoutAlign=\"center center\">\n                        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\"\n                                class=\"col\">\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">City: {{city}}\n                                </mat-card-title>\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Country: {{country}}\n                                </mat-card-title>\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Locality: {{locality}}\n                                </mat-card-title>\n\n                        </div>\n                        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\"\n                                class=\"col\">\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">State: {{state}}\n                                </mat-card-title>\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Pincode: {{pincode}}\n                                </mat-card-title>\n                                <mat-card-title fxLayoutAlign=\"center center\" class=\"font-style\">Capacity: {{capacity}}\n                                        <span>\n                                                <i class=\"material-icons iconCapacity\" (click)=\"update()\">\n                                                        create\n                                                </i>\n                                        </span>\n\n                                </mat-card-title>\n                        </div>\n                </div>\n\n        </mat-card>\n\n        <app-supervisor-details></app-supervisor-details>\n        <app-vehicle-details></app-vehicle-details>\n        <!-- <ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zones.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zones.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n           \n        Zones\n    </h1>\n    <div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n            <img src=\"assets/no-record-found.jpeg\">\n        </div>\n        <ng-template #data>\n            <div fxLayout=\"row\" class=\"search\">\n                <mat-form-field fxFlex=\"20%\">\n                    <input matInput [(ngModel)]=\"term\" placeholder=\"Search\" class=\"font-style\">\n                </mat-form-field>\n            </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\n            fxLayoutAlign.lt-sm=\"center center\">\n            <app-zone-card *ngFor=\"let zone of zones | paginate: { itemsPerPage: 12, currentPage: p } | filter:term\"\n                [zones]=\"zone\">\n            </app-zone-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\"></pagination-controls>\n    </div>\n    </ng-template>\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign =\"end\" class=\"add-button\">\n        <button mat-fab color=\"primary\" (click)=\"add()\">\n            <i class=\"material-icons\">\n                add\n            </i>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/service/auth-guard.service */ "./src/app/authentication/service/auth-guard.service.ts");





var routes = [
    { path: 'fuel', loadChildren: function () { return __webpack_require__.e(/*! import() | fuel-fuel-module */ "fuel-fuel-module").then(__webpack_require__.bind(null, /*! ./fuel/fuel.module */ "./src/app/fuel/fuel.module.ts")).then(function (m) { return m.FuelModule; }); }, canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'documents', loadChildren: function () { return __webpack_require__.e(/*! import() | documents-documents-module */ "documents-documents-module").then(__webpack_require__.bind(null, /*! ./documents/documents.module */ "./src/app/documents/documents.module.ts")).then(function (m) { return m.DocumentsModule; }); },
        canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'users', loadChildren: function () { return Promise.all(/*! import() | users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(function (m) { return m.UsersModule; }); } },
    { path: 'report', loadChildren: function () { return Promise.all(/*! import() | report-report-module */[__webpack_require__.e("default~dashboard-dashboard-module~report-report-module"), __webpack_require__.e("report-report-module")]).then(__webpack_require__.bind(null, /*! ./report/report.module */ "./src/app/report/report.module.ts")).then(function (m) { return m.ReportModule; }); } },
    { path: 'zones', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./zones/zones.module */ "./src/app/zones/zones.module.ts")).then(function (m) { return m.ZonesModule; }); }, canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: '', loadChildren: function () { return __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(function (m) { return m.AuthenticationModule; }); } },
    { path: 'types', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./types/types.module */ "./src/app/types/types.module.ts")).then(function (m) { return m.TypesModule; }); }, canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'vehicles', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts")).then(function (m) { return m.VehiclesModule; }); }, canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'settings', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/settings/settings.module.ts")).then(function (m) { return m.SettingsModule; }); } },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~report-report-module"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'campaigns', loadChildren: function () { return __webpack_require__.e(/*! import() | campaigns-campaigns-module */ "campaigns-campaigns-module").then(__webpack_require__.bind(null, /*! ./campaigns/campaigns.module */ "./src/app/campaigns/campaigns.module.ts")).then(function (m) { return m.CampaignsModule; }); } },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/navigation/navigation.component */ "./src/app/core/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _zones_zones_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zones/zones.module */ "./src/app/zones/zones.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts");
/* harmony import */ var _types_types_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/types.module */ "./src/app/types/types.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/fullscreen.service */ "./src/app/shared/fullscreen.service.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/settings.module */ "./src/app/settings/settings.module.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _zones_zones_module__WEBPACK_IMPORTED_MODULE_15__["ZonesModule"],
                _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_19__["VehiclesModule"],
                _types_types_module__WEBPACK_IMPORTED_MODULE_20__["TypesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_23__["AvatarModule"],
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_24__["SettingsModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_22__["FullscreenService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/service/auth-guard.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/authentication/service/auth-guard.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication/service/authentication.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication/service/authentication.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/service/authentication.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        // console.log(!(user === null))
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding:30px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcGFkZGluZzozMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/navigation.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-fullscreen {\n  display: none;\n  \n}\n\n.toolbar-filler {\n  flex: 1 1 auto;\n  background-color: rebeccapurple;\n  width: 50px;\n}\n\n.sidenav {\n  width: 230px;\n  height: auto;\n  position: fixed;\n}\n\n.box {\n  height: 200px;\n}\n\n.logout {\n  font-size: 1em;\n}\n\nmat-sidenav {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItZnVsbHNjcmVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIFxufVxuXG4udG9vbGJhci1maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5sb2dvdXQge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/service/authentication.service */ "./src/app/authentication/service/authentication.service.ts");
/* harmony import */ var src_app_shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/fullscreen.service */ "./src/app/shared/fullscreen.service.ts");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(fullscreenService, loginService) {
        this.fullscreenService = fullscreenService;
        this.loginService = loginService;
        this.title = 'Operational Portal';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.fullscreen$ = this.fullscreenService.fullscreen$;
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: src_app_shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__["FullscreenService"] },
        { type: src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/core/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/fuel/fuel.service.ts":
/*!**************************************!*\
  !*** ./src/app/fuel/fuel.service.ts ***!
  \**************************************/
/*! exports provided: FuelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelService", function() { return FuelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var FuelService = /** @class */ (function () {
    function FuelService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fuelBaseApi;
    }
    FuelService.prototype.getFuel = function () {
        console.log(this.baseUrl);
        return this.httpClient.get(this.baseUrl);
    };
    FuelService.prototype.createFuel = function (fuel) {
        return this.httpClient.post(this.baseUrl, fuel);
    };
    FuelService.prototype.getFuelByName = function (name) {
        console.log(this.baseUrl + '?name=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    };
    FuelService.prototype.updateFuel = function (name, fuel) {
        return this.httpClient.patch(this.baseUrl + '/' + name, fuel);
    };
    FuelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FuelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FuelService);
    return FuelService;
}());



/***/ }),

/***/ "./src/app/settings/service/settings.service.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/service/settings.service.ts ***!
  \******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SettingsService = /** @class */ (function () {
    function SettingsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].bookingService + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].configBaseApi;
    }
    SettingsService.prototype.getConfigurations = function () {
        return this.httpClient.get(this.baseUrl);
    };
    SettingsService.prototype.updateConfigurationByName = function (name, value) {
        return this.httpClient.patch(this.baseUrl + '/' + name + '?configValue=' + value, {});
    };
    SettingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");




var routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] }];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    margin-left: 10%;\n    margin-bottom: 50px;\n    font-size: 2em;\n    padding-top: 5%;\n}\n.settings-full-width {\n    width: 100%;\n}\n.settings {\n    padding-bottom: 20%;\n}\n@media only screen and (max-width: 600px) {\n\n    .settings {\n        padding-bottom: 80%;\n    } \n\n    .settings-form { \n        min-width: 100px;\n        max-width: 300px;\n        width: 100%;\n        margin-left: 10%;\n        margin-bottom: 50px;\n        padding-top: 5%;\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBR0E7O0lBRUk7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG4uc2V0dGluZ3MtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuc2V0dGluZ3Mge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogODAlO1xuICAgIH0gXG5cbiAgICAuc2V0dGluZ3MtZm9ybSB7IFxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/settings.service */ "./src/app/settings/service/settings.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, notificationService) {
        this.settingsService = settingsService;
        this.notificationService = notificationService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getConfigurations().subscribe(function (response) {
            // tslint:disable-next-line: no-string-literal
            _this.configurations = response['data'];
            console.log('Response is ', _this.configurations);
            _this.configurations.map(function (configList) {
                if (configList.name === 'autocancelTime') {
                    _this.autocancelTimeValue = configList.value;
                }
                if (configList.name === 'cancelThresholdTime') {
                    _this.cancelThresholdTimeValue = configList.value;
                }
                if (configList.name === 'vicinityDistance') {
                    _this.vicinityDistanceValue = configList.value;
                }
            });
        });
    };
    SettingsComponent.prototype.onChange = function (name, value) {
        var _this = this;
        this.settingsService.updateConfigurationByName(name, value).subscribe(function (response) {
            _this.notificationService.success('Updated successfully!!');
            console.log('Response of updated time: ', response);
        }, function (error) {
            if (error.status === 400) {
                _this.notificationService.warn('Updation Failed!!');
            }
        });
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/shared/fullscreen.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/fullscreen.service.ts ***!
  \**********************************************/
/*! exports provided: FullscreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenService", function() { return FullscreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FullscreenService = /** @class */ (function () {
    function FullscreenService(router) {
        var _this = this;
        this.router = router;
        this.fullscreen$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            var route = _this.router.config.find(function (r) {
                return '/' + r.path === event.url.split('?')[0];
            });
            return route && route.fullscreen ? true : false;
        }));
    }
    FullscreenService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FullscreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FullscreenService);
    return FullscreenService;
}());



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    NotificationService.prototype.success = function (msg) {
        this.config.panelClass = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.warn = function (msg) {
        this.config.panelClass = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    padding-top: 14%;\n    padding-bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAgIHBhZGRpbmctdG9wOiAxNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            exports: [_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/types/add-vehicle-type/add-vehicle-type.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/types/add-vehicle-type/add-vehicle-type.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background-color: white;\n}\n\ncontroles-container{\n  width: 100%;\n  padding: 5%;    \n}\n\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.controles-container > * {\n  width: 100%;\n  }\n\n.btn {\n  width: 16em; height: 60px;\n }\n\n.btn-dialog-close{\n  width: 45px;\n  min-width: 0px !important;\n  height: 40px;\n  padding: 0px !important;\n}\n\n.inputFile {\n\tfont-size: 1.25em;\n    font-weight: 700;\n    color: black;\n    display: inline-block;\n    padding-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvYWRkLXZlaGljbGUtdHlwZS9hZGQtdmVoaWNsZS10eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7O0FBRUY7RUFDRSxXQUFXLEVBQUUsWUFBWTtDQUMxQjs7QUFFQTtFQUNDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtDQUNDLGlCQUFpQjtJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL2FkZC12ZWhpY2xlLXR5cGUvYWRkLXZlaGljbGUtdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5idG4ge1xuICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuIH1cblxuIC5idG4tZGlhbG9nLWNsb3Nle1xuICB3aWR0aDogNDVweDtcbiAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0RmlsZSB7XG5cdGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/types/add-vehicle-type/add-vehicle-type.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/types/add-vehicle-type/add-vehicle-type.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddVehicleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleTypeComponent", function() { return AddVehicleTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_fuel_fuel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/fuel/fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var AddVehicleTypeComponent = /** @class */ (function () {
    function AddVehicleTypeComponent(dialogRef, fb, route, router, typeService, fuelService, http) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.typeService = typeService;
        this.fuelService = fuelService;
        this.http = http;
        this.datas = [];
        this.fuels = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].zoneService + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].typeBaseApi;
        this.typeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9 \-]*$')]],
            mileage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            vehicleCC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            costPerMin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+(\.[0-9][0-9]?)?')]],
            baseFare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+(\.[0-9][0-9]?)?')]],
            fuel: [],
            url: []
        });
    }
    Object.defineProperty(AddVehicleTypeComponent.prototype, "rName", {
        get: function () {
            return this.typeForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rcc", {
        get: function () {
            return this.typeForm.get('vehicleCC');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rkm", {
        get: function () {
            return this.typeForm.get('mileage');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rcosttime", {
        get: function () {
            return this.typeForm.get('costPerMin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rbasefare", {
        get: function () {
            return this.typeForm.get('baseFare');
        },
        enumerable: true,
        configurable: true
    });
    AddVehicleTypeComponent.prototype.getErrorType = function () {
        return this.rName.hasError('pattern') ? 'Type name should not contain special characters.' :
            '';
    };
    AddVehicleTypeComponent.prototype.getErrorkm = function () {
        return this.Rkm.hasError('pattern') ? 'Invalid Kilometer' :
            '';
    };
    AddVehicleTypeComponent.prototype.getErrorCosttime = function () {
        return this.Rcosttime.hasError('pattern') ? 'Invalid cost for  Time' :
            '';
    };
    AddVehicleTypeComponent.prototype.getErrorCC = function () {
        return this.Rcc.hasError('pattern') ? 'Invalid cc' :
            '';
    };
    AddVehicleTypeComponent.prototype.getErrorBaseFare = function () {
        return this.Rbasefare.hasError('pattern') ? 'Invalid cost for basefare' :
            '';
    };
    AddVehicleTypeComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddVehicleTypeComponent.prototype.onUpload = function () {
        var _this = this;
        console.log('this is upload call');
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
        console.log('', uploadData);
        //  this.http; is; the; injected; HttpClient;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].zoneService + '/api/v1/uploadFile?id=' + this.typeForm.value.name, uploadData)
            .subscribe(function (event) {
            var eventData;
            eventData = event;
            console.log('response', eventData.fileDownloadUri); // handle event here
            _this.typeForm.value.url = eventData.fileDownloadUri;
        });
    };
    AddVehicleTypeComponent.prototype.onClose = function () {
        this.typeForm.reset();
        this.dialogRef.close();
    };
    AddVehicleTypeComponent.prototype.getFuelList = function () {
        var _this = this;
        this.fuelService.getFuel().subscribe(function (res) {
            _this.fuels = res.data;
            console.log('types list: ', _this.fuels);
        });
    };
    AddVehicleTypeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onUpload()];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            console.log(_this.typeForm.value);
                            console.log(_this.typeForm.value, 'child');
                            _this.dialogRef.close(_this.typeForm.value);
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddVehicleTypeComponent.prototype.ngOnInit = function () {
        this.getFuelList();
    };
    AddVehicleTypeComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
        { type: src_app_fuel_fuel_service__WEBPACK_IMPORTED_MODULE_7__["FuelService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    AddVehicleTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vehicle-type',
            template: __webpack_require__(/*! raw-loader!./add-vehicle-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/add-vehicle-type/add-vehicle-type.component.html"),
            styles: [__webpack_require__(/*! ./add-vehicle-type.component.css */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.css")]
        })
    ], AddVehicleTypeComponent);
    return AddVehicleTypeComponent;
}());



/***/ }),

/***/ "./src/app/types/type-deatils/type-deatils.component.css":
/*!***************************************************************!*\
  !*** ./src/app/types/type-deatils/type-deatils.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.type {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n.space-top {\n    padding-top: 10%;\n    padding-bottom: 12%;\n}\n\n.iconCapacity {\n    \n    cursor: pointer;\n    margin-top: 20%;\n}\n\n@media only screen and (max-width: 600px) {\n    .type {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .vehicleName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n}\n\n.add-button {\n    padding-right: 450px;\n    padding-bottom: 2%;\n}\n\nmat-icon {\n    font-size: 60px;\n}\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n.status {\n    margin-top: 20px;\n}\n\n.back-btn {\n    margin-top: -8px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZS1kZWF0aWxzL3R5cGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdHlwZXMvdHlwZS1kZWF0aWxzL3R5cGUtZGVhdGlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGVOYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4uZ3JhcGgge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4NTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5zcGFjZS10b3Age1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEyJTtcbn1cblxuXG4uaWNvbkNhcGFjaXR5IHtcbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnR5cGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLnZlaGljbGVOYW1lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4uaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5iYWNrLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/types/type-deatils/type-deatils.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/types/type-deatils/type-deatils.component.ts ***!
  \**************************************************************/
/*! exports provided: TypeDeatilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDeatilsComponent", function() { return TypeDeatilsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-types/update-types.component */ "./src/app/types/update-types/update-types.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var TypeDeatilsComponent = /** @class */ (function () {
    function TypeDeatilsComponent(vehicleTypeService, route, matDialog, notificationService, location) {
        this.vehicleTypeService = vehicleTypeService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.location = location;
    }
    TypeDeatilsComponent.prototype.ngOnInit = function () {
        this.getVehicleTypeDetails();
    };
    TypeDeatilsComponent.prototype.getVehicleTypeDetails = function () {
        var _this = this;
        this.vehicleTypeService.getVehicleByName(this.route.snapshot.paramMap.get('name')).subscribe(function (res) {
            _this.type = res.data;
            console.log('data', res.data);
            console.log(res);
            _this.name = _this.type.name;
            _this.cc = _this.type.vehicleCC;
            _this.fuelname = _this.type.fuel.name;
            _this.costPerKm = _this.type.costPerKm;
            _this.costPerMin = _this.type.costPerMin;
            _this.mileage = _this.type.mileage;
            _this.baseFare = _this.type.baseFare;
        });
    };
    TypeDeatilsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            costPerMin: this.type.costPerMin,
        };
        var dRef = this.matDialog.open(_update_types_update_types_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTypesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            console.log('Back to parent', result);
            _this.vehicleTypeService.updateVehicleType(_this.name, result).subscribe(function (response) {
                _this.notificationService.success('Cost updated successfully!!');
                _this.getVehicleTypeDetails();
            }, function (error) {
                _this.notificationService.warn('not updated');
            });
        });
    };
    TypeDeatilsComponent.prototype.back = function () {
        this.location.back();
    };
    TypeDeatilsComponent.ctorParameters = function () { return [
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    TypeDeatilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-deatils',
            template: __webpack_require__(/*! raw-loader!./type-deatils.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/type-deatils/type-deatils.component.html"),
            styles: [__webpack_require__(/*! ./type-deatils.component.css */ "./src/app/types/type-deatils/type-deatils.component.css")]
        })
    ], TypeDeatilsComponent);
    return TypeDeatilsComponent;
}());



/***/ }),

/***/ "./src/app/types/types-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/types/types-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesRoutingModule", function() { return TypesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-deatils/type-deatils.component */ "./src/app/types/type-deatils/type-deatils.component.ts");





var routes = [{ path: '', component: _types_component__WEBPACK_IMPORTED_MODULE_3__["TypesComponent"] },
    { path: ':name', component: _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_4__["TypeDeatilsComponent"] }];
var TypesRoutingModule = /** @class */ (function () {
    function TypesRoutingModule() {
    }
    TypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TypesRoutingModule);
    return TypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/types/types.component.css":
/*!*******************************************!*\
  !*** ./src/app/types/types.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-vehicle-type-card {\n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n    app-vehicle-type-card {\n        width: 75%;\n    }\n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n   }\n\n.no-data {\n    padding-bottom: 15%;\n    padding-top: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7QUFFQTtJQUNDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90eXBlcy90eXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hcHAtdmVoaWNsZS10eXBlLWNhcmQge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGFwcC12ZWhpY2xlLXR5cGUtY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxufVxuXG4ucGFnaW5hdG9yIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICAgIGJhY2tncm91bmQ6ICMzNDQ5NTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIH1cblxuICAgLm5vLWRhdGEge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XG4gICAgcGFkZGluZy10b3A6IDEzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/types/types.component.ts":
/*!******************************************!*\
  !*** ./src/app/types/types.component.ts ***!
  \******************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vehicle-type/add-vehicle-type.component */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






var TypesComponent = /** @class */ (function () {
    function TypesComponent(typeService, matDialog, notificationService) {
        this.typeService = typeService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
        this.page = 0;
    }
    TypesComponent.prototype.ngOnInit = function () {
        this.getTypes();
    };
    TypesComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        var dRef = this.matDialog.open(_add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleTypeComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.typeService.createType(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    console.log(_this.message);
                    if (_this.message === 'Type already exists') {
                        _this.notificationService.warn('Type already exists');
                    }
                    else {
                        _this.notificationService.success('Type added succesfully');
                    }
                    _this.getTypes();
                });
            }
        });
    };
    TypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.typeService.getType().subscribe(function (res) {
            if (res.count === 0 || res.count === undefined) {
                _this.displayCount = 0;
            }
            else {
                _this.vehicleTypes = res.data;
                console.log(res, 'parent');
                _this.displayCount = 1;
            }
        });
    };
    TypesComponent.ctorParameters = function () { return [
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TypesComponent.prototype, "vehicleTypes", void 0);
    TypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-types',
            template: __webpack_require__(/*! raw-loader!./types.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/types.component.html"),
            styles: [__webpack_require__(/*! ./types.component.css */ "./src/app/types/types.component.css")]
        })
    ], TypesComponent);
    return TypesComponent;
}());



/***/ }),

/***/ "./src/app/types/types.module.ts":
/*!***************************************!*\
  !*** ./src/app/types/types.module.ts ***!
  \***************************************/
/*! exports provided: TypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesModule", function() { return TypesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _types_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types-routing.module */ "./src/app/types/types-routing.module.ts");
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _vehicle_type_card_vehicle_type_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-type-card/vehicle-type-card.component */ "./src/app/types/vehicle-type-card/vehicle-type-card.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./type-deatils/type-deatils.component */ "./src/app/types/type-deatils/type-deatils.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-vehicle-type/add-vehicle-type.component */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.ts");
/* harmony import */ var _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-types/update-types.component */ "./src/app/types/update-types/update-types.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");

















var TypesModule = /** @class */ (function () {
    function TypesModule() {
    }
    TypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_types_component__WEBPACK_IMPORTED_MODULE_4__["TypesComponent"], _vehicle_type_card_vehicle_type_card_component__WEBPACK_IMPORTED_MODULE_5__["VehicleTypeCardComponent"], _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_10__["TypeDeatilsComponent"], _add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicleTypeComponent"], _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_14__["UpdateTypesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _types_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypesRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                // MatDatepicker,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_15__["AvatarModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_16__["LazyLoadImageModule"]
            ],
            entryComponents: [_add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicleTypeComponent"], _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_14__["UpdateTypesComponent"]]
        })
    ], TypesModule);
    return TypesModule;
}());



/***/ }),

/***/ "./src/app/types/update-types/update-types.component.css":
/*!***************************************************************!*\
  !*** ./src/app/types/update-types/update-types.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    background-color: white;\n}\n\n.controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n.btn {\n        width: 16em; height: 60px;\n       }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdXBkYXRlLXR5cGVzL3VwZGF0ZS10eXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksV0FBVztJQUNYOztBQUVBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztBQUVBO1FBQ0UsV0FBVyxFQUFFLFlBQVk7T0FDMUIiLCJmaWxlIjoic3JjL2FwcC90eXBlcy91cGRhdGUtdHlwZXMvdXBkYXRlLXR5cGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuICAgICAgIH1cbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/types/update-types/update-types.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/types/update-types/update-types.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTypesComponent", function() { return UpdateTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");






var UpdateTypesComponent = /** @class */ (function () {
    function UpdateTypesComponent(dialogRef, fb, route, router, vehicleTypeService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.vehicleTypeService = vehicleTypeService;
        this.typeForm = this.fb.group({
            costPerMin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+(\.[0-9][0-9]?)?')]]
        });
        this.costPerMin = data.costPerMin;
    }
    Object.defineProperty(UpdateTypesComponent.prototype, "Rcosttime", {
        get: function () {
            return this.typeForm.get('costPerMin');
        },
        enumerable: true,
        configurable: true
    });
    UpdateTypesComponent.prototype.getErrorCosttime = function () {
        return this.Rcosttime.hasError('pattern') ? 'Invalid cost for  Time' :
            '';
    };
    UpdateTypesComponent.prototype.onClose = function () {
        // this.zoneForm.reset();
        this.dialogRef.close();
    };
    UpdateTypesComponent.prototype.onSubmit = function () {
        console.log(this.typeForm.value);
        this.dialogRef.close(this.typeForm.value);
    };
    UpdateTypesComponent.prototype.ngOnInit = function () {
    };
    UpdateTypesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_5__["VehicleTypeService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-types',
            template: __webpack_require__(/*! raw-loader!./update-types.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/update-types/update-types.component.html"),
            styles: [__webpack_require__(/*! ./update-types.component.css */ "./src/app/types/update-types/update-types.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UpdateTypesComponent);
    return UpdateTypesComponent;
}());



/***/ }),

/***/ "./src/app/types/vehicle-type-card/vehicle-type-card.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/types/vehicle-type-card/vehicle-type-card.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.typeName {\n    padding-top: 4%;\n}\n\nimg {\nheight: 30%;\nwidth: 55%;\n}\n\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    height: 270px;\n}\n\n.my-card2:hover {\n\n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.content {\n    font-size: 1.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdmVoaWNsZS10eXBlLWNhcmQvdmVoaWNsZS10eXBlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjs7QUFFQTtJQUNJLGtFQUFrRTtJQUNsRSwrQ0FBK0M7SUFDL0MsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxxRUFBcUU7QUFDekU7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90eXBlcy92ZWhpY2xlLXR5cGUtY2FyZC92ZWhpY2xlLXR5cGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udHlwZU5hbWUge1xuICAgIHBhZGRpbmctdG9wOiA0JTtcbn1cblxuaW1nIHtcbmhlaWdodDogMzAlO1xud2lkdGg6IDU1JTtcbn1cblxuLm15LWNhcmQyIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gICAgaGVpZ2h0OiAyNzBweDtcbn1cblxuLm15LWNhcmQyOmhvdmVyIHtcblxuICAgIGJveC1zaGFkb3c6IDAgN3B4IDI4cHggcmdiYSgwLDAsMCwwLjE1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/types/vehicle-type-card/vehicle-type-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/types/vehicle-type-card/vehicle-type-card.component.ts ***!
  \************************************************************************/
/*! exports provided: VehicleTypeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeCardComponent", function() { return VehicleTypeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var VehicleTypeCardComponent = /** @class */ (function () {
    function VehicleTypeCardComponent(router) {
        this.router = router;
    }
    VehicleTypeCardComponent.prototype.ngOnInit = function () {
        this.name = Object.values(this.vehicleTypes)[1];
        this.costPerKm = Object.values(this.vehicleTypes)[2];
        this.costPerMin = Object.values(this.vehicleTypes)[3];
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "zoneservice/api/v1/downloadFile/" + this.name;
        console.log(Object.values(this.vehicleTypes));
    };
    VehicleTypeCardComponent.prototype.ok = function () {
        console.log('hi');
        this.router.navigate(['types/', this.name]);
    };
    VehicleTypeCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VehicleTypeCardComponent.prototype, "vehicleTypes", void 0);
    VehicleTypeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-type-card',
            template: __webpack_require__(/*! raw-loader!./vehicle-type-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/vehicle-type-card/vehicle-type-card.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-type-card.component.css */ "./src/app/types/vehicle-type-card/vehicle-type-card.component.css")]
        })
    ], VehicleTypeCardComponent);
    return VehicleTypeCardComponent;
}());



/***/ }),

/***/ "./src/app/types/vehicle-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/types/vehicle-type.service.ts ***!
  \***********************************************/
/*! exports provided: VehicleTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeService", function() { return VehicleTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var VehicleTypeService = /** @class */ (function () {
    function VehicleTypeService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].typeBaseApi;
    }
    VehicleTypeService.prototype.getType = function () {
        return this.httpClient.get(this.baseUrl);
    };
    VehicleTypeService.prototype.getVehicleByName = function (name) {
        console.log('get vehicles by name called');
        console.log(this.baseUrl + '?registrationNo=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    };
    // tslint:disable-next-line: no-shadowed-variable
    VehicleTypeService.prototype.createType = function (VehicleType) {
        return this.httpClient.post(this.baseUrl, VehicleType);
    };
    VehicleTypeService.prototype.updateVehicleType = function (name, type) {
        return this.httpClient.patch(this.baseUrl + '/' + name, type);
    };
    VehicleTypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    VehicleTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VehicleTypeService);
    return VehicleTypeService;
}());



/***/ }),

/***/ "./src/app/vehicles/add-vehicle/add-vehicle.component.css":
/*!****************************************************************!*\
  !*** ./src/app/vehicles/add-vehicle/add-vehicle.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    background-color: white;\n}\n\ncontroles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n\n.shift-left {\n      padding-left: -100px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFFSjtJQUNJLFdBQVcsRUFBRSxZQUFZO0dBQzFCOztBQUVBO0lBQ0MsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztBQUVBO01BQ0ksb0JBQW9CO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTsgICAgXG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuICAgfVxuICBcbiAgIC5idG4tZGlhbG9nLWNsb3Nle1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNoaWZ0LWxlZnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAtMTAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/vehicles/add-vehicle/add-vehicle.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicles/add-vehicle/add-vehicle.component.ts ***!
  \***************************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_types_vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/types/vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(dialogRef, fb, route, router, vehicleService, typeService, snackBar) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.typeService = typeService;
        this.snackBar = snackBar;
        this.datas = [];
        this.todaydate = new Date();
        this.vehicleForm = this.fb.group({
            registrationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[A-Z]{2}[0-9]{1,2}[A-Z]{2}[0-9]{1,4}$')]],
            insuranceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            vehicleType: [''],
            status: 'Free',
            purchasedDate: [''],
            chassisNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]]
        });
    }
    Object.defineProperty(AddVehicleComponent.prototype, "rNum", {
        get: function () {
            return this.vehicleForm.get('registrationNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "RinsuranceNo", {
        get: function () {
            return this.vehicleForm.get('insuranceNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "status", {
        get: function () {
            return this.vehicleForm.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "Vehicletype", {
        get: function () {
            return this.vehicleForm.get('vehicleType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "purchasedDate", {
        get: function () {
            return this.vehicleForm.get('purchasedDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "RchassisNumber", {
        get: function () {
            return this.vehicleForm.get('chassisNumber');
        },
        enumerable: true,
        configurable: true
    });
    AddVehicleComponent.prototype.getErrorRegistrationNo = function () {
        return this.rNum.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
            '';
    };
    AddVehicleComponent.prototype.getErrorInsuranceNo = function () {
        return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
            '';
    };
    AddVehicleComponent.prototype.getErrorChassisNo = function () {
        return this.RchassisNumber.hasError('pattern') ? 'Invalid no' :
            '';
    };
    AddVehicleComponent.prototype.onClose = function () {
        this.vehicleForm.reset();
        this.dialogRef.close();
    };
    AddVehicleComponent.prototype.getTypeList = function () {
        var _this = this;
        this.typeService.getType().subscribe(function (res) {
            _this.Vehicletypes = res.data;
            console.log('types list: ', _this.Vehicletypes);
        });
    };
    AddVehicleComponent.prototype.onSubmit = function () {
        console.log(this.vehicleForm.value);
        console.log(this.vehicleForm.value, 'child');
        this.dialogRef.close(this.vehicleForm.value);
    };
    AddVehicleComponent.prototype.ngOnInit = function () {
        this.getTypeList();
    };
    AddVehicleComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: src_app_types_vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./add-vehicle.component.css */ "./src/app/vehicles/add-vehicle/add-vehicle.component.css")]
        })
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/update-vehicles/update-vehicles.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vehicles/update-vehicles/update-vehicles.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    background-color: white;\n}\n\ncontroles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.btn-dialog-close{\n      width: 45px;\n      min-width: 0px !important;\n      height: 40px;\n      padding: 0px !important;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdXBkYXRlLXZlaGljbGVzL3VwZGF0ZS12ZWhpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksV0FBVztJQUNYOztBQUdKO0lBQ0ksV0FBVyxFQUFFLFlBQVk7R0FDMUI7O0FBRUQ7TUFDSSxXQUFXO01BQ1gseUJBQXlCO01BQ3pCLFlBQVk7TUFDWix1QkFBdUI7SUFDekIiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlcy91cGRhdGUtdmVoaWNsZXMvdXBkYXRlLXZlaGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmNvbnRyb2xlcy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSU7ICAgIFxufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4uY29udHJvbGVzLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuICAgfVxuICBcbiAgLmJ0bi1kaWFsb2ctY2xvc2V7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vehicles/update-vehicles/update-vehicles.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehiclesComponent", function() { return UpdateVehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UpdateVehiclesComponent = /** @class */ (function () {
    function UpdateVehiclesComponent(dialogRef, fb, route, router, vehicleService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.todaydate = new Date();
        this.minDate = new Date();
        this.vehicleForm = this.fb.group({
            lastServiceDate: [''],
            insuranceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
        });
        this.lastServiceDate = data.lastServiceDate;
        this.insuranceNo = data.insuranceNo;
        // this.vehiclePurchased = data.vehiclePurchased;
        this.minDate = new Date(data.purchasedDate);
    }
    Object.defineProperty(UpdateVehiclesComponent.prototype, "RinsuranceNo", {
        get: function () {
            return this.vehicleForm.get('insuranceNo');
        },
        enumerable: true,
        configurable: true
    });
    UpdateVehiclesComponent.prototype.getErrorInsuranceNo = function () {
        return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
            '';
    };
    UpdateVehiclesComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateVehiclesComponent.prototype.onSubmit = function () {
        var lsd = new Date();
        lsd = new Date(this.vehicleForm.value.lastServiceDate);
        var lsd2;
        lsd2 = lsd.getDate();
        lsd.setDate(lsd2 + 1);
        this.vehicleForm.value.lastServiceDate = lsd;
        console.log(this.vehicleForm.value);
        this.dialogRef.close(this.vehicleForm.value);
    };
    UpdateVehiclesComponent.prototype.ngOnInit = function () {
        console.log(this.lastServiceDate, this.minDate);
    };
    UpdateVehiclesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateVehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-vehicles',
            template: __webpack_require__(/*! raw-loader!./update-vehicles.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html"),
            styles: [__webpack_require__(/*! ./update-vehicles.component.css */ "./src/app/vehicles/update-vehicles/update-vehicles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UpdateVehiclesComponent);
    return UpdateVehiclesComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicle-card/vehicle-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/vehicles/vehicle-card/vehicle-card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".typeName {\n    padding-top: 20px;\n}\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.my-card2:hover {\n    \n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n.content {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1jYXJkL3ZlaGljbGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtFQUFrRTtJQUNsRSwrQ0FBK0M7QUFDbkQ7QUFFQTs7SUFFSSxxRUFBcUU7QUFDekU7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtY2FyZC92ZWhpY2xlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5teS1jYXJkMiB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xufVxuXG4ubXktY2FyZDI6aG92ZXIge1xuICAgIFxuICAgIGJveC1zaGFkb3c6IDAgN3B4IDI4cHggcmdiYSgwLDAsMCwwLjE1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/vehicles/vehicle-card/vehicle-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vehicles/vehicle-card/vehicle-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: VehicleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCardComponent", function() { return VehicleCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VehicleCardComponent = /** @class */ (function () {
    // category: string;
    function VehicleCardComponent(router) {
        this.router = router;
    }
    VehicleCardComponent.prototype.ngOnInit = function () {
        this.registrationNo = this.vehicle.registrationNo;
        this.status = this.vehicle.status;
        this.type = this.vehicle.vehicleType.name;
        //  this.category = this.vehicle.type.category;
        console.log(this.vehicle.vehicleType.name);
    };
    VehicleCardComponent.prototype.ok = function () {
        console.log('hi');
        this.router.navigate(['vehicles/', this.registrationNo]);
    };
    VehicleCardComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'Busy':
                return '#F44336';
            case 'Free':
                return '#1B5E20';
            case 'Servicing':
                return '#6D4C41';
            case 'No_More_In_Use':
                return '#FFC400';
            case 'Stolen':
                return '#757575';
        }
    };
    VehicleCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VehicleCardComponent.prototype, "vehicle", void 0);
    VehicleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-card',
            template: __webpack_require__(/*! raw-loader!./vehicle-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-card/vehicle-card.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-card.component.css */ "./src/app/vehicles/vehicle-card/vehicle-card.component.css")]
        })
    ], VehicleCardComponent);
    return VehicleCardComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n    padding-right: 750px;\n}\n\n.date {\n    font-size: 1.3em;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.space-top {\n    padding-top: 10%;\n    padding-bottom: 10%;\n}\n\n@media only screen and (max-width: 600px) {\n    .vehicle {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .vehicleName {\n        margin-left: 50px;\n        font-size: 1.4em;\n        padding-bottom: 5px;\n    }\n    .status {\n            margin-top: 20px;\n            padding-right: 60px;\n           \n        }\n        .icon {\n            margin-left: 20%;\n        }\n\n        .date {\n            font-size: 1em;\n        }\n}\n\n@media only screen and (min-width: 600px) {\n    .icon {\n        margin-left: 70%;\n        background-color:transparent;\n        }   \n\n        .vehicle {\n            margin-bottom: 40px;\n            margin-left: 450px;\n            height: 350px;\n            width: 50%;\n        }\n        \n        \n}\n\n.status {\n    margin-top: 20px;\n    padding-left: 60px;\n    font-weight: bold;\n    font-size: 1em;\n}\n\n.back-btn {\n    margin-top: -8px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1kZWF0aWxzL3ZlaGljbGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7SUFDQTtZQUNRLGdCQUFnQjtZQUNoQixtQkFBbUI7O1FBRXZCO1FBQ0E7WUFDSSxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxjQUFjO1FBQ2xCO0FBQ1I7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQiw0QkFBNEI7UUFDNUI7O1FBRUE7WUFDSSxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixVQUFVO1FBQ2Q7OztBQUdSOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1kZWF0aWxzL3ZlaGljbGUtZGVhdGlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGVOYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDc1MHB4O1xufVxuXG4uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmdyYXBoIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogODUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5zcGFjZS10b3Age1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC52ZWhpY2xlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC52ZWhpY2xlTmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC52ZWhpY2xlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYmFjay1idG4ge1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts ***!
  \***********************************************************************/
/*! exports provided: VehicleDeatilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDeatilsComponent", function() { return VehicleDeatilsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-vehicles/update-vehicles.component */ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var VehicleDeatilsComponent = /** @class */ (function () {
    function VehicleDeatilsComponent(vehicleService, route, matDialog, notificationService, location) {
        this.vehicleService = vehicleService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.location = location;
        this.vehicleStatus = [
            { value: 'Busy', viewValue: 'BUSY' },
            { value: 'Free', viewValue: 'FREE' },
            { value: 'Servicing', viewValue: 'SERVICING' },
            { value: 'Stolen', viewValue: 'STOLEN' },
            { value: 'No_More_In_Use', viewValue: 'NO MORE IN USE' }
        ];
    }
    VehicleDeatilsComponent.prototype.ngOnInit = function () {
        this.getVehicleDetails();
    };
    VehicleDeatilsComponent.prototype.getVehicleDetails = function () {
        var _this = this;
        this.vehicleService.getVehicleByRegistrationNo(this.route.snapshot.paramMap.get('registrationNo')).subscribe(function (res) {
            _this.vehicle = res.data;
            console.log('data', res.data);
            console.log(res);
            _this.registrationNo = _this.vehicle.registrationNo;
            _this.name = _this.vehicle.vehicleType.name;
            _this.lastServiceDate = _this.vehicle.lastServiceDate;
            // this.purchasedDate = this.vehicle.purchasedDate;
            var pd = new Date();
            pd = new Date(_this.vehicle.purchasedDate);
            var pd2;
            pd2 = pd.getDate();
            pd.setDate(pd2 + 1);
            _this.purchasedDate = pd;
            _this.insuranceNo = _this.vehicle.insuranceNo;
            _this.zoneId = _this.vehicle.zoneId;
            _this.chassisNumber = _this.vehicle.chassisNumber;
            _this.cc = _this.vehicle.vehicleType.vehicleCC;
            _this.costkm = _this.vehicle.vehicleType.costPerKm;
            _this.costtime = _this.vehicle.vehicleType.costPerMin;
            _this.status1 = _this.vehicle.status;
        });
    };
    VehicleDeatilsComponent.prototype.onChange = function (newValue) {
        var _this = this;
        console.log(this.vehicle, newValue);
        this.vehicle.status = newValue;
        this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe(function (res) { return _this.notificationService.success('status updated successfully!!!'); }, function (error) { return _this.notificationService.warn('Not updated!!'); });
    };
    VehicleDeatilsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            insuranceNo: this.vehicle.insuranceNo,
            lastServiceDate: this.vehicle.lastServiceDate,
            purchasedDate: this.vehicle.purchasedDate
        };
        var dRef = this.matDialog.open(_update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__["UpdateVehiclesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                console.log('Back to parent', result);
                _this.vehicleService.updateVehicle(_this.registrationNo, result).subscribe(function (response) {
                    _this.notificationService.success('Vehicle details updated succesffuly');
                    _this.getVehicleDetails();
                }, function (error) {
                    _this.notificationService.warn('not updated');
                });
            }
        });
    };
    VehicleDeatilsComponent.prototype.back = function () {
        this.location.back();
    };
    VehicleDeatilsComponent.ctorParameters = function () { return [
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    VehicleDeatilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-deatils',
            template: __webpack_require__(/*! raw-loader!./vehicle-deatils.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-deatils.component.css */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css")]
        })
    ], VehicleDeatilsComponent);
    return VehicleDeatilsComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/vehicles/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var VehicleService = /** @class */ (function () {
    function VehicleService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vehicleBaseApi;
    }
    VehicleService.prototype.getVehicles = function () {
        return this.httpClient.get(this.baseUrl);
    };
    VehicleService.prototype.createVehicles = function (vehicle) {
        return this.httpClient.post(this.baseUrl, vehicle);
    };
    VehicleService.prototype.getVehicleByRegistrationNo = function (registrationNo) {
        console.log(this.baseUrl + '?registrationNo=' + registrationNo);
        return this.httpClient.get(this.baseUrl + '?registrationNo=' + registrationNo);
    };
    VehicleService.prototype.getVehicleByZoneIdType = function (zoneId, type) {
        console.log(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
        return this.httpClient.get(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
    };
    VehicleService.prototype.updateVehicle = function (registrationNo, vehicle) {
        return this.httpClient.patch(this.baseUrl + '/' + registrationNo, vehicle);
    };
    VehicleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/vehicles/vehicles-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VehiclesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesRoutingModule", function() { return VehiclesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-deatils/vehicle-deatils.component */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts");





var routes = [{ path: '', component: _vehicles_component__WEBPACK_IMPORTED_MODULE_3__["VehiclesComponent"] },
    { path: ':registrationNo', component: _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDeatilsComponent"] }];
var VehiclesRoutingModule = /** @class */ (function () {
    function VehiclesRoutingModule() {
    }
    VehiclesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VehiclesRoutingModule);
    return VehiclesRoutingModule;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/*!*************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-vehicle-card {\n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n\n    app-vehicle-card {\n        width: 75%;\n    }\n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n   }\n\n.no-data {\n    padding-bottom: 15%;\n    padding-top: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBRUE7SUFDQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYXBwLXZlaGljbGUtY2FyZCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICBhcHAtdmVoaWNsZS1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG5cbi5wYWdpbmF0b3IgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gICAgYmFja2dyb3VuZDogIzM0NDk1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgfVxuXG4gICAubm8tZGF0YSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcbiAgICBwYWRkaW5nLXRvcDogMTMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/*!************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.ts ***!
  \************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/vehicles/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(vehicleService, matDialog, notificationService) {
        this.vehicleService = vehicleService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        this.getVehicles();
    };
    VehiclesComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        var dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.vehicleService.createVehicles(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    console.log(_this.message);
                    if (_this.message === 'Vehicle already exists') {
                        _this.notificationService.warn('Vehicle already exists');
                    }
                    else {
                        _this.notificationService.success('Vehicle added succesfully');
                    }
                    _this.getVehicles();
                });
            }
        });
    };
    VehiclesComponent.prototype.getVehicles = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            if (res.count === undefined || res.count === 0) {
                _this.displayCount = 0;
            }
            else {
                _this.vehicle = res.data;
                _this.displayCount = 1;
            }
        });
    };
    VehiclesComponent.ctorParameters = function () { return [
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VehiclesComponent.prototype, "vehicle", void 0);
    VehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! raw-loader!./vehicles.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__(/*! ./vehicles.component.css */ "./src/app/vehicles/vehicles.component.css")]
        })
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vehicles/vehicles.module.ts ***!
  \*********************************************/
/*! exports provided: VehiclesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesModule", function() { return VehiclesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles-routing.module */ "./src/app/vehicles/vehicles-routing.module.ts");
/* harmony import */ var _vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-deatils/vehicle-deatils.component */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts");
/* harmony import */ var _vehicle_card_vehicle_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-card/vehicle-card.component */ "./src/app/vehicles/vehicle-card/vehicle-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/vehicles/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-vehicles/update-vehicles.component */ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
















var VehiclesModule = /** @class */ (function () {
    function VehiclesModule() {
    }
    VehiclesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["VehiclesComponent"], _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_5__["VehicleDeatilsComponent"], _vehicle_card_vehicle_card_component__WEBPACK_IMPORTED_MODULE_6__["VehicleCardComponent"], _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicleComponent"], _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_14__["UpdateVehiclesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehiclesRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                // MatDatepicker,
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_15__["AvatarModule"],
            ],
            entryComponents: [_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicleComponent"], _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_14__["UpdateVehiclesComponent"]]
        })
    ], VehiclesModule);
    return VehiclesModule;
}());



/***/ }),

/***/ "./src/app/zones/add-supervisor/add-supervisor.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/zones/add-supervisor/add-supervisor.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n    .btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n    mat-toolbar {\n    background-color: white;\n}\n\n    .btn {\n  width: 16em; height: 60px;\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXN1cGVydmlzb3IvYWRkLXN1cGVydmlzb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztJQUVFO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztJQUVOO0lBQ0ksdUJBQXVCO0FBQzNCOztJQUVBO0VBQ0UsV0FBVyxFQUFFLFlBQVk7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC96b25lcy9hZGQtc3VwZXJ2aXNvci9hZGQtc3VwZXJ2aXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAgIC5idG4tZGlhbG9nLWNsb3Nle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/add-supervisor/add-supervisor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/zones/add-supervisor/add-supervisor.component.ts ***!
  \******************************************************************/
/*! exports provided: AddSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupervisorComponent", function() { return AddSupervisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AddSupervisorComponent = /** @class */ (function () {
    function AddSupervisorComponent(fb, route, router, zoneService, dialogRef, data) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.zoneService = zoneService;
        this.dialogRef = dialogRef;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = [];
        this.zoneForm = this.fb.group({
            supervisorName: [''],
            supervisorNumber: [''],
            supervisorId: [''],
            supervisorEmail: [''],
            userStatus: ['']
        });
        this.supervisor = data.supervisor;
        this.options = data.supervisor;
        this.sname2 = data.sName;
    }
    AddSupervisorComponent.prototype.ngOnInit = function () {
        console.log(this.sname2);
    };
    AddSupervisorComponent.prototype.onClose = function () {
        this.zoneForm.reset();
        this.dialogRef.close();
    };
    AddSupervisorComponent.prototype.onSubmit = function () {
        this.zoneForm.value.supervisorNumber = Object.values(this.selectedSupervisor)[2];
        this.zoneForm.value.supervisorId = Object.values(this.selectedSupervisor)[0];
        this.zoneForm.value.supervisorEmail = Object.values(this.selectedSupervisor)[3];
        this.zoneForm.value.supervisorName = Object.values(this.selectedSupervisor)[1];
        this.zoneForm.value.userStatus = 'Allocated';
        this.dialogRef.close(this.zoneForm.value);
    };
    AddSupervisorComponent.prototype.selectedclient = function (event) {
        this.selectedSupervisor = event.option.value;
    };
    AddSupervisorComponent.prototype.getOptionText = function (option) {
        return option.name;
    };
    AddSupervisorComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AddSupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-supervisor',
            template: __webpack_require__(/*! raw-loader!./add-supervisor.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-supervisor/add-supervisor.component.html"),
            styles: [__webpack_require__(/*! ./add-supervisor.component.css */ "./src/app/zones/add-supervisor/add-supervisor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
    ], AddSupervisorComponent);
    return AddSupervisorComponent;
}());



/***/ }),

/***/ "./src/app/zones/add-vehicle/add-vehicle.component.css":
/*!*************************************************************!*\
  !*** ./src/app/zones/add-vehicle/add-vehicle.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n    .btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n    mat-toolbar {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztJQUVFO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztJQUVOO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/zones/add-vehicle/add-vehicle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/zones/add-vehicle/add-vehicle.component.ts ***!
  \************************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(fb, dialogRef, vehicleService, zoneService, route, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.vehicleService = vehicleService;
        this.zoneService = zoneService;
        this.route = route;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.options = [];
        this.vehicleForm = this.fb.group({
            rNo: ['']
        });
        this.vehicle = data.vehicle;
        this.options = data.vehicle;
        this.zId = data.zId;
        console.log(this.options);
    }
    AddVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            _this.vehicle = res.data;
        });
    };
    AddVehicleComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddVehicleComponent.prototype.onSubmit = function () {
        this.vehicleForm.value.rNo = Object.values(this.selectedVehicle)[2];
        this.dialogRef.close(this.vehicleForm.value);
    };
    AddVehicleComponent.prototype.selectedclient = function (event) {
        this.selectedVehicle = event.option.value;
        console.log(Object.values(this.selectedVehicle));
    };
    AddVehicleComponent.prototype.getOptionText = function (option) {
        return option.registrationNo;
    };
    AddVehicleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_4__["ZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-vehicle/add-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./add-vehicle.component.css */ "./src/app/zones/add-vehicle/add-vehicle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());



/***/ }),

/***/ "./src/app/zones/add-zone/add-zone.component.css":
/*!*******************************************************!*\
  !*** ./src/app/zones/add-zone/add-zone.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controles-container{\n    width: 100%;\n    padding: 5%;\n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.button {\n    padding-bottom: 21.5px;\n}\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.location {\n  width: 16em; height: 60px;\n}\n\n@media only screen and (max-width: 600px) {\n  .location {\n    width: 8em;\n  }\n}\n\n.col {\n    width: 50%;\n  }\n\nsnack-bar-container.success {\n    background-color: #5cb85c;\n    color : #fff;\n  }\n\nsnack-bar-container.warn {\n    background-color: #f99157;\n    color : #fff;\n  }\n\nsnack-bar-container.notification simple-snack-bar{\n    font-size: 18px !important;\n    font-weight: bold;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFHQTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6Qjs7QUFFTjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVcsRUFBRSxZQUFZO0dBQzFCOztBQUVIO0VBQ0UsV0FBVyxFQUFFLFlBQVk7QUFDM0I7O0FBR0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNHO0lBQ0MsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBR0E7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIxLjVweDtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgIH1cblxuLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2NhdGlvbiB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxufVxuICAgLmNvbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIHNuYWNrLWJhci1jb250YWluZXIuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICBjb2xvciA6ICNmZmY7XG4gIH1cblxuICBzbmFjay1iYXItY29udGFpbmVyLndhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTkxNTc7XG4gICAgY29sb3IgOiAjZmZmO1xuICB9XG5cblxuICBzbmFjay1iYXItY29udGFpbmVyLm5vdGlmaWNhdGlvbiBzaW1wbGUtc25hY2stYmFye1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/add-zone/add-zone.component.ts":
/*!******************************************************!*\
  !*** ./src/app/zones/add-zone/add-zone.component.ts ***!
  \******************************************************/
/*! exports provided: AddZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddZoneComponent", function() { return AddZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







// import { Zone } from 'src/app/model/zone';
var AddZoneComponent = /** @class */ (function () {
    function AddZoneComponent(dialogRef, fb, route, router, zoneService, notificationService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.zoneService = zoneService;
        this.notificationService = notificationService;
        this.zoneForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            lat: [''],
            lon: [''],
            city: [''],
            locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-z0-9\- ]+')]],
            state: [''],
            country: [''],
            capacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            status: ['INACTIVE'],
            pincode: [560002]
        });
    }
    Object.defineProperty(AddZoneComponent.prototype, "zone", {
        get: function () {
            return this.zoneForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddZoneComponent.prototype, "locality", {
        get: function () {
            return this.zoneForm.get('locality');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddZoneComponent.prototype, "capacity", {
        get: function () {
            return this.zoneForm.get('capacity');
        },
        enumerable: true,
        configurable: true
    });
    AddZoneComponent.prototype.getErrorZoneName = function () {
        return this.zone.hasError('pattern') ? 'Zone Name should not contain any special characters.' :
            '';
    };
    AddZoneComponent.prototype.getErrorZoneLocality = function () {
        return this.locality.hasError('pattern') ? 'Locality should not contain any special characters.' :
            '';
    };
    AddZoneComponent.prototype.getErrorCapacity = function () {
        return this.capacity.hasError('pattern') ? 'Capacity should contain only numbers.' :
            '';
    };
    AddZoneComponent.prototype.onClose = function () {
        this.zoneForm.reset();
        this.dialogRef.close();
    };
    AddZoneComponent.prototype.ngOnInit = function () {
    };
    AddZoneComponent.prototype.onSubmit = function () {
        console.log(this.location);
        this.zoneForm.value.lat = this.location.position.lat;
        this.zoneForm.value.lon = this.location.position.lon;
        this.zoneForm.value.country = this.location.address.country;
        this.zoneForm.value.city = this.location.address.countrySecondarySubdivision;
        this.zoneForm.value.state = this.location.address.countrySubdivision;
        console.log(this.zoneForm.value, 'child');
        this.dialogRef.close(this.zoneForm.value);
    };
    AddZoneComponent.prototype.getLocation = function () {
        var _this = this;
        if (this.zoneForm.value.locality === '') {
            this.notificationService.warn('Please provide locality!!!');
        }
        else {
            this.zoneService.getAddress(this.zoneForm.value.locality).subscribe(function (res) {
                _this.location = res.data.results[0];
                console.log(_this.location);
                if (_this.location == null) {
                    _this.notificationService.warn('No location found!!');
                }
                else {
                    _this.notificationService.success('Location added successfully');
                    _this.lat1 = _this.location.position.lat;
                    _this.lon1 = _this.location.position.lon;
                    _this.con = _this.location.address.country;
                    console.log(_this.location.address.country + '' + _this.lat1 + ' ' + _this.lon1 + ' ' + _this.con);
                }
            });
        }
    };
    AddZoneComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_5__["ZoneService"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    AddZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-zone',
            template: __webpack_require__(/*! raw-loader!./add-zone.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-zone/add-zone.component.html"),
            styles: [__webpack_require__(/*! ./add-zone.component.css */ "./src/app/zones/add-zone/add-zone.component.css")]
        })
    ], AddZoneComponent);
    return AddZoneComponent;
}());



/***/ }),

/***/ "./src/app/zones/service/zone.service.ts":
/*!***********************************************!*\
  !*** ./src/app/zones/service/zone.service.ts ***!
  \***********************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ZoneService = /** @class */ (function () {
    function ZoneService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneBaseApi;
    }
    ZoneService.prototype.createZone = function (zone) {
        return this.httpClient.post(this.baseUrl, zone);
    };
    ZoneService.prototype.getZones = function () {
        return this.httpClient.get(this.baseUrl);
    };
    ZoneService.prototype.getZoneByName = function (name) {
        return this.httpClient.get(this.baseUrl + '/name/' + name);
    };
    ZoneService.prototype.getZoneByLocality = function (name) {
        return this.httpClient.get(this.baseUrl + '/locality/' + name);
    };
    ZoneService.prototype.getAddress = function (locality) {
        return this.httpClient.get(this.baseUrl + '/loc/' + locality);
    };
    ZoneService.prototype.updateZones = function (name, zone) {
        return this.httpClient.patch(this.baseUrl + '/' + name, zone);
    };
    ZoneService.prototype.getSupervisor = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userBaseApi + '?role=ROLE_SUPERVISOR&status=Unallocated');
    };
    ZoneService.prototype.getSupervisorById = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userBaseApi + '/' + id);
    };
    ZoneService.prototype.updateSupervisorStatus = function (id, supervisor) {
        return this.httpClient.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userBaseApi + '/' + id, supervisor);
    };
    ZoneService.prototype.getZoneType = function (zid, tid) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService +
            '/api/v1/zoneTypeCount' + '?zoneId=' + zid + '&typeId=' + tid);
    };
    ZoneService.prototype.createNew = function (zoneTypeCount) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService +
            '/api/v1/zoneTypeCount', zoneTypeCount);
    };
    ZoneService.prototype.updateZoneTypeCount = function (zid, tid, zoneTypeCount) {
        return this.httpClient.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneService +
            '/api/v1/zoneTypeCount' +
            '?zoneId=' + zid + '&typeId=' + tid, zoneTypeCount);
    };
    ZoneService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ZoneService);
    return ZoneService;
}());



/***/ }),

/***/ "./src/app/zones/supervisor-details/supervisor-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/zones/supervisor-details/supervisor-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".supervisor {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n.zoneName {\n    font-weight: bold;\n    font-size: 1.5em;\n}\n\n.add-button {\n    padding-left: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    .supervisor {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n    .add-button {\n        padding-left: 250px;\n        margin-top: -5%;\n    }\n    .icon {\n        margin-left: 40%;\n    }\n    mat-card-title {\n        font-size: 1.4em;\n    }  \n}\n\n@media only screen and (min-width: 600px) {\n    .icon {\n        margin-left: 80%;\n        background-color:transparent;\n        }   \n        \n}\n\n.btn-sup {\n    font-size: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvc3VwZXJ2aXNvci1kZXRhaWxzL3N1cGVydmlzb3ItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCOztBQUVSOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3pvbmVzL3N1cGVydmlzb3ItZGV0YWlscy9zdXBlcnZpc29yLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdXBlcnZpc29yIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi56b25lTmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctbGVmdDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zdXBlcnZpc29yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC56b25lTmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIH1cbiAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgfSAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICAgIH0gICBcbiAgICAgICAgXG59XG5cbi5idG4tc3VwIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/supervisor-details/supervisor-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/zones/supervisor-details/supervisor-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: SupervisorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorDetailsComponent", function() { return SupervisorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-supervisor/add-supervisor.component */ "./src/app/zones/add-supervisor/add-supervisor.component.ts");







var SupervisorDetailsComponent = /** @class */ (function () {
    function SupervisorDetailsComponent(router, zoneService, activatedRoute, route, notificationService, matDialog) {
        this.router = router;
        this.zoneService = zoneService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
    }
    SupervisorDetailsComponent.prototype.ngOnInit = function () {
        this.getZoneDetails();
        this.getSupervisor();
        this.buttonDisabled = false;
        this.buttonDisabled2 = true;
    };
    SupervisorDetailsComponent.prototype.getZoneDetails = function () {
        var _this = this;
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(function (res) {
            _this.zone = res.data;
            console.log(_this.zone);
            _this.name = _this.zone[0].name;
            _this.supId = _this.zone[0].supervisorId;
            _this.sName = _this.zone[0].supervisorName;
            _this.sNumber = _this.zone[0].supervisorNumber;
            _this.sEmail = _this.zone[0].supervisorEmail;
            _this.status = 'Daily';
            if (_this.zone[0].supervisorName !== null) {
                console.log(_this.zone, 'yes');
                _this.buttonDisabled = true;
                _this.buttonDisabled2 = false;
            }
        });
    };
    SupervisorDetailsComponent.prototype.addSupervisor = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            supervisor: this.supervisor,
            sId: this.zone[0].supervisorId
        };
        var dRef = this.matDialog.open(_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__["AddSupervisorComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.sid = String(Object.values(result)[2]);
                _this.sStatus = JSON.stringify(Object.values(result)[5]);
                console.log(result, _this.sid);
                _this.zoneService.updateZones(_this.name, result).subscribe(function (response) {
                    _this.notificationService.success('Zone updated successfully!!'),
                        _this.getZoneDetails();
                    _this.zoneService.getSupervisorById(_this.sid).subscribe(function (res) {
                        _this.supervisor2 = res.data;
                        _this.supervisor2.userStatus = 'Allocated';
                        _this.zoneService.updateSupervisorStatus(_this.sid, _this.supervisor2).subscribe();
                    });
                }, function (error) {
                    _this.notificationService.warn('Can\'t update ');
                });
            }
        });
    };
    SupervisorDetailsComponent.prototype.updateSupervisor = function () {
        var _this = this;
        this.zoneService.getSupervisorById(this.supId).subscribe(function (res) {
            _this.supervisor2 = res.data;
            _this.supervisor2.userStatus = 'Unallocated';
            console.log(res);
            _this.zoneService.updateSupervisorStatus(_this.supId, _this.supervisor2).subscribe();
            _this.getZoneDetails();
            _this.getSupervisor();
            var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                supervisor: _this.supervisor,
                sId: _this.zone[0].supervisorId
            };
            var dRef = _this.matDialog.open(_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__["AddSupervisorComponent"], dialogConfig);
            dRef.afterClosed().subscribe(function (result) {
                if (result !== undefined) {
                    _this.sid = String(Object.values(result)[2]);
                    _this.sStatus = JSON.stringify(Object.values(result)[5]);
                    console.log(result, _this.sid);
                    _this.zoneService.updateZones(_this.name, result).subscribe(function (response) {
                        _this.notificationService.success('Zone updated successfully!!'),
                            _this.getZoneDetails();
                        // tslint:disable-next-line: no-shadowed-variable
                        _this.zoneService.getSupervisorById(_this.sid).subscribe(function (res) {
                            _this.supervisor2 = res.data;
                            _this.supervisor2.userStatus = 'Allocated';
                            _this.zoneService.updateSupervisorStatus(_this.sid, _this.supervisor2).subscribe();
                        });
                    }, function (error) {
                        _this.notificationService.warn('Can\'t update ');
                    });
                }
            });
        });
    };
    SupervisorDetailsComponent.prototype.getSupervisor = function () {
        var _this = this;
        this.zoneService.getSupervisor().subscribe(function (res) {
            _this.supervisor = res.data;
            console.log(_this.supervisor);
        });
    };
    SupervisorDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    SupervisorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supervisor-details',
            template: __webpack_require__(/*! raw-loader!./supervisor-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/supervisor-details/supervisor-details.component.html"),
            styles: [__webpack_require__(/*! ./supervisor-details.component.css */ "./src/app/zones/supervisor-details/supervisor-details.component.css")]
        })
    ], SupervisorDetailsComponent);
    return SupervisorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/zones/update-zones/update-zones.component.css":
/*!***************************************************************!*\
  !*** ./src/app/zones/update-zones/update-zones.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn {\n  width: 16em; height: 60px;\n }\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvdXBkYXRlLXpvbmVzL3VwZGF0ZS16b25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXLEVBQUUsWUFBWTtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3pvbmVzL3VwZGF0ZS16b25lcy91cGRhdGUtem9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiB9XG5cbi5idG4tZGlhbG9nLWNsb3Nle1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/update-zones/update-zones.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/zones/update-zones/update-zones.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateZonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateZonesComponent", function() { return UpdateZonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UpdateZonesComponent = /** @class */ (function () {
    function UpdateZonesComponent(dialogRef, fb, route, router, zoneService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.zoneService = zoneService;
        this.zoneForm = this.fb.group({
            capacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')]]
        });
        this.cap = data.capacity;
    }
    Object.defineProperty(UpdateZonesComponent.prototype, "capacity", {
        get: function () {
            return this.zoneForm.get('capacity');
        },
        enumerable: true,
        configurable: true
    });
    UpdateZonesComponent.prototype.getErrorCapacity = function () {
        return this.capacity.hasError('pattern') ? 'Capacity should contain only numbers.' :
            '';
    };
    UpdateZonesComponent.prototype.onClose = function () {
        // this.zoneForm.reset();
        this.dialogRef.close();
    };
    UpdateZonesComponent.prototype.onSubmit = function () {
        console.log(this.zoneForm.value);
        this.dialogRef.close(this.zoneForm.value);
    };
    UpdateZonesComponent.prototype.ngOnInit = function () {
    };
    UpdateZonesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateZonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-zones',
            template: __webpack_require__(/*! raw-loader!./update-zones.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/update-zones/update-zones.component.html"),
            styles: [__webpack_require__(/*! ./update-zones.component.css */ "./src/app/zones/update-zones/update-zones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UpdateZonesComponent);
    return UpdateZonesComponent;
}());



/***/ }),

/***/ "./src/app/zones/vehicle-details/vehicle-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/zones/vehicle-details/vehicle-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicles {\n    margin-left: 240px;\n    padding-bottom: 2%;\n    font-weight: bold;\n}\n\nmat-list {\n    background-color: white;\n}\n\n.vehicle-list {\n    padding-left: 450px;\n    padding-bottom: 2%;\n}\n\n.center-list {\n    padding-bottom: 2%;\n    padding-top: 2%;\n    width: 66%;\n}\n\n.icon-size {\n    transform: scale(2);\n}\n\n.rNo {\n    font-size: 1.5em;\n    padding-left: 38%;\n}\n\n.type {\n    font-size: 1.5em;\n    padding-left: 5%;\n}\n\n.space {\n    padding-left: 130px;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .vehicles {\n        margin-left: 40px;\n    }\n\n    .vehicle-list {\n        padding-left: 20px;\n        padding-bottom: 2%;\n    }\n    \n    .center-list {\n        padding-bottom: 2%;\n        padding-top: 2%;\n        width: 95%;\n    }\n    \n    .space {\n        padding-left: 0px;\n    }\n    \n    .rNo {\n        font-size: 1.5em;\n        padding-left: 0%;\n    }\n    \n    .type {\n        font-size: 1.5em;\n        padding-left: 5%;\n    }\n}\n\n.error-handling {\n    padding-bottom: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvdmVoaWNsZS1kZXRhaWxzL3ZlaGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC96b25lcy92ZWhpY2xlLWRldGFpbHMvdmVoaWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZXMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnZlaGljbGUtbGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5jZW50ZXItbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICB3aWR0aDogNjYlO1xufVxuXG4uaWNvbi1zaXplIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG4uck5vIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMzglO1xufVxuXG4udHlwZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uc3BhY2Uge1xuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC52ZWhpY2xlcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC52ZWhpY2xlLWxpc3Qge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICB9XG4gICAgXG4gICAgLmNlbnRlci1saXN0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIFxuICAgIC5zcGFjZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgICBcbiAgICAuck5vIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgICB9XG4gICAgXG4gICAgLnR5cGUge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIH1cbn1cblxuLmVycm9yLWhhbmRsaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/vehicle-details/vehicle-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/zones/vehicle-details/vehicle-details.component.ts ***!
  \********************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-vehicle/add-vehicle.component */ "./src/app/zones/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var VehicleDetailsComponent = /** @class */ (function () {
    function VehicleDetailsComponent(vehicleService, zoneService, route, matDialog, notificationService, spinner) {
        this.vehicleService = vehicleService;
        this.zoneService = zoneService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.spinner = spinner;
        this.vehicleZ = [];
        this.vehicle2 = [];
        this.i = 0;
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 2000);
        this.buttonDisable = false;
        this.route.queryParams.subscribe(function (params) {
            _this.count = params.count;
        });
        this.getZoneDetails();
        this.vDetails();
        this.availableVehicles();
    };
    VehicleDetailsComponent.prototype.getZoneDetails = function () {
        var _this = this;
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(function (res) {
            _this.zone = res.data;
            console.log(res);
            _this.id = _this.zone[0].id;
            _this.capacity = _this.zone[0].capacity;
            if ((_this.count > _this.capacity) || (_this.zone[0].status === 'INACTIVE') || (_this.zone[0].status === 'INMAINTAINANCE')
                || (_this.zone[0].status === 'FULL')) {
                _this.buttonDisable = true;
            }
        });
    };
    VehicleDetailsComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            vehicle: this.vehicle2,
            zId: this.id
        };
        var dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.vehicleService.getVehicleByRegistrationNo(String(Object.values(result)[0])).subscribe(function (res) {
                    _this.selectedVehicle = res.data;
                    _this.selectedVehicle.zoneId = _this.id;
                    console.log(_this.selectedVehicle);
                    _this.vehicleService.updateVehicle(String(Object.values(result)[0]), _this.selectedVehicle).subscribe(function (response) {
                        _this.notificationService.success('Vehicle added to zone successfully!!');
                    });
                    _this.getZoneDetails();
                    _this.availableVehicles();
                    _this.zoneVehicle(String(Object.values(result)[0]));
                    console.log(_this.vehicleZ);
                    _this.zoneService.getZoneType(_this.id, _this.tid).subscribe(function (val) {
                        console.log(val);
                        if (val.data === null) {
                            console.log(res.count, { zoneId: _this.id, typeId: _this.tid, typeName: _this.tname, count: 1 });
                            var reqBody = {
                                zoneId: _this.id,
                                typeId: _this.tid,
                                typeName: _this.tname,
                                count: 1
                            };
                            _this.zoneService.createNew(reqBody)
                                .subscribe();
                        }
                        else {
                            val.data.count = val.data.count + 1;
                            var reqBody = {
                                zoneId: _this.id,
                                typeId: _this.tid,
                                typeName: _this.tname,
                                count: val.data.count
                            };
                            _this.zoneService.updateZoneTypeCount(_this.id, _this.tid, reqBody).subscribe();
                        }
                    });
                });
                console.log(Object.values(result), JSON.stringify(Object.values(result)[0]));
            }
        });
    };
    VehicleDetailsComponent.prototype.vDetails = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            console.log(res);
            if (res.count === 0) {
                _this.displayCount = 0;
            }
            res.data.filter(function (val) {
                if ((val.zoneId === _this.id)) {
                    _this.i = _this.i + 1;
                    console.log(val, _this.i);
                    _this.vehicleZ.push(val);
                    console.log(_this.vehicleZ);
                }
                _this.vehicles = _this.vehicleZ;
                if (_this.vehicles.length === 0) {
                    _this.displayCount = 0;
                }
                else {
                    _this.displayCount = 1;
                    console.log('vehicle list', _this.vehicles);
                }
            });
        });
    };
    VehicleDetailsComponent.prototype.availableVehicles = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            res.data.filter(function (val) {
                if (((val.zoneId === null)) && ((val.status !== 'No_More_In_Use') && (val.status !== 'Stolen') && (val.status !== 'Busy') && (val.status !== 'Servicing'))) {
                    _this.vehicle2.push(val);
                    _this.tname = val.vehicleType.name;
                    _this.tid = val.vehicleType.id;
                    console.log(_this.tid);
                    console.log(_this.tname);
                }
            });
        });
    };
    VehicleDetailsComponent.prototype.zoneVehicle = function (rNo) {
        var _this = this;
        this.vehicleService.getVehicleByRegistrationNo(rNo).subscribe(function (value) {
            _this.vehicleZ.push(value.data);
            _this.vehicles = _this.vehicleZ;
            _this.displayCount = 1;
            console.log(_this.vehicles);
        });
    };
    VehicleDetailsComponent.ctorParameters = function () { return [
        { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
    ]; };
    VehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-details',
            template: __webpack_require__(/*! raw-loader!./vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/vehicle-details/vehicle-details.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-details.component.css */ "./src/app/zones/vehicle-details/vehicle-details.component.css")]
        })
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/zones/zone-card/zone-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/zones/zone-card/zone-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n.zoneName {\n    padding-top: 20px;\n}\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.my-card2:hover {\n    \n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n.content {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1jYXJkL3pvbmUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtFQUFrRTtJQUNsRSwrQ0FBK0M7QUFDbkQ7QUFFQTs7SUFFSSxxRUFBcUU7QUFDekU7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3pvbmVzL3pvbmUtY2FyZC96b25lLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi56b25lTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5teS1jYXJkMiB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xufVxuXG4ubXktY2FyZDI6aG92ZXIge1xuICAgIFxuICAgIGJveC1zaGFkb3c6IDAgN3B4IDI4cHggcmdiYSgwLDAsMCwwLjE1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/zones/zone-card/zone-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/zones/zone-card/zone-card.component.ts ***!
  \********************************************************/
/*! exports provided: ZoneCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneCardComponent", function() { return ZoneCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");




var ZoneCardComponent = /** @class */ (function () {
    function ZoneCardComponent(router, vehicleService) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.vehicle = [];
        this.count = 0;
    }
    ZoneCardComponent.prototype.ngOnInit = function () {
        this.zoneNames = Object.values(this.zones)[1];
        this.city = Object.values(this.zones)[4];
        this.status = Object.values(this.zones)[15];
        this.locality = Object.values(this.zones)[8];
        this.capacity = Object.values(this.zones)[9];
        this.id = Object.values(this.zones)[0];
        this.getVehiclesDetails();
    };
    ZoneCardComponent.prototype.ok = function () {
        this.router.navigate(['zones/', this.zoneNames], { queryParams: { count: this.count } });
    };
    ZoneCardComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'ACTIVE':
                return '#1B5E20';
            case 'INACTIVE':
                return '#FFC400';
            case 'FULL':
                return '#F44336';
            case 'INMAINTAINANCE':
                return '#6D4C41';
        }
    };
    ZoneCardComponent.prototype.getVehiclesDetails = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            res.data.filter(function (val) {
                if (val.zoneId === String(_this.id)) {
                    _this.count += 1;
                }
            });
        });
    };
    ZoneCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ZoneCardComponent.prototype, "zones", void 0);
    ZoneCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone-card',
            template: __webpack_require__(/*! raw-loader!./zone-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/zone-card/zone-card.component.html"),
            styles: [__webpack_require__(/*! ./zone-card.component.css */ "./src/app/zones/zone-card/zone-card.component.css")]
        })
    ], ZoneCardComponent);
    return ZoneCardComponent;
}());



/***/ }),

/***/ "./src/app/zones/zone-details/zone-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/zones/zone-details/zone-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoneName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n\n\n.graph {\n    margin-top: 20px;\n    padding-left: 500px;\n    cursor: pointer;\n}\n\n\n\n.zone {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n    .zone {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n    .add-button {\n        padding-left: 300px;\n        padding-bottom: 2%;\n    }\n    .graph {\n        padding-left: 300px;;\n        padding-bottom: 50px;\n    }\n    .status {\n        margin-top: 20px;\n        padding-right: 60px;\n    }\n    .iconCapacity {\n        margin-left: 70%;\n        cursor: pointer;\n    }\n    mat-card-title {\n        font-size: 1.4em;\n    }\n}\n\n\n\n@media only screen and (min-width: 600px) {\n    .add-button {\n        padding-right: 450px;\n        padding-bottom: 2%;\n    }\n\n}\n\n\n\nmat-icon {\n    font-size: 60px;\n}\n\n\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n\n\n.iconCapacity {\n    margin-left: 8%;\n    cursor: pointer;\n    margin-top: 20%;\n}\n\n\n\n.status {\n    margin-top: 20px;\n    padding-left: 60px;\n    font-weight: bold;\n    font-size: 1em;\n}\n\n\n\n.back-btn {\n    margin-top: -8px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1kZXRhaWxzL3pvbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7Ozs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0Qjs7QUFFSjs7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC96b25lcy96b25lLWRldGFpbHMvem9uZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9uZU5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cblxuXG4uZ3JhcGgge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi56b25lIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuem9uZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAuem9uZU5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmFkZC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgfVxuICAgIC5ncmFwaCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5pY29uQ2FwYWNpdHkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgfVxuXG59XG5cbm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25DYXBhY2l0eSB7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYmFjay1idG4ge1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/zones/zone-details/zone-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/zones/zone-details/zone-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ZoneDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneDetailsComponent", function() { return ZoneDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-zones/update-zones.component */ "./src/app/zones/update-zones/update-zones.component.ts");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var ZoneDetailsComponent = /** @class */ (function () {
    function ZoneDetailsComponent(router, zoneService, activatedRoute, route, notificationService, matDialog, vehicleService, spinner, location) {
        this.router = router;
        this.zoneService = zoneService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.vehicleService = vehicleService;
        this.spinner = spinner;
        this.location = location;
        this.count = 0;
        this.zoneStatus = [
            { value: 'INACTIVE', viewValue: 'INACTIVE' },
            { value: 'ACTIVE', viewValue: 'ACTIVE' },
            { value: 'INMAINTAINANCE', viewValue: 'INMAINTAINANCE' },
            { value: 'FULL', viewValue: 'FULL' },
        ];
    }
    ZoneDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 2 seconds */
            _this.spinner.hide();
        }, 2000);
        this.route.queryParams.subscribe(function (params) {
            _this.count = params.count;
        });
        this.getZoneDetails();
    };
    ZoneDetailsComponent.prototype.onChange = function (newValue) {
        var _this = this;
        console.log(this.zone[0], newValue);
        this.zone[0].status = newValue;
        this.zoneService.updateZones(this.route.snapshot.paramMap.get('name'), this.zone[0]).subscribe(function (response) { return _this.notificationService.success('Zone updated successfully!!'); }, function (error) { return _this.notificationService.warn('Can\'t update '); });
    };
    ZoneDetailsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            capacity: this.zone[0].capacity,
        };
        var dRef = this.matDialog.open(_update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_6__["UpdateZonesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.zoneService.updateZones(_this.name, result).subscribe(function (response) {
                    _this.notificationService.success('Zone updated successfully!!'),
                        _this.getZoneDetails();
                }, function (error) {
                    _this.notificationService.warn('Can\'t update ');
                });
            }
        });
    };
    ZoneDetailsComponent.prototype.getZoneDetails = function () {
        var _this = this;
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(function (res) {
            _this.zone = res.data;
            console.log(res);
            _this.id = _this.zone[0].id;
            _this.name = _this.zone[0].name;
            _this.city = _this.zone[0].city;
            _this.country = _this.zone[0].country;
            _this.locality = _this.zone[0].locality;
            _this.creationTime = _this.zone[0].createdAt;
            _this.state = _this.zone[0].state;
            _this.pincode = _this.zone[0].pincode;
            _this.capacity = _this.zone[0].capacity;
            _this.status = _this.zone[0].status;
            // this.count = this.getVehiclesDetails();
            console.log(_this.count);
            if (_this.count >= _this.capacity) {
                _this.zone[0].status = 'FULL';
                _this.zoneService.updateZones(_this.route.snapshot.paramMap.get('name'), _this.zone[0]).subscribe(function (response) { return _this.notificationService.success('Zone updated successfully!!'); }, function (error) { return _this.notificationService.warn('Can\'t update '); });
            }
        });
    };
    ZoneDetailsComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'ACTIVE':
                return '#1B5E20';
            case 'INACTIVE':
                return '#FFC400';
            case 'FULL':
                return '#F44336';
            case 'INMAINTAINANCE':
                return '#6D4C41';
        }
    };
    ZoneDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    ZoneDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
    ]; };
    ZoneDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone-details',
            template: __webpack_require__(/*! raw-loader!./zone-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/zone-details/zone-details.component.html"),
            styles: [__webpack_require__(/*! ./zone-details.component.css */ "./src/app/zones/zone-details/zone-details.component.css")]
        })
    ], ZoneDetailsComponent);
    return ZoneDetailsComponent;
}());



/***/ }),

/***/ "./src/app/zones/zones-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/zones/zones-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ZonesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonesRoutingModule", function() { return ZonesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _zones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones.component */ "./src/app/zones/zones.component.ts");
/* harmony import */ var _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone-details/zone-details.component */ "./src/app/zones/zone-details/zone-details.component.ts");





var routes = [{ path: '', component: _zones_component__WEBPACK_IMPORTED_MODULE_3__["ZonesComponent"] },
    { path: ':name', component: _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_4__["ZoneDetailsComponent"] },
];
var ZonesRoutingModule = /** @class */ (function () {
    function ZonesRoutingModule() {
    }
    ZonesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ZonesRoutingModule);
    return ZonesRoutingModule;
}());



/***/ }),

/***/ "./src/app/zones/zones.component.css":
/*!*******************************************!*\
  !*** ./src/app/zones/zones.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-zone-card {\n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n    app-zone-card {\n        width: 75%;\n    }\n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n background: #344955;\n color: white;\n font-size: 1.5em;\n border-radius: 10px;\n}\n\n.no-data {\n    padding-bottom: 15%;\n    padding-top: 13%;\n}\n\n.back-btn {\n    margin-top: -8px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvem9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC16b25lLWNhcmQge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGFwcC16b25lLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbn1cblxuLnBhZ2luYXRvciA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiBiYWNrZ3JvdW5kOiAjMzQ0OTU1O1xuIGNvbG9yOiB3aGl0ZTtcbiBmb250LXNpemU6IDEuNWVtO1xuIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uby1kYXRhIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUlO1xuICAgIHBhZGRpbmctdG9wOiAxMyU7XG59XG5cblxuLmJhY2stYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/zones/zones.component.ts":
/*!******************************************!*\
  !*** ./src/app/zones/zones.component.ts ***!
  \******************************************/
/*! exports provided: ZonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonesComponent", function() { return ZonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-zone/add-zone.component */ "./src/app/zones/add-zone/add-zone.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ZonesComponent = /** @class */ (function () {
    function ZonesComponent(zoneService, matDialog, notificationService, location) {
        this.zoneService = zoneService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.location = location;
        this.p = 1;
    }
    ZonesComponent.prototype.ngOnInit = function () {
        this.getZonesInfo();
    };
    ZonesComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        var dRef = this.matDialog.open(_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_4__["AddZoneComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.zoneService.createZone(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    if (_this.message === 'Zone name is already exist!!!') {
                        _this.notificationService.warn('Zone name already exist!!!');
                    }
                    else if (_this.message === 'Zone locality is already exist!!!') {
                        _this.notificationService.warn('No location found!!');
                    }
                    else {
                        _this.notificationService.success('Zone added successfully');
                    }
                    _this.getZonesInfo();
                });
            }
        });
    };
    ZonesComponent.prototype.getZonesInfo = function () {
        var _this = this;
        return this.zoneService.getZones().subscribe(function (res) {
            if (res.count === undefined || res.count === 0) {
                _this.displayCount = 0;
            }
            else {
                _this.zones = res.data;
                _this.displayCount = 1;
            }
        });
    };
    ZonesComponent.prototype.back = function () {
        this.location.back();
    };
    ZonesComponent.ctorParameters = function () { return [
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ZonesComponent.prototype, "zones", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ZonesComponent.prototype, "p", void 0);
    ZonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zones',
            template: __webpack_require__(/*! raw-loader!./zones.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/zones.component.html"),
            styles: [__webpack_require__(/*! ./zones.component.css */ "./src/app/zones/zones.component.css")]
        })
    ], ZonesComponent);
    return ZonesComponent;
}());



/***/ }),

/***/ "./src/app/zones/zones.module.ts":
/*!***************************************!*\
  !*** ./src/app/zones/zones.module.ts ***!
  \***************************************/
/*! exports provided: ZonesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonesModule", function() { return ZonesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _zones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones-routing.module */ "./src/app/zones/zones-routing.module.ts");
/* harmony import */ var _zones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zones.component */ "./src/app/zones/zones.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _zone_card_zone_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zone-card/zone-card.component */ "./src/app/zones/zone-card/zone-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zone-details/zone-details.component */ "./src/app/zones/zone-details/zone-details.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-zone/add-zone.component */ "./src/app/zones/add-zone/add-zone.component.ts");
/* harmony import */ var _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-zones/update-zones.component */ "./src/app/zones/update-zones/update-zones.component.ts");
/* harmony import */ var _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-supervisor/add-supervisor.component */ "./src/app/zones/add-supervisor/add-supervisor.component.ts");
/* harmony import */ var _supervisor_details_supervisor_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./supervisor-details/supervisor-details.component */ "./src/app/zones/supervisor-details/supervisor-details.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vehicle-details/vehicle-details.component */ "./src/app/zones/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/zones/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





















var ZonesModule = /** @class */ (function () {
    function ZonesModule() {
    }
    ZonesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_zones_component__WEBPACK_IMPORTED_MODULE_4__["ZonesComponent"], _zone_card_zone_card_component__WEBPACK_IMPORTED_MODULE_7__["ZoneCardComponent"], _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_9__["ZoneDetailsComponent"], _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__["AddZoneComponent"], _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__["UpdateZonesComponent"],
                _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["AddSupervisorComponent"], _supervisor_details_supervisor_details_component__WEBPACK_IMPORTED_MODULE_16__["SupervisorDetailsComponent"], _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__["VehicleDetailsComponent"], _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_19__["AddVehicleComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _zones_routing_module__WEBPACK_IMPORTED_MODULE_3__["ZonesRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_17__["AvatarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
            ],
            entryComponents: [_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__["AddZoneComponent"], _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__["UpdateZonesComponent"], _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["AddSupervisorComponent"], _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_19__["AddVehicleComponent"]]
        })
    ], ZonesModule);
    return ZonesModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://umove-dev.stackroute.io/',
    userService: 'userservice',
    userBaseApi: '/api/v1/users',
    bookingBaseApi: '/api/v1/rides',
    zoneService: 'zoneservice',
    zoneBaseApi: '/api/v1/zones',
    campaignService: 'campaignservice',
    campaignBaseApi: '/api/v1/campaigns',
    vehicleService: 'vehicleservice',
    vehicleBaseApi: '/api/v1/vehicles',
    typeBaseApi: '/api/v1/types',
    fuelBaseApi: '/api/v1/fuel',
    bookingService: 'bookingservice',
    configBaseApi: '/api/v1/config'
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://umove-dev.stackroute.io/',
    userService: 'userservice',
    userBaseApi: '/api/v1/users',
    bookingBaseApi: '/api/v1/rides',
    zoneService: 'zoneservice',
    zoneBaseApi: '/api/v1/zones',
    campaignService: 'campaignservice',
    campaignBaseApi: '/api/v1/campaigns',
    vehicleService: 'vehicleservice',
    vehicleBaseApi: '/api/v1/vehicles',
    typeBaseApi: '/api/v1/types',
    fuelBaseApi: '/api/v1/fuel',
    bookingService: 'bookingservice',
    configBaseApi: '/api/v1/config',
    reportService: 'reportservice',
    reportBaseApi: '/api/v1/reports/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/umove/umove-admin-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map