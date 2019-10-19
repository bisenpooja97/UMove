(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/add-user/add-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n<h2>Enter Supervisor Details</h2>\n  <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n    \n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Supervisor Name</mat-label>\n        <input matInput #input placeholder=\"Supervisor Name\" formControlName=\"name\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlex>\n\n        <mat-label>Mobile Number</mat-label>\n        <input matInput #input placeholder=\"Mobile Number\" formControlName=\"mobileNumber\" required>\n      </mat-form-field>\n\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Email-Id</mat-label>\n        <input matInput #input placeholder=\"Email-Id\" formControlName=\"email\" required>\n      </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFlex>\n          <mat-label>Role</mat-label>\n          <input matInput #input placeholder=\"Enter supervisor\" formControlName=\"role\" required>\n        </mat-form-field>\n      </div>\n  </div>\n\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n    <button mat-raised-button class=\"btn\" [disabled]='!userForm.valid' color=\"primary\">\n      Submit\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-card/user-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-card/user-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card\">\n  <mat-card-content fxLayoutAlign=\"space-between\" >\n    <ngx-avatar name=\"{{name}}\"></ngx-avatar>\n    <mat-chip-list aria-label=\"Fish selection\">\n<mat-chip [ngStyle]=\"{'background-color':getColor(userStatus)}\" class=\"status\">{{userStatus}}</mat-chip>\n</mat-chip-list>\n</mat-card-content>\n<mat-card-title class=\"userName\">{{name}}</mat-card-title>\n  <mat-card-content>Mobile No: {{mobileNumber}}</mat-card-content>\n  <mat-card-content>{{role}}</mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-details/user-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-details/user-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.sm=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"10%\">\n  <!-- <div fxLayout=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\">\n    <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"userName\">\n      {{name}}\n    </h1>\n  </div> -->\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n    <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n      <mat-label>User Status</mat-label>\n      <mat-select [(ngModel)]=\"Status\" (ngModelChange)=\"onChange($event)\">\n        <mat-option *ngFor=\"let u of userStatus\" [value]=\"u.value\">\n          {{u.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-card-title fxLayoutAlign=\"center center\">Name: {{user?.name}}</mat-card-title>\n      <mat-card-title fxLayoutAlign=\"center center\">Mobile Number: {{user?.mobileNumber}}</mat-card-title>\n      <mat-card-title fxLayoutAlign=\"center center\">E-mail: {{user?.email}}</mat-card-title>\n    </div>\n  </div>\n</mat-card>\n\n<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"userName\">\n</h1> \n\n <mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n  fxLayoutGap=\"20px\">\n  <!-- <span fxLayoutAlign=\"end\">\n    <i class=\"material-icons\">\n      create\n    </i>\n  </span> -->\n  <br><br>\n  <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-card-title fxLayoutAlign=\"center center\">Driving Licence Number : {{document?.dlicenceNumber}}</mat-card-title>\n      <mat-card-title fxLayoutAlign=\"center center\">Expiry date: {{document?.expiryDate|date: \"dd LLLL yyyy\"}}</mat-card-title>\n      <mat-card-title fxLayoutAlign=\"center center\">Document Status: {{document?.documentStatus}}</mat-card-title>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Users\n    </h1>\n     <div fxLayout=\"row\" class=\"search\">\n        <mat-form-field fxFlex=\"20%\">\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\" fxLayoutAlign.sm=\"center center\">\n            <app-user-card *ngFor=\"let user of users | paginate: { itemsPerPage: 12, currentPage: p } | filter:term\"\n                [users]=\"user\">\n            </app-user-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\"></pagination-controls> \n        </div>\n        <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n            <button mat-fab color=\"primary\" (click)=\"add()\">\n                <i class=\"material-icons\">\n                    add\n                </i>\n            </button>\n        </div>\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    background-color: white;\n}\n\n.controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n.button {\n        padding-bottom: 21.5px;\n    }\n\n.btn {\n        width: 16em; height: 60px;\n      \n       }\n\n.col {\n        width: 80%;\n      }\n    \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7SUFDWDs7QUFHSjtRQUNRLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6Qjs7QUFFQTtRQUNFLHNCQUFzQjtJQUMxQjs7QUFFSjtRQUNRLFdBQVcsRUFBRSxZQUFZOztPQUUxQjs7QUFFUDtRQUNRLFVBQVU7TUFDWiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiBcbi5idG4tZGlhbG9nLWNsb3Nle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMS41cHg7XG4gICAgfVxuICAgIFxuLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxNmVtOyBoZWlnaHQ6IDYwcHg7XG4gICAgICBcbiAgICAgICB9XG4gICAgXG4uY29sIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIH1cbiAgICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/users/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let AddUserComponent = class AddUserComponent {
    constructor(fb, userService, dialogRef, data) {
        this.fb = fb;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.userForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9\-]*$')]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')]],
            email: ['', []],
            role: ['', []],
            userStatus: ['Unallocated']
        });
    }
    get user() {
        return this.userForm.get('name');
    }
    get mobileNo() {
        return this.userForm.get('mobileNumber');
    }
    get email() {
        return this.userForm.get('email-Id');
    }
    get role() {
        return this.userForm.get('role');
    }
    onClose() {
        this.userForm.reset();
        this.dialogRef.close();
    }
    ngOnInit() { }
    onSubmit() {
        console.log(this.userForm.value);
        this.dialogRef.close(this.userForm.value);
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html"),
        styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/users/add-user/add-user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], AddUserComponent);



/***/ }),

/***/ "./src/app/users/user-card/user-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-card/user-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.userName {\n    padding-top: 20px;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVzZXJOYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN0YXR1cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-card/user-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-card/user-card.component.ts ***!
  \********************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserCardComponent = class UserCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log('User data is:', Object.values(this.users));
        this.id = Object.values(this.users)[0];
        this.name = Object.values(this.users)[1];
        this.mobileNumber = Object.values(this.users)[2];
        this.role = Object.values(this.users)[4];
        this.userStatus = Object.values(this.users)[5];
    }
    ok() {
        console.log('ok', this.id);
        this.router.navigate(['users/', this.id]);
    }
    getColor(userStatus) {
        switch (userStatus) {
            case 'Active':
                return '#1B5E20';
            case 'Inactive':
                return '#FFC400';
            case 'Suspended':
                return '#F44336';
            case 'Pending':
                return '#6D4C41';
        }
    }
};
UserCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserCardComponent.prototype, "users", void 0);
UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-card',
        template: __webpack_require__(/*! raw-loader!./user-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-card/user-card.component.html"),
        styles: [__webpack_require__(/*! ./user-card.component.css */ "./src/app/users/user-card/user-card.component.css")]
    })
], UserCardComponent);



/***/ }),

/***/ "./src/app/users/user-details/user-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n    margin-bottom: 40px;\n    margin-left: 450px;\n    /* height: 200px; */\n    width: 50%;\n    background-color:whitesmoke;\n}\n\n.block-user\n{\n    color:purple;\n}\n\n.status {\n    margin-top: 20px;\n    padding-left: 980px;\n}\n\n@media only screen and (max-width: 600px) {\n    .my-card {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n\n    .status {\n        margin-top: 20px;\n        padding-right: 60x;\n        padding-left: 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG59XG5cbi5ibG9jay11c2VyXG57XG4gICAgY29sb3I6cHVycGxlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogOTgwcHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5teS1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/users/service/user.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");





let UserDetailsComponent = class UserDetailsComponent {
    constructor(router, userService, activatedRoute, route, notificationService) {
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.userStatus = [
            { value: 'Inactive', viewValue: 'Inactive' },
            { value: 'Active', viewValue: 'Active' },
            { value: 'Suspended', viewValue: 'Suspended' },
        ];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log('ParamMap id', this.id);
        this.userService.getUsersById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
            this.user = res.data;
            console.log('Response hello', typeof res.data);
            // this.name = this.user.name;
            // this.mobileNumber = this.user.mobileNumber;
            // this.email = this.user.email;
            this.document = this.user.document;
            console.log(this.document);
        });
    }
    onChange(newValue) {
        console.log(Object.values(this.user), Object.values(this.user)[5]);
        this.user.userStatus = newValue;
        console.log(this.user.userStatus, Object.values(this.user), this.user);
        // this.user = {
        //   id: "5da1aaf90e8e3d0001d6e58f",
        //   name: "Sachin",
        //   mobileNumber: "9414642078",
        //   email: "sachin@gmail.com",
        //   role: "User",
        //   userStatus: "Suspended",
        //   document: {
        //     documentStatus: "Pending",
        //     image: "DLImage",
        //     expiryDate: "2039-10-12",
        //     dlicenceNumber: "KA27-XY-2345"
        //   }
        // }
        this.userService.updateUsersById(this.id, this.user).subscribe(response => {
            console.log('Call Success');
            this.notificationService.success('UserStatus updated successfully!!');
        }, error => this.notificationService.warn(error));
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-details/user-details.component.html"),
        styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/users/user-details/user-details.component.css")]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/users/user-details/user-details.component.ts");





const routes = [{ path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: ':id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"] }];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsersRoutingModule);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-user-card {\n    \n    width: 20%;\n    margin-bottom: 20px;\n    \n}\n@media only screen and (max-width: 600px) {\n    \n    app-user-card {\n        width: 75%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYXBwLXVzZXItY2FyZCB7XG4gICAgXG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIFxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIGFwcC11c2VyLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/user.service */ "./src/app/users/service/user.service.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






let UsersComponent = class UsersComponent {
    constructor(userService, notificationService, matDialog) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.userService.getUsers().subscribe(res => {
            this.users = res.data;
            console.log(res, 'parent');
        });
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        const dRef = this.matDialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.userService.addUser(result)
                    .subscribe(response => {
                    this.notificationService.success(' Supervisor Added successfully');
                    this.getUsersInfo();
                });
            }
        });
    }
    getUsersInfo() {
        return this.userService.getUsers().subscribe(res => {
            this.users = res.data;
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], UsersComponent.prototype, "paginator", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/users/user-card/user-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/users/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");















let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            ngx_avatar__WEBPACK_IMPORTED_MODULE_14__["AvatarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]
        ],
        entryComponents: [_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"]]
    })
], UsersModule);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map