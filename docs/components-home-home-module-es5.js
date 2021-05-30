(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"], {
    /***/
    "1a03":
    /*!************************************************************************************!*\
      !*** ./src/app/components/home/language-drop-down/language-drop-down.component.ts ***!
      \************************************************************************************/

    /*! exports provided: LanguageDropDownComponent */

    /***/
    function a03(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageDropDownComponent", function () {
        return LanguageDropDownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");

      function LanguageDropDownComponent_ng_container_15_ng_container_1_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageDropDownComponent_ng_container_15_ng_container_1_mat_card_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var lang_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.coreService.setLang(lang_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", language_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r4.name);
        }
      }

      function LanguageDropDownComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageDropDownComponent_ng_container_15_ng_container_1_mat_card_1_Template, 5, 2, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var language_r4 = ctx.$implicit;

          var lang_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", language_r4.value == lang_r2);
        }
      }

      function LanguageDropDownComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageDropDownComponent_ng_container_15_ng_container_1_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.coreService.langArray);
        }
      }

      var LanguageDropDownComponent = function LanguageDropDownComponent(translate, coreService) {
        _classCallCheck(this, LanguageDropDownComponent);

        this.translate = translate;
        this.coreService = coreService;
        this.translate.use(this.coreService.currentLanguage);
      };

      LanguageDropDownComponent.ɵfac = function LanguageDropDownComponent_Factory(t) {
        return new (t || LanguageDropDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["CoreService"]));
      };

      LanguageDropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LanguageDropDownComponent,
        selectors: [["app-language-drop-down"]],
        decls: 16,
        vars: 7,
        consts: [[1, "language-dropdown-wrap"], ["mat-button", "", 3, "matMenuTriggerFor"], ["width", "24", "height", "24", 3, "src"], ["menu_activator", ""], [1, "gene-lang-popup"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "language-title", "pad-all-sm", "primary-bg"], ["fxFlex", "60", 1, "sec-title"], [1, "mrgn-b-none"], ["fxFlex", "40", 1, "text-right"], [1, "gene-text-md"], ["fxLayout", "row wrap", 1, "pad-all-xs"], [4, "ngFor", "ngForOf"], ["class", "mat-pad-none lang-wrap", "fxFlex", "calc(50% - 0.5rem)", 4, "ngIf"], ["fxFlex", "calc(50% - 0.5rem)", 1, "mat-pad-none", "lang-wrap"], ["href", "javascript:void(0)", 1, "pad-all-xs", "gene-block", 3, "click"], ["width", "25", "height", "14", 1, "mrgn-r-xs", 3, "src"]],
        template: function LanguageDropDownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LanguageDropDownComponent_ng_container_15_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.coreService.selectLangFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "Languages"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.coreService.langArray.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1kcm9wLWRvd24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "5hgM":
    /*!********************************************************!*\
      !*** ./src/app/components/home/home/home.component.ts ***!
      \********************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function hgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
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


      var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-tour-md-menu */
      "PPT2");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../side-bar/side-bar.component */
      "KukR");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../header/header.component */
      "xjjA");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../footer/footer.component */
      "hnAt");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function HomeComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_template_13_Template_div_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_template_13_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.tourService.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_template_13_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.tourService.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_template_13_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.tourService.end();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "End");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r7 = ctx.step;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r7 == null ? null : step_r7.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r7 == null ? null : step_r7.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.tourService.hasPrev(step_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.tourService.hasNext(step_r7));
        }
      }

      function HomeComponent_mat_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", lang_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r13);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "radius-circle": a0
        };
      };

      function HomeComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_53_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var filter_r14 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.coreService.sidebarFilter(filter_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filter_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", filter_r14.sideBarSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, i_r15 == 0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "radius-active": a0
        };
      };

      function HomeComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_60_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var filter_r18 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.coreService.headerFilter(filter_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filter_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", filter_r18.headerSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, i_r19 == 0));
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3) {
        return {
          "app-dark": a0,
          "collapsed-sidebar": a1,
          "compact-sidebar": a2,
          "customizer-in": a3
        };
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(translate, coreService, credentialService, tourService) {
          _classCallCheck(this, HomeComponent);

          this.translate = translate;
          this.coreService = coreService;
          this.credentialService = credentialService;
          this.tourService = tourService;
          this.customizerIn = false;
          this.isMobile = false;
          this.menuItems = src_app_core_lists__WEBPACK_IMPORTED_MODULE_0__["MenuItemList"];
          this.initializeTour();
        }

        _createClass(HomeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.coreService.sidebarFilter(this.coreService.sideBarFilterClass[this.coreService.sideBarColor]);
            this.coreService.headerFilter(this.coreService.headerFilterClass[this.coreService.headerColor]);
          }
        }, {
          key: "initializeTour",
          value: function initializeTour() {// this.tourService.initialize([{
            //   anchorId: 'start.tour',
            //   content: 'Welcome to Gene admin panel!',
            //   placement: 'below',
            //   title: 'Welcome to Gene',
            // },
            // {
            //   anchorId: 'tour-full-screen',
            //   content: 'By pressing this button you can switch to fullscreen mode.',
            //   placement: 'below',
            //   title: 'Full Screen',
            // },
            // {
            //   anchorId: 'tour-ui',
            //   content: 'Show your site stats with unique designed cards',
            //   placement: 'below',
            //   title: 'Stats Cards',
            // }]);
            // if (window.innerWidth > 1199) {
            //   this.tourService.start();
            // }
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.windowSize = event.target.innerWidth;
            this.resizeSideBar();
          }
        }, {
          key: "resizeSideBar",
          value: function resizeSideBar() {
            if (this.windowSize < 1200) {
              this.isMobileStatus = true;
              this.isMobile = this.isMobileStatus;
              this.coreService.sidenavMode = 'over';
              this.coreService.sidenavOpen = false;
              var mainDiv = document.getElementsByClassName('app'); // tslint:disable-next-line: prefer-for-of

              for (var i = 0; i < mainDiv.length; i++) {
                if (!mainDiv[i].classList.contains('sidebar-overlay')) {
                  if (document.getElementById('main-app')) {
                    document.getElementById('main-app').className += ' sidebar-overlay';
                  }
                }
              }
            } else {
              this.isMobileStatus = false;
              this.isMobile = this.isMobileStatus;
              this.coreService.sidenavMode = 'side';
              this.coreService.sidenavOpen = true;

              var _mainDiv = document.getElementsByClassName('app'); // tslint:disable-next-line: prefer-for-of


              for (var _i2 = 0; _i2 < _mainDiv.length; _i2++) {
                if (_mainDiv[_i2].classList.contains('sidebar-overlay')) {
                  document.getElementById('main-app').classList.remove('sidebar-overlay');
                }
              }
            }
          }
        }, {
          key: "customizerFunction",
          value: function customizerFunction() {
            this.customizerIn = !this.customizerIn;
          }
        }, {
          key: "onActivate",
          value: function onActivate(se, scrollContainer) {
            scrollContainer.scrollTop = 0;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["CredentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__["TourService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 61,
        vars: 43,
        consts: [["id", "main-app", 1, "app", "sidebar-color-dark", "header-color-dark", 3, "dir", "ngClass"], [1, "gene-container"], [1, "sidebar-area", 3, "mode", "opened", "modeChange", "openedChange"], ["sidenav", ""], [3, "menuList", "verticalMenuStatus"], [1, "gene-base-container"], ["scrollContainer", ""], ["fxLayout", "row wrap", 1, "inner-container"], ["fxFlex", "100", 1, "full-wid"], [3, "activate"], ["fxFLex", "100", 1, "footer-wrap", "pad-t-none", "full-wid"], [1, "gene-customizer"], [1, "customizer-toggle", 3, "click"], [1, "fa-spin"], [1, "settings-panel"], ["color", "primary"], ["fxFlex", ""], [1, "theme-options"], [1, "collapse-option"], [3, "checked", "change"], [3, "ngModel", "ngModelChange", "change"], ["placeholder", "Language", 1, "mt-1", 3, "ngModel", "ngModelChange"], ["langSelect", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["fxHide", "", "fxShow.gt-md", "", 1, "inner-toolbar"], [1, "theme-color"], [1, "text-center", "mrgn-b-md"], ["fxLayoutAlign", "center center", 1, "gene-list"], [4, "ngFor", "ngForOf"], [1, "theme-light-color"], [1, "popover", "bs-popover-bottom", 3, "click"], [1, "popover-header"], [1, "popover-body"], [1, "tour-step-content"], [1, "tour-step-navigation"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-button", "", 3, "click"], [3, "value"], [1, "gene-list-link", 3, "click"], [3, "ngClass", "id"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modeChange", function HomeComponent_Template_mat_sidenav_modeChange_2_listener($event) {
              return ctx.coreService.sidenavMode = $event;
            })("openedChange", function HomeComponent_Template_mat_sidenav_openedChange_2_listener($event) {
              return ctx.coreService.sidenavOpen = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-side-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "router-outlet", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function HomeComponent_Template_router_outlet_activate_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

              return ctx.onActivate($event, _r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tour-step-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_ng_template_13_Template, 15, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() {
              return ctx.customizerFunction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-toolbar", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card-content", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-checkbox", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_Template_mat_checkbox_change_31_listener($event) {
              return ctx.coreService.collapseSidebarChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-checkbox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_checkbox_ngModelChange_35_listener($event) {
              return ctx.coreService.dark = $event;
            })("change", function HomeComponent_Template_mat_checkbox_change_35_listener($event) {
              return ctx.coreService.addClassOnBody($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-checkbox", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_Template_mat_checkbox_change_39_listener($event) {
              return ctx.coreService.changeRTL($event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-select", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_43_listener($event) {
              return ctx.coreService.currentLanguage = $event;
            })("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_43_listener() {
              return ctx.coreService.setLang(ctx.coreService.currentLanguage);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HomeComponent_mat_option_45_Template, 2, 2, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, HomeComponent_div_53_Template, 3, 4, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, HomeComponent_div_60_Template, 3, 4, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("side-panel-opened", ctx.coreService.sidenavOpen)("side-panel-closed", !ctx.coreService.sidenavOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.coreService.layout)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](38, _c2, ctx.coreService.dark, ctx.coreService.collapseSidebar, ctx.compactSidebar, ctx.customizerIn));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.coreService.sidenavMode)("opened", ctx.coreService.sidenavOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuList", ctx.menuItems)("verticalMenuStatus", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, "Options"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 26, "Layout Options"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.coreService.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 28, "Collapsed Sidebar"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.coreService.dark);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 30, "Dark Mode"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.coreService.layout === "rtl" ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 32, "RTL"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.coreService.currentLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 34, "Sidebar Filters"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coreService.sideBarFilterClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 36, "Header Filters"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coreService.headerFilterClass);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__["TourStepTemplateComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: [".example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-item .content-wrap {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUdJO0VBQ0ksa0JBQUE7QUFBUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWl0ZW0ge1xyXG4gICAgLmNvbnRlbnQtd3JhcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgfVxyXG59Il19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "7vJP":
    /*!************************************************!*\
      !*** ./src/app/components/home/home.module.ts ***!
      \************************************************/

    /*! exports provided: HomeModule */

    /***/
    function vJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! . */
      "RN0W");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      "NOed");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [___WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], ___WEBPACK_IMPORTED_MODULE_0__["LandingComponent"], ___WEBPACK_IMPORTED_MODULE_0__["FooterComponent"], ___WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"], ___WEBPACK_IMPORTED_MODULE_0__["LanguageDropDownComponent"], ___WEBPACK_IMPORTED_MODULE_0__["SideBarComponent"], ___WEBPACK_IMPORTED_MODULE_0__["DeleteDialogComponent"], ___WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "KukR":
    /*!****************************************************************!*\
      !*** ./src/app/components/home/side-bar/side-bar.component.ts ***!
      \****************************************************************/

    /*! exports provided: SideBarComponent */

    /***/
    function KukR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
        return SideBarComponent;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _core_directives_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/directives/menu-toggle.directive */
      "1giO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _core_directives_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/directives/menu-toggle-link.directive */
      "Gldj");
      /* harmony import */


      var _core_directives_menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/directives/menu-toggle-anchor.directive */
      "WgoR");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SideBarComponent_mat_list_item_10_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "/" + menuitem_r1.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuitem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, menuitem_r1.name));
        }
      }

      function SideBarComponent_mat_list_item_10_a_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuitem_r1.label);
        }
      }

      function SideBarComponent_mat_list_item_10_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SideBarComponent_mat_list_item_10_a_4_ng_container_6_Template, 3, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuitem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, menuitem_r1.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuitem_r1.label);
        }
      }

      function SideBarComponent_mat_list_item_10_mat_nav_list_5_mat_list_item_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var childitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childitem_r10.label);
        }
      }

      function SideBarComponent_mat_list_item_10_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideBarComponent_mat_list_item_10_mat_nav_list_5_mat_list_item_1_ng_container_4_Template, 3, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "/" + childitem_r10.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, childitem_r10.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childitem_r10.label);
        }
      }

      function SideBarComponent_mat_list_item_10_mat_nav_list_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SideBarComponent_mat_list_item_10_mat_nav_list_5_mat_list_item_1_Template, 5, 7, "mat-list-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuitem_r1.children);
        }
      }

      function SideBarComponent_mat_list_item_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SideBarComponent_mat_list_item_10_a_2_Template, 6, 7, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideBarComponent_mat_list_item_10_a_4_Template, 10, 5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SideBarComponent_mat_list_item_10_mat_nav_list_5_Template, 2, 1, "mat-nav-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuitem_r1.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuitem_r1.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuitem_r1.type === "sub");
        }
      }

      var SideBarComponent = function SideBarComponent(translate, router, coreService, credentialService) {
        _classCallCheck(this, SideBarComponent);

        this.translate = translate;
        this.router = router;
        this.coreService = coreService;
        this.credentialService = credentialService;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
      };

      SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
        return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["CredentialService"]));
      };

      SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SideBarComponent,
        selectors: [["app-side-bar"]],
        inputs: {
          menuList: "menuList",
          verticalMenuStatus: "verticalMenuStatus"
        },
        decls: 11,
        vars: 4,
        consts: [["fxLayout", "column", 1, "sidebar-panel", "gene-sidenav"], [1, "sidebar-container"], [1, "gene-user-thumb", "text-center"], ["src", "./assets/img/ai.jpg", "width", "107", "height", "107", "alt", "user list image", 1, "img-responsive", "img-circle"], [1, "gene-user-name", 2, "font-family", "sofia", "font-size", "1.5rem"], ["fxLayout", "column", 1, "sidenav-scrollbar-container"], ["fxLayout", "column", "menuToggleDirective", "", 1, "navigation"], ["menuToggleLink", "", 4, "ngFor", "ngForOf"], ["menuToggleLink", ""], ["menuToggle", "", "class", "gene-relative", "mat-ripple", "", "routerLinkActive", "active-link", 3, "routerLink", 4, "ngIf"], ["menuToggle", "", "class", "gene-relative", "mat-ripple", "", "href", "javascript:void(0)", 4, "ngIf"], ["class", "sub-menu", 4, "ngIf"], ["menuToggle", "", "mat-ripple", "", "routerLinkActive", "active-link", 1, "gene-relative", 3, "routerLink"], ["menuToggle", "", "mat-ripple", "", "href", "javascript:void(0)", 1, "gene-relative"], [4, "ngIf"], ["fxFlex", ""], [1, "menu-caret"], [1, "sidebar-label"], [1, "sub-menu"], ["routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["routerLinkActive", "open"], ["routerLinkActive", "active-link", "mat-ripple", "", 1, "gene-relative", 3, "routerLink"]],
        template: function SideBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "perfect-scrollbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-nav-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SideBarComponent_mat_list_item_10_Template, 6, 3, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, "TRAIN"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuList);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _core_directives_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_8__["MenuToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _core_directives_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_10__["MenuToggleLinkDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _core_directives_menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_11__["MenuToggleAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "NOed":
    /*!********************************************************!*\
      !*** ./src/app/components/home/home-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function NOed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/guards/auth.guard */
      "NUQi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! . */
      "RN0W");
      /* harmony import */


      var src_app_core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/enums */
      "kfal");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var routes = [{
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [{
          path: '',
          component: ___WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
        }, {
          path: 'users',
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
          data: {
            roles: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_3__["RoleEnum"].Admin]
          },
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | features-user-user-module */
            "features-user-user-module").then(__webpack_require__.bind(null,
            /*! ./features/user/user.module */
            "JirS")).then(function (m) {
              return m.UserModule;
            });
          }
        }, {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "NUQi":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function NUQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(credentialService, route) {
          _classCallCheck(this, AuthGuard);

          this.credentialService = credentialService;
          this.route = route;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.credentialService.isLoggedIn() && this.credentialService.checkTokenExpire()) {
              if (next.data.roles && next.data.roles.indexOf(this.credentialService.getUser().role) === -1) {
                this.route.navigate(['/home']);
                return false;
              }

              return true;
            }

            this.route.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["CredentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "RN0W":
    /*!******************************************!*\
      !*** ./src/app/components/home/index.ts ***!
      \******************************************/

    /*! exports provided: HomeComponent, FooterComponent, HeaderComponent, LanguageDropDownComponent, SideBarComponent, LandingComponent, DeleteDialogComponent, ConfirmDialogComponent */

    /***/
    function RN0W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      "5hgM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      "hnAt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
      });
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "xjjA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"];
      });
      /* harmony import */


      var _language_drop_down_language_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./language-drop-down/language-drop-down.component */
      "1a03");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguageDropDownComponent", function () {
        return _language_drop_down_language_drop_down_component__WEBPACK_IMPORTED_MODULE_3__["LanguageDropDownComponent"];
      });
      /* harmony import */


      var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./side-bar/side-bar.component */
      "KukR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
        return _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"];
      });
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing/landing.component */
      "lTdu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"];
      });
      /* harmony import */


      var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-dialog/delete-dialog.component */
      "TeWd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
        return _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"];
      });
      /* harmony import */


      var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./confirm-dialog/confirm-dialog.component */
      "h8Ro");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"];
      });
      /***/

    },

    /***/
    "TeWd":
    /*!**************************************************************************!*\
      !*** ./src/app/components/home/delete-dialog/delete-dialog.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DeleteDialogComponent */

    /***/
    function TeWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
        return DeleteDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var DeleteDialogComponent = /*#__PURE__*/function () {
        function DeleteDialogComponent(coreService, dialogRef, data) {
          _classCallCheck(this, DeleteDialogComponent);

          this.coreService = coreService;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(DeleteDialogComponent, [{
          key: "confirmDelete",
          value: function confirmDelete() {
            this.dialogRef.close('Ok');
          }
        }]);

        return DeleteDialogComponent;
      }();

      DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
        return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteDialogComponent,
        selectors: [["app-delete-dialog"]],
        decls: 22,
        vars: 23,
        consts: [[3, "dir"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["mat-dialog-title", ""], ["matPrefix", "", 1, "clickable", 3, "click"], ["align", "right"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function DeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_mat_icon_click_5_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-dialog-actions", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_14_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_18_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.coreService.layout);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Confirm Delete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "Do you want to delete this"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 11, ctx.data.type), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, "?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, "Cancel")));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 21, "Delete")));
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "aLe/":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js ***!
      \******************************************************************************/

    /*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */

    /***/
    function aLe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geometry", function () {
        return Geometry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function () {
        return PERFECT_SCROLLBAR_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function () {
        return PerfectScrollbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function () {
        return PerfectScrollbarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function () {
        return PerfectScrollbarDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function () {
        return PerfectScrollbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Position", function () {
        return Position;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "bdgK");

      function PerfectScrollbarComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
        }
      }

      var _c0 = ["*"];
      var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');

      var Geometry = function Geometry(x, y, w, h) {
        _classCallCheck(this, Geometry);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
      };

      var Position = function Position(x, y) {
        _classCallCheck(this, Position);

        this.x = x;
        this.y = y;
      };

      var PerfectScrollbarEvents = ['psScrollY', 'psScrollX', 'psScrollUp', 'psScrollDown', 'psScrollLeft', 'psScrollRight', 'psYReachEnd', 'psYReachStart', 'psXReachEnd', 'psXReachStart'];

      var PerfectScrollbarConfig = /*#__PURE__*/function () {
        function PerfectScrollbarConfig() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, PerfectScrollbarConfig);

          this.assign(config);
        }

        _createClass(PerfectScrollbarConfig, [{
          key: "assign",
          value: function assign() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            for (var key in config) {
              this[key] = config[key];
            }
          }
        }]);

        return PerfectScrollbarConfig;
      }();

      var PerfectScrollbarDirective = /*#__PURE__*/function () {
        function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
          _classCallCheck(this, PerfectScrollbarDirective);

          this.zone = zone;
          this.differs = differs;
          this.elementRef = elementRef;
          this.platformId = platformId;
          this.defaults = defaults;
          this.instance = null;
          this.ro = null;
          this.timeout = null;
          this.animation = null;
          this.configDiff = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.disabled = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(PerfectScrollbarDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              var config = new PerfectScrollbarConfig(this.defaults);
              config.assign(this.config); // Custom configuration

              this.zone.runOutsideAngular(function () {
                _this2.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](_this2.elementRef.nativeElement, config);
              });

              if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
              }

              this.zone.runOutsideAngular(function () {
                _this2.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"](function () {
                  _this2.update();
                });

                if (_this2.elementRef.nativeElement.children[0]) {
                  _this2.ro.observe(_this2.elementRef.nativeElement.children[0]);
                }

                _this2.ro.observe(_this2.elementRef.nativeElement);
              });
              this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                  var eventType = eventName.replace(/([A-Z])/g, function (c) {
                    return "-".concat(c.toLowerCase());
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(_this2.elementRef.nativeElement, eventType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this2.ngDestroy)).subscribe(function (event) {
                    _this2[eventName].emit(event);
                  });
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this3 = this;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              this.ngDestroy.next();
              this.ngDestroy.complete();

              if (this.ro) {
                this.ro.disconnect();
              }

              if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
              }

              this.zone.runOutsideAngular(function () {
                if (_this3.instance) {
                  _this3.instance.destroy();
                }
              });
              this.instance = null;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              var changes = this.configDiff.diff(this.config || {});

              if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
              }
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                  this.ngOnDestroy();
                } else if (changes['disabled'].currentValue === false) {
                  this.ngOnInit();
                }
              }
            }
          }
        }, {
          key: "ps",
          value: function ps() {
            return this.instance;
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            if (typeof window !== 'undefined') {
              if (this.timeout) {
                window.clearTimeout(this.timeout);
              }

              this.timeout = window.setTimeout(function () {
                if (!_this4.disabled && _this4.configDiff) {
                  try {
                    _this4.zone.runOutsideAngular(function () {
                      if (_this4.instance) {
                        _this4.instance.update();
                      }
                    });
                  } catch (error) {// Update can be finished after destroy so catch errors
                  }
                }
              }, 0);
            }
          }
        }, {
          key: "geometry",
          value: function geometry() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'scroll';
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
          }
        }, {
          key: "position",
          value: function position() {
            var absolute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!absolute && this.instance) {
              return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            } else {
              return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
          }
        }, {
          key: "scrollable",
          value: function scrollable() {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'any';
            var element = this.elementRef.nativeElement;

            if (direction === 'any') {
              return element.classList.contains('ps--active-x') || element.classList.contains('ps--active-y');
            } else if (direction === 'both') {
              return element.classList.contains('ps--active-x') && element.classList.contains('ps--active-y');
            } else {
              return element.classList.contains('ps--active-' + direction);
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(x, y, speed) {
            if (!this.disabled) {
              if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
              } else {
                if (x != null) {
                  this.animateScrolling('scrollLeft', x, speed);
                }

                if (y != null) {
                  this.animateScrolling('scrollTop', y, speed);
                }
              }
            }
          }
        }, {
          key: "scrollToX",
          value: function scrollToX(x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
          }
        }, {
          key: "scrollToY",
          value: function scrollToY(y, speed) {
            this.animateScrolling('scrollTop', y, speed);
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop(offset, speed) {
            this.animateScrolling('scrollTop', offset || 0, speed);
          }
        }, {
          key: "scrollToLeft",
          value: function scrollToLeft(offset, speed) {
            this.animateScrolling('scrollLeft', offset || 0, speed);
          }
        }, {
          key: "scrollToRight",
          value: function scrollToRight(offset, speed) {
            var left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom(offset, speed) {
            var top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
          }
        }, {
          key: "scrollToElement",
          value: function scrollToElement(element, offset, speed) {
            if (typeof element === 'string') {
              element = this.elementRef.nativeElement.querySelector(element);
            }

            if (element) {
              var elementPos = element.getBoundingClientRect();
              var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

              if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
              }

              if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var _currentPos = this.elementRef.nativeElement['scrollTop'];

                var _position = elementPos.top - scrollerPos.top + _currentPos;

                this.animateScrolling('scrollTop', _position + (offset || 0), speed);
              }
            }
          }
        }, {
          key: "animateScrolling",
          value: function animateScrolling(target, value, speed) {
            var _this5 = this;

            if (this.animation) {
              window.cancelAnimationFrame(this.animation);
              this.animation = null;
            }

            if (!speed || typeof window === 'undefined') {
              this.elementRef.nativeElement[target] = value;
            } else if (value !== this.elementRef.nativeElement[target]) {
              var newValue = 0;
              var scrollCount = 0;
              var oldTimestamp = performance.now();
              var oldValue = this.elementRef.nativeElement[target];
              var cosParameter = (oldValue - value) / 2;

              var step = function step(newTimestamp) {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount)); // Only continue animation if scroll position has not changed

                if (_this5.elementRef.nativeElement[target] === oldValue) {
                  if (scrollCount >= Math.PI) {
                    _this5.animateScrolling(target, value, 0);
                  } else {
                    _this5.elementRef.nativeElement[target] = newValue; // On a zoomed out page the resulting offset may differ

                    oldValue = _this5.elementRef.nativeElement[target];
                    oldTimestamp = newTimestamp;
                    _this5.animation = window.requestAnimationFrame(step);
                  }
                }
              };

              window.requestAnimationFrame(step);
            }
          }
        }]);

        return PerfectScrollbarDirective;
      }();

      PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) {
        return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PERFECT_SCROLLBAR_CONFIG, 8));
      };

      PerfectScrollbarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: PerfectScrollbarDirective,
        selectors: [["", "perfectScrollbar", ""]],
        inputs: {
          disabled: "disabled",
          config: ["perfectScrollbar", "config"]
        },
        outputs: {
          psScrollY: "psScrollY",
          psScrollX: "psScrollX",
          psScrollUp: "psScrollUp",
          psScrollDown: "psScrollDown",
          psScrollLeft: "psScrollLeft",
          psScrollRight: "psScrollRight",
          psYReachEnd: "psYReachEnd",
          psYReachStart: "psYReachStart",
          psXReachEnd: "psXReachEnd",
          psXReachStart: "psXReachStart"
        },
        exportAs: ["ngxPerfectScrollbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      PerfectScrollbarDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [PERFECT_SCROLLBAR_CONFIG]
          }]
        }];
      };

      PerfectScrollbarDirective.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['perfectScrollbar']
        }],
        psScrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psYReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psYReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psXReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psXReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[perfectScrollbar]',
            exportAs: 'ngxPerfectScrollbar'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [PERFECT_SCROLLBAR_CONFIG]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['perfectScrollbar']
          }]
        });
      })();

      var PerfectScrollbarComponent = /*#__PURE__*/function () {
        function PerfectScrollbarComponent(zone, cdRef, platformId) {
          _classCallCheck(this, PerfectScrollbarComponent);

          this.zone = zone;
          this.cdRef = cdRef;
          this.platformId = platformId;
          this.states = {};
          this.indicatorX = false;
          this.indicatorY = false;
          this.interaction = false;
          this.scrollPositionX = 0;
          this.scrollPositionY = 0;
          this.scrollDirectionX = 0;
          this.scrollDirectionY = 0;
          this.usePropagationX = false;
          this.usePropagationY = false;
          this.allowPropagationX = false;
          this.allowPropagationY = false;
          this.stateTimeout = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.disabled = false;
          this.usePSClass = true;
          this.autoPropagation = false;
          this.scrollIndicators = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(PerfectScrollbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              this.stateUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(function (a, b) {
                return a === b && !_this6.stateTimeout;
              })).subscribe(function (state) {
                if (_this6.stateTimeout && typeof window !== 'undefined') {
                  window.clearTimeout(_this6.stateTimeout);
                  _this6.stateTimeout = null;
                }

                if (state === 'x' || state === 'y') {
                  _this6.interaction = false;

                  if (state === 'x') {
                    _this6.indicatorX = false;
                    _this6.states.left = false;
                    _this6.states.right = false;

                    if (_this6.autoPropagation && _this6.usePropagationX) {
                      _this6.allowPropagationX = false;
                    }
                  } else if (state === 'y') {
                    _this6.indicatorY = false;
                    _this6.states.top = false;
                    _this6.states.bottom = false;

                    if (_this6.autoPropagation && _this6.usePropagationY) {
                      _this6.allowPropagationY = false;
                    }
                  }
                } else {
                  if (state === 'left' || state === 'right') {
                    _this6.states.left = false;
                    _this6.states.right = false;
                    _this6.states[state] = true;

                    if (_this6.autoPropagation && _this6.usePropagationX) {
                      _this6.indicatorX = true;
                    }
                  } else if (state === 'top' || state === 'bottom') {
                    _this6.states.top = false;
                    _this6.states.bottom = false;
                    _this6.states[state] = true;

                    if (_this6.autoPropagation && _this6.usePropagationY) {
                      _this6.indicatorY = true;
                    }
                  }

                  if (_this6.autoPropagation && typeof window !== 'undefined') {
                    _this6.stateTimeout = window.setTimeout(function () {
                      _this6.indicatorX = false;
                      _this6.indicatorY = false;
                      _this6.stateTimeout = null;

                      if (_this6.interaction && (_this6.states.left || _this6.states.right)) {
                        _this6.allowPropagationX = true;
                      }

                      if (_this6.interaction && (_this6.states.top || _this6.states.bottom)) {
                        _this6.allowPropagationY = true;
                      }

                      _this6.cdRef.markForCheck();
                    }, 500);
                  }
                }

                _this6.cdRef.markForCheck();

                _this6.cdRef.detectChanges();
              });
              this.zone.runOutsideAngular(function () {
                if (_this6.directiveRef) {
                  var element = _this6.directiveRef.elementRef.nativeElement;
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this6.ngDestroy)).subscribe(function (event) {
                    if (!_this6.disabled && _this6.autoPropagation) {
                      var scrollDeltaX = event.deltaX;
                      var scrollDeltaY = event.deltaY;

                      _this6.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                    }
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this6.ngDestroy)).subscribe(function (event) {
                    if (!_this6.disabled && _this6.autoPropagation) {
                      var scrollPositionX = event.touches[0].clientX;
                      var scrollPositionY = event.touches[0].clientY;
                      var scrollDeltaX = scrollPositionX - _this6.scrollPositionX;
                      var scrollDeltaY = scrollPositionY - _this6.scrollPositionY;

                      _this6.checkPropagation(event, scrollDeltaX, scrollDeltaY);

                      _this6.scrollPositionX = scrollPositionX;
                      _this6.scrollPositionY = scrollPositionY;
                    }
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-x').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-y').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('top'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this6.ngDestroy)).subscribe(function (state) {
                    if (!_this6.disabled && (_this6.autoPropagation || _this6.scrollIndicators)) {
                      _this6.stateUpdate.next(state);
                    }
                  });
                }
              });
              window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                  if (_this6.directiveRef) {
                    _this6.directiveRef[eventName] = _this6[eventName];
                  }
                });
              }, 0);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              this.ngDestroy.next();
              this.ngDestroy.unsubscribe();

              if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
              }
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
              }
            }
          }
        }, {
          key: "checkPropagation",
          value: function checkPropagation(event, deltaX, deltaY) {
            this.interaction = true;
            var scrollDirectionX = deltaX < 0 ? -1 : 1;
            var scrollDirectionY = deltaY < 0 ? -1 : 1;

            if (this.usePropagationX && this.usePropagationY || this.usePropagationX && (!this.allowPropagationX || this.scrollDirectionX !== scrollDirectionX) || this.usePropagationY && (!this.allowPropagationY || this.scrollDirectionY !== scrollDirectionY)) {
              event.preventDefault();
              event.stopPropagation();
            }

            if (!!deltaX) {
              this.scrollDirectionX = scrollDirectionX;
            }

            if (!!deltaY) {
              this.scrollDirectionY = scrollDirectionY;
            }

            this.stateUpdate.next('interaction');
            this.cdRef.detectChanges();
          }
        }]);

        return PerfectScrollbarComponent;
      }();

      PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) {
        return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]));
      };

      PerfectScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PerfectScrollbarComponent,
        selectors: [["perfect-scrollbar"]],
        viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](PerfectScrollbarDirective, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
          }
        },
        inputs: {
          disabled: "disabled",
          usePSClass: "usePSClass",
          autoPropagation: "autoPropagation",
          scrollIndicators: "scrollIndicators",
          config: "config"
        },
        outputs: {
          psScrollY: "psScrollY",
          psScrollX: "psScrollX",
          psScrollUp: "psScrollUp",
          psScrollDown: "psScrollDown",
          psScrollLeft: "psScrollLeft",
          psScrollRight: "psScrollRight",
          psYReachEnd: "psYReachEnd",
          psYReachStart: "psYReachStart",
          psXReachEnd: "psXReachEnd",
          psXReachStart: "psXReachStart"
        },
        exportAs: ["ngxPerfectScrollbar"],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 5,
        consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]],
        template: function PerfectScrollbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps", ctx.usePSClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.scrollIndicators);
          }
        },
        directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"],
        encapsulation: 2
      });

      PerfectScrollbarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }];
      };

      PerfectScrollbarComponent.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        usePSClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoPropagation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['class.ps-show-limits']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        scrollIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['class.ps-show-active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        psScrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psScrollRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psYReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psYReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psXReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        psXReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        directiveRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [PerfectScrollbarDirective, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'perfect-scrollbar',
            exportAs: 'ngxPerfectScrollbar',
            template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.ps-show-limits']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.ps-show-active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [PerfectScrollbarDirective, {
              "static": true
            }]
          }]
        });
      })();

      var PerfectScrollbarModule = function PerfectScrollbarModule() {
        _classCallCheck(this, PerfectScrollbarModule);
      };

      PerfectScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PerfectScrollbarModule
      });
      PerfectScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function PerfectScrollbarModule_Factory(t) {
          return new (t || PerfectScrollbarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PerfectScrollbarModule, {
          declarations: function declarations() {
            return [PerfectScrollbarComponent, PerfectScrollbarDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
          },
          exports: function exports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-perfect-scrollbar.js.map

      /***/

    },

    /***/
    "bdgK":
    /*!*************************************************************************!*\
      !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bdgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * A collection of shims that provide minimal functionality of the ES6 collections.
       *
       * These implementations are not meant to be used outside of the ResizeObserver
       * modules as they cover only a limited range of use cases.
       */

      /* eslint-disable require-jsdoc, valid-jsdoc */


      var MapShim = function () {
        if (typeof Map !== 'undefined') {
          return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */


        function getIndex(arr, key) {
          var result = -1;
          arr.some(function (entry, index) {
            if (entry[0] === key) {
              result = index;
              return true;
            }

            return false;
          });
          return result;
        }

        return (
          /** @class */
          function () {
            function class_1() {
              this.__entries__ = [];
            }

            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function get() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */

            class_1.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */


            class_1.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                this.__entries__[index][1] = value;
              } else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype["delete"] = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */


            class_1.prototype.clear = function () {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */


            class_1.prototype.forEach = function (callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }

              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };

            return class_1;
          }()
        );
      }();
      /**
       * Detects whether window and document objects are available in current environment.
       */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

      var global$1 = function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
        } // eslint-disable-next-line no-new-func


        return Function('return this')();
      }();
      /**
       * A shim for the requestAnimationFrame which falls back to the setTimeout if
       * first one is not supported.
       *
       * @returns {number} Requests' identifier.
       */


      var requestAnimationFrame$1 = function () {
        if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
        }

        return function (callback) {
          return setTimeout(function () {
            return callback(Date.now());
          }, 1000 / 60);
        };
      }(); // Defines minimum timeout before adding a trailing call.


      var trailingTimeout = 2;
      /**
       * Creates a wrapper function which ensures that provided callback will be
       * invoked only once during the specified delay period.
       *
       * @param {Function} callback - Function to be invoked after the delay period.
       * @param {number} delay - Delay after which to invoke callback.
       * @returns {Function}
       */

      function throttle(callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */

        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }

          if (trailingCall) {
            proxy();
          }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */


        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */


        function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            } // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.


            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
        }

        return proxy;
      } // Minimum delay before invoking the update of observers.


      var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
      // might affect dimensions of observed elements.

      var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

      var mutationObserverSupported = typeof MutationObserver !== 'undefined';
      /**
       * Singleton controller class which handles updates of ResizeObserver instances.
       */

      var ResizeObserverController =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
          /**
           * Indicates whether DOM listeners have been added.
           *
           * @private {boolean}
           */
          this.connected_ = false;
          /**
           * Tells that controller has subscribed for Mutation Events.
           *
           * @private {boolean}
           */

          this.mutationEventsAdded_ = false;
          /**
           * Keeps reference to the instance of MutationObserver.
           *
           * @private {MutationObserver}
           */

          this.mutationsObserver_ = null;
          /**
           * A list of connected observers.
           *
           * @private {Array<ResizeObserverSPI>}
           */

          this.observers_ = [];
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */


        ResizeObserverController.prototype.addObserver = function (observer) {
          if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
          } // Add listeners if they haven't been added yet.


          if (!this.connected_) {
            this.connect_();
          }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */


        ResizeObserverController.prototype.removeObserver = function (observer) {
          var observers = this.observers_;
          var index = observers.indexOf(observer); // Remove observer if it's present in registry.

          if (~index) {
            observers.splice(index, 1);
          } // Remove listeners if controller has no connected observers.


          if (!observers.length && this.connected_) {
            this.disconnect_();
          }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */


        ResizeObserverController.prototype.refresh = function () {
          var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
          // be future ones caused by CSS transitions.

          if (changesDetected) {
            this.refresh();
          }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */


        ResizeObserverController.prototype.updateObservers_ = function () {
          // Collect observers that have active observations.
          var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
          }); // Deliver notifications in a separate cycle in order to avoid any
          // collisions between observers, e.g. when multiple instances of
          // ResizeObserver are tracking the same element and the callback of one
          // of them changes content dimensions of the observed target. Sometimes
          // this may result in notifications being blocked for the rest of observers.

          activeObservers.forEach(function (observer) {
            return observer.broadcastActive();
          });
          return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.connect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already added.
          if (!isBrowser || this.connected_) {
            return;
          } // Subscription to the "Transitionend" event is used as a workaround for
          // delayed transitions. This way it's possible to capture at least the
          // final state of an element.


          document.addEventListener('transitionend', this.onTransitionEnd_);
          window.addEventListener('resize', this.refresh);

          if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
          }

          this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.disconnect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already removed.
          if (!isBrowser || !this.connected_) {
            return;
          }

          document.removeEventListener('transitionend', this.onTransitionEnd_);
          window.removeEventListener('resize', this.refresh);

          if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
          }

          if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
          }

          this.mutationsObserver_ = null;
          this.mutationEventsAdded_ = false;
          this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */


        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
          var _b = _a.propertyName,
              propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

          var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
          });

          if (isReflowProperty) {
            this.refresh();
          }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */


        ResizeObserverController.getInstance = function () {
          if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
          }

          return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */


        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
      }();
      /**
       * Defines non-writable/enumerable properties of the provided target object.
       *
       * @param {Object} target - Object for which to define properties.
       * @param {Object} props - Properties to be defined.
       * @returns {Object} Target object.
       */


      var defineConfigurable = function defineConfigurable(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key = _a[_i];
          Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }

        return target;
      };
      /**
       * Returns the global object associated with provided element.
       *
       * @param {Object} target
       * @returns {Object}
       */


      var getWindowOf = function getWindowOf(target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
        // provided element.

        return ownerGlobal || global$1;
      }; // Placeholder of an empty content rectangle.


      var emptyRect = createRectInit(0, 0, 0, 0);
      /**
       * Converts provided string to a number.
       *
       * @param {number|string} value
       * @returns {number}
       */

      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      /**
       * Extracts borders size from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @param {...string} positions - Borders positions (top, right, ...)
       * @returns {number}
       */


      function getBordersSize(styles) {
        var positions = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }

        return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];
          return size + toFloat(value);
        }, 0);
      }
      /**
       * Extracts paddings sizes from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @returns {Object} Paddings box.
       */


      function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position = positions_1[_i];
          var value = styles['padding-' + position];
          paddings[position] = toFloat(value);
        }

        return paddings;
      }
      /**
       * Calculates content rectangle of provided SVG element.
       *
       * @param {SVGGraphicsElement} target - Element content rectangle of which needs
       *      to be calculated.
       * @returns {DOMRectInit}
       */


      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      /**
       * Calculates content rectangle of provided HTMLElement.
       *
       * @param {HTMLElement} target - Element for which to calculate the content rectangle.
       * @returns {DOMRectInit}
       */


      function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth,
            clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.

        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.

        var width = toFloat(styles.width),
            height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).

        if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
          }
        } // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.


        if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.

          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
      }
      /**
       * Checks whether provided element is an instance of the SVGGraphicsElement.
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      var isSVGGraphicsElement = function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        } // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens


        return function (target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
        };
      }();
      /**
       * Checks whether provided element is a document element (<html>).
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      /**
       * Calculates an appropriate content rectangle for provided html or svg element.
       *
       * @param {Element} target - Element content rectangle of which needs to be calculated.
       * @returns {DOMRectInit}
       */


      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
      }
      /**
       * Creates rectangle with an interface of the DOMRectReadOnly.
       * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
       *
       * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
       * @returns {DOMRectReadOnly}
       */


      function createReadOnlyRect(_a) {
        var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

        defineConfigurable(rect, {
          x: x,
          y: y,
          width: width,
          height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
        });
        return rect;
      }
      /**
       * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
       * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
       *
       * @param {number} x - X coordinate.
       * @param {number} y - Y coordinate.
       * @param {number} width - Rectangle's width.
       * @param {number} height - Rectangle's height.
       * @returns {DOMRectInit}
       */


      function createRectInit(x, y, width, height) {
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      }
      /**
       * Class that is responsible for computations of the content rectangle of
       * provided DOM element and for keeping track of it's changes.
       */


      var ResizeObservation =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
          /**
           * Broadcasted width of content rectangle.
           *
           * @type {number}
           */
          this.broadcastWidth = 0;
          /**
           * Broadcasted height of content rectangle.
           *
           * @type {number}
           */

          this.broadcastHeight = 0;
          /**
           * Reference to the last observed content rectangle.
           *
           * @private {DOMRectInit}
           */

          this.contentRect_ = createRectInit(0, 0, 0, 0);
          this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */


        ResizeObservation.prototype.isActive = function () {
          var rect = getContentRect(this.target);
          this.contentRect_ = rect;
          return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */


        ResizeObservation.prototype.broadcastRect = function () {
          var rect = this.contentRect_;
          this.broadcastWidth = rect.width;
          this.broadcastHeight = rect.height;
          return rect;
        };

        return ResizeObservation;
      }();

      var ResizeObserverEntry =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
          var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
          // and are also not enumerable in the native implementation.
          //
          // Property accessors are not being used as they'd require to define a
          // private WeakMap storage which may cause memory leaks in browsers that
          // don't support this type of collections.

          defineConfigurable(this, {
            target: target,
            contentRect: contentRect
          });
        }

        return ResizeObserverEntry;
      }();

      var ResizeObserverSPI =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
          /**
           * Collection of resize observations that have detected changes in dimensions
           * of elements.
           *
           * @private {Array<ResizeObservation>}
           */
          this.activeObservations_ = [];
          /**
           * Registry of the ResizeObservation instances.
           *
           * @private {Map<Element, ResizeObservation>}
           */

          this.observations_ = new MapShim();

          if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
          }

          this.callback_ = callback;
          this.controller_ = controller;
          this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.observe = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is already being observed.

          if (observations.has(target)) {
            return;
          }

          observations.set(target, new ResizeObservation(target));
          this.controller_.addObserver(this); // Force the update of observations.

          this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.unobserve = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is not being observed.

          if (!observations.has(target)) {
            return;
          }

          observations["delete"](target);

          if (!observations.size) {
            this.controller_.removeObserver(this);
          }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.disconnect = function () {
          this.clearActive();
          this.observations_.clear();
          this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.gatherActive = function () {
          var _this = this;

          this.clearActive();
          this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
              _this.activeObservations_.push(observation);
            }
          });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.broadcastActive = function () {
          // Do nothing if observer doesn't have active observations.
          if (!this.hasActive()) {
            return;
          }

          var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

          var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
          });
          this.callback_.call(ctx, entries, ctx);
          this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */


        ResizeObserverSPI.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        };

        return ResizeObserverSPI;
      }(); // Registry of internal observers. If WeakMap is not available use current shim
      // for the Map collection as it has all required methods and because WeakMap
      // can't be fully polyfilled anyway.


      var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
      /**
       * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
       * exposing only those methods and properties that are defined in the spec.
       */

      var ResizeObserver =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
          if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
          }

          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          }

          var controller = ResizeObserverController.getInstance();
          var observer = new ResizeObserverSPI(callback, controller, this);
          observers.set(this, observer);
        }

        return ResizeObserver;
      }(); // Expose public methods of ResizeObserver.


      ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
          var _a;

          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });

      var index = function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
        }

        return ResizeObserver;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = index;
      /***/
    },

    /***/
    "h8Ro":
    /*!****************************************************************************!*\
      !*** ./src/app/components/home/confirm-dialog/confirm-dialog.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function h8Ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(coreService, dialogRef, data) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.coreService = coreService;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "confirmConfirm",
          value: function confirmConfirm() {
            this.dialogRef.close('Ok');
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 0,
        vars: 0,
        template: function ConfirmDialogComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "hnAt":
    /*!************************************************************!*\
      !*** ./src/app/components/home/footer/footer.component.ts ***!
      \************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function hnAt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "k7+O":
    /*!****************************************************!*\
      !*** ./node_modules/screenfull/dist/screenfull.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function k7O(module, exports, __webpack_require__) {
      /*!
      * screenfull
      * v5.1.0 - 2020-12-24
      * (c) Sindre Sorhus; MIT License
      */
      (function () {
        'use strict';

        var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
        var isCommonjs = true && module.exports;

        var fn = function () {
          var val;
          var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
          ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
          ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
          var i = 0;
          var l = fnMap.length;
          var ret = {};

          for (; i < l; i++) {
            val = fnMap[i];

            if (val && val[1] in document) {
              for (i = 0; i < val.length; i++) {
                ret[fnMap[0][i]] = val[i];
              }

              return ret;
            }
          }

          return false;
        }();

        var eventNameMap = {
          change: fn.fullscreenchange,
          error: fn.fullscreenerror
        };
        var screenfull = {
          request: function request(element, options) {
            return new Promise(function (resolve, reject) {
              var onFullScreenEntered = function () {
                this.off('change', onFullScreenEntered);
                resolve();
              }.bind(this);

              this.on('change', onFullScreenEntered);
              element = element || document.documentElement;
              var returnPromise = element[fn.requestFullscreen](options);

              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenEntered)["catch"](reject);
              }
            }.bind(this));
          },
          exit: function exit() {
            return new Promise(function (resolve, reject) {
              if (!this.isFullscreen) {
                resolve();
                return;
              }

              var onFullScreenExit = function () {
                this.off('change', onFullScreenExit);
                resolve();
              }.bind(this);

              this.on('change', onFullScreenExit);
              var returnPromise = document[fn.exitFullscreen]();

              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenExit)["catch"](reject);
              }
            }.bind(this));
          },
          toggle: function toggle(element, options) {
            return this.isFullscreen ? this.exit() : this.request(element, options);
          },
          onchange: function onchange(callback) {
            this.on('change', callback);
          },
          onerror: function onerror(callback) {
            this.on('error', callback);
          },
          on: function on(event, callback) {
            var eventName = eventNameMap[event];

            if (eventName) {
              document.addEventListener(eventName, callback, false);
            }
          },
          off: function off(event, callback) {
            var eventName = eventNameMap[event];

            if (eventName) {
              document.removeEventListener(eventName, callback, false);
            }
          },
          raw: fn
        };

        if (!fn) {
          if (isCommonjs) {
            module.exports = {
              isEnabled: false
            };
          } else {
            window.screenfull = {
              isEnabled: false
            };
          }

          return;
        }

        Object.defineProperties(screenfull, {
          isFullscreen: {
            get: function get() {
              return Boolean(document[fn.fullscreenElement]);
            }
          },
          element: {
            enumerable: true,
            get: function get() {
              return document[fn.fullscreenElement];
            }
          },
          isEnabled: {
            enumerable: true,
            get: function get() {
              // Coerce to boolean in case of old WebKit
              return Boolean(document[fn.fullscreenEnabled]);
            }
          }
        });

        if (isCommonjs) {
          module.exports = screenfull;
        } else {
          window.screenfull = screenfull;
        }
      })();
      /***/

    },

    /***/
    "lTdu":
    /*!**************************************************************!*\
      !*** ./src/app/components/home/landing/landing.component.ts ***!
      \**************************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function lTdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent(pageTitleService, titleService, translate) {
          _classCallCheck(this, LandingComponent);

          this.pageTitleService = pageTitleService;
          this.titleService = titleService;
          this.translate = translate;
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageTitleService.setTitle('Home');
            this.titleService.setTitle(this.translate.instant('Home'));
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 0,
        vars: 0,
        template: function LandingComponent_Template(rf, ctx) {},
        styles: [".images[_ngcontent-%COMP%]{\r\n  text-align:center;\r\n  margin:5% auto;\r\n}\r\n.images[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin:0px 2%;\r\n  display:inline-block;\r\n  text-decoration:none;\r\n  color:midnightblue;\r\n}\r\n.home-box-icon[_ngcontent-%COMP%]{\r\n  font-size: 7vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlc3tcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW46NSUgYXV0bztcclxufVxyXG4uaW1hZ2VzIGF7XHJcbiAgbWFyZ2luOjBweCAyJTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBjb2xvcjptaWRuaWdodGJsdWU7XHJcbn1cclxuXHJcbi5ob21lLWJveC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogN3Z3O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "t/UT":
    /*!**********************************************************************!*\
      !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function tUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*!
       * perfect-scrollbar v1.5.0
       * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
       * Licensed under MIT
       */


      function get(element) {
        return getComputedStyle(element);
      }

      function set(element, obj) {
        for (var key in obj) {
          var val = obj[key];

          if (typeof val === 'number') {
            val = val + "px";
          }

          element.style[key] = val;
        }

        return element;
      }

      function div(className) {
        var div = document.createElement('div');
        div.className = className;
        return div;
      }

      var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

      function matches(element, query) {
        if (!elMatches) {
          throw new Error('No element matching method supported');
        }

        return elMatches.call(element, query);
      }

      function remove(element) {
        if (element.remove) {
          element.remove();
        } else {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }

      function queryChildren(element, selector) {
        return Array.prototype.filter.call(element.children, function (child) {
          return matches(child, selector);
        });
      }

      var cls = {
        main: 'ps',
        rtl: 'ps__rtl',
        element: {
          thumb: function thumb(x) {
            return "ps__thumb-" + x;
          },
          rail: function rail(x) {
            return "ps__rail-" + x;
          },
          consuming: 'ps__child--consume'
        },
        state: {
          focus: 'ps--focus',
          clicking: 'ps--clicking',
          active: function active(x) {
            return "ps--active-" + x;
          },
          scrolling: function scrolling(x) {
            return "ps--scrolling-" + x;
          }
        }
      };
      /*
       * Helper methods
       */

      var scrollingClassTimeout = {
        x: null,
        y: null
      };

      function addScrollingClass(i, x) {
        var classList = i.element.classList;
        var className = cls.state.scrolling(x);

        if (classList.contains(className)) {
          clearTimeout(scrollingClassTimeout[x]);
        } else {
          classList.add(className);
        }
      }

      function removeScrollingClass(i, x) {
        scrollingClassTimeout[x] = setTimeout(function () {
          return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
        }, i.settings.scrollingThreshold);
      }

      function setScrollingClassInstantly(i, x) {
        addScrollingClass(i, x);
        removeScrollingClass(i, x);
      }

      var EventElement = function EventElement(element) {
        this.element = element;
        this.handlers = {};
      };

      var prototypeAccessors = {
        isEmpty: {
          configurable: true
        }
      };

      EventElement.prototype.bind = function bind(eventName, handler) {
        if (typeof this.handlers[eventName] === 'undefined') {
          this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(handler);
        this.element.addEventListener(eventName, handler, false);
      };

      EventElement.prototype.unbind = function unbind(eventName, target) {
        var this$1 = this;
        this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
          if (target && handler !== target) {
            return true;
          }

          this$1.element.removeEventListener(eventName, handler, false);
          return false;
        });
      };

      EventElement.prototype.unbindAll = function unbindAll() {
        for (var name in this.handlers) {
          this.unbind(name);
        }
      };

      prototypeAccessors.isEmpty.get = function () {
        var this$1 = this;
        return Object.keys(this.handlers).every(function (key) {
          return this$1.handlers[key].length === 0;
        });
      };

      Object.defineProperties(EventElement.prototype, prototypeAccessors);

      var EventManager = function EventManager() {
        this.eventElements = [];
      };

      EventManager.prototype.eventElement = function eventElement(element) {
        var ee = this.eventElements.filter(function (ee) {
          return ee.element === element;
        })[0];

        if (!ee) {
          ee = new EventElement(element);
          this.eventElements.push(ee);
        }

        return ee;
      };

      EventManager.prototype.bind = function bind(element, eventName, handler) {
        this.eventElement(element).bind(eventName, handler);
      };

      EventManager.prototype.unbind = function unbind(element, eventName, handler) {
        var ee = this.eventElement(element);
        ee.unbind(eventName, handler);

        if (ee.isEmpty) {
          // remove
          this.eventElements.splice(this.eventElements.indexOf(ee), 1);
        }
      };

      EventManager.prototype.unbindAll = function unbindAll() {
        this.eventElements.forEach(function (e) {
          return e.unbindAll();
        });
        this.eventElements = [];
      };

      EventManager.prototype.once = function once(element, eventName, handler) {
        var ee = this.eventElement(element);

        var onceHandler = function onceHandler(evt) {
          ee.unbind(eventName, onceHandler);
          handler(evt);
        };

        ee.bind(eventName, onceHandler);
      };

      function createEvent(name) {
        if (typeof window.CustomEvent === 'function') {
          return new CustomEvent(name);
        } else {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(name, false, false, undefined);
          return evt;
        }
      }

      function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var fields;

        if (axis === 'top') {
          fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
        } else if (axis === 'left') {
          fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
        } else {
          throw new Error('A proper axis should be provided');
        }

        processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
      }

      function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
        var contentHeight = ref[0];
        var containerHeight = ref[1];
        var scrollTop = ref[2];
        var y = ref[3];
        var up = ref[4];
        var down = ref[5];
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var element = i.element; // reset reach

        i.reach[y] = null; // 1 for subpixel rounding

        if (element[scrollTop] < 1) {
          i.reach[y] = 'start';
        } // 1 for subpixel rounding


        if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
          i.reach[y] = 'end';
        }

        if (diff) {
          element.dispatchEvent(createEvent("ps-scroll-" + y));

          if (diff < 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + up));
          } else if (diff > 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + down));
          }

          if (useScrollingClass) {
            setScrollingClassInstantly(i, y);
          }
        }

        if (i.reach[y] && (diff || forceFireReachEvent)) {
          element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
        }
      }

      function toInt(x) {
        return parseInt(x, 10) || 0;
      }

      function isEditable(el) {
        return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
      }

      function outerWidth(element) {
        var styles = get(element);
        return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
      }

      var env = {
        isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
        supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
        isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
      };

      function updateGeometry(i) {
        var element = i.element;
        var roundedScrollTop = Math.floor(element.scrollTop);
        var rect = element.getBoundingClientRect();
        i.containerWidth = Math.ceil(rect.width);
        i.containerHeight = Math.ceil(rect.height);
        i.contentWidth = element.scrollWidth;
        i.contentHeight = element.scrollHeight;

        if (!element.contains(i.scrollbarXRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('x')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarXRail);
        }

        if (!element.contains(i.scrollbarYRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('y')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarYRail);
        }

        if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
          i.scrollbarXActive = true;
          i.railXWidth = i.containerWidth - i.railXMarginWidth;
          i.railXRatio = i.containerWidth / i.railXWidth;
          i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
          i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
        } else {
          i.scrollbarXActive = false;
        }

        if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
          i.scrollbarYActive = true;
          i.railYHeight = i.containerHeight - i.railYMarginHeight;
          i.railYRatio = i.containerHeight / i.railYHeight;
          i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
          i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
        } else {
          i.scrollbarYActive = false;
        }

        if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
          i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
        }

        if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
          i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
        }

        updateCss(element, i);

        if (i.scrollbarXActive) {
          element.classList.add(cls.state.active('x'));
        } else {
          element.classList.remove(cls.state.active('x'));
          i.scrollbarXWidth = 0;
          i.scrollbarXLeft = 0;
          element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
        }

        if (i.scrollbarYActive) {
          element.classList.add(cls.state.active('y'));
        } else {
          element.classList.remove(cls.state.active('y'));
          i.scrollbarYHeight = 0;
          i.scrollbarYTop = 0;
          element.scrollTop = 0;
        }
      }

      function getThumbSize(i, thumbSize) {
        if (i.settings.minScrollbarLength) {
          thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
        }

        if (i.settings.maxScrollbarLength) {
          thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
        }

        return thumbSize;
      }

      function updateCss(element, i) {
        var xRailOffset = {
          width: i.railXWidth
        };
        var roundedScrollTop = Math.floor(element.scrollTop);

        if (i.isRtl) {
          xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
        } else {
          xRailOffset.left = element.scrollLeft;
        }

        if (i.isScrollbarXUsingBottom) {
          xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
        } else {
          xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
        }

        set(i.scrollbarXRail, xRailOffset);
        var yRailOffset = {
          top: roundedScrollTop,
          height: i.railYHeight
        };

        if (i.isScrollbarYUsingRight) {
          if (i.isRtl) {
            yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
          } else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
          }
        } else {
          if (i.isRtl) {
            yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
          } else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
          }
        }

        set(i.scrollbarYRail, yRailOffset);
        set(i.scrollbarX, {
          left: i.scrollbarXLeft,
          width: i.scrollbarXWidth - i.railBorderXWidth
        });
        set(i.scrollbarY, {
          top: i.scrollbarYTop,
          height: i.scrollbarYHeight - i.railBorderYWidth
        });
      }

      function clickRail(i) {
        var element = i.element;
        i.event.bind(i.scrollbarY, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
          var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
          var direction = positionTop > i.scrollbarYTop ? 1 : -1;
          i.element.scrollTop += direction * i.containerHeight;
          updateGeometry(i);
          e.stopPropagation();
        });
        i.event.bind(i.scrollbarX, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
          var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
          var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
          i.element.scrollLeft += direction * i.containerWidth;
          updateGeometry(i);
          e.stopPropagation();
        });
      }

      function dragThumb(i) {
        bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
        bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
      }

      function bindMouseScrollHandler(i, ref) {
        var containerHeight = ref[0];
        var contentHeight = ref[1];
        var pageY = ref[2];
        var railYHeight = ref[3];
        var scrollbarY = ref[4];
        var scrollbarYHeight = ref[5];
        var scrollTop = ref[6];
        var y = ref[7];
        var scrollbarYRail = ref[8];
        var element = i.element;
        var startingScrollTop = null;
        var startingMousePageY = null;
        var scrollBy = null;

        function mouseMoveHandler(e) {
          if (e.touches && e.touches[0]) {
            e[pageY] = e.touches[0].pageY;
          }

          element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
          addScrollingClass(i, y);
          updateGeometry(i);
          e.stopPropagation();
          e.preventDefault();
        }

        function mouseUpHandler() {
          removeScrollingClass(i, y);
          i[scrollbarYRail].classList.remove(cls.state.clicking);
          i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        }

        function bindMoves(e, touchMode) {
          startingScrollTop = element[scrollTop];

          if (touchMode && e.touches) {
            e[pageY] = e.touches[0].pageY;
          }

          startingMousePageY = e[pageY];
          scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

          if (!touchMode) {
            i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
            e.preventDefault();
          } else {
            i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
          }

          i[scrollbarYRail].classList.add(cls.state.clicking);
          e.stopPropagation();
        }

        i.event.bind(i[scrollbarY], 'mousedown', function (e) {
          bindMoves(e);
        });
        i.event.bind(i[scrollbarY], 'touchstart', function (e) {
          bindMoves(e, true);
        });
      }

      function keyboard(i) {
        var element = i.element;

        var elementHovered = function elementHovered() {
          return matches(element, ':hover');
        };

        var scrollbarFocused = function scrollbarFocused() {
          return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
        };

        function shouldPreventDefault(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);

          if (deltaX === 0) {
            if (!i.scrollbarYActive) {
              return false;
            }

            if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
              return !i.settings.wheelPropagation;
            }
          }

          var scrollLeft = element.scrollLeft;

          if (deltaY === 0) {
            if (!i.scrollbarXActive) {
              return false;
            }

            if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
              return !i.settings.wheelPropagation;
            }
          }

          return true;
        }

        i.event.bind(i.ownerDocument, 'keydown', function (e) {
          if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
            return;
          }

          if (!elementHovered() && !scrollbarFocused()) {
            return;
          }

          var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

          if (activeElement) {
            if (activeElement.tagName === 'IFRAME') {
              activeElement = activeElement.contentDocument.activeElement;
            } else {
              // go deeper if element is a webcomponent
              while (activeElement.shadowRoot) {
                activeElement = activeElement.shadowRoot.activeElement;
              }
            }

            if (isEditable(activeElement)) {
              return;
            }
          }

          var deltaX = 0;
          var deltaY = 0;

          switch (e.which) {
            case 37:
              // left
              if (e.metaKey) {
                deltaX = -i.contentWidth;
              } else if (e.altKey) {
                deltaX = -i.containerWidth;
              } else {
                deltaX = -30;
              }

              break;

            case 38:
              // up
              if (e.metaKey) {
                deltaY = i.contentHeight;
              } else if (e.altKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = 30;
              }

              break;

            case 39:
              // right
              if (e.metaKey) {
                deltaX = i.contentWidth;
              } else if (e.altKey) {
                deltaX = i.containerWidth;
              } else {
                deltaX = 30;
              }

              break;

            case 40:
              // down
              if (e.metaKey) {
                deltaY = -i.contentHeight;
              } else if (e.altKey) {
                deltaY = -i.containerHeight;
              } else {
                deltaY = -30;
              }

              break;

            case 32:
              // space bar
              if (e.shiftKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = -i.containerHeight;
              }

              break;

            case 33:
              // page up
              deltaY = i.containerHeight;
              break;

            case 34:
              // page down
              deltaY = -i.containerHeight;
              break;

            case 36:
              // home
              deltaY = i.contentHeight;
              break;

            case 35:
              // end
              deltaY = -i.contentHeight;
              break;

            default:
              return;
          }

          if (i.settings.suppressScrollX && deltaX !== 0) {
            return;
          }

          if (i.settings.suppressScrollY && deltaY !== 0) {
            return;
          }

          element.scrollTop -= deltaY;
          element.scrollLeft += deltaX;
          updateGeometry(i);

          if (shouldPreventDefault(deltaX, deltaY)) {
            e.preventDefault();
          }
        });
      }

      function wheel(i) {
        var element = i.element;

        function shouldPreventDefault(deltaX, deltaY) {
          var roundedScrollTop = Math.floor(element.scrollTop);
          var isTop = element.scrollTop === 0;
          var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
          var isLeft = element.scrollLeft === 0;
          var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
          var hitsBound; // pick axis with primary direction

          if (Math.abs(deltaY) > Math.abs(deltaX)) {
            hitsBound = isTop || isBottom;
          } else {
            hitsBound = isLeft || isRight;
          }

          return hitsBound ? !i.settings.wheelPropagation : true;
        }

        function getDeltaFromEvent(e) {
          var deltaX = e.deltaX;
          var deltaY = -1 * e.deltaY;

          if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
            // OS X Safari
            deltaX = -1 * e.wheelDeltaX / 6;
            deltaY = e.wheelDeltaY / 6;
          }

          if (e.deltaMode && e.deltaMode === 1) {
            // Firefox in deltaMode 1: Line scrolling
            deltaX *= 10;
            deltaY *= 10;
          }

          if (deltaX !== deltaX && deltaY !== deltaY
          /* NaN checks */
          ) {
              // IE in some mouse drivers
              deltaX = 0;
              deltaY = e.wheelDelta;
            }

          if (e.shiftKey) {
            // reverse axis with shift key
            return [-deltaY, -deltaX];
          }

          return [deltaX, deltaY];
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          // FIXME: this is a workaround for <select> issue in FF and IE #571
          if (!env.isWebKit && element.querySelector('select:focus')) {
            return true;
          }

          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function mousewheelHandler(e) {
          var ref = getDeltaFromEvent(e);
          var deltaX = ref[0];
          var deltaY = ref[1];

          if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
            return;
          }

          var shouldPrevent = false;

          if (!i.settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            element.scrollTop -= deltaY * i.settings.wheelSpeed;
            element.scrollLeft += deltaX * i.settings.wheelSpeed;
          } else if (i.scrollbarYActive && !i.scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
              element.scrollTop -= deltaY * i.settings.wheelSpeed;
            } else {
              element.scrollTop += deltaX * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          } else if (i.scrollbarXActive && !i.scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
              element.scrollLeft += deltaX * i.settings.wheelSpeed;
            } else {
              element.scrollLeft -= deltaY * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          }

          updateGeometry(i);
          shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

          if (shouldPrevent && !e.ctrlKey) {
            e.stopPropagation();
            e.preventDefault();
          }
        }

        if (typeof window.onwheel !== 'undefined') {
          i.event.bind(element, 'wheel', mousewheelHandler);
        } else if (typeof window.onmousewheel !== 'undefined') {
          i.event.bind(element, 'mousewheel', mousewheelHandler);
        }
      }

      function touch(i) {
        if (!env.supportsTouch && !env.supportsIePointer) {
          return;
        }

        var element = i.element;

        function shouldPrevent(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);
          var scrollLeft = element.scrollLeft;
          var magnitudeX = Math.abs(deltaX);
          var magnitudeY = Math.abs(deltaY);

          if (magnitudeY > magnitudeX) {
            // user is perhaps trying to swipe up/down the page
            if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
              // set prevent for mobile Chrome refresh
              return window.scrollY === 0 && deltaY > 0 && env.isChrome;
            }
          } else if (magnitudeX > magnitudeY) {
            // user is perhaps trying to swipe left/right across the page
            if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
              return true;
            }
          }

          return true;
        }

        function applyTouchMove(differenceX, differenceY) {
          element.scrollTop -= differenceY;
          element.scrollLeft -= differenceX;
          updateGeometry(i);
        }

        var startOffset = {};
        var startTime = 0;
        var speed = {};
        var easingLoop = null;

        function getTouch(e) {
          if (e.targetTouches) {
            return e.targetTouches[0];
          } else {
            // Maybe IE pointer
            return e;
          }
        }

        function shouldHandle(e) {
          if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
            return false;
          }

          if (e.targetTouches && e.targetTouches.length === 1) {
            return true;
          }

          if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
            return true;
          }

          return false;
        }

        function touchStart(e) {
          if (!shouldHandle(e)) {
            return;
          }

          var touch = getTouch(e);
          startOffset.pageX = touch.pageX;
          startOffset.pageY = touch.pageY;
          startTime = new Date().getTime();

          if (easingLoop !== null) {
            clearInterval(easingLoop);
          }
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function touchMove(e) {
          if (shouldHandle(e)) {
            var touch = getTouch(e);
            var currentOffset = {
              pageX: touch.pageX,
              pageY: touch.pageY
            };
            var differenceX = currentOffset.pageX - startOffset.pageX;
            var differenceY = currentOffset.pageY - startOffset.pageY;

            if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
              return;
            }

            applyTouchMove(differenceX, differenceY);
            startOffset = currentOffset;
            var currentTime = new Date().getTime();
            var timeGap = currentTime - startTime;

            if (timeGap > 0) {
              speed.x = differenceX / timeGap;
              speed.y = differenceY / timeGap;
              startTime = currentTime;
            }

            if (shouldPrevent(differenceX, differenceY)) {
              e.preventDefault();
            }
          }
        }

        function touchEnd() {
          if (i.settings.swipeEasing) {
            clearInterval(easingLoop);
            easingLoop = setInterval(function () {
              if (i.isInitialized) {
                clearInterval(easingLoop);
                return;
              }

              if (!speed.x && !speed.y) {
                clearInterval(easingLoop);
                return;
              }

              if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                clearInterval(easingLoop);
                return;
              }

              applyTouchMove(speed.x * 30, speed.y * 30);
              speed.x *= 0.8;
              speed.y *= 0.8;
            }, 10);
          }
        }

        if (env.supportsTouch) {
          i.event.bind(element, 'touchstart', touchStart);
          i.event.bind(element, 'touchmove', touchMove);
          i.event.bind(element, 'touchend', touchEnd);
        } else if (env.supportsIePointer) {
          if (window.PointerEvent) {
            i.event.bind(element, 'pointerdown', touchStart);
            i.event.bind(element, 'pointermove', touchMove);
            i.event.bind(element, 'pointerup', touchEnd);
          } else if (window.MSPointerEvent) {
            i.event.bind(element, 'MSPointerDown', touchStart);
            i.event.bind(element, 'MSPointerMove', touchMove);
            i.event.bind(element, 'MSPointerUp', touchEnd);
          }
        }
      }

      var defaultSettings = function defaultSettings() {
        return {
          handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1000,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: false,
          suppressScrollY: false,
          swipeEasing: true,
          useBothWheelAxes: false,
          wheelPropagation: true,
          wheelSpeed: 1
        };
      };

      var handlers = {
        'click-rail': clickRail,
        'drag-thumb': dragThumb,
        keyboard: keyboard,
        wheel: wheel,
        touch: touch
      };

      var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
        var this$1 = this;
        if (userSettings === void 0) userSettings = {};

        if (typeof element === 'string') {
          element = document.querySelector(element);
        }

        if (!element || !element.nodeName) {
          throw new Error('no element is specified to initialize PerfectScrollbar');
        }

        this.element = element;
        element.classList.add(cls.main);
        this.settings = defaultSettings();

        for (var key in userSettings) {
          this.settings[key] = userSettings[key];
        }

        this.containerWidth = null;
        this.containerHeight = null;
        this.contentWidth = null;
        this.contentHeight = null;

        var focus = function focus() {
          return element.classList.add(cls.state.focus);
        };

        var blur = function blur() {
          return element.classList.remove(cls.state.focus);
        };

        this.isRtl = get(element).direction === 'rtl';

        if (this.isRtl === true) {
          element.classList.add(cls.rtl);
        }

        this.isNegativeScroll = function () {
          var originalScrollLeft = element.scrollLeft;
          var result = null;
          element.scrollLeft = -1;
          result = element.scrollLeft < 0;
          element.scrollLeft = originalScrollLeft;
          return result;
        }();

        this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
        this.event = new EventManager();
        this.ownerDocument = element.ownerDocument || document;
        this.scrollbarXRail = div(cls.element.rail('x'));
        element.appendChild(this.scrollbarXRail);
        this.scrollbarX = div(cls.element.thumb('x'));
        this.scrollbarXRail.appendChild(this.scrollbarX);
        this.scrollbarX.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarX, 'focus', focus);
        this.event.bind(this.scrollbarX, 'blur', blur);
        this.scrollbarXActive = null;
        this.scrollbarXWidth = null;
        this.scrollbarXLeft = null;
        var railXStyle = get(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

        if (isNaN(this.scrollbarXBottom)) {
          this.isScrollbarXUsingBottom = false;
          this.scrollbarXTop = toInt(railXStyle.top);
        } else {
          this.isScrollbarXUsingBottom = true;
        }

        this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        set(this.scrollbarXRail, {
          display: ''
        });
        this.railXWidth = null;
        this.railXRatio = null;
        this.scrollbarYRail = div(cls.element.rail('y'));
        element.appendChild(this.scrollbarYRail);
        this.scrollbarY = div(cls.element.thumb('y'));
        this.scrollbarYRail.appendChild(this.scrollbarY);
        this.scrollbarY.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarY, 'focus', focus);
        this.event.bind(this.scrollbarY, 'blur', blur);
        this.scrollbarYActive = null;
        this.scrollbarYHeight = null;
        this.scrollbarYTop = null;
        var railYStyle = get(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(railYStyle.right, 10);

        if (isNaN(this.scrollbarYRight)) {
          this.isScrollbarYUsingRight = false;
          this.scrollbarYLeft = toInt(railYStyle.left);
        } else {
          this.isScrollbarYUsingRight = true;
        }

        this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
        this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
        set(this.scrollbarYRail, {
          display: ''
        });
        this.railYHeight = null;
        this.railYRatio = null;
        this.reach = {
          x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
          y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
        };
        this.isAlive = true;
        this.settings.handlers.forEach(function (handlerName) {
          return handlers[handlerName](this$1);
        });
        this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

        this.lastScrollLeft = element.scrollLeft; // for onScroll only

        this.event.bind(this.element, 'scroll', function (e) {
          return this$1.onScroll(e);
        });
        updateGeometry(this);
      };

      PerfectScrollbar.prototype.update = function update() {
        if (!this.isAlive) {
          return;
        } // Recalcuate negative scrollLeft adjustment


        this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
        this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

        set(this.scrollbarXRail, {
          display: 'none'
        });
        set(this.scrollbarYRail, {
          display: 'none'
        });
        updateGeometry(this);
        processScrollDiff(this, 'top', 0, false, true);
        processScrollDiff(this, 'left', 0, false, true);
        set(this.scrollbarXRail, {
          display: ''
        });
        set(this.scrollbarYRail, {
          display: ''
        });
      };

      PerfectScrollbar.prototype.onScroll = function onScroll(e) {
        if (!this.isAlive) {
          return;
        }

        updateGeometry(this);
        processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
        processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
        this.lastScrollTop = Math.floor(this.element.scrollTop);
        this.lastScrollLeft = this.element.scrollLeft;
      };

      PerfectScrollbar.prototype.destroy = function destroy() {
        if (!this.isAlive) {
          return;
        }

        this.event.unbindAll();
        remove(this.scrollbarX);
        remove(this.scrollbarY);
        remove(this.scrollbarXRail);
        remove(this.scrollbarYRail);
        this.removePsClasses(); // unset elements

        this.element = null;
        this.scrollbarX = null;
        this.scrollbarY = null;
        this.scrollbarXRail = null;
        this.scrollbarYRail = null;
        this.isAlive = false;
      };

      PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
        this.element.className = this.element.className.split(' ').filter(function (name) {
          return !name.match(/^ps([-_].+|)$/);
        }).join(' ');
      };
      /* harmony default export */


      __webpack_exports__["default"] = PerfectScrollbar; //# sourceMappingURL=perfect-scrollbar.esm.js.map

      /***/
    },

    /***/
    "xjjA":
    /*!************************************************************!*\
      !*** ./src/app/components/home/header/header.component.ts ***!
      \************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function xjjA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services */
      "dJ3e");
      /* harmony import */


      var src_app_core_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/page-title.service */
      "PzU0");
      /* harmony import */


      var ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng5-breadcrumb */
      "xxGY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-tour-md-menu */
      "PPT2");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _language_drop_down_language_drop_down_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../language-drop-down/language-drop-down.component */
      "1a03");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function HeaderComponent_mat_icon_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_mat_icon_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fullscreen_exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var screenfull = __webpack_require__(
      /*! screenfull */
      "k7+O");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(coreService, pageTitleService, credentialService, breadcrumbService) {
          _classCallCheck(this, HeaderComponent);

          this.coreService = coreService;
          this.pageTitleService = pageTitleService;
          this.credentialService = credentialService;
          this.breadcrumbService = breadcrumbService;
          this.isFullscreen = false;
          this.addBreadcrumb();
        }

        _createClass(HeaderComponent, [{
          key: "addBreadcrumb",
          value: function addBreadcrumb() {
            this.breadcrumbService.addFriendlyNameForRoute('/home', 'Home');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.pageTitleService.title.subscribe(function (val) {
              _this7.header = val;
            });
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
          }
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.credentialService.logout();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__["CredentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 35,
        vars: 15,
        consts: [["id", "appToolbar", 1, "gene-header-toolbar"], ["tourAnchor", "start.tour", 1, "gene-ham-icon"], ["mat-mini-fab", "", "color", "primary", "mat-card-icon", "", 3, "click"], [1, "navbar-brand"], [1, "gene-breadcrumbs"], ["fxFlex", ""], [1, "secondary-menu"], ["fxHide", "true", "fxHide.gt-sm", "false", "mat-button", "", "tourAnchor", "tour-full-screen", 1, "fullscreen-toggle", 3, "click"], [4, "ngIf"], ["mat-button", "", 1, "user-button", 3, "matMenuTriggerFor"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["x-position", "before", "y-position", "below", 1, "user-menu"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "breadcrumb", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() {
              return ctx.toggleFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_mat_icon_12_Template, 2, 0, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_mat_icon_13_Template, 2, 0, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-language-drop-down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_29_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.header));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullscreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFullscreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, "Hi"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, "Admin"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 13, "Logout"));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_5__["TourAnchorMatMenuDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], ng5_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _language_drop_down_language_drop_down_component__WEBPACK_IMPORTED_MODULE_12__["LanguageDropDownComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-home-home-module-es5.js.map