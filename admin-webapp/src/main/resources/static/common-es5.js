(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/users/service/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/users/service/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userService + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userBaseApi;
    }
    UserService.prototype.getUsers = function () {
        console.log(this.baseUrl);
        return this.httpClient.get(this.baseUrl + '?role=ROLE_USER');
    };
    UserService.prototype.getSupervisors = function () {
        return this.httpClient.get(this.baseUrl + '?role=ROLE_SUPERVISOR');
    };
    UserService.prototype.getUsersById = function (id) {
        return this.httpClient.get(this.baseUrl + '/' + id);
    };
    UserService.prototype.updateUsersById = function (id, user) {
        console.log('Service ID', typeof id);
        console.log("Base URL " + this.baseUrl + "/" + id);
        console.log('user data:', JSON.stringify(user));
        return this.httpClient.patch(this.baseUrl + '/' + id, user);
    };
    UserService.prototype.addUser = function (user) {
        return this.httpClient.post(this.baseUrl + '/adduser', user);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map