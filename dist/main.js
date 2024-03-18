/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block; }

body {
  line-height: 1; }

ol,
ul {
  list-style: none; }

blockquote,
q {
  quotes: none; }

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

body {
  background-color: gray;
  display: flex;
  flex-direction: column;
  height: 100vh; }
  body #title-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    flex: 1; }
  body #game-board-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 4; }
    body #game-board-section #player-section {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      justify-content: center;
      align-items: center;
      gap: 50px; }
      body #game-board-section #player-section .gameboard {
        height: 400px;
        width: 400px;
        display: grid;
        border: 4px solid black;
        gap: 3px;
        grid-template: repeat(10, 1fr)/repeat(10, 1fr); }
        body #game-board-section #player-section .gameboard .gameboard1-cell {
          background-color: white; }
          body #game-board-section #player-section .gameboard .gameboard1-cell:hover {
            background-color: black;
            opacity: 0.3; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.missing-attack {
          background-color: gray;
          opacity: 0.3; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.correct-attack {
          background-color: red;
          opacity: 0.5; }
    body #game-board-section #enemy-section {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      justify-content: center;
      align-items: center;
      gap: 50px; }
      body #game-board-section #enemy-section .gameboard {
        height: 400px;
        width: 400px;
        display: grid;
        border: 4px solid black;
        gap: 3px;
        grid-template: repeat(10, 1fr)/repeat(10, 1fr); }
        body #game-board-section #enemy-section .gameboard .gameboard2-cell {
          background-color: white;
          border: 1px solid black; }
          body #game-board-section #enemy-section .gameboard .gameboard2-cell:hover {
            background-color: black;
            opacity: 0.3; }
        body #game-board-section #enemy-section .gameboard .gameboard2-cell.missing-attack {
          background-color: gray;
          opacity: 0.3; }
        body #game-board-section #enemy-section .gameboard .gameboard2-cell.correct-attack {
          background-color: red;
          opacity: 0.5; }
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgFC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;;;;;;;;;;EAWC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;;EAEC,gBAAgB,EAAA;;AAEjB;;EAEC,YAAY,EAAA;;AAEb;;;;EAIC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA;;AASlB;EACC,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,aAAa,EAAA;EAJd;IALC,aAAa;IACb,mBAU2B;IAT3B,uBAAuB;IACvB,mBAAmB;IASlB,eAAe;IACf,iBAAiB;IACjB,OAAO,EAAA;EATT;IAYE,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,OAAO,EAAA;IAfT;MAiBG,aAAa;MACb,sBAAsB;MACtB,eAAe;MACf,uBAAuB;MACvB,mBAAmB;MACnB,SAAS,EAAA;MAtBZ;QAwBI,aAAa;QACb,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,QAAQ;QACR,8CAAgD,EAAA;QA7BpD;UA+BK,uBAAuB,EAAA;UA/B5B;YAiCM,uBAAuB;YACvB,YAAY,EAAA;QAlClB;UAsCK,sBAAsB;UACtB,YAAY,EAAA;QAvCjB;UA0CK,qBAAqB;UACrB,YAAY,EAAA;IA3CjB;MAgDG,aAAa;MACb,sBAAsB;MACtB,eAAe;MACf,uBAAuB;MACvB,mBAAmB;MACnB,SAAS,EAAA;MArDZ;QAuDI,aAAa;QACb,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,QAAQ;QACR,8CAAgD,EAAA;QA5DpD;UA+DK,uBAAuB;UACvB,uBAAuB,EAAA;UAhE5B;YAkEM,uBAAuB;YACvB,YAAY,EAAA;QAnElB;UAuEK,sBAAsB;UACtB,YAAY,EAAA;QAxEjB;UA2EK,qBAAqB;UACrB,YAAY,EAAA","sourcesContent":["//* main scss style sheet\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: \"\";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@mixin flexCenterDir($direction) {\n\tdisplay: flex;\n\tflex-direction: $direction;\n\tjustify-content: center;\n\talign-items: center;\n}\nbody {\n\tbackground-color: gray;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\t#title-section {\n\t\t@include flexCenterDir(row);\n\t\tfont-size: 40px;\n\t\tfont-weight: bold;\n\t\tflex: 1;\n\t}\n\t#game-board-section {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tflex: 4;\n\t\t#player-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 400px;\n\t\t\t\twidth: 400px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\t\t\t\t.gameboard1-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t#enemy-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 400px;\n\t\t\t\twidth: 400px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\n\t\t\t\t.gameboard2-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t// extra detail: .gameboard.ship-is-sunk {}\n\t\t\t}\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboardComponent.ts":
/*!***********************************!*\
  !*** ./src/gameboardComponent.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipComponent */ "./src/shipComponent.ts");

var GameBoard = /** @class */ (function () {
    function GameBoard(height) {
        if (height === void 0) { height = 10; }
        this.height = height; // game board contains height and width to create a grid display.
        this.width = this.height;
        this.size = this.height * this.height;
        this.map = [
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
        ];
    }
    GameBoard.prototype.placeShip = function (xCor, yCor, newShip, direction) {
        // xCor and yCor are input from User Interface
        if (this.map[yCor][xCor] !== 'empty')
            return;
        this.map[yCor][xCor] = newShip;
        for (var i = 0; i < newShip.length; i++) {
            if (direction === 'horizontal right') {
                this.map[yCor][xCor] = newShip;
                xCor++;
            }
            else if (direction === 'horizontal left') {
                this.map[yCor][xCor] = newShip;
                xCor--;
                //
            }
            else if (direction === 'vertical down') {
                this.map[yCor][xCor] = newShip;
                yCor++;
                //
            }
            else if (direction === 'vertical up') {
                this.map[yCor][xCor] = newShip;
                yCor--;
                //
            }
        }
    };
    GameBoard.prototype.randomPlacingShips = function () {
        // populating around 40 units -> one of 6 units, two of 5 units , two of 4 units three of 3 units and three of 2 units and one of 1 units
        // how to do math.random with xCor and yCor?
        // before placing every ship we need to check two conditions
        var ranDomSeed = this.height - 1;
        var xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        var yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        console.log(xCor);
        console.log(yCor);
        /**
         *  one: is random xCor and yCor is still on the board
         * two : is xCors and yCors of each ship collide with the already populated ships.
         */
    };
    GameBoard.prototype.receiveAttack = function (xCor, yCor) {
        //[UI] class need to prevent receiveAttach when there was an attack or missing shot  in this coordinate already.
        //  if (xCor > this.height || yCor > this.width) return;
        if (this.map[yCor][xCor] === 'empty') {
            this.map[yCor][xCor] = 'missingAttack';
            // record coordinate of the missed shot
            // [UI] display missed shot
        }
        else if (this.map[yCor][xCor] instanceof _shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.map[yCor][xCor].hit();
        }
    };
    //Game boards should keep track of missed attacks so they can display them properly.
    GameBoard.prototype.getMissingAttacksCoordinates = function () {
        var arr = [];
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                if (this.map[i][j] === 'missingAttack') {
                    arr.push([j, i]);
                }
            }
        }
        return arr;
    };
    //    Game boards should be able to report whether or not all of their ships have been sunk.
    GameBoard.prototype.isFleetAllSunk = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                if (this.map[i][j] instanceof _shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    var currentShip = this.map[i][j];
                    //  console.log(currentShip);
                    if (currentShip.isSunk() === false)
                        return false;
                }
            }
        }
        return true;
    };
    return GameBoard;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/playerComponent.ts":
/*!********************************!*\
  !*** ./src/playerComponent.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/shipComponent */ "./src/shipComponent.ts");

var Player = /** @class */ (function () {
    function Player(gameBoard) {
        this.gameBoard = gameBoard;
    }
    Player.prototype.playTurn = function (opponent, xCor, yCor) {
        opponent.gameBoard.receiveAttack(xCor, yCor);
    };
    return Player;
}());

var Computer = /** @class */ (function () {
    function Computer(gameBoard) {
        this.gameBoard = gameBoard;
        this.hitMap = [
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
            ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
        ];
        this.attackTimes = 0;
        this.limitedAttackTimes = 100;
    }
    Computer.prototype.play = function (player) {
        /** algorithm:
         *  step 1: check if this.hitMap contains 'potential' -> playRandom() smart version
         *  else : playRandom() random version
         * step 2: logic for terminating 'potential' -> replace 'new' to 'potential' again
         *  -> if the ship.isSink() return true -> reset all  adjacent 'potential' to 'new'
         */
        // if there is a sunkShip -> potentialResetting()
        if (this.potentialChecking()) {
            this.playSmart(player);
        }
        else {
            this.playRandom(player);
        }
    };
    Computer.prototype.potentialMarking = function (xCor, yCor) {
        if (xCor + 1 >= 0 && xCor + 1 < 5 && yCor >= 0 && yCor < 5) {
            // coordinate is on the board
            if (this.hitMap[yCor][xCor + 1] === 'new' &&
                this.hitMap[yCor][xCor + 1] !== 'attacked' &&
                this.hitMap[yCor][xCor + 1] !== 'attackedShip')
                this.hitMap[yCor][xCor + 1] = 'potential';
        }
        if (xCor + 1 >= 0 && xCor + 1 < 5 && yCor + 1 >= 0 && yCor + 1 < 5) {
            if (this.hitMap[yCor + 1][xCor] === 'new' &&
                this.hitMap[yCor + 1][xCor] !== 'attacked' &&
                this.hitMap[yCor + 1][xCor] !== 'attackedShip')
                this.hitMap[yCor + 1][xCor] = 'potential';
        }
        if (xCor >= 0 && xCor < 5 && yCor - 1 >= 0 && yCor - 1 < 5) {
            // coordinate is on the board
            if (this.hitMap[yCor - 1][xCor] === 'new' &&
                this.hitMap[yCor - 1][xCor] !== 'attacked' &&
                this.hitMap[yCor - 1][xCor] !== 'attackedShip')
                this.hitMap[yCor - 1][xCor] = 'potential';
        }
        if (xCor - 1 >= 0 && xCor - 1 < 5 && yCor >= 0 && yCor < 5) {
            // coordinate is on the board
            if (this.hitMap[yCor][xCor - 1] === 'new' &&
                this.hitMap[yCor][xCor - 1] !== 'attacked' &&
                this.hitMap[yCor][xCor - 1] !== 'attackedShip')
                this.hitMap[yCor][xCor - 1] = 'potential';
        }
    };
    Computer.prototype.potentialResetting = function (xCor, yCor) {
        // if the ship length > 1
        // assumption:  looping and accessing every element of player.gameBoard.map
        // if there is a spot where instanceof Ship && that ship.isSunk()
        //return that xCors and yCors inside an array
        // looping through the array and
        // do the below
        if (this.hitMap[yCor][xCor + 1] === 'potential')
            this.hitMap[yCor][xCor + 1] = 'new';
        if (this.hitMap[yCor + 1][xCor] === 'potential')
            this.hitMap[yCor + 1][xCor] = 'new';
        if (this.hitMap[yCor - 1][xCor] === 'potential')
            this.hitMap[yCor - 1][xCor] = 'new';
        if (this.hitMap[yCor][xCor - 1] === 'potential')
            this.hitMap[yCor][xCor - 1] = 'new';
    };
    Computer.prototype.potentialChecking = function () {
        //? this method does not work.
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.hitMap[i][j] === 'potential') {
                    return true;
                }
            }
        }
        return false;
    };
    Computer.prototype.playSmart = function (opponent) {
        // need to implementing how to reset potential points
        //
        if (this.attackTimes >= this.limitedAttackTimes)
            return;
        var ranDomSeed = opponent.gameBoard.height - 1;
        var xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        var yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        while (this.hitMap[yCor][xCor] !== 'potential') {
            xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        }
        this.attackTimes++;
        if (opponent.gameBoard.map[yCor][xCor] instanceof _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.hitMap[yCor][xCor] = 'attackedShip';
            this.potentialMarking(xCor, yCor);
        }
        else {
            this.hitMap[yCor][xCor] = 'attacked';
        }
        opponent.gameBoard.receiveAttack(xCor, yCor);
    };
    Computer.prototype.playRandom = function (opponent) {
        if (this.attackTimes >= this.limitedAttackTimes)
            return;
        var ranDomSeed = opponent.gameBoard.height - 1;
        var xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        var yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        while (this.hitMap[yCor][xCor] !== 'new') {
            // replace typeOfAttack here
            xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        }
        this.attackTimes++;
        // marking logic
        if (opponent.gameBoard.map[yCor][xCor] instanceof _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.hitMap[yCor][xCor] = 'attackedShip';
            this.potentialMarking(xCor, yCor);
        }
        else {
            this.hitMap[yCor][xCor] = 'attacked';
        }
        opponent.gameBoard.receiveAttack(xCor, yCor);
    };
    return Computer;
}());



/***/ }),

/***/ "./src/shipComponent.ts":
/*!******************************!*\
  !*** ./src/shipComponent.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Ship = /** @class */ (function () {
    function Ship(length) {
        if (length === void 0) { length = 1; }
        this.length = length;
        this.hitTimes = 0;
        this.isSunkStatus = false;
    }
    Ship.prototype.hit = function () {
        if (this.hitTimes < this.length)
            this.hitTimes++;
        if (this.length > this.hitTimes) {
            this.isSunkStatus = false;
        }
        else {
            this.isSunkStatus = true;
        }
    };
    Ship.prototype.isSunk = function () {
        return this.isSunkStatus;
    };
    return Ship;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipComponent */ "./src/shipComponent.ts");
/* harmony import */ var _playerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerComponent */ "./src/playerComponent.ts");
/* harmony import */ var _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboardComponent */ "./src/gameboardComponent.ts");
// import './style.css';




var gameBoard1 = document.querySelector('#gameboard1');
var gameBoard2 = document.querySelector('#gameboard2');
for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
        var cell1 = document.createElement('div');
        cell1.classList.add('gameboard1-cell');
        cell1.dataset.cell = "".concat(i, ",").concat(j);
        gameBoard1.append(cell1);
    }
}
for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
        var cell2 = document.createElement('div');
        cell2.classList.add('gameboard2-cell');
        cell2.dataset.cell = "".concat(i, ",").concat(j);
        gameBoard2.append(cell2);
    }
}
var player = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Player(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
var enemy = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Computer(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
enemy.gameBoard.placeShip(0, 0, new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](2), 'horizontal right');
// attacking logic from UI
gameBoard2.addEventListener('click', function (e) {
    if (e.target instanceof HTMLElement &&
        e.target.dataset.clicked !== 'true' && // why doesn't it stop in here
        e.target.classList.contains('gameboard2-cell')) {
        e.target.dataset.clicked = 'true';
        // extracting xCor and yCor
        var xCor = +e.target.dataset.cell.split(',')[1];
        var yCor = +e.target.dataset.cell.split(',')[0];
        player.playTurn(enemy, xCor, yCor);
        console.log(enemy.gameBoard.map);
        console.log(enemy.gameBoard.map[yCor][xCor]);
        // displayEffect of attacking
        markingAttack(e.target, xCor, yCor);
    }
});
function markingAttack(elementTarget, xCor, yCor) {
    // Extra-detail :checking if the corrsponding attack is the last attack that making the ship.isSunk() return true
    // -> toggle all cells' opacity = 0.2 that contain that ship
    // -> classList toggle e.target.classList.add('missing attack | correct attack')
    if (enemy.gameBoard.map[yCor][xCor] === 'missingAttack') {
        elementTarget.classList.add('missing-attack');
    }
    else {
        elementTarget.classList.add('correct-attack');
    }
}
// gameBoard2.addEventListener('click', (e) => {
//   console.log(e.target);
// });
// main loop
// while(!player.gameBoard.isFleetAllSunk() && !enemy.gameBoard.isFleetAllSunk()) {
//     // waiting for user click once
//     // -> let computer play once
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOztBQUVEO0lBS0Usa0JBQVksU0FBb0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtB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SUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3Qyw2QkFBNkI7UUFDN0IsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNILFNBQVMsYUFBYSxDQUFDLGFBQTBCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFDM0UsaUhBQWlIO0lBQ2pILDREQUE0RDtJQUM1RCxnRkFBZ0Y7SUFDaEYsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxlQUFlLEVBQUUsQ0FBQztRQUN4RCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0gsQ0FBQztBQUNELGdEQUFnRDtBQUNoRCwyQkFBMkI7QUFDM0IsTUFBTTtBQUVOLFlBQVk7QUFDWixtRkFBbUY7QUFDbkYscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUVuQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvcGxheWVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3NoaXBDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7IH1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDsgfVxuICBib2R5ICN0aXRsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxleDogMTsgfVxuICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiA0OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNTBweDsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKS9yZXBlYXQoMTAsIDFmcik7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG4gICAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGw6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwubWlzc2luZy1hdHRhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA1MHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikvcmVwZWF0KDEwLCAxZnIpOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XG4gICAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDItY2VsbDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLm1pc3NpbmctYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdGQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUV6QixnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGNBQWMsRUFBQTs7QUFFZjs7RUFFQyxnQkFBZ0IsRUFBQTs7QUFFakI7O0VBRUMsWUFBWSxFQUFBOztBQUViOzs7O0VBSUMsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFZDtFQUNDLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFTbEI7RUFDQyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7RUFKZDtJQUxDLGFBQWE7SUFDYixtQkFVMkI7SUFUM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQVNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLE9BQU8sRUFBQTtFQVRUO0lBWUUsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsT0FBTyxFQUFBO0lBZlQ7TUFpQkcsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixTQUFTLEVBQUE7TUF0Qlo7UUF3QkksYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUiw4Q0FBZ0QsRUFBQTtRQTdCcEQ7VUErQkssdUJBQXVCLEVBQUE7VUEvQjVCO1lBaUNNLHVCQUF1QjtZQUN2QixZQUFZLEVBQUE7UUFsQ2xCO1VBc0NLLHNCQUFzQjtVQUN0QixZQUFZLEVBQUE7UUF2Q2pCO1VBMENLLHFCQUFxQjtVQUNyQixZQUFZLEVBQUE7SUEzQ2pCO01BZ0RHLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsU0FBUyxFQUFBO01BckRaO1FBdURJLGFBQWE7UUFDYixZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsOENBQWdELEVBQUE7UUE1RHBEO1VBK0RLLHVCQUF1QjtVQUN2Qix1QkFBdUIsRUFBQTtVQWhFNUI7WUFrRU0sdUJBQXVCO1lBQ3ZCLFlBQVksRUFBQTtRQW5FbEI7VUF1RUssc0JBQXNCO1VBQ3RCLFlBQVksRUFBQTtRQXhFakI7VUEyRUsscUJBQXFCO1VBQ3JCLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyogbWFpbiBzY3NzIHN0eWxlIHNoZWV0XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuQG1peGluIGZsZXhDZW50ZXJEaXIoJGRpcmVjdGlvbikge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHQjdGl0bGUtc2VjdGlvbiB7XFxuXFx0XFx0QGluY2x1ZGUgZmxleENlbnRlckRpcihyb3cpO1xcblxcdFxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdH1cXG5cXHQjZ2FtZS1ib2FyZC1zZWN0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZmxleDogNDtcXG5cXHRcXHQjcGxheWVyLXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDUwcHg7XFxuXFx0XFx0XFx0LmdhbWVib2FyZCB7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRcXHRcXHRcXHR3aWR0aDogNDAwcHg7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRnYXA6IDNweDtcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbCB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbC5taXNzaW5nLWF0dGFjayB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjM7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQxLWNlbGwuY29ycmVjdC1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0I2VuZW15LXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDUwcHg7XFxuXFx0XFx0XFx0LmdhbWVib2FyZCB7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRcXHRcXHRcXHR3aWR0aDogNDAwcHg7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRnYXA6IDNweDtcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuXFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDItY2VsbCB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDItY2VsbC5taXNzaW5nLWF0dGFjayB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjM7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQyLWNlbGwuY29ycmVjdC1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC8vIGV4dHJhIGRldGFpbDogLmdhbWVib2FyZC5zaGlwLWlzLXN1bmsge31cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgbWFwOiBBcnJheTxTaGlwIHwgJ2VtcHR5JyB8ICdtaXNzaW5nQXR0YWNrJz5bXTtcbiAgY29uc3RydWN0b3IoaGVpZ2h0OiBudW1iZXIgPSAxMCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLyBnYW1lIGJvYXJkIGNvbnRhaW5zIGhlaWdodCBhbmQgd2lkdGggdG8gY3JlYXRlIGEgZ3JpZCBkaXNwbGF5LlxuICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNpemUgPSB0aGlzLmhlaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMubWFwID0gW1xuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgXTtcbiAgfVxuXG4gIHBsYWNlU2hpcChcbiAgICB4Q29yOiBudW1iZXIsXG4gICAgeUNvcjogbnVtYmVyLFxuICAgIG5ld1NoaXA6IFNoaXAsXG4gICAgZGlyZWN0aW9uOlxuICAgICAgfCAnaG9yaXpvbnRhbCBsZWZ0J1xuICAgICAgfCAndmVydGljYWwgZG93bidcbiAgICAgIHwgJ2hvcml6b250YWwgcmlnaHQnXG4gICAgICB8ICd2ZXJ0aWNhbCB1cCdcbiAgKSB7XG4gICAgLy8geENvciBhbmQgeUNvciBhcmUgaW5wdXQgZnJvbSBVc2VyIEludGVyZmFjZVxuICAgIGlmICh0aGlzLm1hcFt5Q29yXVt4Q29yXSAhPT0gJ2VtcHR5JykgcmV0dXJuO1xuXG4gICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCByaWdodCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB4Q29yKys7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgbGVmdCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB4Q29yLS07XG4gICAgICAgIC8vXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsIGRvd24nKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeUNvcisrO1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCB1cCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB5Q29yLS07XG4gICAgICAgIC8vXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJhbmRvbVBsYWNpbmdTaGlwcygpIHtcbiAgICAvLyBwb3B1bGF0aW5nIGFyb3VuZCA0MCB1bml0cyAtPiBvbmUgb2YgNiB1bml0cywgdHdvIG9mIDUgdW5pdHMgLCB0d28gb2YgNCB1bml0cyB0aHJlZSBvZiAzIHVuaXRzIGFuZCB0aHJlZSBvZiAyIHVuaXRzIGFuZCBvbmUgb2YgMSB1bml0c1xuICAgIC8vIGhvdyB0byBkbyBtYXRoLnJhbmRvbSB3aXRoIHhDb3IgYW5kIHlDb3I/XG4gICAgLy8gYmVmb3JlIHBsYWNpbmcgZXZlcnkgc2hpcCB3ZSBuZWVkIHRvIGNoZWNrIHR3byBjb25kaXRpb25zXG4gICAgY29uc3QgcmFuRG9tU2VlZCA9IHRoaXMuaGVpZ2h0IC0gMTtcbiAgICBsZXQgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgbGV0IHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGNvbnNvbGUubG9nKHhDb3IpO1xuICAgIGNvbnNvbGUubG9nKHlDb3IpO1xuXG4gICAgLyoqXG4gICAgICogIG9uZTogaXMgcmFuZG9tIHhDb3IgYW5kIHlDb3IgaXMgc3RpbGwgb24gdGhlIGJvYXJkXG4gICAgICogdHdvIDogaXMgeENvcnMgYW5kIHlDb3JzIG9mIGVhY2ggc2hpcCBjb2xsaWRlIHdpdGggdGhlIGFscmVhZHkgcG9wdWxhdGVkIHNoaXBzLlxuICAgICAqL1xuICB9XG4gIHJlY2VpdmVBdHRhY2soeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICAvL1tVSV0gY2xhc3MgbmVlZCB0byBwcmV2ZW50IHJlY2VpdmVBdHRhY2ggd2hlbiB0aGVyZSB3YXMgYW4gYXR0YWNrIG9yIG1pc3Npbmcgc2hvdCAgaW4gdGhpcyBjb29yZGluYXRlIGFscmVhZHkuXG4gICAgLy8gIGlmICh4Q29yID4gdGhpcy5oZWlnaHQgfHwgeUNvciA+IHRoaXMud2lkdGgpIHJldHVybjtcblxuICAgIGlmICh0aGlzLm1hcFt5Q29yXVt4Q29yXSA9PT0gJ2VtcHR5Jykge1xuICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSAnbWlzc2luZ0F0dGFjayc7XG4gICAgICAvLyByZWNvcmQgY29vcmRpbmF0ZSBvZiB0aGUgbWlzc2VkIHNob3RcbiAgICAgIC8vIFtVSV0gZGlzcGxheSBtaXNzZWQgc2hvdFxuICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLm1hcFt5Q29yXVt4Q29yXS5oaXQoKTtcbiAgICB9XG4gIH1cbiAgLy9HYW1lIGJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG4gIGdldE1pc3NpbmdBdHRhY2tzQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgYXJyOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gPT09ICdtaXNzaW5nQXR0YWNrJykge1xuICAgICAgICAgIGFyci5wdXNoKFtqLCBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICAvLyAgICBHYW1lIGJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuICBpc0ZsZWV0QWxsU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMubWFwW2ldW2pdO1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi4vc3JjL2dhbWVib2FyZENvbXBvbmVudCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zcmMvc2hpcENvbXBvbmVudCc7XG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ7XG4gIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gIH1cblxuICBwbGF5VHVybihvcHBvbmVudDogQ29tcHV0ZXIsIHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgb3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeENvciwgeUNvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIHtcbiAgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ7XG4gIGhpdE1hcDogc3RyaW5nW11bXTtcbiAgYXR0YWNrVGltZXM6IG51bWJlcjtcbiAgbGltaXRlZEF0dGFja1RpbWVzOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gICAgdGhpcy5oaXRNYXAgPSBbXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgIF07XG4gICAgdGhpcy5hdHRhY2tUaW1lcyA9IDA7XG4gICAgdGhpcy5saW1pdGVkQXR0YWNrVGltZXMgPSAxMDA7XG4gIH1cbiAgcGxheShwbGF5ZXI6IFBsYXllcikge1xuICAgIC8qKiBhbGdvcml0aG06XG4gICAgICogIHN0ZXAgMTogY2hlY2sgaWYgdGhpcy5oaXRNYXAgY29udGFpbnMgJ3BvdGVudGlhbCcgLT4gcGxheVJhbmRvbSgpIHNtYXJ0IHZlcnNpb25cbiAgICAgKiAgZWxzZSA6IHBsYXlSYW5kb20oKSByYW5kb20gdmVyc2lvblxuICAgICAqIHN0ZXAgMjogbG9naWMgZm9yIHRlcm1pbmF0aW5nICdwb3RlbnRpYWwnIC0+IHJlcGxhY2UgJ25ldycgdG8gJ3BvdGVudGlhbCcgYWdhaW5cbiAgICAgKiAgLT4gaWYgdGhlIHNoaXAuaXNTaW5rKCkgcmV0dXJuIHRydWUgLT4gcmVzZXQgYWxsICBhZGphY2VudCAncG90ZW50aWFsJyB0byAnbmV3J1xuICAgICAqL1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzdW5rU2hpcCAtPiBwb3RlbnRpYWxSZXNldHRpbmcoKVxuICAgIGlmICh0aGlzLnBvdGVudGlhbENoZWNraW5nKCkpIHtcbiAgICAgIHRoaXMucGxheVNtYXJ0KHBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheVJhbmRvbShwbGF5ZXIpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHBvdGVudGlhbE1hcmtpbmcoeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICBpZiAoeENvciArIDEgPj0gMCAmJiB4Q29yICsgMSA8IDUgJiYgeUNvciA+PSAwICYmIHlDb3IgPCA1KSB7XG4gICAgICAvLyBjb29yZGluYXRlIGlzIG9uIHRoZSBib2FyZFxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPT09ICduZXcnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSAhPT0gJ2F0dGFja2VkJyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gIT09ICdhdHRhY2tlZFNoaXAnXG4gICAgICApXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSA9ICdwb3RlbnRpYWwnO1xuICAgIH1cbiAgICBpZiAoeENvciArIDEgPj0gMCAmJiB4Q29yICsgMSA8IDUgJiYgeUNvciArIDEgPj0gMCAmJiB5Q29yICsgMSA8IDUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgPj0gMCAmJiB4Q29yIDwgNSAmJiB5Q29yIC0gMSA+PSAwICYmIHlDb3IgLSAxIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgLSAxID49IDAgJiYgeENvciAtIDEgPCA1ICYmIHlDb3IgPj0gMCAmJiB5Q29yIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxSZXNldHRpbmcoeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICAvLyBpZiB0aGUgc2hpcCBsZW5ndGggPiAxXG4gICAgLy8gYXNzdW1wdGlvbjogIGxvb3BpbmcgYW5kIGFjY2Vzc2luZyBldmVyeSBlbGVtZW50IG9mIHBsYXllci5nYW1lQm9hcmQubWFwXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzcG90IHdoZXJlIGluc3RhbmNlb2YgU2hpcCAmJiB0aGF0IHNoaXAuaXNTdW5rKClcbiAgICAvL3JldHVybiB0aGF0IHhDb3JzIGFuZCB5Q29ycyBpbnNpZGUgYW4gYXJyYXlcbiAgICAvLyBsb29waW5nIHRocm91Z2ggdGhlIGFycmF5IGFuZFxuICAgIC8vIGRvIHRoZSBiZWxvd1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID0gJ25ldyc7XG4gICAgaWYgKHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSA9PT0gJ3BvdGVudGlhbCcpXG4gICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPSAnbmV3JztcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9ICduZXcnO1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID0gJ25ldyc7XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxDaGVja2luZygpIHtcbiAgICAvLz8gdGhpcyBtZXRob2QgZG9lcyBub3Qgd29yay5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdE1hcFtpXVtqXSA9PT0gJ3BvdGVudGlhbCcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwbGF5U21hcnQob3Bwb25lbnQ6IFBsYXllcikge1xuICAgIC8vIG5lZWQgdG8gaW1wbGVtZW50aW5nIGhvdyB0byByZXNldCBwb3RlbnRpYWwgcG9pbnRzXG4gICAgLy9cbiAgICBpZiAodGhpcy5hdHRhY2tUaW1lcyA+PSB0aGlzLmxpbWl0ZWRBdHRhY2tUaW1lcykgcmV0dXJuO1xuICAgIGNvbnN0IHJhbkRvbVNlZWQgPSBvcHBvbmVudC5nYW1lQm9hcmQuaGVpZ2h0IC0gMTtcbiAgICBsZXQgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgbGV0IHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIHdoaWxlICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSAhPT0gJ3BvdGVudGlhbCcpIHtcbiAgICAgIHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgICAgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrVGltZXMrKztcbiAgICBpZiAob3Bwb25lbnQuZ2FtZUJvYXJkLm1hcFt5Q29yXVt4Q29yXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3JdID0gJ2F0dGFja2VkU2hpcCc7XG4gICAgICB0aGlzLnBvdGVudGlhbE1hcmtpbmcoeENvciwgeUNvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3JdID0gJ2F0dGFja2VkJztcbiAgICB9XG4gICAgb3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeENvciwgeUNvcik7XG4gIH1cblxuICBwbGF5UmFuZG9tKG9wcG9uZW50OiBQbGF5ZXIpIHtcbiAgICBpZiAodGhpcy5hdHRhY2tUaW1lcyA+PSB0aGlzLmxpbWl0ZWRBdHRhY2tUaW1lcykgcmV0dXJuO1xuICAgIGNvbnN0IHJhbkRvbVNlZWQgPSBvcHBvbmVudC5nYW1lQm9hcmQuaGVpZ2h0IC0gMTtcbiAgICBsZXQgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgbGV0IHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIHdoaWxlICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSAhPT0gJ25ldycpIHtcbiAgICAgIC8vIHJlcGxhY2UgdHlwZU9mQXR0YWNrIGhlcmVcbiAgICAgIHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgICAgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrVGltZXMrKztcbiAgICAvLyBtYXJraW5nIGxvZ2ljXG4gICAgaWYgKG9wcG9uZW50LmdhbWVCb2FyZC5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZFNoaXAnO1xuICAgICAgdGhpcy5wb3RlbnRpYWxNYXJraW5nKHhDb3IsIHlDb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZCc7XG4gICAgfVxuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhpdFRpbWVzOiBudW1iZXI7XG4gIGlzU3Vua1N0YXR1czogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIgPSAxKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRUaW1lcyA9IDA7XG4gICAgdGhpcy5pc1N1bmtTdGF0dXMgPSBmYWxzZTtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0VGltZXMgPCB0aGlzLmxlbmd0aCkgdGhpcy5oaXRUaW1lcysrO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IHRoaXMuaGl0VGltZXMpIHtcbiAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3Vua1N0YXR1cztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDb21wb25lbnQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyQ29tcG9uZW50JztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmRDb21wb25lbnQnO1xuY29uc3QgZ2FtZUJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQxJyk7XG5jb25zdCBnYW1lQm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZDInKTtcbmZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwxLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZDEtY2VsbCcpO1xuICAgIGNlbGwxLmRhdGFzZXQuY2VsbCA9IGAke2l9LCR7an1gO1xuICAgIGdhbWVCb2FyZDEuYXBwZW5kKGNlbGwxKTtcbiAgfVxufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgY29uc3QgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQyLWNlbGwnKTtcbiAgICBjZWxsMi5kYXRhc2V0LmNlbGwgPSBgJHtpfSwke2p9YDtcbiAgICBnYW1lQm9hcmQyLmFwcGVuZChjZWxsMik7XG4gIH1cbn1cblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihuZXcgR2FtZUJvYXJkKDEwKSk7XG5jb25zdCBlbmVteSA9IG5ldyBDb21wdXRlcihuZXcgR2FtZUJvYXJkKDEwKSk7XG5lbmVteS5nYW1lQm9hcmQucGxhY2VTaGlwKDAsIDAsIG5ldyBTaGlwKDIpLCAnaG9yaXpvbnRhbCByaWdodCcpO1xuLy8gYXR0YWNraW5nIGxvZ2ljIGZyb20gVUlcbmdhbWVCb2FyZDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoXG4gICAgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgIGUudGFyZ2V0LmRhdGFzZXQuY2xpY2tlZCAhPT0gJ3RydWUnICYmIC8vIHdoeSBkb2Vzbid0IGl0IHN0b3AgaW4gaGVyZVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZWJvYXJkMi1jZWxsJylcbiAgKSB7XG4gICAgZS50YXJnZXQuZGF0YXNldC5jbGlja2VkID0gJ3RydWUnO1xuXG4gICAgLy8gZXh0cmFjdGluZyB4Q29yIGFuZCB5Q29yXG4gICAgY29uc3QgeENvciA9ICtlLnRhcmdldC5kYXRhc2V0LmNlbGwuc3BsaXQoJywnKVsxXTtcbiAgICBjb25zdCB5Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzBdO1xuXG4gICAgcGxheWVyLnBsYXlUdXJuKGVuZW15LCB4Q29yLCB5Q29yKTtcblxuICAgIGNvbnNvbGUubG9nKGVuZW15LmdhbWVCb2FyZC5tYXApO1xuXG4gICAgY29uc29sZS5sb2coZW5lbXkuZ2FtZUJvYXJkLm1hcFt5Q29yXVt4Q29yXSk7XG4gICAgLy8gZGlzcGxheUVmZmVjdCBvZiBhdHRhY2tpbmdcbiAgICBtYXJraW5nQXR0YWNrKGUudGFyZ2V0LCB4Q29yLCB5Q29yKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBtYXJraW5nQXR0YWNrKGVsZW1lbnRUYXJnZXQ6IEhUTUxFbGVtZW50LCB4Q29yOiBudW1iZXIsIHlDb3I6IG51bWJlcikge1xuICAvLyBFeHRyYS1kZXRhaWwgOmNoZWNraW5nIGlmIHRoZSBjb3Jyc3BvbmRpbmcgYXR0YWNrIGlzIHRoZSBsYXN0IGF0dGFjayB0aGF0IG1ha2luZyB0aGUgc2hpcC5pc1N1bmsoKSByZXR1cm4gdHJ1ZVxuICAvLyAtPiB0b2dnbGUgYWxsIGNlbGxzJyBvcGFjaXR5ID0gMC4yIHRoYXQgY29udGFpbiB0aGF0IHNoaXBcbiAgLy8gLT4gY2xhc3NMaXN0IHRvZ2dsZSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzaW5nIGF0dGFjayB8IGNvcnJlY3QgYXR0YWNrJylcbiAgaWYgKGVuZW15LmdhbWVCb2FyZC5tYXBbeUNvcl1beENvcl0gPT09ICdtaXNzaW5nQXR0YWNrJykge1xuICAgIGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzc2luZy1hdHRhY2snKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QtYXR0YWNrJyk7XG4gIH1cbn1cbi8vIGdhbWVCb2FyZDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyB9KTtcblxuLy8gbWFpbiBsb29wXG4vLyB3aGlsZSghcGxheWVyLmdhbWVCb2FyZC5pc0ZsZWV0QWxsU3VuaygpICYmICFlbmVteS5nYW1lQm9hcmQuaXNGbGVldEFsbFN1bmsoKSkge1xuLy8gICAgIC8vIHdhaXRpbmcgZm9yIHVzZXIgY2xpY2sgb25jZVxuLy8gICAgIC8vIC0+IGxldCBjb21wdXRlciBwbGF5IG9uY2VcblxuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9