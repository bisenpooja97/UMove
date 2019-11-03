(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaigns-campaigns-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/add-campaign/add-campaign.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/add-campaign/add-campaign.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n  </mat-toolbar>\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"campaignForm\" (ngSubmit)=\"onSubmit()\">\n  <h2>Create a new campaign</h2>\n  <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Campaign name</mat-label>\n        <input matInput #input placeholder=\"Campaign Name\" formControlName=\"name\" required autocomplete=\"off\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Objective</mat-label>\n        <input matInput #input placeholder=\"Enter objective\" formControlName=\"objective\" autocomplete=\"off\" required>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a start date\" formControlName=\"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n      \n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Promo code</mat-label>\n        <input matInput #input placeholder=\"Promo code\" formControlName=\"promocode\" required autocomplete=\"off\">\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n    \n          <mat-form-field appearance=\"outline\" fxFlex>\n              <mat-label>Discount Percent</mat-label>\n              <input matInput #input placeholder=\"Discount Percent\" autocomplete=\"off\" formControlName=\"discountPercent\" required>\n      </mat-form-field>\n           \n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Total Coupons</mat-label>\n        <input matInput #input placeholder=\"Total Coupons\" autocomplete=\"off\" formControlName=\"totalCoupons\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label> Expiry Date</mat-label>\n   <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose expiry date\" autocomplete=\"off\" formControlName=\"expiryDate\">\n   <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n   <mat-datepicker #picker2></mat-datepicker>\n </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Maximum Discount Amount</mat-label>\n        <input matInput #input placeholder=\"Maximum Discount Amount\" autocomplete=\"off\" formControlName=\"maxDiscountAmount\" required>\n      </mat-form-field>\n      \n     \n    </div>\n  </div>\n  <mat-form-field appearance=\"outline\" fxFlex style=\"padding-right: 35%;\">\n    <mat-label>Number of target customers</mat-label>\n    <input matInput #input placeholder=\"Number of target customers\" autocomplete=\"off\" formControlName=\"targetCustomers\" required>\n  </mat-form-field>\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n    <button mat-raised-button class=\"btn\" [disabled]='!campaignForm.valid' color=\"primary\">\n      Submit\n    </button>\n  </div>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaign-card/campaign-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaign-card/campaign-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card my-card2\" (click)=\"ok()\">\n\n  <mat-card-content fxLayoutAlign=\"space-between\" >\n    <ngx-avatar class=\"font-style\" name=\"{{promocode}}\"></ngx-avatar>\n    <mat-chip-list aria-label=\"Fish selection\">\n<mat-chip [ngStyle]=\"{'background-color':getColor(campaignStatus)}\" class=\"status font-style content\">{{campaignStatus}}</mat-chip>\n</mat-chip-list>\n</mat-card-content>\n       \n    <mat-card-title fxLayoutAlign=\"start\" class=\"name font-style content\" >{{name}}</mat-card-title>\n    <mat-card-content fxLayoutAlign=\"start\" class=\"objective font-style content\">Objective:{{objective}}</mat-card-content>\n     <mat-card-content fxLayoutAlign=\"start\" class=\"font-style content\">Promo Code:{{promocode}}</mat-card-content>\n    <mat-card-content fxLayoutAlign=\"start\" class=\"font-style content\">Total Coupons:{{totalCoupons}}</mat-card-content>\n    <mat-card-content fxLayoutAlign=\"start\" class=\"font-style content\">Used Coupons:{{usedCoupons}}</mat-card-content>\n    <mat-card-content fxLayoutAlign=\"start\" class=\"font-style content\">MaximumLimit:{{maximumLimit}}</mat-card-content>\n  </mat-card>\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns-details/campaigns-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaigns-details/campaigns-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.sm=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"10%\">\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n      <i class=\"material-icons back-btn\" (click)=\"back()\">\n          keyboard_backspace\n  </i>\n    <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n      <mat-label>Campaign Status</mat-label>\n      <mat-select [(ngModel)]=\"Status\" (ngModelChange)=\"onChange($event)\">\n        <mat-option *ngFor=\"let c of CampaignStatus\" [value]=\"c.value\">\n          {{c.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n            \n \n<div fxLayout=\"column\" class=\"space\">\n    <mat-card class=\"campaign\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n      fxLayoutGap=\"20px\">\n      <button mat-button class=\"icon\" (click)=\"edit()\">\n        <i class=\"material-icons\">\n            edit\n        </i>\n    </button>\n      <br><br><br>\n      <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n          <mat-card-title fxLayoutAlign=\"start\">Start Date: {{campaign?.startDate|date:\"dd LLLL yyyy\" }}</mat-card-title>\n           <div *ngIf=\"campaignStatus==='ENDED'; else elseBlock\">End date: {{campaign?.endDate|date:\"dd LLLL yyyy\"}}</div>\n<ng-template #elseBlock></ng-template>\n<mat-card-title fxLayoutAlign=\"start\">Expiry date: {{campaign?.expiryDate|date:\"dd LLLL yyyy\"}}</mat-card-title>\n      \n          <mat-card-title fxLayoutAlign=\"start\">End date: {{campaign?.endDate|date:\"dd LLLL yyyy\"}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Promo Code: {{campaign?.promocode}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Discount Percent: {{campaign?.discountPercent}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">MaximumLimit: {{campaign?.maximumLimit}} </mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Maximum Discount Amount: {{campaign?.maxDiscountAmount}} </mat-card-title>\n          <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n              <button mat-raised-button color=\"primary\" (click)=\"start()\" class=\"start\">Start\n              </button>\n              <button mat-raised-button color=\"primary\" (click)=\"end()\" class=\"reject\">End\n              </button>\n          </div>\n        \n        </div>\n      </div>\n    </mat-card>\n</div>\n    \n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaigns.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n  Campaigns\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n  <mat-form-field fxFlex=20%>\n    <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n  </mat-form-field>\n</div>\n<div fxLayout=\"column wrap\">\n<div fxLayout.xs=\"column\" fxLayout.lg=\"row wrap\" fxLayoutGap=\"50px\" class=\"card\"\nfxLayoutAlign.lt-sm=\"center center\">\n  <app-campaign-card *ngFor=\"let campaign of campaigns | paginate: { itemsPerPage: 10, currentPage: p}| filter:term\"\n    [campaign]=\"campaign\">\n  </app-campaign-card>\n</div>\n   <pagination-controls (pageChange)=\"p = $event\" fxLayoutAlign=\"center center\" class=\"paginator font-style\"></pagination-controls>\n</div>\n\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n  <button mat-fab color=\"primary\" (click)=\"add()\">\n      <i class=\"material-icons\">\n          add\n      </i>\n  </button>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/edit-campaign/edit-campaign.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/edit-campaign/edit-campaign.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"campaignForm\"  (ngSubmit)=\"onSubmit()\">\n\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Promo Code</mat-label>\n                    <input matInput maxlength=\"10\" #input placeholder=\"promo code\" formControlName=\"promocode\" [(ngModel)]=\"pc.promocode\" required class=\"font-style\">\n       \n                </mat-form-field>\n                     <button mat-raised-button class=\"btn font-style\" [disabled]='!campaignForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n                        </div>\n                        \n    </form>\n\n\n\n"

/***/ }),

/***/ "./src/app/campaigns/add-campaign/add-campaign.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/campaigns/add-campaign/add-campaign.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background-color: white;\n}\n\n.controles-container{\n  width: 100%;\n  padding: 5%;    \n}\n\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.controles-container > * {\n  width: 100%;\n  }\n\n.btn-dialog-close{\n      width: 45px;\n      min-width: 0px !important;\n      height: 40px;\n      padding: 0px !important;\n    }\n\n.button {\n      padding-bottom: 21.5px;\n  }\n\n.btn {\n      width: 16em; height: 60px;\n    \n     }\n\n.col {\n      width: 80%;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2FkZC1jYW1wYWlnbi9hZGQtY2FtcGFpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWDs7QUFHRjtNQUNNLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLHVCQUF1QjtJQUN6Qjs7QUFFQTtNQUNFLHNCQUFzQjtFQUMxQjs7QUFFRjtNQUNNLFdBQVcsRUFBRSxZQUFZOztLQUUxQjs7QUFFTDtNQUNNLFVBQVU7SUFDWiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9hZGQtY2FtcGFpZ24vYWRkLWNhbXBhaWduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udHJvbGVzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlOyAgICBcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cblxuLmJ0bi1kaWFsb2ctY2xvc2V7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMS41cHg7XG4gIH1cbiAgXG4uYnRuIHtcbiAgICAgIHdpZHRoOiAxNmVtOyBoZWlnaHQ6IDYwcHg7XG4gICAgXG4gICAgIH1cbiAgXG4uY29sIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/campaigns/add-campaign/add-campaign.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/campaigns/add-campaign/add-campaign.component.ts ***!
  \******************************************************************/
/*! exports provided: AddCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampaignComponent", function() { return AddCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_campaigns_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/campaigns.service */ "./src/app/campaigns/service/campaigns.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddCampaignComponent = /** @class */ (function () {
    function AddCampaignComponent(campaignService, fb, dialogRef, data) {
        this.campaignService = campaignService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.campaignForm = this.fb.group({
            name: ['', []],
            objective: ['', []],
            startDate: ['', []],
            endDate: ['', []],
            expiryDate: ['', []],
            promocode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_]+')]],
            discountPercent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            totalCoupons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            usedCoupons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            campaignStatus: ['STARTED', []],
            maxDiscountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            targetCustomers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]]
        });
    }
    AddCampaignComponent.prototype.onClose = function () {
        this.campaignForm.reset();
        this.dialogRef.close();
    };
    AddCampaignComponent.prototype.ngOnInit = function () {
    };
    AddCampaignComponent.prototype.onSubmit = function () {
        console.log("form value", this.campaignForm.value);
        this.dialogRef.close(this.campaignForm.value);
    };
    AddCampaignComponent.ctorParameters = function () { return [
        { type: _service_campaigns_service__WEBPACK_IMPORTED_MODULE_2__["CampaignsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AddCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-campaign',
            template: __webpack_require__(/*! raw-loader!./add-campaign.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaigns/add-campaign/add-campaign.component.html"),
            styles: [__webpack_require__(/*! ./add-campaign.component.css */ "./src/app/campaigns/add-campaign/add-campaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], AddCampaignComponent);
    return AddCampaignComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaign-card/campaign-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/campaigns/campaign-card/campaign-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.name {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n\n.campaigneditdelete\n{\n    flex-direction: row;\n    align-items: center;\n\n}\n\n.my-card2 {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    height: 370px;\n}\n\n.my-card2:hover {\n    \n    box-shadow: 0 7px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.content {\n    font-size: 1.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWduLWNhcmQvY2FtcGFpZ24tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUsK0NBQStDO0lBQy9DLGFBQWE7QUFDakI7O0FBRUE7O0lBRUkscUVBQXFFO0FBQ3pFOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWduLWNhcmQvY2FtcGFpZ24tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1wYWlnbmVkaXRkZWxldGVcbntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLm15LWNhcmQyIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gICAgaGVpZ2h0OiAzNzBweDtcbn1cblxuLm15LWNhcmQyOmhvdmVyIHtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDdweCAyOHB4IHJnYmEoMCwwLDAsMC4xNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/campaigns/campaign-card/campaign-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/campaigns/campaign-card/campaign-card.component.ts ***!
  \********************************************************************/
/*! exports provided: CampaignCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignCardComponent", function() { return CampaignCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CampaignCardComponent = /** @class */ (function () {
    function CampaignCardComponent(router) {
        this.router = router;
    }
    CampaignCardComponent.prototype.ngOnInit = function () {
        console.log('Campaign data is:', this.campaign);
        this.id = this.campaign.id;
        this.name = this.campaign.name;
        this.objective = this.campaign.objective;
        this.startDate = this.campaign.startDate;
        this.expiryDate = this.campaign.expiryDate;
        this.promocode = this.campaign.promocode;
        this.discountPercent = this.campaign.discountPercent;
        this.totalCoupons = this.campaign.totalCoupons;
        this.usedCoupons = this.campaign.usedCoupons;
        this.maximumLimit = this.campaign.maximumLimit;
        this.maxDiscountAmount = this.campaign.maxDiscountAmount;
        this.campaignStatus = this.campaign.campaignStatus;
    };
    CampaignCardComponent.prototype.ok = function () {
        console.log(this.id);
        this.router.navigate(['/campaigns/details', this.id]);
    };
    CampaignCardComponent.prototype.getColor = function (campaignStatus) {
        switch (campaignStatus) {
            case 'STARTED':
                return '#F57C00';
            case 'CREATED':
                return '#3D5AFE';
            case 'FAILURE':
                return '#757575';
            case 'ENDED':
                return '#F44336';
            case 'IN_PROGRESS':
                return '#FFEA00';
            case 'SUCCESS':
                return '#76FF03';
        }
    };
    CampaignCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CampaignCardComponent.prototype, "campaign", void 0);
    CampaignCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campaign-card',
            template: __webpack_require__(/*! raw-loader!./campaign-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaign-card/campaign-card.component.html"),
            styles: [__webpack_require__(/*! ./campaign-card.component.css */ "./src/app/campaigns/campaign-card/campaign-card.component.css")]
        })
    ], CampaignCardComponent);
    return CampaignCardComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaigns-details/campaigns-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/campaigns/campaigns-details/campaigns-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".campaign {\n    margin-bottom: 40px;\n    margin-left: 450px;\n     height: 480px; \n    width: 55%;\n    margin-top: 50px;\n}\n\n.campaignstartend\n{\n    margin-left: 100px;\n}\n\n.status {\n    margin-top: 10px;\n    padding-left: 1200px;\n}\n\n@media only screen and (max-width: 600px) {\n    .campaign {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n\n    .icon{\n        margin-left: 80%;\n        background-color: wheat;\n    }\n\n\n    mat-card-title {\n        font-size: 1.4em;\n    }\n\n    .status {\n        margin-top: 20px;\n        padding-right: 60x;\n        padding-left: 0px;\n    }\n}\n\n.icon{\n    margin-left: 80%;\n    background-color: transparent;\n}\n\n.doc {\n    margin-top: 70px;\n}\n\n.space {\n    padding-bottom: 10%;\n}\n\n.back-btn {\n    margin-top: 0px;\n    margin-right: 20px;\n    font-size: 50px;\n    background-color: transparent;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWducy1kZXRhaWxzL2NhbXBhaWducy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0tBQ2pCLGFBQWE7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjs7O0lBR0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWducy1kZXRhaWxzL2NhbXBhaWducy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcGFpZ24ge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xuICAgICBoZWlnaHQ6IDQ4MHB4OyBcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jYW1wYWlnbnN0YXJ0ZW5kXG57XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTIwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhbXBhaWduIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgLmljb257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgIH1cblxuXG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbn1cblxuLmljb257XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRvYyB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLnNwYWNlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uYmFjay1idG4ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/campaigns/campaigns-details/campaigns-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/campaigns/campaigns-details/campaigns-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: CampaignsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsDetailsComponent", function() { return CampaignsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_campaigns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/campaigns.service */ "./src/app/campaigns/service/campaigns.service.ts");
/* harmony import */ var _edit_campaign_edit_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-campaign/edit-campaign.component */ "./src/app/campaigns/edit-campaign/edit-campaign.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var CampaignsDetailsComponent = /** @class */ (function () {
    function CampaignsDetailsComponent(router, campaignService, activatedRoute, route, matDialog, notificationService, location) {
        this.router = router;
        this.campaignService = campaignService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.location = location;
        this.CampaignStatus = [
            { value: 'IN_PROGRESS', viewValue: 'IN_PROGRESS' },
            { value: 'SUCCESS', viewValue: 'SUCCESS' },
            { value: 'FAILURE', viewValue: 'FAILURE' },
            { value: 'CREATED', viewValue: 'CREATED' },
            { value: 'ENDED', viewValue: 'ENDED' },
            { value: 'STARTED', viewValue: 'STARTED' }
        ];
    }
    CampaignsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log('ParamMap id', this.id);
        this.campaignService.getCampaignsById(this.route.snapshot.paramMap.get('id')).subscribe(function (res) {
            _this.campaign = res.data;
            console.log('Response hello', typeof (res.data), res.data);
        });
    };
    CampaignsDetailsComponent.prototype.edit = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.data = {
            promocode: this.campaign,
        };
        var dRef = this.matDialog.open(_edit_campaign_edit_campaign_component__WEBPACK_IMPORTED_MODULE_4__["EditCampaignComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.campaignService.updateCampaignById(_this.id, _this.campaign).subscribe(function (response) {
                    _this.notificationService.success('Campaign updated successfully!!'),
                        function (error) {
                            _this.notificationService.warn('Can\'t update ');
                        };
                });
            }
        });
    };
    CampaignsDetailsComponent.prototype.onChange = function (newValue) {
        var _this = this;
        console.log('Campaign ', this.campaign);
        console.log(Object.values(this.campaign), Object.values(this.campaign));
        this.campaign.campaignStatus = newValue;
        this.campaignService.updateCampaignById(this.id, this.campaign).subscribe(function (response) {
            _this.notificationService.success('Campaign status updated successfully!!');
        }, function (error) { return _this.notificationService.warn(error); });
    };
    ;
    CampaignsDetailsComponent.prototype.start = function () {
        var _this = this;
        this.campaign.campaignStatus = 'STARTED';
        console.log(this.campaign, 'campaign started');
        this.campaignService.updateCampaignById(this.id, this.campaign).subscribe(function (response) {
            console.log(_this.campaign, 'campaign started -->');
            _this.notificationService.success('Campaign started successfully!!');
        }, function (error) { return _this.notificationService.warn(error); });
    };
    CampaignsDetailsComponent.prototype.end = function () {
        var _this = this;
        this.campaign.campaignStatus = 'ENDED';
        this.campaign.endDate = new Date();
        console.log(this.campaign.endDate);
        console.log(this.campaign, 'campaign ended');
        this.campaignService.updateCampaignById(this.id, this.campaign).subscribe(function (response) {
            console.log(_this.campaign, 'campaign ended -->');
            _this.notificationService.success('Campaign ended successfully!!');
        }, function (error) { return _this.notificationService.warn(error); });
    };
    CampaignsDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    CampaignsDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_campaigns_service__WEBPACK_IMPORTED_MODULE_3__["CampaignsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: src_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    CampaignsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campaigns-details',
            template: __webpack_require__(/*! raw-loader!./campaigns-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns-details/campaigns-details.component.html"),
            styles: [__webpack_require__(/*! ./campaigns-details.component.css */ "./src/app/campaigns/campaigns-details/campaigns-details.component.css")]
        })
    ], CampaignsDetailsComponent);
    return CampaignsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaigns-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/campaigns/campaigns-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CampaignsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsRoutingModule", function() { return CampaignsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns.component */ "./src/app/campaigns/campaigns.component.ts");
/* harmony import */ var _campaigns_details_campaigns_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaigns-details/campaigns-details.component */ "./src/app/campaigns/campaigns-details/campaigns-details.component.ts");





var routes = [{ path: '', component: _campaigns_component__WEBPACK_IMPORTED_MODULE_3__["CampaignsComponent"] },
    { path: 'details/:id', component: _campaigns_details_campaigns_details_component__WEBPACK_IMPORTED_MODULE_4__["CampaignsDetailsComponent"] },
];
var CampaignsRoutingModule = /** @class */ (function () {
    function CampaignsRoutingModule() {
    }
    CampaignsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CampaignsRoutingModule);
    return CampaignsRoutingModule;
}());



/***/ }),

/***/ "./src/app/campaigns/campaigns.component.css":
/*!***************************************************!*\
  !*** ./src/app/campaigns/campaigns.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-campaign-card {\n    \n    width: 25%;\n    margin-bottom: 20px;\n    \n    \n}\n\n.paginator ::ng-deep .ngx-pagination .current {\n    background: #344955;\n    color: white;\n    font-size: 1.5em;\n    border-radius: 10px;\n    }\n\n@media only screen and (max-width: 600px) {\n   \n    app-campaign-card {\n        width: 75%;\n    }\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWducy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkI7O0FBRUo7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbnMvY2FtcGFpZ25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC1jYW1wYWlnbi1jYXJkIHtcbiAgICBcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgXG59XG5cbi5wYWdpbmF0b3IgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gICAgYmFja2dyb3VuZDogIzM0NDk1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgXG4gICAgYXBwLWNhbXBhaWduLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/campaigns/campaigns.component.ts":
/*!**************************************************!*\
  !*** ./src/app/campaigns/campaigns.component.ts ***!
  \**************************************************/
/*! exports provided: CampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsComponent", function() { return CampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_campaigns_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/campaigns.service */ "./src/app/campaigns/service/campaigns.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-campaign/add-campaign.component */ "./src/app/campaigns/add-campaign/add-campaign.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");






var CampaignsComponent = /** @class */ (function () {
    function CampaignsComponent(campaignservice, matDialog, notificationService) {
        this.campaignservice = campaignservice;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.p = 1;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    CampaignsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.campaignservice.getCampaigns().subscribe(function (res) {
            _this.campaigns = res.data;
            console.log(res, 'parent');
        });
    };
    CampaignsComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '45%';
        var dRef = this.matDialog.open(_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_4__["AddCampaignComponent"], dialogConfig);
        dRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.campaignservice.addCampaign(result)
                    .subscribe(function (response) {
                    _this.notificationService.success(' Campaign Added successfully');
                    _this.getCampaignsInfo();
                });
            }
        });
    };
    CampaignsComponent.prototype.getCampaignsInfo = function () {
        var _this = this;
        return this.campaignservice.getCampaigns().subscribe(function (res) {
            _this.campaigns = res.data;
        });
    };
    CampaignsComponent.ctorParameters = function () { return [
        { type: _service_campaigns_service__WEBPACK_IMPORTED_MODULE_2__["CampaignsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], CampaignsComponent.prototype, "paginator", void 0);
    CampaignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campaigns',
            template: __webpack_require__(/*! raw-loader!./campaigns.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns.component.html"),
            styles: [__webpack_require__(/*! ./campaigns.component.css */ "./src/app/campaigns/campaigns.component.css")]
        })
    ], CampaignsComponent);
    return CampaignsComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/campaigns.module.ts":
/*!***********************************************!*\
  !*** ./src/app/campaigns/campaigns.module.ts ***!
  \***********************************************/
/*! exports provided: CampaignsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsModule", function() { return CampaignsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns-routing.module */ "./src/app/campaigns/campaigns-routing.module.ts");
/* harmony import */ var _campaigns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaigns.component */ "./src/app/campaigns/campaigns.component.ts");
/* harmony import */ var _campaign_card_campaign_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campaign-card/campaign-card.component */ "./src/app/campaigns/campaign-card/campaign-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-campaign/add-campaign.component */ "./src/app/campaigns/add-campaign/add-campaign.component.ts");
/* harmony import */ var _edit_campaign_edit_campaign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-campaign/edit-campaign.component */ "./src/app/campaigns/edit-campaign/edit-campaign.component.ts");
/* harmony import */ var _campaigns_details_campaigns_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./campaigns-details/campaigns-details.component */ "./src/app/campaigns/campaigns-details/campaigns-details.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
















var CampaignsModule = /** @class */ (function () {
    function CampaignsModule() {
    }
    CampaignsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_campaigns_component__WEBPACK_IMPORTED_MODULE_4__["CampaignsComponent"], _campaign_card_campaign_card_component__WEBPACK_IMPORTED_MODULE_5__["CampaignCardComponent"], _add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_12__["AddCampaignComponent"], _edit_campaign_edit_campaign_component__WEBPACK_IMPORTED_MODULE_13__["EditCampaignComponent"], _campaigns_details_campaigns_details_component__WEBPACK_IMPORTED_MODULE_14__["CampaignsDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignsRoutingModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_15__["AvatarModule"]
            ],
            entryComponents: [_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_12__["AddCampaignComponent"], _edit_campaign_edit_campaign_component__WEBPACK_IMPORTED_MODULE_13__["EditCampaignComponent"]],
        })
    ], CampaignsModule);
    return CampaignsModule;
}());



/***/ }),

/***/ "./src/app/campaigns/edit-campaign/edit-campaign.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/campaigns/edit-campaign/edit-campaign.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\nmat-toolbar {\n    background-color: white;\n}\n\n.btn {\n  width: 16em; height: 60px;\n }\n\n.btn-dialog-close{\n    width: 45px;\n    min-width: 0px !important;\n    height: 40px;\n    padding: 0px !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2VkaXQtY2FtcGFpZ24vZWRpdC1jYW1wYWlnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXLEVBQUUsWUFBWTtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9lZGl0LWNhbXBhaWduL2VkaXQtY2FtcGFpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDE2ZW07IGhlaWdodDogNjBweDtcbiB9XG5cbi5idG4tZGlhbG9nLWNsb3Nle1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/campaigns/edit-campaign/edit-campaign.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/campaigns/edit-campaign/edit-campaign.component.ts ***!
  \********************************************************************/
/*! exports provided: EditCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignComponent", function() { return EditCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_campaigns_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/campaigns.service */ "./src/app/campaigns/service/campaigns.service.ts");






var EditCampaignComponent = /** @class */ (function () {
    function EditCampaignComponent(dialogRef, fb, route, router, campaignService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.campaignService = campaignService;
        this.campaignForm = this.fb.group({
            promocode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z0-9]*$')]]
        });
        this.pc = data.promocode;
        console.log(this.pc, 'promocode');
    }
    EditCampaignComponent.prototype.ngOnInit = function () {
    };
    EditCampaignComponent.prototype.onClose = function () {
        this.campaignForm.reset();
        this.dialogRef.close();
    };
    EditCampaignComponent.prototype.onSubmit = function () {
        console.log(this.campaignForm.value);
        this.dialogRef.close(this.campaignForm.value);
    };
    EditCampaignComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_campaigns_service__WEBPACK_IMPORTED_MODULE_5__["CampaignsService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EditCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-campaign',
            template: __webpack_require__(/*! raw-loader!./edit-campaign.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaigns/edit-campaign/edit-campaign.component.html"),
            styles: [__webpack_require__(/*! ./edit-campaign.component.css */ "./src/app/campaigns/edit-campaign/edit-campaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], EditCampaignComponent);
    return EditCampaignComponent;
}());



/***/ }),

/***/ "./src/app/campaigns/service/campaigns.service.ts":
/*!********************************************************!*\
  !*** ./src/app/campaigns/service/campaigns.service.ts ***!
  \********************************************************/
/*! exports provided: CampaignsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsService", function() { return CampaignsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CampaignsService = /** @class */ (function () {
    function CampaignsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].campaignService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].campaignBaseApi;
    }
    CampaignsService.prototype.getCampaigns = function () {
        return this.httpClient.get(this.baseUrl);
    };
    CampaignsService.prototype.getCampaignsById = function (id) {
        return this.httpClient.get(this.baseUrl + '/' + id);
    };
    CampaignsService.prototype.addCampaign = function (campaign) {
        return this.httpClient.post(this.baseUrl + '/addcampaign', campaign);
    };
    CampaignsService.prototype.updateCampaignById = function (id, campaign) {
        console.log(campaign, 'campaign service');
        return this.httpClient.patch(this.baseUrl + '/' + id, campaign);
    };
    CampaignsService.prototype.deleteCampaign = function (id) {
        return this.httpClient.delete(this.baseUrl + '/' + id);
    };
    CampaignsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CampaignsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CampaignsService);
    return CampaignsService;
}());



/***/ })

}]);
//# sourceMappingURL=campaigns-campaigns-module-es5.js.map