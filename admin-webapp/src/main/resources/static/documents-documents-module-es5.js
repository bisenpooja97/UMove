(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/document-card/document-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/document-card/document-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\">\n\n  <!-- <mat-card-content fxLayoutAlign=\"end\" [ngStyle]=\"{'color':getColor(documentStatus)}\">{{documentStatus}}</mat-card-content>\n  <ngx-avatar name=\"{{name}}\"></ngx-avatar> -->\n  <mat-card-content fxLayoutAlign=\"space-between\" >\n    <ngx-avatar name=\"{{name}}\"></ngx-avatar>\n    <mat-chip-list aria-label=\"Fish selection\">\n<mat-chip [ngStyle]=\"{'background-color':getColor(documentStatus)}\" class=\"status\">{{documentStatus}}</mat-chip>\n</mat-chip-list>\n</mat-card-content>\n  <mat-card-title fxLayoutAlign=\"start\" >{{name}}</mat-card-title>\n  <mat-card-content fxLayoutAlign=\"start\" >Mobile Number:{{mobileNumber}}</mat-card-content>\n  <mat-card-content fxLayoutAlign=\"start\" class=\"userName\">Driving Licence Number:{{dLicenceNumber}}</mat-card-content>\n  <mat-card-content fxLayoutAlign=\"start\">Expiry Date:{{expiryDate|date: \"dd LLLL yyyy\"}}</mat-card-content>\n   <mat-card-actions >\n    <button mat-raised-button color=\"primary\" class=\"view-button\" (click)=view()>VIEW</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/documents.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/documents.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n        Driving licence Verification Requests\n    </h1>\n    <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n        <mat-form-field fxFlex=20%>\n            <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\">\n    <div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n        <app-document-card *ngFor=\"let user of users | paginate: { itemsPerPage: 10, currentPage: p}| filter:term\"\n     [users]=\"user\" (removeDocumentCard)=\"removeDocument($event)\">\n        </app-document-card>    \n        </div>\n        <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\"></pagination-controls>\n    </div>\n</div>\n    \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documents/update-kyc/update-kyc.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documents/update-kyc/update-kyc.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n\n<img mat-card-image src=\"{{data.imageUrl}}\" onError=\"this.src='data:image/png;base64,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';\" alt=\"Image not available\">\n<!-- <img mat-card-image src=\"http://localhost:8091/{{data.imageUrl}}\" alt=\"DL Image\"> -->\n<p>{{data.name}}</p>\n\n\n<div class=\"kycstatus\">\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"10px\">\n    <button mat-raised-button color=\"green\" (click)=\"approve()\" class=\"approve\">Approve\n        <i class=\"material-icons\">\n            done\n        </i>\n    </button>\n    <button mat-raised-button color=\"red\" (click)=\"reject()\" class=\"reject\">Reject\n        <i class=\"material-icons\">\n            clear\n        </i>\n    </button>\n</div>\n\n\n \n        \n"

/***/ }),

/***/ "./src/app/documents/document-card/document-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-card/document-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 250px;\n    cursor: pointer;\n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.name {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color:white;\n    \n}\n\n.view-button\n{ \n    color:white;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWNhcmQvZG9jdW1lbnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBR0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXOztBQUVmOztBQUNBOztJQUVJLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudHMvZG9jdW1lbnQtY2FyZC9kb2N1bWVudC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15LWNhcmQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLm5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5zdGF0dXMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxufVxuLnZpZXctYnV0dG9uXG57IFxuICAgIGNvbG9yOndoaXRlO1xuICAgXG59Il19 */"

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_documents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/documents.service */ "./src/app/documents/service/documents.service.ts");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");








var DocumentCardComponent = /** @class */ (function () {
    function DocumentCardComponent(router, matDialog, documentService, notificationService) {
        this.router = router;
        this.matDialog = matDialog;
        this.documentService = documentService;
        this.notificationService = notificationService;
        this.removeDocumentCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DocumentCardComponent.prototype.ngOnInit = function () {
        console.log('User data is:', this.users);
        this.name = this.users.name;
        this.mobileNumber = this.users.mobileNumber;
        this.documentStatus = this.users.document.documentStatus;
        console.log(this.users.document.documentStatus, ':documentstatus');
        this.dLicenceNumber = this.users.document.dlicenceNumber;
        this.expiryDate = this.users.document.expiryDate;
    };
    DocumentCardComponent.prototype.ok = function () {
        console.log('ok', this.id);
        this.router.navigate(['users/', this.id]);
    };
    DocumentCardComponent.prototype.getColor = function (documentStatus) {
        switch (this.documentStatus) {
            case 'Pending':
                return '#ff0000';
            case 'Verified':
                return '#008000';
        }
    };
    DocumentCardComponent.prototype.view = function () {
        var _this = this;
        var dRef = this.matDialog.open(_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_3__["UpdateKycComponent"], {
            width: '40vw',
            disableClose: true,
            autoFocus: true,
            data: {
                name: this.users.name,
                id: this.users.id,
                imageUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/api/v1/downloadFile/" + this.users.id,
                users: this.users
            }
        });
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                console.log(result.document.documentStatus, 'Document status');
                _this.documentService.updateUsersById(result.id, result).subscribe(function (val) {
                    console.log(result.id, 'user-id');
                    if (result.document.documentStatus === 'Verified') {
                        _this.notificationService.success(' KYC approved successfully!');
                    }
                    else {
                        _this.notificationService.success('Sorry! KYC rejected.');
                    }
                    // tslint:disable-next-line: align
                    // this.router.navigate(['/documents']);
                    _this.removeDocumentCard.emit(_this.users.id);
                });
            }
        });
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        // dialogConfig.width = '40vw';
        // dialogConfig.data = {
        //   ...this.users
        // };
        // const dRef = this.matDialog.open(UpdateKycComponent, dialogConfig);
    };
    DocumentCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _service_documents_service__WEBPACK_IMPORTED_MODULE_6__["DocumentsService"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DocumentCardComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DocumentCardComponent.prototype, "removeDocumentCard", void 0);
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
        this.cardDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    DocumentsComponent.prototype.removeDocument = function (userId) {
        var indexToRemove = this.users.findIndex(function (user) {
            return user.id === userId;
        });
        this.users.splice(indexToRemove, 1);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DocumentsComponent.prototype, "cardDeleted", void 0);
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
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-kyc/update-kyc.component */ "./src/app/documents/update-kyc/update-kyc.component.ts");














var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documents_component__WEBPACK_IMPORTED_MODULE_4__["DocumentsComponent"], _document_card_document_card_component__WEBPACK_IMPORTED_MODULE_5__["DocumentCardComponent"], _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_13__["UpdateKycComponent"]],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_12__["AvatarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            ],
            entryComponents: [_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_13__["UpdateKycComponent"]]
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userService + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userBaseApi;
    }
    DocumentsService.prototype.getUsers = function () {
        console.log(this.baseUrl + '/' + '?role=User&documentStatus=Pending');
        return this.httpClient.get(this.baseUrl + '?role=User&documentStatus=Pending');
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

module.exports = "img {\n    display: block;\n    max-width: 100%;\n    height: auto; \n}\n\n.kycstatus\n{\n    flex-direction: row;\n    align-items: center;\n\n}\n\n.approve{\n    background-color: green;\n    color: white;\n}\n\n.reject{\n    background-color: red;\n    color:white;\n}\n\nmat-toolbar {\n    background-color: white;\n}\n\n.controles-container{\n    width: 100%;\n    padding: 5%;    \n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n.controles-container > * {\n    width: 100%;\n    }\n\n.btn-dialog-close{\n        width: 45px;\n        min-width: 0px !important;\n        height: 40px;\n        padding: 0px !important;\n      }\n\n.button {\n        padding-bottom: 21.5px;\n    }\n\n.btn {\n        width: 16em; height: 60px;\n      \n       }\n\n.col {\n        width: 80%;\n      }\n    \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL3VwZGF0ZS1reWMvdXBkYXRlLWt5Yy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksV0FBVztJQUNYOztBQUdKO1FBQ1EsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osdUJBQXVCO01BQ3pCOztBQUVBO1FBQ0Usc0JBQXNCO0lBQzFCOztBQUVKO1FBQ1EsV0FBVyxFQUFFLFlBQVk7O09BRTFCOztBQUVQO1FBQ1EsVUFBVTtNQUNaIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL3VwZGF0ZS1reWMvdXBkYXRlLWt5Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvOyBcbn1cblxuLmt5Y3N0YXR1c1xue1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLmFwcHJvdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnJlamVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2xlcy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSU7ICAgIFxufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4uY29udHJvbGVzLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuIFxuLmJ0bi1kaWFsb2ctY2xvc2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIxLjVweDtcbiAgICB9XG4gICAgXG4uYnRuIHtcbiAgICAgICAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiAgICAgIFxuICAgICAgIH1cbiAgICBcbi5jb2wge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuICAgIFxuIl19 */"

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
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");





var UpdateKycComponent = /** @class */ (function () {
    function UpdateKycComponent(dialogRef, data, documentService, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.documentService = documentService;
        this.notificationService = notificationService;
    }
    UpdateKycComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateKycComponent.prototype.ngOnInit = function () {
        //    this.documentService.getUsers().subscribe(res => { this.users = res.data;
        //                                                       console.log(this.users, 'parent');
        // }
        // );
    };
    UpdateKycComponent.prototype.approve = function () {
        // this.documentService.updateUsersById(this.users.id, this.users).subscribe(result =>{
        //   console.log(this.users.id, 'status');
        //   this.notificationService.success(' KYC approved successfully');
        //  });
        // console.log(this.data.users.id, 'id');
        console.log(this.data.users.userStatus, 'userstatus');
        console.log(this.data.users.document.documentStatus, 'documentstatus');
        this.data.users.userStatus = 'Active';
        this.data.users.document.documentStatus = 'Verified';
        // this.documentService.updateUsersById(this.data.users.id, this.data.users).subscribe(result => {
        //   console.log(this.data.users.id, 'status');
        //   this.notificationService.success(' KYC approved successfully');
        //  });
        this.dialogRef.close(this.data.users);
    };
    UpdateKycComponent.prototype.reject = function () {
        console.log(this.data.users.userStatus, 'userstatus');
        console.log(this.data.users.document.documentStatus, 'documentstatus');
        this.data.users.userStatus = 'Inactive';
        this.data.users.document.documentStatus = 'Rejected';
        this.dialogRef.close(this.data.users);
    };
    UpdateKycComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _service_documents_service__WEBPACK_IMPORTED_MODULE_3__["DocumentsService"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
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