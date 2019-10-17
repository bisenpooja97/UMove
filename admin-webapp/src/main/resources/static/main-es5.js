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

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\" class=\"footer\">UMOVE &copy; 2019</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navigation/navigation.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navigation/navigation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item href=\"#\">Reports</a>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item routerLink=\"/users\">Users</a>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item routerLink=\"/zones\">Zones</a>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item routerLink=\"/vehicles\">Vehicles</a>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item routerLink=\"/types\">Vehicle types</a>\n      <a *ngIf=\"loginService.isUserLoggedIn()\" mat-list-item routerLink=\"/logout\">Logout</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>umove-admin-ui</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************/
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

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n          <mat-icon>clear</mat-icon>\n      </button>\n    </mat-toolbar>\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Types</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Type Name</mat-label>\n                <input matInput #input placeholder=\"Type Name\" formControlName=\"name\" required>\n\n                <mat-error *ngIf=\"rName.invalid\">\n\n                    {{getErrorType()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Km Per Litre</mat-label>\n                <input matInput #input placeholder=\"Km per litre\" formControlName=\"kilometer\" required>\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>CC</mat-label>\n                <input matInput #input placeholder=\"CC\" formControlName=\"vehiclecc\" required>\n                <!-- <mat-error *ngIf=\"Rcostkm.invalid\">\n                        {{getErrorCostkm()}}\n\n                    </mat-error> -->\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Category</mat-label>\n                <!-- <input matInput #input placeholder=\"Placeholder\" formControlName=\"status\" required> -->\n                <select matNativeControl formControlName=\"category\">\n        <option value=\"Sports\">Sports</option>\n        <option value=\"Cruiser\">Cruiser</option>\n        <option value=\"Touring\">Touring</option>\n        <option value=\"Standard\">Standard</option>\n        <option value=\"Dual_Purpose\">Dual Purpose</option>\n        <option value=\"Dirt_Bikes\">Dirt Bikes</option>\n      </select>\n            </mat-form-field>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost Time</mat-label>\n                <input matInput #input placeholder=\"Cost Time\" formControlName=\"costtime\" required>\n\n                <mat-error *ngIf=\"Rcosttime.invalid\">\n\n                    {{getErrorCosttime()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n            <input name=\"file\" type=\"file\" class=\"ng-hide\" (change)=\"onFileChanged($event)\" #fileInput>\n\n\n\n\n            <button mat-raised-button class=\"btn\">\n          Submit\n        </button>\n\n\n        </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/type-deatils/type-deatils.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/type-deatils/type-deatils.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10%\" fxLayoutGap.lt-md=\"0px\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{name}}\n\n        </h1>\n    </div>\n\n\n\n    <!--  -->\n\n    <mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <mat-card-title fxLayoutAlign=\"start\">{{category}}</mat-card-title>\n        <br><br>\n        <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-card-title fxLayoutAlign=\"center center\">Vehicle cc: {{cc}}</mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\">Cost/km: {{costkm}}</mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\">cost/min: {{costtime}}\n                    <span>\n                    <i class=\"material-icons iconCapacity\" (click)=\"update()\" >\n                        create\n                    </i>\n                </span>\n\n                </mat-card-title>\n                <mat-card-title fxLayoutAlign=\"center center\">kilometers/lt: {{kilometer}}</mat-card-title>\n\n            </div>\n\n        </div>\n\n    </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/types.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/types.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Vehicle Types\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20%>\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n<!-- <app-search-vehicleType></app-search-vehicleType> -->\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-vehicle-type-card *ngFor=\"let type of vehicleTypes | paginate: { itemsPerPage: 9, currentPage: p}  | filter:term\" [vehicleTypes]=\"type\"></app-vehicle-type-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n          add\n      </i>\n    </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/update-types/update-types.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/update-types/update-types.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"typeForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost/min </mat-label>\n                <input matInput maxlength=\"6\" #input placeholder=\"cost/min\" formControlName=\"costtime\" [(ngModel)]=\"costtime\" required>\n\n            </mat-form-field>\n        </div>\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!typeForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/types/vehicle-type-card/vehicle-type-card.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/types/vehicle-type-card/vehicle-type-card.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"typeName\">{{name}}</mat-card-title>\n    <mat-card-content fxLayoutAlign=\"center center\">Cost/km : {{costkm}}</mat-card-content>\n    <mat-card-content fxLayoutAlign=\"center center\">Cost/min :{{costtime}}</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/add-vehicle/add-vehicle.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Vehicle</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Registration No.</mat-label>\n                <input matInput #input placeholder=\"Registration No\" formControlName=\"registrationNo\" required>\n\n                <mat-error *ngIf=\"rNum.invalid\">\n\n                    {{getErrorRegistrationNo()}}\n                </mat-error>\n            </mat-form-field>\n\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Type</mat-label>\n                <mat-select formControlName=\"type\">\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                        {{type.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" required>\n\n                <mat-error *ngIf=\"RinsuranceNo.invalid\">\n\n                    {{getErrorInsuranceNo()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n          <mat-label>Status</mat-label>\n          <input matInput #input placeholder=\"Placeholder\" formControlName=\"status\" required>\n      </mat-form-field> -->\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n          <mat-label>Last Service date</mat-label>\n          <input matInput #input placeholder=\"Placeholder\"  required>\n      </mat-form-field> -->\n            <!-- <mat-label>Last Service date</mat-label>\n      <mat-form-field>\n          <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" placeholder=\"Last Service Date\" #input>\n          <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n          <mat-datepicker #lastServiceDate></mat-datepicker>\n      </mat-form-field> -->\n\n            <mat-label>Vehicle purchase date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"vehiclePurchased\" formControlName=\"vehiclePurchased\" [max]=\"todaydate\" placeholder=\"Vehicle Purchased Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"vehiclePurchased\"></mat-datepicker-toggle>\n                <mat-datepicker #vehiclePurchased></mat-datepicker>\n            </mat-form-field>\n\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n        <input matInput #input placeholder=\"Placeholder\" formControlName=\"vehiclePurchased\" required>\n    </mat-form-field> -->\n\n\n            <button mat-raised-button class=\"btn\">\n      Submit\n    </button>\n\n\n        </div>\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/update-vehicles/update-vehicles.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" [(ngModel)]=\"insuranceNo\" required>\n\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-label>Vehicle Last Service date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" placeholder=\"Vehicle Last Service  Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n                <mat-datepicker #lastServiceDate></mat-datepicker>\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!vehicleForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-card/vehicle-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-card/vehicle-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n    <mat-card-content fxLayoutAlign=\"end\" [ngStyle]=\"{'color':getColor(status)}\">{{status}}</mat-card-content>\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"typeName\">{{registrationNo}}</mat-card-title>\n    <mat-card-content fxLayoutAlign=\"center center\">Vehicle type: {{type}}</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10%\" fxLayoutGap.lt-md=\"0px\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{registrationNo}}\n\n        </h1>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n            <mat-label>Vehicle Status</mat-label>\n            <mat-select [(ngModel)]=\"status1\" (ngModelChange)=\"onChange($event)\">\n                <mat-option *ngFor=\"let z of vehicleStatus\" [value]=\"z.value\">\n                    {{z.viewValue}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</div>\n\n<!--  -->\n\n<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n    <mat-card-title fxLayoutAlign=\"start\">{{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n    <br><br>\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n\n\n\n\n            <mat-card-title fxLayoutAlign=\"center center\">insurance Number: {{insuranceNo}}\n\n                <span>\n                        <i class=\"material-icons iconCapacity\"  (click)=\"update()\"  >\n                            create\n                        </i>\n                  </span>\n\n\n            </mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">last Service Date: {{lastServiceDate| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Vehicle Purchase Date: {{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">name: {{name}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">category: {{category}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">costkm: {{costkm}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">cost-Time: {{costtime}}</mat-card-title>\n\n        </div>\n\n    </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicles.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Vehicle\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20%>\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n\n<!-- <app-search-vehicleType></app-search-vehicleType> -->\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 9, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n          add\n      </i>\n    </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-supervisor/add-supervisor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-supervisor/add-supervisor.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n                <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n        \n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label>Supervisor Name</mat-label>\n                                <input #input aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" [(ngModel)]=\"sname2\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedclient($event)\" [displayWith]=\"getOptionText\">\n                                    <mat-option *ngFor=\"let option of options ; let i = index\" [value]=\"option\">\n                                        {{option.name}}\n                                    </mat-option>\n                                </mat-autocomplete>\n        \n                            </mat-form-field>\n            </div>\n            </div>\n        \n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                <button mat-raised-button class=\"btn\"  color=\"primary\">\n                    Submit\n                </button>\n        \n            </div>\n        \n        \n        \n        </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/add-zone/add-zone.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/add-zone/add-zone.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Zone Locality</mat-label>\n                <input matInput #input placeholder=\"Zone Locality\" formControlName=\"locality\" required>\n                <!-- <mat-error *ngIf=\"locality.invalid\">\n                                        {{getErrorZoneLocality()}}\n                                    </mat-error> -->\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlex>\n\n                <mat-label>Zone Name</mat-label>\n                <input matInput #input placeholder=\"Zone Name\" formControlName=\"name\" required>\n\n                <!-- <mat-error *ngIf=\"zone.invalid\">\n                \n                                            {{getErrorZoneName()}}\n                                        </mat-error> -->\n\n            </mat-form-field>\n\n        </div>\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n\n            <div class=\"button\">\n                \n                \n                    <input type=\"button\" value=\"Get Locations\" (click)=\"getLocation()\" class=\"location\">\n\n            </div>\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Capacity</mat-label>\n                <input matInput #input placeholder=\"Capacity\" formControlName=\"capacity\" required>\n                <!-- <mat-error *ngIf=\"capacity.invalid\">\n                                    \n                                                                {{getErrorCapacity()}}\n                                                            </mat-error> -->\n            </mat-form-field>\n\n\n        </div>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!zoneForm.valid' color=\"primary\">\n            Submit\n        </button>\n\n    </div>\n\n\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/supervisor-details/supervisor-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/supervisor-details/supervisor-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\">\n<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <mat-card-title fxLayoutAlign=\"start\" class=\"zoneName\">Supervisor\n                        <button mat-button class=\"icon\" disabled=\"{{buttonDisabled2}}\"  (click)=\"updateSupervisor()\">\n                                <mat-icon>\n                                        create\n                                </mat-icon>\n                        </button>\n                </mat-card-title>\n\n                <br><br>\n\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">    \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">Name: {{sName}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Contact No: {{sNumber}}</mat-card-title>\n            \n               \n    </div>  \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">Email: {{sEmail}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Shift: Daily</mat-card-title>\n            \n    </div> \n    </div>  \n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n            <button mat-fab color=\"primary\" disabled=\"{{buttonDisabled}}\" (click)=\"addSupervisor()\">\n                <i class=\"material-icons\">\n                    add\n                </i>\n            </button>\n        </div>\n</mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/update-zones/update-zones.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/update-zones/update-zones.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"zoneForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n                <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n        \n                        <mat-form-field appearance=\"outline\" fxFlex>\n                                <mat-label>Zone Capacity</mat-label>\n                                <input matInput maxlength=\"6\" #input placeholder=\"Zone Capacity\" formControlName=\"capacity\" [(ngModel)]=\"capacity\" required>\n        \n                            </mat-form-field>\n                    </div>\n                    </div>\n                    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                            <button mat-raised-button class=\"btn\" [disabled]='!zoneForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n                    \n                        </div>\n                    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-card/zone-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-card/zone-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n        <mat-card-content fxLayoutAlign=\"end\" [ngStyle]=\"{'color':getColor(status)}\" class=\"status\">{{status}}</mat-card-content>\n        <mat-card-title fxLayoutAlign=\"center center\" class=\"zoneName\">{{zoneNames}}</mat-card-title>\n        <mat-card-content fxLayoutAlign=\"center center\">{{city}}</mat-card-content>\n    </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zone-details/zone-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zone-details/zone-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\"> \n        <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"zoneName\">\n                {{name}}\n                \n        </h1>\n        </div>\n\n<div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-icon class=\"graph\">\n                assessment\n        </mat-icon>\n</div>\n\n<div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n                <mat-label>Zone Status</mat-label>\n                <mat-select [(ngModel)]=\"status\" (ngModelChange)=\"onChange($event)\">\n                    <mat-option *ngFor=\"let z of zoneStatus\" [value]=\"z.value\" [ngStyle]=\"{'color':getColor(z.viewValue)}\">\n                        {{z.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n</div> \n</div>\n\n<div fxLayout=\"column\">\n<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <mat-card-title fxLayoutAlign=\"start\">{{creationTime | date:\"dd LLLL yyyy\"}}</mat-card-title>\n        <br><br>   \n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\"\n        class=\"form\" fxLayoutAlign=\"center center\">    \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">City: {{city}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Country: {{country}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Locality: {{locality}}</mat-card-title> \n               \n    </div>  \n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n            <mat-card-title fxLayoutAlign=\"center center\">State: {{state}}</mat-card-title> \n            <mat-card-title fxLayoutAlign=\"center center\">Pincode: {{pincode}}</mat-card-title>\n                  \n            <mat-card-title fxLayoutAlign=\"center center\">Capacity: {{capacity}}  \n                    <span>\n                        <i class=\"material-icons iconCapacity\" (click)=\"update()\" >\n                            create\n                        </i>\n                    </span> \n               \n            </mat-card-title> \n    </div> \n    </div>  \n      \n</mat-card>\n\n<app-supervisor-details></app-supervisor-details>\n\n<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"zoneName\">\n        Vehicles\n</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zones/zones.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zones/zones.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Zones\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20% class=\"bar\">\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-zone-card *ngFor=\"let zone of zones | paginate: { itemsPerPage: 9, currentPage: p } | filter:term\"\n        [zones]=\"zone\">\n    </app-zone-card>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\">\n        <i class=\"material-icons\">\n            add\n        </i>\n    </button>\n</div>"

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
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/service/auth-guard.service */ "./src/app/authentication/service/auth-guard.service.ts");





// tslint:disable-next-line: max-line-length
var routes = [{ path: 'users', loadChildren: function () { return Promise.all(/*! import() | users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(function (m) { return m.UsersModule; }); } },
    { path: 'documents', loadChildren: function () { return Promise.all(/*! import() | documents-documents-module */[__webpack_require__.e("common"), __webpack_require__.e("documents-documents-module")]).then(__webpack_require__.bind(null, /*! ./documents/documents.module */ "./src/app/documents/documents.module.ts")).then(function (m) { return m.DocumentsModule; }); } },
    { path: 'zones', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./zones/zones.module */ "./src/app/zones/zones.module.ts")).then(function (m) { return m.ZonesModule; }); } },
    { path: '', loadChildren: function () { return __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(function (m) { return m.AuthenticationModule; }); } },
    { path: 'types', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./types/types.module */ "./src/app/types/types.module.ts")).then(function (m) { return m.TypesModule; }); } },
    { path: 'vehicles', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts")).then(function (m) { return m.VehiclesModule; }); } },
    { path: '**', component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }];
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
        this.title = 'umove-admin-ui';
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
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _zones_zones_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zones/zones.module */ "./src/app/zones/zones.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts");
/* harmony import */ var _types_types_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./types/types.module */ "./src/app/types/types.module.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _zones_zones_module__WEBPACK_IMPORTED_MODULE_16__["ZonesModule"],
                _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_20__["VehiclesModule"],
                _types_types_module__WEBPACK_IMPORTED_MODULE_21__["TypesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"]],
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

module.exports = ".footer {\n    color: white;\n    position: relative;\n    clear: both;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgXG59Il19 */"

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

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/service/authentication.service */ "./src/app/authentication/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver, loginService, router, activatedRoute, route) {
        this.breakpointObserver = breakpointObserver;
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
        { type: src_app_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
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

/***/ "./src/app/core/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    padding-top: 14%;\n    padding-bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gICAgcGFkZGluZy10b3A6IDE0JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/core/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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

/***/ "./src/app/types/add-vehicle-type/add-vehicle-type.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/types/add-vehicle-type/add-vehicle-type.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL2FkZC12ZWhpY2xlLXR5cGUvYWRkLXZlaGljbGUtdHlwZS5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var AddVehicleTypeComponent = /** @class */ (function () {
    function AddVehicleTypeComponent(dialogRef, fb, route, router, typeService, http, snackBar) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.typeService = typeService;
        this.http = http;
        this.snackBar = snackBar;
        this.datas = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].typeBaseApi;
        this.typeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            kilometer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            costtime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            vehiclecc: [''],
            category: ['']
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
            return this.typeForm.get('cc');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rkm", {
        get: function () {
            return this.typeForm.get('km');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rcategory", {
        get: function () {
            return this.typeForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleTypeComponent.prototype, "Rcosttime", {
        get: function () {
            return this.typeForm.get('costtime');
        },
        enumerable: true,
        configurable: true
    });
    AddVehicleTypeComponent.prototype.getErrorType = function () {
        return this.rName.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
            '';
    };
    // getErrorCostkm() {
    //   return  this.Rcostkm.hasError('pattern') ? 'Invalid Cost' :
    //       '';
    // }
    AddVehicleTypeComponent.prototype.getErrorCosttime = function () {
        return this.Rcosttime.hasError('pattern') ? 'Invalid Time' :
            '';
    };
    AddVehicleTypeComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddVehicleTypeComponent.prototype.onUpload = function () {
        console.log('this is upload call');
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
        //  this.http; is; the; injected; HttpClient;
        this.http.post(this.baseUrl + '/uploadFile?id=12', uploadData)
            .subscribe(function (event) {
            console.log('response', event); // handle event here
        });
    };
    AddVehicleTypeComponent.prototype.onClose = function () {
        this.typeForm.reset();
        this.dialogRef.close();
    };
    AddVehicleTypeComponent.prototype.onSubmit = function () {
        this.onUpload();
        console.log(this.typeForm.value);
        console.log(this.typeForm.value, 'child');
        this.dialogRef.close(this.typeForm.value);
        // onSubmit() {
        //   // console.log(this.location);
        //   // this.zoneForm.value.lat = this.location.position.lat;
        //   // this.zoneForm.value.lon = this.location.position.lon;
        //   // this.zoneForm.value.country = this.location.address.country;
        //   // this.zoneForm.value.city = this.location.address.countrySecondarySubdivision;
        //   // this.zoneForm.value.state = this.location.address.countrySubdivision;
        //   console.log(this.typeForm.value, 'child');
        //   this.dialogRef.close(this.typeForm.value);
        // }
        // this.router.navigateByUrl('/welcome');
    };
    AddVehicleTypeComponent.prototype.ngOnInit = function () {
    };
    AddVehicleTypeComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    AddVehicleTypeComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
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

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.my-card {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 500px;\n    width: 50%;\n    background-color: whitesmoke;\n}\n\n@media only screen and (max-width: 600px) {\n    .my-card {\n        margin-left: 150px;\n        height: 200px;\n        width: 55%;\n    }\n}\n\n.add-button {\n    padding-right: 450px;\n    padding-bottom: 2%;\n}\n\nmat-icon {\n    font-size: 60px;\n}\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n.status {\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZS1kZWF0aWxzL3R5cGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdHlwZXMvdHlwZS1kZWF0aWxzL3R5cGUtZGVhdGlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGVOYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4uZ3JhcGgge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4NTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5teS1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgIH1cbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

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






var TypeDeatilsComponent = /** @class */ (function () {
    function TypeDeatilsComponent(router, vehicleTypeService, activatedRoute, route, snackbar, matDialog) {
        this.router = router;
        this.vehicleTypeService = vehicleTypeService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.snackbar = snackbar;
        this.matDialog = matDialog;
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
            _this.cc = _this.type.vehiclecc;
            _this.category = _this.type.category;
            _this.costkm = _this.type.costkm;
            _this.costtime = _this.type.costtime;
            _this.kilometer = _this.type.kilometer;
        });
    };
    TypeDeatilsComponent.prototype.onEdit = function () {
    };
    TypeDeatilsComponent.prototype.openSnackbar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    TypeDeatilsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '20%';
        dialogConfig.data = {
            costtime: this.type.costtime,
        };
        var dRef = this.matDialog.open(_update_types_update_types_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTypesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            console.log('Back to parent', result);
            _this.vehicleTypeService.updateVehicleType(_this.name, result).subscribe(function (response) {
                _this.openSnackbar('Cost updated succesffuly', 'ok');
                _this.getVehicleTypeDetails();
            }, function (error) {
                console.log('not updated');
            });
        });
    };
    TypeDeatilsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
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

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-vehicle-type-card {\n    width: 25%;\n    margin-left: 50px;\n}\n\n.card {\n    margin-left: 18%;\n}\n\n.add-button {\n    padding-right: 200px;\n    padding-bottom: 2%;\n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n    app-vehicle-type-card {\n        width: 75%;\n    }\n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n    .header {\n        margin-left: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbn1cblxuYXBwLXZlaGljbGUtdHlwZS1jYXJkIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuLnNlYXJjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfVxuICAgIGFwcC12ZWhpY2xlLXR5cGUtY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICAgIC5zZWFyY2gge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn0iXX0= */"

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





var TypesComponent = /** @class */ (function () {
    function TypesComponent(typeService, matDialog, snackBar) {
        this.typeService = typeService;
        this.matDialog = matDialog;
        this.snackBar = snackBar;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    TypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeService.getType().subscribe(function (res) {
            _this.vehicleTypes = res.data;
            console.log(res, 'parent');
        });
        return this.typeService.getType().subscribe(function (res) { return _this.dataSource.data = res.data; }, function (length) { return _this.dataSource.data.length = length; });
    };
    TypesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TypesComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
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
                        _this.openSnackbar('Type already exists', 'ok');
                    }
                    else {
                        _this.openSnackbar('Type added succesfully', 'ok');
                    }
                    _this.typeService.getType().subscribe(function (res) {
                        _this.vehicleTypes = res.data;
                    });
                });
            }
        });
    };
    TypesComponent.ctorParameters = function () { return [
        { type: _vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], TypesComponent.prototype, "paginator", void 0);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3VwZGF0ZS10eXBlcy91cGRhdGUtdHlwZXMuY29tcG9uZW50LmNzcyJ9 */"

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
            costtime: ['']
        });
        this.costtime = data.costtime;
    }
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

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 250px;\n    background-color: antiquewhite;\n    cursor: pointer;\n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.typeName {\n    padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZXMvdmVoaWNsZS10eXBlLWNhcmQvdmVoaWNsZS10eXBlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFHSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90eXBlcy92ZWhpY2xlLXR5cGUtY2FyZC92ZWhpY2xlLXR5cGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktY2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50eXBlTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn0iXX0= */"

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



var VehicleTypeCardComponent = /** @class */ (function () {
    function VehicleTypeCardComponent(router) {
        this.router = router;
    }
    VehicleTypeCardComponent.prototype.ngOnInit = function () {
        this.name = Object.values(this.vehicleTypes)[1];
        this.costkm = Object.values(this.vehicleTypes)[2];
        this.costtime = Object.values(this.vehicleTypes)[3];
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].typeBaseApi;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

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
            registrationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            insuranceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            type: [''],
            status: 'Free',
            // lastServiceDate: [''],
            vehiclePurchased: ['']
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
    Object.defineProperty(AddVehicleComponent.prototype, "type", {
        get: function () {
            return this.vehicleForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddVehicleComponent.prototype, "vehiclePurchased", {
        // get lastServiceDate() {
        //   return this.vehicleForm.get('lastServiceDate');
        // }
        get: function () {
            return this.vehicleForm.get('vehiclePurchased');
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
    AddVehicleComponent.prototype.onClose = function () {
        this.vehicleForm.reset();
        this.dialogRef.close();
    };
    AddVehicleComponent.prototype.getTypeList = function () {
        var _this = this;
        this.typeService.getType().subscribe(function (res) {
            _this.types = res.data;
            console.log('types list: ', _this.types);
        });
    };
    // onSubmit() {
    //   console.log(this.vehicleForm.value);
    //   this.vehicleService.createVehicles(this.vehicleForm.value)
    //     .subscribe(response => {
    //       console.log('repsonse: ', response);
    //       this.message = response.message;
    //       console.log('ddd', this.message);
    //       if (this.message === 'Vehicle already exists') {
    //           this.openSnackbar('Vehicle already exists', 'ok');
    //         } else {
    //           this.openSnackbar('Vehicle added succesfully', 'ok');
    //         }
    //      // this.router.navigate(['/vehicles']);
    //         // // this.openSnackbar(this.message,'ok');
    //       });
    //   // this.router.navigateByUrl('/welcome');
    // }
    AddVehicleComponent.prototype.onSubmit = function () {
        console.log(this.vehicleForm.value);
        console.log(this.vehicleForm.value, 'child');
        this.dialogRef.close(this.vehicleForm.value);
    };
    AddVehicleComponent.prototype.ngOnInit = function () {
        this.getTypeList();
    };
    AddVehicleComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3VwZGF0ZS12ZWhpY2xlcy91cGRhdGUtdmVoaWNsZXMuY29tcG9uZW50LmNzcyJ9 */"

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
        this.vehicleForm = this.fb.group({
            lastServiceDate: [''],
            insuranceNo: ['']
        });
        this.lastServiceDate = data.lastServiceDate;
        this.insuranceNo = data.insuranceNo;
    }
    UpdateVehiclesComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateVehiclesComponent.prototype.onSubmit = function () {
        console.log(this.vehicleForm.value);
        this.dialogRef.close(this.vehicleForm.value);
    };
    UpdateVehiclesComponent.prototype.ngOnInit = function () {
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

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 250px;\n    background-color: antiquewhite;\n    cursor: pointer;\n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.typeName {\n    padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1jYXJkL3ZlaGljbGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUdJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtY2FyZC92ZWhpY2xlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15LWNhcmQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4udHlwZU5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59Il19 */"

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
    function VehicleCardComponent(router) {
        this.router = router;
    }
    VehicleCardComponent.prototype.ngOnInit = function () {
        this.registrationNo = this.vehicle.registrationNo;
        this.status = this.vehicle.status;
        this.type = this.vehicle.type.name;
        this.category = this.vehicle.type.category;
        console.log(this.vehicle.type.name);
    };
    VehicleCardComponent.prototype.ok = function () {
        console.log('hi');
        this.router.navigate(['vehicles/', this.registrationNo]);
    };
    VehicleCardComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'Busy':
                return 'green';
            case 'Free':
                return 'black';
            case 'Servicing':
                return 'red';
            case 'No_More_In_Use':
                return 'gray';
            case 'Stolen':
                return 'gray';
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

module.exports = ".vehicleName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n.graph {\n    margin-top: 20px;\n    padding-left: 850px;\n    cursor: pointer;\n}\n\n.my-card {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 600px;\n    width: 50%;\n    background-color: whitesmoke;\n}\n\n@media only screen and (max-width: 600px) {\n    .my-card {\n        margin-left: 150px;\n        height: 300px;\n        width: 55%;\n    }\n}\n\n.add-button {\n    padding-right: 450px;\n    padding-bottom: 2%;\n}\n\nmat-icon {\n    font-size: 60px;\n}\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n.status {\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1kZWF0aWxzL3ZlaGljbGUtZGVhdGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZS1kZWF0aWxzL3ZlaGljbGUtZGVhdGlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGVOYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4uZ3JhcGgge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4NTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5teS1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgIH1cbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

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






var VehicleDeatilsComponent = /** @class */ (function () {
    function VehicleDeatilsComponent(router, vehicleService, activatedRoute, route, snackbar, matDialog) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.snackbar = snackbar;
        this.matDialog = matDialog;
        this.vehicleStatus = [
            { value: 'Busy', viewValue: 'BUSY' },
            { value: 'Free', viewValue: 'FREE' },
            { value: 'Servicing', viewValue: 'SERVICING' },
            { value: 'Stolen', viewValue: 'STOLEN' },
            { value: 'No_More_In_Use', viewValue: 'No More In Use' }
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
            _this.name = _this.vehicle.type.name;
            _this.lastServiceDate = _this.vehicle.lastServiceDate;
            _this.vehiclePurchased = _this.vehicle.vehiclePurchased;
            _this.insuranceNo = _this.vehicle.insuranceNo;
            _this.zoneId = _this.vehicle.zoneid;
            _this.category = _this.vehicle.type.category;
            console.log(_this.category);
            _this.cc = _this.vehicle.type.vehiclecc;
            _this.costkm = _this.vehicle.type.costkm;
            _this.costtime = _this.vehicle.type.costtime;
            _this.status1 = _this.vehicle.status;
        });
    };
    VehicleDeatilsComponent.prototype.onEdit = function () {
    };
    VehicleDeatilsComponent.prototype.onChange = function (newValue) {
        console.log(this.vehicle, newValue);
        this.vehicle.status = newValue;
        this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe();
    };
    VehicleDeatilsComponent.prototype.openSnackbar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    VehicleDeatilsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '20%';
        dialogConfig.data = {
            insuranceNo: this.vehicle.insuranceNo,
            lastServiceDate: this.vehicle.lastServiceDate,
        };
        var dRef = this.matDialog.open(_update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__["UpdateVehiclesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            console.log('Back to parent', result);
            _this.vehicleService.updateVehicle(_this.registrationNo, result).subscribe(function (response) {
                _this.openSnackbar('Vehicle details updated succesffuly', 'ok');
                _this.getVehicleDetails();
            }, function (error) {
                _this.openSnackbar('not updated', 'ok');
            });
        });
    };
    VehicleDeatilsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vehicleBaseApi;
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

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-vehicle-card {\n    width: 25%;\n    margin-left: 50px;\n}\n\n.card {\n    margin-left: 18%;\n}\n\n.add-button {\n    padding-right: 200px;\n    padding-bottom: 2%;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n    app-vehicle-card {\n        width: 75%;\n    }\n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n    .header {\n        margin-left: 50px;\n    }\n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbn1cblxuYXBwLXZlaGljbGUtY2FyZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfVxuICAgIGFwcC12ZWhpY2xlLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgICAuc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB9XG59XG5cbi5zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSJdfQ== */"

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





var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(vehicleService, matDialog, snackBar) {
        this.vehicleService = vehicleService;
        this.matDialog = matDialog;
        this.snackBar = snackBar;
        this.p = 1;
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getVehicles().subscribe(function (res) {
            _this.vehicle = res.data;
            console.log(res, 'parent');
        });
    };
    VehiclesComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    VehiclesComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        var dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.vehicleService.createVehicles(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    console.log(_this.message);
                    if (_this.message === 'Vehicle already exists') {
                        _this.openSnackbar('Vehicle already exists', 'ok');
                    }
                    else {
                        _this.openSnackbar('Vehicle added succesfully', 'ok');
                    }
                    _this.vehicleService.getVehicles().subscribe(function (res) {
                        _this.vehicle = res.data;
                    });
                });
            }
        });
    };
    VehiclesComponent.ctorParameters = function () { return [
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], VehiclesComponent.prototype, "paginator", void 0);
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

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n    .btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n    mat-toolbar {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXN1cGVydmlzb3IvYWRkLXN1cGVydmlzb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztJQUVFO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztJQUVOO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvYWRkLXN1cGVydmlzb3IvYWRkLXN1cGVydmlzb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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

/***/ "./src/app/zones/add-zone/add-zone.component.css":
/*!*******************************************************!*\
  !*** ./src/app/zones/add-zone/add-zone.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.button {\n    padding-bottom: 21.5px;\n}\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n.location {\n  width: 16em; height: 60px;\n}\n\n@media only screen and (max-width: 600px) {\n  .location {\n    width: 8em;\n  }\n}\n\n.col {\n    width: 50%;\n  }\n\nsnack-bar-container.success {\n    background-color: #5cb85c;\n    color : #fff;\n  }\n\nsnack-bar-container.warn {\n    background-color: #f99157;\n    color : #fff;\n  }\n\nsnack-bar-container.notification simple-snack-bar{\n    font-size: 18px !important;\n    font-weight: bold;\n  }\n\n \n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFHQTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6Qjs7QUFFTjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVcsRUFBRSxZQUFZO0dBQzFCOztBQUVIO0VBQ0UsV0FBVyxFQUFFLFlBQVk7QUFDM0I7O0FBR0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNHO0lBQ0MsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBR0E7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvYWRkLXpvbmUvYWRkLXpvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiBcbiAgICAuYnRuLWRpYWxvZy1jbG9zZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIxLjVweDtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgIH1cblxuLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2NhdGlvbiB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxufVxuICAgLmNvbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIHNuYWNrLWJhci1jb250YWluZXIuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICBjb2xvciA6ICNmZmY7XG4gIH1cblxuICBzbmFjay1iYXItY29udGFpbmVyLndhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTkxNTc7XG4gICAgY29sb3IgOiAjZmZmO1xuICB9XG5cblxuICBzbmFjay1iYXItY29udGFpbmVyLm5vdGlmaWNhdGlvbiBzaW1wbGUtc25hY2stYmFye1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiBcblxuICAiXX0= */"

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
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-z]+')]],
            locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-z0-9\- ]+')]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-z]+')]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-z]+')]],
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl1 + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zoneBaseApi;
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
        return this.httpClient.
            get(this.baseUrl + '/loc/' + locality);
    };
    ZoneService.prototype.updateZones = function (name, zone) {
        console.log(zone);
        return this.httpClient.patch(this.baseUrl + '/' + name, zone);
    };
    ZoneService.prototype.getSupervisor = function () {
        return this.httpClient.get('http://172.23.234.83:8091/api/v1/users?role=Supervisor&status=Unallocated');
    };
    ZoneService.prototype.getSupervisorById = function (id) {
        return this.httpClient.get('http://172.23.234.83:8091/api/v1/users/' + id);
    };
    ZoneService.prototype.updateSupervisorStatus = function (id, supervisor) {
        return this.httpClient.patch('http://172.23.234.83:8091/api/v1/users/' + id, supervisor);
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

module.exports = ".my-card {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n    background-color: whitesmoke;\n}\n\n.zoneName {\n    font-weight: bold;\n    font-size: 1.5em;\n}\n\n@media only screen and (max-width: 600px) {\n    .my-card {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n    .add-button {\n        padding-left: 250px;\n        margin-top: -18%;\n    }\n    .icon {\n        margin-left: 40%;\n    }\n\n    \n}\n\n@media only screen and (min-width: 600px) {\n    .icon {\n        margin-left: 80%;\n        background-color:transparent;\n        }   \n        \n        .mat-button-focus-overlay {\n            background-color:transparent;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvc3VwZXJ2aXNvci1kZXRhaWxzL3N1cGVydmlzb3ItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7OztBQUdKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCOztRQUVBO1lBQ0ksNEJBQTRCO1FBQ2hDO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC96b25lcy9zdXBlcnZpc29yLWRldGFpbHMvc3VwZXJ2aXNvci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi56b25lTmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5teS1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC56b25lTmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xOCU7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICB9XG5cbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgfSAgIFxuICAgICAgICBcbiAgICAgICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfSJdfQ== */"

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

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvdXBkYXRlLXpvbmVzL3VwZGF0ZS16b25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC96b25lcy91cGRhdGUtem9uZXMvdXBkYXRlLXpvbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZGlhbG9nLWNsb3Nle1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9Il19 */"

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
            capacity: ['']
        });
        this.capacity = data.capacity;
    }
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

/***/ "./src/app/zones/zone-card/zone-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/zones/zone-card/zone-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 250px;\n    background-color: antiquewhite;\n    cursor: pointer;\n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.zoneName {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1jYXJkL3pvbmUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUdJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvem9uZXMvem9uZS1jYXJkL3pvbmUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktY2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi56b25lTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnN0YXR1cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG59Il19 */"

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



var ZoneCardComponent = /** @class */ (function () {
    function ZoneCardComponent(router) {
        this.router = router;
    }
    ZoneCardComponent.prototype.ngOnInit = function () {
        this.zoneNames = Object.values(this.zones)[1];
        this.city = Object.values(this.zones)[4];
        this.status = Object.values(this.zones)[15];
    };
    ZoneCardComponent.prototype.ok = function () {
        this.router.navigate(['zones/', this.zoneNames]);
    };
    ZoneCardComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'ACTIVE':
                return 'green';
            case 'INACTIVE':
                return 'blue';
            case 'FULL':
                return 'red';
            case 'UNDER_MAINTAINANCE':
                return 'gray';
        }
    };
    ZoneCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
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

module.exports = ".zoneName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n\n\n.graph {\n    margin-top: 20px;\n    padding-left: 500px;\n    cursor: pointer;\n}\n\n\n\n.my-card {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n    background-color: whitesmoke;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n    .my-card {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .zoneName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n    .add-button {\n        padding-left: 300px;\n        padding-bottom: 2%; \n    }\n    .graph {\n        padding-left: 300px;;\n        padding-bottom: 50px; \n    }\n    .status {\n        margin-top: 20px;\n        padding-right: 60px;\n    }\n    .iconCapacity {\n        margin-left: 70%;\n        cursor: pointer;\n        margin-top: -200px;\n    }\n}\n\n\n\n@media only screen and (min-width: 600px) {\n    .add-button {\n        padding-right: 450px;\n        padding-bottom: 2%; \n    }\n    \n}\n\n\n\nmat-icon {\n    font-size: 60px;\n}\n\n\n\n.icon {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n\n\n.iconCapacity {\n    margin-left: 80%;\n    cursor: pointer;\n}\n\n\n\n.status {\n    margin-top: 20px;\n    padding-left: 60px;\n    font-weight: bold;\n    font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZS1kZXRhaWxzL3pvbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOzs7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCOztBQUVKOzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC96b25lcy96b25lLWRldGFpbHMvem9uZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9uZU5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cblxuXG4uZ3JhcGgge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5teS1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC56b25lTmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTsgXG4gICAgfVxuICAgIC5ncmFwaCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDsgXG4gICAgfVxuICAgIC5zdGF0dXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAuaWNvbkNhcGFjaXR5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmFkZC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlOyBcbiAgICB9XG4gICAgXG59XG5cbm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25DYXBhY2l0eSB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */"

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







var ZoneDetailsComponent = /** @class */ (function () {
    function ZoneDetailsComponent(router, zoneService, activatedRoute, route, notificationService, matDialog) {
        this.router = router;
        this.zoneService = zoneService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.zoneStatus = [
            { value: 'INACTIVE', viewValue: 'INACTIVE' },
            { value: 'ACTIVE', viewValue: 'ACTIVE' },
            { value: 'UNDER_MAINTAINANCE', viewValue: 'UNDER_MAINTAINANCE' },
            { value: 'FULL', viewValue: 'FULL' },
        ];
    }
    ZoneDetailsComponent.prototype.ngOnInit = function () {
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
            _this.name = _this.zone[0].name;
            _this.city = _this.zone[0].city;
            _this.country = _this.zone[0].country;
            _this.locality = _this.zone[0].locality;
            _this.creationTime = _this.zone[0].createdAt;
            _this.state = _this.zone[0].state;
            _this.pincode = _this.zone[0].pincode;
            _this.capacity = _this.zone[0].capacity;
            _this.status = _this.zone[0].status;
        });
    };
    ZoneDetailsComponent.prototype.getColor = function (status) {
        switch (status) {
            case 'ACTIVE':
                return 'green';
            case 'INACTIVE':
                return 'blue';
            case 'FULL':
                return 'red';
            case 'UNDER_MAINTAINANCE':
                return 'gray';
        }
    };
    ZoneDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
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
/* harmony import */ var _authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/service/auth-guard.service */ "./src/app/authentication/service/auth-guard.service.ts");
/* harmony import */ var _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zone-details/zone-details.component */ "./src/app/zones/zone-details/zone-details.component.ts");






var routes = [{ path: '', component: _zones_component__WEBPACK_IMPORTED_MODULE_3__["ZonesComponent"], canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: ':name', component: _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_5__["ZoneDetailsComponent"], canActivate: [_authentication_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }];
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

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-zone-card {\n    \n    width: 25%;\n    margin-left: 50px;\n    \n}\n\n.card {\n    margin-left: 18%;\n}\n\n.add-button {\n    padding-right: 200px;\n    padding-bottom: 2%; \n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n\n    app-zone-card {\n    \n        width: 75%;\n        \n    }\n\n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n .header {\n    margin-left: 50px;\n}\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZXMvem9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7O1FBRUksVUFBVTs7SUFFZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7Q0FDSDtJQUNHLGlCQUFpQjtBQUNyQjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC96b25lcy96b25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xufVxuXG5hcHAtem9uZS1jYXJkIHtcbiAgICBcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIFxufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTsgXG59XG5cbi5zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cblxuICAgIGFwcC16b25lLWNhcmQge1xuICAgIFxuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuIC5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG5cbn1cbiJdfQ== */"

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






var ZonesComponent = /** @class */ (function () {
    function ZonesComponent(zoneService, matDialog, notificationService) {
        this.zoneService = zoneService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
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
        var dRef = this.matDialog.open(_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_4__["AddZoneComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.zoneService.createZone(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    console.log(_this.message);
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
            _this.zones = res.data;
        });
    };
    ZonesComponent.ctorParameters = function () { return [
        { type: _service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ZonesComponent.prototype, "zones", void 0);
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

















var ZonesModule = /** @class */ (function () {
    function ZonesModule() {
    }
    ZonesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_zones_component__WEBPACK_IMPORTED_MODULE_4__["ZonesComponent"], _zone_card_zone_card_component__WEBPACK_IMPORTED_MODULE_7__["ZoneCardComponent"], _zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_9__["ZoneDetailsComponent"], _add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__["AddZoneComponent"], _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__["UpdateZonesComponent"],
                _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["AddSupervisorComponent"], _supervisor_details_supervisor_details_component__WEBPACK_IMPORTED_MODULE_16__["SupervisorDetailsComponent"]],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]
            ],
            entryComponents: [_add_zone_add_zone_component__WEBPACK_IMPORTED_MODULE_13__["AddZoneComponent"], _update_zones_update_zones_component__WEBPACK_IMPORTED_MODULE_14__["UpdateZonesComponent"], _add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["AddSupervisorComponent"]]
        })
    ], ZonesModule);
    return ZonesModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8091',
    userService: 'user-service',
    userBaseApi: '/api/v1/users',
    baseUrl1: 'http://172.23.234.112:8093',
    zoneService: 'zone-service',
    zoneBaseApi: '/api/v1/zones',
    baseUrl2: 'http://172.23.234.114:8092',
    campaignService: 'campaign-service',
    campaignBaseApi: '/api/v1/campaigns',
    vehicleService: 'vehicle-service',
    vehicleBaseApi: '/api/v1/vehicles',
    typeBaseApi: '/api/v1/types',
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

module.exports = __webpack_require__(/*! /home/ruchi/umove/umove-admin-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map