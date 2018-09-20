global.webpackJsonp([3],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_test_demo_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08c091b8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_test_demo_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_test_demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08c091b8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_test_demo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\test_demo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test_demo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08c091b8", Component.options)
  } else {
    hotAPI.reload("data-v-08c091b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      scrollTop: 0
    };
  },
  onChange: function onChange(event) {
    console.log(event.detail, 'click right menu callback data');
  },
  onPageScroll: function onPageScroll(event) {
    console.log('执行了');
    console.log(event);
    this.scrollTop = event.scrollTop;
  },

  methods: {}
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "i-sticky-demo-des"
  }, [_vm._v("\n  注: 1.由于组件内部不能使用onPageScroll,导致不能监听scrollTop值只能通过用户用props传递。\n")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-des"
  }, [_vm._v("\n  2.在微信开发客户端显示的时候会有bug。不停计算scrollTop值不能同步\n")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo"
  }, [_c('i-sticky', {
    attrs: {
      "scrollTop": _vm.scrollTop,
      "mpcomid": '4'
    }
  }, [_c('i-sticky-item', {
    attrs: {
      "i-class": "i-sticky-demo-title",
      "mpcomid": '0'
    }
  }, [_c('div', {
    slot: "title"
  }, [_vm._v("\n        逻辑层\n      ")]), _vm._v(" "), _c('div', {
    slot: "content"
  }, [_c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")])])]), _vm._v(" "), _c('i-sticky-item', {
    attrs: {
      "i-class": "i-sticky-demo-title",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "title"
  }, [_vm._v("\n        视图层\n      ")]), _vm._v(" "), _c('div', {
    slot: "content"
  }, [_c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")])])]), _vm._v(" "), _c('i-sticky-item', {
    attrs: {
      "i-class": "i-sticky-demo-title",
      "mpcomid": '2'
    }
  }, [_c('div', {
    slot: "title"
  }, [_vm._v("\n        自定义组件\n      ")]), _vm._v(" "), _c('div', {
    slot: "content"
  }, [_c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")])])]), _vm._v(" "), _c('i-sticky-item', {
    attrs: {
      "i-class": "i-sticky-demo-title",
      "mpcomid": '3'
    }
  }, [_c('div', {
    slot: "title"
  }, [_vm._v("\n        插件\n      ")]), _vm._v(" "), _c('div', {
    slot: "content"
  }, [_c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册程序")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("场景值")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("注册页面")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("路由")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("模块化")]), _vm._v(" "), _c('div', {
    staticClass: "i-sticky-demo-item"
  }, [_vm._v("API")])])])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08c091b8", esExports)
  }
}

/***/ })

},[136]);
//# sourceMappingURL=test_demo.js.map