global.webpackJsonp([4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_taps_demo_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_370272da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_taps_demo_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_taps_demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_370272da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_taps_demo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\taps_demo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] taps_demo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-370272da", Component.options)
  } else {
    hotAPI.reload("data-v-370272da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      current: 'tab1',
      current_scroll: 'tab1'
    };
  },

  methods: {
    handleChange: function handleChange(detail) {
      console.log('点击了');
      console.log(detail.mp.detail);
      this.current = detail.mp.detail.key;
    },
    handleChangeScroll: function handleChangeScroll(detail) {
      this.current_scroll = detail.mp.detail.key;
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-tabs', {
    attrs: {
      "current": _vm.current,
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "选项1",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "选项2",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "选项3",
      "mpcomid": '2'
    }
  })], 1), _vm._v("\n\n  自定义主题色\n\n  "), _c('i-tabs', {
    attrs: {
      "current": _vm.current,
      "color": "#f759ab",
      "eventid": '1',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "选项1",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "选项2",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "选项3",
      "mpcomid": '6'
    }
  })], 1), _vm._v("\n\n  徽标\n\n  "), _c('i-tabs', {
    attrs: {
      "current": _vm.current,
      "eventid": '2',
      "mpcomid": '11'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "选项1",
      "count": "3",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "选项2",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "选项3",
      "dot": "",
      "mpcomid": '10'
    }
  })], 1), _vm._v("\n\n  滚动\n\n  "), _c('i-tabs', {
    attrs: {
      "current": _vm.current_scroll,
      "scroll": "",
      "eventid": '3',
      "mpcomid": '21'
    },
    on: {
      "change": _vm.handleChangeScroll
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "选项1",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "选项2",
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "选项3",
      "mpcomid": '14'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab4",
    attrs: {
      "title": "选项4",
      "mpcomid": '15'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab5",
    attrs: {
      "title": "选项5",
      "mpcomid": '16'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab6",
    attrs: {
      "title": "选项6",
      "mpcomid": '17'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab7",
    attrs: {
      "title": "选项7",
      "mpcomid": '18'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab8",
    attrs: {
      "title": "选项8",
      "mpcomid": '19'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab9",
    attrs: {
      "title": "选项9",
      "mpcomid": '20'
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
     require("vue-hot-reload-api").rerender("data-v-370272da", esExports)
  }
}

/***/ })

},[135]);
//# sourceMappingURL=taps_demo.js.map