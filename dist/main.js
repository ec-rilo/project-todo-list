/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* General Styling */\n\n:root {\n    --color-1: #0083FF;\n    --color-2: #C4C4C4;\n    --color-3: #9B9B9B;\n    --color-4: #FFF;\n    --color-5: #000;\n    --color-6: rgba(255, 255, 255, .3);\n    --font-1: 'Roboto';\n}\n\nbody {\n    font-family: var(--font-1);\n}\n\ninput {\n    box-sizing: border-box;\n}\n\n.black-overlay {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .7);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n/* Nav Bar Content */\n\n.nav-bar-container {\n    display: grid;\n    grid-template-rows: 60px;\n    grid-template-columns: 10px 50px 1fr 50px 100px 10px;\n    grid-template-areas:\n    \". menu-btn . add-item-btn login-btn .\";\n    height: 60px;\n    background-color: var(--color-1);\n    justify-items: center;\n    align-items: center;\n}\n\n.ham-btn-container {\n    grid-area: menu-btn;\n}\n\n.ham-btn-layer {\n    width: 35px;\n    height: 3px;\n    background-color: var(--color-4);\n    margin: 6px 0;\n    border-radius: 5px;\n}\n\n.increment-note-btn {\n    grid-area: add-item-btn;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    width: 30px;\n    height: 30px;\n}\n\n.increment-note-btn:hover {\n    background-color: var(--color-6);\n    width: 30px;\n    height: 30px;\n    border-radius: 5px;\n}\n\n.increment-note-btn:active {\n    transform: scale(.8);\n}\n\n.increment-note-text {\n    color: var(--color-4);\n    font-size: 25px;\n}\n\n.login-btn {\n    grid-area: login-btn;\n    padding: 8px 20px;\n    background-color: var(--color-4);\n    border-radius: 5px;\n    border: none;\n    font-family: var(--font-1);\n    font-size: 15px;\n    color: var(--color-1);\n    cursor: pointer;\n}\n\n/* Main Content Information */\n\n.content-container {\n    /* Subtracted 60 because it's the height of the nav bar*/\n    height: calc(100vh - 60px);\n    display: grid;\n    grid-template-columns: 350px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:\n    \"left-content-container right-content-container\";\n}\n\n/* Left Content Information */\n\n.left-content-container {\n    grid-area: left-content-container;\n    border-right: 2px solid var(--color-2);\n}\n\n.tabs-container {\n    margin-left: 50px;\n    margin-top: 50px;\n}\n\n.tab {\n    margin: 25px;\n}\n\n.single-tab {\n    text-decoration: none;\n    color: var(--color-5);\n}\n\n.inbox-tab {\n    font-weight: normal;\n}\n\n.today-tab {\n    font-weight: bold;\n}\n\n.this-week-tab {\n    font-weight: normal;\n}\n\n.projects-tab {\n    font-weight: normal;\n}\n\n/* Right content information */\n\n.right-content-container {\n    position: relative;\n}\n\n.right-content-info-container {\n    margin-top: 80px;\n    margin-left: 100px;\n}\n\n.title {\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.notes-container {\n    margin-top: 30px;\n    margin-left: 60px;\n}\n\n.note-container {\n    display: flex;\n    flex-direction: note;\n    align-items: center;\n    width: 95%;\n    height: 25px;\n    margin-top: 15px;\n    padding-bottom: 15px;\n    border-bottom: 2px solid #C4C4C4;\n}\n\n.separator {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.check-bubble {\n    border-radius: 50%;\n    margin-right: 30px;\n    height: 15px;\n    width: 15px;\n    background-color: rgba(0, 0, 0, .1);\n    border: 2px solid #C4C4C4;\n}\n\n.no-content-text {\n    display: block;\n    position: absolute;\n    color: var(--color-3);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    \n}\n\n/* Note Input creation */\n\n.note-input-container {\n    height: 30px;\n    width: 100%;\n}\n\n.note-input {\n    border: none;\n    height: 100%;\n    width: 100%;\n    font-size: 15px;\n}\n\n.note-input:focus {\n    outline: none;\n}\n\n/* Card styling */\n\n.card {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    height: 400px;\n    width: 750px;\n    border-radius: 50px;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.card-content-container {\n    height: 360px;\n    width: 90%;\n    background-color: none;\n}\n\n.card-title-container {\n    position: relative;\n    height: 50px;\n}\n\n.card-title-input {\n    height: 100%;\n    width: 100%;\n    font-size: 35px;\n    border: 0;\n    outline: none;\n    font-weight: bold;\n}\n\n.horizontal-line {\n    background-color: #C4C4C4;\n    width: 100%;\n    height: 2px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n\n.card-content {\n    display: grid;\n    height: 220px;\n    grid-template-columns: 1fr 50px 1fr;\n    grid-template-rows: 60px 1fr 60px 1fr 60px;\n    grid-template-areas:\n        \"d . date\"\n        \"d . .\"\n        \"d . priority\"\n        \"d . .\"\n        \"d . project\";\n    background-color: none; /* Use yellow to debug */\n}\n\n.card-description-container {\n    grid-area: d;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n#description-input {\n    resize: none;\n    height: 100%;\n}\n\n.card-date-container {\n    grid-area: date;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-priority-container {\n    grid-area: priority;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-project-container {\n    grid-area: project;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-input {\n    width: 100%;\n    height: 30px;\n}\n\n.input-title {\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n.input-styling {\n    border: 2px solid #C4C4C4;\n    outline: none;\n}\n\n.submission-btns-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 80px;\n    background-color: none; /* Use green to debug */\n    gap: 20px;\n}\n\n.submit-btn {\n    height: 35px;\n    width: 90px;\n    background-color: #0083FF;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer\n}\n\n.reset-btn {\n    height: 35px;\n    width: 90px;\n    border: 2px solid #9B9B9B;\n    border-radius: 5px;\n    color: #9B9B9B;\n    transition: .2s background-color, .2s color;\n    cursor: pointer;\n}\n\n.reset-btn:hover {\n    background-color: #9B9B9B;\n    color: white;\n}\n\n.reset-btn:active {\n    background-color: white;\n}\n\n/* Close Button */\n\n/* Adjust width or height of x using the width or height properties in\n.close:before,\n.close:after {...} \n\nAdjust background-color in .close{...}\n*/\n\n.close {\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translate(0, -50%);\n    display: block;\n    width: 30px;\n    height: 30px;\n    font-size: 0;\n    transition: .2s opacity;\n}\n.close:before, \n.close:after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 2px;\n    height: 20px;\n    background-color: #9B9B9B;\n    transform: rotate(45deg) translate(-50%, -50%);\n    transform-origin: top left;\n    content: '';\n}\n.close:after {\n    transform: rotate(-45deg) translate(-50%, -50%);\n}\n\n.close:hover {\n    opacity: .5;\n}\n\n.close:active {\n    opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* General Styling */\n\n:root {\n    --color-1: #0083FF;\n    --color-2: #C4C4C4;\n    --color-3: #9B9B9B;\n    --color-4: #FFF;\n    --color-5: #000;\n    --color-6: rgba(255, 255, 255, .3);\n    --font-1: 'Roboto';\n}\n\nbody {\n    font-family: var(--font-1);\n}\n\ninput {\n    box-sizing: border-box;\n}\n\n.black-overlay {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .7);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n/* Nav Bar Content */\n\n.nav-bar-container {\n    display: grid;\n    grid-template-rows: 60px;\n    grid-template-columns: 10px 50px 1fr 50px 100px 10px;\n    grid-template-areas:\n    \". menu-btn . add-item-btn login-btn .\";\n    height: 60px;\n    background-color: var(--color-1);\n    justify-items: center;\n    align-items: center;\n}\n\n.ham-btn-container {\n    grid-area: menu-btn;\n}\n\n.ham-btn-layer {\n    width: 35px;\n    height: 3px;\n    background-color: var(--color-4);\n    margin: 6px 0;\n    border-radius: 5px;\n}\n\n.increment-note-btn {\n    grid-area: add-item-btn;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    width: 30px;\n    height: 30px;\n}\n\n.increment-note-btn:hover {\n    background-color: var(--color-6);\n    width: 30px;\n    height: 30px;\n    border-radius: 5px;\n}\n\n.increment-note-btn:active {\n    transform: scale(.8);\n}\n\n.increment-note-text {\n    color: var(--color-4);\n    font-size: 25px;\n}\n\n.login-btn {\n    grid-area: login-btn;\n    padding: 8px 20px;\n    background-color: var(--color-4);\n    border-radius: 5px;\n    border: none;\n    font-family: var(--font-1);\n    font-size: 15px;\n    color: var(--color-1);\n    cursor: pointer;\n}\n\n/* Main Content Information */\n\n.content-container {\n    /* Subtracted 60 because it's the height of the nav bar*/\n    height: calc(100vh - 60px);\n    display: grid;\n    grid-template-columns: 350px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:\n    \"left-content-container right-content-container\";\n}\n\n/* Left Content Information */\n\n.left-content-container {\n    grid-area: left-content-container;\n    border-right: 2px solid var(--color-2);\n}\n\n.tabs-container {\n    margin-left: 50px;\n    margin-top: 50px;\n}\n\n.tab {\n    margin: 25px;\n}\n\n.single-tab {\n    text-decoration: none;\n    color: var(--color-5);\n}\n\n.inbox-tab {\n    font-weight: normal;\n}\n\n.today-tab {\n    font-weight: bold;\n}\n\n.this-week-tab {\n    font-weight: normal;\n}\n\n.projects-tab {\n    font-weight: normal;\n}\n\n/* Right content information */\n\n.right-content-container {\n    position: relative;\n}\n\n.right-content-info-container {\n    margin-top: 80px;\n    margin-left: 100px;\n}\n\n.title {\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.notes-container {\n    margin-top: 30px;\n    margin-left: 60px;\n}\n\n.note-container {\n    display: flex;\n    flex-direction: note;\n    align-items: center;\n    width: 95%;\n    height: 25px;\n    margin-top: 15px;\n    padding-bottom: 15px;\n    border-bottom: 2px solid #C4C4C4;\n}\n\n.separator {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.check-bubble {\n    border-radius: 50%;\n    margin-right: 30px;\n    height: 15px;\n    width: 15px;\n    background-color: rgba(0, 0, 0, .1);\n    border: 2px solid #C4C4C4;\n}\n\n.no-content-text {\n    display: block;\n    position: absolute;\n    color: var(--color-3);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    \n}\n\n/* Note Input creation */\n\n.note-input-container {\n    height: 30px;\n    width: 100%;\n}\n\n.note-input {\n    border: none;\n    height: 100%;\n    width: 100%;\n    font-size: 15px;\n}\n\n.note-input:focus {\n    outline: none;\n}\n\n/* Card styling */\n\n.card {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    height: 400px;\n    width: 750px;\n    border-radius: 50px;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.card-content-container {\n    height: 360px;\n    width: 90%;\n    background-color: none;\n}\n\n.card-title-container {\n    position: relative;\n    height: 50px;\n}\n\n.card-title-input {\n    height: 100%;\n    width: 100%;\n    font-size: 35px;\n    border: 0;\n    outline: none;\n    font-weight: bold;\n}\n\n.horizontal-line {\n    background-color: #C4C4C4;\n    width: 100%;\n    height: 2px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n\n.card-content {\n    display: grid;\n    height: 220px;\n    grid-template-columns: 1fr 50px 1fr;\n    grid-template-rows: 60px 1fr 60px 1fr 60px;\n    grid-template-areas:\n        \"d . date\"\n        \"d . .\"\n        \"d . priority\"\n        \"d . .\"\n        \"d . project\";\n    background-color: none; /* Use yellow to debug */\n}\n\n.card-description-container {\n    grid-area: d;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n#description-input {\n    resize: none;\n    height: 100%;\n}\n\n.card-date-container {\n    grid-area: date;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-priority-container {\n    grid-area: priority;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-project-container {\n    grid-area: project;\n    display: flex;\n    flex-direction: column;\n}\n\n.card-input {\n    width: 100%;\n    height: 30px;\n}\n\n.input-title {\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n.input-styling {\n    border: 2px solid #C4C4C4;\n    outline: none;\n}\n\n.submission-btns-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 80px;\n    background-color: none; /* Use green to debug */\n    gap: 20px;\n}\n\n.submit-btn {\n    height: 35px;\n    width: 90px;\n    background-color: #0083FF;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer\n}\n\n.reset-btn {\n    height: 35px;\n    width: 90px;\n    border: 2px solid #9B9B9B;\n    border-radius: 5px;\n    color: #9B9B9B;\n    transition: .2s background-color, .2s color;\n    cursor: pointer;\n}\n\n.reset-btn:hover {\n    background-color: #9B9B9B;\n    color: white;\n}\n\n.reset-btn:active {\n    background-color: white;\n}\n\n/* Close Button */\n\n/* Adjust width or height of x using the width or height properties in\n.close:before,\n.close:after {...} \n\nAdjust background-color in .close{...}\n*/\n\n.close {\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translate(0, -50%);\n    display: block;\n    width: 30px;\n    height: 30px;\n    font-size: 0;\n    transition: .2s opacity;\n}\n.close:before, \n.close:after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 2px;\n    height: 20px;\n    background-color: #9B9B9B;\n    transform: rotate(45deg) translate(-50%, -50%);\n    transform-origin: top left;\n    content: '';\n}\n.close:after {\n    transform: rotate(-45deg) translate(-50%, -50%);\n}\n\n.close:hover {\n    opacity: .5;\n}\n\n.close:active {\n    opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ }),

/***/ "./src/modules/note-logic.js":
/*!***********************************!*\
  !*** ./src/modules/note-logic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchTabs": () => (/* binding */ switchTabs),
/* harmony export */   "incrementNoteListener": () => (/* binding */ incrementNoteListener),
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });


'use strict'

/* Note Classes */

class Note {
    constructor(noteTitle, noteTime, noteText) {
        this.title = noteTitle;
        this.text = noteText;
        this.time = noteTime;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get text() {
        return this._text;
    }

    set text(newText) {
        this._text = newText;
    }

    get time() {
        return this._time;
    }

    set time(newTime) {
        this._time = newTime;
    }
}

class Tab {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(newName) {
        this._name = newName;
    }
}

/* DOM creation functions */

function closeCard() {
    let blackOverlay = document.querySelector('.black-overlay');
    let body = document.querySelector('body');

    body.removeChild(blackOverlay);
}

function createCard() {
    let card = document.createElement('form');
    card.classList.add('card');
    card.setAttribute('autocomplete', 'off');
    card.setAttribute('action', '#');
    card.setAttribute('method', 'GET');

    let cardContentContainer = document.createElement('div')
    cardContentContainer.classList.add('card-content-container');
    card.appendChild(cardContentContainer);

    let cardTitleContainer = document.createElement('div');
    cardTitleContainer.classList.add('card-title-container');
    cardContentContainer.appendChild(cardTitleContainer);

    let title = document.createElement('input');
    title.setAttribute('id', 'title-input');
    title.classList.add('card-title-input');
    title.setAttribute('type', 'text');
    title.setAttribute('maxLength', '20');
    title.setAttribute('placeholder', 'Enter Task Name');
    title.setAttribute('required', '');
    cardTitleContainer.appendChild(title);

    let closeBtn = document.createElement('a');
    closeBtn.setAttribute('href', '#');
    closeBtn.classList.add('close');
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.setAttribute('role', 'button');
    closeBtn.innerHTML = 'close';
    closeBtn.addEventListener('click', () => {
        closeCard();
    });
    cardTitleContainer.appendChild(closeBtn);

    let horizontalLine = document.createElement('div');
    horizontalLine.classList.add('horizontal-line');
    cardContentContainer.appendChild(horizontalLine);

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContentContainer.appendChild(cardContent);

    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('card-description-container');
    cardContent.appendChild(descriptionContainer);

    let descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('input-title');
    descriptionLabel.setAttribute('for', 'description-input');
    descriptionLabel.innerHTML = 'Description:';
    descriptionContainer.appendChild(descriptionLabel);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('input-styling');
    descriptionInput.setAttribute('id', 'description-input');
    descriptionInput.setAttribute('maxLength', '400');
    descriptionInput.setAttribute('required', '');
    descriptionContainer.appendChild(descriptionInput);

    let dateContainer = document.createElement('div');
    dateContainer.classList.add('card-date-container');
    cardContent.appendChild(dateContainer);

    let dateLabel = document.createElement('label');
    dateLabel.classList.add('input-title');
    dateLabel.setAttribute('for', 'date-input');
    dateLabel.innerHTML = 'Due Date:';
    dateContainer.appendChild(dateLabel);

    let dateInput = document.createElement('input');
    dateInput.classList.add('input-styling', 'card-input');
    dateInput.setAttribute('id', 'date-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('required', '');
    dateContainer.appendChild(dateInput);

    let priorityContainer = document.createElement('div');
    priorityContainer.classList.add('card-priority-container');
    cardContent.appendChild(priorityContainer);

    let priorityLabel = document.createElement('label');
    priorityLabel.classList.add('input-title');
    priorityLabel.setAttribute('for', 'priority-input');
    priorityLabel.innerHTML = 'Priority:';
    priorityContainer.appendChild(priorityLabel);

    let priorityInputContainer = document.createElement('select');
    priorityInputContainer.classList.add('input-styling', 'card-input');
    priorityInputContainer.setAttribute('type', 'text');
    priorityInputContainer.setAttribute('id', 'priority-input');
    priorityInputContainer.setAttribute('required', '');
    priorityContainer.appendChild(priorityInputContainer);

    let priorityOption1 = document.createElement('option');
    priorityOption1.setAttribute('value', 'low');
    priorityOption1.innerHTML = 'Low';
    priorityInputContainer.appendChild(priorityOption1);

    let priorityOption2 = document.createElement('option');
    priorityOption2.setAttribute('value', 'medium');
    priorityOption2.innerHTML = 'Medium';
    priorityInputContainer.appendChild(priorityOption2);

    let priorityOption3 = document.createElement('option');
    priorityOption3.setAttribute('value', 'high');
    priorityOption3.innerHTML = 'High';
    priorityInputContainer.append(priorityOption3);

    let projectContainer = document.createElement('div');
    projectContainer.classList.add('card-project-container');
    cardContent.appendChild(projectContainer);

    let projectLabel = document.createElement('label');
    projectLabel.classList.add('input-title');
    projectLabel.setAttribute('for', 'project-input');
    projectLabel.innerHTML = 'Project:';
    projectContainer.appendChild(projectLabel);

    let projectInputContainer = document.createElement('select');
    projectInputContainer.classList.add('input-styling', 'card-input');
    projectInputContainer.setAttribute('type', 'text');
    projectInputContainer.setAttribute('id', 'project-input');
    projectInputContainer.setAttribute('required', '');
    projectContainer.appendChild(projectInputContainer);

    let projectOption1 = document.createElement('option');
    projectOption1.setAttribute('value', 'inbox');
    projectOption1.innerHTML = 'Inbox';
    projectInputContainer.appendChild(projectOption1);

    let submissionBtnsContainer = document.createElement('div');
    submissionBtnsContainer.classList.add('submission-btns-container');
    cardContentContainer.appendChild(submissionBtnsContainer);

    let resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.setAttribute('type', 'reset');
    resetBtn.innerHTML = 'Reset Task';
    submissionBtnsContainer.appendChild(resetBtn);

    let submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Add Task';
    submissionBtnsContainer.appendChild(submitBtn);

    return card;
}

function createSimpleNote() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    
    const checkBubble = document.createElement('div');
    checkBubble.classList.add('check-bubble');
    noteContainer.appendChild(checkBubble);
        
    let bodyText = document.createElement('p');
    bodyText.classList.add('note-text');
    bodyText.innerHTML = `${this._text}`;
    noteContainer.appendChild(bodyText);

    return noteContainer;
}

function createComplexNote() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    
    const checkBubble = document.createElement('div');
    checkBubble.classList.add('check-bubble');
    noteContainer.appendChild(checkBubble);
    
    let noteTime = document.createElement('p');
    noteTime.classList.add('note-text', 'note-time');
    noteTime.innerHTML = `${this.time}`;
    noteContainer.appendChild(noteTime);

    let separator = document.createElement('p');
    separator.classList.add('separator')
    separator.innerHTML = ' - ';
    noteContainer.appendChild(separator);

    let noteTitle = document.createElement('p');
    noteTitle.classList.add('note-text');
    noteTitle.innerHTML = `${this.title}`;
    noteContainer.appendChild(noteTitle);

    return noteContainer;
}

function createNoteInput() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');

    let bubble = document.createElement('div');
    bubble.classList.add('check-bubble');
    noteContainer.appendChild(bubble);

    let noteInputContainer = document.createElement('div');
    noteInputContainer.classList.add('note-input-container');
    noteContainer.appendChild(noteInputContainer);

    let noteInput = document.createElement('input');
    noteInput.classList.add('note-input');
    noteInput.setAttribute('type', 'text');
    noteInput.setAttribute('placeholder', 'Add a task');
    noteInputContainer.appendChild(noteInput);

    return noteContainer;
}

function createBlackOverlay() {
    let blackOverlay = document.createElement('div');
    blackOverlay.classList.add('black-overlay');

    return blackOverlay;
}

function removeBlackOverlay() {
    let blackOverlay = document.createElement('.black-overlay');
    blackOverlay.remove();
}

/* Note Logic */

function addNoContentText(noContentText) {    
    noContentText.style.display = 'block'; 
}

function removeNoContentText(noContentText) {
    noContentText.style.display = 'none';
}

function loadNotes(tabName, tabStorageArr) {
    const notesContainer = document.querySelector('.notes-container');

    let numOfNotes = inboxNotesArr.length;
    for (let i = 0; i < numOfNotes; ++i) {
        
    }   
}

function populateNotes(title) {
    const noContentText = document.querySelector('.no-content-text');
    
    if (title.innerHTML === 'Inbox') {
        // if (inboxNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, inboxNotesArr);
        //     }
        // }

        noContentText.style.color = 'red';
    }
    else if (title.innerHTML === 'Today') {
        // if (todayNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, todayNotesArr);
        //     }
        // }

        noContentText.style.color = 'green';
    }
    else if (title.innerHTML === 'This Week') {
        // if (thisWeekNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, thisWeekNotesArr);
        //     }
        // }

        noContentText.style.color = 'blue';
    }
}

function createNoteObject(titleValue, descriptionValue, dateValue, priorityValue, projectValue) {
    let note = {
        title: titleValue,
        description: descriptionValue,
        date: dateValue,
        priority: priorityValue,
        project: projectValue,
    }

    return note;
}

function createNote() {
    let titleValue = document.getElementById('title-input').value;
    let descripValue = document.getElementById('description-input').value;
    let dateValue = document.getElementById('date-input').value;
    let priorityValue = document.getElementById('priority-input').value;
    let projectValue = document.getElementById('project-input').value;

    let newNote = createNoteObject(titleValue, descripValue, dateValue, priorityValue, projectValue);

    return newNote;
}

function openCard() {
    let body = document.querySelector('body');

    let blackOverlay = createBlackOverlay();
    let card = createCard();
    blackOverlay.appendChild(card);

    body.appendChild(blackOverlay);
}

function handleForm(e) {e.preventDefault();}

function getInboxStorage() {
    let inboxNotesArr = JSON.parse(localStorage.getItem('inboxNotesArr'));
    return inboxNotesArr;
}

let incrementNoteListener = (() => {
    let body = document.querySelector('body');
    let title = document.querySelector('.title');
    let titleName = title.innerHTML;

    let incrementBtn = document.querySelector('.increment-note-btn');
    incrementBtn.addEventListener('click', () => {
        openCard();

        let card = document.querySelector('.card');
        card.addEventListener('submit', () => {
            handleForm;

            let note = createNote();

            let projectTab = note.project
            if (projectTab === 'inbox') {
                let inboxStorage = getInboxStorage();
                
                inboxStorage.push(note);
                localStorage.setItem('inboxNotesArr', JSON.stringify(inboxStorage));
            }
            
            closeCard();
        });
    });
});

let switchTabs = (() => {
    const pageTitle = document.querySelector('.title');

    if (pageTitle.innerHTML === 'Inbox') {
        populateNotes(pageTitle);
    }
    else if (pageTitle.innerHTML === 'Today') {
        populateNotes(pageTitle);
    }
    else if (pageTitle.innerHTML === 'This Week') {
        populateNotes(pageTitle);
    }
});



/***/ }),

/***/ "./src/modules/tab-logic.js":
/*!**********************************!*\
  !*** ./src/modules/tab-logic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabPagePopulation": () => (/* binding */ tabPagePopulation),
/* harmony export */   "defaultTabLoad": () => (/* binding */ defaultTabLoad)
/* harmony export */ });
/* harmony import */ var _note_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-logic.js */ "./src/modules/note-logic.js");


const tabPagePopulation = (() => {
    const inboxTab = document.querySelector('.inbox-tab');
    const todayTab = document.querySelector('.today-tab');
    const thisWeekTab = document.querySelector('.this-week-tab');
    const projectsTab = document.querySelector('.projects-tab');
    const tabArr = [inboxTab, todayTab, thisWeekTab, projectsTab];
    let pgTitle = document.querySelector('.title');

    inboxTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        inboxTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Inbox';
        (0,_note_logic_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs)();
    });

    todayTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        todayTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Today';
        (0,_note_logic_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs)()
    });

    thisWeekTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        thisWeekTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'This Week';
        (0,_note_logic_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs)()
    });

});

function defaultTabLoad() {
    (0,_note_logic_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs)();
}



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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_tab_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-logic.js */ "./src/modules/tab-logic.js");
/* harmony import */ var _modules_note_logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/note-logic.js */ "./src/modules/note-logic.js");






(0,_modules_note_logic_js__WEBPACK_IMPORTED_MODULE_3__.incrementNoteListener)();

if(!localStorage.getItem("inboxNotesArr")) {
    localStorage.setItem( "inboxNotesArr", JSON.stringify([]) );
}

if(!localStorage.getItem("todayNotesArr")) {
    localStorage.setItem( "todayNotesArr", JSON.stringify([]) );
}

if(!localStorage.getItem("thisWeekNotesArr")) {
    localStorage.setItem( "thisWeekNotesArr", JSON.stringify([]) );
}

// let storedInboxNotes = JSON.parse(localStorage.getItem('inboxNotes'));
// The above is how to call the array set in local storage

init();

function init() {
    (0,_modules_tab_logic_js__WEBPACK_IMPORTED_MODULE_2__.defaultTabLoad)();
    (0,_modules_tab_logic_js__WEBPACK_IMPORTED_MODULE_2__.tabPagePopulation)();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ub3RlLWxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFiLWxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQ3BCO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLDZEQUE2QjtBQUN0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VUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsT0FBTyx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyx3QkFBd0IsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxN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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixXQUFXO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDO0FBQ0EsMEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixnQkFBZ0I7O0FBRW5DLEs7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOWEwQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsZ0NBQWdDO0FBQy9EO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQSwrQkFBK0IsZ0NBQWdDO0FBQy9EO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQSwrQkFBK0IsZ0NBQWdDO0FBQy9EO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCLEtBQUs7O0FBRUwsQ0FBQzs7QUFFRDtBQUNBLElBQUksMERBQVU7QUFDZDs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ0Q7QUFDOEI7QUFDSDtBQUNROztBQUU5RCw2RUFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCLElBQUksd0VBQWlCO0FBQ3JCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogR2VuZXJhbCBTdHlsaW5nICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLTE6ICMwMDgzRkY7XFxuICAgIC0tY29sb3ItMjogI0M0QzRDNDtcXG4gICAgLS1jb2xvci0zOiAjOUI5QjlCO1xcbiAgICAtLWNvbG9yLTQ6ICNGRkY7XFxuICAgIC0tY29sb3ItNTogIzAwMDtcXG4gICAgLS1jb2xvci02OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcXG4gICAgLS1mb250LTE6ICdSb2JvdG8nO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMSk7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJsYWNrLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuLyogTmF2IEJhciBDb250ZW50ICovXFxuXFxuLm5hdi1iYXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcHggNTBweCAxZnIgNTBweCAxMDBweCAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiBtZW51LWJ0biAuIGFkZC1pdGVtLWJ0biBsb2dpbi1idG4gLlxcXCI7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhhbS1idG4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51LWJ0bjtcXG59XFxuXFxuLmhhbS1idG4tbGF5ZXIge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBtYXJnaW46IDZweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbmNyZW1lbnQtbm90ZS1idG4ge1xcbiAgICBncmlkLWFyZWE6IGFkZC1pdGVtLWJ0bjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmluY3JlbWVudC1ub3RlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTYpO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbmNyZW1lbnQtbm90ZS1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XFxufVxcblxcbi5pbmNyZW1lbnQtbm90ZS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5sb2dpbi1idG4ge1xcbiAgICBncmlkLWFyZWE6IGxvZ2luLWJ0bjtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMSk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBJbmZvcm1hdGlvbiAqL1xcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIC8qIFN1YnRyYWN0ZWQgNjAgYmVjYXVzZSBpdCdzIHRoZSBoZWlnaHQgb2YgdGhlIG5hdiBiYXIqL1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibGVmdC1jb250ZW50LWNvbnRhaW5lciByaWdodC1jb250ZW50LWNvbnRhaW5lclxcXCI7XFxufVxcblxcbi8qIExlZnQgQ29udGVudCBJbmZvcm1hdGlvbiAqL1xcblxcbi5sZWZ0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0LWNvbnRlbnQtY29udGFpbmVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLnRhYnMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi50YWIge1xcbiAgICBtYXJnaW46IDI1cHg7XFxufVxcblxcbi5zaW5nbGUtdGFiIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNSk7XFxufVxcblxcbi5pbmJveC10YWIge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udG9kYXktdGFiIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50aGlzLXdlZWstdGFiIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnByb2plY3RzLXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIFJpZ2h0IGNvbnRlbnQgaW5mb3JtYXRpb24gKi9cXG5cXG4ucmlnaHQtY29udGVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yaWdodC1jb250ZW50LWluZm8tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5ub3RlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBub3RlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0M0QzRDNDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uY2hlY2stYnViYmxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzRDNEM0O1xcbn1cXG5cXG4ubm8tY29udGVudC10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgICAgXFxufVxcblxcbi8qIE5vdGUgSW5wdXQgY3JlYXRpb24gKi9cXG5cXG4ubm90ZS1pbnB1dC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm90ZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ubm90ZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIENhcmQgc3R5bGluZyAqL1xcblxcbi5jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG59XFxuXFxuLmNhcmQtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1saW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnIgNjBweCAxZnIgNjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJkIC4gZGF0ZVxcXCJcXG4gICAgICAgIFxcXCJkIC4gLlxcXCJcXG4gICAgICAgIFxcXCJkIC4gcHJpb3JpdHlcXFwiXFxuICAgICAgICBcXFwiZCAuIC5cXFwiXFxuICAgICAgICBcXFwiZCAuIHByb2plY3RcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyAvKiBVc2UgeWVsbG93IHRvIGRlYnVnICovXFxufVxcblxcbi5jYXJkLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtZGF0ZS1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmlucHV0LXN0eWxpbmcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzRDNEM0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VibWlzc2lvbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTsgLyogVXNlIGdyZWVuIHRvIGRlYnVnICovXFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4M0ZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuXFxuLnJlc2V0LWJ0biB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5QjlCOUI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICM5QjlCOUI7XFxuICAgIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kLWNvbG9yLCAuMnMgY29sb3I7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlc2V0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QjlCOUI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlc2V0LWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQ2xvc2UgQnV0dG9uICovXFxuXFxuLyogQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBvZiB4IHVzaW5nIHRoZSB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllcyBpblxcbi5jbG9zZTpiZWZvcmUsXFxuLmNsb3NlOmFmdGVyIHsuLi59IFxcblxcbkFkanVzdCBiYWNrZ3JvdW5kLWNvbG9yIGluIC5jbG9zZXsuLi59XFxuKi9cXG5cXG4uY2xvc2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjJzIG9wYWNpdHk7XFxufVxcbi5jbG9zZTpiZWZvcmUsIFxcbi5jbG9zZTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDJweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxufVxcbi5jbG9zZTphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmNsb3NlOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsK0RBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0RBQW9EO0lBQ3BEOzJDQUN1QztJQUN2QyxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixl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ZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQixFQUFFLHVCQUF1QjtJQUMvQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLGlCQUFpQjs7QUFFakI7Ozs7O0NBS0M7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEdlbmVyYWwgU3R5bGluZyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci0xOiAjMDA4M0ZGO1xcbiAgICAtLWNvbG9yLTI6ICNDNEM0QzQ7XFxuICAgIC0tY29sb3ItMzogIzlCOUI5QjtcXG4gICAgLS1jb2xvci00OiAjRkZGO1xcbiAgICAtLWNvbG9yLTU6ICMwMDA7XFxuICAgIC0tY29sb3ItNjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XFxuICAgIC0tZm9udC0xOiAnUm9ib3RvJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibGFjay1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbi8qIE5hdiBCYXIgQ29udGVudCAqL1xcblxcbi5uYXYtYmFyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IDUwcHggMWZyIDUwcHggMTAwcHggMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gbWVudS1idG4gLiBhZGQtaXRlbS1idG4gbG9naW4tYnRuIC5cXFwiO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYW0tYnRuLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWVudS1idG47XFxufVxcblxcbi5oYW0tYnRuLWxheWVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgbWFyZ2luOiA2cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBhZGQtaXRlbS1idG47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5pbmNyZW1lbnQtbm90ZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci02KTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubG9naW4tYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dpbi1idG47XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgSW5mb3JtYXRpb24gKi9cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICAvKiBTdWJ0cmFjdGVkIDYwIGJlY2F1c2UgaXQncyB0aGUgaGVpZ2h0IG9mIHRoZSBuYXYgYmFyKi9cXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImxlZnQtY29udGVudC1jb250YWluZXIgcmlnaHQtY29udGVudC1jb250YWluZXJcXFwiO1xcbn1cXG5cXG4vKiBMZWZ0IENvbnRlbnQgSW5mb3JtYXRpb24gKi9cXG5cXG4ubGVmdC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbGVmdC1jb250ZW50LWNvbnRhaW5lcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi50YWJzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbn1cXG5cXG4uc2luZ2xlLXRhYiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTUpO1xcbn1cXG5cXG4uaW5ib3gtdGFiIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnRvZGF5LXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGhpcy13ZWVrLXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wcm9qZWN0cy10YWIge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiBSaWdodCBjb250ZW50IGluZm9ybWF0aW9uICovXFxuXFxuLnJpZ2h0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucmlnaHQtY29udGVudC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ubm90ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogbm90ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDNEM0QzQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmNoZWNrLWJ1YmJsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QzRDNDtcXG59XFxuXFxuLm5vLWNvbnRlbnQtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICAgIFxcbn1cXG5cXG4vKiBOb3RlIElucHV0IGNyZWF0aW9uICovXFxuXFxuLm5vdGUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vdGUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLm5vdGUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDYXJkIHN0eWxpbmcgKi9cXG5cXG4uY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uY2FyZC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbi5jYXJkLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZS1pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvcml6b250YWwtbGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyIDYwcHggMWZyIDYwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiZCAuIGRhdGVcXFwiXFxuICAgICAgICBcXFwiZCAuIC5cXFwiXFxuICAgICAgICBcXFwiZCAuIHByaW9yaXR5XFxcIlxcbiAgICAgICAgXFxcImQgLiAuXFxcIlxcbiAgICAgICAgXFxcImQgLiBwcm9qZWN0XFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTsgLyogVXNlIHllbGxvdyB0byBkZWJ1ZyAqL1xcbn1cXG5cXG4uY2FyZC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnB1dC1zdHlsaW5nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QzRDNDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pc3Npb24tYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7IC8qIFVzZSBncmVlbiB0byBkZWJ1ZyAqL1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODNGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5yZXNldC1idG4ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOUI5QjlCO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjOUI5QjlCO1xcbiAgICB0cmFuc2l0aW9uOiAuMnMgYmFja2dyb3VuZC1jb2xvciwgLjJzIGNvbG9yO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXNldC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXNldC1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIENsb3NlIEJ1dHRvbiAqL1xcblxcbi8qIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgb2YgeCB1c2luZyB0aGUgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXMgaW5cXG4uY2xvc2U6YmVmb3JlLFxcbi5jbG9zZTphZnRlciB7Li4ufSBcXG5cXG5BZGp1c3QgYmFja2dyb3VuZC1jb2xvciBpbiAuY2xvc2V7Li4ufVxcbiovXFxuXFxuLmNsb3NlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5O1xcbn1cXG4uY2xvc2U6YmVmb3JlLCBcXG4uY2xvc2U6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG4uY2xvc2U6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5jbG9zZTphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzdWIgfSBmcm9tICdkYXRlLWZucyc7XG5cbid1c2Ugc3RyaWN0J1xuXG4vKiBOb3RlIENsYXNzZXMgKi9cblxuY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3Iobm90ZVRpdGxlLCBub3RlVGltZSwgbm90ZVRleHQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5vdGVUaXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbm90ZVRleHQ7XG4gICAgICAgIHRoaXMudGltZSA9IG5vdGVUaW1lO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGdldCB0ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICB9XG5cbiAgICBzZXQgdGV4dChuZXdUZXh0KSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSBuZXdUZXh0O1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBzZXQgdGltZShuZXdUaW1lKSB7XG4gICAgICAgIHRoaXMuX3RpbWUgPSBuZXdUaW1lO1xuICAgIH1cbn1cblxuY2xhc3MgVGFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbi8qIERPTSBjcmVhdGlvbiBmdW5jdGlvbnMgKi9cblxuZnVuY3Rpb24gY2xvc2VDYXJkKCkge1xuICAgIGxldCBibGFja092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxhY2stb3ZlcmxheScpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgYm9keS5yZW1vdmVDaGlsZChibGFja092ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCkge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdHRVQnKTtcblxuICAgIGxldCBjYXJkQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnRDb250YWluZXIpO1xuXG4gICAgbGV0IGNhcmRUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGNhcmRDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtaW5wdXQnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heExlbmd0aCcsICcyMCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgVGFzayBOYW1lJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjYXJkVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJ2Nsb3NlJztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VDYXJkKCk7XG4gICAgfSk7XG4gICAgY2FyZFRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICAgIGxldCBob3Jpem9udGFsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvcml6b250YWxMaW5lLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtbGluZScpO1xuICAgIGNhcmRDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcblxuICAgIGxldCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudCcpO1xuICAgIGNhcmRDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb246JztcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN0eWxpbmcnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4TGVuZ3RoJywgJzQwMCcpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGxldCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWRhdGUtY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZS1pbnB1dCcpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSAnRHVlIERhdGU6JztcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3R5bGluZycsICdjYXJkLWlucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1pbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxldCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpb3JpdHktY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSAnUHJpb3JpdHk6JztcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdHlsaW5nJywgJ2NhcmQtaW5wdXQnKTtcbiAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG4gICAgbGV0IHByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByaW9yaXR5T3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgIHByaW9yaXR5T3B0aW9uMS5pbm5lckhUTUwgPSAnTG93JztcbiAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMSk7XG5cbiAgICBsZXQgcHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJpb3JpdHlPcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgcHJpb3JpdHlPcHRpb24yLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24yKTtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcmlvcml0eU9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgcHJpb3JpdHlPcHRpb24zLmlubmVySFRNTCA9ICdIaWdoJztcbiAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eU9wdGlvbjMpO1xuXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpO1xuICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWlucHV0Jyk7XG4gICAgcHJvamVjdExhYmVsLmlubmVySFRNTCA9ICdQcm9qZWN0Oic7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgbGV0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdHlsaW5nJywgJ2NhcmQtaW5wdXQnKTtcbiAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWlucHV0Jyk7XG4gICAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRDb250YWluZXIpO1xuXG4gICAgbGV0IHByb2plY3RPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJvamVjdE9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdpbmJveCcpO1xuICAgIHByb2plY3RPcHRpb24xLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24xKTtcblxuICAgIGxldCBzdWJtaXNzaW9uQnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pc3Npb25CdG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pc3Npb24tYnRucy1jb250YWluZXInKTtcbiAgICBjYXJkQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXNzaW9uQnRuc0NvbnRhaW5lcik7XG5cbiAgICBsZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNldC1idG4nKTtcbiAgICByZXNldEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKTtcbiAgICByZXNldEJ0bi5pbm5lckhUTUwgPSAnUmVzZXQgVGFzayc7XG4gICAgc3VibWlzc2lvbkJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcbiAgICBzdWJtaXNzaW9uQnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZU5vdGUoKSB7XG4gICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgY2hlY2tCdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0J1YmJsZS5jbGFzc0xpc3QuYWRkKCdjaGVjay1idWJibGUnKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQnViYmxlKTtcbiAgICAgICAgXG4gICAgbGV0IGJvZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJvZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ25vdGUtdGV4dCcpO1xuICAgIGJvZHlUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuX3RleHR9YDtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHlUZXh0KTtcblxuICAgIHJldHVybiBub3RlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wbGV4Tm90ZSgpIHtcbiAgICBsZXQgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZS1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBjaGVja0J1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrQnViYmxlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJ1YmJsZScpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCdWJibGUpO1xuICAgIFxuICAgIGxldCBub3RlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3RlVGltZS5jbGFzc0xpc3QuYWRkKCdub3RlLXRleHQnLCAnbm90ZS10aW1lJyk7XG4gICAgbm90ZVRpbWUuaW5uZXJIVE1MID0gYCR7dGhpcy50aW1lfWA7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlVGltZSk7XG5cbiAgICBsZXQgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlcGFyYXRvci5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3InKVxuICAgIHNlcGFyYXRvci5pbm5lckhUTUwgPSAnIC0gJztcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgICBsZXQgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdub3RlLXRleHQnKTtcbiAgICBub3RlVGl0bGUuaW5uZXJIVE1MID0gYCR7dGhpcy50aXRsZX1gO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZVRpdGxlKTtcblxuICAgIHJldHVybiBub3RlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlSW5wdXQoKSB7XG4gICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgYnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnViYmxlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJ1YmJsZScpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnViYmxlKTtcblxuICAgIGxldCBub3RlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZS1pbnB1dC1jb250YWluZXInKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVJbnB1dENvbnRhaW5lcik7XG5cbiAgICBsZXQgbm90ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbm90ZS1pbnB1dCcpO1xuICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBhIHRhc2snKTtcbiAgICBub3RlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUlucHV0KTtcblxuICAgIHJldHVybiBub3RlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCbGFja092ZXJsYXkoKSB7XG4gICAgbGV0IGJsYWNrT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsYWNrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdibGFjay1vdmVybGF5Jyk7XG5cbiAgICByZXR1cm4gYmxhY2tPdmVybGF5O1xufVxuXG5mdW5jdGlvbiByZW1vdmVCbGFja092ZXJsYXkoKSB7XG4gICAgbGV0IGJsYWNrT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJy5ibGFjay1vdmVybGF5Jyk7XG4gICAgYmxhY2tPdmVybGF5LnJlbW92ZSgpO1xufVxuXG4vKiBOb3RlIExvZ2ljICovXG5cbmZ1bmN0aW9uIGFkZE5vQ29udGVudFRleHQobm9Db250ZW50VGV4dCkgeyAgICBcbiAgICBub0NvbnRlbnRUZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KSB7XG4gICAgbm9Db250ZW50VGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBsb2FkTm90ZXModGFiTmFtZSwgdGFiU3RvcmFnZUFycikge1xuICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IG51bU9mTm90ZXMgPSBpbmJveE5vdGVzQXJyLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mTm90ZXM7ICsraSkge1xuICAgICAgICBcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm90ZXModGl0bGUpIHtcbiAgICBjb25zdCBub0NvbnRlbnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWNvbnRlbnQtdGV4dCcpO1xuICAgIFxuICAgIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdJbmJveCcpIHtcbiAgICAgICAgLy8gaWYgKGluYm94Tm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIGluYm94Tm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdUb2RheScpIHtcbiAgICAgICAgLy8gaWYgKHRvZGF5Tm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIHRvZGF5Tm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpdGxlLmlubmVySFRNTCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgLy8gaWYgKHRoaXNXZWVrTm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIHRoaXNXZWVrTm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVPYmplY3QodGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0VmFsdWUpIHtcbiAgICBsZXQgbm90ZSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlVmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICBkYXRlOiBkYXRlVmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eVZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0VmFsdWUsXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XG4gICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gICAgbGV0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKS52YWx1ZTtcblxuICAgIGxldCBuZXdOb3RlID0gY3JlYXRlTm90ZU9iamVjdCh0aXRsZVZhbHVlLCBkZXNjcmlwVmFsdWUsIGRhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdFZhbHVlKTtcblxuICAgIHJldHVybiBuZXdOb3RlO1xufVxuXG5mdW5jdGlvbiBvcGVuQ2FyZCgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBibGFja092ZXJsYXkgPSBjcmVhdGVCbGFja092ZXJsYXkoKTtcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoKTtcbiAgICBibGFja092ZXJsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJsYWNrT3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZSkge2UucHJldmVudERlZmF1bHQoKTt9XG5cbmZ1bmN0aW9uIGdldEluYm94U3RvcmFnZSgpIHtcbiAgICBsZXQgaW5ib3hOb3Rlc0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94Tm90ZXNBcnInKSk7XG4gICAgcmV0dXJuIGluYm94Tm90ZXNBcnI7XG59XG5cbmxldCBpbmNyZW1lbnROb3RlTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGxldCB0aXRsZU5hbWUgPSB0aXRsZS5pbm5lckhUTUw7XG5cbiAgICBsZXQgaW5jcmVtZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluY3JlbWVudC1ub3RlLWJ0bicpO1xuICAgIGluY3JlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3BlbkNhcmQoKTtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlRm9ybTtcblxuICAgICAgICAgICAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKCk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiID0gbm90ZS5wcm9qZWN0XG4gICAgICAgICAgICBpZiAocHJvamVjdFRhYiA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgICAgIGxldCBpbmJveFN0b3JhZ2UgPSBnZXRJbmJveFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbmJveFN0b3JhZ2UucHVzaChub3RlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5ib3hOb3Rlc0FycicsIEpTT04uc3RyaW5naWZ5KGluYm94U3RvcmFnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUNhcmQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubGV0IHN3aXRjaFRhYnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXG4gICAgaWYgKHBhZ2VUaXRsZS5pbm5lckhUTUwgPT09ICdJbmJveCcpIHtcbiAgICAgICAgcG9wdWxhdGVOb3RlcyhwYWdlVGl0bGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlVGl0bGUuaW5uZXJIVE1MID09PSAnVG9kYXknKSB7XG4gICAgICAgIHBvcHVsYXRlTm90ZXMocGFnZVRpdGxlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZVRpdGxlLmlubmVySFRNTCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgcG9wdWxhdGVOb3RlcyhwYWdlVGl0bGUpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQge1xuICAgIHN3aXRjaFRhYnMsXG4gICAgaW5jcmVtZW50Tm90ZUxpc3RlbmVyLFxuICAgIE5vdGVcbn0iLCJpbXBvcnQge3N3aXRjaFRhYnN9IGZyb20gJy4vbm90ZS1sb2dpYy5qcyc7XG5cbmNvbnN0IHRhYlBhZ2VQb3B1bGF0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBpbmJveFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YWInKTtcbiAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS10YWInKTtcbiAgICBjb25zdCB0aGlzV2Vla1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGlzLXdlZWstdGFiJyk7XG4gICAgY29uc3QgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdGFiJyk7XG4gICAgY29uc3QgdGFiQXJyID0gW2luYm94VGFiLCB0b2RheVRhYiwgdGhpc1dlZWtUYWIsIHByb2plY3RzVGFiXTtcbiAgICBsZXQgcGdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXG4gICAgaW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhYkFyci5mb3JFYWNoKHRhYiA9PiB7dGFiLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJ30pO1xuICAgICAgICBpbmJveFRhYi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwZ1RpdGxlLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgICAgIHN3aXRjaFRhYnMoKTtcbiAgICB9KTtcblxuICAgIHRvZGF5VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWJBcnIuZm9yRWFjaCh0YWIgPT4ge3RhYi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCd9KTtcbiAgICAgICAgdG9kYXlUYWIuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcGdUaXRsZS5pbm5lckhUTUwgPSAnVG9kYXknO1xuICAgICAgICBzd2l0Y2hUYWJzKClcbiAgICB9KTtcblxuICAgIHRoaXNXZWVrVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWJBcnIuZm9yRWFjaCh0YWIgPT4ge3RhYi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCd9KTtcbiAgICAgICAgdGhpc1dlZWtUYWIuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcGdUaXRsZS5pbm5lckhUTUwgPSAnVGhpcyBXZWVrJztcbiAgICAgICAgc3dpdGNoVGFicygpXG4gICAgfSk7XG5cbn0pO1xuXG5mdW5jdGlvbiBkZWZhdWx0VGFiTG9hZCgpIHtcbiAgICBzd2l0Y2hUYWJzKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgdGFiUGFnZVBvcHVsYXRpb24sXG4gICAgZGVmYXVsdFRhYkxvYWRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHt0YWJQYWdlUG9wdWxhdGlvbn0gZnJvbSAnLi9tb2R1bGVzL3RhYi1sb2dpYy5qcyc7XG5pbXBvcnQge2RlZmF1bHRUYWJMb2FkfSBmcm9tICcuL21vZHVsZXMvdGFiLWxvZ2ljLmpzJztcbmltcG9ydCB7aW5jcmVtZW50Tm90ZUxpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvbm90ZS1sb2dpYy5qcyc7XG5cbmluY3JlbWVudE5vdGVMaXN0ZW5lcigpO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmJveE5vdGVzQXJyXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwiaW5ib3hOb3Rlc0FyclwiLCBKU09OLnN0cmluZ2lmeShbXSkgKTtcbn1cblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kYXlOb3Rlc0FyclwiKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcInRvZGF5Tm90ZXNBcnJcIiwgSlNPTi5zdHJpbmdpZnkoW10pICk7XG59XG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoaXNXZWVrTm90ZXNBcnJcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJ0aGlzV2Vla05vdGVzQXJyXCIsIEpTT04uc3RyaW5naWZ5KFtdKSApO1xufVxuXG4vLyBsZXQgc3RvcmVkSW5ib3hOb3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94Tm90ZXMnKSk7XG4vLyBUaGUgYWJvdmUgaXMgaG93IHRvIGNhbGwgdGhlIGFycmF5IHNldCBpbiBsb2NhbCBzdG9yYWdlXG5cbmluaXQoKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkZWZhdWx0VGFiTG9hZCgpO1xuICAgIHRhYlBhZ2VQb3B1bGF0aW9uKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==