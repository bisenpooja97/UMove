(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/fuel/fuel.service.ts":
/*!**************************************!*\
  !*** ./src/app/fuel/fuel.service.ts ***!
  \**************************************/
/*! exports provided: FuelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelService", function() { return FuelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FuelService = class FuelService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fuelBaseApi;
    }
    getFuel() {
        return this.httpClient.get(this.baseUrl);
    }
    createFuel(fuel) {
        return this.httpClient.post(this.baseUrl, fuel);
    }
    getFuelByName(name) {
        console.log(this.baseUrl + '?name=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    }
    updateFuel(name, fuel) {
        return this.httpClient.patch(this.baseUrl + '/' + name, fuel);
    }
};
FuelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FuelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FuelService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let VehicleTypeService = class VehicleTypeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].typeBaseApi;
    }
    getType() {
        return this.httpClient.get(this.baseUrl);
    }
    getVehicleByName(name) {
        console.log("get vehicles by name called");
        console.log(this.baseUrl + '?registrationNo=' + name);
        return this.httpClient.get(this.baseUrl + '?name=' + name);
    }
    createType(VehicleType) {
        return this.httpClient.post(this.baseUrl, VehicleType);
    }
    updateVehicleType(name, type) {
        return this.httpClient.patch(this.baseUrl + '/' + name, type);
    }
};
VehicleTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleTypeService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map