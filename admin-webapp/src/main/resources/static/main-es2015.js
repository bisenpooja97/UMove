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

module.exports = "<!-- <mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\" class=\"footer\">UMOVE &copy; 2019</mat-toolbar> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navigation/navigation.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navigation/navigation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"push\" class=\"sidenav\">\n    <mat-toolbar color=\"primary\" class=\"box\">\n      <ngx-avatar src=\"assets/img_avatar.png\" fxLayoutAlign=\"center center\"></ngx-avatar>\n      <p *ngIf=\"loginService.isUserLoggedIn()\">&nbsp;&nbsp;Admin</p>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/users\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <span class=\"title\" mat-line>Users</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/zones\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>compass_calibration</mat-icon>\n        <span class=\"title\" mat-line>Zones</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/vehicles\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>motorcycle</mat-icon>\n        <span class=\"title\" mat-line>Vehicles</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/types\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>directions_bike</mat-icon>\n        <span class=\"title\" mat-line>Vehicle Types</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/fuel\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>local_gas_station</mat-icon>\n        <span class=\"title\" mat-line>Fuels</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/settings\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>settings_applications</mat-icon>\n        <span class=\"title\" mat-line>Other settings</span>\n      </a>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar id=\"appToolbar\" [ngClass]=\"{'toolbar-fullscreen': (fullscreen$ | async)}\" color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"md-icon-button sidenav-toggle-button\"\n      [hidden]=\"sidenav.opened\">\n      <mat-icon aria-label=\"Menu\" class=\"material-icons\">menu</mat-icon>\n    </button>\n    <h1 class=\"component-title\">\n      <a class=\"title-link\">{{title}}</a>\n    </h1>\n    <span class=\"toolbar-filler\"></span>\n    <button id=\"button-logout\" *ngIf=\"loginService.isUserLoggedIn()\" mat-button routerLink=\"/logout\" class=\"logout\">Log\n      Out</button>\n  </mat-toolbar>\n\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Settings\n    </h1>\n</div>\n\n<form class=\"settings-form\">\n    <!-- <mat-form-field>\n        <input matInput [(ngModel)]=\"data.autocancelTimeValue\" \n        #autocancelTimeValue=\"ngModel\" \n        name=\"autocancelTimeValue\" \n        type=\"text\" \n        required placeholder=\"Autocancel Time\">\n    </mat-form-field> -->\n\n    <!-- <mat-form-field class=\"settings-full-width\">\n        <input matInput placeholder=\"Cancel Threshold Time\">\n    </mat-form-field> -->\n</form>"

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

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n          <mat-icon>clear</mat-icon>\n      </button>\n    </mat-toolbar>\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Types</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Type Name</mat-label>\n                <input matInput #input placeholder=\"Type Name\" formControlName=\"name\" required>\n\n                <mat-error *ngIf=\"rName.invalid\">\n\n                    {{getErrorType()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>KM Per Litre</mat-label>\n                <input matInput #input placeholder=\"Mileage\" formControlName=\"mileage\" required>\n                <mat-error *ngIf=\"Rkm.invalid\">\n\n                    {{getErrorkm()}}\n                </mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Vehicle CC</mat-label>\n                <input matInput #input placeholder=\"vehicle CC\" formControlName=\"vehicleCC\" required>\n                <mat-error *ngIf=\"Rcc.invalid\">\n                    {{getErrorCC()}}\n\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Base Fare</mat-label>\n                <input matInput #input placeholder=\"Base Fare\" formControlName=\"baseFare\" required>\n                <mat-error *ngIf=\"Rbasefare.invalid\">\n                    {{getErrorBaseFare()}}\n\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Fuel Type</mat-label>\n                <mat-select formControlName=\"fuel\">\n                    <mat-option *ngFor=\"let fuel of  fuels\" [value]=\"fuel\">\n                        {{fuel.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost Time</mat-label>\n                <input matInput #input placeholder=\"Cost Per Minute\" formControlName=\"costPerMin\" required>\n                  <mat-error *ngIf=\"Rcosttime.invalid\">\n\n                    {{getErrorCosttime()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <input name=\"file\" type=\"file\" class=\"ng-hide\" (change)=\"onFileChanged($event)\" #fileInput>\n\n\n\n\n            <button mat-raised-button class=\"btn\"  [disabled]='!typeForm.valid'  color=\"primary\">\n          Submit\n        </button>\n\n\n        </div>\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/type-deatils/type-deatils.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/type-deatils/type-deatils.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\">\n    <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{name}}\n\n        </h1>\n    </div>\n</div>\n    <mat-card class=\"type\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <mat-card-title fxLayoutAlign=\"start\">Fuel-type: {{fuelname}}</mat-card-title>\n        <br><br>\n        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">    \n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-card-title fxLayoutAlign=\"center center\">Vehicle cc: {{cc}}</mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\">Cost/km: {{costPerKm}}</mat-card-title>\n        </div>\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n           \n                <mat-card-title fxLayoutAlign=\"center center\">cost/min: {{costPerMin}}\n                    <span>\n                    <i class=\"material-icons iconCapacity\" (click)=\"update()\" >\n                        create\n                    </i>\n                </span>\n\n                </mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\">kilometers/lt: {{mileage}}</mat-card-title>\n\n            </div>\n\n        </div>\n\n    </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/types.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/types.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Vehicle Types\n    </h1>\n     <div fxLayout=\"row\" class=\"search\">\n        <mat-form-field fxFlex=\"20%\">\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\" fxLayoutAlign.sm=\"center center\">\n            <div *ngIf=\"displayCount === 0\">\n                <img src=\"http://miceemporio.com/img/no-record-found.jpeg\">\n            </div>\n            <app-vehicle-type-card *ngFor=\"let type of vehicleTypes | paginate: { itemsPerPage: 12, currentPage: p}  | filter:term\" [vehicleTypes]=\"type\">\n\n            </app-vehicle-type-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\"></pagination-controls> \n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n            <button mat-fab color=\"primary\" (click)=\"add()\">\n                <i class=\"material-icons\">\n                    add\n                </i>\n            </button>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/update-types/update-types.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/update-types/update-types.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost/min </mat-label>\n                <input matInput #input placeholder=\"cost/min\" formControlName=\"costPerMin\" [(ngModel)]=\"costPerMin\" required>\n            </mat-form-field>\n        </div>\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!typeForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/vehicle-type-card/vehicle-type-card.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/vehicle-type-card/vehicle-type-card.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card\">\n      <mat-card-content fxLayoutAlign=\"center center\" >\n                <img mat-card-image src=\"{{url}}\" [lazyLoad]=\"url\">\n        </mat-card-content>\n    <mat-card-title  class=\"typeName\">{{name}}</mat-card-title>\n    <mat-card-content>Cost/km : {{costPerKm}}</mat-card-content>\n    <mat-card-content>Cost/min :{{costPerMin}}</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/add-vehicle/add-vehicle.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Vehicle</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Registration No.</mat-label>\n                <input matInput #input placeholder=\"Registration No\" formControlName=\"registrationNo\" required>\n                <mat-error *ngIf=\"rNum.invalid\">\n\n                    {{getErrorRegistrationNo()}}\n                </mat-error>\n            </mat-form-field>\n\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Vehicle Type</mat-label>\n                <mat-select formControlName=\"vehicleType\">\n                    <mat-option *ngFor=\"let vehicleType of Vehicletypes\" [value]=\"vehicleType\">\n                        {{vehicleType.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" required>\n\n                <mat-error *ngIf=\"RinsuranceNo.invalid\">\n\n                    {{getErrorInsuranceNo()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Chassis Number.</mat-label>\n                <input matInput #input placeholder=\"Chassis No.\" formControlName=\"chassisNumber\" required>\n\n                <mat-error *ngIf=\"RchassisNumber.invalid\">\n\n                    {{getErrorChassisNo()}}\n                </mat-error>\n\n            </mat-form-field>\n\n            <mat-label>Vehicle purchase date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"purchasedDate\" formControlName=\"purchasedDate\" [max]=\"todaydate\" placeholder=\"Vehicle Purchased Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"purchasedDate\"></mat-datepicker-toggle>\n                <mat-datepicker #purchasedDate></mat-datepicker>\n            </mat-form-field>\n\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n        <input matInput #input placeholder=\"Placeholder\" formControlName=\"vehiclePurchased\" required>\n    </mat-form-field> -->\n\n\n            <button mat-raised-button  [disabled]='!vehicleForm.valid' class=\"btn\" color=\"primary\">\n      Submit\n    </button>\n\n\n        </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/update-vehicles/update-vehicles.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" [(ngModel)]=\"insuranceNo\" required>\n\n            </mat-form-field>\n\n        </div>\n    </div>\n\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-label>Vehicle Last Service date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" [min]=\"minDate\" placeholder=\"Vehicle Last Service  Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n                <mat-datepicker #lastServiceDate></mat-datepicker>\n            </mat-form-field>\n\n        </div>\n    </div>\n\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!vehicleForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-card/vehicle-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-card/vehicle-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card\">\n        <mat-card-content fxLayoutAlign=\"space-between\" >\n                <ngx-avatar name=\"{{type}}\"></ngx-avatar>\n                <mat-chip-list aria-label=\"Fish selection\">\n            <mat-chip [ngStyle]=\"{'background-color':getColor(status)}\" class=\"status\">{{status}}</mat-chip>\n            </mat-chip-list>\n        </mat-card-content>\n        <mat-card-title class=\"typeName\">{{registrationNo}}</mat-card-title>\n        <mat-card-content >Vehicle Type: {{type}}</mat-card-content>\n    \n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\"> \n    <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n      <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{registrationNo}}\n\n        </h1>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n            <mat-label>Vehicle Status</mat-label>\n            <mat-select [(ngModel)]=\"status1\" (ngModelChange)=\"onChange($event)\">\n                <mat-option *ngFor=\"let z of vehicleStatus\" [value]=\"z.value\">\n                    {{z.viewValue}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</div>\n\n<div fxLayout=\"column\">\n<mat-card class=\"vehicle\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n    <mat-card-title fxLayoutAlign=\"start\" class=\"date\">{{purchasedDate| date:\"dd LLLL yyyy\"}}\n        <button mat-button class=\"icon\" (click)=\"update()\">\n            <mat-icon>\n                    create\n            </mat-icon>\n    </button>\n    </mat-card-title>\n    <br><br>\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n    class=\"form\" fxLayoutAlign=\"center center\">    \n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n         <mat-card-title fxLayoutAlign=\"center center\">Insurance No: {{insuranceNo}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Last Service Date: {{lastServiceDate| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Name: {{name}}</mat-card-title>\n</div>\n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n \n    <mat-card-title fxLayoutAlign=\"center center\">cost-Km: {{costkm}}</mat-card-title>\n    <mat-card-title fxLayoutAlign=\"center center\">cost-Time: {{costtime}}</mat-card-title>\n    <mat-card-title fxLayoutAlign=\"center center\">Chassis No: {{chassisNumber}}</mat-card-title>\n\n\n        </div>\n\n    </div>\n\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicles.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n        <h1 class=\"header\">\n            Vehicles\n        </h1>\n         <div fxLayout=\"row\" class=\"search\">\n            <mat-form-field fxFlex=\"20%\">\n                <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"column wrap\">\n                <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\" fxLayoutAlign.sm=\"center center\">\n                    <div *ngIf=\"displayCount === 0\">\n                        <img src=\"http://miceemporio.com/img/no-record-found.jpeg\">\n                    </div>   \n                    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 9, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n                </div>\n                <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\"></pagination-controls> \n                </div>\n                <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n                    <button mat-fab color=\"primary\" (click)=\"add()\">\n                        <i class=\"material-icons\">\n                            add\n                        </i>\n                    </button>\n                </div>\n            </div>\n            \n\n<!-- <app-search-vehicleType></app-search-vehicleType> -->\n<!-- <div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 9, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n          add\n      </i>\n    </button>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-supervisor/add-supervisor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-supervisor/add-supervisor.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label>Supervisor Name</mat-label>\n                                <input #input aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" [(ngModel)]=\"sname2\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedclient($event)\" [displayWith]=\"getOptionText\">\n                                    <mat-option *ngFor=\"let option of options ; let i = index\" [value]=\"option\">\n                                        {{option.name}}\n                                    </mat-option>\n                                </mat-autocomplete>\n        \n                            </mat-form-field>\n                            <button mat-raised-button class=\"btn\" [disabled]='!zoneForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n        \n            </div>\n        \n        \n        \n        </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-vehicle/add-vehicle.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-vehicle/add-vehicle.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                        <mat-label>Select Vehicle</mat-label>\n                        <input #input aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedclient($event)\" [displayWith]=\"getOptionText\">\n                            <mat-option *ngFor=\"let option of options ; let i = index\" [value]=\"option\">\n                                {{option.registrationNo}}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n    </div>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\"  color=\"primary\">\n            Submit\n        </button>\n\n    </div>\n\n\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-zone/add-zone.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-zone/add-zone.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n        \n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Zone Locality</mat-label>\n                <input matInput #input placeholder=\"Zone Locality\" formControlName=\"locality\" required (keyup.enter)=\"getLocation()\"  (blur)=\"getLocation()\">\n                <mat-hint>\n                    Press Enter after writing locality\n                </mat-hint>\n                <mat-error *ngIf=\"locality.invalid\">\n                                        {{getErrorZoneLocality()}}\n                                    </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlex>\n\n                <mat-label>Zone Name</mat-label>\n                <input matInput #input placeholder=\"Zone Name\" formControlName=\"name\" required>\n\n                <mat-error *ngIf=\"zone.invalid\">\n                \n                                            {{getErrorZoneName()}}\n                                        </mat-error>\n\n            </mat-form-field>\n\n        \n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Capacity</mat-label>\n                <input matInput #input placeholder=\"Capacity\" formControlName=\"capacity\" required>\n                <mat-error *ngIf=\"capacity.invalid\">\n                                    \n                                                                {{getErrorCapacity()}}\n                                                            </mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button class=\"btn\" [disabled]='!zoneForm.valid' color=\"primary\">\n                Submit\n            </button>\n\n        \n    </div>\n\n\n\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/supervisor-details/supervisor-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/supervisor-details/supervisor-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\">\n<mat-card class=\"supervisor\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <mat-card-title fxLayoutAlign=\"start\" class=\"zoneName\">Supervisor\n                        <button mat-button class=\"icon\" disabled=\"{{buttonDisabled2}}\"  (click)=\"updateSupervisor()\">\n                                <mat-icon>\n                                        create\n                                </mat-icon>\n                        </button>\n                </mat-card-title>\n\n                <br><br>\n\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">    \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">Name: {{sName}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Contact No: {{sNumber}}</mat-card-title>\n            \n               \n    </div>  \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">Email: {{sEmail}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Shift: Daily</mat-card-title>\n            \n    </div> \n    </div>  \n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n            <button mat-fab color=\"primary\" disabled=\"{{buttonDisabled}}\" (click)=\"addSupervisor()\">\n                <i class=\"material-icons\">\n                    add\n                </i>\n            </button>\n        </div>\n</mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/update-zones/update-zones.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/update-zones/update-zones.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n                \n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label>Zone Capacity</mat-label>\n                                <input matInput maxlength=\"6\" #input placeholder=\"Zone Capacity\" formControlName=\"capacity\" [(ngModel)]=\"cap\" required>\n                                <mat-error *ngIf=\"capacity.invalid\">\n                                    \n                                    {{getErrorCapacity()}}\n                                </mat-error>\n                            </mat-form-field>\n\n                     <button mat-raised-button class=\"btn\" [disabled]='!zoneForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n                    \n                        </div>\n                    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/vehicle-details/vehicle-details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/vehicle-details/vehicle-details.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicles\">\n    Vehicles\n\n</h1>\n<mat-list>\n    <mat-list-item *ngFor=\"let folder of vehicle\" fxLayoutAlign=\"center center\">\n        <mat-icon mat-list-icon>motorcycle</mat-icon>\n        <h4 mat-line>{{folder.vehicleType.name}}</h4>\n        <h4 mat-line>{{folder.registrationNo}}</h4>   \n    </mat-list-item>\n\n</mat-list>\n\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" disabled=\"{{buttonDisable}}\" (click)=\"add()\">\n        <i class=\"material-icons\">\n            add\n        </i>\n    </button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-card/zone-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-card/zone-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card\">\n        \n    <mat-card-content fxLayoutAlign=\"space-between\" >\n            <ngx-avatar name=\"{{locality}}\"></ngx-avatar>\n            <mat-chip-list aria-label=\"Fish selection\">\n        <mat-chip [ngStyle]=\"{'background-color':getColor(status)}\" class=\"status\">{{status}}</mat-chip>\n        </mat-chip-list>\n    </mat-card-content>\n    <mat-card-title class=\"zoneName\">{{zoneNames}}</mat-card-title>\n    <mat-card-content>{{city}}</mat-card-content>\n    <mat-card-content>Total Vehicle Capacity: {{capacity}}</mat-card-content>\n    <mat-card-content>Current Vehicle Capacity: {{count}}</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-details/zone-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-details/zone-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\"> \n        <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"zoneName\">\n                {{name}}\n                \n        </h1>\n        </div>\n\n<div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-icon class=\"graph\">\n                assessment\n        </mat-icon>\n</div>\n\n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n                <mat-label>Zone Status</mat-label>\n                <mat-select [(ngModel)]=\"status\" (ngModelChange)=\"onChange($event)\">\n                    <mat-option *ngFor=\"let z of zoneStatus\" [value]=\"z.value\" [ngStyle]=\"{'color':getColor(z.viewValue)}\">\n                        {{z.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n</div> \n</div>\n\n<div fxLayout=\"column\">\n<mat-card class=\"zone\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <mat-card-title fxLayoutAlign=\"start\">{{creationTime | date:\"dd LLLL yyyy\"}}</mat-card-title>\n        <br><br>   \n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">    \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">City: {{city}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Country: {{country}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Locality: {{locality}}</mat-card-title> \n               \n    </div>  \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">State: {{state}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Pincode: {{pincode}}</mat-card-title>       \n            <mat-card-title fxLayoutAlign=\"center center\">Capacity: {{capacity}}  \n                    <span>\n                        <i class=\"material-icons iconCapacity\" (click)=\"update()\" >\n                            create\n                        </i>\n                    </span> \n               \n            </mat-card-title> \n    </div> \n    </div>  \n      \n</mat-card>\n\n<app-supervisor-details></app-supervisor-details>\n<app-vehicle-details></app-vehicle-details>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zones.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zones.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Zones\n    </h1>\n    <div fxLayout=\"row\" class=\"search\">\n        <mat-form-field fxFlex=\"20%\">\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\n            fxLayoutAlign.lt-sm=\"center center\">\n            <div *ngIf=\"displayCount === 0\">\n                    <img src=\"http://miceemporio.com/img/no-record-found.jpeg\">\n                </div>\n            <app-zone-card *ngFor=\"let zone of zones | paginate: { itemsPerPage: 12, currentPage: p } | filter:term\"\n                [zones]=\"zone\">\n            </app-zone-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"pagination\"></pagination-controls>\n    </div>\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign =\"end\" class=\"add-button\">\n        <button mat-fab color=\"primary\" (click)=\"add()\">\n            <i class=\"material-icons\">\n                add\n            </i>\n        </button>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/service/auth-guard.service */ "./src/app/authentication/service/auth-guard.service.ts");





const routes = [
    { path: 'fuel', loadChildren: () => __webpack_require__.e(/*! import() | fuel-fuel-module */ "fuel-fuel-module").then(__webpack_require__.bind(null, /*! ./fuel/fuel.module */ "./src/app/fuel/fuel.module.ts")).then(m => m.FuelModule), canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'documents', loadChildren: () => Promise.all(/*! import() | documents-documents-module */[__webpack_require__.e("common"), __webpack_require__.e("documents-documents-module")]).then(__webpack_require__.bind(null, /*! ./documents/documents.module */ "./src/app/documents/documents.module.ts")).then(m => m.DocumentsModule),
        canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'users', loadChildren: () => Promise.all(/*! import() | users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(m => m.UsersModule) },
    { path: 'zones', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./zones/zones.module */ "./src/app/zones/zones.module.ts")).then(m => m.ZonesModule), canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(m => m.AuthenticationModule) },
    { path: 'types', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./types/types.module */ "./src/app/types/types.module.ts")).then(m => m.TypesModule), canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'vehicles', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts")).then(m => m.VehiclesModule), canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'settings', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsModule) },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/navigation/navigation.component */ "./src/app/core/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _zones_zones_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zones/zones.module */ "./src/app/zones/zones.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts");
/* harmony import */ var _types_types_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/types.module */ "./src/app/types/types.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/fullscreen.service */ "./src/app/shared/fullscreen.service.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/settings.module */ "./src/app/settings/settings.module.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
            _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication/service/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationService = class AuthenticationService {
    authenticate(username, password) {
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    }
    isUserLoggedIn() {
        const user = sessionStorage.getItem('username');
        // console.log(!(user === null))
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/navigation/navigation.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-fullscreen {\n  display: none;\n  \n}\n\n.toolbar-filler {\n  flex: 1 1 auto;\n  background-color: rebeccapurple;\n  width: 50px;\n}\n\n.sidenav {\n  width: 230px;\n  height: auto;\n  position: fixed;\n}\n\n.box {\n  height: 200px;\n}\n\n.logout {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItZnVsbHNjcmVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIFxufVxuXG4udG9vbGJhci1maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5sb2dvdXQge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/service/authentication.service */ "./src/app/authentication/service/authentication.service.ts");
/* harmony import */ var src_app_shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/fullscreen.service */ "./src/app/shared/fullscreen.service.ts");




let NavigationComponent = class NavigationComponent {
    constructor(fullscreenService, loginService) {
        this.fullscreenService = fullscreenService;
        this.loginService = loginService;
        this.title = 'Operational Portal';
    }
    ngOnInit() {
        this.fullscreen$ = this.fullscreenService.fullscreen$;
    }
};
NavigationComponent.ctorParameters = () => [
    { type: src_app_shared_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__["FullscreenService"] },
    { type: src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/core/navigation/navigation.component.css")]
    })
], NavigationComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FuelService = class FuelService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fuelBaseApi;
    }
    getFuel() {
        console.log(this.baseUrl);
        return this.httpClient.get(this.baseUrl);
    }
    createFuel(fuel) {
        return this.httpClient.post(this.baseUrl, fuel);
    }
    getFuelByName(name) {
        console.log(this.baseUrl + '?name=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    }
    updateFuel(name, fuel) {
        return this.httpClient.patch(this.baseUrl + '/' + name, fuel);
    }
};
FuelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FuelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FuelService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SettingsService = class SettingsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl3 /*+ environment.bookingService */ + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].configBaseApi;
    }
    getConfigurationByName(name) {
        return this.httpClient.get(this.baseUrl + '/' + name);
    }
    updateConfigurationByName(name) {
        return this.httpClient.patch(this.baseUrl + '/' + name, {});
    }
};
SettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");




const routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] }];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    margin-left: 10%;\n    margin-bottom: 50px;\n}\n.settings-full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZXR0aW5ncy1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/settings.service */ "./src/app/settings/service/settings.service.ts");



let SettingsComponent = class SettingsComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    ngOnInit() {
        this.settingsService.getConfigurationByName('autocancelTime').subscribe(response => {
            console.log('Response of autocancel time value: ', response);
            this.autocancelTimeValue = response.value;
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
    })
], SettingsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");







let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
        ]
    })
], SettingsModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FullscreenService = class FullscreenService {
    constructor(router) {
        this.router = router;
        this.fullscreen$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            const route = this.router.config.find(r => {
                return '/' + r.path === event.url.split('?')[0];
            });
            return route && route.fullscreen ? true : false;
        }));
    }
};
FullscreenService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FullscreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FullscreenService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let NotificationService = class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    success(msg) {
        this.config.panelClass = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    }
    warn(msg) {
        this.config.panelClass = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");





let SharedModule = class SharedModule {
};
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



/***/ }),

/***/ "./src/app/types/add-vehicle-type/add-vehicle-type.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/types/add-vehicle-type/add-vehicle-type.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background-color: white;\n}\n\ncontroles-container{\n  width: 100%;\n  padding: 5%;    \n}\n\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.controles-container > * {\n  width: 100%;\n  }\n\n.btn {\n  width: 16em; height: 60px;\n }\n\n.btn-dialog-close{\n  width: 45px;\n  min-width: 0px !important;\n  height: 40px;\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvYWRkLXZlaGljbGUtdHlwZS9hZGQtdmVoaWNsZS10eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7O0FBRUY7RUFDRSxXQUFXLEVBQUUsWUFBWTtDQUMxQjs7QUFFQTtFQUNDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL2FkZC12ZWhpY2xlLXR5cGUvYWRkLXZlaGljbGUtdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5idG4ge1xuICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuIH1cblxuIC5idG4tZGlhbG9nLWNsb3Nle1xuICB3aWR0aDogNDVweDtcbiAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_fuel_fuel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/fuel/fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let AddVehicleTypeComponent = class AddVehicleTypeComponent {
    constructor(dialogRef, fb, route, router, typeService, fuelService, http, snackBar) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.typeService = typeService;
        this.fuelService = fuelService;
        this.http = http;
        this.snackBar = snackBar;
        this.datas = [];
        this.fuels = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl2 + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].typeBaseApi;
        this.typeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            mileage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            costPerMin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            vehicleCC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            baseFare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            fuel: [],
            url: []
        });
    }
    get rName() {
        return this.typeForm.get('name');
    }
    get Rcc() {
        return this.typeForm.get('vehicleCC');
    }
    get Rkm() {
        return this.typeForm.get('mileage');
    }
    get Rcosttime() {
        return this.typeForm.get('costPerMin');
    }
    get Rbasefare() {
        return this.typeForm.get('baseFare');
    }
    getErrorType() {
        return this.rName.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
            '';
    }
    getErrorkm() {
        return this.Rkm.hasError('pattern') ? 'Invalid Kilometer' :
            '';
    }
    getErrorCosttime() {
        return this.Rcosttime.hasError('pattern') ? 'Invalid cost for  Time' :
            '';
    }
    getErrorCC() {
        return this.Rcc.hasError('pattern') ? 'Invalid cc' :
            '';
    }
    getErrorBaseFare() {
        return this.Rbasefare.hasError('pattern') ? 'Invalid cost for basefare' :
            '';
    }
    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        console.log('this is upload call');
        const uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
        console.log('', uploadData);
        //  this.http; is; the; injected; HttpClient;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl2 + '/api/v1/uploadFile?id=' + this.typeForm.value.name, uploadData)
            .subscribe(event => {
            let eventData;
            eventData = event;
            console.log('response', eventData.fileDownloadUri); // handle event here
            this.typeForm.value.url = eventData.fileDownloadUri;
        });
    }
    onClose() {
        this.typeForm.reset();
        this.dialogRef.close();
    }
    getFuelList() {
        this.fuelService.getFuel().subscribe(res => {
            this.fuels = res.data;
            console.log('types list: ', this.fuels);
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.onUpload();
            setTimeout(() => {
                console.log(this.typeForm.value);
                console.log(this.typeForm.value, 'child');
                this.dialogRef.close(this.typeForm.value);
            }, 2000);
        });
    }
    ngOnInit() {
        this.getFuelList();
    }
    openSnackbar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    }
};
AddVehicleTypeComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
    { type: src_app_fuel_fuel_service__WEBPACK_IMPORTED_MODULE_7__["FuelService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AddVehicleTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle-type',
        template: __webpack_require__(/*! raw-loader!./add-vehicle-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/add-vehicle-type/add-vehicle-type.component.html"),
        styles: [__webpack_require__(/*! ./add-vehicle-type.component.css */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.css")]
    })
], AddVehicleTypeComponent);



/***/ }),

/***/ "./src/app/types/type-deatils/type-deatils.component.css":
/*!***************************************************************!*\
  !*** ./src/app/types/type-deatils/type-deatils.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.type {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n.iconCapacity {\n    \n    cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n    .type {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .vehicleName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n}\n\n.add-button {\n    padding-right: 450px;\n    padding-bottom: 2%;\n}\n\nmat-icon {\n    font-size: 60px;\n}\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n.status {\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZS1kZWF0aWxzL3R5cGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90eXBlcy90eXBlLWRlYXRpbHMvdHlwZS1kZWF0aWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZU5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5ncmFwaCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDg1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmljb25DYXBhY2l0eSB7XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnR5cGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLnZlaGljbGVOYW1lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4uaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-types/update-types.component */ "./src/app/types/update-types/update-types.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







let TypeDeatilsComponent = class TypeDeatilsComponent {
    constructor(vehicleTypeService, route, matDialog, notificationService) {
        this.vehicleTypeService = vehicleTypeService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.getVehicleTypeDetails();
    }
    getVehicleTypeDetails() {
        this.vehicleTypeService.getVehicleByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
            this.type = res.data;
            console.log('data', res.data);
            console.log(res);
            this.name = this.type.name;
            this.cc = this.type.vehicleCC;
            this.fuelname = this.type.fuel.name;
            this.costPerKm = this.type.costPerKm;
            this.costPerMin = this.type.costPerMin;
            this.mileage = this.type.mileage;
        });
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            costPerMin: this.type.costPerMin,
        };
        const dRef = this.matDialog.open(_update_types_update_types_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTypesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            console.log('Back to parent', result);
            this.vehicleTypeService.updateVehicleType(this.name, result).subscribe(response => {
                this.notificationService.success('Cost updated successfully!!');
                this.getVehicleTypeDetails();
            }, error => {
                this.notificationService.warn('not updated');
            });
        });
    }
};
TypeDeatilsComponent.ctorParameters = () => [
    { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
TypeDeatilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-deatils',
        template: __webpack_require__(/*! raw-loader!./type-deatils.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/type-deatils/type-deatils.component.html"),
        styles: [__webpack_require__(/*! ./type-deatils.component.css */ "./src/app/types/type-deatils/type-deatils.component.css")]
    })
], TypeDeatilsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-deatils/type-deatils.component */ "./src/app/types/type-deatils/type-deatils.component.ts");





const routes = [{ path: '', component: _types_component__WEBPACK_IMPORTED_MODULE_3__["TypesComponent"] },
    { path: ':name', component: _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_4__["TypeDeatilsComponent"] }];
let TypesRoutingModule = class TypesRoutingModule {
};
TypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TypesRoutingModule);



/***/ }),

/***/ "./src/app/types/types.component.css":
/*!*******************************************!*\
  !*** ./src/app/types/types.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-vehicle-type-card {\n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n    app-vehicle-type-card {\n        width: 75%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3R5cGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC12ZWhpY2xlLXR5cGUtY2FyZCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgYXBwLXZlaGljbGUtdHlwZS1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vehicle-type/add-vehicle-type.component */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






let TypesComponent = class TypesComponent {
    constructor(typeService, matDialog, notificationService) {
        this.typeService = typeService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
        this.page = 0;
    }
    ngOnInit() {
        this.getTypes();
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dRef = this.matDialog.open(_add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleTypeComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.typeService.createType(result)
                    .subscribe(response => {
                    this.message = response.message;
                    console.log(this.message);
                    if (this.message === 'Type already exists') {
                        this.notificationService.warn('Type already exists');
                    }
                    else {
                        this.notificationService.success('Type added succesfully');
                    }
                    this.getTypes();
                });
            }
        });
    }
    getTypes() {
        this.typeService.getType().subscribe(res => {
            if (res.count === 0 || res.count === undefined) {
                this.displayCount = 0;
            }
            else {
                this.vehicleTypes = res.data;
                console.log(res, 'parent');
                this.displayCount = 1;
            }
        });
    }
};
TypesComponent.ctorParameters = () => [
    { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _types_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types-routing.module */ "./src/app/types/types-routing.module.ts");
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _vehicle_type_card_vehicle_type_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-type-card/vehicle-type-card.component */ "./src/app/types/vehicle-type-card/vehicle-type-card.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _type_deatils_type_deatils_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./type-deatils/type-deatils.component */ "./src/app/types/type-deatils/type-deatils.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_vehicle_type_add_vehicle_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-vehicle-type/add-vehicle-type.component */ "./src/app/types/add-vehicle-type/add-vehicle-type.component.ts");
/* harmony import */ var _update_types_update_types_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-types/update-types.component */ "./src/app/types/update-types/update-types.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

















let TypesModule = class TypesModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");






let UpdateTypesComponent = class UpdateTypesComponent {
    constructor(dialogRef, fb, route, router, vehicleTypeService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.vehicleTypeService = vehicleTypeService;
        this.typeForm = this.fb.group({
            costPerMin: ['']
        });
        this.costPerMin = data.costPerMin;
    }
    onClose() {
        // this.zoneForm.reset();
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(this.typeForm.value);
        this.dialogRef.close(this.typeForm.value);
    }
    ngOnInit() {
    }
};
UpdateTypesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_5__["VehicleTypeService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UpdateTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-types',
        template: __webpack_require__(/*! raw-loader!./update-types.component.html */ "./node_modules/raw-loader/index.js!./src/app/types/update-types/update-types.component.html"),
        styles: [__webpack_require__(/*! ./update-types.component.css */ "./src/app/types/update-types/update-types.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UpdateTypesComponent);



/***/ }),

/***/ "./src/app/types/vehicle-type-card/vehicle-type-card.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/types/vehicle-type-card/vehicle-type-card.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.typeName {\n    padding-top: 4%;\n}\n\nimg {\nheight: 40%;\nwidth: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdmVoaWNsZS10eXBlLWNhcmQvdmVoaWNsZS10eXBlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3ZlaGljbGUtdHlwZS1jYXJkL3ZlaGljbGUtdHlwZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50eXBlTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQlO1xufVxuXG5pbWcge1xuaGVpZ2h0OiA0MCU7XG53aWR0aDogNTUlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let VehicleTypeCardComponent = class VehicleTypeCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.name = Object.values(this.vehicleTypes)[1];
        this.costPerKm = Object.values(this.vehicleTypes)[2];
        this.costPerMin = Object.values(this.vehicleTypes)[3];
        this.url = Object.values(this.vehicleTypes)[6];
        console.log(Object.values(this.vehicleTypes));
    }
    ok() {
        console.log('hi');
        this.router.navigate(['types/', this.name]);
    }
};
VehicleTypeCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let VehicleTypeService = class VehicleTypeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].typeBaseApi;
    }
    getType() {
        return this.httpClient.get(this.baseUrl);
    }
    getVehicleByName(name) {
        console.log('get vehicles by name called');
        console.log(this.baseUrl + '?registrationNo=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    }
    // tslint:disable-next-line: no-shadowed-variable
    createType(VehicleType) {
        return this.httpClient.post(this.baseUrl, VehicleType);
    }
    updateVehicleType(name, type) {
        return this.httpClient.patch(this.baseUrl + '/' + name, type);
    }
};
VehicleTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleTypeService);



/***/ }),

/***/ "./src/app/vehicles/add-vehicle/add-vehicle.component.css":
/*!****************************************************************!*\
  !*** ./src/app/vehicles/add-vehicle/add-vehicle.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    background-color: white;\n}\n\ncontroles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFFSjtJQUNJLFdBQVcsRUFBRSxZQUFZO0dBQzFCOztBQUVBO0lBQ0MsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTsgICAgXG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTZlbTsgaGVpZ2h0OiA2MHB4O1xuICAgfVxuICBcbiAgIC5idG4tZGlhbG9nLWNsb3Nle1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_types_vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/types/vehicle-type.service */ "./src/app/types/vehicle-type.service.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AddVehicleComponent = class AddVehicleComponent {
    constructor(dialogRef, fb, route, router, vehicleService, typeService, snackBar) {
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
            registrationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            insuranceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            vehicleType: [''],
            status: 'Free',
            purchasedDate: [''],
            chassisNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]]
        });
    }
    get rNum() {
        return this.vehicleForm.get('registrationNo');
    }
    get RinsuranceNo() {
        return this.vehicleForm.get('insuranceNo');
    }
    get status() {
        return this.vehicleForm.get('status');
    }
    get Vehicletype() {
        return this.vehicleForm.get('vehicleType');
    }
    get purchasedDate() {
        return this.vehicleForm.get('purchasedDate');
    }
    get RchassisNumber() {
        return this.vehicleForm.get('chassisNumber');
    }
    getErrorRegistrationNo() {
        return this.rNum.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
            '';
    }
    getErrorInsuranceNo() {
        return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
            '';
    }
    getErrorChassisNo() {
        return this.RchassisNumber.hasError('pattern') ? 'Invalid no' :
            '';
    }
    onClose() {
        this.vehicleForm.reset();
        this.dialogRef.close();
    }
    getTypeList() {
        this.typeService.getType().subscribe(res => {
            this.Vehicletypes = res.data;
            console.log('types list: ', this.Vehicletypes);
        });
    }
    onSubmit() {
        console.log(this.vehicleForm.value);
        console.log(this.vehicleForm.value, 'child');
        this.dialogRef.close(this.vehicleForm.value);
    }
    ngOnInit() {
        this.getTypeList();
    }
};
AddVehicleComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: src_app_types_vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle',
        template: __webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html"),
        styles: [__webpack_require__(/*! ./add-vehicle.component.css */ "./src/app/vehicles/add-vehicle/add-vehicle.component.css")]
    })
], AddVehicleComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let UpdateVehiclesComponent = class UpdateVehiclesComponent {
    constructor(dialogRef, fb, route, router, vehicleService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.todaydate = new Date();
        this.minDate = new Date();
        this.vehicleForm = this.fb.group({
            lastServiceDate: [''],
            insuranceNo: ['']
        });
        this.lastServiceDate = data.lastServiceDate;
        this.insuranceNo = data.insuranceNo;
        // this.vehiclePurchased = data.vehiclePurchased;
        this.minDate = new Date(data.purchasedDate);
    }
    onClose() {
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(this.vehicleForm.value);
        this.dialogRef.close(this.vehicleForm.value);
    }
    ngOnInit() {
        console.log(this.lastServiceDate, this.minDate);
    }
};
UpdateVehiclesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UpdateVehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-vehicles',
        template: __webpack_require__(/*! raw-loader!./update-vehicles.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html"),
        styles: [__webpack_require__(/*! ./update-vehicles.component.css */ "./src/app/vehicles/update-vehicles/update-vehicles.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UpdateVehiclesComponent);



/***/ }),

/***/ "./src/app/vehicles/vehicle-card/vehicle-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/vehicles/vehicle-card/vehicle-card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.typeName {\n    padding-top: 20px;\n}\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1jYXJkL3ZlaGljbGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtY2FyZC92ZWhpY2xlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udHlwZU5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnN0YXR1cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let VehicleCardComponent = class VehicleCardComponent {
    // category: string;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.registrationNo = this.vehicle.registrationNo;
        this.status = this.vehicle.status;
        this.type = this.vehicle.vehicleType.name;
        //  this.category = this.vehicle.type.category;
        console.log(this.vehicle.vehicleType.name);
    }
    ok() {
        console.log('hi');
        this.router.navigate(['vehicles/', this.registrationNo]);
    }
    getColor(status) {
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
    }
};
VehicleCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
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



/***/ }),

/***/ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n    padding-right: 750px;\n}\n\n.date {\n    font-size: 1.4em;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.vehicle {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 350px;\n    width: 50%;\n}\n\n@media only screen and (max-width: 600px) {\n    .vehicle {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .vehicleName {\n        margin-left: 50px;\n        font-size: 1.4em;\n        padding-bottom: 5px;\n    }\n    .status {\n            margin-top: 20px;\n            padding-right: 60px;\n           \n        }\n        .icon {\n            margin-left: 20%;\n        }\n\n        .date {\n            font-size: 1.2em;\n        }\n}\n\n@media only screen and (min-width: 600px) {\n    .icon {\n        margin-left: 70%;\n        background-color:transparent;\n        }   \n        \n}\n\n.status {\n    margin-top: 20px;\n    padding-left: 60px;\n    font-weight: bold;\n    font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1kZWF0aWxzL3ZlaGljbGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1lBQ1EsZ0JBQWdCO1lBQ2hCLG1CQUFtQjs7UUFFdkI7UUFDQTtZQUNJLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjtBQUNSOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCOztBQUVSOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtZGVhdGlscy92ZWhpY2xlLWRlYXRpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZWhpY2xlTmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NTBweDtcbn1cblxuLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5ncmFwaCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDg1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZlaGljbGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC52ZWhpY2xlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC52ZWhpY2xlTmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgICB9ICAgXG4gICAgICAgIFxufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-vehicles/update-vehicles.component */ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







let VehicleDeatilsComponent = class VehicleDeatilsComponent {
    constructor(vehicleService, route, matDialog, notificationService) {
        this.vehicleService = vehicleService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.vehicleStatus = [
            { value: 'Busy', viewValue: 'BUSY' },
            { value: 'Free', viewValue: 'FREE' },
            { value: 'Servicing', viewValue: 'SERVICING' },
            { value: 'Stolen', viewValue: 'STOLEN' },
            { value: 'No_More_In_Use', viewValue: 'No More In Use' }
        ];
    }
    ngOnInit() {
        this.getVehicleDetails();
    }
    getVehicleDetails() {
        this.vehicleService.getVehicleByRegistrationNo(this.route.snapshot.paramMap.get('registrationNo')).subscribe(res => {
            this.vehicle = res.data;
            console.log('data', res.data);
            console.log(res);
            this.registrationNo = this.vehicle.registrationNo;
            this.name = this.vehicle.vehicleType.name;
            this.lastServiceDate = this.vehicle.lastServiceDate;
            this.purchasedDate = this.vehicle.purchasedDate;
            this.insuranceNo = this.vehicle.insuranceNo;
            this.zoneId = this.vehicle.zoneId;
            this.chassisNumber = this.vehicle.chassisNumber;
            this.cc = this.vehicle.vehicleType.vehicleCC;
            this.costkm = this.vehicle.vehicleType.costPerKm;
            this.costtime = this.vehicle.vehicleType.costPerMin;
            this.status1 = this.vehicle.status;
        });
    }
    onChange(newValue) {
        console.log(this.vehicle, newValue);
        this.vehicle.status = newValue;
        this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe();
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            insuranceNo: this.vehicle.insuranceNo,
            lastServiceDate: this.vehicle.lastServiceDate,
            purchasedDate: this.vehicle.purchasedDate
        };
        const dRef = this.matDialog.open(_update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__["UpdateVehiclesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                console.log('Back to parent', result);
                this.vehicleService.updateVehicle(this.registrationNo, result).subscribe(response => {
                    this.notificationService.success('Vehicle details updated succesffuly');
                    this.getVehicleDetails();
                }, error => {
                    this.notificationService.warn('not updated');
                });
            }
        });
    }
};
VehicleDeatilsComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
VehicleDeatilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-deatils',
        template: __webpack_require__(/*! raw-loader!./vehicle-deatils.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html"),
        styles: [__webpack_require__(/*! ./vehicle-deatils.component.css */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.css")]
    })
], VehicleDeatilsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let VehicleService = class VehicleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vehicleBaseApi;
    }
    getVehicles() {
        return this.httpClient.get(this.baseUrl);
    }
    createVehicles(vehicle) {
        return this.httpClient.post(this.baseUrl, vehicle);
    }
    getVehicleByRegistrationNo(registrationNo) {
        console.log(this.baseUrl + '?registrationNo=' + registrationNo);
        return this.httpClient.get(this.baseUrl + '?registrationNo=' + registrationNo);
    }
    getVehicleByZoneIdType(zoneId, type) {
        console.log(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
        return this.httpClient.get(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
    }
    updateVehicle(registrationNo, vehicle) {
        return this.httpClient.patch(this.baseUrl + '/' + registrationNo, vehicle);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-deatils/vehicle-deatils.component */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts");





const routes = [{ path: '', component: _vehicles_component__WEBPACK_IMPORTED_MODULE_3__["VehiclesComponent"] },
    { path: ':registrationNo', component: _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDeatilsComponent"] }];
let VehiclesRoutingModule = class VehiclesRoutingModule {
};
VehiclesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VehiclesRoutingModule);



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/*!*************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-vehicle-card {\n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n   \n    app-vehicle-card {\n        width: 75%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlcy92ZWhpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hcHAtdmVoaWNsZS1jYXJkIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgIFxuICAgIGFwcC12ZWhpY2xlLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/vehicles/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






let VehiclesComponent = class VehiclesComponent {
    constructor(vehicleService, matDialog, notificationService) {
        this.vehicleService = vehicleService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
    }
    ngOnInit() {
        this.getVehicles();
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.vehicleService.createVehicles(result)
                    .subscribe(response => {
                    this.message = response.message;
                    console.log(this.message);
                    if (this.message === 'Vehicle already exists') {
                        this.notificationService.warn('Vehicle already exists');
                    }
                    else {
                        this.notificationService.success('Vehicle added succesfully');
                    }
                    this.getVehicles();
                });
            }
        });
    }
    getVehicles() {
        this.vehicleService.getVehicles().subscribe(res => {
            if (res.count === undefined || res.count === 0) {
                this.displayCount = 0;
            }
            else {
                this.vehicle = res.data;
                this.displayCount = 1;
            }
        });
    }
};
VehiclesComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles-routing.module */ "./src/app/vehicles/vehicles-routing.module.ts");
/* harmony import */ var _vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_deatils_vehicle_deatils_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-deatils/vehicle-deatils.component */ "./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.ts");
/* harmony import */ var _vehicle_card_vehicle_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-card/vehicle-card.component */ "./src/app/vehicles/vehicle-card/vehicle-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/vehicles/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-vehicles/update-vehicles.component */ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
















let VehiclesModule = class VehiclesModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AddSupervisorComponent = class AddSupervisorComponent {
    constructor(fb, route, router, zoneService, dialogRef, data) {
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
    ngOnInit() {
        console.log(this.sname2);
    }
    onClose() {
        this.zoneForm.reset();
        this.dialogRef.close();
    }
    onSubmit() {
        this.zoneForm.value.supervisorNumber = Object.values(this.selectedSupervisor)[2];
        this.zoneForm.value.supervisorId = Object.values(this.selectedSupervisor)[0];
        this.zoneForm.value.supervisorEmail = Object.values(this.selectedSupervisor)[3];
        this.zoneForm.value.supervisorName = Object.values(this.selectedSupervisor)[1];
        this.zoneForm.value.userStatus = 'Allocated';
        this.dialogRef.close(this.zoneForm.value);
    }
    selectedclient(event) {
        this.selectedSupervisor = event.option.value;
    }
    getOptionText(option) {
        return option.name;
    }
};
AddSupervisorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
AddSupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-supervisor',
        template: __webpack_require__(/*! raw-loader!./add-supervisor.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-supervisor/add-supervisor.component.html"),
        styles: [__webpack_require__(/*! ./add-supervisor.component.css */ "./src/app/zones/add-supervisor/add-supervisor.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], AddSupervisorComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AddVehicleComponent = class AddVehicleComponent {
    constructor(fb, dialogRef, vehicleService, zoneService, route, data) {
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
    ngOnInit() {
        this.vehicleService.getVehicles().subscribe(res => {
            this.vehicle = res.data;
        });
    }
    onClose() {
        this.dialogRef.close();
    }
    onSubmit() {
        this.vehicleForm.value.rNo = Object.values(this.selectedVehicle)[2];
        this.dialogRef.close(this.vehicleForm.value);
    }
    selectedclient(event) {
        this.selectedVehicle = event.option.value;
        console.log(Object.values(this.selectedVehicle));
    }
    getOptionText(option) {
        return option.registrationNo;
    }
};
AddVehicleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_4__["ZoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle',
        template: __webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-vehicle/add-vehicle.component.html"),
        styles: [__webpack_require__(/*! ./add-vehicle.component.css */ "./src/app/zones/add-vehicle/add-vehicle.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddVehicleComponent);



/***/ }),

/***/ "./src/app/zones/add-zone/add-zone.component.css":
/*!*******************************************************!*\
  !*** ./src/app/zones/add-zone/add-zone.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.button {\n    padding-bottom: 21.5px;\n}\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.location {\n  width: 16em; height: 60px;\n}\n\n@media only screen and (max-width: 600px) {\n  .location {\n    width: 8em;\n  }\n}\n\n.col {\n    width: 50%;\n  }\n\nsnack-bar-container.success {\n    background-color: #5cb85c;\n    color : #fff;\n  }\n\nsnack-bar-container.warn {\n    background-color: #f99157;\n    color : #fff;\n  }\n\nsnack-bar-container.notification simple-snack-bar{\n    font-size: 18px !important;\n    font-weight: bold;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFHQTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6Qjs7QUFFTjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVcsRUFBRSxZQUFZO0dBQzFCOztBQUVIO0VBQ0UsV0FBVyxFQUFFLFlBQVk7QUFDM0I7O0FBR0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNHO0lBQ0MsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBR0E7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiBcbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIxLjVweDtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgIH1cblxuLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2NhdGlvbiB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxufVxuICAgLmNvbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIHNuYWNrLWJhci1jb250YWluZXIuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICBjb2xvciA6ICNmZmY7XG4gIH1cblxuICBzbmFjay1iYXItY29udGFpbmVyLndhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTkxNTc7XG4gICAgY29sb3IgOiAjZmZmO1xuICB9XG5cblxuICBzbmFjay1iYXItY29udGFpbmVyLm5vdGlmaWNhdGlvbiBzaW1wbGUtc25hY2stYmFye1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







// import { Zone } from 'src/app/model/zone';
let AddZoneComponent = class AddZoneComponent {
    constructor(dialogRef, fb, route, router, zoneService, notificationService) {
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
    get zone() {
        return this.zoneForm.get('name');
    }
    get locality() {
        return this.zoneForm.get('locality');
    }
    get capacity() {
        return this.zoneForm.get('capacity');
    }
    getErrorZoneName() {
        return this.zone.hasError('pattern') ? 'Zone Name should not contain any special characters.' :
            '';
    }
    getErrorZoneLocality() {
        return this.locality.hasError('pattern') ? 'Locality should not contain any special characters.' :
            '';
    }
    getErrorCapacity() {
        return this.capacity.hasError('pattern') ? 'Capacity should contain only numbers.' :
            '';
    }
    onClose() {
        this.zoneForm.reset();
        this.dialogRef.close();
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.location);
        this.zoneForm.value.lat = this.location.position.lat;
        this.zoneForm.value.lon = this.location.position.lon;
        this.zoneForm.value.country = this.location.address.country;
        this.zoneForm.value.city = this.location.address.countrySecondarySubdivision;
        this.zoneForm.value.state = this.location.address.countrySubdivision;
        console.log(this.zoneForm.value, 'child');
        this.dialogRef.close(this.zoneForm.value);
    }
    getLocation() {
        if (this.zoneForm.value.locality === '') {
            this.notificationService.warn('Please provide locality!!!');
        }
        else {
            this.zoneService.getAddress(this.zoneForm.value.locality).subscribe(res => {
                this.location = res.data.results[0];
                console.log(this.location);
                if (this.location == null) {
                    this.notificationService.warn('No location found!!');
                }
                else {
                    this.notificationService.success('Location added successfully');
                    this.lat1 = this.location.position.lat;
                    this.lon1 = this.location.position.lon;
                    this.con = this.location.address.country;
                    console.log(this.location.address.country + '' + this.lat1 + ' ' + this.lon1 + ' ' + this.con);
                }
            });
        }
    }
};
AddZoneComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_5__["ZoneService"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
AddZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-zone',
        template: __webpack_require__(/*! raw-loader!./add-zone.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/add-zone/add-zone.component.html"),
        styles: [__webpack_require__(/*! ./add-zone.component.css */ "./src/app/zones/add-zone/add-zone.component.css")]
    })
], AddZoneComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ZoneService = class ZoneService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl1 + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneBaseApi;
    }
    createZone(zone) {
        return this.httpClient.post(this.baseUrl, zone);
    }
    getZones() {
        return this.httpClient.get(this.baseUrl);
    }
    getZoneByName(name) {
        return this.httpClient.get(this.baseUrl + '/name/' + name);
    }
    getZoneByLocality(name) {
        return this.httpClient.get(this.baseUrl + '/locality/' + name);
    }
    getAddress(locality) {
        return this.httpClient.get(this.baseUrl + '/loc/' + locality);
    }
    updateZones(name, zone) {
        return this.httpClient.patch(this.baseUrl + '/' + name, zone);
    }
    getSupervisor() {
        return this.httpClient.get('http://172.23.234.83:8091/api/v1/users?role=Supervisor&status=Unallocated');
    }
    getSupervisorById(id) {
        return this.httpClient.get('http://172.23.234.83:8091/api/v1/users/' + id);
    }
    updateSupervisorStatus(id, supervisor) {
        return this.httpClient.patch('http://172.23.234.83:8091/api/v1/users/' + id, supervisor);
    }
    getZoneType(zid, tid) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl1 + '/api/v1/zoneTypeCount' + '?zoneId=' + zid + '&typeId=' + tid);
    }
    createNew(zoneTypeCount) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl1 + '/api/v1/zoneTypeCount', zoneTypeCount);
    }
    updateZoneTypeCount(zid, tid, zoneTypeCount) {
        return this.httpClient.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl1 + '/api/v1/zoneTypeCount' +
            '?zoneId=' + zid + '&typeId=' + tid, zoneTypeCount);
    }
};
ZoneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ZoneService);



/***/ }),

/***/ "./src/app/zones/supervisor-details/supervisor-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/zones/supervisor-details/supervisor-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".supervisor {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n.zoneName {\n    font-weight: bold;\n    font-size: 1.5em;\n}\n\n.add-button {\n    padding-left: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    .supervisor {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n    .add-button {\n        padding-left: 250px;\n        margin-top: -5%;\n    }\n    .icon {\n        margin-left: 40%;\n    }\n    mat-card-title {\n        font-size: 1.4em;\n    }  \n}\n\n@media only screen and (min-width: 600px) {\n    .icon {\n        margin-left: 80%;\n        background-color:transparent;\n        }   \n        \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvc3VwZXJ2aXNvci1kZXRhaWxzL3N1cGVydmlzb3ItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCOztBQUVSIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvc3VwZXJ2aXNvci1kZXRhaWxzL3N1cGVydmlzb3ItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cGVydmlzb3Ige1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnpvbmVOYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnN1cGVydmlzb3Ige1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLnpvbmVOYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTUlO1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgfVxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB9ICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgfSAgIFxuICAgICAgICBcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-supervisor/add-supervisor.component */ "./src/app/zones/add-supervisor/add-supervisor.component.ts");







let SupervisorDetailsComponent = class SupervisorDetailsComponent {
    constructor(router, zoneService, activatedRoute, route, notificationService, matDialog) {
        this.router = router;
        this.zoneService = zoneService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
    }
    ngOnInit() {
        this.getZoneDetails();
        this.getSupervisor();
        this.buttonDisabled = false;
        this.buttonDisabled2 = true;
    }
    getZoneDetails() {
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
            this.zone = res.data;
            console.log(this.zone);
            this.name = this.zone[0].name;
            this.supId = this.zone[0].supervisorId;
            this.sName = this.zone[0].supervisorName;
            this.sNumber = this.zone[0].supervisorNumber;
            this.sEmail = this.zone[0].supervisorEmail;
            this.status = 'Daily';
            if (this.zone[0].supervisorName !== null) {
                console.log(this.zone, 'yes');
                this.buttonDisabled = true;
                this.buttonDisabled2 = false;
            }
        });
    }
    addSupervisor() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            supervisor: this.supervisor,
            sId: this.zone[0].supervisorId
        };
        const dRef = this.matDialog.open(_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__["AddSupervisorComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.sid = String(Object.values(result)[2]);
                this.sStatus = JSON.stringify(Object.values(result)[5]);
                console.log(result, this.sid);
                this.zoneService.updateZones(this.name, result).subscribe(response => {
                    this.notificationService.success('Zone updated successfully!!'),
                        this.getZoneDetails();
                    this.zoneService.getSupervisorById(this.sid).subscribe(res => {
                        this.supervisor2 = res.data;
                        this.supervisor2.userStatus = 'Allocated';
                        this.zoneService.updateSupervisorStatus(this.sid, this.supervisor2).subscribe();
                    });
                }, error => {
                    this.notificationService.warn('Can\'t update ');
                });
            }
        });
    }
    updateSupervisor() {
        this.zoneService.getSupervisorById(this.supId).subscribe(res => {
            this.supervisor2 = res.data;
            this.supervisor2.userStatus = 'Unallocated';
            console.log(res);
            this.zoneService.updateSupervisorStatus(this.supId, this.supervisor2).subscribe();
            this.getZoneDetails();
            this.getSupervisor();
            const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                supervisor: this.supervisor,
                sId: this.zone[0].supervisorId
            };
            const dRef = this.matDialog.open(_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_6__["AddSupervisorComponent"], dialogConfig);
            dRef.afterClosed().subscribe(result => {
                if (result !== undefined) {
                    this.sid = String(Object.values(result)[2]);
                    this.sStatus = JSON.stringify(Object.values(result)[5]);
                    console.log(result, this.sid);
                    this.zoneService.updateZones(this.name, result).subscribe(response => {
                        this.notificationService.success('Zone updated successfully!!'),
                            this.getZoneDetails();
                        // tslint:disable-next-line: no-shadowed-variable
                        this.zoneService.getSupervisorById(this.sid).subscribe(res => {
                            this.supervisor2 = res.data;
                            this.supervisor2.userStatus = 'Allocated';
                            this.zoneService.updateSupervisorStatus(this.sid, this.supervisor2).subscribe();
                        });
                    }, error => {
                        this.notificationService.warn('Can\'t update ');
                    });
                }
            });
        });
    }
    getSupervisor() {
        this.zoneService.getSupervisor().subscribe(res => {
            this.supervisor = res.data;
            console.log(this.supervisor);
        });
    }
};
SupervisorDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
SupervisorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supervisor-details',
        template: __webpack_require__(/*! raw-loader!./supervisor-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/supervisor-details/supervisor-details.component.html"),
        styles: [__webpack_require__(/*! ./supervisor-details.component.css */ "./src/app/zones/supervisor-details/supervisor-details.component.css")]
    })
], SupervisorDetailsComponent);



/***/ }),

/***/ "./src/app/zones/update-zones/update-zones.component.css":
/*!***************************************************************!*\
  !*** ./src/app/zones/update-zones/update-zones.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn {\n  width: 16em; height: 60px;\n }\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvdXBkYXRlLXpvbmVzL3VwZGF0ZS16b25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXLEVBQUUsWUFBWTtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3pvbmVzL3VwZGF0ZS16b25lcy91cGRhdGUtem9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxNmVtOyBoZWlnaHQ6IDYwcHg7XG4gfVxuXG4uYnRuLWRpYWxvZy1jbG9zZXtcbiAgICB3aWR0aDogNDVweDtcbiAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateZonesComponent = class UpdateZonesComponent {
    constructor(dialogRef, fb, route, router, zoneService, data) {
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
    get capacity() {
        return this.zoneForm.get('capacity');
    }
    getErrorCapacity() {
        return this.capacity.hasError('pattern') ? 'Capacity should contain only numbers.' :
            '';
    }
    onClose() {
        // this.zoneForm.reset();
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(this.zoneForm.value);
        this.dialogRef.close(this.zoneForm.value);
    }
    ngOnInit() {
    }
};
UpdateZonesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UpdateZonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-zones',
        template: __webpack_require__(/*! raw-loader!./update-zones.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/update-zones/update-zones.component.html"),
        styles: [__webpack_require__(/*! ./update-zones.component.css */ "./src/app/zones/update-zones/update-zones.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UpdateZonesComponent);



/***/ }),

/***/ "./src/app/zones/vehicle-details/vehicle-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/zones/vehicle-details/vehicle-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicles {\n    margin-left: 240px;\n    padding-bottom: 2%;\n    font-weight: bold;\n}\n\nmat-icon {\n    font-size: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .vehicles {\n        margin-left: 40px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvdmVoaWNsZS1kZXRhaWxzL3ZlaGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC96b25lcy92ZWhpY2xlLWRldGFpbHMvdmVoaWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZXMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC52ZWhpY2xlcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-vehicle/add-vehicle.component */ "./src/app/zones/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");








let VehicleDetailsComponent = class VehicleDetailsComponent {
    constructor(vehicleService, zoneService, route, matDialog, notificationService) {
        this.vehicleService = vehicleService;
        this.zoneService = zoneService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.vehicle = [];
        this.vehicle2 = [];
    }
    ngOnInit() {
        this.buttonDisable = false;
        this.route.queryParams.subscribe(params => {
            this.count = params.count;
        });
        this.getZoneDetails();
        this.vDetails();
    }
    getZoneDetails() {
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
            this.zone = res.data;
            console.log(res);
            this.id = this.zone[0].id;
            this.capacity = this.zone[0].capacity;
            if ((this.count > this.capacity) || (this.zone[0].status === 'INACTIVE') || (this.zone[0].status === 'INMAINTAINANCE')
                || (this.zone[0].status === 'FULL')) {
                this.buttonDisable = true;
            }
        });
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            vehicle: this.vehicle2,
            zId: this.id
        };
        const dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.vehicleService.getVehicleByRegistrationNo(String(Object.values(result)[0])).subscribe(res => {
                    this.selectedVehicle = res.data;
                    this.selectedVehicle.zoneId = this.id;
                    console.log(this.selectedVehicle);
                    this.vehicleService.updateVehicle(String(Object.values(result)[0]), this.selectedVehicle).subscribe(response => {
                        this.notificationService.success('Vehicle added to zone successfully!!');
                    });
                    this.getZoneDetails();
                    this.vDetails();
                    console.log(this.vehicle);
                    this.zoneService.getZoneType(this.id, this.tid).subscribe(val => {
                        console.log(val);
                        if (val.data === null) {
                            console.log(res.count, { zoneId: this.id, typeId: this.tid, typeName: this.tname, count: 1 });
                            const reqBody = {
                                zoneId: this.id,
                                typeId: this.tid,
                                typeName: this.tname,
                                count: 1
                            };
                            this.zoneService.createNew(reqBody)
                                .subscribe();
                        }
                        else {
                            val.data.count = val.data.count + 1;
                            const reqBody = {
                                zoneId: this.id,
                                typeId: this.tid,
                                typeName: this.tname,
                                count: val.data.count
                            };
                            this.zoneService.updateZoneTypeCount(this.id, this.tid, reqBody).subscribe();
                        }
                    });
                });
                console.log(Object.values(result), JSON.stringify(Object.values(result)[0]));
            }
        });
    }
    vDetails() {
        this.vehicleService.getVehicles().subscribe(res => {
            if (res.count === 0) {
                this.displayCount = 0;
                console.log(res, 'https://www.doodadi.com/assets/images/data-not-found.svg');
            }
            else {
                res.data.filter(val => {
                    if ((val.zoneId === this.id)) {
                        this.displayCount = 1;
                        this.vehicle.push(val);
                    }
                    else {
                        this.displayCount = 0;
                    }
                });
                res.data.filter(val => {
                    if (((val.zoneId === null)) && ((val.status !== 'No_More_In_Use') && (val.status !== 'Stolen') && (val.status !== 'Busy') && (val.status !== 'Servicing'))) {
                        this.vehicle2.push(val);
                        this.tname = val.vehicleType.name;
                        this.tid = val.vehicleType.id;
                        console.log(this.tid);
                        console.log(this.tname);
                    }
                });
            }
        });
    }
};
VehicleDetailsComponent.ctorParameters = () => [
    { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
VehicleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-details',
        template: __webpack_require__(/*! raw-loader!./vehicle-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/vehicle-details/vehicle-details.component.html"),
        styles: [__webpack_require__(/*! ./vehicle-details.component.css */ "./src/app/zones/vehicle-details/vehicle-details.component.css")]
    })
], VehicleDetailsComponent);



/***/ }),

/***/ "./src/app/zones/zone-card/zone-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/zones/zone-card/zone-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n.zoneName {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1jYXJkL3pvbmUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC96b25lcy96b25lLWNhcmQvem9uZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uem9uZU5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");




let ZoneCardComponent = class ZoneCardComponent {
    constructor(router, vehicleService) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.vehicle = [];
        this.count = 0;
    }
    ngOnInit() {
        this.zoneNames = Object.values(this.zones)[1];
        this.city = Object.values(this.zones)[4];
        this.status = Object.values(this.zones)[15];
        this.locality = Object.values(this.zones)[8];
        this.capacity = Object.values(this.zones)[9];
        this.id = Object.values(this.zones)[0];
        this.getVehiclesDetails();
    }
    ok() {
        this.router.navigate(['zones/', this.zoneNames], { queryParams: { count: this.count } });
    }
    getColor(status) {
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
    }
    getVehiclesDetails() {
        this.vehicleService.getVehicles().subscribe(res => {
            res.data.filter(val => {
                if (val.zoneId === String(this.id)) {
                    this.count += 1;
                }
            });
        });
    }
};
ZoneCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] }
];
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



/***/ }),

/***/ "./src/app/zones/zone-details/zone-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/zones/zone-details/zone-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoneName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n\n\n.graph {\n    margin-top: 20px;\n    padding-left: 500px;\n    cursor: pointer;\n}\n\n\n\n.zone {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n    .zone {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n    .add-button {\n        padding-left: 300px;\n        padding-bottom: 2%; \n    }\n    .graph {\n        padding-left: 300px;;\n        padding-bottom: 50px; \n    }\n    .status {\n        margin-top: 20px;\n        padding-right: 60px;\n    }\n    .iconCapacity {\n        margin-left: 70%;\n        cursor: pointer;\n    }\n    mat-card-title {\n        font-size: 1.4em;\n    }\n}\n\n\n\n@media only screen and (min-width: 600px) {\n    .add-button {\n        padding-right: 450px;\n        padding-bottom: 2%; \n    }\n    \n}\n\n\n\nmat-icon {\n    font-size: 60px;\n}\n\n\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n\n\n.iconCapacity {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n\n\n.status {\n    margin-top: 20px;\n    padding-left: 60px;\n    font-weight: bold;\n    font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1kZXRhaWxzL3pvbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7Ozs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0Qjs7QUFFSjs7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvem9uZS1kZXRhaWxzL3pvbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvbmVOYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5cblxuLmdyYXBoIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uem9uZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnpvbmUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLnpvbmVOYW1lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlOyBcbiAgICB9XG4gICAgLmdyYXBoIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDs7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyBcbiAgICB9XG4gICAgLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5pY29uQ2FwYWNpdHkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7IFxuICAgIH1cbiAgICBcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbkNhcGFjaXR5IHtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0YXR1cyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-zones/update-zones.component */ "./src/app/zones/update-zones/update-zones.component.ts");
/* harmony import */ var src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/vehicles/vehicle.service */ "./src/app/vehicles/vehicle.service.ts");








let ZoneDetailsComponent = class ZoneDetailsComponent {
    constructor(router, zoneService, activatedRoute, route, notificationService, matDialog, vehicleService) {
        this.router = router;
        this.zoneService = zoneService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.vehicleService = vehicleService;
        this.count = 0;
        this.zoneStatus = [
            { value: 'INACTIVE', viewValue: 'INACTIVE' },
            { value: 'ACTIVE', viewValue: 'ACTIVE' },
            { value: 'INMAINTAINANCE', viewValue: 'INMAINTAINANCE' },
            { value: 'FULL', viewValue: 'FULL' },
        ];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.count = params.count;
        });
        this.getZoneDetails();
    }
    onChange(newValue) {
        console.log(this.zone[0], newValue);
        this.zone[0].status = newValue;
        this.zoneService.updateZones(this.route.snapshot.paramMap.get('name'), this.zone[0]).subscribe(response => this.notificationService.success('Zone updated successfully!!'), error => this.notificationService.warn('Can\'t update '));
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            capacity: this.zone[0].capacity,
        };
        const dRef = this.matDialog.open(_update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_6__["UpdateZonesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.zoneService.updateZones(this.name, result).subscribe(response => {
                    this.notificationService.success('Zone updated successfully!!'),
                        this.getZoneDetails();
                }, error => {
                    this.notificationService.warn('Can\'t update ');
                });
            }
        });
    }
    getZoneDetails() {
        this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
            this.zone = res.data;
            console.log(res);
            this.id = this.zone[0].id;
            this.name = this.zone[0].name;
            this.city = this.zone[0].city;
            this.country = this.zone[0].country;
            this.locality = this.zone[0].locality;
            this.creationTime = this.zone[0].createdAt;
            this.state = this.zone[0].state;
            this.pincode = this.zone[0].pincode;
            this.capacity = this.zone[0].capacity;
            this.status = this.zone[0].status;
            // this.count = this.getVehiclesDetails();
            console.log(this.count);
            if (this.count >= this.capacity) {
                this.zone[0].status = 'FULL';
                this.zoneService.updateZones(this.route.snapshot.paramMap.get('name'), this.zone[0]).subscribe(response => this.notificationService.success('Zone updated successfully!!'), error => this.notificationService.warn('Can\'t update '));
            }
        });
    }
    getColor(status) {
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
    }
};
ZoneDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_vehicles_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] }
];
ZoneDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-zone-details',
        template: __webpack_require__(/*! raw-loader!./zone-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/zones/zone-details/zone-details.component.html"),
        styles: [__webpack_require__(/*! ./zone-details.component.css */ "./src/app/zones/zone-details/zone-details.component.css")]
    })
], ZoneDetailsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _zones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones.component */ "./src/app/zones/zones.component.ts");
/* harmony import */ var _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone-details/zone-details.component */ "./src/app/zones/zone-details/zone-details.component.ts");





const routes = [{ path: '', component: _zones_component__WEBPACK_IMPORTED_MODULE_3__["ZonesComponent"] },
    { path: ':name', component: _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_4__["ZoneDetailsComponent"] },
];
let ZonesRoutingModule = class ZonesRoutingModule {
};
ZonesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ZonesRoutingModule);



/***/ }),

/***/ "./src/app/zones/zones.component.css":
/*!*******************************************!*\
  !*** ./src/app/zones/zones.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-zone-card {\n    \n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n    app-zone-card {\n        width: 75%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC96b25lcy96b25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hcHAtem9uZS1jYXJkIHtcbiAgICBcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBhcHAtem9uZS1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/zone.service */ "./src/app/zones/service/zone.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-zone/add-zone.component */ "./src/app/zones/add-zone/add-zone.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






let ZonesComponent = class ZonesComponent {
    constructor(zoneService, matDialog, notificationService) {
        this.zoneService = zoneService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
    }
    ngOnInit() {
        this.getZonesInfo();
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dRef = this.matDialog.open(_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_4__["AddZoneComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.zoneService.createZone(result)
                    .subscribe(response => {
                    this.message = response.message;
                    if (this.message === 'Zone name is already exist!!!') {
                        this.notificationService.warn('Zone name already exist!!!');
                    }
                    else if (this.message === 'Zone locality is already exist!!!') {
                        this.notificationService.warn('No location found!!');
                    }
                    else {
                        this.notificationService.success('Zone added successfully');
                    }
                    this.getZonesInfo();
                });
            }
        });
    }
    getZonesInfo() {
        return this.zoneService.getZones().subscribe(res => {
            if (res.count === undefined || res.count === 0) {
                this.displayCount = 0;
            }
            else {
                this.zones = res.data;
                this.displayCount = 1;
            }
        });
    }
};
ZonesComponent.ctorParameters = () => [
    { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _zones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones-routing.module */ "./src/app/zones/zones-routing.module.ts");
/* harmony import */ var _zones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zones.component */ "./src/app/zones/zones.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _zone_card_zone_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zone-card/zone-card.component */ "./src/app/zones/zone-card/zone-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zone-details/zone-details.component */ "./src/app/zones/zone-details/zone-details.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-zone/add-zone.component */ "./src/app/zones/add-zone/add-zone.component.ts");
/* harmony import */ var _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-zones/update-zones.component */ "./src/app/zones/update-zones/update-zones.component.ts");
/* harmony import */ var _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-supervisor/add-supervisor.component */ "./src/app/zones/add-supervisor/add-supervisor.component.ts");
/* harmony import */ var _supervisor_details_supervisor_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./supervisor-details/supervisor-details.component */ "./src/app/zones/supervisor-details/supervisor-details.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var _vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vehicle-details/vehicle-details.component */ "./src/app/zones/vehicle-details/vehicle-details.component.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/zones/add-vehicle/add-vehicle.component.ts");




















let ZonesModule = class ZonesModule {
};
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
        ],
        entryComponents: [_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__["AddZoneComponent"], _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__["UpdateZonesComponent"], _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["AddSupervisorComponent"], _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_19__["AddVehicleComponent"]]
    })
], ZonesModule);



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
const environment = {
    production: false,
    baseUrl: 'http://172.23.234.83:8091/',
    userService: 'user-service',
    userBaseApi: '/api/v1/users',
    baseUrl1: 'http://localhost:8093',
    zoneService: 'zone-service',
    zoneBaseApi: '/api/v1/zones',
    baseUrl2: 'http://localhost:8093',
    campaignService: 'campaign-service',
    campaignBaseApi: '/api/v1/campaigns',
    vehicleService: 'vehicle-service',
    vehicleBaseApi: '/api/v1/vehicles',
    typeBaseApi: '/api/v1/types',
    fuelBaseApi: '/api/v1/fuel',
    baseUrl3: 'http://172.23.234.75:8094/',
    bookingService: 'bookingservice',
    configBaseApi: 'api/v1/config'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pooja/umove/umove-admin-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map