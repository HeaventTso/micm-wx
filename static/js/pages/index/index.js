global.webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_683bd7cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-683bd7cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_683bd7cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-683bd7cc", Component.options)
  } else {
    hotAPI.reload("data-v-683bd7cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(45);
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
      motto: 'Hello World',
      userInfo: {},
      current: 'tab1',
      scrollTop: 0,
      currentTabbar: 'company'
    };
  },

  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  onPageScroll: function onPageScroll(event) {
    console.log('执行了');
    console.log(event);
    this.scrollTop = event.scrollTop;
  },

  methods: {
    changeTabbar: function changeTabbar(event) {
      console.log(event);
      this.currentTabbar = event.mp.detail.key;
    },
    handleChange: function handleChange(event) {
      console.log(event.mp.detail);
      this.current = event.mp.detail.key;
    },
    handleChangeScroll: function handleChangeScroll(event) {
      this.current_scroll = event.mp.detail.key;
    },
    bindViewTap: function bindViewTap() {
      var url = '../logs/index';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "header"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "1",
      "mpcomid": '1'
    }
  }, [_c('span', {
    staticStyle: {
      "font-weight": "bolder"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "return",
      "size": "20",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "9",
      "mpcomid": '2'
    }
  }, [_c('span', {
    staticClass: "text-titel-menu"
  }, [_vm._v("58.com.lnc.")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "11",
      "mpcomid": '3'
    }
  }, [_c('span', {
    staticClass: "text-tips-menu"
  }, [_vm._v("截止日期:2018-08-08")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tabs-fix"
  }, [_c('i-tabs', {
    attrs: {
      "current": _vm.current,
      "color": "#035FFF",
      "eventid": '0',
      "mpcomid": '9'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "投资信息",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "财务信息",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "基本信息",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab4",
    attrs: {
      "title": "上市信息",
      "count": "5",
      "mpcomid": '8'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "83px"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == 'tab1'),
      expression: "current == 'tab1'"
    }]
  }, [_c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "19",
      "i-class": "col-class",
      "mpcomid": '11'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '10'
    }
  }), _vm._v("\n            投资汇总(USD、MN)\n          ")], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '12'
    }
  }, [_vm._v("USD")])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '14'
    }
  }, [_vm._v("累计投资成本:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '15'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '16'
    }
  }, [_vm._v("OS:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '17'
    }
  }, [_vm._v("2.56%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '23'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '19'
    }
  }, [_vm._v("持有价值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '20'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '21'
    }
  }, [_vm._v("FD:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '22'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '28'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '24'
    }
  }, [_vm._v("分红金额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '25'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '26'
    }
  }, [_vm._v("IRR:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '27'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '33'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '29'
    }
  }, [_vm._v("公司估值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '30'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '31'
    }
  }, [_vm._v("MOC:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '32'
    }
  }, [_vm._v("15.1")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '36'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "23",
      "i-class": "col-class",
      "mpcomid": '35'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '34'
    }
  }), _vm._v("\n            nature of business\n          ")], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '38'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "22",
      "i-class": "col-class",
      "mpcomid": '37'
    }
  }, [_c('div', {
    staticClass: "text-tips"
  }, [_c('p', [_vm._v("如果你无法简洁表达你的想法，那只能说明你还不够了解它。")]), _vm._v(" "), _c('p', [_vm._v("Knock，Knock， Who's there.")]), _vm._v(" "), _c('p', [_vm._v("Today is the only day. Yesterday is gone.")]), _vm._v(" "), _c('p', [_vm._v("A book is like a magic garden, carried in your pocket.")])], 1)])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '41'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "23",
      "i-class": "col-class",
      "mpcomid": '40'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '39'
    }
  }), _vm._v("\n            投资明细(USD)\n          ")], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "0 10px"
    }
  }, [_c('i-steps', {
    attrs: {
      "direction": "vertical",
      "mpcomid": '114'
    }
  }, [_c('i-step', {
    attrs: {
      "status": "finish",
      "title": "IPO上市",
      "mpcomid": '50'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '43'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '42'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '46'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '44'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '45'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '49'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '47'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '48'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": " F轮",
      "mpcomid": '59'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '52'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '51'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '55'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '53'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '54'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '58'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '56'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '57'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "E+轮",
      "mpcomid": '68'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '61'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '60'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '64'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '62'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '63'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '67'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '65'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '66'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "E轮",
      "mpcomid": '77'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '70'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '69'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '73'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '71'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '72'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '76'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '74'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '75'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "D轮",
      "mpcomid": '86'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '79'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '78'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '82'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '80'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '81'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '85'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '83'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '84'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "C轮",
      "mpcomid": '95'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '88'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '87'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '91'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '89'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '90'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '94'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '92'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '93'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "B轮",
      "mpcomid": '104'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '97'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '96'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '100'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '98'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '99'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '103'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '101'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '102'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)]), _vm._v(" "), _c('i-step', {
    attrs: {
      "status": "finish",
      "title": "A轮",
      "mpcomid": '113'
    }
  }, [_c('div', {
    slot: "content"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '106'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "mpcomid": '105'
    }
  }, [_vm._v("2018.09.19")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '109'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '107'
    }
  }, [_vm._v("跟投额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '108'
    }
  }, [_vm._v("100,000.00")])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '112'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "mpcomid": '110'
    }
  }, [_vm._v("投资主体:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "18",
      "mpcomid": '111'
    }
  }, [_vm._v("ABCDEFGHIJKLMNO公司")])], 1)], 1)])], 1)], 1)], 1)]), _vm._v(" "), (_vm.current == 'tab2') ? _c('div', [_c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '118'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "19",
      "i-class": "col-class",
      "mpcomid": '116'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '115'
    }
  }), _vm._v("\n            投资汇总(USD、MN)\n          ")], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '117'
    }
  }, [_vm._v("USD")])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '123'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '119'
    }
  }, [_vm._v("累计投资成本:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '120'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '121'
    }
  }, [_vm._v("OS:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '122'
    }
  }, [_vm._v("2.56%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '128'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '124'
    }
  }, [_vm._v("持有价值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '125'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '126'
    }
  }, [_vm._v("FD:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '127'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '133'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '129'
    }
  }, [_vm._v("分红金额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '130'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '131'
    }
  }, [_vm._v("IRR:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '132'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '138'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '134'
    }
  }, [_vm._v("公司估值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '135'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '136'
    }
  }, [_vm._v("MOC:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '137'
    }
  }, [_vm._v("15.1")])], 1)], 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.current == 'tab3') ? _c('div', [_vm._v("\n    基本信息\n  ")]) : _vm._e(), _vm._v(" "), (_vm.current == 'tab4') ? _c('div', [_c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '142'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "19",
      "i-class": "col-class",
      "mpcomid": '140'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '139'
    }
  }), _vm._v("\n            投资汇总(USD、MN)\n          ")], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '141'
    }
  }, [_vm._v("USD")])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '147'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '143'
    }
  }, [_vm._v("累计投资成本:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '144'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '145'
    }
  }, [_vm._v("OS:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '146'
    }
  }, [_vm._v("2.56%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '152'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '148'
    }
  }, [_vm._v("持有价值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '149'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '150'
    }
  }, [_vm._v("FD:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '151'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '157'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '153'
    }
  }, [_vm._v("分红金额:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '154'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '155'
    }
  }, [_vm._v("IRR:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '156'
    }
  }, [_vm._v("31.1%")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "self-margin-5-0"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '162'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "7",
      "i-class": "col-class",
      "mpcomid": '158'
    }
  }, [_vm._v("公司估值:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '159'
    }
  }, [_vm._v("1,000.00")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "3",
      "i-class": "col-class",
      "mpcomid": '160'
    }
  }, [_vm._v("MOC:")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '161'
    }
  }, [_vm._v("15.1")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '166'
    }
  }, [_c('i-col', {
    attrs: {
      "offset": "1",
      "span": "11",
      "i-class": "col-class",
      "mpcomid": '164'
    }
  }, [_c('div', {
    staticClass: "self-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "activity_fill",
      "color": "#1C6CF8",
      "size": "22",
      "mpcomid": '163'
    }
  }), _vm._v("\n              交易状态\n            ")], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "offset": "1",
      "span": "11",
      "i-class": "col-class",
      "mpcomid": '165'
    }
  }, [_c('div', {
    staticClass: "text-right"
  }, [_c('span', {
    staticClass: "text-bolder"
  }, [_vm._v("Tradable")]), _vm._v(":"), _c('span', {
    staticClass: "text-tips"
  }, [_vm._v(" Partially Yes")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "transverse-line"
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "50px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer",
    staticStyle: {
      "position": "fixed",
      "bottom": "0",
      "width": "100%",
      "z-index": "3"
    }
  }, [_c('i-tab-bar', {
    attrs: {
      "current": _vm.currentTabbar,
      "color": "#4878FF",
      "eventid": '1',
      "mpcomid": '172'
    },
    on: {
      "change": _vm.changeTabbar
    }
  }, [_c('i-tab-bar-item', {
    key: "homepage",
    attrs: {
      "icon": "homepage_fill",
      "current-icon": "homepage_fill",
      "title": "首页",
      "mpcomid": '167'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "company",
    attrs: {
      "icon": "group_fill",
      "current-icon": "group_fill",
      "title": "公司",
      "mpcomid": '168'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "listing",
    attrs: {
      "icon": "remind_fill",
      "current-icon": "remind_fill",
      "count": "3",
      "title": "上市",
      "mpcomid": '169'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "analysis",
    attrs: {
      "icon": "dynamic_fill",
      "current-icon": "dynamic_fill",
      "dot": "",
      "title": "分析",
      "mpcomid": '170'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "news",
    attrs: {
      "icon": "interactive_fill",
      "current-icon": "interactive_fill",
      "dot": "",
      "title": "资讯",
      "mpcomid": '171'
    }
  })], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-683bd7cc", esExports)
  }
}

/***/ })

},[134]);
//# sourceMappingURL=index.js.map