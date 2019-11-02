(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/add-user/add-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n<h2>Enter Supervisor Details</h2>\n  <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Supervisor Name</mat-label>\n        <input matInput #input placeholder=\"Supervisor Name\" formControlName=\"name\" required>\n      </mat-form-field>\n     \n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Email-Id</mat-label>\n        <input matInput #input placeholder=\"Email-Id\" formControlName=\"email\" required>\n      </mat-form-field>\n      </div>\n  </div>\n  <mat-form-field appearance=\"outline\" style=\"padding-right: 35%;\">\n\n    <mat-label>Mobile Number</mat-label>\n    <input maxlength=\"10\" matInput #input placeholder=\"Mobile Number\" formControlName=\"mobileNumber\" required>\n  </mat-form-field>\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n    <button mat-raised-button class=\"btn\" [disabled]='!userForm.valid' color=\"primary\">\n      Submit\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/supervisor/supervisor.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/supervisor/supervisor.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n    Supervisors\n</h1>\n<div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n    <img src=\"assets/no-record-found.jpeg\">\n</div>\n<div fxLayout=\"column\" class=\"space\">\n<ng-template #data>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n    <mat-form-field fxFlex=20%>\n        <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n\n<div fxLayout=\"column wrap\">\n<div fxLayout=\"row wrap\" class=\"card\" fxLayoutGap=\"50px\">\n<div *ngFor=\"let data of supervisors | paginate: { itemsPerPage: 12, currentPage: p}| filter:term\"\nfxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" fxLayoutAlign.sm=\"center center\">\n<mat-card class=\"my-card my-card2\">\n <mat-card-content fxLayoutAlign=\"space-between\" >\n    <ngx-avatar name=\"{{name}}\"></ngx-avatar>\n    <mat-chip-list aria-label=\"Fish selection\">\n<mat-chip [ngStyle]=\"{'background-color':getColor(data.userStatus)}\" class=\"status\">{{data.userStatus}}</mat-chip>\n</mat-chip-list>\n</mat-card-content>\n<mat-card-title class=\"userName\">{{data.name}}</mat-card-title>\n  <mat-card-content>Mobile Number:{{data.mobileNumber}}</mat-card-content>\n  <mat-card-content>Email:{{data.email}}</mat-card-content>\n  </mat-card>\n</div>\n</div>\n <pagination-controls fxLayoutAlign=\"center center\" (pageChange)=\"p = $event\" class=\"paginator font-style\"></pagination-controls>\n</div>\n</ng-template>\n\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n    <button mat-fab color=\"primary\" (click)=\"add()\">\n        <i class=\"material-icons\">\n            add\n        </i>\n    </button>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-card/user-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-card/user-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"ok()\" class=\"my-card my-card2\">\n  <mat-card-content fxLayoutAlign=\"space-between\" >\n    <ngx-avatar name=\"{{name}}\"></ngx-avatar>\n    <mat-chip-list aria-label=\"Fish selection\">\n<mat-chip [ngStyle]=\"{'background-color':getColor(userStatus)}\" class=\"status\">{{userStatus}}</mat-chip>\n</mat-chip-list>\n</mat-card-content>\n<mat-card-title class=\"userName\">{{name}}</mat-card-title>\n  <mat-card-content>Mobile No: {{mobileNumber}}</mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-details/user-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-details/user-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.sm=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"10%\">\n    <i class=\"material-icons back-btn\" (click)=\"back()\">\n        keyboard_backspace\n</i>\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n    <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n      <mat-label>User Status</mat-label>\n      <mat-select [(ngModel)]=\"Status\" (ngModelChange)=\"onChange($event)\">\n        <mat-option *ngFor=\"let u of userStatus\" [value]=\"u.value\">\n          {{u.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<div fxLayout=\"column\">\n  <mat-card class=\"user\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n    fxLayoutGap=\"20px\">\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n      fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n        <mat-card-title fxLayoutAlign=\"center center\">Name: {{user?.name}}</mat-card-title>\n        <mat-card-title fxLayoutAlign=\"center center\">Mobile No: {{user?.mobileNumber}}</mat-card-title>\n        <mat-card-title fxLayoutAlign=\"center center\">E-mail: {{user?.email}}</mat-card-title>\n      </div>\n    </div>\n  </mat-card>\n\n  <h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"userName\">\n  </h1>\n\n  <mat-card class=\"user\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n    fxLayoutGap=\"20px\">\n    <br><br>\n    <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n      fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"0px\" class=\"doc\">\n        <mat-card-title fxLayoutAlign=\"center center\">Driving Licence Number : {{document?.dlicenceNumber}}\n        </mat-card-title>\n        <mat-card-title fxLayoutAlign=\"center center\">Expiry date: {{document?.expiryDate|date: \"dd LLLL yyyy\"}}\n        </mat-card-title>\n        <mat-card-title fxLayoutAlign=\"center center\">Document Status: {{document?.documentStatus}}</mat-card-title>\n      </div>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h1 class=\"header\">\n        Users\n    </h1>\n    <div *ngIf=\"displayCount === 0; else data\" class=\"no-data\" fxLayoutAlign=\"center center\">\n        <img src=\"assets/no-record-found.jpeg\">\n    </div>\n    <ng-template #data>\n     <div fxLayout=\"row\" class=\"search\">\n        <mat-form-field fxFlex=\"20%\">\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\">\n        <div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\" fxLayoutAlign.sm=\"center center\">\n            <app-user-card *ngFor=\"let user of users | paginate: { itemsPerPage: 12, currentPage: p } | filter:term\"\n                [users]=\"user\">\n            </app-user-card>\n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\"></pagination-controls>\n        </div>\n        </ng-template>\n    </div>\n\n\n\n\n\n"

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
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z\-]*$')]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')]],
            email: ['', []],
            role: ['ROLE_SUPERVISOR'],
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

/***/ "./src/app/users/supervisor/supervisor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/supervisor/supervisor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.userName {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n    \n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n\n    .header {\n        margin-left: 50px;\n    }\n}\n\n.no-data {\n    padding-bottom: 15%;\n    padding-top: 13%;\n}\n\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    width: 250px;\n}\n\n.my-card2:hover {\n    \n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.content {\n    font-size: 1.2em;\n}\n\n.space {\n    padding-bottom: 5%;\n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvc3VwZXJ2aXNvci9zdXBlcnZpc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtFQUFrRTtJQUNsRSwrQ0FBK0M7SUFDL0MsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxxRUFBcUU7QUFDekU7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9zdXBlcnZpc29yL3N1cGVydmlzb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVzZXJOYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uc2VhcmNoIHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuLm5vLWRhdGEge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XG4gICAgcGFkZGluZy10b3A6IDEzJTtcbn1cbi5teS1jYXJkMiB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLm15LWNhcmQyOmhvdmVyIHtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDdweCAyOHB4IHJnYmEoMCwwLDAsMC4xNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5zcGFjZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuLnBhZ2luYXRvciA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0OTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/users/supervisor/supervisor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/supervisor/supervisor.component.ts ***!
  \**********************************************************/
/*! exports provided: SupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorComponent", function() { return SupervisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/users/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");






let SupervisorComponent = class SupervisorComponent {
    constructor(userService, notificationService, matDialog) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.getSupervisorInfo();
    }
    ok() {
        console.log('ok', this.role);
        // this.router.navigate(['supervisors', this.role]);
    }
    add() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        const dRef = this.matDialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"], dialogConfig);
        dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.userService.addUser(result)
                    .subscribe(response => {
                    this.notificationService.success(' Supervisor Added successfully');
                    this.getSupervisorInfo();
                });
            }
        });
    }
    getSupervisorInfo() {
        return this.userService.getSupervisors().subscribe(res => {
            if (res.count === undefined || res.count === 0) {
                this.displayCount = 0;
            }
            else {
                this.supervisors = res.data;
            }
        }, error => {
            if (error.status === 400) {
                this.displayCount = 0;
            }
        });
    }
    getColor(userStatus) {
        switch (userStatus) {
            case 'Allocated':
                return '#1B5E20';
            case 'Unallocated':
                return '#FFC400';
        }
    }
};
SupervisorComponent.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
SupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supervisor',
        template: __webpack_require__(/*! raw-loader!./supervisor.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/supervisor/supervisor.component.html"),
        styles: [__webpack_require__(/*! ./supervisor.component.css */ "./src/app/users/supervisor/supervisor.component.css")]
    })
], SupervisorComponent);



/***/ }),

/***/ "./src/app/users/user-card/user-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-card/user-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.userName {\n    padding-top: 20px;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.my-card2:hover {\n    \n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.content {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtFQUFrRTtJQUNsRSwrQ0FBK0M7QUFDbkQ7O0FBRUE7O0lBRUkscUVBQXFFO0FBQ3pFOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udXNlck5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubXktY2FyZDIge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbn1cblxuLm15LWNhcmQyOmhvdmVyIHtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDdweCAyOHB4IHJnYmEoMCwwLDAsMC4xNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

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
        this.router.navigate(['users/details', this.id]);
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

module.exports = ".user {\n    margin-bottom: 40px;\n    margin-left: 450px;\n     height: 300px; \n    width: 50%;\n    \n}\n\n.block-user\n{\n    color:purple;\n}\n\n.status {\n    margin-top: 20px;\n    padding-left: 1050px;\n}\n\n@media only screen and (max-width: 600px) {\n    .user {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n\n    .status {\n        margin-top: 20px;\n        padding-right: 60x;\n        padding-left: 0px;\n    }\n\n    mat-card-title {\n        font-size: 1.4em;\n    }\n}\n\n.col {\n    margin-top: 130px;\n}\n\n.doc {\n    margin-top: 70px;\n}\n\n.back-btn {\n    margin-top: 0px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtLQUNqQixhQUFhO0lBQ2QsVUFBVTs7QUFFZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgIGhlaWdodDogMzAwcHg7IFxuICAgIHdpZHRoOiA1MCU7XG4gICAgXG59XG5cbi5ibG9jay11c2VyXG57XG4gICAgY29sb3I6cHVycGxlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTA1MHB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAudXNlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cblxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB9XG59XG5cbi5jb2wge1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xufVxuXG4uZG9jIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uYmFjay1idG4ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let UserDetailsComponent = class UserDetailsComponent {
    constructor(router, userService, activatedRoute, route, notificationService, location) {
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.notificationService = notificationService;
        this.location = location;
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
    back() {
        this.location.back();
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
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
/* harmony import */ var _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supervisor/supervisor.component */ "./src/app/users/supervisor/supervisor.component.ts");






const routes = [
    { path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'details/:id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"] },
    { path: 'supervisor', component: _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_5__["SupervisorComponent"] }
];
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

module.exports = "\napp-user-card {\n\n    width: 20%;\n    margin-bottom: 20px;\n\n}\n@media only screen and (max-width: 600px) {\n\n    app-user-card {\n        width: 75%;\n    }\n}\n.no-data {\n    padding-bottom: 15%;\n    padding-top: 13%;\n}\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hcHAtdXNlci1jYXJkIHtcblxuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgYXBwLXVzZXItY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxufVxuXG4ubm8tZGF0YSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcbiAgICBwYWRkaW5nLXRvcDogMTMlO1xufVxuXG4ucGFnaW5hdG9yIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICAgIGJhY2tncm91bmQ6ICMzNDQ5NTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4iXX0= */"

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
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");





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
            console.log('hi');
            if (res.count === undefined || res.count === 0) {
                this.displayCount = 0;
            }
            else {
                this.users = res.data;
                console.log(res, 'parent');
            }
        }, error => {
            if (error.status === 400) {
                this.displayCount = 0;
            }
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
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

// add() {
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose = true;
//   dialogConfig.autoFocus = true;
//   dialogConfig.width = '40%';
//   const dRef = this.matDialog.open(AddUserComponent, dialogConfig);
//   dRef.afterClosed().subscribe(result => {
//     if (result !== undefined) {
//     this.userService.addUser(result)
//         .subscribe(
//           response => {
//             this.notificationService.success(' Supervisor Added successfully');
//             this.getUsersInfo();
//           }); }
//    });
// }
// getUsersInfo() {
//   return this.userService.getUsers().subscribe(res => { this.users = res.data;
//   });
// }


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
/* harmony import */ var _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./supervisor/supervisor.component */ "./src/app/users/supervisor/supervisor.component.ts");
















let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"], _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["SupervisorComponent"]],
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