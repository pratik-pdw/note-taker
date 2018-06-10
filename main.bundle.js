webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n  \n \n \n <div class=\"container sm-w-50 mx-auto\">\n        <flash-messages></flash-messages>\n     <div class=\"jumbotron\">\n           \n     <form #f=\"ngForm\" (ngSubmit)=\"addNote(f); f.reset()\">\n         <div class=\"form-group\">\n             <label for=\"notetitle\" class=\"h3 font-weight-bold\" >Note Title</label><br>\n             <input type=\"text\" class=\"form-control\" placeholder=\"Note Title\" \n             [(ngModel)]=\"notes.noteTitle\"  name=\"noteTitle\" #noteTitleIp=\"ngModel\" required     autocomplete=\"off\" >\n         </div>\n         <div *ngIf=\"noteTitleIp.errors?.required && noteTitleIp.touched\" class=\"alert alert-danger\"  >\"Required Title\"</div>\n         <div class=\"form-group\">\n                <label for=\"notebody\" class=\"h3 font-weight-bold\">Note Body</label><br>\n                <input type=\"text\" placeholder=\"Note Body\" class=\"form-control\" \n                [(ngModel)]=\"notes.noteBody\"  name=\"noteBody\"  #noteBodyIp=\"ngModel\"   autocomplete=\"off\" required >\n            </div>\n            <div *ngIf=\"noteBodyIp.errors?.required && noteBodyIp.touched\" class=\"alert alert-danger \"  >\"Required Body Text\"</div>\n            <input type=\"submit\" class=\"btn btn-warning btn-block btn-lg\" value=\"Submit Note\">\n     </form>\n    </div>\n </div>\n<hr>\n <div class=\"container\">\n     <div >\n         <div class=\"row\">\n            <div class=\"col-md-6 mt-2\" *ngFor=\"let note of notes\">\n                    <div class=\"card\" >\n                            <div class=\"card-header h5 font-weight-bold\">\n                               {{ note.noteTitle }}&nbsp; \n                               <div class=\"float-right utility-buttons\">\n                                    <button class=\"btn btn-sm btn-primary\" (click)=\"editNote(note)\" >Edit\n                                            <i class=\"far fa-edit\"></i>\n                                       </button> <button class=\"btn btn-sm btn-danger\" (click)=\"removeNote(note.id)\" >Remove\n                                            <i class=\"far fa-trash-alt\"></i>\n                                       </button>\n                               </div>\n                               \n                            </div>\n                            <div class=\"card-body\">\n                              {{ note.noteBody }}\n                            </div>\n                        </div>\n            </div>\n         </div>\n            \n                <br>\n     </div>    \n </div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(flashMessagesService) {
        this.flashMessagesService = flashMessagesService;
        this.isEdit = false;
        if (localStorage.getItem('notes') === null) {
            this.notes = [];
        }
        else {
            this.notes = JSON.parse(localStorage.getItem('notes'));
        }
    }
    AppComponent.prototype.addNote = function (f) {
        if (f.valid) {
            if (this.isEdit) {
                this.localNotes = JSON.parse(localStorage.getItem('notes'));
                for (var i = 0; i < this.localNotes.length; i++) {
                    if (this.localNotes[i].id === this.editNoteId) {
                        this.localNotes[i].noteTitle = f.value.noteTitle;
                        this.localNotes[i].noteBody = f.value.noteBody;
                        break;
                    }
                }
                this.isEdit = false;
                localStorage.setItem('notes', JSON.stringify(this.localNotes));
            }
            else {
                if (localStorage.getItem('notes') === null) {
                    f.value.id = Math.random();
                    this.notes.unshift(f.value);
                    localStorage.setItem('notes', JSON.stringify(this.notes));
                }
                else {
                    this.localNotes = JSON.parse(localStorage.getItem('notes'));
                    f.value.id = Math.random();
                    this.localNotes.unshift(f.value);
                    localStorage.setItem('notes', JSON.stringify(this.localNotes));
                }
            }
        }
        else {
            this.flashMessagesService.show('Both fields are required', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.notes = JSON.parse(localStorage.getItem('notes'));
    };
    AppComponent.prototype.removeNote = function (id) {
        if (localStorage.getItem('notes') === null) {
            this.notes = [];
        }
        else {
            this.localNotes = JSON.parse(localStorage.getItem('notes'));
            for (var i = 0; i < this.localNotes.length; i++) {
                if (id === this.localNotes[i].id) {
                    this.localNotes.splice(i, 1);
                }
            }
            localStorage.setItem('notes', JSON.stringify(this.localNotes));
        }
        this.notes = JSON.parse(localStorage.getItem('notes'));
    };
    AppComponent.prototype.editNote = function (note) {
        this.notes = note;
        this.isEdit = true;
        this.editNoteId = note.id;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand h1\" href=\"#\">NoteTaker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      \n      \n    </div>\n  </nav>\n  <br>\n  <br>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map