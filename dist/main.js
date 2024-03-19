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
  body .hidden {
    display: none; }
  body #finial-announcement {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: grey;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px; }
    body #finial-announcement .announcement-wrapper {
      background-color: black;
      padding: 40px;
      color: white; }
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
        height: 600px;
        width: 600px;
        display: grid;
        border: 4px solid black;
        gap: 3px;
        grid-template: repeat(10, 1fr)/repeat(10, 1fr); }
        body #game-board-section #player-section .gameboard .gameboard1-cell {
          background-color: white;
          border: 1px solid black; }
          body #game-board-section #player-section .gameboard .gameboard1-cell:hover {
            background-color: black;
            opacity: 0.3; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.our-ship-color {
          background-color: aqua;
          opacity: 0.8; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.missing-attack {
          background-color: gray;
          opacity: 0.3; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.correct-attack {
          background-color: red;
          opacity: 0.5; }
        body #game-board-section #player-section .gameboard .gameboard1-cell.dragging-ship-color {
          background-color: aqua;
          opacity: 0.5; }
    body #game-board-section .ships-placement-horizontal {
      height: 200px;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      margin-left: -20px;
      margin-top: 30px;
      align-self: flex-start;
      background-color: wheat;
      list-style: none;
      font-size: 20px; }
      body #game-board-section .ships-placement-horizontal li {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        gap: 1px; }
        body #game-board-section .ships-placement-horizontal li .ship-cell {
          width: 20px;
          height: 20px;
          border: 1px solid black;
          background-color: aqua;
          opacity: 0.8; }
    body #game-board-section li.draggable {
      cursor: move; }
    body #game-board-section li.dragging {
      opacity: 0.5; }
    body #game-board-section .ships-placement-vertical {
      height: 200px;
      width: 200px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      margin-left: -20px;
      margin-top: 30px;
      align-self: flex-start;
      background-color: wheat;
      list-style: none;
      font-size: 20px; }
      body #game-board-section .ships-placement-vertical li {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1px; }
        body #game-board-section .ships-placement-vertical li .ship-cell {
          width: 20px;
          height: 20px;
          border: 1px solid black;
          background-color: aqua;
          opacity: 0.8; }
      body #game-board-section .ships-placement-vertical li.draggable {
        cursor: move; }
      body #game-board-section .ships-placement-vertical li.dragging {
        opacity: 0.5; }
    body #game-board-section #enemy-section {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      justify-content: center;
      align-items: center;
      gap: 50px; }
      body #game-board-section #enemy-section .gameboard {
        height: 600px;
        width: 600px;
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
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["//* main scss style sheet\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: \"\";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@mixin flexCenterDir($direction) {\n\tdisplay: flex;\n\tflex-direction: $direction;\n\tjustify-content: center;\n\talign-items: center;\n}\nbody {\n\tbackground-color: gray;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\t.hidden {\n\t\tdisplay: none;\n\t}\n\t#finial-announcement {\n\t\tposition: absolute;\n\t\theight: 100vh;\n\t\twidth: 100vw;\n\t\tbackground-color: grey;\n\t\topacity: 0.8;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 60px;\n\t\t.announcement-wrapper {\n\t\t\tbackground-color: black;\n\t\t\tpadding: 40px;\n\t\t\tcolor: white;\n\t\t}\n\t}\n\t#title-section {\n\t\t@include flexCenterDir(row);\n\t\tfont-size: 40px;\n\t\tfont-weight: bold;\n\t\tflex: 1;\n\t}\n\t#game-board-section {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tflex: 4;\n\t\t#player-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\t\t\t\t.gameboard1-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.our-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.dragging-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.ships-placement-horizontal {\n\t\t\theight: 200px;\n\t\t\twidth: 200px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tli.draggable {\n\t\t\tcursor: move;\n\t\t}\n\t\tli.dragging {\n\t\t\topacity: 0.5;\n\t\t}\n\t\t.ships-placement-vertical {\n\t\t\theight: 200px;\n\t\t\twidth: 200px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t\tli.draggable {\n\t\t\t\tcursor: move;\n\t\t\t}\n\t\t\tli.dragging {\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t}\n\n\t\t#enemy-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\n\t\t\t\t.gameboard2-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t// extra detail: .gameboard.ship-is-sunk {}\n\t\t\t}\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/DOMAndUI.ts":
/*!*************************!*\
  !*** ./src/DOMAndUI.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDirection: () => (/* binding */ changeDirection),
/* harmony export */   checkingAndDisplayingAnnouncement: () => (/* binding */ checkingAndDisplayingAnnouncement),
/* harmony export */   computerMarkingAttack: () => (/* binding */ computerMarkingAttack),
/* harmony export */   displayOurShips: () => (/* binding */ displayOurShips),
/* harmony export */   markingAttack: () => (/* binding */ markingAttack)
/* harmony export */ });
/* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipComponent */ "./src/shipComponent.ts");

function markingAttack(target, elementTarget, xCor, yCor) {
    // Extra-detail :checking if the corrsponding attack is the last attack that making the ship.isSunk() return true
    // -> toggle all cells' opacity = 0.2 that contain that ship
    // -> classList toggle e.target.classList.add('missing attack | correct attack')
    if (target.gameBoard.map[yCor][xCor] === 'missingAttack') {
        elementTarget.classList.add('missing-attack');
    }
    else {
        elementTarget.classList.add('correct-attack');
    }
}
function computerMarkingAttack(
// renovating it later
computerMap, playerGameboardCells) {
    var cellArray = [[], [], [], [], [], [], [], [], [], []];
    var i = 0;
    playerGameboardCells.forEach(function (cell, index) {
        if (index % 10 === 0 && index !== 0) {
            i++; // it doesn't seem to be a convention way
        }
        cellArray[i].push(cell); // it doesn't seem to be a convention way
    });
    for (var i_1 = 0; i_1 < 10; i_1++) {
        for (var j = 0; j < 10; j++) {
            if (computerMap[i_1][j] === 'new' || computerMap[i_1][j] === 'potential')
                continue;
            if (computerMap[i_1][j] === 'attacked') {
                cellArray[i_1][j].classList.add('missing-attack');
            }
            else {
                cellArray[i_1][j].classList.add('correct-attack');
            }
        }
    }
}
function checkingAndDisplayingAnnouncement(player, enemy) {
    if (player.gameBoard.isFleetAllSunk()) {
        var announcementText = document.querySelector('.announcement-wrapper');
        announcementText.textContent = ' you win yourself.';
        announcementText.parentElement.setAttribute('id', 'finial-announcement');
    }
    else if (enemy.gameBoard.isFleetAllSunk()) {
        var announcementText = document.querySelector('.announcement-wrapper');
        announcementText.parentElement.setAttribute('id', 'finial-announcement');
        announcementText.textContent =
            ' you lose yourself, hence you win yourself. ';
    }
}
// create a function to display color blue for our ship
function displayOurShips(playerGameboardCells, ourMap) {
    var cellArray = [[], [], [], [], [], [], [], [], [], []];
    var i = 0;
    playerGameboardCells.forEach(function (cell, index) {
        if (index % 10 === 0 && index !== 0) {
            i++;
        }
        cellArray[i].push(cell); // it doesn't seem to be a convention way
    });
    // console.log(cellArray); // obtain cellArray
    for (var i_2 = 0; i_2 < 10; i_2++) {
        for (var j = 0; j < 10; j++) {
            if (ourMap[i_2][j] === 'empty') {
            }
            else if (ourMap[i_2][j] instanceof _shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                // console.log([i, j]);
                cellArray[i_2][j].classList.add('our-ship-color');
            }
        }
    }
}
//the function to toggle vertical placement-ships vs horizontal
function changeDirection(shipsPlacement) {
    if (shipsPlacement.classList.contains('ships-placement-horizontal')) {
        shipsPlacement.classList.remove('ships-placement-horizontal');
        shipsPlacement.classList.add('ships-placement-vertical');
    }
    else {
        shipsPlacement.classList.remove('ships-placement-vertical');
        shipsPlacement.classList.add('ships-placement-horizontal');
    }
}


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
    GameBoard.prototype.randomPlacingShips = function (ship) {
        // populating around 40 units -> one of 6 units, two of 5 units , two of 4 units three of 3 units and three of 2 units and one of 1 units
        // how to do math.random with xCor and yCor?
        // before placing every ship we need to check two conditions
        var ranDomSeed = this.height - 1;
        var xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        var yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        // random direction too
        var randomDirection = this.returnRandomDirection();
        while (!this.checkingCollisionAndOnTheBoard(ship.length, xCor, yCor, randomDirection)) {
            xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
        }
        this.placeShip(xCor, yCor, ship, randomDirection);
        /**
         *  one: is random xCor and yCor is still on the board
         * two : is xCors and yCors of each ship collide with the already populated ships.
         */
    };
    GameBoard.prototype.returnRandomDirection = function () {
        var directionSeed = Math.round(Math.random() * 3);
        switch (directionSeed) {
            case 0:
                return 'horizontal right';
            case 1:
                return 'horizontal left';
            case 2:
                return 'vertical down';
            case 3:
                return 'vertical up';
            default:
                return 'vertical down';
        }
    };
    GameBoard.prototype.checkingCollisionAndOnTheBoard = function (shipLength, xCor, yCor, direction) {
        for (var i = 0; i < shipLength; i++) {
            if (yCor > 9 || yCor < 0 || xCor > 9 || xCor < 0)
                return false;
            if (this.map[yCor][xCor] !== 'empty')
                return false;
            if (direction === 'horizontal right') {
                xCor++;
            }
            else if (direction === 'horizontal left') {
                xCor--;
            }
            else if (direction === 'vertical down') {
                yCor++;
            }
            else if (direction === 'vertical up') {
                yCor--;
            }
        }
        return true;
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
/* harmony import */ var _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMAndUI */ "./src/DOMAndUI.ts");
// import './style.css';





var gameBoard1 = document.querySelector('#gameboard1');
var gameBoard2 = document.querySelector('#gameboard2');
var shipsPlacement = document.querySelector('#ships-placement');
var directionButton = document.querySelector('.direction-button');
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
var playerCells = document.querySelectorAll('.gameboard1-cell');
// const turnAnnouncement = document.querySelector('.turn-announcement');
var player = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Player(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
var enemy = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Computer(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
player.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](4));
player.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](3));
player.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](2));
enemy.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](4));
enemy.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](3));
enemy.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](2));
// let playerTurn = true;
//only let user play the game after placing all their ships.
// attacking logic from UI
(0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayOurShips)(playerCells, player.gameBoard.map);
//button to change direction.
directionButton.addEventListener('click', function () {
    return (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.changeDirection)(shipsPlacement);
});
gameBoard2.addEventListener('click', function (e) {
    //   if (!playerTurn) return;
    if (!player.gameBoard.isFleetAllSunk() && !enemy.gameBoard.isFleetAllSunk()) {
        if (e.target instanceof HTMLElement &&
            e.target.dataset.clicked !== 'true' &&
            e.target.classList.contains('gameboard2-cell')) {
            e.target.dataset.clicked = 'true';
            // extracting xCor and yCor from document
            var xCor = +e.target.dataset.cell.split(',')[1];
            var yCor = +e.target.dataset.cell.split(',')[0];
            player.playTurn(enemy, xCor, yCor);
            enemy.play(player);
            // displayEffect of attacking
            (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.markingAttack)(enemy, e.target, xCor, yCor);
            (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.computerMarkingAttack)(enemy.hitMap, playerCells);
            // display announcement if there is a winner
            (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.checkingAndDisplayingAnnouncement)(player, enemy);
            //   playerTurn = false;
        }
    }
});
//* what to do right now:
var draggables = document.querySelectorAll('.draggable');
var currentDraggedObject;
draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function () {
        draggable.classList.add('dragging');
        currentDraggedObject = draggable;
    });
    draggable.addEventListener('dragend', function () {
        return draggable.classList.remove('dragging');
    }
    // call placing ship function in here. for player
    , 
    // call placing ship function in here. for player
    player.gameBoard.placeShip(xCor, yCor, new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](), direction));
});
gameBoard1.addEventListener('dragover', function (e) {
    var HTMLElement = e.target;
    var direction;
    var shipLength = currentDraggedObject.dataset.length;
    console.log(shipLength);
    if (currentDraggedObject.parentElement.classList.contains('ships-placement-vertical')) {
        direction = 'vertical';
        console.log(direction);
    }
    else {
        direction = 'horizontal';
        console.log(direction);
    }
    if (HTMLElement.classList.contains('gameboard1-cell')) {
        var xCor = +e.target.dataset.cell.split(',')[0];
        var yCor = +e.target.dataset.cell.split(',')[1];
        console.log(xCor);
        console.log(yCor);
        // now we need to extract 'direction from li.classlist if..else statement
        // how to access current draggable here ?
        // displayShipWhileDragging(xCor, yCor, length, direction);
    }
});
function displayShipWhileDragging(xCor, yCor, length, direction) {
    //
}
// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 * *
 *  let user choose coordinate by  dragging by using 'dragStart' and 'dragover' (almost solved)
 * *how can we create each ship with each li element when we drag li element over gameboard 1
 * we don't need to use place ship when dragging over but just only display the placement
 * -> create a new function displayShipWhile dragging
 *  reviewing old code -> making it a better version by refactoring , decoupling.
 */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtZQUNEO2dCQUNFLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQs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S0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDdkUsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUNELHVCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCOzs7OztXQUtHO1FBRUgsaURBQWlEO1FBQ2pELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUNPLG1DQUFnQixHQUF4QixVQUF5QixJQUFZLEVBQUUsSUFBWTtRQUNqRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzNELDZCQUE2QjtZQUM3QixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLFVBQVU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLGNBQWM7Z0JBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ25FLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSztnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVTtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssY0FBYztnQkFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzNELDZCQUE2QjtZQUM3QixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLGNBQWM7Z0JBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FB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TixTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ3RELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLHlFQUF5RTtRQUN6RSx5Q0FBeUM7UUFDekMsMkRBQTJEO0lBQzdELENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsd0JBQXdCLENBQy9CLElBQVksRUFDWixJQUFZLEVBQ1osTUFBYyxFQUNkLFNBQW9DO0lBRXBDLEVBQUU7QUFDSixDQUFDO0FBQ0QscUZBQXFGO0FBQ3JGLEVBQUU7QUFDRix1R0FBdUc7QUFDdkc7Ozs7Ozs7O0dBUUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL0RPTUFuZFVJLnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2dhbWVib2FyZENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9wbGF5ZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc2hpcENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7IH1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7IH1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTsgfVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoOyB9XG4gIGJvZHkgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICBib2R5ICNmaW5pYWwtYW5ub3VuY2VtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNjBweDsgfVxuICAgIGJvZHkgI2ZpbmlhbC1hbm5vdW5jZW1lbnQgLmFubm91bmNlbWVudC13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxuICBib2R5ICN0aXRsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxleDogMTsgfVxuICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiA0OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNTBweDsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKS9yZXBlYXQoMTAsIDFmcik7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XG4gICAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGw6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwub3VyLXNoaXAtY29sb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsLm1pc3NpbmctYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbC5jb3JyZWN0LWF0dGFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbC5kcmFnZ2luZy1zaGlwLWNvbG9yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsIGxpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFweDsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsIGxpIC5zaGlwLWNlbGwge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiBsaS5kcmFnZ2FibGUge1xuICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIGxpLmRyYWdnaW5nIHtcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwgbGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiAxcHg7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwgbGkgLnNoaXAtY2VsbCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCBsaS5kcmFnZ2FibGUge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsIGxpLmRyYWdnaW5nIHtcbiAgICAgICAgb3BhY2l0eTogMC41OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA1MHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCB7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikvcmVwZWF0KDEwLCAxZnIpOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XG4gICAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDItY2VsbDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLm1pc3NpbmctYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdGQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7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dkIsUUFBUTtRQUNSLDhDQUFnRCxFQUFBO1FBaktwRDtVQW9LSyx1QkFBdUI7VUFDdkIsdUJBQXVCLEVBQUE7VUFySzVCO1lBdUtNLHVCQUF1QjtZQUN2QixZQUFZLEVBQUE7UUF4S2xCO1VBNEtLLHNCQUFzQjtVQUN0QixZQUFZLEVBQUE7UUE3S2pCO1VBZ0xLLHFCQUFxQjtVQUNyQixZQUFZLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8qIG1haW4gc2NzcyBzdHlsZSBzaGVldFxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbkBtaXhpbiBmbGV4Q2VudGVyRGlyKCRkaXJlY3Rpb24pIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0LmhpZGRlbiB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0I2ZpbmlhbC1hbm5vdW5jZW1lbnQge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRoZWlnaHQ6IDEwMHZoO1xcblxcdFxcdHdpZHRoOiAxMDB2dztcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcblxcdFxcdG9wYWNpdHk6IDAuODtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiA2MHB4O1xcblxcdFxcdC5hbm5vdW5jZW1lbnQtd3JhcHBlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0cGFkZGluZzogNDBweDtcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQjdGl0bGUtc2VjdGlvbiB7XFxuXFx0XFx0QGluY2x1ZGUgZmxleENlbnRlckRpcihyb3cpO1xcblxcdFxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdH1cXG5cXHQjZ2FtZS1ib2FyZC1zZWN0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZmxleDogNDtcXG5cXHRcXHQjcGxheWVyLXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDUwcHg7XFxuXFx0XFx0XFx0LmdhbWVib2FyZCB7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiA2MDBweDtcXG5cXHRcXHRcXHRcXHR3aWR0aDogNjAwcHg7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRnYXA6IDNweDtcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbCB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbC5vdXItc2hpcC1jb2xvciB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQxLWNlbGwubWlzc2luZy1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMS1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMS1jZWxsLmRyYWdnaW5nLXNoaXAtY29sb3Ige1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5zaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCB7XFxuXFx0XFx0XFx0aGVpZ2h0OiAyMDBweDtcXG5cXHRcXHRcXHR3aWR0aDogMjAwcHg7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogLTIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRcXHRcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcblxcdFxcdFxcdGxpIHtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdFxcdFxcdGdhcDogMXB4O1xcblxcdFxcdFxcdFxcdC5zaGlwLWNlbGwge1xcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyMHB4O1xcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjBweDtcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuODtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHRcXHRsaS5kcmFnZ2FibGUge1xcblxcdFxcdFxcdGN1cnNvcjogbW92ZTtcXG5cXHRcXHR9XFxuXFx0XFx0bGkuZHJhZ2dpbmcge1xcblxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHR9XFxuXFx0XFx0LnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCB7XFxuXFx0XFx0XFx0aGVpZ2h0OiAyMDBweDtcXG5cXHRcXHRcXHR3aWR0aDogMjAwcHg7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogLTIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRcXHRcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcblxcdFxcdFxcdGxpIHtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHRcXHRnYXA6IDFweDtcXG5cXHRcXHRcXHRcXHQuc2hpcC1jZWxsIHtcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMjBweDtcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDIwcHg7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRsaS5kcmFnZ2FibGUge1xcblxcdFxcdFxcdFxcdGN1cnNvcjogbW92ZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0bGkuZHJhZ2dpbmcge1xcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNlbmVteS1zZWN0aW9uIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiA1MHB4O1xcblxcdFxcdFxcdC5nYW1lYm9hcmQge1xcblxcdFxcdFxcdFxcdGhlaWdodDogNjAwcHg7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDYwMHB4O1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0Z2FwOiAzcHg7XFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcblxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQyLWNlbGwge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuMztcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQyLWNlbGwubWlzc2luZy1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMi1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQvLyBleHRyYSBkZXRhaWw6IC5nYW1lYm9hcmQuc2hpcC1pcy1zdW5rIHt9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gJy4vcGxheWVyQ29tcG9uZW50JztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcENvbXBvbmVudCc7XG5leHBvcnQgZnVuY3Rpb24gbWFya2luZ0F0dGFjayhcbiAgdGFyZ2V0OiBDb21wdXRlcixcbiAgZWxlbWVudFRhcmdldDogSFRNTEVsZW1lbnQsXG4gIHhDb3I6IG51bWJlcixcbiAgeUNvcjogbnVtYmVyXG4pIHtcbiAgLy8gRXh0cmEtZGV0YWlsIDpjaGVja2luZyBpZiB0aGUgY29ycnNwb25kaW5nIGF0dGFjayBpcyB0aGUgbGFzdCBhdHRhY2sgdGhhdCBtYWtpbmcgdGhlIHNoaXAuaXNTdW5rKCkgcmV0dXJuIHRydWVcbiAgLy8gLT4gdG9nZ2xlIGFsbCBjZWxscycgb3BhY2l0eSA9IDAuMiB0aGF0IGNvbnRhaW4gdGhhdCBzaGlwXG4gIC8vIC0+IGNsYXNzTGlzdCB0b2dnbGUgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzc2luZyBhdHRhY2sgfCBjb3JyZWN0IGF0dGFjaycpXG4gIGlmICh0YXJnZXQuZ2FtZUJvYXJkLm1hcFt5Q29yXVt4Q29yXSA9PT0gJ21pc3NpbmdBdHRhY2snKSB7XG4gICAgZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzaW5nLWF0dGFjaycpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1hdHRhY2snKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXJNYXJraW5nQXR0YWNrKFxuICAvLyByZW5vdmF0aW5nIGl0IGxhdGVyXG4gIGNvbXB1dGVyTWFwOiBDb21wdXRlclsnaGl0TWFwJ10sXG4gIHBsYXllckdhbWVib2FyZENlbGxzOiBOb2RlTGlzdFxuKSB7XG4gIGNvbnN0IGNlbGxBcnJheTogTm9kZVtdW10gPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICBsZXQgaSA9IDA7XG4gIHBsYXllckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICUgMTAgPT09IDAgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIGkrKzsgLy8gaXQgZG9lc24ndCBzZWVtIHRvIGJlIGEgY29udmVudGlvbiB3YXlcbiAgICB9XG4gICAgY2VsbEFycmF5W2ldLnB1c2goY2VsbCk7IC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGNvbnZlbnRpb24gd2F5XG4gIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChjb21wdXRlck1hcFtpXVtqXSA9PT0gJ25ldycgfHwgY29tcHV0ZXJNYXBbaV1bal0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGlmIChjb21wdXRlck1hcFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICBjZWxsQXJyYXlbaV1bal0uY2xhc3NMaXN0LmFkZCgnbWlzc2luZy1hdHRhY2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxBcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0LWF0dGFjaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNraW5nQW5kRGlzcGxheWluZ0Fubm91bmNlbWVudChcbiAgcGxheWVyOiBQbGF5ZXIsXG4gIGVuZW15OiBDb21wdXRlclxuKSB7XG4gIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmlzRmxlZXRBbGxTdW5rKCkpIHtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlbWVudC13cmFwcGVyJyk7XG4gICAgYW5ub3VuY2VtZW50VGV4dC50ZXh0Q29udGVudCA9ICcgeW91IHdpbiB5b3Vyc2VsZi4nO1xuICAgIGFubm91bmNlbWVudFRleHQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpbmlhbC1hbm5vdW5jZW1lbnQnKTtcbiAgfSBlbHNlIGlmIChlbmVteS5nYW1lQm9hcmQuaXNGbGVldEFsbFN1bmsoKSkge1xuICAgIGNvbnN0IGFubm91bmNlbWVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5ub3VuY2VtZW50LXdyYXBwZXInKTtcbiAgICBhbm5vdW5jZW1lbnRUZXh0LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdmaW5pYWwtYW5ub3VuY2VtZW50Jyk7XG4gICAgYW5ub3VuY2VtZW50VGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAnIHlvdSBsb3NlIHlvdXJzZWxmLCBoZW5jZSB5b3Ugd2luIHlvdXJzZWxmLiAnO1xuICB9XG59XG5cbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRvIGRpc3BsYXkgY29sb3IgYmx1ZSBmb3Igb3VyIHNoaXBcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T3VyU2hpcHMoXG4gIHBsYXllckdhbWVib2FyZENlbGxzOiBOb2RlTGlzdCxcbiAgb3VyTWFwOiBBcnJheTxTaGlwIHwgJ2VtcHR5JyB8ICdtaXNzaW5nQXR0YWNrJz5bXVxuKSB7XG4gIGNvbnN0IGNlbGxBcnJheTogSFRNTEVsZW1lbnRbXVtdID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgbGV0IGkgPSAwO1xuICBwbGF5ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpbmRleCAlIDEwID09PSAwICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICBpKys7XG4gICAgfVxuICAgIGNlbGxBcnJheVtpXS5wdXNoKGNlbGwpOyAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gYmUgYSBjb252ZW50aW9uIHdheVxuICB9KTtcbiAgLy8gY29uc29sZS5sb2coY2VsbEFycmF5KTsgLy8gb2J0YWluIGNlbGxBcnJheVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgaWYgKG91ck1hcFtpXVtqXSA9PT0gJ2VtcHR5Jykge1xuICAgICAgfSBlbHNlIGlmIChvdXJNYXBbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFtpLCBqXSk7XG4gICAgICAgIGNlbGxBcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdvdXItc2hpcC1jb2xvcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL3RoZSBmdW5jdGlvbiB0byB0b2dnbGUgdmVydGljYWwgcGxhY2VtZW50LXNoaXBzIHZzIGhvcml6b250YWxcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oc2hpcHNQbGFjZW1lbnQ6IEVsZW1lbnQpIHtcbiAgaWYgKHNoaXBzUGxhY2VtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwnKSkge1xuICAgIHNoaXBzUGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsJyk7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJyk7XG4gIH0gZWxzZSB7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJyk7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIG1hcDogQXJyYXk8U2hpcCB8ICdlbXB0eScgfCAnbWlzc2luZ0F0dGFjayc+W107XG4gIGNvbnN0cnVjdG9yKGhlaWdodDogbnVtYmVyID0gMTApIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8gZ2FtZSBib2FyZCBjb250YWlucyBoZWlnaHQgYW5kIHdpZHRoIHRvIGNyZWF0ZSBhIGdyaWQgZGlzcGxheS5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zaXplID0gdGhpcy5oZWlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLm1hcCA9IFtcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgIF07XG4gIH1cblxuICBwbGFjZVNoaXAoXG4gICAgeENvcjogbnVtYmVyLFxuICAgIHlDb3I6IG51bWJlcixcbiAgICBuZXdTaGlwOiBTaGlwLFxuICAgIGRpcmVjdGlvbjpcbiAgICAgIHwgJ2hvcml6b250YWwgbGVmdCdcbiAgICAgIHwgJ3ZlcnRpY2FsIGRvd24nXG4gICAgICB8ICdob3Jpem9udGFsIHJpZ2h0J1xuICAgICAgfCAndmVydGljYWwgdXAnXG4gICkge1xuICAgIC8vIHhDb3IgYW5kIHlDb3IgYXJlIGlucHV0IGZyb20gVXNlciBJbnRlcmZhY2VcbiAgICBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gIT09ICdlbXB0eScpIHJldHVybjtcblxuICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgcmlnaHQnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeENvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIGxlZnQnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeENvci0tO1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCBkb3duJykge1xuICAgICAgICB0aGlzLm1hcFt5Q29yXVt4Q29yXSA9IG5ld1NoaXA7XG4gICAgICAgIHlDb3IrKztcbiAgICAgICAgLy9cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwgdXAnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeUNvci0tO1xuICAgICAgICAvL1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByYW5kb21QbGFjaW5nU2hpcHMoc2hpcDogU2hpcCkge1xuICAgIC8vIHBvcHVsYXRpbmcgYXJvdW5kIDQwIHVuaXRzIC0+IG9uZSBvZiA2IHVuaXRzLCB0d28gb2YgNSB1bml0cyAsIHR3byBvZiA0IHVuaXRzIHRocmVlIG9mIDMgdW5pdHMgYW5kIHRocmVlIG9mIDIgdW5pdHMgYW5kIG9uZSBvZiAxIHVuaXRzXG4gICAgLy8gaG93IHRvIGRvIG1hdGgucmFuZG9tIHdpdGggeENvciBhbmQgeUNvcj9cbiAgICAvLyBiZWZvcmUgcGxhY2luZyBldmVyeSBzaGlwIHdlIG5lZWQgdG8gY2hlY2sgdHdvIGNvbmRpdGlvbnNcbiAgICBjb25zdCByYW5Eb21TZWVkID0gdGhpcy5oZWlnaHQgLSAxO1xuICAgIGxldCB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICBsZXQgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgLy8gcmFuZG9tIGRpcmVjdGlvbiB0b29cbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSB0aGlzLnJldHVyblJhbmRvbURpcmVjdGlvbigpO1xuICAgIHdoaWxlIChcbiAgICAgICF0aGlzLmNoZWNraW5nQ29sbGlzaW9uQW5kT25UaGVCb2FyZChcbiAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgIHhDb3IsXG4gICAgICAgIHlDb3IsXG4gICAgICAgIHJhbmRvbURpcmVjdGlvblxuICAgICAgKVxuICAgICkge1xuICAgICAgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgICB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB9XG4gICAgdGhpcy5wbGFjZVNoaXAoeENvciwgeUNvciwgc2hpcCwgcmFuZG9tRGlyZWN0aW9uKTtcbiAgICAvKipcbiAgICAgKiAgb25lOiBpcyByYW5kb20geENvciBhbmQgeUNvciBpcyBzdGlsbCBvbiB0aGUgYm9hcmRcbiAgICAgKiB0d28gOiBpcyB4Q29ycyBhbmQgeUNvcnMgb2YgZWFjaCBzaGlwIGNvbGxpZGUgd2l0aCB0aGUgYWxyZWFkeSBwb3B1bGF0ZWQgc2hpcHMuXG4gICAgICovXG4gIH1cbiAgcmV0dXJuUmFuZG9tRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvblNlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvblNlZWQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsIHJpZ2h0JztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwgbGVmdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCBkb3duJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsIHVwJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAndmVydGljYWwgZG93bic7XG4gICAgfVxuICB9XG4gIGNoZWNraW5nQ29sbGlzaW9uQW5kT25UaGVCb2FyZChcbiAgICBzaGlwTGVuZ3RoOiBTaGlwWydsZW5ndGgnXSxcbiAgICB4Q29yOiBudW1iZXIsXG4gICAgeUNvcjogbnVtYmVyLFxuICAgIGRpcmVjdGlvbjogc3RyaW5nXG4gICkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoeUNvciA+IDkgfHwgeUNvciA8IDAgfHwgeENvciA+IDkgfHwgeENvciA8IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMubWFwW3lDb3JdW3hDb3JdICE9PSAnZW1wdHknKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCByaWdodCcpIHtcbiAgICAgICAgeENvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIGxlZnQnKSB7XG4gICAgICAgIHhDb3ItLTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwgZG93bicpIHtcbiAgICAgICAgeUNvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCB1cCcpIHtcbiAgICAgICAgeUNvci0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNlaXZlQXR0YWNrKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgLy9bVUldIGNsYXNzIG5lZWQgdG8gcHJldmVudCByZWNlaXZlQXR0YWNoIHdoZW4gdGhlcmUgd2FzIGFuIGF0dGFjayBvciBtaXNzaW5nIHNob3QgIGluIHRoaXMgY29vcmRpbmF0ZSBhbHJlYWR5LlxuICAgIC8vICBpZiAoeENvciA+IHRoaXMuaGVpZ2h0IHx8IHlDb3IgPiB0aGlzLndpZHRoKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gPT09ICdlbXB0eScpIHtcbiAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gJ21pc3NpbmdBdHRhY2snO1xuICAgICAgLy8gcmVjb3JkIGNvb3JkaW5hdGUgb2YgdGhlIG1pc3NlZCBzaG90XG4gICAgICAvLyBbVUldIGRpc3BsYXkgbWlzc2VkIHNob3RcbiAgICB9IGVsc2UgaWYgKHRoaXMubWFwW3lDb3JdW3hDb3JdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0uaGl0KCk7XG4gICAgfVxuICB9XG4gIC8vR2FtZSBib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuICBnZXRNaXNzaW5nQXR0YWNrc0Nvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGFycjogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMubWFwW2ldW2pdID09PSAnbWlzc2luZ0F0dGFjaycpIHtcbiAgICAgICAgICBhcnIucHVzaChbaiwgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgLy8gICAgR2FtZSBib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgaXNGbGVldEFsbFN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLm1hcFtpXVtqXTtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coY3VycmVudFNoaXApO1xuICAgICAgICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4uL3NyYy9nYW1lYm9hcmRDb21wb25lbnQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vc3JjL3NoaXBDb21wb25lbnQnO1xuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGdhbWVCb2FyZDogR2FtZUJvYXJkO1xuICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkO1xuICB9XG5cbiAgcGxheVR1cm4ob3Bwb25lbnQ6IENvbXB1dGVyLCB4Q29yOiBudW1iZXIsIHlDb3I6IG51bWJlcikge1xuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlciB7XG4gIGdhbWVCb2FyZDogR2FtZUJvYXJkO1xuICBoaXRNYXA6IHN0cmluZ1tdW107XG4gIGF0dGFja1RpbWVzOiBudW1iZXI7XG4gIGxpbWl0ZWRBdHRhY2tUaW1lczogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkO1xuICAgIHRoaXMuaGl0TWFwID0gW1xuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICBdO1xuICAgIHRoaXMuYXR0YWNrVGltZXMgPSAwO1xuICAgIHRoaXMubGltaXRlZEF0dGFja1RpbWVzID0gMTAwO1xuICB9XG4gIHBsYXkocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAvKiogYWxnb3JpdGhtOlxuICAgICAqICBzdGVwIDE6IGNoZWNrIGlmIHRoaXMuaGl0TWFwIGNvbnRhaW5zICdwb3RlbnRpYWwnIC0+IHBsYXlSYW5kb20oKSBzbWFydCB2ZXJzaW9uXG4gICAgICogIGVsc2UgOiBwbGF5UmFuZG9tKCkgcmFuZG9tIHZlcnNpb25cbiAgICAgKiBzdGVwIDI6IGxvZ2ljIGZvciB0ZXJtaW5hdGluZyAncG90ZW50aWFsJyAtPiByZXBsYWNlICduZXcnIHRvICdwb3RlbnRpYWwnIGFnYWluXG4gICAgICogIC0+IGlmIHRoZSBzaGlwLmlzU2luaygpIHJldHVybiB0cnVlIC0+IHJlc2V0IGFsbCAgYWRqYWNlbnQgJ3BvdGVudGlhbCcgdG8gJ25ldydcbiAgICAgKi9cblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vua1NoaXAgLT4gcG90ZW50aWFsUmVzZXR0aW5nKClcbiAgICBpZiAodGhpcy5wb3RlbnRpYWxDaGVja2luZygpKSB7XG4gICAgICB0aGlzLnBsYXlTbWFydChwbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXlSYW5kb20ocGxheWVyKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxNYXJraW5nKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgaWYgKHhDb3IgKyAxID49IDAgJiYgeENvciArIDEgPCA1ICYmIHlDb3IgPj0gMCAmJiB5Q29yIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgKyAxID49IDAgJiYgeENvciArIDEgPCA1ICYmIHlDb3IgKyAxID49IDAgJiYgeUNvciArIDEgPCA1KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICAgIGlmICh4Q29yID49IDAgJiYgeENvciA8IDUgJiYgeUNvciAtIDEgPj0gMCAmJiB5Q29yIC0gMSA8IDUpIHtcbiAgICAgIC8vIGNvb3JkaW5hdGUgaXMgb24gdGhlIGJvYXJkXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICAgIGlmICh4Q29yIC0gMSA+PSAwICYmIHhDb3IgLSAxIDwgNSAmJiB5Q29yID49IDAgJiYgeUNvciA8IDUpIHtcbiAgICAgIC8vIGNvb3JkaW5hdGUgaXMgb24gdGhlIGJvYXJkXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgcG90ZW50aWFsUmVzZXR0aW5nKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgLy8gaWYgdGhlIHNoaXAgbGVuZ3RoID4gMVxuICAgIC8vIGFzc3VtcHRpb246ICBsb29waW5nIGFuZCBhY2Nlc3NpbmcgZXZlcnkgZWxlbWVudCBvZiBwbGF5ZXIuZ2FtZUJvYXJkLm1hcFxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3BvdCB3aGVyZSBpbnN0YW5jZW9mIFNoaXAgJiYgdGhhdCBzaGlwLmlzU3VuaygpXG4gICAgLy9yZXR1cm4gdGhhdCB4Q29ycyBhbmQgeUNvcnMgaW5zaWRlIGFuIGFycmF5XG4gICAgLy8gbG9vcGluZyB0aHJvdWdoIHRoZSBhcnJheSBhbmRcbiAgICAvLyBkbyB0aGUgYmVsb3dcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSA9ICduZXcnO1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID0gJ25ldyc7XG4gICAgaWYgKHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9PT0gJ3BvdGVudGlhbCcpXG4gICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gPSAnbmV3JztcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSA9ICduZXcnO1xuICB9XG4gIHByaXZhdGUgcG90ZW50aWFsQ2hlY2tpbmcoKSB7XG4gICAgLy8/IHRoaXMgbWV0aG9kIGRvZXMgbm90IHdvcmsuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5oaXRNYXBbaV1bal0gPT09ICdwb3RlbnRpYWwnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcGxheVNtYXJ0KG9wcG9uZW50OiBQbGF5ZXIpIHtcbiAgICAvLyBuZWVkIHRvIGltcGxlbWVudGluZyBob3cgdG8gcmVzZXQgcG90ZW50aWFsIHBvaW50c1xuICAgIC8vXG4gICAgaWYgKHRoaXMuYXR0YWNrVGltZXMgPj0gdGhpcy5saW1pdGVkQXR0YWNrVGltZXMpIHJldHVybjtcbiAgICBjb25zdCByYW5Eb21TZWVkID0gb3Bwb25lbnQuZ2FtZUJvYXJkLmhlaWdodCAtIDE7XG4gICAgbGV0IHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGxldCB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB3aGlsZSAodGhpcy5oaXRNYXBbeUNvcl1beENvcl0gIT09ICdwb3RlbnRpYWwnKSB7XG4gICAgICB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAgIHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIH1cbiAgICB0aGlzLmF0dGFja1RpbWVzKys7XG4gICAgaWYgKG9wcG9uZW50LmdhbWVCb2FyZC5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZFNoaXAnO1xuICAgICAgdGhpcy5wb3RlbnRpYWxNYXJraW5nKHhDb3IsIHlDb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZCc7XG4gICAgfVxuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG5cbiAgcGxheVJhbmRvbShvcHBvbmVudDogUGxheWVyKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNrVGltZXMgPj0gdGhpcy5saW1pdGVkQXR0YWNrVGltZXMpIHJldHVybjtcbiAgICBjb25zdCByYW5Eb21TZWVkID0gb3Bwb25lbnQuZ2FtZUJvYXJkLmhlaWdodCAtIDE7XG4gICAgbGV0IHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGxldCB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB3aGlsZSAodGhpcy5oaXRNYXBbeUNvcl1beENvcl0gIT09ICduZXcnKSB7XG4gICAgICAvLyByZXBsYWNlIHR5cGVPZkF0dGFjayBoZXJlXG4gICAgICB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAgIHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIH1cbiAgICB0aGlzLmF0dGFja1RpbWVzKys7XG4gICAgLy8gbWFya2luZyBsb2dpY1xuICAgIGlmIChvcHBvbmVudC5nYW1lQm9hcmQubWFwW3lDb3JdW3hDb3JdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvcl0gPSAnYXR0YWNrZWRTaGlwJztcbiAgICAgIHRoaXMucG90ZW50aWFsTWFya2luZyh4Q29yLCB5Q29yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvcl0gPSAnYXR0YWNrZWQnO1xuICAgIH1cbiAgICBvcHBvbmVudC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRUaW1lczogbnVtYmVyO1xuICBpc1N1bmtTdGF0dXM6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyID0gMSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0VGltZXMgPSAwO1xuICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gZmFsc2U7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdFRpbWVzIDwgdGhpcy5sZW5ndGgpIHRoaXMuaGl0VGltZXMrKztcbiAgICBpZiAodGhpcy5sZW5ndGggPiB0aGlzLmhpdFRpbWVzKSB7XG4gICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N1bmtTdGF0dXM7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwQ29tcG9uZW50JztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllckNvbXBvbmVudCc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkQ29tcG9uZW50JztcbmltcG9ydCB7XG4gIG1hcmtpbmdBdHRhY2ssXG4gIGNvbXB1dGVyTWFya2luZ0F0dGFjayxcbiAgY2hlY2tpbmdBbmREaXNwbGF5aW5nQW5ub3VuY2VtZW50LFxuICBkaXNwbGF5T3VyU2hpcHMsXG4gIGNoYW5nZURpcmVjdGlvbixcbn0gZnJvbSAnLi9ET01BbmRVSSc7XG5jb25zdCBnYW1lQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZDEnKTtcbmNvbnN0IGdhbWVCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkMicpO1xuY29uc3Qgc2hpcHNQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcHMtcGxhY2VtZW50Jyk7XG5cbmNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb24tYnV0dG9uJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgY29uc3QgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsMS5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQxLWNlbGwnKTtcbiAgICBjZWxsMS5kYXRhc2V0LmNlbGwgPSBgJHtpfSwke2p9YDtcbiAgICBnYW1lQm9hcmQxLmFwcGVuZChjZWxsMSk7XG4gIH1cbn1cblxuZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgIGNvbnN0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbDIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkMi1jZWxsJyk7XG4gICAgY2VsbDIuZGF0YXNldC5jZWxsID0gYCR7aX0sJHtqfWA7XG4gICAgZ2FtZUJvYXJkMi5hcHBlbmQoY2VsbDIpO1xuICB9XG59XG5jb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxLWNlbGwnKTtcbi8vIGNvbnN0IHR1cm5Bbm5vdW5jZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybi1hbm5vdW5jZW1lbnQnKTtcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIobmV3IEdhbWVCb2FyZCgxMCkpO1xuXG5jb25zdCBlbmVteSA9IG5ldyBDb21wdXRlcihuZXcgR2FtZUJvYXJkKDEwKSk7XG5wbGF5ZXIuZ2FtZUJvYXJkLnJhbmRvbVBsYWNpbmdTaGlwcyhuZXcgU2hpcCg0KSk7XG5wbGF5ZXIuZ2FtZUJvYXJkLnJhbmRvbVBsYWNpbmdTaGlwcyhuZXcgU2hpcCgzKSk7XG5wbGF5ZXIuZ2FtZUJvYXJkLnJhbmRvbVBsYWNpbmdTaGlwcyhuZXcgU2hpcCgyKSk7XG5cbmVuZW15LmdhbWVCb2FyZC5yYW5kb21QbGFjaW5nU2hpcHMobmV3IFNoaXAoNCkpO1xuZW5lbXkuZ2FtZUJvYXJkLnJhbmRvbVBsYWNpbmdTaGlwcyhuZXcgU2hpcCgzKSk7XG5lbmVteS5nYW1lQm9hcmQucmFuZG9tUGxhY2luZ1NoaXBzKG5ldyBTaGlwKDIpKTtcbi8vIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcblxuLy9vbmx5IGxldCB1c2VyIHBsYXkgdGhlIGdhbWUgYWZ0ZXIgcGxhY2luZyBhbGwgdGhlaXIgc2hpcHMuXG4vLyBhdHRhY2tpbmcgbG9naWMgZnJvbSBVSVxuZGlzcGxheU91clNoaXBzKHBsYXllckNlbGxzLCBwbGF5ZXIuZ2FtZUJvYXJkLm1hcCk7XG4vL2J1dHRvbiB0byBjaGFuZ2UgZGlyZWN0aW9uLlxuZGlyZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgY2hhbmdlRGlyZWN0aW9uKHNoaXBzUGxhY2VtZW50KVxuKTtcblxuZ2FtZUJvYXJkMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgaWYgKCFwbGF5ZXJUdXJuKSByZXR1cm47XG4gIGlmICghcGxheWVyLmdhbWVCb2FyZC5pc0ZsZWV0QWxsU3VuaygpICYmICFlbmVteS5nYW1lQm9hcmQuaXNGbGVldEFsbFN1bmsoKSkge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY2xpY2tlZCAhPT0gJ3RydWUnICYmXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZDItY2VsbCcpXG4gICAgKSB7XG4gICAgICBlLnRhcmdldC5kYXRhc2V0LmNsaWNrZWQgPSAndHJ1ZSc7XG5cbiAgICAgIC8vIGV4dHJhY3RpbmcgeENvciBhbmQgeUNvciBmcm9tIGRvY3VtZW50XG4gICAgICBjb25zdCB4Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzFdO1xuICAgICAgY29uc3QgeUNvciA9ICtlLnRhcmdldC5kYXRhc2V0LmNlbGwuc3BsaXQoJywnKVswXTtcblxuICAgICAgcGxheWVyLnBsYXlUdXJuKGVuZW15LCB4Q29yLCB5Q29yKTtcblxuICAgICAgZW5lbXkucGxheShwbGF5ZXIpO1xuICAgICAgLy8gZGlzcGxheUVmZmVjdCBvZiBhdHRhY2tpbmdcbiAgICAgIG1hcmtpbmdBdHRhY2soZW5lbXksIGUudGFyZ2V0LCB4Q29yLCB5Q29yKTtcbiAgICAgIGNvbXB1dGVyTWFya2luZ0F0dGFjayhlbmVteS5oaXRNYXAsIHBsYXllckNlbGxzKTtcbiAgICAgIC8vIGRpc3BsYXkgYW5ub3VuY2VtZW50IGlmIHRoZXJlIGlzIGEgd2lubmVyXG4gICAgICBjaGVja2luZ0FuZERpc3BsYXlpbmdBbm5vdW5jZW1lbnQocGxheWVyLCBlbmVteSk7XG4gICAgICAvLyAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyogd2hhdCB0byBkbyByaWdodCBub3c6XG5cbmNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlJyk7XG5sZXQgY3VycmVudERyYWdnZWRPYmplY3Q6IEVsZW1lbnQ7XG5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuXG4gICAgY3VycmVudERyYWdnZWRPYmplY3QgPSBkcmFnZ2FibGU7XG4gIH0pO1xuICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+XG4gICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJylcbiAgICAvLyBjYWxsIHBsYWNpbmcgc2hpcCBmdW5jdGlvbiBpbiBoZXJlLiBmb3IgcGxheWVyXG4gICAgcGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoeENvcix5Q29yLG5ldyBTaGlwKCksZGlyZWN0aW9uKVxuICApO1xufSk7XG5nYW1lQm9hcmQxLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgY29uc3QgSFRNTEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnREcmFnZ2VkT2JqZWN0LmRhdGFzZXQubGVuZ3RoO1xuICBjb25zb2xlLmxvZyhzaGlwTGVuZ3RoKTtcblxuICBpZiAoXG4gICAgY3VycmVudERyYWdnZWRPYmplY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJ1xuICAgIClcbiAgKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xuICB9XG4gIGlmIChIVE1MRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZDEtY2VsbCcpKSB7XG4gICAgY29uc3QgeENvciA9ICtlLnRhcmdldC5kYXRhc2V0LmNlbGwuc3BsaXQoJywnKVswXTtcbiAgICBjb25zdCB5Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzFdO1xuICAgIGNvbnNvbGUubG9nKHhDb3IpO1xuICAgIGNvbnNvbGUubG9nKHlDb3IpO1xuICAgIC8vIG5vdyB3ZSBuZWVkIHRvIGV4dHJhY3QgJ2RpcmVjdGlvbiBmcm9tIGxpLmNsYXNzbGlzdCBpZi4uZWxzZSBzdGF0ZW1lbnRcbiAgICAvLyBob3cgdG8gYWNjZXNzIGN1cnJlbnQgZHJhZ2dhYmxlIGhlcmUgP1xuICAgIC8vIGRpc3BsYXlTaGlwV2hpbGVEcmFnZ2luZyh4Q29yLCB5Q29yLCBsZW5ndGgsIGRpcmVjdGlvbik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcFdoaWxlRHJhZ2dpbmcoXG4gIHhDb3I6IG51bWJlcixcbiAgeUNvcjogbnVtYmVyLFxuICBsZW5ndGg6IG51bWJlcixcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnXG4pIHtcbiAgLy9cbn1cbi8vIGhvdyBjYW4gd2UgcHJldmVudCB0aGUgcGxheWVyIGZyb20gZHJvcHBpbmcgdGhlIHNoaXBzIG91dHNpZGUgZ2FtZWJvYXJkIGNvbnRhaW5lcj9cbi8vXG4vLyB3ZSBuZWVkIHRvIGFsd2F5cyB1cGRhdGUgc2hpcHMgaW1hZ2UgaW5zaWRlIHBsYXllciBnYW1lYm9hcmQgd2hpbGUgdGhlIHBsYXllciBkcmFnIG9yIGFmdGVyIGRyb3BwaW5nXG4vKioqXG4gKlxuICogKlxuICogIGxldCB1c2VyIGNob29zZSBjb29yZGluYXRlIGJ5ICBkcmFnZ2luZyBieSB1c2luZyAnZHJhZ1N0YXJ0JyBhbmQgJ2RyYWdvdmVyJyAoYWxtb3N0IHNvbHZlZClcbiAqICpob3cgY2FuIHdlIGNyZWF0ZSBlYWNoIHNoaXAgd2l0aCBlYWNoIGxpIGVsZW1lbnQgd2hlbiB3ZSBkcmFnIGxpIGVsZW1lbnQgb3ZlciBnYW1lYm9hcmQgMVxuICogd2UgZG9uJ3QgbmVlZCB0byB1c2UgcGxhY2Ugc2hpcCB3aGVuIGRyYWdnaW5nIG92ZXIgYnV0IGp1c3Qgb25seSBkaXNwbGF5IHRoZSBwbGFjZW1lbnRcbiAqIC0+IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBkaXNwbGF5U2hpcFdoaWxlIGRyYWdnaW5nXG4gKiAgcmV2aWV3aW5nIG9sZCBjb2RlIC0+IG1ha2luZyBpdCBhIGJldHRlciB2ZXJzaW9uIGJ5IHJlZmFjdG9yaW5nICwgZGVjb3VwbGluZy5cbiAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9