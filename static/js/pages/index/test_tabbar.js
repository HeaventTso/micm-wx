global.webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_test_tabbar_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_028d891a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_test_tabbar_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-028d891a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_test_tabbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_028d891a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_test_tabbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\test_tabbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test_tabbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-028d891a", Component.options)
  } else {
    hotAPI.reload("data-v-028d891a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'test_tabbar',
  data: function data() {
    return {
      currentTabbar: 'homepage'
    };
  },

  methods: {
    handleChange: function handleChange(event) {
      console.log(event);
      this.currentTabbar = event.mp.detail.key;
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('i-tab-bar', {
    attrs: {
      "current": _vm.currentTabbar,
      "color": "#4878FF",
      "eventid": '0',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab-bar-item', {
    key: "homepage",
    attrs: {
      "icon": "homepage_fill",
      "current-icon": "homepage_fill",
      "title": "首页",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "company",
    attrs: {
      "icon": "group_fill",
      "current-icon": "group_fill",
      "title": "公司",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "listing",
    attrs: {
      "icon": "remind_fill",
      "current-icon": "remind_fill",
      "count": "3",
      "title": "上市",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "analysis",
    attrs: {
      "icon": "dynamic_fill",
      "current-icon": "dynamic_fill",
      "dot": "",
      "title": "分析",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "news",
    attrs: {
      "icon": "interactive_fill",
      "current-icon": "interactive_fill",
      "dot": "",
      "title": "资讯",
      "mpcomid": '4'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-028d891a", esExports)
  }
}

/***/ })

},[131]);
//# sourceMappingURL=test_tabbar.js.map