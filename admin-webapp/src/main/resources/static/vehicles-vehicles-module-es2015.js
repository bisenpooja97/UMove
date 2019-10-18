(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicles-vehicles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/add-vehicle/add-vehicle.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/add-vehicle/add-vehicle.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n        <h2 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" fxLayoutAlign=\"center center\">Add New Vehicle</h2>\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Registration No.</mat-label>\n                <input matInput #input placeholder=\"Registration No\" formControlName=\"registrationNo\" required>\n\n                <mat-error *ngIf=\"rNum.invalid\">\n\n                    {{getErrorRegistrationNo()}}\n                </mat-error>\n            </mat-form-field>\n\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Type</mat-label>\n                <mat-select formControlName=\"type\">\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                        {{type.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" required>\n\n                <mat-error *ngIf=\"RinsuranceNo.invalid\">\n\n                    {{getErrorInsuranceNo()}}\n                </mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Chassis Number.</mat-label>\n                <input matInput #input placeholder=\"Chassis No.\" formControlName=\"chassisNumber\" required>\n\n                <mat-error *ngIf=\"RchassisNumber.invalid\">\n\n                    {{getErrorChassisNo()}}\n                </mat-error>\n\n            </mat-form-field>\n\n\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n          <mat-label>Status</mat-label>\n          <input matInput #input placeholder=\"Placeholder\" formControlName=\"status\" required>\n      </mat-form-field> -->\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n          <mat-label>Last Service date</mat-label>\n          <input matInput #input placeholder=\"Placeholder\"  required>\n      </mat-form-field> -->\n            <!-- <mat-label>Last Service date</mat-label>\n      <mat-form-field>\n          <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" placeholder=\"Last Service Date\" #input>\n          <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n          <mat-datepicker #lastServiceDate></mat-datepicker>\n      </mat-form-field> -->\n\n            <mat-label>Vehicle purchase date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"vehiclePurchased\" formControlName=\"vehiclePurchased\" [max]=\"todaydate\" placeholder=\"Vehicle Purchased Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"vehiclePurchased\"></mat-datepicker-toggle>\n                <mat-datepicker #vehiclePurchased></mat-datepicker>\n            </mat-form-field>\n\n\n\n            <!-- <mat-form-field appearance=\"outline\" fxFlex>\n        <input matInput #input placeholder=\"Placeholder\" formControlName=\"vehiclePurchased\" required>\n    </mat-form-field> -->\n\n\n            <button mat-raised-button class=\"btn\">\n      Submit\n    </button>\n\n\n        </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/update-vehicles/update-vehicles.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/update-vehicles/update-vehicles.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Insurance No.</mat-label>\n                <input matInput #input placeholder=\"Insurance No.\" formControlName=\"insuranceNo\" [(ngModel)]=\"insuranceNo\" required>\n\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-label>Vehicle Last Service date</mat-label>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"lastServiceDate\" formControlName=\"lastServiceDate\" [max]=\"todaydate\" placeholder=\"Vehicle Last Service  Date\" #input>\n                <mat-datepicker-toggle matSuffix [for]=\"lastServiceDate\"></mat-datepicker-toggle>\n                <mat-datepicker #lastServiceDate></mat-datepicker>\n            </mat-form-field>\n        </div>\n    </div>\n\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn\" [disabled]='!vehicleForm.valid' color=\"primary\">\n                        Submit\n                    </button>\n\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-card/vehicle-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-card/vehicle-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n    <mat-card-content fxLayoutAlign=\"end\" [ngStyle]=\"{'color':getColor(status)}\">{{status}}</mat-card-content>\n    <mat-card-title fxLayoutAlign=\"center center\" class=\"typeName\">{{registrationNo}}</mat-card-title>\n    <mat-card-content fxLayoutAlign=\"center center\">Cost: {{type}}</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicle-deatils/vehicle-deatils.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10%\" fxLayoutGap.lt-md=\"0px\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"vehicleName\">\n            {{registrationNo}}\n\n        </h1>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n        <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n            <mat-label>Vehicle Status</mat-label>\n            <mat-select [(ngModel)]=\"status1\" (ngModelChange)=\"onChange($event)\">\n                <mat-option *ngFor=\"let z of vehicleStatus\" [value]=\"z.value\">\n                    {{z.viewValue}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</div>\n\n<!--  -->\n\n<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n    <mat-card-title fxLayoutAlign=\"start\">{{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n    <br><br>\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n\n\n\n\n            <mat-card-title fxLayoutAlign=\"center center\">insurance Number: {{insuranceNo}}\n\n                <span>\n                        <i class=\"material-icons iconCapacity\"  (click)=\"update()\"  >\n                            create\n                        </i>\n                  </span>\n\n\n            </mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">last Service Date: {{lastServiceDate| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">Vehicle Purchase Date: {{vehiclePurchased| date:\"dd LLLL yyyy\"}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">name: {{name}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">category: {{category}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">costkm: {{costkm}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">cost-Time: {{costtime}}</mat-card-title>\n            <mat-card-title fxLayoutAlign=\"center center\">chassis number: {{chassisNumber}}</mat-card-title>\n\n\n        </div>\n\n    </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicles.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Vehicle\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20%>\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n\n<!-- <app-search-vehicleType></app-search-vehicleType> -->\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n    <app-vehicle-card *ngFor=\"let type of vehicle| paginate: { itemsPerPage: 10, currentPage: p } | filter:term\" [vehicle]=\"type\"></app-vehicle-card>\n\n    <pagination-controls fxLayout=\"column\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row \" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\"><i class=\"material-icons\">\n          add\n      </i>\n    </button>\n</div>"

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
            type: [''],
            status: 'Free',
            // lastServiceDate: [''],
            vehiclePurchased: [''],
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
    get type() {
        return this.vehicleForm.get('type');
    }
    // get lastServiceDate() {
    //   return this.vehicleForm.get('lastServiceDate');
    // }
    get vehiclePurchased() {
        return this.vehicleForm.get('vehiclePurchased');
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
            this.types = res.data;
            console.log('types list: ', this.types);
        });
    }
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
    onSubmit() {
        console.log(this.vehicleForm.value);
        console.log(this.vehicleForm.value, 'child');
        this.dialogRef.close(this.vehicleForm.value);
    }
    ngOnInit() {
        this.getTypeList();
    }
    openSnackbar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
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
        this.vehicleForm = this.fb.group({
            lastServiceDate: [''],
            insuranceNo: ['']
        });
        this.lastServiceDate = data.lastServiceDate;
        this.insuranceNo = data.insuranceNo;
    }
    onClose() {
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(this.vehicleForm.value);
        this.dialogRef.close(this.vehicleForm.value);
    }
    ngOnInit() {
        console.log(this.lastServiceDate);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let VehicleCardComponent = class VehicleCardComponent {
    //category: string;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.registrationNo = this.vehicle.registrationNo;
        this.status = this.vehicle.status;
        this.type = this.vehicle.type.name;
        //  this.category = this.vehicle.type.category;
        console.log(this.vehicle.type.name);
    }
    ok() {
        console.log('hi');
        this.router.navigate(['vehicles/', this.registrationNo]);
    }
    getColor(status) {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicles/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-vehicles/update-vehicles.component */ "./src/app/vehicles/update-vehicles/update-vehicles.component.ts");






let VehicleDeatilsComponent = class VehicleDeatilsComponent {
    constructor(router, vehicleService, activatedRoute, route, snackbar, matDialog) {
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
    ngOnInit() {
        this.getVehicleDetails();
    }
    getVehicleDetails() {
        this.vehicleService.getVehicleByRegistrationNo(this.route.snapshot.paramMap.get('registrationNo')).subscribe(res => {
            this.vehicle = res.data;
            console.log('data', res.data);
            console.log(res);
            this.registrationNo = this.vehicle.registrationNo;
            this.name = this.vehicle.type.name;
            this.lastServiceDate = this.vehicle.lastServiceDate;
            this.vehiclePurchased = this.vehicle.vehiclePurchased;
            this.insuranceNo = this.vehicle.insuranceNo;
            this.zoneId = this.vehicle.zoneid;
            this.chassisNumber = this.vehicle.chassisNumber;
            //this.category = this.vehicle.type.category;
            //console.log(this.category);
            this.cc = this.vehicle.type.vehiclecc;
            this.costkm = this.vehicle.type.costkm;
            this.costtime = this.vehicle.type.costtime;
            this.status1 = this.vehicle.status;
        });
    }
    onEdit() {
    }
    onChange(newValue) {
        console.log(this.vehicle, newValue);
        this.vehicle.status = newValue;
        this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe();
    }
    openSnackbar(message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '20%';
        dialogConfig.data = {
            insuranceNo: this.vehicle.insuranceNo,
            lastServiceDate: this.vehicle.lastServiceDate,
        };
        const dRef = this.matDialog.open(_update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_5__["UpdateVehiclesComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            console.log('Back to parent', result);
            this.vehicleService.updateVehicle(this.registrationNo, result).subscribe(response => {
                this.openSnackbar('Vehicle details updated succesffuly', 'ok');
                this.getVehicleDetails();
            }, error => {
                this.openSnackbar('not updated', 'ok');
            });
        });
    }
};
VehicleDeatilsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vehicleBaseApi;
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

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-vehicle-card {\n    width: 25%;\n    margin-left: 50px;\n}\n\n.card {\n    margin-left: 18%;\n}\n\n.add-button {\n    padding-right: 200px;\n    padding-bottom: 2%;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n    app-vehicle-card {\n        width: 75%;\n    }\n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n    .header {\n        margin-left: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlcy92ZWhpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xufVxuXG5hcHAtdmVoaWNsZS1jYXJkIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB9XG4gICAgYXBwLXZlaGljbGUtY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICAgIC5zZWFyY2gge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn0iXX0= */"

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





let VehiclesComponent = class VehiclesComponent {
    constructor(vehicleService, matDialog, snackBar) {
        this.vehicleService = vehicleService;
        this.matDialog = matDialog;
        this.snackBar = snackBar;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.vehicleService.getVehicles().subscribe(res => {
            this.vehicle = res.data;
            console.log(res, 'parent');
        });
        return this.vehicleService.getVehicles().subscribe(res => this.dataSource.data = res.data, length => this.dataSource.data.length = length);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    openSnackbar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['blue-snackbar']
        });
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        const dRef = this.matDialog.open(_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.vehicleService.createVehicles(result)
                    .subscribe(response => {
                    this.message = response.message;
                    console.log(this.message);
                    if (this.message === 'Vehicle already exists') {
                        this.openSnackbar('Vehicle already exists', 'ok');
                    }
                    else {
                        this.openSnackbar('Vehicle added succesfully', 'ok');
                    }
                    this.vehicleService.getVehicles().subscribe(res => {
                        this.vehicle = res.data;
                    });
                });
            }
        });
    }
};
VehiclesComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
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
        ],
        entryComponents: [_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicleComponent"], _update_vehicles_update_vehicles_component__WEBPACK_IMPORTED_MODULE_14__["UpdateVehiclesComponent"]]
    })
], VehiclesModule);



/***/ })

}]);
//# sourceMappingURL=vehicles-vehicles-module-es2015.js.map