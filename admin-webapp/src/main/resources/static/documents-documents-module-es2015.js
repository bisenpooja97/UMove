(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/document-card/document-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/document-card/document-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  \n  <mat-card-content fxLayoutAlign=\"end\" [ngStyle]=\"{'color':getColor(documentStatus)}\">{{documentStatus}}</mat-card-content>\n  <mat-card-title fxLayoutAlign=\"start\" >{{name}}</mat-card-title>\n  <mat-card-content fxLayoutAlign=\"start\" >Mobile Number:{{mobileNumber}}</mat-card-content>\n  <mat-card-content fxLayoutAlign=\"start\" class=\"userName\">Driving Licence Number:{{dLicenceNumber}}</mat-card-content>\n  <mat-card-content fxLayoutAlign=\"start\">Expiry Date:{{expiryDate|date: \"dd LLLL yyyy\"}}</mat-card-content>\n   <mat-card-actions >\n    <button mat-raised-button color=\"primary\" class=\"view-button\" (click)=view()>VIEW</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/documents.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/documents.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n        Driving licence Verification Requests\n    </h1>\n    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n        <mat-form-field fxFlex=20%>\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n        <app-document-card *ngFor=\"let user of users | paginate: { itemsPerPage: 10, currentPage: p}| filter:term\"\n [users]=\"user\">>\n\n        </app-document-card>\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/update-kyc/update-kyc.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/update-kyc/update-kyc.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n <img mat-card-image src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmrhTn0-Pu1yPZzTq1cOe6Ru5z3MSrSVINc-byYsk07jF-DkVRw\" alt=\"DL image\">\n        \n"

/***/ }),

/***/ "./src/app/documents/document-card/document-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-card/document-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 250px;\n    cursor: pointer;\n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.name {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n}\n\n.view-button\n{ \n    color:white;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWNhcmQvZG9jdW1lbnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBR0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0E7O0lBRUksV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC1jYXJkL2RvY3VtZW50LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktY2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnN0YXR1cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG4udmlldy1idXR0b25cbnsgXG4gICAgY29sb3I6d2hpdGU7XG4gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/documents/document-card/document-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-card/document-card.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCardComponent", function() { return DocumentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-kyc/update-kyc.component */ "./src/app/documents/update-kyc/update-kyc.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let DocumentCardComponent = class DocumentCardComponent {
    constructor(router, matDialog) {
        this.router = router;
        this.matDialog = matDialog;
    }
    ngOnInit() {
        console.log('User data is:', this.users);
        this.name = this.users.name;
        this.mobileNumber = this.users.mobileNumber;
        this.documentStatus = this.users.document.documentStatus;
        console.log(this.users.document.documentStatus);
        this.dLicenceNumber = this.users.document.dlicenceNumber;
        this.expiryDate = this.users.document.expiryDate;
    }
    ok() {
        console.log('ok', this.id);
        this.router.navigate(['users/', this.id]);
    }
    getColor(documentStatus) {
        switch (documentStatus) {
            case 'Pending':
                return 'red';
            case 'Verified':
                return 'green';
        }
    }
    view() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        const dRef = this.matDialog.open(_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_3__["UpdateKycComponent"], dialogConfig);
    }
};
DocumentCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DocumentCardComponent.prototype, "users", void 0);
DocumentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-card',
        template: __webpack_require__(/*! raw-loader!./document-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/document-card/document-card.component.html"),
        styles: [__webpack_require__(/*! ./document-card.component.css */ "./src/app/documents/document-card/document-card.component.css")]
    })
], DocumentCardComponent);



/***/ }),

/***/ "./src/app/documents/documents-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/documents/documents-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function() { return DocumentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.component */ "./src/app/documents/documents.component.ts");




const routes = [{ path: '', component: _documents_component__WEBPACK_IMPORTED_MODULE_3__["DocumentsComponent"] }];
let DocumentsRoutingModule = class DocumentsRoutingModule {
};
DocumentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DocumentsRoutingModule);



/***/ }),

/***/ "./src/app/documents/documents.component.css":
/*!***************************************************!*\
  !*** ./src/app/documents/documents.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-user-card {\n    \n    width: 25%;\n    margin-left: 50px;\n    \n}\n\n.card {\n    margin-left: 18%;\n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n\n    app-user-card {\n        width: 75%;\n    }\n    \n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n\n    .header {\n        margin-left: 50px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xufVxuXG5hcHAtdXNlci1jYXJkIHtcbiAgICBcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIFxufVxuLmNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XG59XG5cbi5zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cblxuICAgIGFwcC11c2VyLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/documents/documents.component.ts":
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _users_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/service/user.service */ "./src/app/users/service/user.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");





let DocumentsComponent = class DocumentsComponent {
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
};
DocumentsComponent.ctorParameters = () => [
    { type: _users_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], DocumentsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DocumentsComponent.prototype, "users", void 0);
DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documents',
        template: __webpack_require__(/*! raw-loader!./documents.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/documents.component.html"),
        styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/documents/documents.component.css")]
    })
], DocumentsComponent);



/***/ }),

/***/ "./src/app/documents/documents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/documents/documents.module.ts ***!
  \***********************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/documents/documents-routing.module.ts");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _document_card_document_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-card/document-card.component */ "./src/app/documents/document-card/document-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-kyc/update-kyc.component */ "./src/app/documents/update-kyc/update-kyc.component.ts");













let DocumentsModule = class DocumentsModule {
};
DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_documents_component__WEBPACK_IMPORTED_MODULE_4__["DocumentsComponent"], _document_card_document_card_component__WEBPACK_IMPORTED_MODULE_5__["DocumentCardComponent"], _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_12__["UpdateKycComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"],
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]
        ],
        entryComponents: [_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_12__["UpdateKycComponent"]]
    })
], DocumentsModule);



/***/ }),

/***/ "./src/app/documents/update-kyc/update-kyc.component.css":
/*!***************************************************************!*\
  !*** ./src/app/documents/update-kyc/update-kyc.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    display: block;\n    max-width: 100%;\n    height: auto; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3VwZGF0ZS1reWMvdXBkYXRlLWt5Yy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL3VwZGF0ZS1reWMvdXBkYXRlLWt5Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvOyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/documents/update-kyc/update-kyc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documents/update-kyc/update-kyc.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateKycComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateKycComponent", function() { return UpdateKycComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let UpdateKycComponent = class UpdateKycComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
UpdateKycComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UpdateKycComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-kyc',
        template: __webpack_require__(/*! raw-loader!./update-kyc.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/update-kyc/update-kyc.component.html"),
        styles: [__webpack_require__(/*! ./update-kyc.component.css */ "./src/app/documents/update-kyc/update-kyc.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UpdateKycComponent);



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map