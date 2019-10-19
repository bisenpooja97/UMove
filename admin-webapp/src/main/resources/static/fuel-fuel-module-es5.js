(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fuel-fuel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/add-fuel/add-fuel.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/add-fuel/add-fuel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n          <mat-icon>clear</mat-icon>\n      </button>\n    </mat-toolbar>\n\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"fuelForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Fuel Type</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Name</mat-label>\n                <input matInput #input placeholder=\"Name\" formControlName=\"name\" required>\n\n                <!-- <mat-error *ngIf=\"rNum.invalid\">\n\n                  {{getErrorRegistrationNo()}}\n              </mat-error> -->\n            </mat-form-field>\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost</mat-label>\n                <input matInput #input placeholder=\"Cost\" formControlName=\"costFuel\" required>\n\n                <!-- <mat-error *ngIf=\"RinsuranceNo.invalid\">\n\n                  {{getErrorInsuranceNo()}}\n              </mat-error> -->\n\n            </mat-form-field>\n\n\n\n\n\n\n\n            <button mat-raised-button class=\"btn\">\n    Submit\n  </button>\n\n\n        </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-card/fuel-card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel-card/fuel-card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"typeName\">{{name}}</mat-card-title>\n\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-details/fuel-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel-details/fuel-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10%\" fxLayoutGap.lt-md=\"0px\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{name}}\n\n        </h1>\n    </div>\n\n    <!-- <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n      <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n          <mat-label>Vehicle Status</mat-label>\n          <mat-select [(ngModel)]=\"status1\" (ngModelChange)=\"onChange($event)\">\n              <mat-option *ngFor=\"let z of vehicleStatus\" [value]=\"z.value\">\n                  {{z.viewValue}}\n              </mat-option>\n          </mat-select>\n      </mat-form-field>\n  </div>\n</div> -->\n\n    <!--  -->\n\n    <mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <!-- <mat-card-title fxLayoutAlign=\"start\">{{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n  <br><br> -->\n        <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n\n\n\n\n                <mat-card-title fxLayoutAlign=\"center center\">Cost: {{costFuel}}\n\n                    <span>\n                      <i class=\"material-icons iconCapacity\"  (click)=\"update()\"  >\n                          create\n                      </i>\n                </span>\n\n\n                </mat-card-title>\n                <!-- <mat-card-title fxLayoutAlign=\"center center\">last Service Date: {{lastServiceDate| date:\"dd LLLL yyyy\"}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"center center\">Vehicle Purchase Date: {{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"center center\">name: {{name}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"center center\">category: {{category}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"center center\">costkm: {{costkm}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"center center\">cost-Time: {{costtime}}</mat-card-title> -->\n\n            </div>\n\n        </div>\n\n    </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Fuel\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20%>\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-fuel-card *ngFor=\"let type of fuel| paginate: { itemsPerPage: 10, currentPage: p } | filter:term\" [fuel]=\"type\"></app-fuel-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n        add\n    </i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/update-fuel/update-fuel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/update-fuel/update-fuel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n  <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"fuelForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Cost</mat-label>\n                <input matInput #input placeholder=\"Fuel Cost\" formControlName=\"costFuel\" [(ngModel)]=\"costFuel\" required>\n\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!vehicleForm.valid' color=\"primary\">\n                      Submit\n                  </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/fuel/add-fuel/add-fuel.component.css":
/*!******************************************************!*\
  !*** ./src/app/fuel/add-fuel/add-fuel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1ZWwvYWRkLWZ1ZWwvYWRkLWZ1ZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fuel/add-fuel/add-fuel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/fuel/add-fuel/add-fuel.component.ts ***!
  \*****************************************************/
/*! exports provided: AddFuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFuelComponent", function() { return AddFuelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddFuelComponent = /** @class */ (function () {
    function AddFuelComponent(dialogRef, fb, route, router, fuelService, snackBar) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.fuelService = fuelService;
        this.snackBar = snackBar;
        this.datas = [];
        this.fuelForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            costFuel: ['']
        });
    }
    Object.defineProperty(AddFuelComponent.prototype, "rName", {
        get: function () {
            return this.fuelForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFuelComponent.prototype, "rCost", {
        get: function () {
            return this.fuelForm.get('costFuel');
        },
        enumerable: true,
        configurable: true
    });
    AddFuelComponent.prototype.onSubmit = function () {
        console.log(this.fuelForm.value);
        console.log(this.fuelForm.value, 'child');
        this.dialogRef.close(this.fuelForm.value);
    };
    AddFuelComponent.prototype.onClose = function () {
        this.fuelForm.reset();
        this.dialogRef.close();
    };
    AddFuelComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    AddFuelComponent.prototype.ngOnInit = function () {
    };
    AddFuelComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _fuel_service__WEBPACK_IMPORTED_MODULE_2__["FuelService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    AddFuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-fuel',
            template: __webpack_require__(/*! raw-loader!./add-fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/add-fuel/add-fuel.component.html"),
            styles: [__webpack_require__(/*! ./add-fuel.component.css */ "./src/app/fuel/add-fuel/add-fuel.component.css")]
        })
    ], AddFuelComponent);
    return AddFuelComponent;
}());



/***/ }),

/***/ "./src/app/fuel/fuel-card/fuel-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/fuel/fuel-card/fuel-card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1ZWwvZnVlbC1jYXJkL2Z1ZWwtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fuel/fuel-card/fuel-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/fuel/fuel-card/fuel-card.component.ts ***!
  \*******************************************************/
/*! exports provided: FuelCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelCardComponent", function() { return FuelCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FuelCardComponent = /** @class */ (function () {
    function FuelCardComponent(router) {
        this.router = router;
    }
    FuelCardComponent.prototype.ngOnInit = function () {
        this.name = this.fuel.name;
        this.costFuel = this.fuel.costFuel;
        //  this.category = this.vehicle.type.category;
    };
    FuelCardComponent.prototype.ok = function () {
        this.router.navigate(['fuel/', this.name]);
    };
    FuelCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FuelCardComponent.prototype, "fuel", void 0);
    FuelCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fuel-card',
            template: __webpack_require__(/*! raw-loader!./fuel-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-card/fuel-card.component.html"),
            styles: [__webpack_require__(/*! ./fuel-card.component.css */ "./src/app/fuel/fuel-card/fuel-card.component.css")]
        })
    ], FuelCardComponent);
    return FuelCardComponent;
}());



/***/ }),

/***/ "./src/app/fuel/fuel-details/fuel-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/fuel/fuel-details/fuel-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1ZWwvZnVlbC1kZXRhaWxzL2Z1ZWwtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fuel/fuel-details/fuel-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/fuel/fuel-details/fuel-details.component.ts ***!
  \*************************************************************/
/*! exports provided: FuelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelDetailsComponent", function() { return FuelDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-fuel/update-fuel.component */ "./src/app/fuel/update-fuel/update-fuel.component.ts");






var FuelDetailsComponent = /** @class */ (function () {
    function FuelDetailsComponent(router, fuelService, activatedRoute, route, snackbar, matDialog) {
        this.router = router;
        this.fuelService = fuelService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.snackbar = snackbar;
        this.matDialog = matDialog;
    }
    FuelDetailsComponent.prototype.ngOnInit = function () {
        this.getFueletails();
    };
    FuelDetailsComponent.prototype.getFueletails = function () {
        var _this = this;
        this.fuelService.getFuelByName(this.route.snapshot.paramMap.get('name')).subscribe(function (res) {
            _this.fuel = res.data;
            console.log('data', res.data);
            console.log(res);
            _this.name = _this.fuel.name;
            _this.costFuel = _this.fuel.costFuel;
        });
    };
    FuelDetailsComponent.prototype.openSnackbar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    FuelDetailsComponent.prototype.update = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '20%';
        dialogConfig.data = {
            costFuel: this.fuel.costFuel,
        };
        var dRef = this.matDialog.open(_update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__["UpdateFuelComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            console.log('Back to parent', result);
            _this.fuelService.updateFuel(_this.name, result).subscribe(function (response) {
                _this.openSnackbar('Fuel details updated succesffuly', 'ok');
                _this.getFueletails();
            }, function (error) {
                _this.openSnackbar('not updated', 'ok');
            });
        });
    };
    FuelDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _fuel_service__WEBPACK_IMPORTED_MODULE_2__["FuelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    FuelDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fuel-details',
            template: __webpack_require__(/*! raw-loader!./fuel-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-details/fuel-details.component.html"),
            styles: [__webpack_require__(/*! ./fuel-details.component.css */ "./src/app/fuel/fuel-details/fuel-details.component.css")]
        })
    ], FuelDetailsComponent);
    return FuelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/fuel/fuel-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/fuel/fuel-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FuelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelRoutingModule", function() { return FuelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel.component */ "./src/app/fuel/fuel.component.ts");
/* harmony import */ var _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-details/fuel-details.component */ "./src/app/fuel/fuel-details/fuel-details.component.ts");





var routes = [{ path: '', component: _fuel_component__WEBPACK_IMPORTED_MODULE_3__["FuelComponent"] },
    { path: ':name', component: _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_4__["FuelDetailsComponent"] }];
var FuelRoutingModule = /** @class */ (function () {
    function FuelRoutingModule() {
    }
    FuelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FuelRoutingModule);
    return FuelRoutingModule;
}());



/***/ }),

/***/ "./src/app/fuel/fuel.component.css":
/*!*****************************************!*\
  !*** ./src/app/fuel/fuel.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1ZWwvZnVlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fuel/fuel.component.ts":
/*!****************************************!*\
  !*** ./src/app/fuel/fuel.component.ts ***!
  \****************************************/
/*! exports provided: FuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelComponent", function() { return FuelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-fuel/add-fuel.component */ "./src/app/fuel/add-fuel/add-fuel.component.ts");





var FuelComponent = /** @class */ (function () {
    function FuelComponent(fuelService, matDialog, snackBar) {
        this.fuelService = fuelService;
        this.matDialog = matDialog;
        this.snackBar = snackBar;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    FuelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fuelService.getFuel().subscribe(function (res) {
            _this.fuel = res.data;
            console.log(res, 'parent');
        });
        return this.fuelService.getFuel().subscribe(function (res) {
            _this.fuel = res.data;
        });
    };
    FuelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    FuelComponent.prototype.openSnackbar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    };
    FuelComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.matDialog.open(_add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_4__["AddFuelComponent"], dialogConfig);
        var dRef = this.matDialog.open(_add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_4__["AddFuelComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.fuelService.createFuel(result)
                    .subscribe(function (response) {
                    _this.message = response.message;
                    console.log(_this.message);
                    if (_this.message === 'Fuel already exists') {
                        _this.openSnackbar('Fuel already exists', 'ok');
                    }
                    else {
                        _this.openSnackbar('Fuel added succesfully', 'ok');
                    }
                    _this.fuelService.getFuel().subscribe(function (res) {
                        _this.fuel = res.data;
                    });
                });
            }
        });
    };
    FuelComponent.ctorParameters = function () { return [
        { type: _fuel_service__WEBPACK_IMPORTED_MODULE_3__["FuelService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], FuelComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FuelComponent.prototype, "fuel", void 0);
    FuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fuel',
            template: __webpack_require__(/*! raw-loader!./fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel.component.html"),
            styles: [__webpack_require__(/*! ./fuel.component.css */ "./src/app/fuel/fuel.component.css")]
        })
    ], FuelComponent);
    return FuelComponent;
}());



/***/ }),

/***/ "./src/app/fuel/fuel.module.ts":
/*!*************************************!*\
  !*** ./src/app/fuel/fuel.module.ts ***!
  \*************************************/
/*! exports provided: FuelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelModule", function() { return FuelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-routing.module */ "./src/app/fuel/fuel-routing.module.ts");
/* harmony import */ var _fuel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel.component */ "./src/app/fuel/fuel.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuel_card_fuel_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fuel-card/fuel-card.component */ "./src/app/fuel/fuel-card/fuel-card.component.ts");
/* harmony import */ var _add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-fuel/add-fuel.component */ "./src/app/fuel/add-fuel/add-fuel.component.ts");
/* harmony import */ var _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-fuel/update-fuel.component */ "./src/app/fuel/update-fuel/update-fuel.component.ts");
/* harmony import */ var _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fuel-details/fuel-details.component */ "./src/app/fuel/fuel-details/fuel-details.component.ts");















var FuelModule = /** @class */ (function () {
    function FuelModule() {
    }
    FuelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fuel_component__WEBPACK_IMPORTED_MODULE_4__["FuelComponent"], _fuel_card_fuel_card_component__WEBPACK_IMPORTED_MODULE_11__["FuelCardComponent"], _add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_12__["AddFuelComponent"], _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_13__["UpdateFuelComponent"], _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_14__["FuelDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuel_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
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
            entryComponents: [_add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_12__["AddFuelComponent"], _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_13__["UpdateFuelComponent"]]
        })
    ], FuelModule);
    return FuelModule;
}());



/***/ }),

/***/ "./src/app/fuel/update-fuel/update-fuel.component.css":
/*!************************************************************!*\
  !*** ./src/app/fuel/update-fuel/update-fuel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1ZWwvdXBkYXRlLWZ1ZWwvdXBkYXRlLWZ1ZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fuel/update-fuel/update-fuel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/fuel/update-fuel/update-fuel.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateFuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFuelComponent", function() { return UpdateFuelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UpdateFuelComponent = /** @class */ (function () {
    function UpdateFuelComponent(dialogRef, fb, route, router, fuelService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.fuelService = fuelService;
        this.fuelForm = this.fb.group({
            costFuel: ['']
        });
        this.costFuel = data.costFuel;
    }
    UpdateFuelComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateFuelComponent.prototype.onSubmit = function () {
        console.log(this.fuelForm.value);
        this.dialogRef.close(this.fuelForm.value);
    };
    UpdateFuelComponent.prototype.ngOnInit = function () {
    };
    UpdateFuelComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _fuel_service__WEBPACK_IMPORTED_MODULE_2__["FuelService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateFuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-fuel',
            template: __webpack_require__(/*! raw-loader!./update-fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/update-fuel/update-fuel.component.html"),
            styles: [__webpack_require__(/*! ./update-fuel.component.css */ "./src/app/fuel/update-fuel/update-fuel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
    ], UpdateFuelComponent);
    return UpdateFuelComponent;
}());



/***/ })

}]);
//# sourceMappingURL=fuel-fuel-module-es5.js.map