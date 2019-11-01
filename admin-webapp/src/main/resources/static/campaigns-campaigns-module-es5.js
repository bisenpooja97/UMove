(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaigns-campaigns-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/add-campaign/add-campaign.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/add-campaign/add-campaign.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n\n<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"campaignForm\" (ngSubmit)=\"onSubmit()\">\n  <h2>Create a new campaign</h2>\n  <div fxFlex=50% fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n    fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Campaign name</mat-label>\n        <input matInput #input placeholder=\"Campaign Name\" formControlName=\"name\" required>\n      </mat-form-field>\n      \n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Objective</mat-label>\n        <input matInput #input placeholder=\"Enter objective\" formControlName=\"objective\" required>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a start date\" formControlName=\"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Upper Bound</mat-label>\n        <input matInput #input placeholder=\"upper Bound\" formControlName=\"upperBound\" required>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n    \n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Promo code</mat-label>\n        <input matInput #input placeholder=\"Promo code\" formControlName=\"promocode\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Discount Percent</mat-label>\n        <input matInput #input placeholder=\"Discount Percent\" formControlName=\"discountPercent\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose an expired date\" formControlName=\"expiredDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFlex>\n        <mat-label>Total Coupons</mat-label>\n        <input matInput #input placeholder=\"Total Coupons\" formControlName=\"totalCoupons\" required>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n    <button mat-raised-button class=\"btn\" [disabled]='!campaignForm.valid' color=\"primary\">\n      Submit\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaign-card/campaign-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaign-card/campaign-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"my-card\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\" fxLayoutGap=\"20px\" (click)=\"ok()\">\n\n        <mat-card-title fxLayoutAlign=\"end\" [ngStyle]=\"{'background-color':getColor(campaignStatus)}\" class=\"status\">{{campaignStatus}}</mat-card-title>\n        \n    <mat-card-title fxLayoutAlign=\"start\" class=\"name\" >{{name}}</mat-card-title>\n    <mat-card-content fxLayoutAlign=\"start\" class=\"objective\">Objective:{{objective}}</mat-card-content>\n     <mat-card-content fxLayoutAlign=\"start\">Promo Code:{{promocode}}</mat-card-content>\n    <!-- <mat-card-content fxLayoutAlign=\"start\">Discount Percent:{{discountPercent}}</mat-card-content> -->\n    <!-- <mat-card-content fxLayoutAlign=\"start\">Upper Bound:{{upperBound}}</mat-card-content> -->\n    <mat-card-content fxLayoutAlign=\"start\">Total Coupons:{{totalCoupons}}</mat-card-content>\n    <mat-card-content fxLayoutAlign=\"start\">Used Coupons:{{usedCoupons}}</mat-card-content>\n  </mat-card>\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns-details/campaigns-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaigns-details/campaigns-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.sm=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"10%\">\n  <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"0px\">\n    <mat-form-field appearance=\"outline\" fxFlex class=\"status\">\n      <mat-label>Campaign Status</mat-label>\n      <mat-select [(ngModel)]=\"Status\" (ngModelChange)=\"onChange($event)\">\n        <mat-option *ngFor=\"let c of CampaignStatus\" [value]=\"c.value\">\n          {{c.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<div fxLayout=\"column\">\n    <mat-card class=\"campaign\" fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxLayout=\"column\"\n      fxLayoutGap=\"20px\">\n      <button mat-button class=\"icon\" (click)=\"edit()\">\n        <i class=\"material-icons\">\n            edit\n        </i>\n    </button>\n      <br><br><br>\n      <div fxFlex=50% fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20%\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n        fxLayoutAlign=\"center center\">\n\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.lt-md=\"0px\" class=\"col\">\n          <mat-card-title fxLayoutAlign=\"start\">Start Date: {{campaign?.startDate|date:\"dd LLLL yyyy\" }}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"end\">Expired date: {{campaign?.expiredDate|date:\"dd LLLL yyyy\"}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Promo Code: {{campaign?.promocode}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Discount Percent: {{campaign?.discountPercent}}</mat-card-title>\n          <mat-card-title fxLayoutAlign=\"start\">Upper Bound: {{campaign?.upperBound}}         \n          </mat-card-title>\n           <div class=\"campaignestartend\">\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n            <button mat-raised-button color=\"primary\" (click)=\"start()\" class=\"start\">\n                Start\n            </button>\n            <button mat-raised-button color=\"primary\" (click)=\"end()\" class=\"end\">\n                    End\n                </button>\n           </div>\n        </div>    \n        </div>\n      </div>\n    </mat-card>\n</div>\n    \n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/campaigns.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/campaigns.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"15px\" class=\"header\">\n  Campaigns\n</h1>\n<div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"search\" fxLayout.gt-xs=\"row\">\n  <mat-form-field fxFlex=20%>\n    <input matInput [(ngModel)]=\"term\" placeholder=\"Search\">\n  </mat-form-field>\n</div>\n<div fxLayout.xs=\"column\" fxLayout.gt=\"row\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" class=\"card\">\n  <app-campaign-card *ngFor=\"let campaign of campaigns | paginate: { itemsPerPage: 10, currentPage: p}| filter:term\"\n    [campaign]=\"campaign\">\n  </app-campaign-card>\n   <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"end\" class=\"add-button\">\n  <button mat-fab color=\"primary\" (click)=\"add()\">\n      <i class=\"material-icons\">\n          add\n      </i>\n  </button>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaigns/edit-campaign/edit-campaign.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaigns/edit-campaign/edit-campaign.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n        <span class=\"fill-remaining-space\"></span>\n        <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"campaignForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\" class=\"form\"\n                fxLayoutAlign=\"center center\">\n\n                <mat-form-field appearance=\"outline\" fxFlex>\n                    <mat-label class=\"font-style\">Promo Code</mat-label>\n                    <input matInput maxlength=\"6\" #input placeholder=\"promo code\" formControlName=\"promocode\" required class=\"font-style\">\n       \n                </mat-form-field>\n                     <button mat-raised-button class=\"btn font-style\" [disabled]='!campaignForm.valid' color=\"primary\">\n                                Submit\n                            </button>\n                        </div>\n                        \n    </form>\n\n\n\n"

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
            expiredDate: ['', []],
            promocode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Z0-9]+')]],
            discountPercent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            upperBound: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            totalCoupons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            usedCoupons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]],
            campaignStatus: ['Created', []],
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

module.exports = ".my-card {\n    margin-bottom: 40px;\n    height: 300px;\n    cursor: pointer;\n    \n}\n\n.my-card:hover {\n    transform: scale(1.1);\n}\n\n.name {\n    padding-top: 10%;\n}\n\n.status {\n    font-weight: bold;\n    font-size: 1em;\n    color: white;\n}\n\n.campaigneditdelete\n{\n    flex-direction: row;\n    align-items: center;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWduLWNhcmQvY2FtcGFpZ24tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlOztBQUVuQjs7QUFFQTtJQUdJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9jYW1wYWlnbi1jYXJkL2NhbXBhaWduLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufVxuXG4ubXktY2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1wYWlnbmVkaXRkZWxldGVcbntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuXG4iXX0= */"

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
        this.endDate = this.campaign.endDate;
        this.promocode = this.campaign.promocode;
        this.discountPercent = this.campaign.discountPercent;
        this.upperBound = this.campaign.upperBound;
        this.totalCoupons = this.campaign.totalCoupons;
        this.usedCoupons = this.campaign.usedCoupons;
        this.campaignStatus = this.campaign.campaignStatus;
    };
    CampaignCardComponent.prototype.ok = function () {
        console.log(this.id);
        this.router.navigate(['/campaigns/details', this.id]);
    };
    CampaignCardComponent.prototype.getColor = function (campaignStatus) {
        switch (campaignStatus) {
            case 'Created':
                return '#1B5E20';
            case 'Running':
                return '#FFC400';
            case 'Ended':
                return '#F44336';
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

module.exports = ".campaign {\n    margin-bottom: 40px;\n    margin-left: 450px;\n     height: 400px; \n    width: 55%;\n    margin-top: 50px;\n    \n}\n\n.campaignstartend\n{\n    margin-left: 100px;\n}\n\n.status {\n    margin-top: 10px;\n    padding-left: 1200px;\n}\n\n@media only screen and (max-width: 600px) {\n    .campaign {\n        margin-left: 30px;\n        height: 300px;\n        width: 85%;\n    }\n\n    .icon{\n        margin-left: 80%;\n        background-color: wheat;\n    }\n\n\n    mat-card-title {\n        font-size: 1.4em;\n    }\n\n    .status {\n        margin-top: 20px;\n        padding-right: 60x;\n        padding-left: 0px;\n    }\n}\n\n.icon{\n    margin-left: 80%;\n    background-color: transparent;\n}\n\n.doc {\n    margin-top: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWducy1kZXRhaWxzL2NhbXBhaWducy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0tBQ2pCLGFBQWE7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQix1QkFBdUI7SUFDM0I7OztJQUdBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbnMvY2FtcGFpZ25zLWRldGFpbHMvY2FtcGFpZ25zLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wYWlnbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgIGhlaWdodDogNDAwcHg7IFxuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBcbn1cblxuLmNhbXBhaWduc3RhcnRlbmRcbntcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5zdGF0dXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FtcGFpZ24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAuaWNvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgfVxuXG5cbiAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxufVxuXG4uaWNvbntcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZG9jIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuIl19 */"

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






var CampaignsDetailsComponent = /** @class */ (function () {
    function CampaignsDetailsComponent(router, campaignService, activatedRoute, route, matDialog) {
        this.router = router;
        this.campaignService = campaignService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.matDialog = matDialog;
        this.CampaignStatus = [
            { value: 'CREATED', viewValue: 'CREATED' },
            { value: 'RUNNING', viewValue: 'RUNNING' },
            { value: 'ENDED', viewValue: 'ENDED' },
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
                });
            }
        });
    };
    // start()
    // {
    //    console.log(Object.values(this.campaign));
    //   Object.values(this.campaign)[13] = Object(this.campaign);
    //   console.log(Object.values(this.campaign)[13], this.campaign);
    //   this.campaignService.updateCampaignById(this.id,this.campaign).subscribe(
    //     response => {
    //                  console.log('Call Success');
    //                  })
    // }
    CampaignsDetailsComponent.prototype.onChange = function (newValue) {
        var _this = this;
        console.log('Campaign ', this.campaign);
        console.log(Object.values(this.campaign), Object.values(this.campaign));
        this.campaign.campaignStatus = newValue;
        console.log(this.campaign, 'campaign ka status change hona chahiye');
        // console.log(this.campaign.campaignStatus, this.campaign);
        console.log('Id ', this.id);
        this.campaignService.updateCampaignById(this.id, this.campaign).subscribe(function (response) {
            console.log('response ', response);
            console.log('Call Success');
            console.log('Campaign ', _this.campaign);
            // this.notificationService.success('Campaign updated successfully!!');
            //},
            // error => this.notificationService.warn(error),
            // );
        });
    };
    CampaignsDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_campaigns_service__WEBPACK_IMPORTED_MODULE_3__["CampaignsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
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

module.exports = ".header {\n    margin-left: 240px;\n}\n\napp-campaign-card {\n    \n    width: 25%;\n    margin-left: 50px;\n    \n    \n}\n\n.card {\n    margin-left: 18%;\n}\n\n.search {\n    margin-left: 240px;\n    margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 600px) {\n    .card {\n        margin-left: 10%;\n    }\n\n    app-campaign-card {\n        width: 75%;\n    }\n    \n    .search {\n        margin-left: 60px;\n        margin-bottom: 50px;\n    }\n\n    .header {\n        margin-left: 50px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ25zL2NhbXBhaWducy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixpQkFBaUI7OztBQUdyQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWducy9jYW1wYWlnbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbn1cblxuYXBwLWNhbXBhaWduLWNhcmQge1xuICAgIFxuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgXG4gICAgXG59XG4uY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcbn1cblxuLnNlYXJjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgYXBwLWNhbXBhaWduLWNhcmQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cbiJdfQ== */"

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





var CampaignsComponent = /** @class */ (function () {
    function CampaignsComponent(campaignservice, matDialog) {
        this.campaignservice = campaignservice;
        this.matDialog = matDialog;
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
                    // this.notificationService.success(' Campaign Added successfully');
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
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].campaignBaseApi;
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
        console.log(JSON.stringify(campaign), 'campaign service');
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