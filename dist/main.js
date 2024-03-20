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

.buttons-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; }
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["//* main scss style sheet\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: \"\";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@mixin flexCenterDir($direction) {\n\tdisplay: flex;\n\tflex-direction: $direction;\n\tjustify-content: center;\n\talign-items: center;\n}\nbody {\n\tbackground-color: gray;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\t.hidden {\n\t\tdisplay: none;\n\t}\n\t#finial-announcement {\n\t\tposition: absolute;\n\t\theight: 100vh;\n\t\twidth: 100vw;\n\t\tbackground-color: grey;\n\t\topacity: 0.8;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 60px;\n\t\t.announcement-wrapper {\n\t\t\tbackground-color: black;\n\t\t\tpadding: 40px;\n\t\t\tcolor: white;\n\t\t}\n\t}\n\t#title-section {\n\t\t@include flexCenterDir(row);\n\t\tfont-size: 40px;\n\t\tfont-weight: bold;\n\t\tflex: 1;\n\t}\n\t#game-board-section {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tflex: 4;\n\t\t#player-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\t\t\t\t.gameboard1-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.our-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.dragging-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.ships-placement-horizontal {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tli.draggable {\n\t\t\tcursor: move;\n\t\t}\n\t\tli.dragging {\n\t\t\topacity: 0.5;\n\t\t}\n\t\t.ships-placement-vertical {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t\tli.draggable {\n\t\t\t\tcursor: move;\n\t\t\t}\n\t\t\tli.dragging {\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t}\n\n\t\t#enemy-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\n\t\t\t\t.gameboard2-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t// extra detail: .gameboard.ship-is-sunk {}\n\t\t\t}\n\t\t}\n\t}\n}\n\n.buttons-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   displayShipWhileDragging: () => (/* binding */ displayShipWhileDragging),
/* harmony export */   markingAttack: () => (/* binding */ markingAttack),
/* harmony export */   populatingInsideGameBoard: () => (/* binding */ populatingInsideGameBoard),
/* harmony export */   resetDisplayAfterMouseOutOrAfterDropShips: () => (/* binding */ resetDisplayAfterMouseOutOrAfterDropShips),
/* harmony export */   returnCellArrayFromAnArray: () => (/* binding */ returnCellArrayFromAnArray),
/* harmony export */   returnDynamicDirection: () => (/* binding */ returnDynamicDirection)
/* harmony export */ });
/* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipComponent */ "./src/shipComponent.ts");

//* extracting logic functions to extract from Document web page
function returnCellArrayFromAnArray(array) {
    //
    var playerCellsArr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    var count = 0;
    array.forEach(function (cell, index) {
        if (index % 10 === 0 && index !== 0) {
            count++;
        }
        playerCellsArr[count].push(cell);
    });
    return playerCellsArr;
}
function populatingInsideGameBoard(gameBoard, cellClass) {
    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j <= 9; j++) {
            var cell = document.createElement('div');
            cell.classList.add(cellClass);
            cell.dataset.cell = "".concat(i, ",").concat(j);
            gameBoard.append(cell);
        }
    }
}
//* function for marking logic
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
//* function for announcement
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
//* create a function to display color blue for our ship
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
// displaying while dragging functions
function returnDynamicDirection(direction, xCor, yCor, shipLength) {
    //
    if (direction === 'horizontal' && xCor - 1 + shipLength > 9) {
        return 'horizontal left';
    }
    else if (direction === 'horizontal') {
        return 'horizontal right';
    }
    if (direction === 'vertical' && yCor - 1 + shipLength > 9) {
        console.log(yCor + shipLength);
        return 'vertical up';
    }
    else {
        console.log(yCor + shipLength);
        return 'vertical down';
    }
}
function resetDisplayAfterMouseOutOrAfterDropShips(gameBoardCell) {
    gameBoardCell.forEach(function (cellArray) {
        cellArray.forEach(function (cell) {
            cell.classList.remove('dragging-ship-color');
        });
    });
}
function displayShipWhileDragging(xCor, yCor, length, direction, gameBoardCell) {
    gameBoardCell.forEach(function (cellArray) {
        cellArray.forEach(function (cell) {
            cell.classList.remove('dragging-ship-color');
        });
    });
    gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
    // create a function to return correct direction based on xCor,yCor, and input direction
    var dynamicDirection = returnDynamicDirection(direction, xCor, yCor, length);
    for (var i = 0; i < length; i++) {
        if (dynamicDirection === 'horizontal right') {
            gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
            xCor++;
        }
        else if (dynamicDirection === 'horizontal left') {
            gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
            xCor--;
            //
        }
        else if (dynamicDirection === 'vertical down') {
            gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
            yCor++;
            //
        }
        else if (dynamicDirection === 'vertical up') {
            gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
            yCor--;
            //
        }
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
    GameBoard.prototype.hasAtLeastAShip = function () {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.map[i][j] instanceof _shipComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    return true;
                }
            }
        }
        return false;
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

// AI doesn't work. I don't want to fix it either.


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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// import './style.css';





var gameBoard1 = document.querySelector('#gameboard1');
var gameBoard2 = document.querySelector('#gameboard2');
var shipsPlacement = document.querySelector('#ships-placement');
var directionButton = document.querySelector('.direction-button');
var startButton = document.querySelector('.start-button');
var playerStart = false;
startButton.addEventListener('click', function (e) {
    if (!player.gameBoard.hasAtLeastAShip()) {
        alert('you need to place at least one ship to start');
        return;
    }
    e.preventDefault();
    playerStart = true;
    shipsPlacement.style.cssText = 'display:none';
});
(0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.populatingInsideGameBoard)(gameBoard1, 'gameboard1-cell');
(0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.populatingInsideGameBoard)(gameBoard2, 'gameboard2-cell');
var playerCells = __spreadArray([], document.querySelectorAll('.gameboard1-cell'), true);
var playerCellsArr = (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.returnCellArrayFromAnArray)(playerCells);
var player = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Player(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
var enemy = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Computer(new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__["default"](10));
directionButton.addEventListener('click', function () {
    return (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.changeDirection)(shipsPlacement);
});
gameBoard2.addEventListener('click', function (e) {
    if (!playerStart) {
        alert(' place ships and click the  start button to play.');
        return;
    }
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
var destination;
draggables.forEach(function (draggable) {
    //event
    draggable.addEventListener('dragstart', function () {
        draggable.classList.add('dragging');
        currentDraggedObject = draggable;
    });
    // event
    draggable.addEventListener('dragend', function (e) {
        var shipLength = +currentDraggedObject.dataset.length;
        var direction;
        // need to stop user from dragging the draggable object twice.
        if (destination.classList.contains('gameboard1-cell')) {
            // how to delete destination varible here or reset it here?
            var xCor = +destination.dataset.cell.split(',')[1];
            var yCor = +destination.dataset.cell.split(',')[0];
            if (currentDraggedObject.parentElement.classList.contains('ships-placement-vertical')) {
                direction = 'vertical';
            }
            else {
                direction = 'horizontal';
            }
            var dynamicDirection = (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.returnDynamicDirection)(direction, xCor, yCor, shipLength);
            player.gameBoard.placeShip(xCor, yCor, new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](shipLength), dynamicDirection);
            enemy.gameBoard.randomPlacingShips(new _shipComponent__WEBPACK_IMPORTED_MODULE_1__["default"](shipLength));
            (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayOurShips)(playerCells, player.gameBoard.map);
            resetAfterDrop(e.target);
        }
        else {
            draggable.classList.remove('dragging');
            resetAfterDropWithNoInput();
        }
    });
});
gameBoard1.addEventListener('dragover', function (e) {
    (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayOurShips)(playerCells, player.gameBoard.map);
    var HTMLElement = e.target; // review code latter
    var shipLength = +currentDraggedObject.dataset.length; // review code latter
    destination = e.target;
    var direction;
    if (currentDraggedObject.parentElement.classList.contains('ships-placement-vertical')) {
        direction = 'vertical';
    }
    else {
        direction = 'horizontal';
    }
    if (HTMLElement.classList.contains('gameboard1-cell')) {
        var xCor = +e.target.dataset.cell.split(',')[1];
        var yCor = +e.target.dataset.cell.split(',')[0];
        (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayShipWhileDragging)(xCor, yCor, shipLength, direction, playerCellsArr);
        // using condition statement to only toggle off empty cell
        // by reseting all the cell before apply color ->you toggle off.
    }
});
gameBoard1.addEventListener('mouseleave', function (e) {
    (0,_DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.resetDisplayAfterMouseOutOrAfterDropShips)(playerCellsArr);
    console.log(playerCellsArr);
});
function resetAfterDrop(deletingElement) {
    destination = undefined;
    deletingElement.style.cssText = 'display:none;';
}
function resetAfterDropWithNoInput() {
    destination = undefined;
}
// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 *
 ** implementing the condition when player can start to play the game
 ** create a start button that will let the user start the game.
 * * currently reorganizing the code (postponed)
 * * start to let player play the game after player click the button play.
 * *-> delete ship-placement, delete the start button
 * * -> determine how many ships player have placed -> random the same ships for computer.
 *
 * * AI smart move doesn't work -> check it out again.
 *  *reviewing old code -> making it a better version by refactoring , decoupling.
 */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JB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UyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLFFBQWtCLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDckQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUtFLGtCQUFZLFNBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUN2RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsdUJBQUksR0FBSixVQUFLLE1BQWM7UUFDakI7Ozs7O1dBS0c7UUFFSCxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ08sbUNBQWdCLEdBQXhCLFVBQXlCLElBQVksRUFBRSxJQUFZO1FBQ2pELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0QsNkJBQTZCO1lBQzdCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSztnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBVTtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssY0FBYztnQkFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbkUsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxjQUFjO2dCQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0QsNkJBQTZCO1lBQzdCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSztnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVTtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssY0FBYztnQkFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzNELDZCQUE2QjtZQUM3QixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLFVBQVU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLGNBQWM7Z0JBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUNPLHFDQUFrQixHQUExQixVQUEyQixJQUFZLEVBQUUsSUFBWTtRQUNuRCx5QkFBeUI7UUFDekIsMkVBQTJFO1FBQzNFLGlFQUFpRTtRQUNqRSw2Q0FBNkM7UUFDN0MsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLFdBQVc7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLFdBQVc7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTyxvQ0FBaUIsR0FBekI7UUFDRSw4QkFBOEI7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRSxDQUFDO29CQUN0QyxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsUUFBZ0I7UUFDeEIscURBQXFEO1FBQ3JELEVBQUU7UUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUFFLE9BQU87UUFDeEQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDL0MsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLDBEQUFJLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQztRQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsT0FBTztRQUN4RCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN6Qyw0QkFBNEI7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBZ0I7UUFDaEIsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSwwREFBSSxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDOztBQUVELGtEQUFrRDs7Ozs7Ozs7Ozs7Ozs7O0FDL0psRDtJQUlFLGNBQVksTUFBa0I7UUFBbEIsbUNBQWtCO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxrQkFBRyxHQUFIO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUNELHFCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ3BCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHdCQUF3QjtBQUNGO0FBQ2E7QUFDa0I7QUFDUjtBQVl6QjtBQUVwQixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQ3RELE9BQU87SUFDVCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDbkIsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0gsb0VBQXlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDekQsb0VBQXlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFekQsSUFBTSxXQUFXLHFCQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFDLENBQUM7QUFDdkUsSUFBTSxjQUFjLEdBQUcscUVBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxvREFBTSxDQUFDLElBQUksMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLElBQUksc0RBQVEsQ0FBQyxJQUFJLDJEQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU5QyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3hDLGlFQUFlLENBQUMsY0FBYyxDQUFDO0FBQS9CLENBQStCLENBQ2hDLENBQUM7QUFFRixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDM0QsT0FBTztJQUNULENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUM1RSxJQUNFLENBQUMsQ0FBQyxNQUFNLFlBQVksV0FBVztZQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssTUFBTTtZQUNuQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsQ0FBQztZQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFbEMseUNBQXlDO1lBQ3pDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsNkJBQTZCO1lBQzdCLHdEQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLGdFQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakQsNENBQTRDO1lBQzVDLDRFQUFpQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCx3QkFBd0I7UUFDMUIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILHlCQUF5QjtBQUV6QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0QsSUFBSSxvQkFBNkIsQ0FBQztBQUNsQyxJQUFJLFdBQXdCLENBQUM7QUFDN0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7SUFDM0IsT0FBTztJQUNQLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7UUFDdEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUTtJQUNSLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFDO1FBQ3RDLElBQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLFNBQXlCLENBQUM7UUFFOUIsOERBQThEO1FBQzlELElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQ3RELDJEQUEyRDtZQUMzRCxJQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUNFLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNuRCwwQkFBMEIsQ0FDM0IsRUFDRCxDQUFDO2dCQUNELFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDekIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQU0sZ0JBQWdCLEdBQUcsaUVBQXNCLENBQzdDLFNBQVMsRUFDVCxJQUFJLEVBQ0osSUFBSSxFQUNKLFVBQVUsQ0FDWCxDQUFDO1lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQ3hCLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxzREFBSSxDQUFDLFVBQVUsQ0FBQyxFQUNwQixnQkFBZ0IsQ0FDakIsQ0FBQztZQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxzREFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekQsMERBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuRCxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMseUJBQXlCLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUNILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO0lBQ3hDLDBEQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQjtJQUNuRCxJQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUI7SUFDOUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkIsSUFBSSxTQUFvQyxDQUFDO0lBQ3pDLElBQ0Usb0JBQW9CLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ25ELDBCQUEwQixDQUMzQixFQUNELENBQUM7UUFDRCxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLENBQUM7U0FBTSxDQUFDO1FBQ04sU0FBUyxHQUFHLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxtRUFBd0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUUsMERBQTBEO1FBQzFELGdFQUFnRTtJQUNsRSxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQztJQUMxQyxvRkFBeUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsU0FBUyxjQUFjLENBQUMsZUFBNEI7SUFDbEQsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUN4QixlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDbEQsQ0FBQztBQUNELFNBQVMseUJBQXlCO0lBQ2hDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDMUIsQ0FBQztBQUNELHFGQUFxRjtBQUNyRixFQUFFO0FBQ0YsdUdBQXVHO0FBQ3ZHOzs7Ozs7Ozs7Ozs7R0FZRyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvRE9NQW5kVUkudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3BsYXllckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zaGlwQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTsgfVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTsgfVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7IH1cbiAgYm9keSAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIGJvZHkgI2ZpbmlhbC1hbm5vdW5jZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA2MHB4OyB9XG4gICAgYm9keSAjZmluaWFsLWFubm91bmNlbWVudCAuYW5ub3VuY2VtZW50LXdyYXBwZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgY29sb3I6IHdoaXRlOyB9XG4gIGJvZHkgI3RpdGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbGV4OiAxOyB9XG4gIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDQ7IH1cbiAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA1MHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQge1xuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBnYXA6IDNweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpL3JlcGVhdCgxMCwgMWZyKTsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cbiAgICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbC5vdXItc2hpcC1jb2xvciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwubWlzc2luZy1hdHRhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsLmRyYWdnaW5nLXNoaXAtY29sb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxcHg7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCBsaSAuc2hpcC1jZWxsIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gbGkuZHJhZ2dhYmxlIHtcbiAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiBsaS5kcmFnZ2luZyB7XG4gICAgICBvcGFjaXR5OiAwLjU7IH1cbiAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwgbGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiAxcHg7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwgbGkgLnNoaXAtY2VsbCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCBsaS5kcmFnZ2FibGUge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsIGxpLmRyYWdnaW5nIHtcbiAgICAgICAgb3BhY2l0eTogMC41OyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA1MHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCB7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikvcmVwZWF0KDEwLCAxZnIpOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XG4gICAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDItY2VsbDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLm1pc3NpbmctYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XG5cbi5idXR0b25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7IH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0ZDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVm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SyxxQkFBcUI7VUFDckIsWUFBWSxFQUFBOztBQVFqQjtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vKiBtYWluIHNjc3Mgc3R5bGUgc2hlZXRcXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5AbWl4aW4gZmxleENlbnRlckRpcigkZGlyZWN0aW9uKSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdC5oaWRkZW4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdCNmaW5pYWwtYW5ub3VuY2VtZW50IHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHR3aWR0aDogMTAwdnc7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5cXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogNjBweDtcXG5cXHRcXHQuYW5ub3VuY2VtZW50LXdyYXBwZXIge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdFxcdFxcdHBhZGRpbmc6IDQwcHg7XFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0I3RpdGxlLXNlY3Rpb24ge1xcblxcdFxcdEBpbmNsdWRlIGZsZXhDZW50ZXJEaXIocm93KTtcXG5cXHRcXHRmb250LXNpemU6IDQwcHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxuXFx0I2dhbWUtYm9hcmQtc2VjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZsZXg6IDQ7XFxuXFx0XFx0I3BsYXllci1zZWN0aW9uIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiA1MHB4O1xcblxcdFxcdFxcdC5nYW1lYm9hcmQge1xcblxcdFxcdFxcdFxcdGhlaWdodDogNjAwcHg7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDYwMHB4O1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0Z2FwOiAzcHg7XFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQxLWNlbGwge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuMztcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQxLWNlbGwub3VyLXNoaXAtY29sb3Ige1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC44O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMS1jZWxsLm1pc3NpbmctYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuMztcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbC5jb3JyZWN0LWF0dGFjayB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbC5kcmFnZ2luZy1zaGlwLWNvbG9yIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDMwcHg7XFxuXFx0XFx0XFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXG5cXHRcXHRcXHRsaSB7XFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRcXHRcXHRnYXA6IDFweDtcXG5cXHRcXHRcXHRcXHQuc2hpcC1jZWxsIHtcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMjBweDtcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDIwcHg7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0bGkuZHJhZ2dhYmxlIHtcXG5cXHRcXHRcXHRjdXJzb3I6IG1vdmU7XFxuXFx0XFx0fVxcblxcdFxcdGxpLmRyYWdnaW5nIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxuXFx0XFx0fVxcblxcdFxcdC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDMwcHg7XFxuXFx0XFx0XFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXG5cXHRcXHRcXHRsaSB7XFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0XFx0XFx0Z2FwOiAxcHg7XFxuXFx0XFx0XFx0XFx0LnNoaXAtY2VsbCB7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDIwcHg7XFxuXFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAyMHB4O1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC44O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0bGkuZHJhZ2dhYmxlIHtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IG1vdmU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdGxpLmRyYWdnaW5nIHtcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjZW5lbXktc2VjdGlvbiB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogNTBweDtcXG5cXHRcXHRcXHQuZ2FtZWJvYXJkIHtcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDYwMHB4O1xcblxcdFxcdFxcdFxcdHdpZHRoOiA2MDBweDtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdFxcdFxcdGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdFxcdFxcdGdhcDogM3B4O1xcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG5cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMi1jZWxsIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjM7XFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMi1jZWxsLm1pc3NpbmctYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuMztcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDItY2VsbC5jb3JyZWN0LWF0dGFjayB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0Ly8gZXh0cmEgZGV0YWlsOiAuZ2FtZWJvYXJkLnNoaXAtaXMtc3VuayB7fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uYnV0dG9ucy13cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbXB1dGVyLCBQbGF5ZXIgfSBmcm9tICcuL3BsYXllckNvbXBvbmVudCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDb21wb25lbnQnO1xuLy8qIGV4dHJhY3RpbmcgbG9naWMgZnVuY3Rpb25zIHRvIGV4dHJhY3QgZnJvbSBEb2N1bWVudCB3ZWIgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkNlbGxBcnJheUZyb21BbkFycmF5KGFycmF5OiBIVE1MRWxlbWVudFtdKSB7XG4gIC8vXG4gIGNvbnN0IHBsYXllckNlbGxzQXJyOiBIVE1MRWxlbWVudFtdW10gPSBbXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gICAgW10sXG4gIF07XG4gIGxldCBjb3VudCA9IDA7XG4gIGFycmF5LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICUgMTAgPT09IDAgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHBsYXllckNlbGxzQXJyW2NvdW50XS5wdXNoKGNlbGwpO1xuICB9KTtcbiAgcmV0dXJuIHBsYXllckNlbGxzQXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGluZ0luc2lkZUdhbWVCb2FyZChcbiAgZ2FtZUJvYXJkOiBFbGVtZW50LFxuICBjZWxsQ2xhc3M6IHN0cmluZ1xuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcyk7XG4gICAgICBjZWxsLmRhdGFzZXQuY2VsbCA9IGAke2l9LCR7an1gO1xuICAgICAgZ2FtZUJvYXJkLmFwcGVuZChjZWxsKTtcbiAgICB9XG4gIH1cbn1cblxuLy8qIGZ1bmN0aW9uIGZvciBtYXJraW5nIGxvZ2ljXG5leHBvcnQgZnVuY3Rpb24gbWFya2luZ0F0dGFjayhcbiAgdGFyZ2V0OiBDb21wdXRlcixcbiAgZWxlbWVudFRhcmdldDogSFRNTEVsZW1lbnQsXG4gIHhDb3I6IG51bWJlcixcbiAgeUNvcjogbnVtYmVyXG4pIHtcbiAgLy8gRXh0cmEtZGV0YWlsIDpjaGVja2luZyBpZiB0aGUgY29ycnNwb25kaW5nIGF0dGFjayBpcyB0aGUgbGFzdCBhdHRhY2sgdGhhdCBtYWtpbmcgdGhlIHNoaXAuaXNTdW5rKCkgcmV0dXJuIHRydWVcbiAgLy8gLT4gdG9nZ2xlIGFsbCBjZWxscycgb3BhY2l0eSA9IDAuMiB0aGF0IGNvbnRhaW4gdGhhdCBzaGlwXG4gIC8vIC0+IGNsYXNzTGlzdCB0b2dnbGUgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzc2luZyBhdHRhY2sgfCBjb3JyZWN0IGF0dGFjaycpXG4gIGlmICh0YXJnZXQuZ2FtZUJvYXJkLm1hcFt5Q29yXVt4Q29yXSA9PT0gJ21pc3NpbmdBdHRhY2snKSB7XG4gICAgZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzaW5nLWF0dGFjaycpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1hdHRhY2snKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyTWFya2luZ0F0dGFjayhcbiAgLy8gcmVub3ZhdGluZyBpdCBsYXRlclxuICBjb21wdXRlck1hcDogQ29tcHV0ZXJbJ2hpdE1hcCddLFxuICBwbGF5ZXJHYW1lYm9hcmRDZWxsczogTm9kZUxpc3Rcbikge1xuICBjb25zdCBjZWxsQXJyYXk6IE5vZGVbXVtdID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgbGV0IGkgPSAwO1xuICBwbGF5ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAlIDEwID09PSAwICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICBpKys7IC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGNvbnZlbnRpb24gd2F5XG4gICAgfVxuICAgIGNlbGxBcnJheVtpXS5wdXNoKGNlbGwpOyAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gYmUgYSBjb252ZW50aW9uIHdheVxuICB9KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBpZiAoY29tcHV0ZXJNYXBbaV1bal0gPT09ICduZXcnIHx8IGNvbXB1dGVyTWFwW2ldW2pdID09PSAncG90ZW50aWFsJylcbiAgICAgICAgY29udGludWU7XG4gICAgICBpZiAoY29tcHV0ZXJNYXBbaV1bal0gPT09ICdhdHRhY2tlZCcpIHtcbiAgICAgICAgY2VsbEFycmF5W2ldW2pdLmNsYXNzTGlzdC5hZGQoJ21pc3NpbmctYXR0YWNrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsQXJyYXlbaV1bal0uY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1hdHRhY2snKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vKiBmdW5jdGlvbiBmb3IgYW5ub3VuY2VtZW50XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tpbmdBbmREaXNwbGF5aW5nQW5ub3VuY2VtZW50KFxuICBwbGF5ZXI6IFBsYXllcixcbiAgZW5lbXk6IENvbXB1dGVyXG4pIHtcbiAgaWYgKHBsYXllci5nYW1lQm9hcmQuaXNGbGVldEFsbFN1bmsoKSkge1xuICAgIGNvbnN0IGFubm91bmNlbWVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5ub3VuY2VtZW50LXdyYXBwZXInKTtcbiAgICBhbm5vdW5jZW1lbnRUZXh0LnRleHRDb250ZW50ID0gJyB5b3Ugd2luIHlvdXJzZWxmLic7XG4gICAgYW5ub3VuY2VtZW50VGV4dC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmluaWFsLWFubm91bmNlbWVudCcpO1xuICB9IGVsc2UgaWYgKGVuZW15LmdhbWVCb2FyZC5pc0ZsZWV0QWxsU3VuaygpKSB7XG4gICAgY29uc3QgYW5ub3VuY2VtZW50VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbm5vdW5jZW1lbnQtd3JhcHBlcicpO1xuICAgIGFubm91bmNlbWVudFRleHQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpbmlhbC1hbm5vdW5jZW1lbnQnKTtcbiAgICBhbm5vdW5jZW1lbnRUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICcgeW91IGxvc2UgeW91cnNlbGYsIGhlbmNlIHlvdSB3aW4geW91cnNlbGYuICc7XG4gIH1cbn1cblxuLy8qIGNyZWF0ZSBhIGZ1bmN0aW9uIHRvIGRpc3BsYXkgY29sb3IgYmx1ZSBmb3Igb3VyIHNoaXBcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T3VyU2hpcHMoXG4gIHBsYXllckdhbWVib2FyZENlbGxzOiBOb2RlTGlzdCxcbiAgb3VyTWFwOiBBcnJheTxTaGlwIHwgJ2VtcHR5JyB8ICdtaXNzaW5nQXR0YWNrJz5bXVxuKSB7XG4gIGNvbnN0IGNlbGxBcnJheTogSFRNTEVsZW1lbnRbXVtdID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgbGV0IGkgPSAwO1xuICBwbGF5ZXJHYW1lYm9hcmRDZWxscy5mb3JFYWNoKChjZWxsOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpbmRleCAlIDEwID09PSAwICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICBpKys7XG4gICAgfVxuICAgIGNlbGxBcnJheVtpXS5wdXNoKGNlbGwpOyAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gYmUgYSBjb252ZW50aW9uIHdheVxuICB9KTtcbiAgLy8gY29uc29sZS5sb2coY2VsbEFycmF5KTsgLy8gb2J0YWluIGNlbGxBcnJheVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgaWYgKG91ck1hcFtpXVtqXSA9PT0gJ2VtcHR5Jykge1xuICAgICAgfSBlbHNlIGlmIChvdXJNYXBbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFtpLCBqXSk7XG4gICAgICAgIGNlbGxBcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdvdXItc2hpcC1jb2xvcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL3RoZSBmdW5jdGlvbiB0byB0b2dnbGUgdmVydGljYWwgcGxhY2VtZW50LXNoaXBzIHZzIGhvcml6b250YWxcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oc2hpcHNQbGFjZW1lbnQ6IEVsZW1lbnQpIHtcbiAgaWYgKHNoaXBzUGxhY2VtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwnKSkge1xuICAgIHNoaXBzUGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsJyk7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJyk7XG4gIH0gZWxzZSB7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJyk7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwnKTtcbiAgfVxufVxuXG4vLyBkaXNwbGF5aW5nIHdoaWxlIGRyYWdnaW5nIGZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkR5bmFtaWNEaXJlY3Rpb24oXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyxcbiAgeENvcjogbnVtYmVyLFxuICB5Q29yOiBudW1iZXIsXG4gIHNoaXBMZW5ndGg6IG51bWJlclxuKSB7XG4gIC8vXG4gIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiB4Q29yIC0gMSArIHNoaXBMZW5ndGggPiA5KSB7XG4gICAgcmV0dXJuICdob3Jpem9udGFsIGxlZnQnO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgcmV0dXJuICdob3Jpem9udGFsIHJpZ2h0JztcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHlDb3IgLSAxICsgc2hpcExlbmd0aCA+IDkpIHtcbiAgICBjb25zb2xlLmxvZyh5Q29yICsgc2hpcExlbmd0aCk7XG5cbiAgICByZXR1cm4gJ3ZlcnRpY2FsIHVwJztcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyh5Q29yICsgc2hpcExlbmd0aCk7XG5cbiAgICByZXR1cm4gJ3ZlcnRpY2FsIGRvd24nO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldERpc3BsYXlBZnRlck1vdXNlT3V0T3JBZnRlckRyb3BTaGlwcyhcbiAgZ2FtZUJvYXJkQ2VsbDogSFRNTEVsZW1lbnRbXVtdXG4pIHtcbiAgZ2FtZUJvYXJkQ2VsbC5mb3JFYWNoKChjZWxsQXJyYXkpID0+IHtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlTaGlwV2hpbGVEcmFnZ2luZyhcbiAgeENvcjogbnVtYmVyLFxuICB5Q29yOiBudW1iZXIsXG4gIGxlbmd0aDogbnVtYmVyLFxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcsXG4gIGdhbWVCb2FyZENlbGw6IEhUTUxFbGVtZW50W11bXVxuKSB7XG4gIGdhbWVCb2FyZENlbGwuZm9yRWFjaCgoY2VsbEFycmF5KSA9PiB7XG4gICAgY2VsbEFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmctc2hpcC1jb2xvcicpO1xuICAgIH0pO1xuICB9KTtcbiAgZ2FtZUJvYXJkQ2VsbFt5Q29yXVt4Q29yXS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRvIHJldHVybiBjb3JyZWN0IGRpcmVjdGlvbiBiYXNlZCBvbiB4Q29yLHlDb3IsIGFuZCBpbnB1dCBkaXJlY3Rpb25cbiAgY29uc3QgZHluYW1pY0RpcmVjdGlvbiA9IHJldHVybkR5bmFtaWNEaXJlY3Rpb24oXG4gICAgZGlyZWN0aW9uLFxuICAgIHhDb3IsXG4gICAgeUNvcixcbiAgICBsZW5ndGhcbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChkeW5hbWljRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCByaWdodCcpIHtcbiAgICAgIGdhbWVCb2FyZENlbGxbeUNvcl1beENvcl0uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmctc2hpcC1jb2xvcicpO1xuICAgICAgeENvcisrO1xuICAgIH0gZWxzZSBpZiAoZHluYW1pY0RpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgbGVmdCcpIHtcbiAgICAgIGdhbWVCb2FyZENlbGxbeUNvcl1beENvcl0uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmctc2hpcC1jb2xvcicpO1xuICAgICAgeENvci0tO1xuICAgICAgLy9cbiAgICB9IGVsc2UgaWYgKGR5bmFtaWNEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCBkb3duJykge1xuICAgICAgZ2FtZUJvYXJkQ2VsbFt5Q29yXVt4Q29yXS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgICB5Q29yKys7XG4gICAgICAvL1xuICAgIH0gZWxzZSBpZiAoZHluYW1pY0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsIHVwJykge1xuICAgICAgZ2FtZUJvYXJkQ2VsbFt5Q29yXVt4Q29yXS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgICB5Q29yLS07XG4gICAgICAvL1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIG1hcDogQXJyYXk8U2hpcCB8ICdlbXB0eScgfCAnbWlzc2luZ0F0dGFjayc+W107XG4gIGNvbnN0cnVjdG9yKGhlaWdodDogbnVtYmVyID0gMTApIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8gZ2FtZSBib2FyZCBjb250YWlucyBoZWlnaHQgYW5kIHdpZHRoIHRvIGNyZWF0ZSBhIGdyaWQgZGlzcGxheS5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zaXplID0gdGhpcy5oZWlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLm1hcCA9IFtcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgIF07XG4gIH1cblxuICBwbGFjZVNoaXAoXG4gICAgeENvcjogbnVtYmVyLFxuICAgIHlDb3I6IG51bWJlcixcbiAgICBuZXdTaGlwOiBTaGlwLFxuICAgIGRpcmVjdGlvbjpcbiAgICAgIHwgJ2hvcml6b250YWwgbGVmdCdcbiAgICAgIHwgJ3ZlcnRpY2FsIGRvd24nXG4gICAgICB8ICdob3Jpem9udGFsIHJpZ2h0J1xuICAgICAgfCAndmVydGljYWwgdXAnXG4gICkge1xuICAgIC8vIHhDb3IgYW5kIHlDb3IgYXJlIGlucHV0IGZyb20gVXNlciBJbnRlcmZhY2VcbiAgICBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gIT09ICdlbXB0eScpIHJldHVybjtcblxuICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgcmlnaHQnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeENvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIGxlZnQnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeENvci0tO1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCBkb3duJykge1xuICAgICAgICB0aGlzLm1hcFt5Q29yXVt4Q29yXSA9IG5ld1NoaXA7XG4gICAgICAgIHlDb3IrKztcbiAgICAgICAgLy9cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwgdXAnKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeUNvci0tO1xuICAgICAgICAvL1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByYW5kb21QbGFjaW5nU2hpcHMoc2hpcDogU2hpcCkge1xuICAgIC8vIHBvcHVsYXRpbmcgYXJvdW5kIDQwIHVuaXRzIC0+IG9uZSBvZiA2IHVuaXRzLCB0d28gb2YgNSB1bml0cyAsIHR3byBvZiA0IHVuaXRzIHRocmVlIG9mIDMgdW5pdHMgYW5kIHRocmVlIG9mIDIgdW5pdHMgYW5kIG9uZSBvZiAxIHVuaXRzXG4gICAgLy8gaG93IHRvIGRvIG1hdGgucmFuZG9tIHdpdGggeENvciBhbmQgeUNvcj9cbiAgICAvLyBiZWZvcmUgcGxhY2luZyBldmVyeSBzaGlwIHdlIG5lZWQgdG8gY2hlY2sgdHdvIGNvbmRpdGlvbnNcbiAgICBjb25zdCByYW5Eb21TZWVkID0gdGhpcy5oZWlnaHQgLSAxO1xuICAgIGxldCB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICBsZXQgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgLy8gcmFuZG9tIGRpcmVjdGlvbiB0b29cbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSB0aGlzLnJldHVyblJhbmRvbURpcmVjdGlvbigpO1xuICAgIHdoaWxlIChcbiAgICAgICF0aGlzLmNoZWNraW5nQ29sbGlzaW9uQW5kT25UaGVCb2FyZChcbiAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgIHhDb3IsXG4gICAgICAgIHlDb3IsXG4gICAgICAgIHJhbmRvbURpcmVjdGlvblxuICAgICAgKVxuICAgICkge1xuICAgICAgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgICB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB9XG4gICAgdGhpcy5wbGFjZVNoaXAoeENvciwgeUNvciwgc2hpcCwgcmFuZG9tRGlyZWN0aW9uKTtcbiAgICAvKipcbiAgICAgKiAgb25lOiBpcyByYW5kb20geENvciBhbmQgeUNvciBpcyBzdGlsbCBvbiB0aGUgYm9hcmRcbiAgICAgKiB0d28gOiBpcyB4Q29ycyBhbmQgeUNvcnMgb2YgZWFjaCBzaGlwIGNvbGxpZGUgd2l0aCB0aGUgYWxyZWFkeSBwb3B1bGF0ZWQgc2hpcHMuXG4gICAgICovXG4gIH1cbiAgcmV0dXJuUmFuZG9tRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvblNlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvblNlZWQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsIHJpZ2h0JztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwgbGVmdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCBkb3duJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsIHVwJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAndmVydGljYWwgZG93bic7XG4gICAgfVxuICB9XG4gIGNoZWNraW5nQ29sbGlzaW9uQW5kT25UaGVCb2FyZChcbiAgICBzaGlwTGVuZ3RoOiBTaGlwWydsZW5ndGgnXSxcbiAgICB4Q29yOiBudW1iZXIsXG4gICAgeUNvcjogbnVtYmVyLFxuICAgIGRpcmVjdGlvbjogc3RyaW5nXG4gICkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoeUNvciA+IDkgfHwgeUNvciA8IDAgfHwgeENvciA+IDkgfHwgeENvciA8IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMubWFwW3lDb3JdW3hDb3JdICE9PSAnZW1wdHknKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCByaWdodCcpIHtcbiAgICAgICAgeENvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIGxlZnQnKSB7XG4gICAgICAgIHhDb3ItLTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwgZG93bicpIHtcbiAgICAgICAgeUNvcisrO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCB1cCcpIHtcbiAgICAgICAgeUNvci0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNlaXZlQXR0YWNrKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgLy9bVUldIGNsYXNzIG5lZWQgdG8gcHJldmVudCByZWNlaXZlQXR0YWNoIHdoZW4gdGhlcmUgd2FzIGFuIGF0dGFjayBvciBtaXNzaW5nIHNob3QgIGluIHRoaXMgY29vcmRpbmF0ZSBhbHJlYWR5LlxuICAgIC8vICBpZiAoeENvciA+IHRoaXMuaGVpZ2h0IHx8IHlDb3IgPiB0aGlzLndpZHRoKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gPT09ICdlbXB0eScpIHtcbiAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gJ21pc3NpbmdBdHRhY2snO1xuICAgICAgLy8gcmVjb3JkIGNvb3JkaW5hdGUgb2YgdGhlIG1pc3NlZCBzaG90XG4gICAgICAvLyBbVUldIGRpc3BsYXkgbWlzc2VkIHNob3RcbiAgICB9IGVsc2UgaWYgKHRoaXMubWFwW3lDb3JdW3hDb3JdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0uaGl0KCk7XG4gICAgfVxuICB9XG4gIC8vR2FtZSBib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuICBnZXRNaXNzaW5nQXR0YWNrc0Nvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGFycjogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMubWFwW2ldW2pdID09PSAnbWlzc2luZ0F0dGFjaycpIHtcbiAgICAgICAgICBhcnIucHVzaChbaiwgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgLy8gICAgR2FtZSBib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgaXNGbGVldEFsbFN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLm1hcFtpXVtqXTtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coY3VycmVudFNoaXApO1xuICAgICAgICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGhhc0F0TGVhc3RBU2hpcCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4uL3NyYy9nYW1lYm9hcmRDb21wb25lbnQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vc3JjL3NoaXBDb21wb25lbnQnO1xuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGdhbWVCb2FyZDogR2FtZUJvYXJkO1xuICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkO1xuICB9XG5cbiAgcGxheVR1cm4ob3Bwb25lbnQ6IENvbXB1dGVyLCB4Q29yOiBudW1iZXIsIHlDb3I6IG51bWJlcikge1xuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlciB7XG4gIGdhbWVCb2FyZDogR2FtZUJvYXJkO1xuICBoaXRNYXA6IHN0cmluZ1tdW107XG4gIGF0dGFja1RpbWVzOiBudW1iZXI7XG4gIGxpbWl0ZWRBdHRhY2tUaW1lczogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkO1xuICAgIHRoaXMuaGl0TWFwID0gW1xuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICBdO1xuICAgIHRoaXMuYXR0YWNrVGltZXMgPSAwO1xuICAgIHRoaXMubGltaXRlZEF0dGFja1RpbWVzID0gMTAwO1xuICB9XG4gIHBsYXkocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAvKiogYWxnb3JpdGhtOlxuICAgICAqICBzdGVwIDE6IGNoZWNrIGlmIHRoaXMuaGl0TWFwIGNvbnRhaW5zICdwb3RlbnRpYWwnIC0+IHBsYXlSYW5kb20oKSBzbWFydCB2ZXJzaW9uXG4gICAgICogIGVsc2UgOiBwbGF5UmFuZG9tKCkgcmFuZG9tIHZlcnNpb25cbiAgICAgKiBzdGVwIDI6IGxvZ2ljIGZvciB0ZXJtaW5hdGluZyAncG90ZW50aWFsJyAtPiByZXBsYWNlICduZXcnIHRvICdwb3RlbnRpYWwnIGFnYWluXG4gICAgICogIC0+IGlmIHRoZSBzaGlwLmlzU2luaygpIHJldHVybiB0cnVlIC0+IHJlc2V0IGFsbCAgYWRqYWNlbnQgJ3BvdGVudGlhbCcgdG8gJ25ldydcbiAgICAgKi9cblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vua1NoaXAgLT4gcG90ZW50aWFsUmVzZXR0aW5nKClcbiAgICBpZiAodGhpcy5wb3RlbnRpYWxDaGVja2luZygpKSB7XG4gICAgICB0aGlzLnBsYXlTbWFydChwbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXlSYW5kb20ocGxheWVyKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxNYXJraW5nKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgaWYgKHhDb3IgKyAxID49IDAgJiYgeENvciArIDEgPCA1ICYmIHlDb3IgPj0gMCAmJiB5Q29yIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgKyAxID49IDAgJiYgeENvciArIDEgPCA1ICYmIHlDb3IgKyAxID49IDAgJiYgeUNvciArIDEgPCA1KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICAgIGlmICh4Q29yID49IDAgJiYgeENvciA8IDUgJiYgeUNvciAtIDEgPj0gMCAmJiB5Q29yIC0gMSA8IDUpIHtcbiAgICAgIC8vIGNvb3JkaW5hdGUgaXMgb24gdGhlIGJvYXJkXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICAgIGlmICh4Q29yIC0gMSA+PSAwICYmIHhDb3IgLSAxIDwgNSAmJiB5Q29yID49IDAgJiYgeUNvciA8IDUpIHtcbiAgICAgIC8vIGNvb3JkaW5hdGUgaXMgb24gdGhlIGJvYXJkXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSA9PT0gJ25ldycgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdICE9PSAnYXR0YWNrZWQnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSAhPT0gJ2F0dGFja2VkU2hpcCdcbiAgICAgIClcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID0gJ3BvdGVudGlhbCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgcG90ZW50aWFsUmVzZXR0aW5nKHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgLy8gaWYgdGhlIHNoaXAgbGVuZ3RoID4gMVxuICAgIC8vIGFzc3VtcHRpb246ICBsb29waW5nIGFuZCBhY2Nlc3NpbmcgZXZlcnkgZWxlbWVudCBvZiBwbGF5ZXIuZ2FtZUJvYXJkLm1hcFxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3BvdCB3aGVyZSBpbnN0YW5jZW9mIFNoaXAgJiYgdGhhdCBzaGlwLmlzU3VuaygpXG4gICAgLy9yZXR1cm4gdGhhdCB4Q29ycyBhbmQgeUNvcnMgaW5zaWRlIGFuIGFycmF5XG4gICAgLy8gbG9vcGluZyB0aHJvdWdoIHRoZSBhcnJheSBhbmRcbiAgICAvLyBkbyB0aGUgYmVsb3dcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSA9ICduZXcnO1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID0gJ25ldyc7XG4gICAgaWYgKHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9PT0gJ3BvdGVudGlhbCcpXG4gICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gPSAnbmV3JztcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgLSAxXSA9ICduZXcnO1xuICB9XG4gIHByaXZhdGUgcG90ZW50aWFsQ2hlY2tpbmcoKSB7XG4gICAgLy8/IHRoaXMgbWV0aG9kIGRvZXMgbm90IHdvcmsuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5oaXRNYXBbaV1bal0gPT09ICdwb3RlbnRpYWwnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcGxheVNtYXJ0KG9wcG9uZW50OiBQbGF5ZXIpIHtcbiAgICAvLyBuZWVkIHRvIGltcGxlbWVudGluZyBob3cgdG8gcmVzZXQgcG90ZW50aWFsIHBvaW50c1xuICAgIC8vXG4gICAgaWYgKHRoaXMuYXR0YWNrVGltZXMgPj0gdGhpcy5saW1pdGVkQXR0YWNrVGltZXMpIHJldHVybjtcbiAgICBjb25zdCByYW5Eb21TZWVkID0gb3Bwb25lbnQuZ2FtZUJvYXJkLmhlaWdodCAtIDE7XG4gICAgbGV0IHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGxldCB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB3aGlsZSAodGhpcy5oaXRNYXBbeUNvcl1beENvcl0gIT09ICdwb3RlbnRpYWwnKSB7XG4gICAgICB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAgIHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIH1cbiAgICB0aGlzLmF0dGFja1RpbWVzKys7XG4gICAgaWYgKG9wcG9uZW50LmdhbWVCb2FyZC5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZFNoaXAnO1xuICAgICAgdGhpcy5wb3RlbnRpYWxNYXJraW5nKHhDb3IsIHlDb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZCc7XG4gICAgfVxuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG5cbiAgcGxheVJhbmRvbShvcHBvbmVudDogUGxheWVyKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNrVGltZXMgPj0gdGhpcy5saW1pdGVkQXR0YWNrVGltZXMpIHJldHVybjtcbiAgICBjb25zdCByYW5Eb21TZWVkID0gb3Bwb25lbnQuZ2FtZUJvYXJkLmhlaWdodCAtIDE7XG4gICAgbGV0IHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGxldCB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICB3aGlsZSAodGhpcy5oaXRNYXBbeUNvcl1beENvcl0gIT09ICduZXcnKSB7XG4gICAgICAvLyByZXBsYWNlIHR5cGVPZkF0dGFjayBoZXJlXG4gICAgICB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAgIHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIH1cbiAgICB0aGlzLmF0dGFja1RpbWVzKys7XG4gICAgLy8gbWFya2luZyBsb2dpY1xuICAgIGlmIChvcHBvbmVudC5nYW1lQm9hcmQubWFwW3lDb3JdW3hDb3JdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvcl0gPSAnYXR0YWNrZWRTaGlwJztcbiAgICAgIHRoaXMucG90ZW50aWFsTWFya2luZyh4Q29yLCB5Q29yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvcl0gPSAnYXR0YWNrZWQnO1xuICAgIH1cbiAgICBvcHBvbmVudC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4Q29yLCB5Q29yKTtcbiAgfVxufVxuXG4vLyBBSSBkb2Vzbid0IHdvcmsuIEkgZG9uJ3Qgd2FudCB0byBmaXggaXQgZWl0aGVyLlxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRUaW1lczogbnVtYmVyO1xuICBpc1N1bmtTdGF0dXM6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyID0gMSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0VGltZXMgPSAwO1xuICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gZmFsc2U7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdFRpbWVzIDwgdGhpcy5sZW5ndGgpIHRoaXMuaGl0VGltZXMrKztcbiAgICBpZiAodGhpcy5sZW5ndGggPiB0aGlzLmhpdFRpbWVzKSB7XG4gICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N1bmtTdGF0dXM7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwQ29tcG9uZW50JztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllckNvbXBvbmVudCc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkQ29tcG9uZW50JztcbmltcG9ydCB7XG4gIG1hcmtpbmdBdHRhY2ssXG4gIGNvbXB1dGVyTWFya2luZ0F0dGFjayxcbiAgY2hlY2tpbmdBbmREaXNwbGF5aW5nQW5ub3VuY2VtZW50LFxuICBkaXNwbGF5T3VyU2hpcHMsXG4gIGNoYW5nZURpcmVjdGlvbixcbiAgZGlzcGxheVNoaXBXaGlsZURyYWdnaW5nLFxuICByZXR1cm5EeW5hbWljRGlyZWN0aW9uLFxuICBwb3B1bGF0aW5nSW5zaWRlR2FtZUJvYXJkLFxuICByZXR1cm5DZWxsQXJyYXlGcm9tQW5BcnJheSxcbiAgcmVzZXREaXNwbGF5QWZ0ZXJNb3VzZU91dE9yQWZ0ZXJEcm9wU2hpcHMsXG59IGZyb20gJy4vRE9NQW5kVUknO1xudHlwZSBiYXNpY0RpcmVjdGlvbiA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCc7XG5jb25zdCBnYW1lQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZDEnKTtcbmNvbnN0IGdhbWVCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkMicpO1xuY29uc3Qgc2hpcHNQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcHMtcGxhY2VtZW50Jyk7XG5jb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9uLWJ1dHRvbicpO1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnV0dG9uJyk7XG5sZXQgcGxheWVyU3RhcnQgPSBmYWxzZTtcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFwbGF5ZXIuZ2FtZUJvYXJkLmhhc0F0TGVhc3RBU2hpcCgpKSB7XG4gICAgYWxlcnQoJ3lvdSBuZWVkIHRvIHBsYWNlIGF0IGxlYXN0IG9uZSBzaGlwIHRvIHN0YXJ0Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcGxheWVyU3RhcnQgPSB0cnVlO1xuICBzaGlwc1BsYWNlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6bm9uZSc7XG59KTtcbnBvcHVsYXRpbmdJbnNpZGVHYW1lQm9hcmQoZ2FtZUJvYXJkMSwgJ2dhbWVib2FyZDEtY2VsbCcpO1xucG9wdWxhdGluZ0luc2lkZUdhbWVCb2FyZChnYW1lQm9hcmQyLCAnZ2FtZWJvYXJkMi1jZWxsJyk7XG5cbmNvbnN0IHBsYXllckNlbGxzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxLWNlbGwnKV07XG5jb25zdCBwbGF5ZXJDZWxsc0FyciA9IHJldHVybkNlbGxBcnJheUZyb21BbkFycmF5KHBsYXllckNlbGxzKTtcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIobmV3IEdhbWVCb2FyZCgxMCkpO1xuY29uc3QgZW5lbXkgPSBuZXcgQ29tcHV0ZXIobmV3IEdhbWVCb2FyZCgxMCkpO1xuXG5kaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICBjaGFuZ2VEaXJlY3Rpb24oc2hpcHNQbGFjZW1lbnQpXG4pO1xuXG5nYW1lQm9hcmQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFwbGF5ZXJTdGFydCkge1xuICAgIGFsZXJ0KCcgcGxhY2Ugc2hpcHMgYW5kIGNsaWNrIHRoZSAgc3RhcnQgYnV0dG9uIHRvIHBsYXkuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwbGF5ZXIuZ2FtZUJvYXJkLmlzRmxlZXRBbGxTdW5rKCkgJiYgIWVuZW15LmdhbWVCb2FyZC5pc0ZsZWV0QWxsU3VuaygpKSB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgICAgZS50YXJnZXQuZGF0YXNldC5jbGlja2VkICE9PSAndHJ1ZScgJiZcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZWJvYXJkMi1jZWxsJylcbiAgICApIHtcbiAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY2xpY2tlZCA9ICd0cnVlJztcblxuICAgICAgLy8gZXh0cmFjdGluZyB4Q29yIGFuZCB5Q29yIGZyb20gZG9jdW1lbnRcbiAgICAgIGNvbnN0IHhDb3IgPSArZS50YXJnZXQuZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMV07XG4gICAgICBjb25zdCB5Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzBdO1xuXG4gICAgICBwbGF5ZXIucGxheVR1cm4oZW5lbXksIHhDb3IsIHlDb3IpO1xuXG4gICAgICBlbmVteS5wbGF5KHBsYXllcik7XG4gICAgICAvLyBkaXNwbGF5RWZmZWN0IG9mIGF0dGFja2luZ1xuICAgICAgbWFya2luZ0F0dGFjayhlbmVteSwgZS50YXJnZXQsIHhDb3IsIHlDb3IpO1xuICAgICAgY29tcHV0ZXJNYXJraW5nQXR0YWNrKGVuZW15LmhpdE1hcCwgcGxheWVyQ2VsbHMpO1xuICAgICAgLy8gZGlzcGxheSBhbm5vdW5jZW1lbnQgaWYgdGhlcmUgaXMgYSB3aW5uZXJcbiAgICAgIGNoZWNraW5nQW5kRGlzcGxheWluZ0Fubm91bmNlbWVudChwbGF5ZXIsIGVuZW15KTtcbiAgICAgIC8vICAgcGxheWVyVHVybiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vKiB3aGF0IHRvIGRvIHJpZ2h0IG5vdzpcblxuY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUnKTtcbmxldCBjdXJyZW50RHJhZ2dlZE9iamVjdDogRWxlbWVudDtcbmxldCBkZXN0aW5hdGlvbjogRXZlbnRUYXJnZXQ7XG5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAvL2V2ZW50XG4gIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG5cbiAgICBjdXJyZW50RHJhZ2dlZE9iamVjdCA9IGRyYWdnYWJsZTtcbiAgfSk7XG4gIC8vIGV2ZW50XG4gIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gK2N1cnJlbnREcmFnZ2VkT2JqZWN0LmRhdGFzZXQubGVuZ3RoO1xuICAgIGxldCBkaXJlY3Rpb246IGJhc2ljRGlyZWN0aW9uO1xuXG4gICAgLy8gbmVlZCB0byBzdG9wIHVzZXIgZnJvbSBkcmFnZ2luZyB0aGUgZHJhZ2dhYmxlIG9iamVjdCB0d2ljZS5cbiAgICBpZiAoZGVzdGluYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdnYW1lYm9hcmQxLWNlbGwnKSkge1xuICAgICAgLy8gaG93IHRvIGRlbGV0ZSBkZXN0aW5hdGlvbiB2YXJpYmxlIGhlcmUgb3IgcmVzZXQgaXQgaGVyZT9cbiAgICAgIGNvbnN0IHhDb3IgPSArZGVzdGluYXRpb24uZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMV07XG4gICAgICBjb25zdCB5Q29yID0gK2Rlc3RpbmF0aW9uLmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzBdO1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50RHJhZ2dlZE9iamVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAnc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsJ1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGR5bmFtaWNEaXJlY3Rpb24gPSByZXR1cm5EeW5hbWljRGlyZWN0aW9uKFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIHhDb3IsXG4gICAgICAgIHlDb3IsXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIHBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICB4Q29yLFxuICAgICAgICB5Q29yLFxuICAgICAgICBuZXcgU2hpcChzaGlwTGVuZ3RoKSxcbiAgICAgICAgZHluYW1pY0RpcmVjdGlvblxuICAgICAgKTtcbiAgICAgIGVuZW15LmdhbWVCb2FyZC5yYW5kb21QbGFjaW5nU2hpcHMobmV3IFNoaXAoc2hpcExlbmd0aCkpO1xuICAgICAgZGlzcGxheU91clNoaXBzKHBsYXllckNlbGxzLCBwbGF5ZXIuZ2FtZUJvYXJkLm1hcCk7XG5cbiAgICAgIHJlc2V0QWZ0ZXJEcm9wKGUudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICByZXNldEFmdGVyRHJvcFdpdGhOb0lucHV0KCk7XG4gICAgfVxuICB9KTtcbn0pO1xuZ2FtZUJvYXJkMS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gIGRpc3BsYXlPdXJTaGlwcyhwbGF5ZXJDZWxscywgcGxheWVyLmdhbWVCb2FyZC5tYXApO1xuICBjb25zdCBIVE1MRWxlbWVudCA9IGUudGFyZ2V0OyAvLyByZXZpZXcgY29kZSBsYXR0ZXJcbiAgY29uc3Qgc2hpcExlbmd0aCA9ICtjdXJyZW50RHJhZ2dlZE9iamVjdC5kYXRhc2V0Lmxlbmd0aDsgLy8gcmV2aWV3IGNvZGUgbGF0dGVyXG4gIGRlc3RpbmF0aW9uID0gZS50YXJnZXQ7XG4gIGxldCBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCc7XG4gIGlmIChcbiAgICBjdXJyZW50RHJhZ2dlZE9iamVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICdzaGlwcy1wbGFjZW1lbnQtdmVydGljYWwnXG4gICAgKVxuICApIHtcbiAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2Uge1xuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuICBpZiAoSFRNTEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYW1lYm9hcmQxLWNlbGwnKSkge1xuICAgIGxldCB4Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzFdO1xuICAgIGxldCB5Q29yID0gK2UudGFyZ2V0LmRhdGFzZXQuY2VsbC5zcGxpdCgnLCcpWzBdO1xuICAgIGRpc3BsYXlTaGlwV2hpbGVEcmFnZ2luZyh4Q29yLCB5Q29yLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24sIHBsYXllckNlbGxzQXJyKTtcblxuICAgIC8vIHVzaW5nIGNvbmRpdGlvbiBzdGF0ZW1lbnQgdG8gb25seSB0b2dnbGUgb2ZmIGVtcHR5IGNlbGxcbiAgICAvLyBieSByZXNldGluZyBhbGwgdGhlIGNlbGwgYmVmb3JlIGFwcGx5IGNvbG9yIC0+eW91IHRvZ2dsZSBvZmYuXG4gIH1cbn0pO1xuXG5nYW1lQm9hcmQxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICByZXNldERpc3BsYXlBZnRlck1vdXNlT3V0T3JBZnRlckRyb3BTaGlwcyhwbGF5ZXJDZWxsc0Fycik7XG4gIGNvbnNvbGUubG9nKHBsYXllckNlbGxzQXJyKTtcbn0pO1xuZnVuY3Rpb24gcmVzZXRBZnRlckRyb3AoZGVsZXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICBkZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgZGVsZXRpbmdFbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lOyc7XG59XG5mdW5jdGlvbiByZXNldEFmdGVyRHJvcFdpdGhOb0lucHV0KCkge1xuICBkZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbn1cbi8vIGhvdyBjYW4gd2UgcHJldmVudCB0aGUgcGxheWVyIGZyb20gZHJvcHBpbmcgdGhlIHNoaXBzIG91dHNpZGUgZ2FtZWJvYXJkIGNvbnRhaW5lcj9cbi8vXG4vLyB3ZSBuZWVkIHRvIGFsd2F5cyB1cGRhdGUgc2hpcHMgaW1hZ2UgaW5zaWRlIHBsYXllciBnYW1lYm9hcmQgd2hpbGUgdGhlIHBsYXllciBkcmFnIG9yIGFmdGVyIGRyb3BwaW5nXG4vKioqXG4gKlxuICpcbiAqKiBpbXBsZW1lbnRpbmcgdGhlIGNvbmRpdGlvbiB3aGVuIHBsYXllciBjYW4gc3RhcnQgdG8gcGxheSB0aGUgZ2FtZVxuICoqIGNyZWF0ZSBhIHN0YXJ0IGJ1dHRvbiB0aGF0IHdpbGwgbGV0IHRoZSB1c2VyIHN0YXJ0IHRoZSBnYW1lLlxuICogKiBjdXJyZW50bHkgcmVvcmdhbml6aW5nIHRoZSBjb2RlIChwb3N0cG9uZWQpXG4gKiAqIHN0YXJ0IHRvIGxldCBwbGF5ZXIgcGxheSB0aGUgZ2FtZSBhZnRlciBwbGF5ZXIgY2xpY2sgdGhlIGJ1dHRvbiBwbGF5LlxuICogKi0+IGRlbGV0ZSBzaGlwLXBsYWNlbWVudCwgZGVsZXRlIHRoZSBzdGFydCBidXR0b25cbiAqICogLT4gZGV0ZXJtaW5lIGhvdyBtYW55IHNoaXBzIHBsYXllciBoYXZlIHBsYWNlZCAtPiByYW5kb20gdGhlIHNhbWUgc2hpcHMgZm9yIGNvbXB1dGVyLlxuICpcbiAqICogQUkgc21hcnQgbW92ZSBkb2Vzbid0IHdvcmsgLT4gY2hlY2sgaXQgb3V0IGFnYWluLlxuICogICpyZXZpZXdpbmcgb2xkIGNvZGUgLT4gbWFraW5nIGl0IGEgYmV0dGVyIHZlcnNpb24gYnkgcmVmYWN0b3JpbmcgLCBkZWNvdXBsaW5nLlxuICovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=