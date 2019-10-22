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

module.exports = " <mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n\n<img mat-card-image src=\"http://localhost:8091/\" alt=\"DL Image\">\n<p>{{users.name}}</p>\n\n\n<div class=\"kycstatus\">\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\">\n    <button mat-raised-button color=\"green\" (click)=\"approve()\" class=\"approve\">Approve\n        <i class=\"material-icons\">\n            done\n        </i>\n    </button>\n    <button mat-raised-button color=\"red\" (click)=\"reject()\" class=\"reject\">Reject\n        <i class=\"material-icons\">\n            clear\n        </i>\n    </button>\n</div>\n\n\n \n        \n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-kyc/update-kyc.component */ "./src/app/documents/update-kyc/update-kyc.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DocumentCardComponent = /** @class */ (function () {
    function DocumentCardComponent(router, matDialog) {
        this.router = router;
        this.matDialog = matDialog;
    }
    DocumentCardComponent.prototype.ngOnInit = function () {
        console.log('User data is:', this.users);
        this.name = this.users.name;
        this.mobileNumber = this.users.mobileNumber;
        this.documentStatus = this.users.document.documentStatus;
        console.log(this.users.document.documentStatus);
        this.dLicenceNumber = this.users.document.dlicenceNumber;
        this.expiryDate = this.users.document.expiryDate;
    };
    DocumentCardComponent.prototype.ok = function () {
        console.log('ok', this.id);
        this.router.navigate(['users/', this.id]);
    };
    DocumentCardComponent.prototype.getColor = function (documentStatus) {
        switch (documentStatus) {
            case 'Pending':
                return 'red';
            case 'Verified':
                return 'green';
        }
    };
    DocumentCardComponent.prototype.view = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            user: this.users
        };
        var dRef = this.matDialog.open(_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_3__["UpdateKycComponent"], dialogConfig);
    };
    DocumentCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
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
    return DocumentCardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.component */ "./src/app/documents/documents.component.ts");




var routes = [{ path: '', component: _documents_component__WEBPACK_IMPORTED_MODULE_3__["DocumentsComponent"] }];
var DocumentsRoutingModule = /** @class */ (function () {
    function DocumentsRoutingModule() {
    }
    DocumentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DocumentsRoutingModule);
    return DocumentsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _service_documents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/documents.service */ "./src/app/documents/service/documents.service.ts");





var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(documentService, notificationService, matDialog) {
        this.documentService = documentService;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.getUsers().subscribe(function (res) {
            _this.users = res.data;
            console.log(res, 'parent');
        });
    };
    DocumentsComponent.ctorParameters = function () { return [
        { type: _service_documents_service__WEBPACK_IMPORTED_MODULE_4__["DocumentsService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
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
    return DocumentsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/documents/documents-routing.module.ts");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _document_card_document_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-card/document-card.component */ "./src/app/documents/document-card/document-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-kyc/update-kyc.component */ "./src/app/documents/update-kyc/update-kyc.component.ts");













var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
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
    return DocumentsModule;
}());



/***/ }),

/***/ "./src/app/documents/service/documents.service.ts":
/*!********************************************************!*\
  !*** ./src/app/documents/service/documents.service.ts ***!
  \********************************************************/
/*! exports provided: DocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsService", function() { return DocumentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DocumentsService = /** @class */ (function () {
    function DocumentsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userBaseApi;
    }
    DocumentsService.prototype.getUsers = function () {
        console.log(this.baseUrl + '/' + '?role=User&documentStatus=Pending');
        return this.httpClient.get(this.baseUrl + '/' + '?role=User&documentStatus=Pending');
    };
    DocumentsService.prototype.getUsersById = function (id) {
        return this.httpClient.get(this.baseUrl + '/' + id);
    };
    DocumentsService.prototype.updateUsersById = function (id, user) {
        console.log('Service ID', typeof id);
        console.log("Base URL " + this.baseUrl + "/" + id);
        console.log('user data:', JSON.stringify(user));
        return this.httpClient.patch(this.baseUrl + '/' + id, user);
    };
    DocumentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DocumentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DocumentsService);
    return DocumentsService;
}());



/***/ }),

/***/ "./src/app/documents/update-kyc/update-kyc.component.css":
/*!***************************************************************!*\
  !*** ./src/app/documents/update-kyc/update-kyc.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    display: block;\n    max-width: 100%;\n    height: auto; \n}\n.kycstatus\n{\n    flex-direction: row;\n\n}\n.approve{\n    background-color: green;\n    color: white;\n}\n.reject{\n    background-color: red;\n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3VwZGF0ZS1reWMvdXBkYXRlLWt5Yy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudHMvdXBkYXRlLWt5Yy91cGRhdGUta3ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87IFxufVxuLmt5Y3N0YXR1c1xue1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbn1cbi5hcHByb3Zle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZWplY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOndoaXRlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_documents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/documents.service */ "./src/app/documents/service/documents.service.ts");




var UpdateKycComponent = /** @class */ (function () {
    function UpdateKycComponent(dialogRef, data, documentService) {
        this.dialogRef = dialogRef;
        this.documentService = documentService;
        this.users = data.user;
        console.log('userdata', this.users);
    }
    UpdateKycComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateKycComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.getUsers().subscribe(function (res) {
            _this.users = res.data;
            console.log(_this.users, 'parent');
        });
    };
    UpdateKycComponent.prototype.approve = function () {
    };
    UpdateKycComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _service_documents_service__WEBPACK_IMPORTED_MODULE_3__["DocumentsService"] }
    ]; };
    UpdateKycComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-kyc',
            template: __webpack_require__(/*! raw-loader!./update-kyc.component.html */ "./node_modules/raw-loader/index.js!./src/app/documents/update-kyc/update-kyc.component.html"),
            styles: [__webpack_require__(/*! ./update-kyc.component.css */ "./src/app/documents/update-kyc/update-kyc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UpdateKycComponent);
    return UpdateKycComponent;
}());



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es5.js.map