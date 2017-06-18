webpackJsonp([2,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarginModel = (function () {
    function MarginModel() {
    }
    return MarginModel;
}());
var AppComponent = (function () {
    function AppComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.margin = new MarginModel();
        this.calculateMargin = function (model) {
            if (!model.cost || !model.revenues) {
                return;
            }
            else {
                _this.margin.profit = _this.make2Digits((model.revenues - model.cost));
                _this.margin.grossMargin = (_this.margin.profit / model.revenues) * 100;
                var markup = ((model.revenues / model.cost) / model.cost);
                var markupStr = markup.toFixed(2);
                _this.margin.markup = parseInt(markupStr);
            }
        };
        var initParams = {
            appId: '302983833491857',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    AppComponent.prototype.make2Digits = function (number) {
        var formatted = number.toFixed(2);
        var int = parseInt(formatted);
        return int;
    };
    AppComponent.prototype.reset = function () {
        this.margin = new MarginModel();
    };
    AppComponent.prototype.sendMail = function () {
        window.location.href = "mailto:johnmeguira@gmail.com?subject=Margins App Request";
    };
    AppComponent.prototype.share = function () {
        var params = {
            href: 'https://github.com/zyra/ngx-facebook',
            method: 'share'
        };
        this.fb.ui(params)
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.error(e); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(168),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "#main-card{\n\n  padding: 1em;\n  width: 45%;\n}\n.example-full-width {\n  width: 100%;\n}\n#reset{\n  width: 20%; background-color: #00E676; color: white\n}\n#reset:hover{\n  background-color: #268EFB;\n  color: white;\n}\n\n#mailSender{\n  color: white !important;\n  font-weight: 600;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100vh\">\n  <md-card id=\"main-card\" class=\"animated bounceIn\">\n    <div layout=\"row\" layout-align=\"center center\">\n      <p md-card-title style=\"color: #22B7F3\">Margins Calculator</p>\n    </div>\n    <div md-card-content layout=\"column\" layout-align=\"center center\" layout-margin>\n      <md-input-container class=\"example-full-width mb-3\">\n        <input mdInput placeholder=\"Revenues\" [(ngModel)]=\"margin.revenues\" type=\"number\"\n               (keyup)=\"calculateMargin(margin)\" (keypress)=\"calculateMargin(margin)\">\n      </md-input-container>\n      <md-input-container class=\"example-full-width mb-3\">\n        <input mdInput placeholder=\"Cost\" [(ngModel)]=\"margin.cost\" type=\"number\" (keyup)=\"calculateMargin(margin)\"\n               (keypress)=\"calculateMargin(margin)\">\n      </md-input-container>\n      <md-input-container class=\"example-full-width mb-3\">\n        <input mdInput placeholder=\"Markup (%)\" [(ngModel)]=\"margin.markup\" type=\"number\">\n      </md-input-container>\n      <md-input-container class=\"example-full-width mb-3\">\n        <input mdInput placeholder=\"Gross Margin (%)\" [(ngModel)]=\"margin.grossMargin\" type=\"number\">\n      </md-input-container>\n\n      <md-input-container class=\"example-full-width mb-3\">\n        <input mdInput placeholder=\"Profit\" [(ngModel)]=\"margin.profit\" type=\"number\">\n      </md-input-container>\n    </div>\n    <div md-card-footer layout=\"row\" layout-margin layout-align=\"space-between center\">\n      <button md-button id=\"reset\" (click)=\"reset()\">RESET</button>\n      <p style=\"color: #666\">Margins Calculator By <span style=\"color: #2196F3; font-weight: 700\"><a\n        href=\"https://www.vatreo.com/\" target=\"_blank\">Vatreo</a></span></p>\n    </div>\n  </md-card>\n  <p>Got a question, request ? <span (click)=\"sendMail()\" id=\"mailSender\">Contact the owner</span></p>\n\n\n\n</div>\n\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map