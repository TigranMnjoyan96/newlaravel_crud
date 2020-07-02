(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  data: function data() {
    return {
      tasks: {
        title: '',
        description: '',
        tagId: ''
      },
      allTasks: []
    };
  },
  methods: {
    getTasks: function getTasks() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/tasks').then(function (res) {
        _this.allTasks = res.data;
      })["catch"](function (err) {});
    },
    formSubmit: function formSubmit() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/tasks/', {
        title: this.tasks.title,
        description: this.tasks.description,
        tagId: this.tasks.tagId
      }).then(function (res) {
        _this2.getTasks();

        console.log(res, 555);
      })["catch"](function (err) {});
    },
    removeTask: function removeTask(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/api/tasks/' + id).then(function (res) {
        console.log(res);

        _this3.getTasks();
      })["catch"](function (err) {});
    }
  },
  mounted: function mounted() {
    M.FormSelect.init(this.$refs.select);
    this.getTasks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "form",
        {
          staticClass: "pt-3",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.formSubmit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "input-field col s6" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tasks.title,
                  expression: "tasks.title"
                }
              ],
              staticClass: "validate",
              attrs: { id: "title", type: "text" },
              domProps: { value: _vm.tasks.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.tasks, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "title" } }, [_vm._v("Title")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-field col s6" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tasks.description,
                  expression: "tasks.description"
                }
              ],
              staticClass: "validate",
              attrs: { id: "description", type: "text" },
              domProps: { value: _vm.tasks.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.tasks, "description", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "description" } }, [
              _vm._v("Description")
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tasks.tagId,
                expression: "tasks.tagId"
              }
            ],
            ref: "select",
            staticClass: "col s3",
            attrs: { "browser-default": "" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.tasks,
                  "tagId",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "1" } }, [_vm._v("Option 1")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Option 2")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("Option 3")])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "col" }, [
          !_vm.allTasks.length
            ? _c("div", [_vm._v("loading...")])
            : _c("table", [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.allTasks, function(task) {
                    return _c("tr", { key: task.id }, [
                      _c("td", [_vm._v(_vm._s(task.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.title))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.tagId))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn waves-effect",
                            on: {
                              click: function($event) {
                                return _vm.removeTask(task.id)
                              }
                            }
                          },
                          [
                            _c(
                              "i",
                              { staticClass: "material-icons text-danger" },
                              [_vm._v("delete")]
                            )
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s4" }, [
      _c("h2", [_vm._v("Create Task")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6" }, [
      _c(
        "button",
        {
          staticClass: "btn waves-effect waves-light mt-3",
          attrs: { type: "submit" }
        },
        [
          _vm._v("Submit\n                    "),
          _c("i", { staticClass: "material-icons right" }, [_vm._v("create")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Selected Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Create.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Create.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=67c71db2&scoped=true& */ "./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67c71db2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=67c71db2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Create.vue?vue&type=template&id=67c71db2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);