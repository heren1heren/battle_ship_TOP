/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss':
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `html,
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
`,
          '',
          {
            version: 3,
            sources: ['webpack://./src/style.scss'],
            names: [],
            mappings:
              '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',
            sourcesContent: [
              '//* main scss style sheet\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: "";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@mixin flexCenterDir($direction) {\n\tdisplay: flex;\n\tflex-direction: $direction;\n\tjustify-content: center;\n\talign-items: center;\n}\nbody {\n\tbackground-color: gray;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\t.hidden {\n\t\tdisplay: none;\n\t}\n\t#finial-announcement {\n\t\tposition: absolute;\n\t\theight: 100vh;\n\t\twidth: 100vw;\n\t\tbackground-color: grey;\n\t\topacity: 0.8;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 60px;\n\t\t.announcement-wrapper {\n\t\t\tbackground-color: black;\n\t\t\tpadding: 40px;\n\t\t\tcolor: white;\n\t\t}\n\t}\n\t#title-section {\n\t\t@include flexCenterDir(row);\n\t\tfont-size: 40px;\n\t\tfont-weight: bold;\n\t\tflex: 1;\n\t}\n\t#game-board-section {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tflex: 4;\n\t\t#player-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\t\t\t\t.gameboard1-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.our-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t.gameboard1-cell.dragging-ship-color {\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.ships-placement-horizontal {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tli.draggable {\n\t\t\tcursor: move;\n\t\t}\n\t\tli.dragging {\n\t\t\topacity: 0.5;\n\t\t}\n\t\t.ships-placement-vertical {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\t\t\tgap: 20px;\n\t\t\tmargin-left: -20px;\n\t\t\tmargin-top: 30px;\n\t\t\talign-self: flex-start;\n\t\t\tbackground-color: wheat;\n\t\t\tlist-style: none;\n\t\t\tfont-size: 20px;\n\n\t\t\tli {\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tgap: 1px;\n\t\t\t\t.ship-cell {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\tbackground-color: aqua;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t\tli.draggable {\n\t\t\t\tcursor: move;\n\t\t\t}\n\t\t\tli.dragging {\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t}\n\n\t\t#enemy-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 30px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tgap: 50px;\n\t\t\t.gameboard {\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tdisplay: grid;\n\t\t\t\tborder: 4px solid black;\n\t\t\t\tgap: 3px;\n\t\t\t\tgrid-template: repeat(10, 1fr) / repeat(10, 1fr);\n\n\t\t\t\t.gameboard2-cell {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.missing-attack {\n\t\t\t\t\tbackground-color: gray;\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t.gameboard2-cell.correct-attack {\n\t\t\t\t\tbackground-color: red;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t\t// extra detail: .gameboard.ship-is-sunk {}\n\t\t\t}\n\t\t}\n\t}\n}\n\n.buttons-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = '';
              var needLayer = typeof item[5] !== 'undefined';
              if (item[4]) {
                content += '@supports ('.concat(item[4], ') {');
              }
              if (item[2]) {
                content += '@media '.concat(item[2], ' {');
              }
              if (needLayer) {
                content += '@layer'.concat(
                  item[5].length > 0 ? ' '.concat(item[5]) : '',
                  ' {'
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += '}';
              }
              if (item[2]) {
                content += '}';
              }
              if (item[4]) {
                content += '}';
              }
              return content;
            }).join('');
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === 'string') {
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
              if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                  item[5] = layer;
                } else {
                  item[1] = '@layer'
                    .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                    .concat(item[1], '}');
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = '@media '
                    .concat(item[2], ' {')
                    .concat(item[1], '}');
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = ''.concat(supports);
                } else {
                  item[1] = '@supports ('
                    .concat(item[4], ') {')
                    .concat(item[1], '}');
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === 'function') {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64
              );
            var sourceMapping = '/*# '.concat(data, ' */');
            return [content].concat([sourceMapping]).join('\n');
          }
          return [content].join('\n');
        };

        /***/
      },

    /***/ './src/style.scss':
      /*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss'
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head'
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
            var identifier = ''.concat(id, ' ').concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement('style');
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute('nonce', nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = '';
          if (obj.supports) {
            css += '@supports ('.concat(obj.supports, ') {');
          }
          if (obj.media) {
            css += '@media '.concat(obj.media, ' {');
          }
          var needLayer = typeof obj.layer !== 'undefined';
          if (needLayer) {
            css += '@layer'.concat(
              obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
              ' {'
            );
          }
          css += obj.css;
          if (needLayer) {
            css += '}';
          }
          if (obj.media) {
            css += '}';
          }
          if (obj.supports) {
            css += '}';
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== 'undefined') {
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                ' */'
              );
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
          if (typeof document === 'undefined') {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ './src/DOMAndUI.ts':
      /*!*************************!*\
  !*** ./src/DOMAndUI.ts ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ changeDirection: () =>
            /* binding */ changeDirection,
          /* harmony export */ checkingAndDisplayingAnnouncement: () =>
            /* binding */ checkingAndDisplayingAnnouncement,
          /* harmony export */ computerMarkingAttack: () =>
            /* binding */ computerMarkingAttack,
          /* harmony export */ displayOurShips: () =>
            /* binding */ displayOurShips,
          /* harmony export */ displayShipWhileDragging: () =>
            /* binding */ displayShipWhileDragging,
          /* harmony export */ markingAttack: () => /* binding */ markingAttack,
          /* harmony export */ populatingInsideGameBoard: () =>
            /* binding */ populatingInsideGameBoard,
          /* harmony export */ resetDisplayAfterMouseOutOrAfterDropShips: () =>
            /* binding */ resetDisplayAfterMouseOutOrAfterDropShips,
          /* harmony export */ returnCellArrayFromAnArray: () =>
            /* binding */ returnCellArrayFromAnArray,
          /* harmony export */ returnDynamicDirection: () =>
            /* binding */ returnDynamicDirection,
          /* harmony export */
        });
        /* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shipComponent */ './src/shipComponent.ts');

        //* extracting logic functions to extract from Document web page
        function returnCellArrayFromAnArray(array) {
          //
          var playerCellsArr = [[], [], [], [], [], [], [], [], [], []];
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
              cell.dataset.cell = ''.concat(i, ',').concat(j);
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
          } else {
            elementTarget.classList.add('correct-attack');
          }
        }
        function computerMarkingAttack(
          // renovating it later
          computerMap,
          playerGameboardCells
        ) {
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
              if (
                computerMap[i_1][j] === 'new' ||
                computerMap[i_1][j] === 'potential'
              )
                continue;
              if (computerMap[i_1][j] === 'attacked') {
                cellArray[i_1][j].classList.add('missing-attack');
              } else {
                cellArray[i_1][j].classList.add('correct-attack');
              }
            }
          }
        }
        //* function for announcement
        function checkingAndDisplayingAnnouncement(player, enemy) {
          if (player.gameBoard.isFleetAllSunk()) {
            var announcementText = document.querySelector(
              '.announcement-wrapper'
            );
            announcementText.textContent = ' you win yourself.';
            announcementText.parentElement.setAttribute(
              'id',
              'finial-announcement'
            );
          } else if (enemy.gameBoard.isFleetAllSunk()) {
            var announcementText = document.querySelector(
              '.announcement-wrapper'
            );
            announcementText.parentElement.setAttribute(
              'id',
              'finial-announcement'
            );
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
              } else if (
                ourMap[i_2][j] instanceof
                _shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
              ) {
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
          } else {
            shipsPlacement.classList.remove('ships-placement-vertical');
            shipsPlacement.classList.add('ships-placement-horizontal');
          }
        }
        // displaying while dragging functions
        function returnDynamicDirection(direction, xCor, yCor, shipLength) {
          //
          if (direction === 'horizontal' && xCor - 1 + shipLength > 9) {
            return 'horizontal left';
          } else if (direction === 'horizontal') {
            return 'horizontal right';
          }
          if (direction === 'vertical' && yCor - 1 + shipLength > 9) {
            console.log(yCor + shipLength);
            return 'vertical up';
          } else {
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
        function displayShipWhileDragging(
          xCor,
          yCor,
          length,
          direction,
          gameBoardCell
        ) {
          gameBoardCell.forEach(function (cellArray) {
            cellArray.forEach(function (cell) {
              cell.classList.remove('dragging-ship-color');
            });
          });
          gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
          // create a function to return correct direction based on xCor,yCor, and input direction
          var dynamicDirection = returnDynamicDirection(
            direction,
            xCor,
            yCor,
            length
          );
          for (var i = 0; i < length; i++) {
            if (dynamicDirection === 'horizontal right') {
              gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
              xCor++;
            } else if (dynamicDirection === 'horizontal left') {
              gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
              xCor--;
              //
            } else if (dynamicDirection === 'vertical down') {
              gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
              yCor++;
              //
            } else if (dynamicDirection === 'vertical up') {
              gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
              yCor--;
              //
            }
          }
        }

        /***/
      },

    /***/ './src/gameboardComponent.ts':
      /*!***********************************!*\
  !*** ./src/gameboardComponent.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shipComponent */ './src/shipComponent.ts');

        var GameBoard = /** @class */ (function () {
          function GameBoard(height) {
            if (height === void 0) {
              height = 10;
            }
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
          GameBoard.prototype.placeShip = function (
            xCor,
            yCor,
            newShip,
            direction
          ) {
            // xCor and yCor are input from User Interface
            if (this.map[yCor][xCor] !== 'empty') return;
            this.map[yCor][xCor] = newShip;
            for (var i = 0; i < newShip.length; i++) {
              if (direction === 'horizontal right') {
                this.map[yCor][xCor] = newShip;
                xCor++;
              } else if (direction === 'horizontal left') {
                this.map[yCor][xCor] = newShip;
                xCor--;
                //
              } else if (direction === 'vertical down') {
                this.map[yCor][xCor] = newShip;
                yCor++;
                //
              } else if (direction === 'vertical up') {
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
            while (
              !this.checkingCollisionAndOnTheBoard(
                ship.length,
                xCor,
                yCor,
                randomDirection
              )
            ) {
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
          GameBoard.prototype.checkingCollisionAndOnTheBoard = function (
            shipLength,
            xCor,
            yCor,
            direction
          ) {
            for (var i = 0; i < shipLength; i++) {
              if (yCor > 9 || yCor < 0 || xCor > 9 || xCor < 0) return false;
              if (this.map[yCor][xCor] !== 'empty') return false;
              if (direction === 'horizontal right') {
                xCor++;
              } else if (direction === 'horizontal left') {
                xCor--;
              } else if (direction === 'vertical down') {
                yCor++;
              } else if (direction === 'vertical up') {
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
            } else if (
              this.map[yCor][xCor] instanceof
              _shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
            ) {
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
                if (
                  this.map[i][j] instanceof
                  _shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
                ) {
                  var currentShip = this.map[i][j];
                  //  console.log(currentShip);
                  if (currentShip.isSunk() === false) return false;
                }
              }
            }
            return true;
          };
          GameBoard.prototype.hasAtLeastAShip = function () {
            for (var i = 0; i < 10; i++) {
              for (var j = 0; j < 10; j++) {
                if (
                  this.map[i][j] instanceof
                  _shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
                ) {
                  return true;
                }
              }
            }
            return false;
          };
          return GameBoard;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GameBoard;

        /***/
      },

    /***/ './src/playerComponent.ts':
      /*!********************************!*\
  !*** ./src/playerComponent.ts ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Computer: () => /* binding */ Computer,
          /* harmony export */ Player: () => /* binding */ Player,
          /* harmony export */
        });
        /* harmony import */ var _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../src/shipComponent */ './src/shipComponent.ts'
          );

        var Player = /** @class */ (function () {
          function Player(gameBoard) {
            this.gameBoard = gameBoard;
          }
          Player.prototype.playTurn = function (opponent, xCor, yCor) {
            opponent.gameBoard.receiveAttack(xCor, yCor);
          };
          return Player;
        })();

        var Computer = /** @class */ (function () {
          function Computer(gameBoard) {
            this.gameBoard = gameBoard;
            this.hitMap = [
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
              [
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
                'new',
              ],
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
            } else {
              this.playRandom(player);
            }
          };
          Computer.prototype.potentialMarking = function (xCor, yCor) {
            if (xCor + 1 >= 0 && xCor + 1 < 5 && yCor >= 0 && yCor < 5) {
              // coordinate is on the board
              if (
                this.hitMap[yCor][xCor + 1] === 'new' &&
                this.hitMap[yCor][xCor + 1] !== 'attacked' &&
                this.hitMap[yCor][xCor + 1] !== 'attackedShip'
              )
                this.hitMap[yCor][xCor + 1] = 'potential';
            }
            if (
              xCor + 1 >= 0 &&
              xCor + 1 < 5 &&
              yCor + 1 >= 0 &&
              yCor + 1 < 5
            ) {
              if (
                this.hitMap[yCor + 1][xCor] === 'new' &&
                this.hitMap[yCor + 1][xCor] !== 'attacked' &&
                this.hitMap[yCor + 1][xCor] !== 'attackedShip'
              )
                this.hitMap[yCor + 1][xCor] = 'potential';
            }
            if (xCor >= 0 && xCor < 5 && yCor - 1 >= 0 && yCor - 1 < 5) {
              // coordinate is on the board
              if (
                this.hitMap[yCor - 1][xCor] === 'new' &&
                this.hitMap[yCor - 1][xCor] !== 'attacked' &&
                this.hitMap[yCor - 1][xCor] !== 'attackedShip'
              )
                this.hitMap[yCor - 1][xCor] = 'potential';
            }
            if (xCor - 1 >= 0 && xCor - 1 < 5 && yCor >= 0 && yCor < 5) {
              // coordinate is on the board
              if (
                this.hitMap[yCor][xCor - 1] === 'new' &&
                this.hitMap[yCor][xCor - 1] !== 'attacked' &&
                this.hitMap[yCor][xCor - 1] !== 'attackedShip'
              )
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
            if (this.attackTimes >= this.limitedAttackTimes) return;
            var ranDomSeed = opponent.gameBoard.height - 1;
            var xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            var yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            while (this.hitMap[yCor][xCor] !== 'potential') {
              xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
              yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
            }
            this.attackTimes++;
            if (
              opponent.gameBoard.map[yCor][xCor] instanceof
              _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
            ) {
              this.hitMap[yCor][xCor] = 'attackedShip';
              this.potentialMarking(xCor, yCor);
            } else {
              this.hitMap[yCor][xCor] = 'attacked';
            }
            opponent.gameBoard.receiveAttack(xCor, yCor);
          };
          Computer.prototype.playRandom = function (opponent) {
            if (this.attackTimes >= this.limitedAttackTimes) return;
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
            if (
              opponent.gameBoard.map[yCor][xCor] instanceof
              _src_shipComponent__WEBPACK_IMPORTED_MODULE_0__['default']
            ) {
              this.hitMap[yCor][xCor] = 'attackedShip';
              this.potentialMarking(xCor, yCor);
            } else {
              this.hitMap[yCor][xCor] = 'attacked';
            }
            opponent.gameBoard.receiveAttack(xCor, yCor);
          };
          return Computer;
        })();

        /***/
      },

    /***/ './src/shipComponent.ts':
      /*!******************************!*\
  !*** ./src/shipComponent.ts ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var Ship = /** @class */ (function () {
          function Ship(length) {
            if (length === void 0) {
              length = 1;
            }
            this.length = length;
            this.hitTimes = 0;
            this.isSunkStatus = false;
          }
          Ship.prototype.hit = function () {
            if (this.hitTimes < this.length) this.hitTimes++;
            if (this.length > this.hitTimes) {
              this.isSunkStatus = false;
            } else {
              this.isSunkStatus = true;
            }
          };
          Ship.prototype.isSunk = function () {
            return this.isSunkStatus;
          };
          return Ship;
        })();
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Ship;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.scss */ './src/style.scss');
    /* harmony import */ var _shipComponent__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./shipComponent */ './src/shipComponent.ts');
    /* harmony import */ var _playerComponent__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./playerComponent */ './src/playerComponent.ts');
    /* harmony import */ var _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ./gameboardComponent */ './src/gameboardComponent.ts'
      );
    /* harmony import */ var _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! ./DOMAndUI */ './src/DOMAndUI.ts');
    var __spreadArray =
      (undefined && undefined.__spreadArray) ||
      function (to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
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
    (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.populatingInsideGameBoard)(
      gameBoard1,
      'gameboard1-cell'
    );
    (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.populatingInsideGameBoard)(
      gameBoard2,
      'gameboard2-cell'
    );
    var playerCells = __spreadArray(
      [],
      document.querySelectorAll('.gameboard1-cell'),
      true
    );
    var playerCellsArr = (0,
    _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.returnCellArrayFromAnArray)(
      playerCells
    );
    var player = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Player(
      new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__['default'](10)
    );
    var enemy = new _playerComponent__WEBPACK_IMPORTED_MODULE_2__.Computer(
      new _gameboardComponent__WEBPACK_IMPORTED_MODULE_3__['default'](10)
    );
    directionButton.addEventListener('click', function () {
      return (0,
      _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.changeDirection)(shipsPlacement);
    });
    gameBoard2.addEventListener('click', function (e) {
      if (!playerStart) {
        alert(' place ships and click the  start button to play.');
        return;
      }
      if (
        !player.gameBoard.isFleetAllSunk() &&
        !enemy.gameBoard.isFleetAllSunk()
      ) {
        if (
          e.target instanceof HTMLElement &&
          e.target.dataset.clicked !== 'true' &&
          e.target.classList.contains('gameboard2-cell')
        ) {
          e.target.dataset.clicked = 'true';
          // extracting xCor and yCor from document
          var xCor = +e.target.dataset.cell.split(',')[1];
          var yCor = +e.target.dataset.cell.split(',')[0];
          player.playTurn(enemy, xCor, yCor);
          enemy.play(player);
          // displayEffect of attacking
          (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.markingAttack)(
            enemy,
            e.target,
            xCor,
            yCor
          );
          (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.computerMarkingAttack)(
            enemy.hitMap,
            playerCells
          );
          // display announcement if there is a winner
          (0,
          _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.checkingAndDisplayingAnnouncement)(
            player,
            enemy
          );
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
          if (
            currentDraggedObject.parentElement.classList.contains(
              'ships-placement-vertical'
            )
          ) {
            direction = 'vertical';
          } else {
            direction = 'horizontal';
          }
          var dynamicDirection = (0,
          _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.returnDynamicDirection)(
            direction,
            xCor,
            yCor,
            shipLength
          );
          player.gameBoard.placeShip(
            xCor,
            yCor,
            new _shipComponent__WEBPACK_IMPORTED_MODULE_1__['default'](
              shipLength
            ),
            dynamicDirection
          );
          enemy.gameBoard.randomPlacingShips(
            new _shipComponent__WEBPACK_IMPORTED_MODULE_1__['default'](
              shipLength
            )
          );
          (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayOurShips)(
            playerCells,
            player.gameBoard.map
          );
          resetAfterDrop(e.target);
        } else {
          draggable.classList.remove('dragging');
          resetAfterDropWithNoInput();
        }
      });
    });
    gameBoard1.addEventListener('dragover', function (e) {
      (0,
      _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayOurShips)(playerCells, player.gameBoard.map);
      var HTMLElement = e.target; // review code latter
      var shipLength = +currentDraggedObject.dataset.length; // review code latter
      destination = e.target;
      var direction;
      if (
        currentDraggedObject.parentElement.classList.contains(
          'ships-placement-vertical'
        )
      ) {
        direction = 'vertical';
      } else {
        direction = 'horizontal';
      }
      if (HTMLElement.classList.contains('gameboard1-cell')) {
        var xCor = +e.target.dataset.cell.split(',')[1];
        var yCor = +e.target.dataset.cell.split(',')[0];
        (0, _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.displayShipWhileDragging)(
          xCor,
          yCor,
          shipLength,
          direction,
          playerCellsArr
        );
        // using condition statement to only toggle off empty cell
        // by reseting all the cell before apply color ->you toggle off.
      }
    });
    gameBoard1.addEventListener('mouseleave', function (e) {
      (0,
      _DOMAndUI__WEBPACK_IMPORTED_MODULE_4__.resetDisplayAfterMouseOutOrAfterDropShips)(playerCellsArr);
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

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdLQUFnSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLFlBQVksZUFBZSxnQkFBZ0IsS0FBSyxnQkFBZ0IsTUFBTSxrQkFBa0IsT0FBTyxnQkFBZ0IsUUFBUSxVQUFVLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksZ0JBQWdCLEtBQUssZUFBZSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLFdBQVcsZUFBZSxNQUFNLFVBQVUsYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLGdCQUFnQixNQUFNLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGdCQUFnQixPQUFPLGFBQWEsZ0JBQWdCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLGdCQUFnQixPQUFPLGFBQWEsZ0JBQWdCLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxnQkFBZ0IsTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixPQUFPLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxlQUFlLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLGlCQUFpQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLGdCQUFnQixPQUFPLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLHVuQkFBdW5CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsd0pBQXdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxzQ0FBc0Msa0JBQWtCLCtCQUErQiw0QkFBNEIsd0JBQXdCLEdBQUcsUUFBUSwyQkFBMkIsa0JBQWtCLDJCQUEyQixrQkFBa0IsYUFBYSxvQkFBb0IsS0FBSywwQkFBMEIseUJBQXlCLG9CQUFvQixtQkFBbUIsNkJBQTZCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsNkJBQTZCLGdDQUFnQyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0Isa0NBQWtDLHNCQUFzQix3QkFBd0IsY0FBYyxLQUFLLHlCQUF5QixvQkFBb0Isb0NBQW9DLDBCQUEwQixjQUFjLHVCQUF1QixzQkFBc0IsK0JBQStCLHdCQUF3QixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix3QkFBd0Isa0NBQWtDLG1CQUFtQiwyREFBMkQsNEJBQTRCLG9DQUFvQyxvQ0FBb0MscUJBQXFCLHNDQUFzQywyQkFBMkIsYUFBYSxXQUFXLDJDQUEyQyxtQ0FBbUMseUJBQXlCLFdBQVcsMkNBQTJDLG1DQUFtQyx5QkFBeUIsV0FBVywyQ0FBMkMsa0NBQWtDLHlCQUF5QixXQUFXLGdEQUFnRCxtQ0FBbUMseUJBQXlCLFdBQVcsU0FBUyxPQUFPLHFDQUFxQyxzQkFBc0IsK0JBQStCLGdDQUFnQyxnQ0FBZ0Msa0JBQWtCLDJCQUEyQix5QkFBeUIsK0JBQStCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLGNBQWMsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLHNCQUFzQix3QkFBd0IseUJBQXlCLG9DQUFvQyxtQ0FBbUMseUJBQXlCLFdBQVcsU0FBUyxPQUFPLG9CQUFvQixxQkFBcUIsT0FBTyxtQkFBbUIscUJBQXFCLE9BQU8saUNBQWlDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLGdDQUFnQyxrQkFBa0IsMkJBQTJCLHlCQUF5QiwrQkFBK0IsZ0NBQWdDLHlCQUF5Qix3QkFBd0IsY0FBYywwQkFBMEIsd0JBQXdCLGlDQUFpQywwQkFBMEIsbUJBQW1CLHNCQUFzQix3QkFBd0IseUJBQXlCLG9DQUFvQyxtQ0FBbUMseUJBQXlCLFdBQVcsU0FBUyxzQkFBc0IsdUJBQXVCLFNBQVMscUJBQXFCLHVCQUF1QixTQUFTLE9BQU8sd0JBQXdCLHNCQUFzQiwrQkFBK0Isd0JBQXdCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLG9CQUFvQix3QkFBd0IsdUJBQXVCLHdCQUF3QixrQ0FBa0MsbUJBQW1CLDJEQUEyRCw4QkFBOEIsb0NBQW9DLG9DQUFvQyxxQkFBcUIsc0NBQXNDLDJCQUEyQixhQUFhLFdBQVcsMkNBQTJDLG1DQUFtQyx5QkFBeUIsV0FBVywyQ0FBMkMsa0NBQWtDLHlCQUF5QixXQUFXLHFEQUFxRCxTQUFTLE9BQU8sS0FBSyxHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUN2blA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSw0SEFBTyxVQUFVLDRIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUM7QUFDbkMsZ0VBQWdFO0FBQ3pELFNBQVMsMEJBQTBCLENBQUMsS0FBb0I7SUFDN0QsRUFBRTtJQUNGLElBQU0sY0FBYyxHQUFvQjtRQUN0QyxFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO0tBQ0gsQ0FBQztJQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztRQUN4QixJQUFJLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQztRQUNWLENBQUM7UUFDRCxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQztBQUVNLFNBQVMseUJBQXlCLENBQ3ZDLFNBQWtCLEVBQ2xCLFNBQWlCO0lBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFHLENBQUMsY0FBSSxDQUFDLENBQUUsQ0FBQztZQUNoQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELDhCQUE4QjtBQUN2QixTQUFTLGFBQWEsQ0FDM0IsTUFBZ0IsRUFDaEIsYUFBMEIsRUFDMUIsSUFBWSxFQUNaLElBQVk7SUFFWixpSEFBaUg7SUFDakgsNERBQTREO0lBQzVELGdGQUFnRjtJQUNoRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLGVBQWUsRUFBRSxDQUFDO1FBQ3pELGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztTQUFNLENBQUM7UUFDTixhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7QUFDSCxDQUFDO0FBQ00sU0FBUyxxQkFBcUI7QUFDbkMsc0JBQXNCO0FBQ3RCLFdBQStCLEVBQy9CLG9CQUE4QjtJQUU5QixJQUFNLFNBQVMsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1FBQ3ZDLElBQUksS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BDLENBQUMsRUFBRSxDQUFDLENBQUMseUNBQXlDO1FBQ2hELENBQUM7UUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMseUNBQXlDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksV0FBVyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVc7Z0JBQ2xFLFNBQVM7WUFDWCxJQUFJLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDckMsU0FBUyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sU0FBUyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBQ0QsNkJBQTZCO0FBQ3RCLFNBQVMsaUNBQWlDLENBQy9DLE1BQWMsRUFDZCxLQUFlO0lBRWYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekUsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3BELGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDM0UsQ0FBQztTQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1FBQzVDLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDekUsZ0JBQWdCLENBQUMsV0FBVztZQUMxQiw4Q0FBOEMsQ0FBQztJQUNuRCxDQUFDO0FBQ0gsQ0FBQztBQUVELHdEQUF3RDtBQUNqRCxTQUFTLGVBQWUsQ0FDN0Isb0JBQThCLEVBQzlCLE1BQWlEO0lBRWpELElBQU0sU0FBUyxHQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWlCLEVBQUUsS0FBYTtRQUM1RCxJQUFJLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUM7UUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMseUNBQXlDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsOENBQThDO0lBRTlDLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLEVBQUUsR0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBSSxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDL0IsQ0FBQztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxzREFBSSxFQUFFLENBQUM7Z0JBQ3hDLHVCQUF1QjtnQkFDdkIsU0FBUyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsK0RBQStEO0FBQ3hELFNBQVMsZUFBZSxDQUFDLGNBQXVCO0lBQ3JELElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMzRCxDQUFDO1NBQU0sQ0FBQztRQUNOLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0FBQ0gsQ0FBQztBQUVELHNDQUFzQztBQUMvQixTQUFTLHNCQUFzQixDQUNwQyxTQUFvQyxFQUNwQyxJQUFZLEVBQ1osSUFBWSxFQUNaLFVBQWtCO0lBRWxCLEVBQUU7SUFDRixJQUFJLFNBQVMsS0FBSyxZQUFZLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDNUQsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO1NBQU0sSUFBSSxTQUFTLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDdEMsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFL0IsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztBQUNILENBQUM7QUFFTSxTQUFTLHlDQUF5QyxDQUN2RCxhQUE4QjtJQUU5QixhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztRQUM5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ00sU0FBUyx3QkFBd0IsQ0FDdEMsSUFBWSxFQUNaLElBQVksRUFDWixNQUFjLEVBQ2QsU0FBb0MsRUFDcEMsYUFBOEI7SUFFOUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7UUFDOUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvRCx3RkFBd0Y7SUFDeEYsSUFBTSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FDN0MsU0FBUyxFQUNULElBQUksRUFDSixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsSUFBSSxnQkFBZ0IsS0FBSyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0QsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO2FBQU0sSUFBSSxnQkFBZ0IsS0FBSyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2xELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0QsSUFBSSxFQUFFLENBQUM7WUFDUCxFQUFFO1FBQ0osQ0FBQzthQUFNLElBQUksZ0JBQWdCLEtBQUssZUFBZSxFQUFFLENBQUM7WUFDaEQsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUU7UUFDSixDQUFDO2FBQU0sSUFBSSxnQkFBZ0IsS0FBSyxhQUFhLEVBQUUsQ0FBQztZQUM5QyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9ELElBQUksRUFBRSxDQUFDO1lBQ1AsRUFBRTtRQUNKLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Na0M7QUFDbkM7SUFLRSxtQkFBWSxNQUFtQjtRQUFuQixvQ0FBbUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxpRUFBaUU7UUFDdkYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDVDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxPQUFPO2FBQ1I7WUFDRDtnQkFDRSxPQUFPO2dCQUNQLE9BQU87Z0JB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UyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLFFBQWtCLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDckQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUtFLGtCQUFZLFNBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUN2RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsdUJBQUksR0FBSixVQUFLLE1BQWM7UUFDakI7Ozs7O1dBS0c7UUFFSCxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ08sbUNBQWdCLEdBQXhCLFVBQXlCLElBQVksRUFBRSxJQUFZO1FBQ2pELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0QsNkJBQTZCO1lBQzdCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSztnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBVTtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssY0FBYztnQkFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbkUsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxjQUFjO2dCQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxF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QUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELG1FQUF3QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU1RSwwREFBMEQ7UUFDMUQsZ0VBQWdFO0lBQ2xFLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFDO0lBQzFDLG9GQUF5QyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDSCxTQUFTLGNBQWMsQ0FBQyxlQUE0QjtJQUNsRCxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUNsRCxDQUFDO0FBQ0QsU0FBUyx5QkFBeUI7SUFDaEMsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUMxQixDQUFDO0FBQ0QscUZBQXFGO0FBQ3JGLEVBQUU7QUFDRix1R0FBdUc7QUFDdkc7Ozs7Ozs7Ozs7OztHQVlHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9ET01BbmRVSS50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvcGxheWVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3NoaXBDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7IH1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDsgfVxuICBib2R5IC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgYm9keSAjZmluaWFsLWFubm91bmNlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYwcHg7IH1cbiAgICBib2R5ICNmaW5pYWwtYW5ub3VuY2VtZW50IC5hbm5vdW5jZW1lbnQtd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7IH1cbiAgYm9keSAjdGl0bGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZsZXg6IDE7IH1cbiAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogNDsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDUwcHg7IH1cbiAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCB7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikvcmVwZWF0KDEwLCAxZnIpOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxuICAgICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjcGxheWVyLXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMS1jZWxsLm91ci1zaGlwLWNvbG9yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI3BsYXllci1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDEtY2VsbC5taXNzaW5nLWF0dGFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwuY29ycmVjdC1hdHRhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNwbGF5ZXItc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQxLWNlbGwuZHJhZ2dpbmctc2hpcC1jb2xvciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7IH1cbiAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsIGxpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFweDsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC1ob3Jpem9udGFsIGxpIC5zaGlwLWNlbGwge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiBsaS5kcmFnZ2FibGUge1xuICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIGxpLmRyYWdnaW5nIHtcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDFweDsgfVxuICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gLnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCBsaSAuc2hpcC1jZWxsIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAuc2hpcHMtcGxhY2VtZW50LXZlcnRpY2FsIGxpLmRyYWdnYWJsZSB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uIC5zaGlwcy1wbGFjZW1lbnQtdmVydGljYWwgbGkuZHJhZ2dpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjU7IH1cbiAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDUwcHg7IH1cbiAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKS9yZXBlYXQoMTAsIDFmcik7IH1cbiAgICAgICAgYm9keSAjZ2FtZS1ib2FyZC1zZWN0aW9uICNlbmVteS1zZWN0aW9uIC5nYW1lYm9hcmQgLmdhbWVib2FyZDItY2VsbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cbiAgICAgICAgICBib2R5ICNnYW1lLWJvYXJkLXNlY3Rpb24gI2VuZW15LXNlY3Rpb24gLmdhbWVib2FyZCAuZ2FtZWJvYXJkMi1jZWxsOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQyLWNlbGwubWlzc2luZy1hdHRhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zOyB9XG4gICAgICAgIGJvZHkgI2dhbWUtYm9hcmQtc2VjdGlvbiAjZW5lbXktc2VjdGlvbiAuZ2FtZWJvYXJkIC5nYW1lYm9hcmQyLWNlbGwuY29ycmVjdC1hdHRhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7IH1cblxuLmJ1dHRvbnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnRkMsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFFekIsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXQyxjQUFjLEVBQUE7O0FBRWY7RUFDQyxjQUFjLEVBQUE7O0FBRWY7O0VBRUMsZ0JBQWdC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QixZQUFZLEVBQUE7O0FBUWpCO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8qIG1haW4gc2NzcyBzdHlsZSBzaGVldFxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbkBtaXhpbiBmbGV4Q2VudGVyRGlyKCRkaXJlY3Rpb24pIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0LmhpZGRlbiB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0I2ZpbmlhbC1hbm5vdW5jZW1lbnQge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRoZWlnaHQ6IDEwMHZoO1xcblxcdFxcdHdpZHRoOiAxMDB2dztcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcblxcdFxcdG9wYWNpdHk6IDAuODtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiA2MHB4O1xcblxcdFxcdC5hbm5vdW5jZW1lbnQtd3JhcHBlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0cGFkZGluZzogNDBweDtcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQjdGl0bGUtc2VjdGlvbiB7XFxuXFx0XFx0QGluY2x1ZGUgZmxleENlbnRlckRpcihyb3cpO1xcblxcdFxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdH1cXG5cXHQjZ2FtZS1ib2FyZC1zZWN0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZmxleDogNDtcXG5cXHRcXHQjcGxheWVyLXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IDUwcHg7XFxuXFx0XFx0XFx0LmdhbWVib2FyZCB7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiA2MDBweDtcXG5cXHRcXHRcXHRcXHR3aWR0aDogNjAwcHg7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRnYXA6IDNweDtcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbCB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0LmdhbWVib2FyZDEtY2VsbC5vdXItc2hpcC1jb2xvciB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQxLWNlbGwubWlzc2luZy1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMS1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMS1jZWxsLmRyYWdnaW5nLXNoaXAtY29sb3Ige1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5zaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogLTIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRcXHRcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcblxcdFxcdFxcdGxpIHtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdFxcdFxcdGdhcDogMXB4O1xcblxcdFxcdFxcdFxcdC5zaGlwLWNlbGwge1xcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyMHB4O1xcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjBweDtcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuODtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHRcXHRsaS5kcmFnZ2FibGUge1xcblxcdFxcdFxcdGN1cnNvcjogbW92ZTtcXG5cXHRcXHR9XFxuXFx0XFx0bGkuZHJhZ2dpbmcge1xcblxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHR9XFxuXFx0XFx0LnNoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogLTIwcHg7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRcXHRcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcblxcdFxcdFxcdGxpIHtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHRcXHRnYXA6IDFweDtcXG5cXHRcXHRcXHRcXHQuc2hpcC1jZWxsIHtcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMjBweDtcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDIwcHg7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRsaS5kcmFnZ2FibGUge1xcblxcdFxcdFxcdFxcdGN1cnNvcjogbW92ZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0bGkuZHJhZ2dpbmcge1xcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNlbmVteS1zZWN0aW9uIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiA1MHB4O1xcblxcdFxcdFxcdC5nYW1lYm9hcmQge1xcblxcdFxcdFxcdFxcdGhlaWdodDogNjAwcHg7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDYwMHB4O1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0XFx0Z2FwOiAzcHg7XFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcblxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQyLWNlbGwge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuMztcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdC5nYW1lYm9hcmQyLWNlbGwubWlzc2luZy1hdHRhY2sge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC4zO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQuZ2FtZWJvYXJkMi1jZWxsLmNvcnJlY3QtYXR0YWNrIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQvLyBleHRyYSBkZXRhaWw6IC5nYW1lYm9hcmQuc2hpcC1pcy1zdW5rIHt9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gJy4vcGxheWVyQ29tcG9uZW50JztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcENvbXBvbmVudCc7XG4vLyogZXh0cmFjdGluZyBsb2dpYyBmdW5jdGlvbnMgdG8gZXh0cmFjdCBmcm9tIERvY3VtZW50IHdlYiBwYWdlXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQ2VsbEFycmF5RnJvbUFuQXJyYXkoYXJyYXk6IEhUTUxFbGVtZW50W10pIHtcbiAgLy9cbiAgY29uc3QgcGxheWVyQ2VsbHNBcnI6IEhUTUxFbGVtZW50W11bXSA9IFtcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgICBbXSxcbiAgXTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgYXJyYXkuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggJSAxMCA9PT0gMCAmJiBpbmRleCAhPT0gMCkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcGxheWVyQ2VsbHNBcnJbY291bnRdLnB1c2goY2VsbCk7XG4gIH0pO1xuICByZXR1cm4gcGxheWVyQ2VsbHNBcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0aW5nSW5zaWRlR2FtZUJvYXJkKFxuICBnYW1lQm9hcmQ6IEVsZW1lbnQsXG4gIGNlbGxDbGFzczogc3RyaW5nXG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbENsYXNzKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jZWxsID0gYCR7aX0sJHtqfWA7XG4gICAgICBnYW1lQm9hcmQuYXBwZW5kKGNlbGwpO1xuICAgIH1cbiAgfVxufVxuXG4vLyogZnVuY3Rpb24gZm9yIG1hcmtpbmcgbG9naWNcbmV4cG9ydCBmdW5jdGlvbiBtYXJraW5nQXR0YWNrKFxuICB0YXJnZXQ6IENvbXB1dGVyLFxuICBlbGVtZW50VGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgeENvcjogbnVtYmVyLFxuICB5Q29yOiBudW1iZXJcbikge1xuICAvLyBFeHRyYS1kZXRhaWwgOmNoZWNraW5nIGlmIHRoZSBjb3Jyc3BvbmRpbmcgYXR0YWNrIGlzIHRoZSBsYXN0IGF0dGFjayB0aGF0IG1ha2luZyB0aGUgc2hpcC5pc1N1bmsoKSByZXR1cm4gdHJ1ZVxuICAvLyAtPiB0b2dnbGUgYWxsIGNlbGxzJyBvcGFjaXR5ID0gMC4yIHRoYXQgY29udGFpbiB0aGF0IHNoaXBcbiAgLy8gLT4gY2xhc3NMaXN0IHRvZ2dsZSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzaW5nIGF0dGFjayB8IGNvcnJlY3QgYXR0YWNrJylcbiAgaWYgKHRhcmdldC5nYW1lQm9hcmQubWFwW3lDb3JdW3hDb3JdID09PSAnbWlzc2luZ0F0dGFjaycpIHtcbiAgICBlbGVtZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21pc3NpbmctYXR0YWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0LWF0dGFjaycpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXJNYXJraW5nQXR0YWNrKFxuICAvLyByZW5vdmF0aW5nIGl0IGxhdGVyXG4gIGNvbXB1dGVyTWFwOiBDb21wdXRlclsnaGl0TWFwJ10sXG4gIHBsYXllckdhbWVib2FyZENlbGxzOiBOb2RlTGlzdFxuKSB7XG4gIGNvbnN0IGNlbGxBcnJheTogTm9kZVtdW10gPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICBsZXQgaSA9IDA7XG4gIHBsYXllckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICUgMTAgPT09IDAgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIGkrKzsgLy8gaXQgZG9lc24ndCBzZWVtIHRvIGJlIGEgY29udmVudGlvbiB3YXlcbiAgICB9XG4gICAgY2VsbEFycmF5W2ldLnB1c2goY2VsbCk7IC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGNvbnZlbnRpb24gd2F5XG4gIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChjb21wdXRlck1hcFtpXVtqXSA9PT0gJ25ldycgfHwgY29tcHV0ZXJNYXBbaV1bal0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGlmIChjb21wdXRlck1hcFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICBjZWxsQXJyYXlbaV1bal0uY2xhc3NMaXN0LmFkZCgnbWlzc2luZy1hdHRhY2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxBcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0LWF0dGFjaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8qIGZ1bmN0aW9uIGZvciBhbm5vdW5jZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2luZ0FuZERpc3BsYXlpbmdBbm5vdW5jZW1lbnQoXG4gIHBsYXllcjogUGxheWVyLFxuICBlbmVteTogQ29tcHV0ZXJcbikge1xuICBpZiAocGxheWVyLmdhbWVCb2FyZC5pc0ZsZWV0QWxsU3VuaygpKSB7XG4gICAgY29uc3QgYW5ub3VuY2VtZW50VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbm5vdW5jZW1lbnQtd3JhcHBlcicpO1xuICAgIGFubm91bmNlbWVudFRleHQudGV4dENvbnRlbnQgPSAnIHlvdSB3aW4geW91cnNlbGYuJztcbiAgICBhbm5vdW5jZW1lbnRUZXh0LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdmaW5pYWwtYW5ub3VuY2VtZW50Jyk7XG4gIH0gZWxzZSBpZiAoZW5lbXkuZ2FtZUJvYXJkLmlzRmxlZXRBbGxTdW5rKCkpIHtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlbWVudC13cmFwcGVyJyk7XG4gICAgYW5ub3VuY2VtZW50VGV4dC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmluaWFsLWFubm91bmNlbWVudCcpO1xuICAgIGFubm91bmNlbWVudFRleHQudGV4dENvbnRlbnQgPVxuICAgICAgJyB5b3UgbG9zZSB5b3Vyc2VsZiwgaGVuY2UgeW91IHdpbiB5b3Vyc2VsZi4gJztcbiAgfVxufVxuXG4vLyogY3JlYXRlIGEgZnVuY3Rpb24gdG8gZGlzcGxheSBjb2xvciBibHVlIGZvciBvdXIgc2hpcFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPdXJTaGlwcyhcbiAgcGxheWVyR2FtZWJvYXJkQ2VsbHM6IE5vZGVMaXN0LFxuICBvdXJNYXA6IEFycmF5PFNoaXAgfCAnZW1wdHknIHwgJ21pc3NpbmdBdHRhY2snPltdXG4pIHtcbiAgY29uc3QgY2VsbEFycmF5OiBIVE1MRWxlbWVudFtdW10gPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuICBsZXQgaSA9IDA7XG4gIHBsYXllckdhbWVib2FyZENlbGxzLmZvckVhY2goKGNlbGw6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGluZGV4ICUgMTAgPT09IDAgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgY2VsbEFycmF5W2ldLnB1c2goY2VsbCk7IC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGNvbnZlbnRpb24gd2F5XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhjZWxsQXJyYXkpOyAvLyBvYnRhaW4gY2VsbEFycmF5XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBpZiAob3VyTWFwW2ldW2pdID09PSAnZW1wdHknKSB7XG4gICAgICB9IGVsc2UgaWYgKG91ck1hcFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW2ksIGpdKTtcbiAgICAgICAgY2VsbEFycmF5W2ldW2pdLmNsYXNzTGlzdC5hZGQoJ291ci1zaGlwLWNvbG9yJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vdGhlIGZ1bmN0aW9uIHRvIHRvZ2dsZSB2ZXJ0aWNhbCBwbGFjZW1lbnQtc2hpcHMgdnMgaG9yaXpvbnRhbFxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihzaGlwc1BsYWNlbWVudDogRWxlbWVudCkge1xuICBpZiAoc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCcpKSB7XG4gICAgc2hpcHNQbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHMtcGxhY2VtZW50LWhvcml6b250YWwnKTtcbiAgICBzaGlwc1BsYWNlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwcy1wbGFjZW1lbnQtdmVydGljYWwnKTtcbiAgfSBlbHNlIHtcbiAgICBzaGlwc1BsYWNlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwcy1wbGFjZW1lbnQtdmVydGljYWwnKTtcbiAgICBzaGlwc1BsYWNlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwcy1wbGFjZW1lbnQtaG9yaXpvbnRhbCcpO1xuICB9XG59XG5cbi8vIGRpc3BsYXlpbmcgd2hpbGUgZHJhZ2dpbmcgZnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRHluYW1pY0RpcmVjdGlvbihcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnLFxuICB4Q29yOiBudW1iZXIsXG4gIHlDb3I6IG51bWJlcixcbiAgc2hpcExlbmd0aDogbnVtYmVyXG4pIHtcbiAgLy9cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHhDb3IgLSAxICsgc2hpcExlbmd0aCA+IDkpIHtcbiAgICByZXR1cm4gJ2hvcml6b250YWwgbGVmdCc7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICByZXR1cm4gJ2hvcml6b250YWwgcmlnaHQnO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgJiYgeUNvciAtIDEgKyBzaGlwTGVuZ3RoID4gOSkge1xuICAgIGNvbnNvbGUubG9nKHlDb3IgKyBzaGlwTGVuZ3RoKTtcblxuICAgIHJldHVybiAndmVydGljYWwgdXAnO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKHlDb3IgKyBzaGlwTGVuZ3RoKTtcblxuICAgIHJldHVybiAndmVydGljYWwgZG93bic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RGlzcGxheUFmdGVyTW91c2VPdXRPckFmdGVyRHJvcFNoaXBzKFxuICBnYW1lQm9hcmRDZWxsOiBIVE1MRWxlbWVudFtdW11cbikge1xuICBnYW1lQm9hcmRDZWxsLmZvckVhY2goKGNlbGxBcnJheSkgPT4ge1xuICAgIGNlbGxBcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nLXNoaXAtY29sb3InKTtcbiAgICB9KTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNoaXBXaGlsZURyYWdnaW5nKFxuICB4Q29yOiBudW1iZXIsXG4gIHlDb3I6IG51bWJlcixcbiAgbGVuZ3RoOiBudW1iZXIsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyxcbiAgZ2FtZUJvYXJkQ2VsbDogSFRNTEVsZW1lbnRbXVtdXG4pIHtcbiAgZ2FtZUJvYXJkQ2VsbC5mb3JFYWNoKChjZWxsQXJyYXkpID0+IHtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgfSk7XG4gIH0pO1xuICBnYW1lQm9hcmRDZWxsW3lDb3JdW3hDb3JdLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nLXNoaXAtY29sb3InKTtcbiAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdG8gcmV0dXJuIGNvcnJlY3QgZGlyZWN0aW9uIGJhc2VkIG9uIHhDb3IseUNvciwgYW5kIGlucHV0IGRpcmVjdGlvblxuICBjb25zdCBkeW5hbWljRGlyZWN0aW9uID0gcmV0dXJuRHluYW1pY0RpcmVjdGlvbihcbiAgICBkaXJlY3Rpb24sXG4gICAgeENvcixcbiAgICB5Q29yLFxuICAgIGxlbmd0aFxuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGR5bmFtaWNEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIHJpZ2h0Jykge1xuICAgICAgZ2FtZUJvYXJkQ2VsbFt5Q29yXVt4Q29yXS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgICB4Q29yKys7XG4gICAgfSBlbHNlIGlmIChkeW5hbWljRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCBsZWZ0Jykge1xuICAgICAgZ2FtZUJvYXJkQ2VsbFt5Q29yXVt4Q29yXS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1zaGlwLWNvbG9yJyk7XG4gICAgICB4Q29yLS07XG4gICAgICAvL1xuICAgIH0gZWxzZSBpZiAoZHluYW1pY0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsIGRvd24nKSB7XG4gICAgICBnYW1lQm9hcmRDZWxsW3lDb3JdW3hDb3JdLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nLXNoaXAtY29sb3InKTtcbiAgICAgIHlDb3IrKztcbiAgICAgIC8vXG4gICAgfSBlbHNlIGlmIChkeW5hbWljRGlyZWN0aW9uID09PSAndmVydGljYWwgdXAnKSB7XG4gICAgICBnYW1lQm9hcmRDZWxsW3lDb3JdW3hDb3JdLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nLXNoaXAtY29sb3InKTtcbiAgICAgIHlDb3ItLTtcbiAgICAgIC8vXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgbWFwOiBBcnJheTxTaGlwIHwgJ2VtcHR5JyB8ICdtaXNzaW5nQXR0YWNrJz5bXTtcbiAgY29uc3RydWN0b3IoaGVpZ2h0OiBudW1iZXIgPSAxMCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLyBnYW1lIGJvYXJkIGNvbnRhaW5zIGhlaWdodCBhbmQgd2lkdGggdG8gY3JlYXRlIGEgZ3JpZCBkaXNwbGF5LlxuICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNpemUgPSB0aGlzLmhlaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMubWFwID0gW1xuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbXB0eScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgIF0sXG4gICAgXTtcbiAgfVxuXG4gIHBsYWNlU2hpcChcbiAgICB4Q29yOiBudW1iZXIsXG4gICAgeUNvcjogbnVtYmVyLFxuICAgIG5ld1NoaXA6IFNoaXAsXG4gICAgZGlyZWN0aW9uOlxuICAgICAgfCAnaG9yaXpvbnRhbCBsZWZ0J1xuICAgICAgfCAndmVydGljYWwgZG93bidcbiAgICAgIHwgJ2hvcml6b250YWwgcmlnaHQnXG4gICAgICB8ICd2ZXJ0aWNhbCB1cCdcbiAgKSB7XG4gICAgLy8geENvciBhbmQgeUNvciBhcmUgaW5wdXQgZnJvbSBVc2VyIEludGVyZmFjZVxuICAgIGlmICh0aGlzLm1hcFt5Q29yXVt4Q29yXSAhPT0gJ2VtcHR5JykgcmV0dXJuO1xuXG4gICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCByaWdodCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB4Q29yKys7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgbGVmdCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB4Q29yLS07XG4gICAgICAgIC8vXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsIGRvd24nKSB7XG4gICAgICAgIHRoaXMubWFwW3lDb3JdW3hDb3JdID0gbmV3U2hpcDtcbiAgICAgICAgeUNvcisrO1xuICAgICAgICAvL1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCB1cCcpIHtcbiAgICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSBuZXdTaGlwO1xuICAgICAgICB5Q29yLS07XG4gICAgICAgIC8vXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJhbmRvbVBsYWNpbmdTaGlwcyhzaGlwOiBTaGlwKSB7XG4gICAgLy8gcG9wdWxhdGluZyBhcm91bmQgNDAgdW5pdHMgLT4gb25lIG9mIDYgdW5pdHMsIHR3byBvZiA1IHVuaXRzICwgdHdvIG9mIDQgdW5pdHMgdGhyZWUgb2YgMyB1bml0cyBhbmQgdGhyZWUgb2YgMiB1bml0cyBhbmQgb25lIG9mIDEgdW5pdHNcbiAgICAvLyBob3cgdG8gZG8gbWF0aC5yYW5kb20gd2l0aCB4Q29yIGFuZCB5Q29yP1xuICAgIC8vIGJlZm9yZSBwbGFjaW5nIGV2ZXJ5IHNoaXAgd2UgbmVlZCB0byBjaGVjayB0d28gY29uZGl0aW9uc1xuICAgIGNvbnN0IHJhbkRvbVNlZWQgPSB0aGlzLmhlaWdodCAtIDE7XG4gICAgbGV0IHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIGxldCB5Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAvLyByYW5kb20gZGlyZWN0aW9uIHRvb1xuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IHRoaXMucmV0dXJuUmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgd2hpbGUgKFxuICAgICAgIXRoaXMuY2hlY2tpbmdDb2xsaXNpb25BbmRPblRoZUJvYXJkKFxuICAgICAgICBzaGlwLmxlbmd0aCxcbiAgICAgICAgeENvcixcbiAgICAgICAgeUNvcixcbiAgICAgICAgcmFuZG9tRGlyZWN0aW9uXG4gICAgICApXG4gICAgKSB7XG4gICAgICB4Q29yID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuRG9tU2VlZCAtIDEpICsgMTtcbiAgICAgIHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIH1cbiAgICB0aGlzLnBsYWNlU2hpcCh4Q29yLCB5Q29yLCBzaGlwLCByYW5kb21EaXJlY3Rpb24pO1xuICAgIC8qKlxuICAgICAqICBvbmU6IGlzIHJhbmRvbSB4Q29yIGFuZCB5Q29yIGlzIHN0aWxsIG9uIHRoZSBib2FyZFxuICAgICAqIHR3byA6IGlzIHhDb3JzIGFuZCB5Q29ycyBvZiBlYWNoIHNoaXAgY29sbGlkZSB3aXRoIHRoZSBhbHJlYWR5IHBvcHVsYXRlZCBzaGlwcy5cbiAgICAgKi9cbiAgfVxuICByZXR1cm5SYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uU2VlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uU2VlZCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwgcmlnaHQnO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCBsZWZ0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsIGRvd24nO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAndmVydGljYWwgdXAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCBkb3duJztcbiAgICB9XG4gIH1cbiAgY2hlY2tpbmdDb2xsaXNpb25BbmRPblRoZUJvYXJkKFxuICAgIHNoaXBMZW5ndGg6IFNoaXBbJ2xlbmd0aCddLFxuICAgIHhDb3I6IG51bWJlcixcbiAgICB5Q29yOiBudW1iZXIsXG4gICAgZGlyZWN0aW9uOiBzdHJpbmdcbiAgKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh5Q29yID4gOSB8fCB5Q29yIDwgMCB8fCB4Q29yID4gOSB8fCB4Q29yIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gIT09ICdlbXB0eScpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsIHJpZ2h0Jykge1xuICAgICAgICB4Q29yKys7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwgbGVmdCcpIHtcbiAgICAgICAgeENvci0tO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCBkb3duJykge1xuICAgICAgICB5Q29yKys7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsIHVwJykge1xuICAgICAgICB5Q29yLS07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICAvL1tVSV0gY2xhc3MgbmVlZCB0byBwcmV2ZW50IHJlY2VpdmVBdHRhY2ggd2hlbiB0aGVyZSB3YXMgYW4gYXR0YWNrIG9yIG1pc3Npbmcgc2hvdCAgaW4gdGhpcyBjb29yZGluYXRlIGFscmVhZHkuXG4gICAgLy8gIGlmICh4Q29yID4gdGhpcy5oZWlnaHQgfHwgeUNvciA+IHRoaXMud2lkdGgpIHJldHVybjtcblxuICAgIGlmICh0aGlzLm1hcFt5Q29yXVt4Q29yXSA9PT0gJ2VtcHR5Jykge1xuICAgICAgdGhpcy5tYXBbeUNvcl1beENvcl0gPSAnbWlzc2luZ0F0dGFjayc7XG4gICAgICAvLyByZWNvcmQgY29vcmRpbmF0ZSBvZiB0aGUgbWlzc2VkIHNob3RcbiAgICAgIC8vIFtVSV0gZGlzcGxheSBtaXNzZWQgc2hvdFxuICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLm1hcFt5Q29yXVt4Q29yXS5oaXQoKTtcbiAgICB9XG4gIH1cbiAgLy9HYW1lIGJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG4gIGdldE1pc3NpbmdBdHRhY2tzQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgYXJyOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal0gPT09ICdtaXNzaW5nQXR0YWNrJykge1xuICAgICAgICAgIGFyci5wdXNoKFtqLCBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICAvLyAgICBHYW1lIGJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuICBpc0ZsZWV0QWxsU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMubWFwW2ldW2pdO1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaGFzQXRMZWFzdEFTaGlwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi4vc3JjL2dhbWVib2FyZENvbXBvbmVudCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zcmMvc2hpcENvbXBvbmVudCc7XG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ7XG4gIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gIH1cblxuICBwbGF5VHVybihvcHBvbmVudDogQ29tcHV0ZXIsIHhDb3I6IG51bWJlciwgeUNvcjogbnVtYmVyKSB7XG4gICAgb3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeENvciwgeUNvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIHtcbiAgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ7XG4gIGhpdE1hcDogc3RyaW5nW11bXTtcbiAgYXR0YWNrVGltZXM6IG51bWJlcjtcbiAgbGltaXRlZEF0dGFja1RpbWVzOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gICAgdGhpcy5oaXRNYXAgPSBbXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgICAgWyduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnXSxcbiAgICAgIFsnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3J10sXG4gICAgICBbJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldycsICduZXcnLCAnbmV3JywgJ25ldyddLFxuICAgIF07XG4gICAgdGhpcy5hdHRhY2tUaW1lcyA9IDA7XG4gICAgdGhpcy5saW1pdGVkQXR0YWNrVGltZXMgPSAxMDA7XG4gIH1cbiAgcGxheShwbGF5ZXI6IFBsYXllcikge1xuICAgIC8qKiBhbGdvcml0aG06XG4gICAgICogIHN0ZXAgMTogY2hlY2sgaWYgdGhpcy5oaXRNYXAgY29udGFpbnMgJ3BvdGVudGlhbCcgLT4gcGxheVJhbmRvbSgpIHNtYXJ0IHZlcnNpb25cbiAgICAgKiAgZWxzZSA6IHBsYXlSYW5kb20oKSByYW5kb20gdmVyc2lvblxuICAgICAqIHN0ZXAgMjogbG9naWMgZm9yIHRlcm1pbmF0aW5nICdwb3RlbnRpYWwnIC0+IHJlcGxhY2UgJ25ldycgdG8gJ3BvdGVudGlhbCcgYWdhaW5cbiAgICAgKiAgLT4gaWYgdGhlIHNoaXAuaXNTaW5rKCkgcmV0dXJuIHRydWUgLT4gcmVzZXQgYWxsICBhZGphY2VudCAncG90ZW50aWFsJyB0byAnbmV3J1xuICAgICAqL1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzdW5rU2hpcCAtPiBwb3RlbnRpYWxSZXNldHRpbmcoKVxuICAgIGlmICh0aGlzLnBvdGVudGlhbENoZWNraW5nKCkpIHtcbiAgICAgIHRoaXMucGxheVNtYXJ0KHBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheVJhbmRvbShwbGF5ZXIpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHBvdGVudGlhbE1hcmtpbmcoeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICBpZiAoeENvciArIDEgPj0gMCAmJiB4Q29yICsgMSA8IDUgJiYgeUNvciA+PSAwICYmIHlDb3IgPCA1KSB7XG4gICAgICAvLyBjb29yZGluYXRlIGlzIG9uIHRoZSBib2FyZFxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPT09ICduZXcnICYmXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSAhPT0gJ2F0dGFja2VkJyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gIT09ICdhdHRhY2tlZFNoaXAnXG4gICAgICApXG4gICAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3IgKyAxXSA9ICdwb3RlbnRpYWwnO1xuICAgIH1cbiAgICBpZiAoeENvciArIDEgPj0gMCAmJiB4Q29yICsgMSA8IDUgJiYgeUNvciArIDEgPj0gMCAmJiB5Q29yICsgMSA8IDUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciArIDFdW3hDb3JdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgPj0gMCAmJiB4Q29yIDwgNSAmJiB5Q29yIC0gMSA+PSAwICYmIHlDb3IgLSAxIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yIC0gMV1beENvcl0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gICAgaWYgKHhDb3IgLSAxID49IDAgJiYgeENvciAtIDEgPCA1ICYmIHlDb3IgPj0gMCAmJiB5Q29yIDwgNSkge1xuICAgICAgLy8gY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm9hcmRcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID09PSAnbmV3JyAmJlxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gIT09ICdhdHRhY2tlZCcgJiZcbiAgICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdICE9PSAnYXR0YWNrZWRTaGlwJ1xuICAgICAgKVxuICAgICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gPSAncG90ZW50aWFsJztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxSZXNldHRpbmcoeENvcjogbnVtYmVyLCB5Q29yOiBudW1iZXIpIHtcbiAgICAvLyBpZiB0aGUgc2hpcCBsZW5ndGggPiAxXG4gICAgLy8gYXNzdW1wdGlvbjogIGxvb3BpbmcgYW5kIGFjY2Vzc2luZyBldmVyeSBlbGVtZW50IG9mIHBsYXllci5nYW1lQm9hcmQubWFwXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzcG90IHdoZXJlIGluc3RhbmNlb2YgU2hpcCAmJiB0aGF0IHNoaXAuaXNTdW5rKClcbiAgICAvL3JldHVybiB0aGF0IHhDb3JzIGFuZCB5Q29ycyBpbnNpZGUgYW4gYXJyYXlcbiAgICAvLyBsb29waW5nIHRocm91Z2ggdGhlIGFycmF5IGFuZFxuICAgIC8vIGRvIHRoZSBiZWxvd1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yICsgMV0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciArIDFdID0gJ25ldyc7XG4gICAgaWYgKHRoaXMuaGl0TWFwW3lDb3IgKyAxXVt4Q29yXSA9PT0gJ3BvdGVudGlhbCcpXG4gICAgICB0aGlzLmhpdE1hcFt5Q29yICsgMV1beENvcl0gPSAnbmV3JztcbiAgICBpZiAodGhpcy5oaXRNYXBbeUNvciAtIDFdW3hDb3JdID09PSAncG90ZW50aWFsJylcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3IgLSAxXVt4Q29yXSA9ICduZXcnO1xuICAgIGlmICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yIC0gMV0gPT09ICdwb3RlbnRpYWwnKVxuICAgICAgdGhpcy5oaXRNYXBbeUNvcl1beENvciAtIDFdID0gJ25ldyc7XG4gIH1cbiAgcHJpdmF0ZSBwb3RlbnRpYWxDaGVja2luZygpIHtcbiAgICAvLz8gdGhpcyBtZXRob2QgZG9lcyBub3Qgd29yay5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdE1hcFtpXVtqXSA9PT0gJ3BvdGVudGlhbCcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwbGF5U21hcnQob3Bwb25lbnQ6IFBsYXllcikge1xuICAgIC8vIG5lZWQgdG8gaW1wbGVtZW50aW5nIGhvdyB0byByZXNldCBwb3RlbnRpYWwgcG9pbnRzXG4gICAgLy9cbiAgICBpZiAodGhpcy5hdHRhY2tUaW1lcyA+PSB0aGlzLmxpbWl0ZWRBdHRhY2tUaW1lcykgcmV0dXJuO1xuICAgIGNvbnN0IHJhbkRvbVNlZWQgPSBvcHBvbmVudC5nYW1lQm9hcmQuaGVpZ2h0IC0gMTtcbiAgICBsZXQgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgbGV0IHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIHdoaWxlICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSAhPT0gJ3BvdGVudGlhbCcpIHtcbiAgICAgIHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgICAgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrVGltZXMrKztcbiAgICBpZiAob3Bwb25lbnQuZ2FtZUJvYXJkLm1hcFt5Q29yXVt4Q29yXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3JdID0gJ2F0dGFja2VkU2hpcCc7XG4gICAgICB0aGlzLnBvdGVudGlhbE1hcmtpbmcoeENvciwgeUNvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGl0TWFwW3lDb3JdW3hDb3JdID0gJ2F0dGFja2VkJztcbiAgICB9XG4gICAgb3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeENvciwgeUNvcik7XG4gIH1cblxuICBwbGF5UmFuZG9tKG9wcG9uZW50OiBQbGF5ZXIpIHtcbiAgICBpZiAodGhpcy5hdHRhY2tUaW1lcyA+PSB0aGlzLmxpbWl0ZWRBdHRhY2tUaW1lcykgcmV0dXJuO1xuICAgIGNvbnN0IHJhbkRvbVNlZWQgPSBvcHBvbmVudC5nYW1lQm9hcmQuaGVpZ2h0IC0gMTtcbiAgICBsZXQgeENvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgbGV0IHlDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgIHdoaWxlICh0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSAhPT0gJ25ldycpIHtcbiAgICAgIC8vIHJlcGxhY2UgdHlwZU9mQXR0YWNrIGhlcmVcbiAgICAgIHhDb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByYW5Eb21TZWVkIC0gMSkgKyAxO1xuICAgICAgeUNvciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJhbkRvbVNlZWQgLSAxKSArIDE7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrVGltZXMrKztcbiAgICAvLyBtYXJraW5nIGxvZ2ljXG4gICAgaWYgKG9wcG9uZW50LmdhbWVCb2FyZC5tYXBbeUNvcl1beENvcl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZFNoaXAnO1xuICAgICAgdGhpcy5wb3RlbnRpYWxNYXJraW5nKHhDb3IsIHlDb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpdE1hcFt5Q29yXVt4Q29yXSA9ICdhdHRhY2tlZCc7XG4gICAgfVxuICAgIG9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb3IsIHlDb3IpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhpdFRpbWVzOiBudW1iZXI7XG4gIGlzU3Vua1N0YXR1czogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIgPSAxKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRUaW1lcyA9IDA7XG4gICAgdGhpcy5pc1N1bmtTdGF0dXMgPSBmYWxzZTtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0VGltZXMgPCB0aGlzLmxlbmd0aCkgdGhpcy5oaXRUaW1lcysrO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IHRoaXMuaGl0VGltZXMpIHtcbiAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3Vua1N0YXR1cztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDb21wb25lbnQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyQ29tcG9uZW50JztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmRDb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgbWFya2luZ0F0dGFjayxcbiAgY29tcHV0ZXJNYXJraW5nQXR0YWNrLFxuICBjaGVja2luZ0FuZERpc3BsYXlpbmdBbm5vdW5jZW1lbnQsXG4gIGRpc3BsYXlPdXJTaGlwcyxcbiAgY2hhbmdlRGlyZWN0aW9uLFxuICBkaXNwbGF5U2hpcFdoaWxlRHJhZ2dpbmcsXG4gIHJldHVybkR5bmFtaWNEaXJlY3Rpb24sXG4gIHBvcHVsYXRpbmdJbnNpZGVHYW1lQm9hcmQsXG4gIHJldHVybkNlbGxBcnJheUZyb21BbkFycmF5LFxuICByZXNldERpc3BsYXlBZnRlck1vdXNlT3V0T3JBZnRlckRyb3BTaGlwcyxcbn0gZnJvbSAnLi9ET01BbmRVSSc7XG50eXBlIGJhc2ljRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJztcbmNvbnN0IGdhbWVCb2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkMScpO1xuY29uc3QgZ2FtZUJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQyJyk7XG5jb25zdCBzaGlwc1BsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwcy1wbGFjZW1lbnQnKTtcbmNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb24tYnV0dG9uJyk7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idXR0b24nKTtcbmxldCBwbGF5ZXJTdGFydCA9IGZhbHNlO1xuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIXBsYXllci5nYW1lQm9hcmQuaGFzQXRMZWFzdEFTaGlwKCkpIHtcbiAgICBhbGVydCgneW91IG5lZWQgdG8gcGxhY2UgYXQgbGVhc3Qgb25lIHNoaXAgdG8gc3RhcnQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwbGF5ZXJTdGFydCA9IHRydWU7XG4gIHNoaXBzUGxhY2VtZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lJztcbn0pO1xucG9wdWxhdGluZ0luc2lkZUdhbWVCb2FyZChnYW1lQm9hcmQxLCAnZ2FtZWJvYXJkMS1jZWxsJyk7XG5wb3B1bGF0aW5nSW5zaWRlR2FtZUJvYXJkKGdhbWVCb2FyZDIsICdnYW1lYm9hcmQyLWNlbGwnKTtcblxuY29uc3QgcGxheWVyQ2VsbHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEtY2VsbCcpXTtcbmNvbnN0IHBsYXllckNlbGxzQXJyID0gcmV0dXJuQ2VsbEFycmF5RnJvbUFuQXJyYXkocGxheWVyQ2VsbHMpO1xuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihuZXcgR2FtZUJvYXJkKDEwKSk7XG5jb25zdCBlbmVteSA9IG5ldyBDb21wdXRlcihuZXcgR2FtZUJvYXJkKDEwKSk7XG5cbmRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIGNoYW5nZURpcmVjdGlvbihzaGlwc1BsYWNlbWVudClcbik7XG5cbmdhbWVCb2FyZDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIXBsYXllclN0YXJ0KSB7XG4gICAgYWxlcnQoJyBwbGFjZSBzaGlwcyBhbmQgY2xpY2sgdGhlICBzdGFydCBidXR0b24gdG8gcGxheS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXBsYXllci5nYW1lQm9hcmQuaXNGbGVldEFsbFN1bmsoKSAmJiAhZW5lbXkuZ2FtZUJvYXJkLmlzRmxlZXRBbGxTdW5rKCkpIHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICBlLnRhcmdldC5kYXRhc2V0LmNsaWNrZWQgIT09ICd0cnVlJyAmJlxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYW1lYm9hcmQyLWNlbGwnKVxuICAgICkge1xuICAgICAgZS50YXJnZXQuZGF0YXNldC5jbGlja2VkID0gJ3RydWUnO1xuXG4gICAgICAvLyBleHRyYWN0aW5nIHhDb3IgYW5kIHlDb3IgZnJvbSBkb2N1bWVudFxuICAgICAgY29uc3QgeENvciA9ICtlLnRhcmdldC5kYXRhc2V0LmNlbGwuc3BsaXQoJywnKVsxXTtcbiAgICAgIGNvbnN0IHlDb3IgPSArZS50YXJnZXQuZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMF07XG5cbiAgICAgIHBsYXllci5wbGF5VHVybihlbmVteSwgeENvciwgeUNvcik7XG5cbiAgICAgIGVuZW15LnBsYXkocGxheWVyKTtcbiAgICAgIC8vIGRpc3BsYXlFZmZlY3Qgb2YgYXR0YWNraW5nXG4gICAgICBtYXJraW5nQXR0YWNrKGVuZW15LCBlLnRhcmdldCwgeENvciwgeUNvcik7XG4gICAgICBjb21wdXRlck1hcmtpbmdBdHRhY2soZW5lbXkuaGl0TWFwLCBwbGF5ZXJDZWxscyk7XG4gICAgICAvLyBkaXNwbGF5IGFubm91bmNlbWVudCBpZiB0aGVyZSBpcyBhIHdpbm5lclxuICAgICAgY2hlY2tpbmdBbmREaXNwbGF5aW5nQW5ub3VuY2VtZW50KHBsYXllciwgZW5lbXkpO1xuICAgICAgLy8gICBwbGF5ZXJUdXJuID0gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuLy8qIHdoYXQgdG8gZG8gcmlnaHQgbm93OlxuXG5jb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZScpO1xubGV0IGN1cnJlbnREcmFnZ2VkT2JqZWN0OiBFbGVtZW50O1xubGV0IGRlc3RpbmF0aW9uOiBFdmVudFRhcmdldDtcbmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gIC8vZXZlbnRcbiAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcblxuICAgIGN1cnJlbnREcmFnZ2VkT2JqZWN0ID0gZHJhZ2dhYmxlO1xuICB9KTtcbiAgLy8gZXZlbnRcbiAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSArY3VycmVudERyYWdnZWRPYmplY3QuZGF0YXNldC5sZW5ndGg7XG4gICAgbGV0IGRpcmVjdGlvbjogYmFzaWNEaXJlY3Rpb247XG5cbiAgICAvLyBuZWVkIHRvIHN0b3AgdXNlciBmcm9tIGRyYWdnaW5nIHRoZSBkcmFnZ2FibGUgb2JqZWN0IHR3aWNlLlxuICAgIGlmIChkZXN0aW5hdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZDEtY2VsbCcpKSB7XG4gICAgICAvLyBob3cgdG8gZGVsZXRlIGRlc3RpbmF0aW9uIHZhcmlibGUgaGVyZSBvciByZXNldCBpdCBoZXJlP1xuICAgICAgY29uc3QgeENvciA9ICtkZXN0aW5hdGlvbi5kYXRhc2V0LmNlbGwuc3BsaXQoJywnKVsxXTtcbiAgICAgIGNvbnN0IHlDb3IgPSArZGVzdGluYXRpb24uZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMF07XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnREcmFnZ2VkT2JqZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgICdzaGlwcy1wbGFjZW1lbnQtdmVydGljYWwnXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgICAgY29uc3QgZHluYW1pY0RpcmVjdGlvbiA9IHJldHVybkR5bmFtaWNEaXJlY3Rpb24oXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgeENvcixcbiAgICAgICAgeUNvcixcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICAgKTtcblxuICAgICAgcGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHhDb3IsXG4gICAgICAgIHlDb3IsXG4gICAgICAgIG5ldyBTaGlwKHNoaXBMZW5ndGgpLFxuICAgICAgICBkeW5hbWljRGlyZWN0aW9uXG4gICAgICApO1xuICAgICAgZW5lbXkuZ2FtZUJvYXJkLnJhbmRvbVBsYWNpbmdTaGlwcyhuZXcgU2hpcChzaGlwTGVuZ3RoKSk7XG4gICAgICBkaXNwbGF5T3VyU2hpcHMocGxheWVyQ2VsbHMsIHBsYXllci5nYW1lQm9hcmQubWFwKTtcblxuICAgICAgcmVzZXRBZnRlckRyb3AoZS50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIHJlc2V0QWZ0ZXJEcm9wV2l0aE5vSW5wdXQoKTtcbiAgICB9XG4gIH0pO1xufSk7XG5nYW1lQm9hcmQxLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgZGlzcGxheU91clNoaXBzKHBsYXllckNlbGxzLCBwbGF5ZXIuZ2FtZUJvYXJkLm1hcCk7XG4gIGNvbnN0IEhUTUxFbGVtZW50ID0gZS50YXJnZXQ7IC8vIHJldmlldyBjb2RlIGxhdHRlclxuICBjb25zdCBzaGlwTGVuZ3RoID0gK2N1cnJlbnREcmFnZ2VkT2JqZWN0LmRhdGFzZXQubGVuZ3RoOyAvLyByZXZpZXcgY29kZSBsYXR0ZXJcbiAgZGVzdGluYXRpb24gPSBlLnRhcmdldDtcbiAgbGV0IGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJztcbiAgaWYgKFxuICAgIGN1cnJlbnREcmFnZ2VkT2JqZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgJ3NoaXBzLXBsYWNlbWVudC12ZXJ0aWNhbCdcbiAgICApXG4gICkge1xuICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICB9XG4gIGlmIChIVE1MRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZDEtY2VsbCcpKSB7XG4gICAgbGV0IHhDb3IgPSArZS50YXJnZXQuZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMV07XG4gICAgbGV0IHlDb3IgPSArZS50YXJnZXQuZGF0YXNldC5jZWxsLnNwbGl0KCcsJylbMF07XG4gICAgZGlzcGxheVNoaXBXaGlsZURyYWdnaW5nKHhDb3IsIHlDb3IsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbiwgcGxheWVyQ2VsbHNBcnIpO1xuXG4gICAgLy8gdXNpbmcgY29uZGl0aW9uIHN0YXRlbWVudCB0byBvbmx5IHRvZ2dsZSBvZmYgZW1wdHkgY2VsbFxuICAgIC8vIGJ5IHJlc2V0aW5nIGFsbCB0aGUgY2VsbCBiZWZvcmUgYXBwbHkgY29sb3IgLT55b3UgdG9nZ2xlIG9mZi5cbiAgfVxufSk7XG5cbmdhbWVCb2FyZDEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gIHJlc2V0RGlzcGxheUFmdGVyTW91c2VPdXRPckFmdGVyRHJvcFNoaXBzKHBsYXllckNlbGxzQXJyKTtcbiAgY29uc29sZS5sb2cocGxheWVyQ2VsbHNBcnIpO1xufSk7XG5mdW5jdGlvbiByZXNldEFmdGVyRHJvcChkZWxldGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIGRlc3RpbmF0aW9uID0gdW5kZWZpbmVkO1xuICBkZWxldGluZ0VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5Om5vbmU7Jztcbn1cbmZ1bmN0aW9uIHJlc2V0QWZ0ZXJEcm9wV2l0aE5vSW5wdXQoKSB7XG4gIGRlc3RpbmF0aW9uID0gdW5kZWZpbmVkO1xufVxuLy8gaG93IGNhbiB3ZSBwcmV2ZW50IHRoZSBwbGF5ZXIgZnJvbSBkcm9wcGluZyB0aGUgc2hpcHMgb3V0c2lkZSBnYW1lYm9hcmQgY29udGFpbmVyP1xuLy9cbi8vIHdlIG5lZWQgdG8gYWx3YXlzIHVwZGF0ZSBzaGlwcyBpbWFnZSBpbnNpZGUgcGxheWVyIGdhbWVib2FyZCB3aGlsZSB0aGUgcGxheWVyIGRyYWcgb3IgYWZ0ZXIgZHJvcHBpbmdcbi8qKipcbiAqXG4gKlxuICoqIGltcGxlbWVudGluZyB0aGUgY29uZGl0aW9uIHdoZW4gcGxheWVyIGNhbiBzdGFydCB0byBwbGF5IHRoZSBnYW1lXG4gKiogY3JlYXRlIGEgc3RhcnQgYnV0dG9uIHRoYXQgd2lsbCBsZXQgdGhlIHVzZXIgc3RhcnQgdGhlIGdhbWUuXG4gKiAqIGN1cnJlbnRseSByZW9yZ2FuaXppbmcgdGhlIGNvZGUgKHBvc3Rwb25lZClcbiAqICogc3RhcnQgdG8gbGV0IHBsYXllciBwbGF5IHRoZSBnYW1lIGFmdGVyIHBsYXllciBjbGljayB0aGUgYnV0dG9uIHBsYXkuXG4gKiAqLT4gZGVsZXRlIHNoaXAtcGxhY2VtZW50LCBkZWxldGUgdGhlIHN0YXJ0IGJ1dHRvblxuICogKiAtPiBkZXRlcm1pbmUgaG93IG1hbnkgc2hpcHMgcGxheWVyIGhhdmUgcGxhY2VkIC0+IHJhbmRvbSB0aGUgc2FtZSBzaGlwcyBmb3IgY29tcHV0ZXIuXG4gKlxuICogKiBBSSBzbWFydCBtb3ZlIGRvZXNuJ3Qgd29yayAtPiBjaGVjayBpdCBvdXQgYWdhaW4uXG4gKiAgKnJldmlld2luZyBvbGQgY29kZSAtPiBtYWtpbmcgaXQgYSBiZXR0ZXIgdmVyc2lvbiBieSByZWZhY3RvcmluZyAsIGRlY291cGxpbmcuXG4gKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
