function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-dashboard/main-dashboard.component */
    "./src/app/dashboard/main-dashboard/main-dashboard.component.ts");
    /* harmony import */


    var _modules_sales_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modules/sales/catalogue/catalogue.component */
    "./src/app/modules/sales/catalogue/catalogue.component.ts");
    /* harmony import */


    var _modules_bikes_bikes_list_bikes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modules/bikes/bikes-list/bikes-list.component */
    "./src/app/modules/bikes/bikes-list/bikes-list.component.ts");
    /* harmony import */


    var _modules_bikes_bikes_update_bikes_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modules/bikes/bikes-update/bikes-update.component */
    "./src/app/modules/bikes/bikes-update/bikes-update.component.ts");

    var routes = [{
      path: '',
      component: _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MainDashboardComponent"],
      children: [{
        path: 'catalogo',
        component: _modules_sales_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_3__["CatalogueComponent"]
      }, {
        path: 'bikes-list',
        component: _modules_bikes_bikes_list_bikes_list_component__WEBPACK_IMPORTED_MODULE_4__["BikesListComponent"]
      }, {
        path: 'bikes-update',
        component: _modules_bikes_bikes_update_bikes_update_component__WEBPACK_IMPORTED_MODULE_5__["BikesUpdateComponent"]
      }, {
        path: 'clients',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-clients-clients-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~modules-bikes-bikes-module~modules-clients-clients-module~modules~78aadd99"), __webpack_require__.e("default~dashboard-dashboard-module~modules-clients-clients-module~modules-sales-sales-module"), __webpack_require__.e("modules-clients-clients-module")]).then(__webpack_require__.bind(null,
          /*! ../modules/clients/clients.module */
          "./src/app/modules/clients/clients.module.ts")).then(function (m) {
            return m.ClientsModule;
          });
        }
      }]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/dashboard/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/dashboard/sidebar/sidebar.component.ts");
    /* harmony import */


    var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-dashboard/main-dashboard.component */
    "./src/app/dashboard/main-dashboard/main-dashboard.component.ts");
    /* harmony import */


    var _modules_sales_sales_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modules/sales/sales.module */
    "./src/app/modules/sales/sales.module.ts");
    /* harmony import */


    var _modules_bikes_bikes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modules/bikes/bikes.module */
    "./src/app/modules/bikes/bikes.module.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var DashboardModule = function DashboardModule(library) {
      _classCallCheck(this, DashboardModule);

      // Add an icon to the library for convenient access in other components
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCoffee"]);
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStore"]);
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBicycle"]);
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSearch"]);
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faAngleDoubleLeft"]);
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faAngleDoubleRight"]);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _modules_sales_sales_module__WEBPACK_IMPORTED_MODULE_6__["SalesModule"], _modules_bikes_bikes_module__WEBPACK_IMPORTED_MODULE_7__["BikesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MainDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _modules_sales_sales_module__WEBPACK_IMPORTED_MODULE_6__["SalesModule"], _modules_bikes_bikes_module__WEBPACK_IMPORTED_MODULE_7__["BikesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MainDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _modules_sales_sales_module__WEBPACK_IMPORTED_MODULE_6__["SalesModule"], _modules_bikes_bikes_module__WEBPACK_IMPORTED_MODULE_7__["BikesModule"]]
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/main-dashboard/main-dashboard.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/dashboard/main-dashboard/main-dashboard.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MainDashboardComponent */

  /***/
  function srcAppDashboardMainDashboardMainDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function () {
      return MainDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/dashboard/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/dashboard/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "collapsed-main-container": a0
      };
    };

    var MainDashboardComponent = /*#__PURE__*/function () {
      function MainDashboardComponent() {
        _classCallCheck(this, MainDashboardComponent);
      }

      _createClass(MainDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.collapsedSideBar = true;
        }
      }, {
        key: "receiveCollapsed",
        value: function receiveCollapsed($event) {
          this.collapsedSideBar = $event;
          console.log('event ', this.collapsedSideBar);
        }
      }]);

      return MainDashboardComponent;
    }();

    MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) {
      return new (t || MainDashboardComponent)();
    };

    MainDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainDashboardComponent,
      selectors: [["app-main-dashboard"]],
      decls: 5,
      vars: 3,
      consts: [[3, "collapsedEvent"], [1, "main-container", 3, "ngClass"]],
      template: function MainDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sidebar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collapsedEvent", function MainDashboardComponent_Template_app_sidebar_collapsedEvent_2_listener($event) {
            return ctx.receiveCollapsed($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.collapsedSideBar));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 235px !important;\n  margin-bottom: 35px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  position: relative;\n}\n.collapsed-main-container[_ngcontent-%COMP%] {\n  margin-left: 75px !important;\n}\n.collapsed[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n.collapsed[_ngcontent-%COMP%]   .footer-dashboard[_ngcontent-%COMP%] {\n  left: 70px !important;\n}\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n@media print {\n  .main-container[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n/*# sourceMappingURL=src/app/dashboard/main-dashboard/main-dashboard.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkL3NyYy9hcHAvZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzRFQ0U0RTtBREM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDa0JDO0FERUQ7RUFDSSxnQkFBWTtFQUNaLDZCQUFhO0VBQ2IsbUJBQWU7RUFDZixhQUFTO0VBQ1Qsc0JBQWdCO0VBRWhCLGtCQUFVO0FDRGQ7QURHQTtFQUNRLDRCQUFhO0FDRHJCO0FER0E7RUFDSSxpQkFBYTtBQ0RqQjtBREVJO0VBQ0kscUJBQU07QUNBZDtBREdtQztFQUMvQjtJQUNJLHlCQUFhO0VDRG5CO0FBQ0Y7QURJWTtFQUNSO0lBQ0ksd0JBQVk7SUFDWix5QkFBYTtFQ0ZuQjtBQUNGO0FESUE7Ozs7Ozs7Ozs7Q0NPQztBQUNELHdGQUF3RiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5lbnRpdHkgZGV0YWlsIHBhZ2UgY3NzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoucm93LmpoLWVudGl0eS1kZXRhaWxzID4ge1xuICAgIGRkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnJvdy5qaC1lbnRpdHktZGV0YWlscyA+IHtcbiAgICAgICAgZHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBkZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiovXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAvL292ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbGxhcHNlZC1tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgfSBcbi5jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIC5mb290ZXItZGFzaGJvYXJkIHtcbiAgICAgICAgbGVmdDogNzBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi8qXG5cbi5zYWZpLWNvbC1sZy1ub25lIHtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNhZmktc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuKi8iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZW50aXR5IGRldGFpbCBwYWdlIGNzc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qLnJvdy5qaC1lbnRpdHktZGV0YWlscyA+IHtcbiAgICBkZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5yb3cuamgtZW50aXR5LWRldGFpbHMgPiB7XG4gICAgICAgIGR0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgZGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4qL1xuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2xsYXBzZWQtbWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNzVweCAhaW1wb3J0YW50O1xufVxuLmNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuLmNvbGxhcHNlZCAuZm9vdGVyLWRhc2hib2FyZCB7XG4gIGxlZnQ6IDcwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuLypcblxuLnNhZmktY29sLWxnLW5vbmUge1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2FmaS1zaWRlYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG4qL1xuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-dashboard',
          templateUrl: './main-dashboard.component.html',
          styleUrls: ['./main-dashboard.component.styl']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/navbar/navbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/navbar/navbar.component.ts ***!
    \******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppDashboardNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = function _c0() {
      return ["./login"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.isNavbarCollapsed = true;
        this.collapsed = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "collapseNavbar",
        value: function collapseNavbar() {
          this.isNavbarCollapsed = true;
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.isNavbarCollapsed = !this.isNavbarCollapsed;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 20,
      vars: 2,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-sm", "navbar-dark", "bg-primary"], ["routerLink", "/", 1, "navbar-brand", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none", 3, "click"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link", 3, "click"], ["icon", "bicycle"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "text", "placeholder", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], [3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_1_listener() {
            return ctx.collapseNavbar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() {
            return ctx.toggleNavbar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() {
            return ctx.collapseNavbar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["\n/*# sourceMappingURL=src/app/dashboard/navbar/navbar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnN0eWwifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.styl']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/sidebar/sidebar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppDashboardSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function SidebarComponent_fa_icon_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 11);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);
      }
    }

    function SidebarComponent_fa_icon_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 12);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        sidebarPushRight: a0,
        "collapsed-sidebar": a1
      };
    };

    var _c1 = function _c1() {
      return ["../dashboard/catalogo"];
    };

    var _c2 = function _c2() {
      return ["../dashboard/bikes-list"];
    };

    var _c3 = function _c3() {
      return ["../dashboard/bikes-update"];
    };

    var _c4 = function _c4() {
      return ["../dashboard/clients/view-with-sales"];
    };

    var _c5 = function _c5(a0) {
      return {
        "collapsed-sidebar": a0
      };
    };

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(router) {
        var _this = this;

        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.isActive = false;
        this.collapsed = true;
        this.showMenu = '';
        this.pushRightClass = "push-right";
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stateMenu = false;
        this.router.events.subscribe(function (value) {
          if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
            _this.toggleSidebar();
          }
        });
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toggleCollapsed();
        }
      }, {
        key: "eventCalled",
        value: function eventCalled() {
          this.isActive = !this.isActive;
        }
      }, {
        key: "addExpandClass",
        value: function addExpandClass(element) {
          if (!this.collapsed) {
            if (element === this.showMenu) {
              this.showMenu = '0';
              this.stateMenu = false;
            } else {
              this.showMenu = element;
              this.stateMenu = true;
            }
          }
        }
      }, {
        key: "toggleCollapsed",
        value: function toggleCollapsed() {
          this.collapsed = !this.collapsed;

          if (this.collapsed) {
            this.showMenu = '0';
            this.stateMenu = false;
          }

          this.collapsedEvent.emit(this.collapsed);
        }
      }, {
        key: "isToggled",
        value: function isToggled() {
          var dom = document.querySelector("body");
          return dom.classList.contains(this.pushRightClass);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          var dom = document.querySelector("body");
          dom.classList.toggle(this.pushRightClass);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      outputs: {
        collapsedEvent: "collapsedEvent"
      },
      decls: 27,
      vars: 17,
      consts: [[1, "sidebar", 3, "ngClass"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "active"], [1, "nav-link", 3, "routerLink"], ["icon", "search"], ["icon", "bicycle"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "toggle-button-sidebar", 3, "ngClass", "click"], ["icon", "angle-double-left", 3, "fixedWidth", 4, "ngIf"], ["icon", "angle-double-right", 3, "fixedWidth", 4, "ngIf"], ["icon", "angle-double-left", 3, "fixedWidth"], ["icon", "angle-double-right", 3, "fixedWidth"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ventas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Bikes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bikes Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleCollapsed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SidebarComponent_fa_icon_25_Template, 1, 1, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SidebarComponent_fa_icon_26_Template, 1, 1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.isActive, ctx.collapsed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, ctx.collapsed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  position: fixed;\n  z-index: 10;\n  overflow-y: auto;\n  width: 235px;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n@media screen and (max-width: 992px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 54px;\n    left: 0;\n  }\n}\n@media print {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0 #fff;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px #fff;\n}\n.toggle-button-sidebar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  position: fixed;\n  width: 235px;\n  cursor: pointer;\n  padding: 10px;\n  bottom: 0;\n  border-top: 1px solid #ccc;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button-sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.toggle-button-sidebar[_ngcontent-%COMP%]:hover {\n  background-color: #008fff;\n}\n.collapsed-sidebar[_ngcontent-%COMP%] {\n  width: 70px;\n  z-index: 5;\n  overflow: visible;\n}\n.collapsed-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #39994e;\n}\n/*# sourceMappingURL=src/app/dashboard/sidebar/sidebar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQWtCO0VBQ2xCLGVBQVU7RUFDVixXQUFTO0VBQ1QsZ0JBQVk7RUFDWixZQUFPO0VBRVAsbUJBQWU7RUFDZixvQkFBZ0I7RUFDWixtQkFBYTtFQU1qQixnQ0FBWTtBQ0hoQjtBRE1tQztFQUMvQjtJQUNJLFNBQUs7SUFDTCxPQUFNO0VDSlo7QUFDRjtBRE9ZO0VBQ1I7SUFDSSx3QkFBUztFQ0xmO0FBQ0Y7QURRd0I7RUFDcEI7SUFDSSxhQUFTO0VDTmY7QUFDRjtBRFNBO0VBQ0ksVUFBTztBQ1BYO0FEVUE7RUFDSSxvQ0FBb0I7RUFDcEIsa0JBQWU7QUNSbkI7QURXQTtFQUNJLGtCQUFlO0VBQ2Ysc0NBQW9CO0FDVHhCO0FEWUE7RUFDSSx5QkFBa0I7RUFDbEIsV0FBTztFQUNQLGVBQVU7RUFDVixZQUFPO0VBQ1AsZUFBUTtFQUNSLGFBQVM7RUFDVCxTQUFRO0VBVVIsMEJBQVk7RUFLWixnQ0FBWTtBQ25CaEI7QURNSTtFQUNJLGVBQVc7QUNKbkI7QURPSTtFQUNJLHlCQUFrQjtBQ0wxQjtBRGdCQTtFQUNJLFdBQU87RUFDUCxVQUFTO0VBQ1QsaUJBQVU7QUNkZDtBRGdCSTtFQUNJLGFBQVM7QUNkakI7QURrQkE7RUFDSSxXQUFPO0FDaEJYO0FEbUJBO0VBQ0ksV0FBTztBQ2pCWDtBRG9CQTtFQUNJLG1CQUFZO0FDbEJoQjtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICgnLi4vZ2xvYmFsLXZhcmlhYmxlcycpO1xuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yLXNpZGViYXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2lkdGg6IDIzNXB4O1xuICAgIC8vbWFyZ2luLWxlZnQ6IC0yMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi50b2dnbGUtYnV0dG9uLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvci1zaWRlYmFyO1xuICAgIGNvbG9yOiAkdGhlbWUtY29sb3ItdGV4dC1zaWRlYmFyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm90dG9tOiAwO1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yLXNpZGViYXItaG92ZXI7XG4gICAgfVxuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNvbGxhcHNlZC1zaWRlYmFyIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG51bCBsaSBhIHtcbiAgICBjb2xvcjogJG5hdi1saW5rLWNvbG9yO1xufVxuXG51bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogJG5hdi1saW5rLWNvbG9yLWhvdmVyO1xufVxuXG51bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJG5hdi1saS1jb2xvcjtcbn0iLCIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpZHRoOiAyMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlci1maWVsZHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICNmZmY7XG59XG4udG9nZ2xlLWJ1dHRvbi1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRvZ2dsZS1idXR0b24tc2lkZWJhciBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuLnRvZ2dsZS1idXR0b24tc2lkZWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhmZmY7XG59XG4uY29sbGFwc2VkLXNpZGViYXIge1xuICB3aWR0aDogNzBweDtcbiAgei1pbmRleDogNTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uY29sbGFwc2VkLXNpZGViYXIgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG51bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG51bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzOTk5NGU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2Rhc2hib2FyZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          'overflow-y': 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          'overflow-y': 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: 0
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.styl'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            'overflow-y': 'hidden'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            'overflow-y': 'hidden'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: 0
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '0'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*'
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        collapsedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map