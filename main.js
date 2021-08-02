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

/***/ "./src/modules/application-logic.js":
/*!******************************************!*\
  !*** ./src/modules/application-logic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "incrementNoteListener": () => (/* binding */ incrementNoteListener),
/* harmony export */   "tabPagePopulation": () => (/* binding */ tabPagePopulation),
/* harmony export */   "defaultTabLoad": () => (/* binding */ defaultTabLoad)
/* harmony export */ });
/* harmony import */ var _dom_creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-creation.js */ "./src/modules/dom-creation.js");









'use strict'

/* Classes */

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

/* Logic */

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

    let blackOverlay = (0,_dom_creation_js__WEBPACK_IMPORTED_MODULE_0__.createBlackOverlay)();
    let card = (0,_dom_creation_js__WEBPACK_IMPORTED_MODULE_0__.createCard)();
    blackOverlay.appendChild(card);

    body.appendChild(blackOverlay);
}

function handleForm(e) {e.preventDefault();}

function getInboxStorage() {
    let inboxNotesArr = JSON.parse(localStorage.getItem('inboxNotesArr'));
    return inboxNotesArr;
}

function storeNote(tabName, note) {
    if (tabName === 'inbox') {
        let inboxStorage = getInboxStorage();
        
        inboxStorage.push(note);
        localStorage.setItem('inboxNotesArr', JSON.stringify(inboxStorage));
    }
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
            storeNote(projectTab, note);
            
            (0,_dom_creation_js__WEBPACK_IMPORTED_MODULE_0__.closeCard)();
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
        switchTabs();
    });

    todayTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        todayTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Today';
        switchTabs()
    });

    thisWeekTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        thisWeekTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'This Week';
        switchTabs()
    });

});

function defaultTabLoad() {
    switchTabs();
}



/***/ }),

/***/ "./src/modules/dom-creation.js":
/*!*************************************!*\
  !*** ./src/modules/dom-creation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeCard": () => (/* binding */ closeCard),
/* harmony export */   "createCard": () => (/* binding */ createCard),
/* harmony export */   "createSimpleNote": () => (/* binding */ createSimpleNote),
/* harmony export */   "createComplexNote": () => (/* binding */ createComplexNote),
/* harmony export */   "createNoteInput": () => (/* binding */ createNoteInput),
/* harmony export */   "createBlackOverlay": () => (/* binding */ createBlackOverlay),
/* harmony export */   "removeBlackOverlay": () => (/* binding */ removeBlackOverlay)
/* harmony export */ });


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
/* harmony import */ var _modules_application_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/application-logic.js */ "./src/modules/application-logic.js");






(0,_modules_application_logic_js__WEBPACK_IMPORTED_MODULE_2__.incrementNoteListener)();

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
    (0,_modules_application_logic_js__WEBPACK_IMPORTED_MODULE_2__.defaultTabLoad)();
    (0,_modules_application_logic_js__WEBPACK_IMPORTED_MODULE_2__.tabPagePopulation)();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9hcHBsaWNhdGlvbi1sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS1jcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUNwQjtBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw2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T0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLE9BQU8seUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsd0JBQXdCLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixXQUFXO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7OztBQ2Y0QjtBQUNEO0FBQ3NDO0FBQ0g7QUFDTzs7QUFFckUsb0ZBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSw2RUFBYztBQUNsQixJQUFJLGdGQUFpQjtBQUNyQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEdlbmVyYWwgU3R5bGluZyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci0xOiAjMDA4M0ZGO1xcbiAgICAtLWNvbG9yLTI6ICNDNEM0QzQ7XFxuICAgIC0tY29sb3ItMzogIzlCOUI5QjtcXG4gICAgLS1jb2xvci00OiAjRkZGO1xcbiAgICAtLWNvbG9yLTU6ICMwMDA7XFxuICAgIC0tY29sb3ItNjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XFxuICAgIC0tZm9udC0xOiAnUm9ib3RvJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibGFjay1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbi8qIE5hdiBCYXIgQ29udGVudCAqL1xcblxcbi5uYXYtYmFyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IDUwcHggMWZyIDUwcHggMTAwcHggMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gbWVudS1idG4gLiBhZGQtaXRlbS1idG4gbG9naW4tYnRuIC5cXFwiO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYW0tYnRuLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWVudS1idG47XFxufVxcblxcbi5oYW0tYnRuLWxheWVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgbWFyZ2luOiA2cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBhZGQtaXRlbS1idG47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5pbmNyZW1lbnQtbm90ZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci02KTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubG9naW4tYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dpbi1idG47XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgSW5mb3JtYXRpb24gKi9cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICAvKiBTdWJ0cmFjdGVkIDYwIGJlY2F1c2UgaXQncyB0aGUgaGVpZ2h0IG9mIHRoZSBuYXYgYmFyKi9cXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImxlZnQtY29udGVudC1jb250YWluZXIgcmlnaHQtY29udGVudC1jb250YWluZXJcXFwiO1xcbn1cXG5cXG4vKiBMZWZ0IENvbnRlbnQgSW5mb3JtYXRpb24gKi9cXG5cXG4ubGVmdC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbGVmdC1jb250ZW50LWNvbnRhaW5lcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi50YWJzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbn1cXG5cXG4uc2luZ2xlLXRhYiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTUpO1xcbn1cXG5cXG4uaW5ib3gtdGFiIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnRvZGF5LXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGhpcy13ZWVrLXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wcm9qZWN0cy10YWIge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiBSaWdodCBjb250ZW50IGluZm9ybWF0aW9uICovXFxuXFxuLnJpZ2h0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucmlnaHQtY29udGVudC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ubm90ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogbm90ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDNEM0QzQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmNoZWNrLWJ1YmJsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QzRDNDtcXG59XFxuXFxuLm5vLWNvbnRlbnQtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICAgIFxcbn1cXG5cXG4vKiBOb3RlIElucHV0IGNyZWF0aW9uICovXFxuXFxuLm5vdGUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vdGUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLm5vdGUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDYXJkIHN0eWxpbmcgKi9cXG5cXG4uY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uY2FyZC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbi5jYXJkLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZS1pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvcml6b250YWwtbGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyIDYwcHggMWZyIDYwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiZCAuIGRhdGVcXFwiXFxuICAgICAgICBcXFwiZCAuIC5cXFwiXFxuICAgICAgICBcXFwiZCAuIHByaW9yaXR5XFxcIlxcbiAgICAgICAgXFxcImQgLiAuXFxcIlxcbiAgICAgICAgXFxcImQgLiBwcm9qZWN0XFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTsgLyogVXNlIHllbGxvdyB0byBkZWJ1ZyAqL1xcbn1cXG5cXG4uY2FyZC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnB1dC1zdHlsaW5nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QzRDNDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pc3Npb24tYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7IC8qIFVzZSBncmVlbiB0byBkZWJ1ZyAqL1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODNGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5yZXNldC1idG4ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOUI5QjlCO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjOUI5QjlCO1xcbiAgICB0cmFuc2l0aW9uOiAuMnMgYmFja2dyb3VuZC1jb2xvciwgLjJzIGNvbG9yO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXNldC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXNldC1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIENsb3NlIEJ1dHRvbiAqL1xcblxcbi8qIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgb2YgeCB1c2luZyB0aGUgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXMgaW5cXG4uY2xvc2U6YmVmb3JlLFxcbi5jbG9zZTphZnRlciB7Li4ufSBcXG5cXG5BZGp1c3QgYmFja2dyb3VuZC1jb2xvciBpbiAuY2xvc2V7Li4ufVxcbiovXFxuXFxuLmNsb3NlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5O1xcbn1cXG4uY2xvc2U6YmVmb3JlLCBcXG4uY2xvc2U6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG4uY2xvc2U6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5jbG9zZTphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLCtEQUFpRTtJQUNqRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG9EQUFvRDtJQUNwRDsyQ0FDdUM7SUFDdkMsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7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QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0IsRUFBRSx1QkFBdUI7SUFDL0MsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQSxpQkFBaUI7O0FBRWpCOzs7OztDQUtDOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBHZW5lcmFsIFN0eWxpbmcgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItMTogIzAwODNGRjtcXG4gICAgLS1jb2xvci0yOiAjQzRDNEM0O1xcbiAgICAtLWNvbG9yLTM6ICM5QjlCOUI7XFxuICAgIC0tY29sb3ItNDogI0ZGRjtcXG4gICAgLS1jb2xvci01OiAjMDAwO1xcbiAgICAtLWNvbG9yLTY6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xcbiAgICAtLWZvbnQtMTogJ1JvYm90byc7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC0xKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYmxhY2stb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBOYXYgQmFyIENvbnRlbnQgKi9cXG5cXG4ubmF2LWJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCA1MHB4IDFmciA1MHB4IDEwMHB4IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIG1lbnUtYnRuIC4gYWRkLWl0ZW0tYnRuIGxvZ2luLWJ0biAuXFxcIjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGFtLWJ0bi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1lbnUtYnRuO1xcbn1cXG5cXG4uaGFtLWJ0bi1sYXllciB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIG1hcmdpbjogNnB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmluY3JlbWVudC1ub3RlLWJ0biB7XFxuICAgIGdyaWQtYXJlYTogYWRkLWl0ZW0tYnRuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uaW5jcmVtZW50LW5vdGUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmluY3JlbWVudC1ub3RlLWJ0bjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcXG59XFxuXFxuLmluY3JlbWVudC1ub3RlLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmxvZ2luLWJ0biB7XFxuICAgIGdyaWQtYXJlYTogbG9naW4tYnRuO1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC0xKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IEluZm9ybWF0aW9uICovXFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgLyogU3VidHJhY3RlZCA2MCBiZWNhdXNlIGl0J3MgdGhlIGhlaWdodCBvZiB0aGUgbmF2IGJhciovXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJsZWZ0LWNvbnRlbnQtY29udGFpbmVyIHJpZ2h0LWNvbnRlbnQtY29udGFpbmVyXFxcIjtcXG59XFxuXFxuLyogTGVmdCBDb250ZW50IEluZm9ybWF0aW9uICovXFxuXFxuLmxlZnQtY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGxlZnQtY29udGVudC1jb250YWluZXI7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4udGFicy1jb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLnNpbmdsZS10YWIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci01KTtcXG59XFxuXFxuLmluYm94LXRhYiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50b2RheS10YWIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRoaXMtd2Vlay10YWIge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucHJvamVjdHMtdGFiIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogUmlnaHQgY29udGVudCBpbmZvcm1hdGlvbiAqL1xcblxcbi5yaWdodC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJpZ2h0LWNvbnRlbnQtaW5mby1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm5vdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IG5vdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzRDNEM0O1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5jaGVjay1idWJibGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEM0QzQ7XFxufVxcblxcbi5uby1jb250ZW50LXRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAgICBcXG59XFxuXFxuLyogTm90ZSBJbnB1dCBjcmVhdGlvbiAqL1xcblxcbi5ub3RlLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub3RlLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5ub3RlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQ2FyZCBzdHlsaW5nICovXFxuXFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmNhcmQtY29udGVudC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM2MHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4uY2FyZC10aXRsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob3Jpem9udGFsLWxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmciA2MHB4IDFmciA2MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImQgLiBkYXRlXFxcIlxcbiAgICAgICAgXFxcImQgLiAuXFxcIlxcbiAgICAgICAgXFxcImQgLiBwcmlvcml0eVxcXCJcXG4gICAgICAgIFxcXCJkIC4gLlxcXCJcXG4gICAgICAgIFxcXCJkIC4gcHJvamVjdFxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7IC8qIFVzZSB5ZWxsb3cgdG8gZGVidWcgKi9cXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHByb2plY3Q7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmlucHV0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaW5wdXQtc3R5bGluZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEM0QzQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdWJtaXNzaW9uLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyAvKiBVc2UgZ3JlZW4gdG8gZGVidWcgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgzRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4ucmVzZXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzlCOUI5QjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzlCOUI5QjtcXG4gICAgdHJhbnNpdGlvbjogLjJzIGJhY2tncm91bmQtY29sb3IsIC4ycyBjb2xvcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVzZXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzZXQtYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBDbG9zZSBCdXR0b24gKi9cXG5cXG4vKiBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IG9mIHggdXNpbmcgdGhlIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzIGluXFxuLmNsb3NlOmJlZm9yZSxcXG4uY2xvc2U6YWZ0ZXIgey4uLn0gXFxuXFxuQWRqdXN0IGJhY2tncm91bmQtY29sb3IgaW4gLmNsb3Nley4uLn1cXG4qL1xcblxcbi5jbG9zZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMnMgb3BhY2l0eTtcXG59XFxuLmNsb3NlOmJlZm9yZSwgXFxuLmNsb3NlOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QjlCOUI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICBjb250ZW50OiAnJztcXG59XFxuLmNsb3NlOmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uY2xvc2U6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc3ViIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgY2xvc2VDYXJkIH0gZnJvbSAnLi9kb20tY3JlYXRpb24uanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vZG9tLWNyZWF0aW9uLmpzJztcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZU5vdGUgfSBmcm9tICcuL2RvbS1jcmVhdGlvbi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wbGV4Tm90ZSB9IGZyb20gJy4vZG9tLWNyZWF0aW9uLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5vdGVJbnB1dCB9IGZyb20gJy4vZG9tLWNyZWF0aW9uLmpzJztcbmltcG9ydCB7IGNyZWF0ZUJsYWNrT3ZlcmxheSB9IGZyb20gJy4vZG9tLWNyZWF0aW9uLmpzJztcbmltcG9ydCB7IHJlbW92ZUJsYWNrT3ZlcmxheSB9IGZyb20gJy4vZG9tLWNyZWF0aW9uLmpzJztcblxuJ3VzZSBzdHJpY3QnXG5cbi8qIENsYXNzZXMgKi9cblxuY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3Iobm90ZVRpdGxlLCBub3RlVGltZSwgbm90ZVRleHQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5vdGVUaXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbm90ZVRleHQ7XG4gICAgICAgIHRoaXMudGltZSA9IG5vdGVUaW1lO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGdldCB0ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICB9XG5cbiAgICBzZXQgdGV4dChuZXdUZXh0KSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSBuZXdUZXh0O1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBzZXQgdGltZShuZXdUaW1lKSB7XG4gICAgICAgIHRoaXMuX3RpbWUgPSBuZXdUaW1lO1xuICAgIH1cbn1cblxuY2xhc3MgVGFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbi8qIExvZ2ljICovXG5cbmZ1bmN0aW9uIGFkZE5vQ29udGVudFRleHQobm9Db250ZW50VGV4dCkgeyAgICBcbiAgICBub0NvbnRlbnRUZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KSB7XG4gICAgbm9Db250ZW50VGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBsb2FkTm90ZXModGFiTmFtZSwgdGFiU3RvcmFnZUFycikge1xuICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IG51bU9mTm90ZXMgPSBpbmJveE5vdGVzQXJyLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mTm90ZXM7ICsraSkge1xuICAgICAgICBcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm90ZXModGl0bGUpIHtcbiAgICBjb25zdCBub0NvbnRlbnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWNvbnRlbnQtdGV4dCcpO1xuICAgIFxuICAgIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdJbmJveCcpIHtcbiAgICAgICAgLy8gaWYgKGluYm94Tm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIGluYm94Tm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdUb2RheScpIHtcbiAgICAgICAgLy8gaWYgKHRvZGF5Tm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIHRvZGF5Tm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpdGxlLmlubmVySFRNTCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgLy8gaWYgKHRoaXNXZWVrTm90ZXNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9Db250ZW50VGV4dCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgYWRkTm9Db250ZW50VGV4dChub0NvbnRlbnRUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBsb2FkTm90ZXModGl0bGUsIHRoaXNXZWVrTm90ZXNBcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbm9Db250ZW50VGV4dC5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVPYmplY3QodGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0VmFsdWUpIHtcbiAgICBsZXQgbm90ZSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlVmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICBkYXRlOiBkYXRlVmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eVZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0VmFsdWUsXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XG4gICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gICAgbGV0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKS52YWx1ZTtcblxuICAgIGxldCBuZXdOb3RlID0gY3JlYXRlTm90ZU9iamVjdCh0aXRsZVZhbHVlLCBkZXNjcmlwVmFsdWUsIGRhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdFZhbHVlKTtcblxuICAgIHJldHVybiBuZXdOb3RlO1xufVxuXG5mdW5jdGlvbiBvcGVuQ2FyZCgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBibGFja092ZXJsYXkgPSBjcmVhdGVCbGFja092ZXJsYXkoKTtcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoKTtcbiAgICBibGFja092ZXJsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJsYWNrT3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZSkge2UucHJldmVudERlZmF1bHQoKTt9XG5cbmZ1bmN0aW9uIGdldEluYm94U3RvcmFnZSgpIHtcbiAgICBsZXQgaW5ib3hOb3Rlc0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94Tm90ZXNBcnInKSk7XG4gICAgcmV0dXJuIGluYm94Tm90ZXNBcnI7XG59XG5cbmZ1bmN0aW9uIHN0b3JlTm90ZSh0YWJOYW1lLCBub3RlKSB7XG4gICAgaWYgKHRhYk5hbWUgPT09ICdpbmJveCcpIHtcbiAgICAgICAgbGV0IGluYm94U3RvcmFnZSA9IGdldEluYm94U3RvcmFnZSgpO1xuICAgICAgICBcbiAgICAgICAgaW5ib3hTdG9yYWdlLnB1c2gobm90ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmJveE5vdGVzQXJyJywgSlNPTi5zdHJpbmdpZnkoaW5ib3hTdG9yYWdlKSk7XG4gICAgfVxufVxuXG5sZXQgaW5jcmVtZW50Tm90ZUxpc3RlbmVyID0gKCgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBsZXQgdGl0bGVOYW1lID0gdGl0bGUuaW5uZXJIVE1MO1xuXG4gICAgbGV0IGluY3JlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmNyZW1lbnQtbm90ZS1idG4nKTtcbiAgICBpbmNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wZW5DYXJkKCk7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUZvcm07XG5cbiAgICAgICAgICAgIGxldCBub3RlID0gY3JlYXRlTm90ZSgpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRhYiA9IG5vdGUucHJvamVjdFxuICAgICAgICAgICAgc3RvcmVOb3RlKHByb2plY3RUYWIsIG5vdGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUNhcmQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubGV0IHN3aXRjaFRhYnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXG4gICAgaWYgKHBhZ2VUaXRsZS5pbm5lckhUTUwgPT09ICdJbmJveCcpIHtcbiAgICAgICAgcG9wdWxhdGVOb3RlcyhwYWdlVGl0bGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlVGl0bGUuaW5uZXJIVE1MID09PSAnVG9kYXknKSB7XG4gICAgICAgIHBvcHVsYXRlTm90ZXMocGFnZVRpdGxlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZVRpdGxlLmlubmVySFRNTCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgcG9wdWxhdGVOb3RlcyhwYWdlVGl0bGUpO1xuICAgIH1cbn0pO1xuXG5jb25zdCB0YWJQYWdlUG9wdWxhdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFiJyk7XG4gICAgY29uc3QgdG9kYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktdGFiJyk7XG4gICAgY29uc3QgdGhpc1dlZWtUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhpcy13ZWVrLXRhYicpO1xuICAgIGNvbnN0IHByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXRhYicpO1xuICAgIGNvbnN0IHRhYkFyciA9IFtpbmJveFRhYiwgdG9kYXlUYWIsIHRoaXNXZWVrVGFiLCBwcm9qZWN0c1RhYl07XG4gICAgbGV0IHBnVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcblxuICAgIGluYm94VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWJBcnIuZm9yRWFjaCh0YWIgPT4ge3RhYi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCd9KTtcbiAgICAgICAgaW5ib3hUYWIuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcGdUaXRsZS5pbm5lckhUTUwgPSAnSW5ib3gnO1xuICAgICAgICBzd2l0Y2hUYWJzKCk7XG4gICAgfSk7XG5cbiAgICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFiQXJyLmZvckVhY2godGFiID0+IHt0YWIuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnfSk7XG4gICAgICAgIHRvZGF5VGFiLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHBnVGl0bGUuaW5uZXJIVE1MID0gJ1RvZGF5JztcbiAgICAgICAgc3dpdGNoVGFicygpXG4gICAgfSk7XG5cbiAgICB0aGlzV2Vla1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFiQXJyLmZvckVhY2godGFiID0+IHt0YWIuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnfSk7XG4gICAgICAgIHRoaXNXZWVrVGFiLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHBnVGl0bGUuaW5uZXJIVE1MID0gJ1RoaXMgV2Vlayc7XG4gICAgICAgIHN3aXRjaFRhYnMoKVxuICAgIH0pO1xuXG59KTtcblxuZnVuY3Rpb24gZGVmYXVsdFRhYkxvYWQoKSB7XG4gICAgc3dpdGNoVGFicygpO1xufVxuXG5leHBvcnQge1xuICAgIGluY3JlbWVudE5vdGVMaXN0ZW5lcixcbiAgICB0YWJQYWdlUG9wdWxhdGlvbixcbiAgICBkZWZhdWx0VGFiTG9hZCxcbn0iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNsb3NlQ2FyZCgpIHtcbiAgICBsZXQgYmxhY2tPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsYWNrLW92ZXJsYXknKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoYmxhY2tPdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCgpIHtcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnR0VUJyk7XG5cbiAgICBsZXQgY2FyZENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudC1jb250YWluZXInKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50Q29udGFpbmVyKTtcblxuICAgIGxldCBjYXJkVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZS1jb250YWluZXInKTtcbiAgICBjYXJkQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGl0bGVDb250YWluZXIpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZS1pbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtYXhMZW5ndGgnLCAnMjAnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFRhc2sgTmFtZScpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY2FyZFRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICdjbG9zZSc7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlQ2FyZCgpO1xuICAgIH0pO1xuICAgIGNhcmRUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICBsZXQgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Jpem9udGFsTGluZS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLWxpbmUnKTtcbiAgICBjYXJkQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Jpem9udGFsTGluZSk7XG5cbiAgICBsZXQgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnKTtcbiAgICBjYXJkQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdHlsaW5nJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heExlbmd0aCcsICc0MDAnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBsZXQgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1kYXRlLWNvbnRhaW5lcicpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtaW5wdXQnKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlOic7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN0eWxpbmcnLCAnY2FyZC1pbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaW9yaXR5LWNvbnRhaW5lcicpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcblxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1pbnB1dCcpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gJ1ByaW9yaXR5Oic7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3R5bGluZycsICdjYXJkLWlucHV0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1pbnB1dCcpO1xuICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0Q29udGFpbmVyKTtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcmlvcml0eU9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICBwcmlvcml0eU9wdGlvbjEuaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjEpO1xuXG4gICAgbGV0IHByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByaW9yaXR5T3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgIHByaW9yaXR5T3B0aW9uMi5pbm5lckhUTUwgPSAnTWVkaXVtJztcbiAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMik7XG5cbiAgICBsZXQgcHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJpb3JpdHlPcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgIHByaW9yaXR5T3B0aW9uMy5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlPcHRpb24zKTtcblxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKTtcbiAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1pbnB1dCcpO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAnUHJvamVjdDonO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3R5bGluZycsICdjYXJkLWlucHV0Jyk7XG4gICAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1pbnB1dCcpO1xuICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcblxuICAgIGxldCBwcm9qZWN0T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByb2plY3RPcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaW5ib3gnKTtcbiAgICBwcm9qZWN0T3B0aW9uMS5pbm5lckhUTUwgPSAnSW5ib3gnO1xuICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uMSk7XG5cbiAgICBsZXQgc3VibWlzc2lvbkJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXNzaW9uQnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJtaXNzaW9uLWJ0bnMtY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWlzc2lvbkJ0bnNDb250YWluZXIpO1xuXG4gICAgbGV0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gICAgcmVzZXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0Jyk7XG4gICAgcmVzZXRCdG4uaW5uZXJIVE1MID0gJ1Jlc2V0IFRhc2snO1xuICAgIHN1Ym1pc3Npb25CdG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcblxuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgc3VibWlzc2lvbkJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVOb3RlKCkge1xuICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tCdWJibGUuY2xhc3NMaXN0LmFkZCgnY2hlY2stYnViYmxlJyk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0J1YmJsZSk7XG4gICAgICAgIFxuICAgIGxldCBib2R5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBib2R5VGV4dC5jbGFzc0xpc3QuYWRkKCdub3RlLXRleHQnKTtcbiAgICBib2R5VGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLl90ZXh0fWA7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG5cbiAgICByZXR1cm4gbm90ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcGxleE5vdGUoKSB7XG4gICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgY2hlY2tCdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0J1YmJsZS5jbGFzc0xpc3QuYWRkKCdjaGVjay1idWJibGUnKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQnViYmxlKTtcbiAgICBcbiAgICBsZXQgbm90ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbm90ZVRpbWUuY2xhc3NMaXN0LmFkZCgnbm90ZS10ZXh0JywgJ25vdGUtdGltZScpO1xuICAgIG5vdGVUaW1lLmlubmVySFRNTCA9IGAke3RoaXMudGltZX1gO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZVRpbWUpO1xuXG4gICAgbGV0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZCgnc2VwYXJhdG9yJylcbiAgICBzZXBhcmF0b3IuaW5uZXJIVE1MID0gJyAtICc7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXG4gICAgbGV0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbm90ZS10ZXh0Jyk7XG4gICAgbm90ZVRpdGxlLmlubmVySFRNTCA9IGAke3RoaXMudGl0bGV9YDtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVUaXRsZSk7XG5cbiAgICByZXR1cm4gbm90ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZUlucHV0KCkge1xuICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1YmJsZS5jbGFzc0xpc3QuYWRkKCdjaGVjay1idWJibGUnKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1YmJsZSk7XG5cbiAgICBsZXQgbm90ZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtaW5wdXQtY29udGFpbmVyJyk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlSW5wdXRDb250YWluZXIpO1xuXG4gICAgbGV0IG5vdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25vdGUtaW5wdXQnKTtcbiAgICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgYSB0YXNrJyk7XG4gICAgbm90ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVJbnB1dCk7XG5cbiAgICByZXR1cm4gbm90ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxhY2tPdmVybGF5KCkge1xuICAgIGxldCBibGFja092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibGFja092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYmxhY2stb3ZlcmxheScpO1xuXG4gICAgcmV0dXJuIGJsYWNrT3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQmxhY2tPdmVybGF5KCkge1xuICAgIGxldCBibGFja092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCcuYmxhY2stb3ZlcmxheScpO1xuICAgIGJsYWNrT3ZlcmxheS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IHtcbiAgICBjbG9zZUNhcmQsXG4gICAgY3JlYXRlQ2FyZCxcbiAgICBjcmVhdGVTaW1wbGVOb3RlLFxuICAgIGNyZWF0ZUNvbXBsZXhOb3RlLFxuICAgIGNyZWF0ZU5vdGVJbnB1dCxcbiAgICBjcmVhdGVCbGFja092ZXJsYXksXG4gICAgcmVtb3ZlQmxhY2tPdmVybGF5XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7dGFiUGFnZVBvcHVsYXRpb259IGZyb20gJy4vbW9kdWxlcy9hcHBsaWNhdGlvbi1sb2dpYy5qcyc7XG5pbXBvcnQge2RlZmF1bHRUYWJMb2FkfSBmcm9tICcuL21vZHVsZXMvYXBwbGljYXRpb24tbG9naWMuanMnO1xuaW1wb3J0IHtpbmNyZW1lbnROb3RlTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hcHBsaWNhdGlvbi1sb2dpYy5qcyc7XG5cbmluY3JlbWVudE5vdGVMaXN0ZW5lcigpO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmJveE5vdGVzQXJyXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwiaW5ib3hOb3Rlc0FyclwiLCBKU09OLnN0cmluZ2lmeShbXSkgKTtcbn1cblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kYXlOb3Rlc0FyclwiKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcInRvZGF5Tm90ZXNBcnJcIiwgSlNPTi5zdHJpbmdpZnkoW10pICk7XG59XG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoaXNXZWVrTm90ZXNBcnJcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJ0aGlzV2Vla05vdGVzQXJyXCIsIEpTT04uc3RyaW5naWZ5KFtdKSApO1xufVxuXG4vLyBsZXQgc3RvcmVkSW5ib3hOb3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94Tm90ZXMnKSk7XG4vLyBUaGUgYWJvdmUgaXMgaG93IHRvIGNhbGwgdGhlIGFycmF5IHNldCBpbiBsb2NhbCBzdG9yYWdlXG5cbmluaXQoKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkZWZhdWx0VGFiTG9hZCgpO1xuICAgIHRhYlBhZ2VQb3B1bGF0aW9uKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==