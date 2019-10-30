(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fuel-fuel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/add-fuel/add-fuel.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/add-fuel/add-fuel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n          <mat-icon>clear</mat-icon>\n      </button>\n    </mat-toolbar>\n\n\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"fuelForm\" (ngSubmit)=\"onSubmit()\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Name</mat-label>\n                <input matInput #input placeholder=\"Name\" formControlName=\"name\" required class=\"font-style\">\n\n                <mat-error *ngIf=\"rName.invalid\" class=\"font-style\">\n\n                  {{getErrorName()}}\n              </mat-error>\n            </mat-form-field>\n\n\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Cost</mat-label>\n                <input matInput #input placeholder=\" Fuel Cost\" formControlName=\"fuelCost\" required class=\"font-style\">\n\n                <mat-error *ngIf=\"rCost.invalid\" class=\"font-style\">\n\n                  {{getErrorCost()}}\n              </mat-error>\n\n            </mat-form-field>\n\n\n\n\n\n\n\n            <button mat-raised-button class=\"btn font-style\"  [disabled]='!fuelForm.valid'  color=\"primary\">\n    Submit\n  </button>\n\n\n        </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-card/fuel-card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel-card/fuel-card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\">\n\n    <mat-card-content fxLayoutAlign=\"space-between\">\n        <ngx-avatar class=\"font-style\" name=\"{{name}}\"></ngx-avatar>\n    </mat-card-content>\n    <mat-card-title class=\"fuelName font-style\">{{name}}</mat-card-title>\n    <mat-card-title class=\"typeName font-style\">Cost: {{fuelCost}}\n        <span fxLayoutGap=\"50%\">\n            <i class=\"material-icons iconCapacity\"  (click)=\"update()\"  >\n                create\n            </i>\n       </span>\n    </mat-card-title>\n  \n\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-details/fuel-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel-details/fuel-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"10%\">\n    <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n        <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"fuelName\">\n            {{name}}\n        </h1>\n    </div>\n</div>\n<div fxLayout=\"column\" class=\"space-top\">\n    <mat-card class=\"fuel\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n        fxLayoutGap=\"20px\">\n        <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n            fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n                <mat-card-title fxLayoutAlign=\"center center\">Cost: {{fuelCost}}\n                    <span>\n                        <i class=\"material-icons iconCapacity\" (click)=\"update()\">\n                            create\n                        </i>\n                    </span>\n                </mat-card-title>\n            </div>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/fuel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Fuels\n    </h1>\n    <div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n        <img src=\"assets/no-record-found.jpeg\">\n    </div>\n    <ng-template #data>\n        <div fxLayout=\"row\" class=\"search\">\n            <mat-form-field fxFlex=\"20%\">\n                <input matInput [(ngModel)]=\"term\" placeholder=\"Search\" class=\"font-style\">\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"column wrap\">\n            <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\n                fxLayoutAlign.lt-sm=\"center center\">\n                <app-fuel-card *ngFor=\"let type of fuel| paginate: { itemsPerPage: 12, currentPage: p } | filter:term\"\n                    [fuel]=\"type\"></app-fuel-card>\n            </div>\n            <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\">\n            </pagination-controls>\n        </div>\n    </ng-template>\n\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n        <button mat-fab color=\"primary\" (click)=\"add()\">\n            <i class=\"material-icons\">\n                add\n            </i>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fuel/update-fuel/update-fuel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fuel/update-fuel/update-fuel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n  <mat-icon>clear</mat-icon>\n</button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"fuelForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n            <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label class=\"font-style\">Cost</mat-label>\n                <input matInput #input placeholder=\"Fuel Cost\" formControlName=\"fuelCost\" [(ngModel)]=\"fuelCost\" \n                required class=\"font-style\">\n                <mat-error *ngIf=\"rCost.invalid\" class=\"font-style\">\n\n                    {{getErrorCost()}}\n                </mat-error>\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n        <button mat-raised-button class=\"btn font-style\" [disabled]='!fuelForm.valid' color=\"primary\">\n                      Submit\n                  </button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/fuel/add-fuel/add-fuel.component.css":
/*!******************************************************!*\
  !*** ./src/app/fuel/add-fuel/add-fuel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC9hZGQtZnVlbC9hZGQtZnVlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksV0FBVztJQUNYOztBQUdBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztBQUVOO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksV0FBVyxFQUFFLFlBQVk7R0FDMUIiLCJmaWxlIjoic3JjL2FwcC9mdWVsL2FkZC1mdWVsL2FkZC1mdWVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTsgICAgXG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gXG4gICAgLmJ0bi1kaWFsb2ctY2xvc2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgIH1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AddFuelComponent = class AddFuelComponent {
    constructor(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.datas = [];
        this.fuelForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z\-]*$')]],
            fuelCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+(\.[0-9][0-9]?)?')]],
        });
    }
    get rName() {
        return this.fuelForm.get('name');
    }
    get rCost() {
        return this.fuelForm.get('fuelCost');
    }
    getErrorName() {
        return this.rName.hasError('pattern') ? 'Fuel name should contain only alphabets.' :
            '';
    }
    getErrorCost() {
        return this.rCost.hasError('pattern') ? 'Invalid cost' :
            '';
    }
    onSubmit() {
        console.log(this.fuelForm.value);
        console.log(this.fuelForm.value, 'child');
        this.dialogRef.close(this.fuelForm.value);
    }
    onClose() {
        this.fuelForm.reset();
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
AddFuelComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddFuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-fuel',
        template: __webpack_require__(/*! raw-loader!./add-fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/add-fuel/add-fuel.component.html"),
        styles: [__webpack_require__(/*! ./add-fuel.component.css */ "./src/app/fuel/add-fuel/add-fuel.component.css")]
    })
], AddFuelComponent);



/***/ }),

/***/ "./src/app/fuel/fuel-card/fuel-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/fuel/fuel-card/fuel-card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fuelName {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC9mdWVsLWNhcmQvZnVlbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mdWVsL2Z1ZWwtY2FyZC9mdWVsLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWVsTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-fuel/update-fuel.component */ "./src/app/fuel/update-fuel/update-fuel.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







let FuelCardComponent = class FuelCardComponent {
    constructor(router, fuelService, activatedRoute, route, notificationService, matDialog) {
        this.router = router;
        this.fuelService = fuelService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
    }
    ngOnInit() {
        this.name = this.fuel.name;
        this.fuelCost = this.fuel.fuelCost;
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            fuelCost: this.fuel.fuelCost,
        };
        const dRef = this.matDialog.open(_update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__["UpdateFuelComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            console.log('Back to parent', result);
            this.fuelService.updateFuel(this.name, result).subscribe(response => {
                this.notificationService.success('Fuel details updated succesffuly');
                this.getFueletails();
            }, error => {
                this.notificationService.warn('not updated');
            });
        });
    }
    getFueletails() {
        this.fuelService.getFuelByName(this.name).subscribe(res => {
            this.fuel = res.data;
            console.log('data', res.data);
            console.log(res);
            this.name = this.fuel.name;
            this.fuelCost = this.fuel.fuelCost;
        });
    }
};
FuelCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _fuel_service__WEBPACK_IMPORTED_MODULE_3__["FuelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
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



/***/ }),

/***/ "./src/app/fuel/fuel-details/fuel-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/fuel/fuel-details/fuel-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fuelName {\n    margin-left: 240px;\n    padding-bottom: 2%;\n}\n\n.fuel {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    height: 300px;\n    width: 50%;\n}\n\n.space-top {\n    padding-top: 12%;\n    padding-bottom: 10%;\n}\n\n.iconCapacity {\n   \n    cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n    .fuel {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n    .fuelName {\n        margin-left: 50px;\n        font-size: 1.5em;\n        padding-bottom: 5px;\n    }\n\n    .iconCapacity {\n   \n        cursor: pointer;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC9mdWVsLWRldGFpbHMvZnVlbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZnVlbC9mdWVsLWRldGFpbHMvZnVlbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVlbE5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5mdWVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5zcGFjZS10b3Age1xuICAgIHBhZGRpbmctdG9wOiAxMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmljb25DYXBhY2l0eSB7XG4gICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuZnVlbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAuZnVlbE5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAuaWNvbkNhcGFjaXR5IHtcbiAgIFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-fuel/update-fuel.component */ "./src/app/fuel/update-fuel/update-fuel.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");







let FuelDetailsComponent = class FuelDetailsComponent {
    constructor(fuelService, route, matDialog, notificationService) {
        this.fuelService = fuelService;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.getFueletails();
    }
    getFueletails() {
        this.fuelService.getFuelByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
            this.fuel = res.data;
            console.log('data', res.data);
            console.log(res);
            this.name = this.fuel.name;
            this.fuelCost = this.fuel.fuelCost;
        });
    }
    update() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            fuelCost: this.fuel.fuelCost,
        };
        const dRef = this.matDialog.open(_update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_5__["UpdateFuelComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                console.log('Back to parent', result);
                this.fuelService.updateFuel(this.name, result).subscribe(response => {
                    this.notificationService.success('Fuel details updated succesffuly');
                    this.getFueletails();
                }, error => {
                    this.notificationService.warn('not updated');
                });
            }
        });
    }
};
FuelDetailsComponent.ctorParameters = () => [
    { type: _fuel_service__WEBPACK_IMPORTED_MODULE_2__["FuelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
FuelDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fuel-details',
        template: __webpack_require__(/*! raw-loader!./fuel-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/fuel-details/fuel-details.component.html"),
        styles: [__webpack_require__(/*! ./fuel-details.component.css */ "./src/app/fuel/fuel-details/fuel-details.component.css")]
    })
], FuelDetailsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel.component */ "./src/app/fuel/fuel.component.ts");
/* harmony import */ var _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-details/fuel-details.component */ "./src/app/fuel/fuel-details/fuel-details.component.ts");





const routes = [{ path: '', component: _fuel_component__WEBPACK_IMPORTED_MODULE_3__["FuelComponent"] },
    { path: ':name', component: _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_4__["FuelDetailsComponent"] }];
let FuelRoutingModule = class FuelRoutingModule {
};
FuelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FuelRoutingModule);



/***/ }),

/***/ "./src/app/fuel/fuel.component.css":
/*!*****************************************!*\
  !*** ./src/app/fuel/fuel.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-fuel-card {\n    \n    width: 20%;\n    margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n    app-fuel-card {\n        width: 75%;\n    }\n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n   }\n\n.no-data {\n       padding-bottom: 15%;\n       padding-top: 13%;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC9mdWVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBRUE7T0FDSSxtQkFBbUI7T0FDbkIsZ0JBQWdCO0dBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZnVlbC9mdWVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZnVlbC1jYXJkIHtcbiAgICBcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBhcHAtZnVlbC1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG5cbi5wYWdpbmF0b3IgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gICAgYmFja2dyb3VuZDogIzM0NDk1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgfVxuXG4gICAubm8tZGF0YSB7XG4gICAgICAgcGFkZGluZy1ib3R0b206IDE1JTtcbiAgICAgICBwYWRkaW5nLXRvcDogMTMlO1xuICAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _fuel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel.service */ "./src/app/fuel/fuel.service.ts");
/* harmony import */ var _add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-fuel/add-fuel.component */ "./src/app/fuel/add-fuel/add-fuel.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






let FuelComponent = class FuelComponent {
    constructor(fuelService, matDialog, notificationService) {
        this.fuelService = fuelService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
    }
    ngOnInit() {
        this.getFuels();
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        const dRef = this.matDialog.open(_add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_4__["AddFuelComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.fuelService.createFuel(result)
                    .subscribe(response => {
                    this.message = response.message;
                    console.log(this.message);
                    if (this.message === 'Fuel already exists') {
                        this.notificationService.warn('Fuel already exists');
                    }
                    else {
                        this.notificationService.success('Fuel added succesfully');
                    }
                    this.getFuels();
                });
            }
        });
    }
    getFuels() {
        this.fuelService.getFuel().subscribe(res => {
            if (res.count === 0 || res.count === undefined) {
                this.displayCount = 0;
            }
            else {
                this.fuel = res.data;
                console.log(res, 'parent');
                this.displayCount = 1;
            }
        });
    }
};
FuelComponent.ctorParameters = () => [
    { type: _fuel_service__WEBPACK_IMPORTED_MODULE_3__["FuelService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fuel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-routing.module */ "./src/app/fuel/fuel-routing.module.ts");
/* harmony import */ var _fuel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel.component */ "./src/app/fuel/fuel.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fuel_card_fuel_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fuel-card/fuel-card.component */ "./src/app/fuel/fuel-card/fuel-card.component.ts");
/* harmony import */ var _add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-fuel/add-fuel.component */ "./src/app/fuel/add-fuel/add-fuel.component.ts");
/* harmony import */ var _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-fuel/update-fuel.component */ "./src/app/fuel/update-fuel/update-fuel.component.ts");
/* harmony import */ var _fuel_details_fuel_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fuel-details/fuel-details.component */ "./src/app/fuel/fuel-details/fuel-details.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
















let FuelModule = class FuelModule {
};
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
            ngx_avatar__WEBPACK_IMPORTED_MODULE_15__["AvatarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        ],
        entryComponents: [_add_fuel_add_fuel_component__WEBPACK_IMPORTED_MODULE_12__["AddFuelComponent"], _update_fuel_update_fuel_component__WEBPACK_IMPORTED_MODULE_13__["UpdateFuelComponent"]]
    })
], FuelModule);



/***/ }),

/***/ "./src/app/fuel/update-fuel/update-fuel.component.css":
/*!************************************************************!*\
  !*** ./src/app/fuel/update-fuel/update-fuel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn {\n    width: 16em; height: 60px;\n   }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC91cGRhdGUtZnVlbC91cGRhdGUtZnVlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksV0FBVztJQUNYOztBQUdBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztBQUVOO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksV0FBVyxFQUFFLFlBQVk7R0FDMUIiLCJmaWxlIjoic3JjL2FwcC9mdWVsL3VwZGF0ZS1mdWVsL3VwZGF0ZS1mdWVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTsgICAgXG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gXG4gICAgLmJ0bi1kaWFsb2ctY2xvc2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgIH1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let UpdateFuelComponent = class UpdateFuelComponent {
    constructor(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.fuelForm = this.fb.group({
            fuelCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+(\.[0-9][0-9]?)?')]],
        });
        this.fuelCost = data.fuelCost;
    }
    get rCost() {
        return this.fuelForm.get('fuelCost');
    }
    getErrorCost() {
        return this.rCost.hasError('pattern') ? 'Invalid cost' :
            '';
    }
    onClose() {
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(this.fuelForm.value);
        this.dialogRef.close(this.fuelForm.value);
    }
    ngOnInit() {
    }
};
UpdateFuelComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UpdateFuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-fuel',
        template: __webpack_require__(/*! raw-loader!./update-fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/fuel/update-fuel/update-fuel.component.html"),
        styles: [__webpack_require__(/*! ./update-fuel.component.css */ "./src/app/fuel/update-fuel/update-fuel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UpdateFuelComponent);



/***/ })

}]);
//# sourceMappingURL=fuel-fuel-module-es2015.js.map