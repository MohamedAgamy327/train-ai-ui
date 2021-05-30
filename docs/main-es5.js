(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Projects\Working\TRAIN-UI\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1giO":
    /*!**********************************************************!*\
      !*** ./src/app/core/directives/menu-toggle.directive.ts ***!
      \**********************************************************/

    /*! exports provided: MenuToggleDirective */

    /***/
    function giO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function () {
        return MenuToggleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var MenuToggleDirective = /*#__PURE__*/function () {
        function MenuToggleDirective(router) {
          _classCallCheck(this, MenuToggleDirective);

          this.router = router;
          this.navlinks = [];
        }

        _createClass(MenuToggleDirective, [{
          key: "closeOtherLinks",
          value: function closeOtherLinks(openLink) {
            this.navlinks.forEach(function (link) {
              if (link !== openLink) {
                link.open = false;
              }
            });
          }
        }, {
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            return this.router.url;
          }
        }]);

        return MenuToggleDirective;
      }();

      MenuToggleDirective.ɵfac = function MenuToggleDirective_Factory(t) {
        return new (t || MenuToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      MenuToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MenuToggleDirective,
        selectors: [["", "menuToggleDirective", ""]]
      });
      /***/
    },

    /***/
    "2tG/":
    /*!***********************************************!*\
      !*** ./src/app/core/services/core.service.ts ***!
      \***********************************************/

    /*! exports provided: CoreService */

    /***/
    function tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreService", function () {
        return CoreService;
      });
      /* harmony import */


      var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums */
      "kfal");
      /* harmony import */


      var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lists */
      "MPAF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      var CoreService = /*#__PURE__*/function () {
        function CoreService(translate) {
          _classCallCheck(this, CoreService);

          this.translate = translate;
          this.sidenavMode = 'side';
          this.sidenavOpen = true;
          this.sideBarFilterClass = _lists__WEBPACK_IMPORTED_MODULE_1__["SideBarList"];
          this.headerFilterClass = _lists__WEBPACK_IMPORTED_MODULE_1__["HeaderList"];
          this.langArray = _lists__WEBPACK_IMPORTED_MODULE_1__["LanguageFlagList"];
          this.currentLanguage = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].language) || 'en';
          this.layout = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].layout) || 'ltr';
          this.selectLangFlag = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].selectLangFlag) || './assets/img/en.png';
          this.collapseSidebar = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].collapseSidebar) === 'true' || false;
          this.dark = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].dark) === 'true' || false;
          this.sideBarColor = Number(localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].sidebarColor)) || 0;
          this.headerColor = Number(localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].headerColor)) || 0;
        }

        _createClass(CoreService, [{
          key: "collapseSidebarChange",
          value: function collapseSidebarChange(event) {
            if (event.checked) {
              this.collapseSidebar = true;
            } else {
              this.collapseSidebar = false;
            }

            localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].collapseSidebar, String(this.collapseSidebar));
          }
        }, {
          key: "sidebarFilter",
          value: function sidebarFilter(selectedFilter) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < this.sideBarFilterClass.length; i++) {
              document.getElementById('main-app').classList.remove(this.sideBarFilterClass[i].colorSelect);

              if (this.sideBarFilterClass[i].colorSelect === selectedFilter.colorSelect) {
                document.getElementById('main-app').classList.add(this.sideBarFilterClass[i].colorSelect);
                localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].sidebarColor, String(i));
              }
            }

            document.querySelector('.radius-circle').classList.remove('radius-circle');
            document.getElementById(selectedFilter.sideBarSelect).classList.add('radius-circle');
          }
        }, {
          key: "headerFilter",
          value: function headerFilter(selectedFilter) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < this.headerFilterClass.length; i++) {
              document.getElementById('main-app').classList.remove(this.headerFilterClass[i].colorSelect);

              if (this.headerFilterClass[i].colorSelect === selectedFilter.colorSelect) {
                document.getElementById('main-app').classList.add(this.headerFilterClass[i].colorSelect);
                localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].headerColor, String(i));
              }
            }

            document.querySelector('.radius-active').classList.remove('radius-active');
            document.getElementById(selectedFilter.headerSelect).classList.add('radius-active');
          }
        }, {
          key: "addClassOnBody",
          value: function addClassOnBody(event) {
            var body = document.body;

            if (event.checked) {
              body.classList.add('dark-theme-active');
            } else {
              body.classList.remove('dark-theme-active');
            }

            localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].dark, String(this.dark));
          }
        }, {
          key: "changeRTL",
          value: function changeRTL(isChecked) {
            if (isChecked) {
              this.layout = 'rtl';
            } else {
              this.layout = 'ltr';
            }

            localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].layout, this.layout);
          }
        }, {
          key: "setLang",
          value: function setLang(lang) {
            localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].language, lang);

            var _iterator = _createForOfIteratorHelper(this.langArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                if (data.value === lang) {
                  this.selectLangFlag = data.img;
                  localStorage.setItem(_enums__WEBPACK_IMPORTED_MODULE_0__["ConstEnum"].selectLangFlag, this.selectLangFlag);
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.translate.use(lang);
          }
        }]);

        return CoreService;
      }();

      CoreService.ɵfac = function CoreService_Factory(t) {
        return new (t || CoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CoreService,
        factory: CoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "59tN":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/token.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function tN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(credentialService) {
          _classCallCheck(this, TokenInterceptor);

          this.credentialService = credentialService;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(httpReq, next) {
            var headers;

            if (this.credentialService.getToken()) {
              headers = httpReq.headers.set('Authorization', "bearer ".concat(this.credentialService.getToken()));
            }

            var newReq = httpReq.clone({
              headers: headers
            });
            return next.handle(newReq);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["CredentialService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "5dmV":
    /*!*******************************************!*\
      !*** ./src/app/shared/material.module.ts ***!
      \*******************************************/

    /*! exports provided: AngularMaterialModule */

    /***/
    function dmV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
        return AngularMaterialModule;
      });
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tree */
      "OLiY");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "y7ui");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "/0xL");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ngx-material-file-input */
      "Z/v2");
      /* harmony import */


      var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ngx-material-timepicker */
      "cw5Z");
      /* harmony import */


      var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ngx-tour-md-menu */
      "PPT2");
      /* harmony import */


      var src_app_core_helpers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! src/app/core/helpers */
      "WSqY");
      /* harmony import */


      var _core_directives__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../core/directives */
      "w0Hg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AngularMaterialModule = function AngularMaterialModule() {
        _classCallCheck(this, AngularMaterialModule);
      };

      AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
        type: AngularMaterialModule
      });
      AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
        factory: function AngularMaterialModule_Factory(t) {
          return new (t || AngularMaterialModule)();
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
          useValue: {
            floatLabel: 'always'
          }
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MAT_DATE_FORMATS"],
          useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MAT_MOMENT_DATE_FORMATS"]
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["DateAdapter"],
          useClass: src_app_core_helpers__WEBPACK_IMPORTED_MODULE_41__["MomentUtcDateAdapter"]
        }],
        imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_35__["CdkTreeModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_39__["NgxMaterialTimepickerModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_37__["NgxMatSelectSearchModule"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_40__["TourMatMenuModule"].forRoot(), ngx_material_file_input__WEBPACK_IMPORTED_MODULE_38__["MaterialFileInputModule"]], _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_35__["CdkTreeModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_39__["NgxMaterialTimepickerModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_37__["NgxMatSelectSearchModule"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_40__["TourMatMenuModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_38__["MaterialFileInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
          declarations: [_core_directives__WEBPACK_IMPORTED_MODULE_42__["MatGridListResponsive"]],
          imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_35__["CdkTreeModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_39__["NgxMaterialTimepickerModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_37__["NgxMatSelectSearchModule"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_40__["TourMatMenuModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_38__["MaterialFileInputModule"]],
          exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_35__["CdkTreeModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_39__["NgxMaterialTimepickerModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_37__["NgxMatSelectSearchModule"], _core_directives__WEBPACK_IMPORTED_MODULE_42__["MatGridListResponsive"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_40__["TourMatMenuModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_38__["MaterialFileInputModule"]]
        });
      })();
      /***/

    },

    /***/
    "6H+C":
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: TokenInterceptor, ErrorInterceptor, LoadingInterceptor */

    /***/
    function HC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./token.interceptor */
      "59tN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return _token_interceptor__WEBPACK_IMPORTED_MODULE_0__["TokenInterceptor"];
      });
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error.interceptor */
      "Nlor");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
      });
      /* harmony import */


      var _loading_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading.interceptor */
      "Pbgd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
        return _loading_interceptor__WEBPACK_IMPORTED_MODULE_2__["LoadingInterceptor"];
      });
      /***/

    },

    /***/
    "6njL":
    /*!********************************************!*\
      !*** ./src/app/core/custom-pipes/index.ts ***!
      \********************************************/

    /*! exports provided: AddSpacePipe */

    /***/
    function njL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _add_space_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-space.pipe */
      "r2hf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AddSpacePipe", function () {
        return _add_space_pipe__WEBPACK_IMPORTED_MODULE_0__["AddSpacePipe"];
      });
      /***/

    },

    /***/
    "7oKN":
    /*!**********************************************!*\
      !*** ./src/app/components/register/index.ts ***!
      \**********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function oKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      "PIYF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
      });
      /***/

    },

    /***/
    "Avhz":
    /*!******************************************!*\
      !*** ./src/app/core/enums/const.enum.ts ***!
      \******************************************/

    /*! exports provided: ConstEnum */

    /***/
    function Avhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstEnum", function () {
        return ConstEnum;
      });

      var ConstEnum;

      (function (ConstEnum) {
        ConstEnum["token"] = "train-token";
        ConstEnum["username"] = "train-username";
        ConstEnum["password"] = "train-password";
        ConstEnum["language"] = "train-language";
        ConstEnum["selectLangFlag"] = "train-select-lang-flag";
        ConstEnum["layout"] = "train-layout";
        ConstEnum["collapseSidebar"] = "train-collapse-sidebar";
        ConstEnum["dark"] = "train-dark";
        ConstEnum["sidebarColor"] = "train-sidebar-color";
        ConstEnum["headerColor"] = "train-header-color";
      })(ConstEnum || (ConstEnum = {}));
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        serverUrl: 'https://localhost:44364/api/',
        serverFile: 'https://localhost:44364/Content/'
      };
      /***/
    },

    /***/
    "B5Qn":
    /*!*******************************************!*\
      !*** ./src/app/core/lists/header.list.ts ***!
      \*******************************************/

    /*! exports provided: HeaderList */

    /***/
    function B5Qn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderList", function () {
        return HeaderList;
      });

      var HeaderList = [{
        headerSelect: 'header-color-1',
        colorSelect: 'header-color-dark'
      }, {
        headerSelect: 'header-color-2',
        colorSelect: 'header-color-primary'
      }, {
        headerSelect: 'header-color-3',
        colorSelect: 'header-color-accent'
      }, {
        headerSelect: 'header-color-4',
        colorSelect: 'header-color-warning'
      }, {
        headerSelect: 'header-color-5',
        colorSelect: 'header-color-green'
      }];
      /***/
    },

    /***/
    "BIdc":
    /*!***************************************************!*\
      !*** ./src/app/core/lists/print-language.list.ts ***!
      \***************************************************/

    /*! exports provided: PrintLanguageList */

    /***/
    function BIdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintLanguageList", function () {
        return PrintLanguageList;
      });

      var PrintLanguageList = ['Arabic', 'English'];
      /***/
    },

    /***/
    "BaLE":
    /*!*********************************************************!*\
      !*** ./src/app/core/helpers/moment-utc-date-adapter.ts ***!
      \*********************************************************/

    /*! exports provided: MomentUtcDateAdapter */

    /***/
    function BaLE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentUtcDateAdapter", function () {
        return MomentUtcDateAdapter;
      });
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MomentUtcDateAdapter = /*#__PURE__*/function (_angular_material_mom) {
        _inherits(MomentUtcDateAdapter, _angular_material_mom);

        var _super = _createSuper(MomentUtcDateAdapter);

        function MomentUtcDateAdapter(dateLocale) {
          _classCallCheck(this, MomentUtcDateAdapter);

          return _super.call(this, dateLocale);
        }

        _createClass(MomentUtcDateAdapter, [{
          key: "createDate",
          value: function createDate(year, month, date) {
            if (month < 0 || month > 11) {
              throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
            }

            if (date < 1) {
              throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
            }

            var result = moment__WEBPACK_IMPORTED_MODULE_1__["utc"]({
              year: year,
              month: month,
              date: date
            }).locale(this.locale);

            if (!result.isValid()) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
        }]);

        return MomentUtcDateAdapter;
      }(_angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_0__["MomentDateAdapter"]);

      MomentUtcDateAdapter.ɵfac = function MomentUtcDateAdapter_Factory(t) {
        return new (t || MomentUtcDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], 8));
      };

      MomentUtcDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: MomentUtcDateAdapter,
        factory: MomentUtcDateAdapter.ɵfac
      });
      /***/
    },

    /***/
    "Gldj":
    /*!***************************************************************!*\
      !*** ./src/app/core/directives/menu-toggle-link.directive.ts ***!
      \***************************************************************/

    /*! exports provided: MenuToggleLinkDirective */

    /***/
    function Gldj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function () {
        return MenuToggleLinkDirective;
      });
      /* harmony import */


      var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-toggle.directive */
      "1giO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MenuToggleLinkDirective = /*#__PURE__*/function () {
        function MenuToggleLinkDirective(nav) {
          _classCallCheck(this, MenuToggleLinkDirective);

          this.nav = nav;
        }

        _createClass(MenuToggleLinkDirective, [{
          key: "open",
          get: function get() {
            return this._open;
          },
          set: function set(value) {
            this._open = value;

            if (value) {
              this.nav.closeOtherLinks(this);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);

            if (this.group) {
              var routeUrl = this.nav.getUrl();
              var currentUrl = routeUrl.split('/');

              if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
          }
        }]);

        return MenuToggleLinkDirective;
      }();

      MenuToggleLinkDirective.ɵfac = function MenuToggleLinkDirective_Factory(t) {
        return new (t || MenuToggleLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_0__["MenuToggleDirective"]));
      };

      MenuToggleLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MenuToggleLinkDirective,
        selectors: [["", "menuToggleLink", ""]],
        hostVars: 2,
        hostBindings: function MenuToggleLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
          }
        },
        inputs: {
          group: "group",
          open: "open"
        }
      });
      /***/
    },

    /***/
    "JGkG":
    /*!***********************************************************************!*\
      !*** ./src/app/core/directives/mat-grid-list-responsive.directive.ts ***!
      \***********************************************************************/

    /*! exports provided: MatGridListResponsive */

    /***/
    function JGkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridListResponsive", function () {
        return MatGridListResponsive;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");

      function calCols(matchedBreakpoint) {
        switch (matchedBreakpoint) {
          case MatchedBreakpoint.XLarge:
            return 5;

          case MatchedBreakpoint.Large:
            return 4;

          case MatchedBreakpoint.Medium:
            return 3;

          case MatchedBreakpoint.Small:
            return 2;

          case MatchedBreakpoint.XSmall:
          default:
            return 1;
        }
      }

      var MatchedBreakpoint;

      (function (MatchedBreakpoint) {
        MatchedBreakpoint[MatchedBreakpoint["XLarge"] = 0] = "XLarge";
        MatchedBreakpoint[MatchedBreakpoint["Large"] = 1] = "Large";
        MatchedBreakpoint[MatchedBreakpoint["Medium"] = 2] = "Medium";
        MatchedBreakpoint[MatchedBreakpoint["Small"] = 3] = "Small";
        MatchedBreakpoint[MatchedBreakpoint["XSmall"] = 4] = "XSmall";
      })(MatchedBreakpoint || (MatchedBreakpoint = {})); // tslint:disable-next-line: directive-class-suffix


      var MatGridListResponsive = /*#__PURE__*/function () {
        function MatGridListResponsive(matGridList, breakpointObserver) {
          var _this = this;

          _classCallCheck(this, MatGridListResponsive);

          this.matGridList = matGridList;
          this.breakpointObserver = breakpointObserver; // tslint:disable-next-line: no-input-rename

          this.responsive = false;
          this.responsive$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.responsive); // tslint:disable-next-line: no-output-rename

          this.colsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.breakPointObserverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
          this.matGridList.cols = 1;

          var buildObservable = function buildObservable(alias, breakPoint) {
            return _this.breakpointObserver.observe(breakPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) {
              return state.matches;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return alias;
            }));
          };

          this.breakPointObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(buildObservable(MatchedBreakpoint.XLarge, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge), buildObservable(MatchedBreakpoint.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large), buildObservable(MatchedBreakpoint.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium), buildObservable(MatchedBreakpoint.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small), buildObservable(MatchedBreakpoint.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall));
        }

        _createClass(MatGridListResponsive, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.breakPointObserverSubscription = this.responsive$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (responsive) {
              return responsive ? _this2.breakPointObservable : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(MatchedBreakpoint.XSmall);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (matchedBreakpoint) {
              return calCols(matchedBreakpoint);
            })).subscribe(function (cols) {
              return _this2.setCols(cols);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.responsive) {
              this.responsive$.next(changes.responsive.currentValue);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.breakPointObserverSubscription) {
              this.breakPointObserverSubscription.unsubscribe();
              this.breakPointObserverSubscription = undefined;
            }
          }
        }, {
          key: "setCols",
          value: function setCols(cols) {
            this.colsChange.emit(cols);
            this.matGridList.cols = cols;
          }
        }]);

        return MatGridListResponsive;
      }();

      MatGridListResponsive.ɵfac = function MatGridListResponsive_Factory(t) {
        return new (t || MatGridListResponsive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]));
      };

      MatGridListResponsive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridListResponsive,
        selectors: [["mat-grid-list", "responsive", ""]],
        inputs: {
          responsive: "responsive"
        },
        outputs: {
          colsChange: "responsiveColsChange"
        },
        exportAs: ["matGridListResponsive"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /***/
    },

    /***/
    "JzmT":
    /*!***********************************************************************!*\
      !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function JzmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");

      var PageNotFoundComponent = function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      };

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 7,
        vars: 0,
        consts: [["fxLayout", "column wrap", "fxLayoutGap", "60px", "fxLayoutAlign", "center center"], ["fxFlex", ""], ["mode", "indeterminate"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 404 We are searching for your page... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ... But we can not find it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]],
        styles: ["section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    color: blue;\r\n    font-size: 50px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    margin-top: 20px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24gZGl2Om50aC1jaGlsZCgxKSxcclxuc2VjdGlvbiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuc2VjdGlvbiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "M9IJ":
    /*!***********************************************!*\
      !*** ./src/app/core/services/busy.service.ts ***!
      \***********************************************/

    /*! exports provided: BusyService */

    /***/
    function M9IJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusyService", function () {
        return BusyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");

      var BusyService = /*#__PURE__*/function () {
        function BusyService(spinnerService) {
          _classCallCheck(this, BusyService);

          this.spinnerService = spinnerService;
          this.busyRequestCount = 0;
        }

        _createClass(BusyService, [{
          key: "busy",
          value: function busy() {
            this.busyRequestCount++;
            this.spinnerService.show(undefined, {
              type: 'timer',
              bdColor: 'rgba(255,255,255,0.7)',
              color: '#333333'
            });
          }
        }, {
          key: "idle",
          value: function idle() {
            this.busyRequestCount--;

            if (this.busyRequestCount <= 0) {
              this.busyRequestCount = 0;
              this.spinnerService.hide();
            }
          }
        }]);

        return BusyService;
      }();

      BusyService.ɵfac = function BusyService_Factory(t) {
        return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
      };

      BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BusyService,
        factory: BusyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "MPAF":
    /*!*************************************!*\
      !*** ./src/app/core/lists/index.ts ***!
      \*************************************/

    /*! exports provided: PrintLanguageList, TranlateList, LanguageFlagList, HeaderList, SideBarList, MenuItemList, LoginSliderList */

    /***/
    function MPAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _print_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./print-language.list */
      "BIdc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrintLanguageList", function () {
        return _print_language_list__WEBPACK_IMPORTED_MODULE_0__["PrintLanguageList"];
      });
      /* harmony import */


      var _translate_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./translate.list */
      "peh3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TranlateList", function () {
        return _translate_list__WEBPACK_IMPORTED_MODULE_1__["TranlateList"];
      });
      /* harmony import */


      var _language_flage_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./language-flage.list */
      "wCEj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguageFlagList", function () {
        return _language_flage_list__WEBPACK_IMPORTED_MODULE_2__["LanguageFlagList"];
      });
      /* harmony import */


      var _header_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header.list */
      "B5Qn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderList", function () {
        return _header_list__WEBPACK_IMPORTED_MODULE_3__["HeaderList"];
      });
      /* harmony import */


      var _side_bar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./side-bar.list */
      "Nv/J");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SideBarList", function () {
        return _side_bar_list__WEBPACK_IMPORTED_MODULE_4__["SideBarList"];
      });
      /* harmony import */


      var _menu_item_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-item.list */
      "xkww");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MenuItemList", function () {
        return _menu_item_list__WEBPACK_IMPORTED_MODULE_5__["MenuItemList"];
      });
      /* harmony import */


      var _login_slider_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-slider.list */
      "uE6f");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginSliderList", function () {
        return _login_slider_list__WEBPACK_IMPORTED_MODULE_6__["LoginSliderList"];
      });
      /***/

    },

    /***/
    "Nlor":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/error.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function Nlor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router, toastrService) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;
          this.toastrService = toastrService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this3 = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              if (error) {
                if (error.status === 400) {
                  _this3.toastrService.error(error.error.message, 'Error');
                }

                if (error.status === 401) {
                  _this3.toastrService.error(error.error.message, 'Error');

                  _this3.router.navigate(['/login']);
                }

                if (error.status === 404) {
                  _this3.router.navigateByUrl('/not-found');
                }

                if (error.status === 409) {
                  _this3.toastrService.error(error.error.message, 'Error');
                }

                if (error.status === 500) {
                  _this3.toastrService.error(error.error.message, 'Error');
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Nv/J":
    /*!*********************************************!*\
      !*** ./src/app/core/lists/side-bar.list.ts ***!
      \*********************************************/

    /*! exports provided: SideBarList */

    /***/
    function NvJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideBarList", function () {
        return SideBarList;
      });

      var SideBarList = [{
        sideBarSelect: 'sidebar-color-1',
        colorSelect: 'sidebar-color-dark'
      }, {
        sideBarSelect: 'sidebar-color-2',
        colorSelect: 'sidebar-color-primary'
      }, {
        sideBarSelect: 'sidebar-color-3',
        colorSelect: 'sidebar-color-accent'
      }, {
        sideBarSelect: 'sidebar-color-4',
        colorSelect: 'sidebar-color-warn'
      }, {
        sideBarSelect: 'sidebar-color-5',
        colorSelect: 'sidebar-color-green'
      }];
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/material.module */
      "5dmV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-print */
      "LEg7");
      /* harmony import */


      var _core_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/directives */
      "w0Hg");
      /* harmony import */


      var _core_custom_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/custom-pipes */
      "6njL");
      /* harmony import */


      var ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng5-breadcrumb */
      "xxGY");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var ngx_barcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-barcode */
      "7ePi");
      /* harmony import */


      var angular_instantsearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-instantsearch */
      "D1VO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"], ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"], ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["Ng5BreadcrumbModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), angular_instantsearch__WEBPACK_IMPORTED_MODULE_13__["NgAisModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"], ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_13__["NgAisModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"], ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["Ng5BreadcrumbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_core_custom_pipes__WEBPACK_IMPORTED_MODULE_7__["AddSpacePipe"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleAnchorDirective"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleLinkDirective"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"], ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"], ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["Ng5BreadcrumbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_13__["NgAisModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"]],
          exports: [_core_custom_pipes__WEBPACK_IMPORTED_MODULE_7__["AddSpacePipe"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleAnchorDirective"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleLinkDirective"], _core_directives__WEBPACK_IMPORTED_MODULE_6__["MenuToggleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"], ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_13__["NgAisModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"], ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["Ng5BreadcrumbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"]]
        });
      })();
      /***/

    },

    /***/
    "PIYF":
    /*!**************************************************************!*\
      !*** ./src/app/components/register/login/login.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function PIYF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_core_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/lists */
      "MPAF");
      /* harmony import */


      var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/enums */
      "kfal");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(credentialService, coreService, accountService, router, formBuilder, translate, titleService) {
          var _this4 = this;

          _classCallCheck(this, LoginComponent);

          this.credentialService = credentialService;
          this.coreService = coreService;
          this.accountService = accountService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.translate = translate;
          this.titleService = titleService;
          this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: false,
            arrows: false
          };
          this.sliderList = src_app_core_lists__WEBPACK_IMPORTED_MODULE_1__["LoginSliderList"];

          this.errorHandling = function (control, error) {
            return _this4.loginForm.controls[control].hasError(error);
          };

          this.createForm();
          this.translate.use(coreService.currentLanguage);
        }

        _createClass(LoginComponent, [{
          key: "createForm",
          value: function createForm() {
            this.loginForm = this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              rememberMe: ['']
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle(this.translate.instant('Login'));

            if (localStorage.getItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].username)) {
              this.loginForm.patchValue({});
              this.loginForm.setValue({
                name: localStorage.getItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].username),
                password: localStorage.getItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].password),
                rememberMe: true
              });
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this5 = this;

            this.accountService.login(this.loginForm.value).subscribe(function (res) {
              if (_this5.loginForm.value.rememberMe) {
                localStorage.setItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].username, _this5.loginForm.value.name);
                localStorage.setItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].password, _this5.loginForm.value.password);
              } else {
                localStorage.removeItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].username);
                localStorage.removeItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].password);
              }

              localStorage.setItem(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__["ConstEnum"].token, res.token);

              _this5.router.navigate(['/home']);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["CredentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 42,
        vars: 23,
        consts: [[1, "gene-login", "login-v2", "pad-y-xl", 3, "dir"], ["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.xs", "90", "fxFlex.sm", "80", "fxFlex.md", "95", "fxFlex.lg", "70", "fxFlex.xl", "60"], ["fxLayoutAlign", "space-between", "fxLayout.xs", "column", "fxLayoutAlign.xs", "center center", 1, "mrgn-x-md"], [1, "mrgn-b-md"], ["src", "./assets/img/logo-sign.png"], ["fxLayout", "row wrap", "fxLayoutAlign", "center stretch", "fxLayoutGap.gt-md", "15px", 1, "height-full", "pad-t-xl", "pad-b-xl", "form-wrap-row", "set-resp-space"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "60", "fxFlex.lg", "60", "fxFlex.xl", "60"], [1, "gene-login-v2", "card-full-height", "card-full-width"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mrgn-b-lg", "text-center"], ["autocomplete", "off", "fxLayoutAlign", "center start", 3, "formGroup"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "80", "fxFlex.md", "80", "fxFlex.lg", "70", "fxFlex.xl", "70", "fxLayoutAlign", "start"], ["appearance", "outline", 1, "full-wid", "mrgn-b-md"], ["matInput", "", "formControlName", "name", "type", "text", 1, "mrgn-t-none", 3, "placeholder"], ["matSuffix", ""], [1, "material-icons"], ["matInput", "", "type", "password", "formControlName", "password", 1, "mrgn-t-none", 3, "placeholder"], ["formControlName", "rememberMe", 1, "remember-me"], ["fxLayoutAlign", "center start", 1, "mrgn-b-lg"], ["mat-flat-button", "", 1, "success-bg", "gene-btn-lg", 3, "disabled", "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-toolbar-row", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Get Started With UMBRELLA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "verified_user");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-checkbox", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.coreService.layout);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 9, "Username"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 11, "Username"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 13, "Password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 15, "Password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 17, "Remember Me"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 21, "Login")));
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Dir"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"]],
        styles: ["@media (max-width: 599px) {\n  .set-resp-space[_ngcontent-%COMP%] {\n    padding-top: 0.8rem !important;\n    padding-bottom: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EsaUNBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDo1OTlweCkge1xyXG4gICAgLnNldC1yZXNwLXNwYWNlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Pbgd":
    /*!**********************************************************!*\
      !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: LoadingInterceptor */

    /***/
    function Pbgd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
        return LoadingInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var LoadingInterceptor = /*#__PURE__*/function () {
        function LoadingInterceptor(busyService) {
          _classCallCheck(this, LoadingInterceptor);

          this.busyService = busyService;
        }

        _createClass(LoadingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this6 = this;

            this.busyService.busy();
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
              _this6.busyService.idle();
            }));
          }
        }]);

        return LoadingInterceptor;
      }();

      LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) {
        return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["BusyService"]));
      };

      LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoadingInterceptor,
        factory: LoadingInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PzU0":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/page-title.service.ts ***!
      \*****************************************************/

    /*! exports provided: PageTitleService */

    /***/
    function PzU0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return PageTitleService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PageTitleService = /*#__PURE__*/function () {
        function PageTitleService() {
          _classCallCheck(this, PageTitleService);

          this.title = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        }

        _createClass(PageTitleService, [{
          key: "setTitle",
          value: function setTitle(value) {
            this.title.next(value);
          }
        }]);

        return PageTitleService;
      }();

      PageTitleService.ɵfac = function PageTitleService_Factory(t) {
        return new (t || PageTitleService)();
      };

      PageTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PageTitleService,
        factory: PageTitleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QiKt":
    /*!******************************************************!*\
      !*** ./src/app/core/helpers/must-match.validator.ts ***!
      \******************************************************/

    /*! exports provided: MustMatch */

    /***/
    function QiKt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      });

      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "WSqY":
    /*!***************************************!*\
      !*** ./src/app/core/helpers/index.ts ***!
      \***************************************/

    /*! exports provided: LowerCaseUrlSerializer, MustMatch, MomentUtcDateAdapter */

    /***/
    function WSqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lower_case_url_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lower-case-url-serializer */
      "akuJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function () {
        return _lower_case_url_serializer__WEBPACK_IMPORTED_MODULE_0__["LowerCaseUrlSerializer"];
      });
      /* harmony import */


      var _must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./must-match.validator */
      "QiKt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return _must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"];
      });
      /* harmony import */


      var _moment_utc_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./moment-utc-date-adapter */
      "BaLE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MomentUtcDateAdapter", function () {
        return _moment_utc_date_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentUtcDateAdapter"];
      });
      /***/

    },

    /***/
    "WfQD":
    /*!*************************************************!*\
      !*** ./src/app/components/app/app.component.ts ***!
      \*************************************************/

    /*! exports provided: AppComponent */

    /***/
    function WfQD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var src_app_core_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/lists */
      "MPAF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = function AppComponent(translate, coreService) {
        _classCallCheck(this, AppComponent);

        this.translate = translate;
        this.coreService = coreService;
        translate.addLangs(src_app_core_lists__WEBPACK_IMPORTED_MODULE_0__["TranlateList"]);
        this.translate.use(this.coreService.currentLanguage);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["CoreService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WgoR":
    /*!*****************************************************************!*\
      !*** ./src/app/core/directives/menu-toggle-anchor.directive.ts ***!
      \*****************************************************************/

    /*! exports provided: MenuToggleAnchorDirective */

    /***/
    function WgoR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function () {
        return MenuToggleAnchorDirective;
      });
      /* harmony import */


      var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-toggle-link.directive */
      "Gldj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MenuToggleAnchorDirective = /*#__PURE__*/function () {
        function MenuToggleAnchorDirective(navlink) {
          _classCallCheck(this, MenuToggleAnchorDirective);

          this.navlink = navlink;
        }

        _createClass(MenuToggleAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return MenuToggleAnchorDirective;
      }();

      MenuToggleAnchorDirective.ɵfac = function MenuToggleAnchorDirective_Factory(t) {
        return new (t || MenuToggleAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_0__["MenuToggleLinkDirective"]));
      };

      MenuToggleAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MenuToggleAnchorDirective,
        selectors: [["", "menuToggle", ""]],
        hostBindings: function MenuToggleAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuToggleAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components */
      "lbq7");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/helpers */
      "WSqY");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./core/interceptors */
      "6H+C");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng5-breadcrumb */
      "xxGY");
      /* harmony import */


      var _components_register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/register */
      "7oKN");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/service-worker */
      "3pDu");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_components__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors__WEBPACK_IMPORTED_MODULE_9__["LoadingInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["UrlSerializer"],
          useClass: _core_helpers__WEBPACK_IMPORTED_MODULE_7__["LowerCaseUrlSerializer"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
          }
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], _components_register__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"]]
        });
      })();
      /***/

    },

    /***/
    "akuJ":
    /*!***********************************************************!*\
      !*** ./src/app/core/helpers/lower-case-url-serializer.ts ***!
      \***********************************************************/

    /*! exports provided: LowerCaseUrlSerializer */

    /***/
    function akuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function () {
        return LowerCaseUrlSerializer;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var LowerCaseUrlSerializer = /*#__PURE__*/function (_angular_router__WEBP) {
        _inherits(LowerCaseUrlSerializer, _angular_router__WEBP);

        var _super2 = _createSuper(LowerCaseUrlSerializer);

        function LowerCaseUrlSerializer() {
          _classCallCheck(this, LowerCaseUrlSerializer);

          return _super2.apply(this, arguments);
        }

        _createClass(LowerCaseUrlSerializer, [{
          key: "parse",
          value: function parse(url) {
            return _get(_getPrototypeOf(LowerCaseUrlSerializer.prototype), "parse", this).call(this, url.toLowerCase());
          }
        }]);

        return LowerCaseUrlSerializer;
      }(_angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"]);
      /***/

    },

    /***/
    "dJ3e":
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /*! exports provided: CredentialService, BusyService, FileValidationService, CoreService, PageTitleService, UserService, AccountService */

    /***/
    function dJ3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _credential_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./credential.service */
      "ebaK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CredentialService", function () {
        return _credential_service__WEBPACK_IMPORTED_MODULE_0__["CredentialService"];
      });
      /* harmony import */


      var _busy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./busy.service */
      "M9IJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BusyService", function () {
        return _busy_service__WEBPACK_IMPORTED_MODULE_1__["BusyService"];
      });
      /* harmony import */


      var _file_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-validation.service */
      "puXn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileValidationService", function () {
        return _file_validation_service__WEBPACK_IMPORTED_MODULE_2__["FileValidationService"];
      });
      /* harmony import */


      var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core.service */
      "2tG/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreService", function () {
        return _core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"];
      });
      /* harmony import */


      var _page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-title.service */
      "PzU0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return _page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"];
      });
      /* harmony import */


      var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api/user.service */
      "zBIn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"];
      });
      /* harmony import */


      var _api_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./api/account.service */
      "pKsg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return _api_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"];
      });
      /***/

    },

    /***/
    "ebaK":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/credential.service.ts ***!
      \*****************************************************/

    /*! exports provided: CredentialService */

    /***/
    function ebaK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CredentialService", function () {
        return CredentialService;
      });
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums */
      "kfal");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var CredentialService = /*#__PURE__*/function () {
        function CredentialService(router) {
          _classCallCheck(this, CredentialService);

          this.router = router;
        }

        _createClass(CredentialService, [{
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_1__["ConstEnum"].token);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getToken());
            return user;
          }
        }, {
          key: "checkTokenExpire",
          value: function checkTokenExpire() {
            if (Date.now() >= this.getUser().exp * 1000) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            if (this.getToken()) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            var user = this.getUser();

            if (user.role === _enums__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Admin) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem(_enums__WEBPACK_IMPORTED_MODULE_1__["ConstEnum"].token);
            this.router.navigate(['/login']);
          }
        }]);

        return CredentialService;
      }();

      CredentialService.ɵfac = function CredentialService_Factory(t) {
        return new (t || CredentialService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      CredentialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CredentialService,
        factory: CredentialService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "gliP":
    /*!*****************************************!*\
      !*** ./src/app/core/enums/role.enum.ts ***!
      \*****************************************/

    /*! exports provided: RoleEnum */

    /***/
    function gliP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleEnum", function () {
        return RoleEnum;
      });

      var RoleEnum;

      (function (RoleEnum) {
        RoleEnum["Admin"] = "Admin";
      })(RoleEnum || (RoleEnum = {}));
      /***/

    },

    /***/
    "kfal":
    /*!*************************************!*\
      !*** ./src/app/core/enums/index.ts ***!
      \*************************************/

    /*! exports provided: RoleEnum, ConstEnum */

    /***/
    function kfal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role.enum */
      "gliP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RoleEnum", function () {
        return _role_enum__WEBPACK_IMPORTED_MODULE_0__["RoleEnum"];
      });
      /* harmony import */


      var _const_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./const.enum */
      "Avhz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConstEnum", function () {
        return _const_enum__WEBPACK_IMPORTED_MODULE_1__["ConstEnum"];
      });
      /***/

    },

    /***/
    "lbq7":
    /*!*************************************!*\
      !*** ./src/app/components/index.ts ***!
      \*************************************/

    /*! exports provided: PageNotFoundComponent, AppComponent */

    /***/
    function lbq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "JzmT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"];
      });
      /* harmony import */


      var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.component */
      "WfQD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return _app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"];
      });
      /***/

    },

    /***/
    "pKsg":
    /*!******************************************************!*\
      !*** ./src/app/core/services/api/account.service.ts ***!
      \******************************************************/

    /*! exports provided: AccountService */

    /***/
    function pKsg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http) {
          _classCallCheck(this, AccountService);

          this.http = http;
        }

        _createClass(AccountService, [{
          key: "login",
          value: function login(model) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl + 'accounts/login', model);
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "peh3":
    /*!**********************************************!*\
      !*** ./src/app/core/lists/translate.list.ts ***!
      \**********************************************/

    /*! exports provided: TranlateList */

    /***/
    function peh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranlateList", function () {
        return TranlateList;
      });

      var TranlateList = ['en', 'ar'];
      /***/
    },

    /***/
    "puXn":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/file-validation.service.ts ***!
      \**********************************************************/

    /*! exports provided: FileValidationService */

    /***/
    function puXn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileValidationService", function () {
        return FileValidationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FileValidationService = /*#__PURE__*/function () {
        function FileValidationService() {
          _classCallCheck(this, FileValidationService);
        }

        _createClass(FileValidationService, [{
          key: "checkInvalidImages",
          value: function checkInvalidImages(files) {
            var invalidTypes = _toConsumableArray(files).some(function (file) {
              return !file.type.includes('image/');
            });

            return invalidTypes;
          }
        }, {
          key: "checkInvalidImage",
          value: function checkInvalidImage(file) {
            var invalidTypes = !file.type.includes('image/');
            return invalidTypes;
          }
        }]);

        return FileValidationService;
      }();

      FileValidationService.ɵfac = function FileValidationService_Factory(t) {
        return new (t || FileValidationService)();
      };

      FileValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FileValidationService,
        factory: FileValidationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "r2hf":
    /*!*****************************************************!*\
      !*** ./src/app/core/custom-pipes/add-space.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: AddSpacePipe */

    /***/
    function r2hf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSpacePipe", function () {
        return AddSpacePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AddSpacePipe = /*#__PURE__*/function () {
        function AddSpacePipe() {
          _classCallCheck(this, AddSpacePipe);
        }

        _createClass(AddSpacePipe, [{
          key: "transform",
          value: function transform(val) {
            return val.replace(/([A-Z])/g, ' $1').trim();
          }
        }]);

        return AddSpacePipe;
      }();

      AddSpacePipe.ɵfac = function AddSpacePipe_Factory(t) {
        return new (t || AddSpacePipe)();
      };

      AddSpacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "addspace",
        type: AddSpacePipe,
        pure: true
      });
      /***/
    },

    /***/
    "uE6f":
    /*!*************************************************!*\
      !*** ./src/app/core/lists/login-slider.list.ts ***!
      \*************************************************/

    /*! exports provided: LoginSliderList */

    /***/
    function uE6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginSliderList", function () {
        return LoginSliderList;
      });

      var LoginSliderList = [{
        image: './assets/img/login-slider1.jpg',
        name: 'Francisco Abbott',
        designation: 'CEO-Gene',
        content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      }, {
        image: './assets/img/login-slider2.jpg',
        name: 'Samona Brown',
        designation: 'Designer',
        content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      }, {
        image: './assets/img/login-slider3.jpg',
        name: 'Anna Smith',
        designation: 'Managing Director',
        content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      }];
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      "lbq7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/register */
      "7oKN");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/enums */
      "kfal");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _components_register__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        /*, canActivate: [LoginGuard] */

      }, {
        path: 'home',

        /* canActivate: [AuthGuard] ,*/
        data: {
          roles: [_core_enums__WEBPACK_IMPORTED_MODULE_3__["RoleEnum"].Admin]
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-home-home-module */
          "components-home-home-module").then(__webpack_require__.bind(null,
          /*! ./components/home/home.module */
          "7vJP")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: '**',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "w0Hg":
    /*!******************************************!*\
      !*** ./src/app/core/directives/index.ts ***!
      \******************************************/

    /*! exports provided: MenuToggleAnchorDirective, MenuToggleLinkDirective, MenuToggleDirective, MatGridListResponsive */

    /***/
    function w0Hg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-toggle-anchor.directive */
      "WgoR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function () {
        return _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__["MenuToggleAnchorDirective"];
      });
      /* harmony import */


      var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-toggle-link.directive */
      "Gldj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function () {
        return _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"];
      });
      /* harmony import */


      var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-toggle.directive */
      "1giO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function () {
        return _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"];
      });
      /* harmony import */


      var _mat_grid_list_responsive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mat-grid-list-responsive.directive */
      "JGkG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MatGridListResponsive", function () {
        return _mat_grid_list_responsive_directive__WEBPACK_IMPORTED_MODULE_3__["MatGridListResponsive"];
      });
      /***/

    },

    /***/
    "wCEj":
    /*!***************************************************!*\
      !*** ./src/app/core/lists/language-flage.list.ts ***!
      \***************************************************/

    /*! exports provided: LanguageFlagList */

    /***/
    function wCEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageFlagList", function () {
        return LanguageFlagList;
      });

      var LanguageFlagList = [{
        img: './assets/img/en.png',
        name: 'English',
        value: 'en'
      }, {
        img: './assets/img/ar.png',
        name: 'Arabic',
        value: 'ar'
      }];
      /***/
    },

    /***/
    "xkww":
    /*!**********************************************!*\
      !*** ./src/app/core/lists/menu-item.list.ts ***!
      \**********************************************/

    /*! exports provided: MenuItemList */

    /***/
    function xkww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItemList", function () {
        return MenuItemList;
      });

      var MenuItemList = [{
        state: 'home',
        name: 'Home',
        type: 'link',
        icon: 'home'
      }, {
        state: 'home/target',
        name: 'Target',
        type: 'link',
        icon: 'drive_file_move'
      }, {
        state: 'home/bin-variables',
        name: 'Bin Variables',
        type: 'link',
        icon: 'settings_input_component'
      }, {
        state: 'home/analyze-variables',
        name: 'Analyze Variables',
        type: 'link',
        icon: 'screen_search_desktop'
      }, {
        state: 'home/train',
        name: 'Train',
        type: 'link',
        icon: 'repeat_on'
      }, {
        state: 'home/predict',
        name: 'Predict',
        type: 'link',
        icon: 'online_prediction'
      }, {
        state: 'home/backtest',
        name: 'Backtest',
        type: 'link',
        icon: 'question_answer'
      }, {
        state: 'home/report',
        name: 'Report',
        type: 'link',
        icon: 'file_copy'
      }, {
        state: 'home/deploy',
        name: 'Deploy',
        type: 'link',
        icon: 'wifi_protected_setup'
      }];
      /***/
    },

    /***/
    "zBIn":
    /*!***************************************************!*\
      !*** ./src/app/core/services/api/user.service.ts ***!
      \***************************************************/

    /*! exports provided: UserService */

    /***/
    function zBIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "create",
          value: function create(model) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users"), model);
          }
        }, {
          key: "edit",
          value: function edit(id, model) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users/").concat(id), model);
          }
        }, {
          key: "changePassword",
          value: function changePassword(id, model) {
            return this.http.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users/").concat(id, "/changepassword"), model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users/").concat(id));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users/").concat(id));
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "users"));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map