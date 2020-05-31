/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameBoard.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameBoard.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CellInterior {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%; }\n\n.CellContainer {\n  width: 24px;\n  height: 24px; }\n\n.BoardRow {\n  display: flex;\n  flex-direction: row; }\n\n.BoardContainer {\n  width: fit-content;\n  height: fit-content; }\n\n.GameContainer {\n  width: fit-content;\n  height: fit-content;\n  padding: 10px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/head.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/head.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CounterContainer {\n  display: flex;\n  flex-direction: row;\n  margin: 5px; }\n\n.HeadContainer {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-sizing: border-box; }\n\n.NewGameBTN {\n  width: 30px;\n  height: 30px; }\n\n.CounterImage {\n  width: 13px;\n  height: 25px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".normal_theme .BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: white;\n  border-left-color: white;\n  border-bottom-color: #6e6e6e;\n  border-right-color: #6e6e6e;\n  background-color: #c4c4c4; }\n  .normal_theme .BorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #6e6e6e;\n    border-left-color: #6e6e6e;\n    border-bottom-color: white;\n    border-right-color: white;\n    background-color: #c4c4c4; }\n\n.normal_theme .ReversedBorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #6e6e6e;\n  border-left-color: #6e6e6e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #c4c4c4; }\n  .normal_theme .ReversedBorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: white;\n    border-left-color: white;\n    border-bottom-color: #6e6e6e;\n    border-right-color: #6e6e6e;\n    background-color: #c4c4c4; }\n\n.normal_theme .NonBorderedContainer {\n  border: solid 1px #555555;\n  background-color: #b8b8b8; }\n\n.normal_theme button.BorderedContainer:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #6e6e6e;\n  border-left-color: #6e6e6e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #c4c4c4; }\n\n.normal_theme .CellEnabled:hover {\n  background-color: #b7b7b7; }\n\n.normal_theme .MenuItemLabel {\n  box-sizing: border-box;\n  user-select: none;\n  width: fit-content;\n  border: solid white 2px;\n  background-color: #c4c4c4;\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.dark_theme .BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #bfbfbf;\n  border-left-color: #bfbfbf;\n  border-bottom-color: #2e2e2e;\n  border-right-color: #2e2e2e;\n  background-color: #848484; }\n  .dark_theme .BorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #2e2e2e;\n    border-left-color: #2e2e2e;\n    border-bottom-color: #bfbfbf;\n    border-right-color: #bfbfbf;\n    background-color: #848484; }\n\n.dark_theme .ReversedBorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #2e2e2e;\n  border-left-color: #2e2e2e;\n  border-bottom-color: #bfbfbf;\n  border-right-color: #bfbfbf;\n  background-color: #848484; }\n  .dark_theme .ReversedBorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #bfbfbf;\n    border-left-color: #bfbfbf;\n    border-bottom-color: #2e2e2e;\n    border-right-color: #2e2e2e;\n    background-color: #848484; }\n\n.dark_theme .NonBorderedContainer {\n  border: solid 1px #151515;\n  background-color: #333333; }\n\n.dark_theme button.BorderedContainer:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #2e2e2e;\n  border-left-color: #2e2e2e;\n  border-bottom-color: #bfbfbf;\n  border-right-color: #bfbfbf;\n  background-color: #848484; }\n\n.dark_theme .CellEnabled:hover {\n  background-color: #787878; }\n\n.dark_theme .MenuItemLabel {\n  box-sizing: border-box;\n  user-select: none;\n  width: fit-content;\n  border: solid #bfbfbf 2px;\n  background-color: #848484;\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.end_city_theme .BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #f9f1ff;\n  border-left-color: #f9f1ff;\n  border-bottom-color: #be78f8;\n  border-right-color: #be78f8;\n  background-color: #e3c4fc; }\n  .end_city_theme .BorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #be78f8;\n    border-left-color: #be78f8;\n    border-bottom-color: #f9f1ff;\n    border-right-color: #f9f1ff;\n    background-color: #e3c4fc; }\n\n.end_city_theme .ReversedBorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #be78f8;\n  border-left-color: #be78f8;\n  border-bottom-color: #f9f1ff;\n  border-right-color: #f9f1ff;\n  background-color: #e3c4fc; }\n  .end_city_theme .ReversedBorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #f9f1ff;\n    border-left-color: #f9f1ff;\n    border-bottom-color: #be78f8;\n    border-right-color: #be78f8;\n    background-color: #e3c4fc; }\n\n.end_city_theme .NonBorderedContainer {\n  border: solid 1px #6b6b6b;\n  background-color: #f1e0b2; }\n\n.end_city_theme button.BorderedContainer:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #be78f8;\n  border-left-color: #be78f8;\n  border-bottom-color: #f9f1ff;\n  border-right-color: #f9f1ff;\n  background-color: #e3c4fc; }\n\n.end_city_theme .CellEnabled:hover {\n  background-color: #d7acfb; }\n\n.end_city_theme .MenuItemLabel {\n  box-sizing: border-box;\n  user-select: none;\n  width: fit-content;\n  border: solid #f9f1ff 2px;\n  background-color: #e3c4fc;\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.hight_contrast_theme .BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: white;\n  border-left-color: white;\n  border-bottom-color: #2e2e2e;\n  border-right-color: #2e2e2e;\n  background-color: #949494; }\n  .hight_contrast_theme .BorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: #2e2e2e;\n    border-left-color: #2e2e2e;\n    border-bottom-color: white;\n    border-right-color: white;\n    background-color: #949494; }\n\n.hight_contrast_theme .ReversedBorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #2e2e2e;\n  border-left-color: #2e2e2e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #949494; }\n  .hight_contrast_theme .ReversedBorderedContainer.Clickable:active {\n    border-width: 3px;\n    border-style: solid;\n    border-top-color: white;\n    border-left-color: white;\n    border-bottom-color: #2e2e2e;\n    border-right-color: #2e2e2e;\n    background-color: #949494; }\n\n.hight_contrast_theme .NonBorderedContainer {\n  border: solid 1px #0f0f0f;\n  background-color: white; }\n\n.hight_contrast_theme button.BorderedContainer:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #2e2e2e;\n  border-left-color: #2e2e2e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #949494; }\n\n.hight_contrast_theme .CellEnabled:hover {\n  background-color: #878787; }\n\n.hight_contrast_theme .MenuItemLabel {\n  box-sizing: border-box;\n  user-select: none;\n  width: fit-content;\n  border: solid white 2px;\n  background-color: #949494;\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.ImgDIV {\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.RankingElement {\n  color: white;\n  margin-top: 10px;\n  padding: 10px;\n  border: solid 1px white;\n  width: 300px; }\n\nbody {\n  background-color: #1d1d1d; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Menu {\n  height: 20px;\n  display: flex;\n  flex-direction: row; }\n\n.MenuItemContainer {\n  position: relative;\n  top: -2px;\n  box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.44);\n  width: fit-content; }\n\n.OptionsTabHead {\n  background-color: #bebebe; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = __webpack_require__(/*! ./events/EventHandler */ "./src/events/EventHandler.ts");
const logDecorators_1 = __webpack_require__(/*! ./logDecorators */ "./src/logDecorators.ts");
const serverRequirements_1 = __webpack_require__(/*! ./serverThings/serverRequirements */ "./src/serverThings/serverRequirements.ts");
class Client {
    constructor(nick = "unknown") {
        this.Nick = nick;
        this.isOpened = false;
        this.InitializeEventHandlers();
    }
    get URL() {
        return this.url;
    }
    get Nick() {
        return this.nick;
    }
    set Nick(value) {
        this.nick = value;
    }
    get IsOpened() {
        return this.isOpened;
    }
    get OnOpenEventHandler() {
        return this.onOpenEventHandler;
    }
    get OnReceiveEventHandler() {
        return this.onReceiveEventHandler;
    }
    get OnErrorEventHandler() {
        return this.onErrorEventHandler;
    }
    Connect(url = "ws://localhost:8080") {
        this.url = url;
        this.socket = new WebSocket(this.url);
        this.socket.onopen = () => {
            this.InitializeSocket();
            this.Opened();
        };
    }
    InitializeEventHandlers() {
        this.onOpenEventHandler = new EventHandler_1.default();
        this.onReceiveEventHandler = new EventHandler_1.default();
        this.onErrorEventHandler = new EventHandler_1.default();
    }
    InitializeSocket() {
        this.socket.onmessage = (event) => { this.Received(event.data); };
        this.socket.onerror = (event) => { this.Error(event); };
    }
    Send(message) {
        this.socket.send(JSON.stringify(message));
    }
    SendRankingRequest() {
        const message = { type: serverRequirements_1.MessageTypes.rankingRequest, data: null };
        this.socket.send(JSON.stringify(message));
    }
    SendScoreAndGameType(time, gameType) {
        const ScoreAndGameType = { nick: this.nick, time, gameType };
        const message = { type: serverRequirements_1.MessageTypes.scoreAndGameType, data: ScoreAndGameType };
        this.socket.send(JSON.stringify(message));
    }
    Received(data) {
        try {
            const message = JSON.parse(data);
            this.onReceiveEventHandler.ExecuteListeners(message);
        }
        catch (_a) {
            this.Error(new Event("Data parse error."));
        }
    }
    Opened() {
        this.isOpened = true;
        this.onOpenEventHandler.ExecuteListeners();
    }
    Error(e) {
        this.onErrorEventHandler.ExecuteListeners({ e });
    }
}
__decorate([
    logDecorators_1.LogMethod
], Client.prototype, "Received", null);
exports.default = Client;


/***/ }),

/***/ "./src/components/Clickable.ts":
/*!*************************************!*\
  !*** ./src/components/Clickable.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = __webpack_require__(/*! ../events/EventManager */ "./src/events/EventManager.ts");
class Clickable {
    constructor() {
        this.eventManager = new EventManager_1.default();
        this.eventManager.AddEventHandler("click");
        this.Enabled = true;
    }
    AddOnClickListener(func) {
        return this.eventManager.GetEventHandler("click").AddEventListener(func);
    }
    Clicked(args) {
        if (this.Enabled) {
            this.eventManager.GetEventHandler("click").ExecuteListeners(args);
        }
    }
    Enable() {
        this.Enabled = true;
    }
    Disable() {
        this.Enabled = false;
    }
}
exports.default = Clickable;


/***/ }),

/***/ "./src/components/GameContainer.ts":
/*!*****************************************!*\
  !*** ./src/components/GameContainer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __webpack_require__(/*! ./boardComponents/Board */ "./src/components/boardComponents/Board.ts");
const HeadContainer_1 = __webpack_require__(/*! ./headComponents/HeadContainer */ "./src/components/headComponents/HeadContainer.ts");
const menu_1 = __webpack_require__(/*! ./MenuComponents/menu */ "./src/components/MenuComponents/menu.ts");
const GameOptionsMenuTab_1 = __webpack_require__(/*! ./MenuComponents/GameOptionsMenuTab */ "./src/components/MenuComponents/GameOptionsMenuTab.ts");
const ThemeOptionsMenuTab_1 = __webpack_require__(/*! ./MenuComponents/ThemeOptionsMenuTab */ "./src/components/MenuComponents/ThemeOptionsMenuTab.ts");
const RankingOprionsMenuTab_1 = __webpack_require__(/*! ./MenuComponents/RankingOprionsMenuTab */ "./src/components/MenuComponents/RankingOprionsMenuTab.ts");
class GameContainer {
    constructor() {
        this.InitializeHead();
        this.InitializeMenu();
        this.InitializeBoardContainer();
        this.InitializeElement();
    }
    get Board() {
        return this.board;
    }
    get Head() {
        return this.head;
    }
    get Menu() {
        return this.menu;
    }
    SetTheme(theme) {
        if (this.theme == null) {
            this.element.classList.add(theme);
        }
        else {
            this.element.classList.replace(this.theme, theme);
        }
        this.theme = theme;
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        const mainContainer = document.createElement('DIV');
        mainContainer.classList.add("GameContainer");
        mainContainer.classList.add("BorderedContainer");
        mainContainer.addEventListener('contextmenu', event => event.preventDefault());
        const headConteiner = document.createElement('DIV');
        headConteiner.classList.add("ReversedBorderedContainer");
        headConteiner.classList.add("HeadContainer");
        headConteiner.appendChild(this.head.GetComponent());
        mainContainer.appendChild(headConteiner);
        mainContainer.appendChild(this.boardContainer);
        this.element.appendChild(this.menu.GetComponent());
        this.element.appendChild(mainContainer);
        this.SetTheme('normal_theme');
    }
    InitializeMenu() {
        this.menu = new menu_1.default();
        this.menu.AddItem(0, "Game", new GameOptionsMenuTab_1.default());
        this.menu.AddItem(1, "Theme", new ThemeOptionsMenuTab_1.default());
        this.menu.AddItem(2, "Ranking", new RankingOprionsMenuTab_1.default());
    }
    InitializeHead() {
        this.head = new HeadContainer_1.default();
    }
    InitializeBoardContainer() {
        this.boardContainer = document.createElement('DIV');
        this.boardContainer.classList.add("ReversedBorderedContainer");
        this.boardContainer.style.marginTop = "10px";
        this.boardContainer.style.userSelect = 'none';
    }
    SetNewBoard(size) {
        this.board = new Board_1.default(size);
        this.boardContainer.innerHTML = "";
        this.boardContainer.appendChild(this.board.GetComponent());
    }
    GetComponent() {
        return this.element;
    }
    Reset() {
        this.head.Reset();
        this.board.Reset();
    }
}
exports.default = GameContainer;


/***/ }),

/***/ "./src/components/MenuComponents/GameOptionsMenuTab.ts":
/*!*************************************************************!*\
  !*** ./src/components/MenuComponents/GameOptionsMenuTab.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = __webpack_require__(/*! ../../events/EventManager */ "./src/events/EventManager.ts");
const functions_1 = __webpack_require__(/*! ./functions */ "./src/components/MenuComponents/functions.ts");
class GameOptionsTable {
    constructor() {
        this.id = GameOptionsTable.curentID++;
        this.InitializeRadioButtons();
        this.table = document.createElement('TABLE');
        this.table.classList.add('ReversedBorderedContainer');
        this.AppendRow(0, ["", "Width", "Height", "Bombs"]);
        this.AppendRow(1, [functions_1.GetLabeledElement(this.radioButtnos[0], "Beginner"), "8", "8", "10"]);
        this.AppendRow(2, [functions_1.GetLabeledElement(this.radioButtnos[1], "Intermediate"), "16", "16", "40"]);
        this.AppendRow(3, [functions_1.GetLabeledElement(this.radioButtnos[2], "Expert"), "32", "16", "99"]);
        this.customWidthInput = document.createElement('INPUT');
        this.customWidthInput.style.width = '40px';
        this.customHeightInput = document.createElement('INPUT');
        this.customHeightInput.style.width = '40px';
        this.customBombsInput = document.createElement('INPUT');
        this.customBombsInput.style.width = '40px';
        this.AppendRow(4, [functions_1.GetLabeledElement(this.radioButtnos[3], "Custom"), this.customWidthInput, this.customHeightInput, this.customBombsInput]);
    }
    get GameType() {
        return this.gameType;
    }
    get CustomValue() {
        return { width: parseInt(this.customWidthInput.value), height: parseInt(this.customHeightInput.value), bombs: parseInt(this.customBombsInput.value) };
    }
    Check(gameType) {
        this.radioButtnos[gameType].checked = true;
        this.OnSelectionChange(gameType);
    }
    InitializeRadioButtons() {
        const numberOfButtons = 4;
        const name = "GameTypes" + this.id.toString();
        this.radioButtnos = new Array(numberOfButtons);
        for (let i = 0; i < numberOfButtons; i++) {
            this.radioButtnos[i] = document.createElement("INPUT");
            this.radioButtnos[i].setAttribute("type", "radio");
            this.radioButtnos[i].name = name;
            this.radioButtnos[i].onchange = () => {
                this.OnSelectionChange(i);
            };
        }
    }
    OnSelectionChange(gameType) {
        this.gameType = gameType;
    }
    AppendRow(index = 0, elements) {
        const row = this.table.insertRow(index);
        for (let i = elements.length - 1; i >= 0; i--) {
            const cell = row.insertCell(0);
            if (elements[i] instanceof HTMLElement) {
                cell.appendChild(elements[i]);
            }
            else if (typeof elements[i] === 'string') {
                cell.innerHTML = elements[i];
            }
        }
    }
    GetComponent() {
        return this.table;
    }
}
GameOptionsTable.curentID = 0;
class GameOptionsTab {
    constructor() {
        this.eventManager = new EventManager_1.default();
        this.eventManager.AddEventHandler("OnSubmit");
        this.element = document.createElement('DIV');
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';
        this.got = new GameOptionsTable();
        this.element.appendChild(this.got.GetComponent());
        const subBTN = document.createElement('BUTTON');
        subBTN.innerText = "Submit";
        subBTN.style.width = '100%';
        subBTN.style.marginTop = '5px';
        subBTN.classList.add("BorderedContainer");
        subBTN.addEventListener('click', () => { this.Submited(); });
        this.element.appendChild(subBTN);
    }
    get CustomValue() {
        return this.got.CustomValue;
    }
    Check(gameType) {
        this.got.Check(gameType);
    }
    AddOnSubmitEventListener(func) {
        this.eventManager.GetEventHandler('OnSubmit').AddEventListener(func);
    }
    Submited() {
        const onSubmitEventHandler = this.eventManager.GetEventHandler('OnSubmit');
        onSubmitEventHandler.ExecuteListeners({ gameType: this.got.GameType });
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = GameOptionsTab;


/***/ }),

/***/ "./src/components/MenuComponents/RankingOprionsMenuTab.ts":
/*!****************************************************************!*\
  !*** ./src/components/MenuComponents/RankingOprionsMenuTab.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = __webpack_require__(/*! ../../events/EventHandler */ "./src/events/EventHandler.ts");
class NickInput {
    constructor() {
        this.element = document.createElement('INPUT');
        this.element.type = 'text';
        this.element.maxLength = 20;
    }
    get Value() {
        return this.element.value;
    }
    set Value(value) {
        this.element.value = value;
    }
    GetComponent() {
        return this.element;
    }
}
class RankingOprionsMenuTab {
    constructor() {
        this.onSubmitEventHandler = new EventHandler_1.default();
        this.nickInput = new NickInput();
        this.InitializeSubmitBTN();
        this.InitializeElement();
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';
        const inputContainer = document.createElement('DIV');
        inputContainer.classList.add('ReversedBorderedContainer');
        const label = document.createElement('DIV');
        label.innerText = "Nick";
        inputContainer.appendChild(label);
        inputContainer.appendChild(this.nickInput.GetComponent());
        this.element.appendChild(inputContainer);
        this.element.appendChild(this.submitBTN);
    }
    InitializeSubmitBTN() {
        this.submitBTN = document.createElement('BUTTON');
        this.submitBTN.innerText = "Submit";
        this.submitBTN.style.width = '100%';
        this.submitBTN.style.marginTop = '5px';
        this.submitBTN.classList.add("BorderedContainer");
        this.submitBTN.addEventListener('click', () => { this.Submited(); });
    }
    Submited() {
        const nick = this.nickInput.Value;
        this.onSubmitEventHandler.ExecuteListeners({ nick });
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = RankingOprionsMenuTab;


/***/ }),

/***/ "./src/components/MenuComponents/ThemeOptionsMenuTab.ts":
/*!**************************************************************!*\
  !*** ./src/components/MenuComponents/ThemeOptionsMenuTab.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __webpack_require__(/*! ./functions */ "./src/components/MenuComponents/functions.ts");
const EventManager_1 = __webpack_require__(/*! ../../events/EventManager */ "./src/events/EventManager.ts");
const themes = [
    'normal_theme',
    'dark_theme',
    'hight_contrast_theme',
    'end_city_theme'
];
class ThemeList {
    constructor() {
        this.id = ThemeList.curentID++;
        this.InitializeRadioButtons();
        this.InitializeElement();
    }
    get Value() {
        return this.value;
    }
    Check(theme) {
        for (let i = 0; i < themes.length; i++) {
            if (themes[i] == theme) {
                this.radioButtnos[i].checked = true;
                this.OnSelectionChange(i);
                return;
            }
        }
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        this.element.classList.add("ReversedBorderedContainer");
        const numberOfButtons = themes.length;
        for (let i = 0; i < numberOfButtons; i++) {
            this.element.appendChild(functions_1.GetLabeledElement(this.radioButtnos[i], themes[i]));
        }
    }
    InitializeRadioButtons() {
        const name = 'ThemeList' + this.id.toString();
        const numberOfButtons = themes.length;
        this.radioButtnos = new Array(numberOfButtons);
        for (let i = 0; i < numberOfButtons; i++) {
            this.radioButtnos[i] = document.createElement("INPUT");
            this.radioButtnos[i].setAttribute("type", "radio");
            this.radioButtnos[i].name = name;
            this.radioButtnos[i].onchange = () => {
                this.OnSelectionChange(i);
            };
        }
    }
    OnSelectionChange(index) {
        this.value = themes[index];
    }
    GetComponent() {
        return this.element;
    }
}
ThemeList.curentID = 0;
class ThemeOptionsMenuTab {
    constructor() {
        this.eventManager = new EventManager_1.default();
        this.eventManager.AddEventHandler("OnSubmit");
        this.themeList = new ThemeList();
        this.InitializeSubmitBTN();
        this.InitializeElement();
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        this.element.classList.add('BorderedContainer');
        this.element.style.width = 'fit-content';
        this.element.style.padding = '5px';
        this.element.appendChild(this.themeList.GetComponent());
        this.element.appendChild(this.submitBTN);
    }
    InitializeSubmitBTN() {
        this.submitBTN = document.createElement('BUTTON');
        this.submitBTN.innerText = "Submit";
        this.submitBTN.style.width = '100%';
        this.submitBTN.style.marginTop = '5px';
        this.submitBTN.classList.add("BorderedContainer");
        this.submitBTN.addEventListener('click', () => { this.Submited(); });
    }
    AddOnSubmitEventListener(func) {
        this.eventManager.GetEventHandler('OnSubmit').AddEventListener(func);
    }
    Submited() {
        const onSubmitEventHandler = this.eventManager.GetEventHandler('OnSubmit');
        onSubmitEventHandler.ExecuteListeners({ theme: this.themeList.Value });
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = ThemeOptionsMenuTab;


/***/ }),

/***/ "./src/components/MenuComponents/functions.ts":
/*!****************************************************!*\
  !*** ./src/components/MenuComponents/functions.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function GetLabeledElement(element, text) {
    const label = document.createElement('LABEL');
    label.style.display = 'flex';
    label.style.flexDirection = 'row';
    const textElement = document.createElement('TEXT');
    textElement.innerText = text;
    label.appendChild(element);
    label.appendChild(textElement);
    return label;
}
exports.GetLabeledElement = GetLabeledElement;


/***/ }),

/***/ "./src/components/MenuComponents/menu.ts":
/*!***********************************************!*\
  !*** ./src/components/MenuComponents/menu.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const menuItem_1 = __webpack_require__(/*! ./menuItem */ "./src/components/MenuComponents/menuItem.ts");
class Menu {
    constructor() {
        this.items = new Array();
        this.InitializeElement();
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        this.element.classList.add('Menu');
    }
    ReloadItems() {
        this.element.innerHTML = "";
        this.items.forEach(item => {
            this.element.appendChild(item.GetComponent());
        });
    }
    AddItem(index, name, element) {
        if (index < 0) {
            index = 0;
        }
        if (index > this.items.length) {
            index = this.items.length;
        }
        const item = new menuItem_1.default(name, element);
        item.AddOnClickListener((args) => {
            if (args.action == menuItem_1.MenuItemViewActions.close) {
                item.Close();
            }
            else {
                this.CloseAllItems();
                item.Open();
            }
        });
        const newItems = new Array();
        for (let i = 0; i < index; i++) {
            newItems.push(this.items[i]);
        }
        newItems.push(item);
        for (let i = index; i < this.items.length; i++) {
            newItems.push(this.items[i]);
        }
        this.items = newItems;
        this.ReloadItems();
    }
    CloseAllItems() {
        this.items.forEach(item => {
            item.Close();
        });
    }
    GetItemByIndex(index) {
        return this.items[index];
    }
    GetItemByName(name) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].Name == name) {
                return this.items[i];
            }
        }
        return undefined;
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = Menu;


/***/ }),

/***/ "./src/components/MenuComponents/menuItem.ts":
/*!***************************************************!*\
  !*** ./src/components/MenuComponents/menuItem.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Clickable_1 = __webpack_require__(/*! ../Clickable */ "./src/components/Clickable.ts");
var MenuItemViewActions;
(function (MenuItemViewActions) {
    MenuItemViewActions[MenuItemViewActions["open"] = 0] = "open";
    MenuItemViewActions[MenuItemViewActions["close"] = 1] = "close";
})(MenuItemViewActions = exports.MenuItemViewActions || (exports.MenuItemViewActions = {}));
class MenuItem extends Clickable_1.default {
    constructor(name, item) {
        super();
        this.opened = false;
        this.InitializeLabel();
        this.InitializeItemContainer();
        this.InitializeElement();
        this.SetName(name);
        this.SetItem(item);
    }
    get Item() {
        return this.item;
    }
    get Name() {
        return this.name;
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        const dummyDiv = document.createElement('DIV');
        dummyDiv.style.width = '0px';
        dummyDiv.style.height = '0px';
        dummyDiv.appendChild(this.itemContainer);
        this.element.appendChild(this.label);
        this.element.appendChild(dummyDiv);
    }
    InitializeLabel() {
        this.label = document.createElement('DIV');
        this.label.classList.add('MenuItemLabel');
        this.label.onclick = () => {
            this.OnLabelClick();
        };
    }
    InitializeItemContainer() {
        this.itemContainer = document.createElement('DIV');
        this.itemContainer.classList.add('MenuItemContainer');
        this.itemContainer.style.visibility = 'hidden';
    }
    SetName(name) {
        this.name = name;
        this.label.innerText = this.name;
    }
    SetItem(item) {
        if (item == undefined) {
            return;
        }
        this.item = item;
        this.itemContainer.appendChild(this.item.GetComponent());
    }
    Close() {
        this.itemContainer.style.visibility = 'hidden';
        this.label.style.fontWeight = 'normal';
        this.opened = false;
    }
    Open() {
        this.itemContainer.style.visibility = 'visible';
        this.label.style.fontWeight = 'bold';
        this.opened = true;
    }
    OnLabelClick() {
        if (this.opened) {
            this.Clicked({ action: MenuItemViewActions.close });
        }
        else {
            this.Clicked({ action: MenuItemViewActions.open });
        }
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = MenuItem;


/***/ }),

/***/ "./src/components/boardComponents/Board.ts":
/*!*************************************************!*\
  !*** ./src/components/boardComponents/Board.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Clickable_1 = __webpack_require__(/*! ../Clickable */ "./src/components/Clickable.ts");
const Cell_1 = __webpack_require__(/*! ./Cell */ "./src/components/boardComponents/Cell.ts");
class Board extends Clickable_1.default {
    constructor(size) {
        super();
        this.size = size;
        this.cells = new Array(this.size.width * this.size.height);
        this.FillBoard();
    }
    BoardIndexOf(x, y) {
        return x + y * this.size.width;
    }
    FillBoard() {
        for (let y = 0; y < this.size.height; y++) {
            for (let x = 0; x < this.size.width; x++) {
                const cell = new Cell_1.default();
                const position = { x, y };
                cell.AddOnClickListener((args) => {
                    const clickArgs = Object.assign(Object.assign({}, position), args);
                    this.Clicked(clickArgs);
                });
                this.cells[this.BoardIndexOf(x, y)] = cell;
            }
        }
    }
    GetComponent() {
        const container = document.createElement('DIV');
        container.classList.add("BoardContainer");
        for (var y = 0; y < this.size.height; y++) {
            const row = document.createElement('DIV');
            row.classList.add("BoardRow");
            for (var x = 0; x < this.size.width; x++) {
                row.appendChild(this.cells[this.BoardIndexOf(x, y)].GetComponent());
            }
            container.appendChild(row);
        }
        return container;
    }
    Reset() {
        this.cells.forEach(cell => {
            cell.Reset();
        });
    }
}
exports.default = Board;


/***/ }),

/***/ "./src/components/boardComponents/Cell.ts":
/*!************************************************!*\
  !*** ./src/components/boardComponents/Cell.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Clickable_1 = __webpack_require__(/*! ../Clickable */ "./src/components/Clickable.ts");
var CellClickTypes;
(function (CellClickTypes) {
    CellClickTypes[CellClickTypes["rightClick"] = 0] = "rightClick";
    CellClickTypes[CellClickTypes["leftClick"] = 1] = "leftClick";
})(CellClickTypes = exports.CellClickTypes || (exports.CellClickTypes = {}));
class Cell extends Clickable_1.default {
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellInterior");
        this.element.classList.add("CellEnabled");
        this.SetBackgroundColor();
        this.element.addEventListener('click', () => { this.Clicked({ type: CellClickTypes.leftClick }); });
        this.element.addEventListener('contextmenu', () => { this.Clicked({ type: CellClickTypes.rightClick }); });
    }
    SetImage(path) {
        this.element.innerHTML = "";
        if (path != undefined) {
            const img = document.createElement('DIV');
            img.classList.add('ImgDIV');
            img.style.backgroundImage = "url(" + path + ")";
            img.style.margin = "2px";
            img.style.width = "18px";
            img.style.height = "18px";
            this.element.appendChild(img);
        }
    }
    SetBackgroundColor(color = null) {
        if (color == null) {
            this.element.style.backgroundColor = "";
            return;
        }
        this.element.style.backgroundColor = color;
    }
    Reset() {
        this.element.innerHTML = "";
        this.element.classList.add("BorderedContainer");
        this.element.classList.remove("NonBorderedContainer");
        this.element.classList.add("CellEnabled");
        this.SetBackgroundColor();
        this.Enable();
    }
    Enable() {
        if (!this.element.classList.contains("CellEnabled")) {
            this.element.classList.add("CellEnabled");
        }
        super.Enable();
    }
    Disable() {
        if (this.element.classList.contains("CellEnabled")) {
            this.element.classList.remove("CellEnabled");
            this.element.classList.replace("BorderedContainer", "NonBorderedContainer");
        }
        super.Disable();
    }
    GetComponent() {
        const container = document.createElement('DIV');
        container.classList.add('CellContainer');
        container.appendChild(this.element);
        return container;
    }
}
exports.default = Cell;


/***/ }),

/***/ "./src/components/headComponents/Counter.ts":
/*!**************************************************!*\
  !*** ./src/components/headComponents/Counter.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preLoad_1 = __webpack_require__(/*! ../../images/preLoad */ "./src/images/preLoad.ts");
class Counter {
    constructor(decimalPlaces) {
        this.element = document.createElement('DIV');
        this.element.classList.add("CounterContainer");
        this.decimalPlaces = decimalPlaces;
        this.CounterDigits = new Array(decimalPlaces);
        for (let i = 0; i < decimalPlaces; i++) {
            this.CounterDigits[i] = new CounterDigit();
            this.element.appendChild(this.CounterDigits[i].GetComponent());
        }
    }
    SetValue(value) {
        const strValue = Math.floor(value).toString().padStart(this.decimalPlaces, '0');
        for (let i = 0; i < this.decimalPlaces; i++) {
            this.CounterDigits[this.decimalPlaces - 1 - i].SetValue(strValue[strValue.length - 1 - i]);
        }
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = Counter;
class CounterDigit {
    constructor() {
        this.element = document.createElement("DIV");
        this.element.classList.add('CounterImage');
        this.element.draggable = false;
        this.SetValue('0');
    }
    SetValue(value) {
        this.element.style.backgroundImage = "url(" + preLoad_1.default["c" + value].src + ")";
    }
    GetComponent() {
        return this.element;
    }
}


/***/ }),

/***/ "./src/components/headComponents/HeadContainer.ts":
/*!********************************************************!*\
  !*** ./src/components/headComponents/HeadContainer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Counter_1 = __webpack_require__(/*! ./Counter */ "./src/components/headComponents/Counter.ts");
const NewGameBTN_1 = __webpack_require__(/*! ./NewGameBTN */ "./src/components/headComponents/NewGameBTN.ts");
class HeadContainer {
    constructor() {
        this.leftCounter = new Counter_1.default(3);
        this.rightCounter = new Counter_1.default(3);
        this.newGameBTN = new NewGameBTN_1.default();
    }
    get LeftCounter() {
        return this.leftCounter;
    }
    get RigthCounter() {
        return this.rightCounter;
    }
    get NewGameBTN() {
        return this.newGameBTN;
    }
    Reset() {
        this.leftCounter.SetValue(0);
        this.rightCounter.SetValue(0);
    }
    GetComponent() {
        const element = document.createElement('DIV');
        element.classList.add("HeadContainer");
        element.appendChild(this.leftCounter.GetComponent());
        element.appendChild(this.newGameBTN.GetComponent());
        element.appendChild(this.rightCounter.GetComponent());
        return element;
    }
}
exports.default = HeadContainer;


/***/ }),

/***/ "./src/components/headComponents/NewGameBTN.ts":
/*!*****************************************************!*\
  !*** ./src/components/headComponents/NewGameBTN.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Clickable_1 = __webpack_require__(/*! ../Clickable */ "./src/components/Clickable.ts");
const preLoad_1 = __webpack_require__(/*! ../../images/preLoad */ "./src/images/preLoad.ts");
class NewGameBTN extends Clickable_1.default {
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add('NewGameBTN');
        this.element.classList.add('BorderedContainer');
        this.element.classList.add('Clickable');
        this.element.classList.add('CellEnabled');
        this.SetImage(preLoad_1.default['e1'].src);
        this.element.addEventListener('click', () => { this.Clicked(); });
    }
    SetImage(path) {
        const img = document.createElement('DIV');
        img.classList.add('ImgDIV');
        img.style.backgroundImage = "url(" + path + ")";
        img.style.width = "100%";
        img.style.height = "100%";
        this.element.innerHTML = "";
        this.element.appendChild(img);
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = NewGameBTN;


/***/ }),

/***/ "./src/components/rankingComponents/RankingContainer.ts":
/*!**************************************************************!*\
  !*** ./src/components/rankingComponents/RankingContainer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameTypes_1 = __webpack_require__(/*! ../../logic/gameTypes */ "./src/logic/gameTypes.ts");
class Row {
    constructor(place) {
        this.place = place.toString();
        this.element = document.createElement("DIV");
        this.element.innerText = this.place;
    }
    Set(score) {
        const time = (Math.round(score.time / 100) / 10).toString();
        this.element.innerText = this.place + ". " + score.nick + "  " + time;
    }
    GetComponent() {
        return this.element;
    }
}
class Header {
    constructor(name) {
        this.name = name;
        this.InitializeElement();
    }
    InitializeElement() {
        this.element = document.createElement("DIV");
        this.element.innerText = this.name;
    }
    GetComponent() {
        return this.element;
    }
}
class RankingElement {
    constructor(gameTypeName) {
        this.numberOfRows = 5;
        this.gameTypeName = gameTypeName;
        this.InitializeHeader();
        this.InitializeRows();
        this.InitializeElement();
    }
    InitializeHeader() {
        let name;
        switch (this.gameTypeName) {
            case gameTypes_1.BaseGameTypeNames.beginner:
                name = "Beginner";
                break;
            case gameTypes_1.BaseGameTypeNames.intermediate:
                name = "Intermediate";
                break;
            case gameTypes_1.BaseGameTypeNames.expert:
                name = "Expert";
                break;
        }
        this.header = new Header(name);
    }
    InitializeRows() {
        this.rows = new Array(this.numberOfRows);
        for (let i = 0; i < this.numberOfRows; i++) {
            this.rows[i] = new Row(i + 1);
        }
    }
    InitializeElement() {
        this.element = document.createElement("DIV");
        this.element.classList.add("RankingElement");
        this.element.appendChild(this.header.GetComponent());
        this.rows.forEach(row => {
            this.element.appendChild(row.GetComponent());
        });
    }
    Set(ranking) {
        for (let i = 0; i < ranking.array.length; i++) {
            this.rows[i].Set(ranking.array[i]);
        }
    }
    GetComponent() {
        return this.element;
    }
}
class RankingContainer {
    constructor() {
        this.rankings = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.rankings[i] = new RankingElement(i);
        }
        this.InitializeElement();
    }
    Set(ranking) {
        this.rankings[ranking.gameTypeName].Set(ranking);
    }
    InitializeElement() {
        this.element = document.createElement('DIV');
        this.rankings.forEach(rankingElement => {
            this.element.appendChild(rankingElement.GetComponent());
        });
    }
    GetComponent() {
        return this.element;
    }
}
exports.default = RankingContainer;


/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameContainer_1 = __webpack_require__(/*! ./components/GameContainer */ "./src/components/GameContainer.ts");
const Game_1 = __webpack_require__(/*! ./logic/Game */ "./src/logic/Game.ts");
const Position_1 = __webpack_require__(/*! ./logic/Position */ "./src/logic/Position.ts");
const Cell_1 = __webpack_require__(/*! ./components/boardComponents/Cell */ "./src/components/boardComponents/Cell.ts");
const gameTypes_1 = __webpack_require__(/*! ./logic/gameTypes */ "./src/logic/gameTypes.ts");
const localStorageManager_1 = __webpack_require__(/*! ./localStorageManager */ "./src/localStorageManager.ts");
const client_1 = __webpack_require__(/*! ./client */ "./src/client.ts");
const logDecorators_1 = __webpack_require__(/*! ./logDecorators */ "./src/logDecorators.ts");
const RankingContainer_1 = __webpack_require__(/*! ./components/rankingComponents/RankingContainer */ "./src/components/rankingComponents/RankingContainer.ts");
const preLoad_1 = __webpack_require__(/*! ./images/preLoad */ "./src/images/preLoad.ts");
class Controller {
    constructor() {
        this.ranking = new RankingContainer_1.default();
        this.InitializeClient();
        this.PullGamePropsFromStorage();
        this.PullThemePropsFromStorage();
        this.PullNickFromStorage();
        this.InitializeController();
    }
    InitializeClient() {
        this.client = new client_1.default();
        this.client.Connect();
        this.client.OnReceiveEventHandler.AddEventListener((args) => {
            switch (args.type) {
                case "rankingChanged":
                    console.log(args.data);
                    this.ranking.Set(args.data);
                    break;
                case "rankingRequest":
                    args.data.forEach(iranking => {
                        this.ranking.Set(iranking);
                    });
            }
        });
        this.client.OnOpenEventHandler.AddEventListener(() => {
            this.client.SendRankingRequest();
        });
    }
    PushGamePropsToStorage() {
        localStorageManager_1.default.SetLastGameProps(this.gameTypeName, this.gameType);
    }
    PullGamePropsFromStorage() {
        let GameProps;
        try {
            GameProps = localStorageManager_1.default.GetLastGameProps();
        }
        catch (_a) {
            GameProps = null;
        }
        if (GameProps == null) {
            GameProps = { gameTypeName: gameTypes_1.GameTypeNames.beginner, gameType: gameTypes_1.BaseGameTypes[gameTypes_1.BaseGameTypeNames.beginner] };
        }
        this.gameTypeName = GameProps.gameTypeName;
        this.gameType = GameProps.gameType;
    }
    PushThemePropsToStorage() {
        localStorageManager_1.default.SetLastThemeProps(this.theme);
    }
    PullThemePropsFromStorage() {
        let ThemeProps;
        try {
            ThemeProps = localStorageManager_1.default.GetLastThemeProps();
        }
        catch (_a) {
            ThemeProps = null;
        }
        if (ThemeProps == null) {
            ThemeProps = { theme: "normal_theme" };
        }
        this.theme = ThemeProps.theme;
    }
    PushNickToStorage() {
        localStorageManager_1.default.SetNick(this.client.Nick);
    }
    PullNickFromStorage() {
        this.client.Nick = localStorageManager_1.default.GetNick();
    }
    InitializeController() {
        this.InitializeGame();
        this.InitializeGameComponent();
        this.InitializeGameOptionsTab();
        this.InitializeThemeOptionsTab();
        this.InitializeRankingOptionsTab();
    }
    NewGame() {
        this.gameContainerElement.Head.NewGameBTN.SetImage(preLoad_1.default['e1'].src);
        this.UpdateGameComponentSize();
        this.InitializeGame();
    }
    InitializeGame() {
        if (this.game != null) {
            this.game.Dispatch();
        }
        switch (this.gameTypeName) {
            case gameTypes_1.GameTypeNames.beginner:
                this.game = new Game_1.BeginerGame();
                break;
            case gameTypes_1.GameTypeNames.intermediate:
                this.game = new Game_1.IntermediateGame();
                break;
            case gameTypes_1.GameTypeNames.expert:
                this.game = new Game_1.ExpertGame();
                break;
            case gameTypes_1.GameTypeNames.custom:
                this.game = new Game_1.Game({ width: this.gameType.width, height: this.gameType.height }, this.gameType.bombs);
                break;
            default:
                this.game = new Game_1.BeginerGame();
                break;
        }
        this.game.GetEventHandler(Game_1.GameEvents.cellChange).AddEventListener((args) => {
            this.OnCellChange(args);
        });
        this.game.GetEventHandler(Game_1.GameEvents.defeat).AddEventListener((args) => {
            this.OnGameLose(args);
        });
        this.game.GetEventHandler(Game_1.GameEvents.win).AddEventListener((args) => {
            this.OnGameWin(args);
        });
        this.game.GetEventHandler(Game_1.GameEvents.bombsToDisarmChanged).AddEventListener((args) => {
            this.OnBombsToDisarmChange(args);
        });
        this.game.Timer.AddOnTimeChangeEventListener((args) => {
            this.gameContainerElement.Head.RigthCounter.SetValue(args.value);
        });
    }
    InitializeGameOptionsTab() {
        const gameOptionsTab = this.gameContainerElement.Menu.GetItemByName("Game").Item;
        gameOptionsTab.AddOnSubmitEventListener((args) => {
            this.OnGameTypeSubmit(args);
        });
        gameOptionsTab.Check(this.gameTypeName);
    }
    InitializeThemeOptionsTab() {
        const themeOptionsTab = this.gameContainerElement.Menu.GetItemByName("Theme").Item;
        themeOptionsTab.AddOnSubmitEventListener((args) => {
            this.OnThemeTypeSubmit(args);
        });
        themeOptionsTab.themeList.Check(this.theme);
    }
    InitializeRankingOptionsTab() {
        const rankingOptionsTab = this.gameContainerElement.Menu.GetItemByName("Ranking").Item;
        rankingOptionsTab.onSubmitEventHandler.AddEventListener((args) => {
            this.OnNickSumbit(args);
        });
        rankingOptionsTab.nickInput.Value = this.client.Nick;
    }
    InitializeGameComponent() {
        this.gameContainerElement = new GameContainer_1.default();
        this.UpdateGameComponentSize();
        this.gameContainerElement.SetTheme(this.theme);
        this.gameContainerElement.Head.NewGameBTN.AddOnClickListener(() => { this.OnReset(); });
    }
    UpdateGameComponentSize() {
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.gameContainerElement.SetNewBoard({ width: this.gameType.width, height: this.gameType.height });
        this.gameContainerElement.Board.AddOnClickListener((args) => {
            this.OnClick(args);
        });
    }
    OnClick(args) {
        if (args.type == Cell_1.CellClickTypes.leftClick) {
            this.OnLeftClick(args.x, args.y);
        }
        else if (args.type == Cell_1.CellClickTypes.rightClick) {
            this.OnRightClick(args.x, args.y);
        }
    }
    OnLeftClick(x, y) {
        this.game.Open(new Position_1.default(x, y));
    }
    OnRightClick(x, y) {
        this.game.Mark(new Position_1.default(x, y));
    }
    OnCellChange(args) {
        let imgPath;
        if (args.cell.isMarked) {
            if (args.cell.isOpened && !args.cell.isBomb) {
                imgPath = preLoad_1.default['notBomb'].src;
            }
            else {
                imgPath = preLoad_1.default['flag'].src;
            }
        }
        else if (args.cell.isOpened) {
            if (args.cell.isBomb) {
                imgPath = preLoad_1.default['bomb'].src;
            }
            else {
                if (args.cell.neighborBombs != 0) {
                    imgPath = preLoad_1.default["o" + args.cell.neighborBombs.toString()].src;
                }
            }
        }
        if (args.cell.isOpened) {
            this.gameContainerElement.Board.cells[args.index].Disable();
        }
        this.gameContainerElement.Board.cells[args.index].SetImage(imgPath);
    }
    OnReset() {
        this.gameContainerElement.Head.NewGameBTN.SetImage(preLoad_1.default['e1'].src);
        this.gameContainerElement.Reset();
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.InitializeGame();
    }
    OnGameLose(args) {
        this.gameContainerElement.Head.NewGameBTN.SetImage(preLoad_1.default['e3'].src);
        this.gameContainerElement.Board.cells[args.lastOpenedIndex].SetBackgroundColor("red");
    }
    OnGameWin(args) {
        this.gameContainerElement.Head.NewGameBTN.SetImage(preLoad_1.default['e4'].src);
        if (args.gameType != gameTypes_1.GameTypeNames.custom && this.client.IsOpened) {
            this.client.SendScoreAndGameType(args.time, args.gameType);
        }
    }
    OnBombsToDisarmChange(args) {
        this.gameContainerElement.Head.LeftCounter.SetValue(args.bombsToDisarm);
    }
    OnGameTypeSubmit(args) {
        if (args.gameType != gameTypes_1.GameTypeNames.custom) {
            this.gameType = gameTypes_1.BaseGameTypes[args.gameType];
        }
        else {
            try {
                const cv = this.gameContainerElement.Menu.GetItemByName('Game').Item.CustomValue;
                this.gameType = new gameTypes_1.GameType(cv.width, cv.height, cv.bombs);
            }
            catch (_a) {
                this.OnWrongArgsSubmit();
                return;
            }
        }
        this.gameTypeName = args.gameType;
        this.gameContainerElement.Reset();
        this.NewGame();
        this.PushGamePropsToStorage();
        this.gameContainerElement.Menu.GetItemByName('Game').Close();
    }
    OnThemeTypeSubmit(args) {
        this.theme = args.theme;
        this.gameContainerElement.SetTheme(this.theme);
        this.PushThemePropsToStorage();
        this.gameContainerElement.Menu.GetItemByName('Theme').Close();
    }
    OnNickSumbit(args) {
        this.client.Nick = args.nick;
        this.gameContainerElement.Menu.GetItemByName('Ranking').Close();
        this.PushNickToStorage();
    }
    OnWrongArgsSubmit() {
    }
}
__decorate([
    logDecorators_1.LogMethod
], Controller.prototype, "OnGameWin", null);
exports.default = Controller;


/***/ }),

/***/ "./src/events/EventHandler.ts":
/*!************************************!*\
  !*** ./src/events/EventHandler.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EventHandler {
    constructor() {
        this.listeners = new Array();
    }
    AddEventListener(func) {
        this.listeners.push(func);
        return () => { this.RemoveListener(func); };
    }
    ExecuteListeners(args) {
        this.listeners.forEach(listener => {
            listener(args);
        });
    }
    RemoveListener(func) {
        this.listeners.filter(listener => listener != func);
    }
}
exports.default = EventHandler;


/***/ }),

/***/ "./src/events/EventManager.ts":
/*!************************************!*\
  !*** ./src/events/EventManager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = __webpack_require__(/*! ./EventHandler */ "./src/events/EventHandler.ts");
class EventManager {
    constructor() {
        this.eventHandlers = new Map();
    }
    AddEventHandler(name) {
        if (this.eventHandlers.has(name)) {
            throw new Error("EventHandler already exist.");
        }
        this.eventHandlers.set(name, new EventHandler_1.default());
    }
    GetEventHandler(name) {
        return this.eventHandlers.get(name);
    }
}
exports.default = EventManager;


/***/ }),

/***/ "./src/images/preLoad.ts":
/*!*******************************!*\
  !*** ./src/images/preLoad.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bomb = new Image(18, 18);
bomb.src = 'images/bomba.png';
const flag = new Image(18, 18);
flag.src = 'images/flag.png';
const notbomb = new Image(18, 18);
notbomb.src = 'images/notbomba.png';
const o1 = new Image(18, 18);
o1.src = 'images/o1.png';
const o2 = new Image(18, 18);
o2.src = 'images/o2.png';
const o3 = new Image(18, 18);
o3.src = 'images/o3.png';
const o4 = new Image(18, 18);
o4.src = 'images/o4.png';
const o5 = new Image(18, 18);
o5.src = 'images/o5.png';
const o6 = new Image(18, 18);
o6.src = 'images/o6.png';
const o7 = new Image(18, 18);
o7.src = 'images/o7.png';
const o8 = new Image(18, 18);
o8.src = 'images/o8.png';
const c0 = new Image(18, 18);
c0.src = 'images/c0.gif';
const c1 = new Image(18, 18);
c1.src = 'images/c1.gif';
const c2 = new Image(18, 18);
c2.src = 'images/c2.gif';
const c3 = new Image(18, 18);
c3.src = 'images/c3.gif';
const c4 = new Image(18, 18);
c4.src = 'images/c4.gif';
const c5 = new Image(18, 18);
c5.src = 'images/c5.gif';
const c6 = new Image(18, 18);
c6.src = 'images/c6.gif';
const c7 = new Image(18, 18);
c7.src = 'images/c7.gif';
const c8 = new Image(18, 18);
c8.src = 'images/c8.gif';
const c9 = new Image(18, 18);
c9.src = 'images/c9.gif';
const c_ = new Image(18, 18);
c_.src = 'images/c-.gif';
const e1 = new Image(32, 32);
e1.src = 'images/e1.png';
const e2 = new Image(32, 32);
e2.src = 'images/e2.png';
const e3 = new Image(32, 32);
e3.src = 'images/e3.png';
const e4 = new Image(32, 32);
e4.src = 'images/e4.png';
const Images = {
    ['bomb']: bomb,
    ['flag']: flag,
    ['notBomb']: notbomb,
    ['o1']: o1,
    ['o2']: o2,
    ['o3']: o3,
    ['o4']: o4,
    ['o5']: o5,
    ['o6']: o6,
    ['o7']: o7,
    ['o8']: o8,
    ['c0']: c0,
    ['c1']: c1,
    ['c2']: c2,
    ['c3']: c3,
    ['c4']: c4,
    ['c5']: c5,
    ['c6']: c6,
    ['c7']: c7,
    ['c8']: c8,
    ['c9']: c9,
    ['c-']: c_,
    ['e1']: e1,
    ['e2']: e2,
    ['e3']: e3,
    ['e4']: e4
};
exports.default = Images;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
__webpack_require__(/*! ./styles/gameBoard.scss */ "./src/styles/gameBoard.scss");
__webpack_require__(/*! ./styles/head.scss */ "./src/styles/head.scss");
__webpack_require__(/*! ./styles/menu.scss */ "./src/styles/menu.scss");
const controller_1 = __webpack_require__(/*! ./controller */ "./src/controller.ts");
const controller = new controller_1.default();
document.body.appendChild(controller.gameContainerElement.GetComponent());
document.body.appendChild(controller.ranking.GetComponent());


/***/ }),

/***/ "./src/localStorageManager.ts":
/*!************************************!*\
  !*** ./src/localStorageManager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static GetLastGameProps() {
        return JSON.parse(localStorage.getItem('LastGameProps'));
    }
    static SetLastGameProps(gameTypeName, gameType) {
        localStorage.setItem('LastGameProps', JSON.stringify({ gameTypeName, gameType }));
    }
    static GetLastThemeProps() {
        return JSON.parse(localStorage.getItem('LastThemeProps'));
    }
    static SetLastThemeProps(theme) {
        localStorage.setItem('LastThemeProps', JSON.stringify({ theme }));
    }
    static GetNick() {
        return localStorage.getItem('Nick');
    }
    static SetNick(nick) {
        localStorage.setItem('Nick', nick);
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/logDecorators.ts":
/*!******************************!*\
  !*** ./src/logDecorators.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function LogMethod(target, propKey, descriptor) {
    console.log("METHOD DECORATOR:", propKey, "evalueated.");
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(propKey + " CALLED!, Args", args);
        return method.apply(this, args);
        ;
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
function logProperty(target, propertyName) {
    console.log(propertyName, target);
}
exports.logProperty = logProperty;


/***/ }),

/***/ "./src/logic/Cell.ts":
/*!***************************!*\
  !*** ./src/logic/Cell.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Cell {
    constructor() {
        this.isBomb = false;
        this.isOpened = false;
        this.isMarked = false;
        this.neighborBombs = 0;
    }
    AddNeigbourBomb() {
        this.neighborBombs += 1;
    }
}
exports.default = Cell;


/***/ }),

/***/ "./src/logic/Game.ts":
/*!***************************!*\
  !*** ./src/logic/Game.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = __webpack_require__(/*! ../events/EventManager */ "./src/events/EventManager.ts");
const Position_1 = __webpack_require__(/*! ./Position */ "./src/logic/Position.ts");
const Cell_1 = __webpack_require__(/*! ./Cell */ "./src/logic/Cell.ts");
const timer_1 = __webpack_require__(/*! ./timer */ "./src/logic/timer.ts");
const gameTypes_1 = __webpack_require__(/*! ./gameTypes */ "./src/logic/gameTypes.ts");
var GameEvents;
(function (GameEvents) {
    GameEvents["cellChange"] = "cellChange";
    GameEvents["bombsToDisarmChanged"] = "bombsToDisarmChanged";
    GameEvents["win"] = "win";
    GameEvents["defeat"] = "defeat";
})(GameEvents = exports.GameEvents || (exports.GameEvents = {}));
function GetRange(start, end, step = 1, excluded = new Array()) {
    const range = new Array();
    for (let i = start; i < end; i += step) {
        if (!excluded.includes(i)) {
            range.push(i);
        }
    }
    return range;
}
function PullRandom(array, quantity) {
    if (quantity > array.length) {
        throw new Error("Quantity of elements to pull is larger than array lenght.");
    }
    const randomArray = new Array();
    let indexMax = array.length - 1;
    while (quantity > 0) {
        var randomIndex = Math.floor(Math.random() * indexMax);
        randomArray.push(array[randomIndex]);
        var tmp = array[randomIndex];
        array[randomIndex] = array[indexMax];
        array[indexMax] = tmp;
        indexMax -= 1;
        quantity -= 1;
    }
    return randomArray;
}
class Game {
    constructor(size, numberOfBombs) {
        this.InitializeEvents();
        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.cellsToOpen = size.width * size.height - numberOfBombs;
        this.BombsToDisarm = numberOfBombs;
        this.firstClick = true;
        this.inProgress = true;
        this.timer = new timer_1.default();
        this.CreateBoard();
    }
    get Timer() {
        return this.timer;
    }
    set BombsToDisarm(value) {
        if (this.bombsToDisarm == value) {
            return;
        }
        this.bombsToDisarm = value;
        this.BombsToDisarmChanged();
    }
    InitializeEvents() {
        this.eventManager = new EventManager_1.default();
        this.eventManager.AddEventHandler(GameEvents.cellChange);
        this.eventManager.AddEventHandler(GameEvents.defeat);
        this.eventManager.AddEventHandler(GameEvents.win);
        this.eventManager.AddEventHandler(GameEvents.bombsToDisarmChanged);
    }
    CreateBoard() {
        const arrayLenght = this.size.width * this.size.height;
        this.board = new Array();
        for (let i = 0; i < arrayLenght; i++) {
            this.board.push(new Cell_1.default());
        }
    }
    GetEventHandler(event) {
        return this.eventManager.GetEventHandler(event);
    }
    BoardIndexOf(position) {
        return position.x + position.y * this.size.width;
    }
    BoardPositionOf(index) {
        if (index >= this.board.length) {
            throw new Error("Index out of range.");
        }
        var x = index % this.size.width;
        var y = Math.floor(index / this.size.width);
        return new Position_1.default(x, y);
    }
    IsInsside(position) {
        return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height;
    }
    GetMatrix(position) {
        const output = new Array();
        for (var i = position.x - 1; i <= position.x + 1; i++) {
            for (var j = position.y - 1; j <= position.y + 1; j++) {
                var neighborPosition = new Position_1.default(i, j);
                if (this.IsInsside(neighborPosition)) {
                    output.push(neighborPosition);
                }
            }
        }
        return output;
    }
    GetNeighborPositions(position) {
        return this.GetMatrix(position).filter(pos => !pos.Equals(position));
    }
    Open(position) {
        if (!this.inProgress) {
            return;
        }
        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if (cell.isOpened || cell.isMarked) {
            return;
        }
        if (this.firstClick) {
            this.OnFirstClick(position);
        }
        if (cell.isBomb) {
            this.OnGameLose(position);
            return;
        }
        this.CascadeOpen(position);
    }
    Mark(position) {
        if (!this.inProgress) {
            return;
        }
        const index = this.BoardIndexOf(position);
        const cell = this.board[index];
        if (cell.isOpened) {
            return;
        }
        cell.isMarked = !cell.isMarked;
        if (cell.isMarked) {
            this.BombsToDisarm = this.bombsToDisarm - 1;
        }
        else {
            this.BombsToDisarm = this.bombsToDisarm + 1;
        }
        this.CellChanged(position);
    }
    OnFirstClick(position) {
        this.GenerateMap(position);
        this.timer.Start();
        this.firstClick = false;
    }
    OnGameLose(position) {
        this.OnGameEnd();
        this.DetonateAll();
        this.GameLost(position);
    }
    OnGameWin() {
        this.OnGameEnd();
        this.MarkAll();
        this.GameWon();
    }
    OnGameEnd() {
        this.inProgress = false;
        this.timer.Stop();
    }
    CellChanged(position) {
        let index;
        if (position instanceof Position_1.default) {
            index = this.BoardIndexOf(position);
        }
        else {
            index = position;
        }
        const OpenEventHandler = this.eventManager.GetEventHandler(GameEvents.cellChange);
        const args = { index: index, cell: this.board[index] };
        OpenEventHandler.ExecuteListeners(args);
    }
    GameLost(position) {
        const DefeatEventHandler = this.eventManager.GetEventHandler(GameEvents.defeat);
        const args = { lastOpenedIndex: this.BoardIndexOf(position) };
        DefeatEventHandler.ExecuteListeners(args);
    }
    GameWon() {
        const WinEventHandler = this.eventManager.GetEventHandler(GameEvents.win);
        const args = { gameType: gameTypes_1.GameTypeNames.custom, time: Date.now() - this.timer.TimerStart };
        WinEventHandler.ExecuteListeners(args);
    }
    BombsToDisarmChanged() {
        const BombsToDisarmEventHandler = this.eventManager.GetEventHandler(GameEvents.bombsToDisarmChanged);
        const args = { bombsToDisarm: this.bombsToDisarm };
        BombsToDisarmEventHandler.ExecuteListeners(args);
    }
    DetonateAll() {
        const lenght = this.size.width * this.size.height;
        for (let index = 0; index < lenght; index++) {
            const cell = this.board[index];
            if ((cell.isBomb && !cell.isMarked) || (cell.isMarked && !cell.isBomb)) {
                cell.isOpened = true;
                this.CellChanged(index);
            }
        }
    }
    MarkAll() {
        const lenght = this.size.width * this.size.height;
        for (let index = 0; index < lenght; index++) {
            const cell = this.board[index];
            if (!(cell.isOpened || cell.isMarked)) {
                cell.isMarked = true;
                this.CellChanged(index);
            }
        }
    }
    CascadeOpen(position) {
        this.OpenCell(position);
        const cell = this.board[this.BoardIndexOf(position)];
        if (cell.neighborBombs != 0) {
            return;
        }
        const neighbors = this.GetNeighborPositions(position);
        neighbors.forEach(neighborPosition => {
            const neightbor = this.board[this.BoardIndexOf(neighborPosition)];
            if (!neightbor.isOpened && !neightbor.isMarked) {
                this.CascadeOpen(neighborPosition);
            }
        });
    }
    OpenCell(position) {
        const cell = this.board[this.BoardIndexOf(position)];
        cell.isOpened = true;
        this.cellsToOpen -= 1;
        this.CellChanged(position);
        if (this.cellsToOpen == 0) {
            this.OnGameWin();
        }
    }
    GenerateMap(firstClickPosition) {
        const excludedIndexes = this.GetMatrix(firstClickPosition).map(position => this.BoardIndexOf(position));
        const availableIndexes = GetRange(0, this.board.length, 1, excludedIndexes);
        this.PlaceBombs(availableIndexes);
    }
    PlaceBombs(availableIndexes) {
        const positions = PullRandom(availableIndexes, this.numberOfBombs).map(index => this.BoardPositionOf(index));
        positions.forEach(position => {
            this.SetBombAt(position);
        });
    }
    SetBombAt(position) {
        const index = this.BoardIndexOf(position);
        if (this.board[index].isBomb) {
            return;
        }
        this.board[index].isBomb = true;
        const neighborIndexes = this.GetNeighborPositions(position).map(p => this.BoardIndexOf(p));
        neighborIndexes.forEach(neighborIndex => {
            this.board[neighborIndex].AddNeigbourBomb();
        });
    }
    Dispatch() {
        this.timer.Stop();
    }
}
exports.Game = Game;
class BeginerGame extends Game {
    constructor() {
        const gameType = gameTypes_1.BaseGameTypes[gameTypes_1.BaseGameTypeNames.beginner];
        super({ width: gameType.width, height: gameType.height }, gameType.bombs);
    }
    GameWon() {
        const WinEventHandler = this.eventManager.GetEventHandler(GameEvents.win);
        const args = { gameType: gameTypes_1.GameTypeNames.beginner, time: Date.now() - this.timer.TimerStart };
        WinEventHandler.ExecuteListeners(args);
    }
}
exports.BeginerGame = BeginerGame;
class IntermediateGame extends Game {
    constructor() {
        const gameType = gameTypes_1.BaseGameTypes[gameTypes_1.BaseGameTypeNames.intermediate];
        super({ width: gameType.width, height: gameType.height }, gameType.bombs);
    }
    GameWon() {
        const WinEventHandler = this.eventManager.GetEventHandler(GameEvents.win);
        const args = { gameType: gameTypes_1.GameTypeNames.intermediate, time: Date.now() - this.timer.TimerStart };
        WinEventHandler.ExecuteListeners(args);
    }
}
exports.IntermediateGame = IntermediateGame;
class ExpertGame extends Game {
    constructor() {
        const gameType = gameTypes_1.BaseGameTypes[gameTypes_1.BaseGameTypeNames.expert];
        super({ width: gameType.width, height: gameType.height }, gameType.bombs);
    }
    GameWon() {
        const WinEventHandler = this.eventManager.GetEventHandler(GameEvents.win);
        const args = { gameType: gameTypes_1.GameTypeNames.expert, time: Date.now() - this.timer.TimerStart };
        WinEventHandler.ExecuteListeners(args);
    }
}
exports.ExpertGame = ExpertGame;


/***/ }),

/***/ "./src/logic/Position.ts":
/*!*******************************!*\
  !*** ./src/logic/Position.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Equals(other) {
        return this.x == other.x && this.y == other.y;
    }
    ToString() {
        return this.x.toString() + " " + this.y.toString();
    }
}
exports.default = Position;


/***/ }),

/***/ "./src/logic/gameTypes.ts":
/*!********************************!*\
  !*** ./src/logic/gameTypes.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseGameTypeNames;
(function (BaseGameTypeNames) {
    BaseGameTypeNames[BaseGameTypeNames["beginner"] = 0] = "beginner";
    BaseGameTypeNames[BaseGameTypeNames["intermediate"] = 1] = "intermediate";
    BaseGameTypeNames[BaseGameTypeNames["expert"] = 2] = "expert";
})(BaseGameTypeNames || (BaseGameTypeNames = {}));
exports.BaseGameTypeNames = BaseGameTypeNames;
var GameTypeNames;
(function (GameTypeNames) {
    GameTypeNames[GameTypeNames["beginner"] = 0] = "beginner";
    GameTypeNames[GameTypeNames["intermediate"] = 1] = "intermediate";
    GameTypeNames[GameTypeNames["expert"] = 2] = "expert";
    GameTypeNames[GameTypeNames["custom"] = 3] = "custom";
})(GameTypeNames || (GameTypeNames = {}));
exports.GameTypeNames = GameTypeNames;
class GameType {
    constructor(width, height, bombs) {
        if (width % 1 != 0 || width <= 0) {
            throw new Error("Argument Exception.");
        }
        ;
        if (height % 1 != 0 || height <= 0) {
            throw new Error("Argument Exception.");
        }
        ;
        if (bombs % 1 != 0 || bombs <= 0) {
            throw new Error("Argument Exception.");
        }
        ;
        if (width * height - 9 < bombs) {
            throw new Error("Argument Exception.");
        }
        ;
        this.width = width;
        this.height = height;
        this.bombs = bombs;
    }
}
exports.GameType = GameType;
const BaseGameTypes = {
    [BaseGameTypeNames.beginner]: new GameType(8, 8, 10),
    [BaseGameTypeNames.intermediate]: new GameType(16, 16, 40),
    [BaseGameTypeNames.expert]: new GameType(32, 16, 99)
};
exports.BaseGameTypes = BaseGameTypes;


/***/ }),

/***/ "./src/logic/timer.ts":
/*!****************************!*\
  !*** ./src/logic/timer.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = __webpack_require__(/*! ../events/EventManager */ "./src/events/EventManager.ts");
var TimerEvents;
(function (TimerEvents) {
    TimerEvents["onTimeChange"] = "onTimeChange";
})(TimerEvents = exports.TimerEvents || (exports.TimerEvents = {}));
class Timer {
    constructor(startValue = 0, step = 1, frequency = 1) {
        this.eventManager = new EventManager_1.default();
        this.eventManager.AddEventHandler(TimerEvents.onTimeChange);
        this.value = startValue;
        this.frequency = frequency;
        this.step = step;
        this.started = false;
    }
    get TimerStart() {
        return this.timerStart;
    }
    AddOnTimeChangeEventListener(func) {
        return this.eventManager.GetEventHandler(TimerEvents.onTimeChange).AddEventListener(func);
    }
    TimeChanged() {
        const TimeChangedEventHandler = this.eventManager.GetEventHandler(TimerEvents.onTimeChange);
        const args = { value: this.value };
        TimeChangedEventHandler.ExecuteListeners(args);
    }
    MoveByStep() {
        this.value += this.step;
        this.TimeChanged();
    }
    Start() {
        if (this.started) {
            return;
        }
        this.started = true;
        this.interval = setInterval(() => {
            this.MoveByStep();
        }, 1000 / this.frequency);
        this.timerStart = Date.now();
    }
    Stop() {
        if (!this.started) {
            return;
        }
        this.started = false;
        clearInterval(this.interval);
    }
}
exports.default = Timer;


/***/ }),

/***/ "./src/serverThings/serverRequirements.ts":
/*!************************************************!*\
  !*** ./src/serverThings/serverRequirements.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function GetSimpleRanking(ranking) {
    const simpleRanking = { gameTypeName: ranking.gameTypeName, array: ranking.array };
    return simpleRanking;
}
exports.GetSimpleRanking = GetSimpleRanking;
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["rankingRequest"] = "rankingRequest";
    MessageTypes["scoreAndGameType"] = "scoreAndGameType";
    MessageTypes["rankingChanged"] = "rankingChanged";
})(MessageTypes || (MessageTypes = {}));
exports.MessageTypes = MessageTypes;


/***/ }),

/***/ "./src/styles/gameBoard.scss":
/*!***********************************!*\
  !*** ./src/styles/gameBoard.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./gameBoard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameBoard.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/head.scss":
/*!******************************!*\
  !*** ./src/styles/head.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./head.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/head.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYW1lQm9hcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21lbnUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NsaWNrYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnVDb21wb25lbnRzL0dhbWVPcHRpb25zTWVudVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9SYW5raW5nT3ByaW9uc01lbnVUYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvVGhlbWVPcHRpb25zTWVudVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9tZW51SXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9hcmRDb21wb25lbnRzL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZENvbXBvbmVudHMvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkQ29tcG9uZW50cy9IZWFkQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRDb21wb25lbnRzL05ld0dhbWVCVE4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFua2luZ0NvbXBvbmVudHMvUmFua2luZ0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ByZUxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dEZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9Qb3NpdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvZ2FtZVR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyVGhpbmdzL3NlcnZlclJlcXVpcmVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVCb2FyZC5zY3NzPzI2MDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9oZWFkLnNjc3M/OWU1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWVudS5zY3NzPzM4ZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsa0JBQWtCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEVBQUUsb0JBQW9CLGdCQUFnQixpQkFBaUIsRUFBRSxlQUFlLGtCQUFrQix3QkFBd0IsRUFBRSxxQkFBcUIsdUJBQXVCLHdCQUF3QixFQUFFLG9CQUFvQix1QkFBdUIsd0JBQXdCLGtCQUFrQixFQUFFO0FBQ3RYO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEVBQUUsb0JBQW9CLGdCQUFnQixpQkFB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QUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0Is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QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkNlbGxJbnRlcmlvciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uQ2VsbENvbnRhaW5lciB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDsgfVxcblxcbi5Cb2FyZFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5Cb2FyZENvbnRhaW5lciB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50OyB9XFxuXFxuLkdhbWVDb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luOiA1cHg7IH1cXG5cXG4uSGVhZENvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5OZXdHYW1lQlROIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4OyB9XFxuXFxuLkNvdW50ZXJJbWFnZSB7XFxuICB3aWR0aDogMTNweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vcm1hbF90aGVtZSAuQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNmU2ZTZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDsgfVxcbiAgLm5vcm1hbF90aGVtZSAuQm9yZGVyZWRDb250YWluZXIuQ2xpY2thYmxlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNmU2ZTZlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzZlNmU2ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7IH1cXG5cXG4ubm9ybWFsX3RoZW1lIC5SZXZlcnNlZEJvcmRlcmVkQ29udGFpbmVyIHtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzZlNmU2ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7IH1cXG4gIC5ub3JtYWxfdGhlbWUgLlJldmVyc2VkQm9yZGVyZWRDb250YWluZXIuQ2xpY2thYmxlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNmU2ZTZlO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM2ZTZlNmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7IH1cXG5cXG4ubm9ybWFsX3RoZW1lIC5Ob25Cb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjNTU1NTU1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjhiODsgfVxcblxcbi5ub3JtYWxfdGhlbWUgYnV0dG9uLkJvcmRlcmVkQ29udGFpbmVyOmFjdGl2ZSB7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0OyB9XFxuXFxuLm5vcm1hbF90aGVtZSAuQ2VsbEVuYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YjdiNzsgfVxcblxcbi5ub3JtYWxfdGhlbWUgLk1lbnVJdGVtTGFiZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4OyB9XFxuXFxuLmRhcmtfdGhlbWUgLkJvcmRlcmVkQ29udGFpbmVyIHtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNiZmJmYmY7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2JmYmZiZjtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyZTJlMmU7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyZTJlMmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0OyB9XFxuICAuZGFya190aGVtZSAuQm9yZGVyZWRDb250YWluZXIuQ2xpY2thYmxlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMmUyZTJlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzJlMmUyZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JmYmZiZjtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjYmZiZmJmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0OyB9XFxuXFxuLmRhcmtfdGhlbWUgLlJldmVyc2VkQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJlMmUyZTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMmUyZTJlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JmYmZiZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2JmYmZiZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7IH1cXG4gIC5kYXJrX3RoZW1lIC5SZXZlcnNlZEJvcmRlcmVkQ29udGFpbmVyLkNsaWNrYWJsZTphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2JmYmZiZjtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNiZmJmYmY7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyZTJlMmU7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzJlMmUyZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDsgfVxcblxcbi5kYXJrX3RoZW1lIC5Ob25Cb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjMTUxNTE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMzsgfVxcblxcbi5kYXJrX3RoZW1lIGJ1dHRvbi5Cb3JkZXJlZENvbnRhaW5lcjphY3RpdmUge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJlMmUyZTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMmUyZTJlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JmYmZiZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2JmYmZiZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7IH1cXG5cXG4uZGFya190aGVtZSAuQ2VsbEVuYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzg3ODsgfVxcblxcbi5kYXJrX3RoZW1lIC5NZW51SXRlbUxhYmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogc29saWQgI2JmYmZiZiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4OyB9XFxuXFxuLmVuZF9jaXR5X3RoZW1lIC5Cb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZjlmMWZmO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmOWYxZmY7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmU3OGY4O1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjYmU3OGY4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYzRmYzsgfVxcbiAgLmVuZF9jaXR5X3RoZW1lIC5Cb3JkZXJlZENvbnRhaW5lci5DbGlja2FibGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNiZTc4Zjg7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjYmU3OGY4O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjlmMWZmO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmOWYxZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2M0ZmM7IH1cXG5cXG4uZW5kX2NpdHlfdGhlbWUgLlJldmVyc2VkQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JlNzhmODtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYmU3OGY4O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y5ZjFmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y5ZjFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2M0ZmM7IH1cXG4gIC5lbmRfY2l0eV90aGVtZSAuUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lci5DbGlja2FibGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmOWYxZmY7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjlmMWZmO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmU3OGY4O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNiZTc4Zjg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2M0ZmM7IH1cXG5cXG4uZW5kX2NpdHlfdGhlbWUgLk5vbkJvcmRlcmVkQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM2YjZiNmI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlMGIyOyB9XFxuXFxuLmVuZF9jaXR5X3RoZW1lIGJ1dHRvbi5Cb3JkZXJlZENvbnRhaW5lcjphY3RpdmUge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JlNzhmODtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYmU3OGY4O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y5ZjFmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y5ZjFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2M0ZmM7IH1cXG5cXG4uZW5kX2NpdHlfdGhlbWUgLkNlbGxFbmFibGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2FjZmI7IH1cXG5cXG4uZW5kX2NpdHlfdGhlbWUgLk1lbnVJdGVtTGFiZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAjZjlmMWZmIDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2M0ZmM7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7IH1cXG5cXG4uaGlnaHRfY29udHJhc3RfdGhlbWUgLkJvcmRlcmVkQ29udGFpbmVyIHtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJlMmUyZTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzJlMmUyZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7IH1cXG4gIC5oaWdodF9jb250cmFzdF90aGVtZSAuQm9yZGVyZWRDb250YWluZXIuQ2xpY2thYmxlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMmUyZTJlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzJlMmUyZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7IH1cXG5cXG4uaGlnaHRfY29udHJhc3RfdGhlbWUgLlJldmVyc2VkQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJlMmUyZTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMmUyZTJlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDsgfVxcbiAgLmhpZ2h0X2NvbnRyYXN0X3RoZW1lIC5SZXZlcnNlZEJvcmRlcmVkQ29udGFpbmVyLkNsaWNrYWJsZTphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJlMmUyZTtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMmUyZTJlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0OyB9XFxuXFxuLmhpZ2h0X2NvbnRyYXN0X3RoZW1lIC5Ob25Cb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjMGYwZjBmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4uaGlnaHRfY29udHJhc3RfdGhlbWUgYnV0dG9uLkJvcmRlcmVkQ29udGFpbmVyOmFjdGl2ZSB7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMmUyZTJlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyZTJlMmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0OyB9XFxuXFxuLmhpZ2h0X2NvbnRyYXN0X3RoZW1lIC5DZWxsRW5hYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc4Nzg3OyB9XFxuXFxuLmhpZ2h0X2NvbnRyYXN0X3RoZW1lIC5NZW51SXRlbUxhYmVsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFweDsgfVxcblxcbi5JbWdESVYge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyB9XFxuXFxuLlJhbmtpbmdFbGVtZW50IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxuICB3aWR0aDogMzAwcHg7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5NZW51IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLk1lbnVJdGVtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNDQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50OyB9XFxuXFxuLk9wdGlvbnNUYWJIZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgQmFzZUdhbWVUeXBlTmFtZXMsIEdhbWVUeXBlTmFtZXN9IGZyb20gXCIuL2xvZ2ljL2dhbWVUeXBlc1wiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyLCB7IElDdXN0b21lckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL2V2ZW50cy9FdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgTG9nTWV0aG9kIH0gZnJvbSBcIi4vbG9nRGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQge0lTY29yZUFuZEdhbWVUeXBlLCBJTWVzc2FnZSwgTWVzc2FnZVR5cGVzLCBJUmFua2luZ30gZnJvbSAnLi9zZXJ2ZXJUaGluZ3Mvc2VydmVyUmVxdWlyZW1lbnRzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnR7XHJcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICBwdWJsaWMgZ2V0IFVSTCgpe1xyXG4gICAgcmV0dXJuIHRoaXMudXJsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldDtcclxuICBwcml2YXRlIG5pY2s6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGdldCBOaWNrKCl7XHJcbiAgICByZXR1cm4gdGhpcy5uaWNrO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0IE5pY2sodmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLm5pY2sgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNPcGVuZWQ6IGJvb2xlYW47XHJcbiAgcHVibGljIGdldCBJc09wZW5lZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uT3BlbkV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyPG51bGw+O1xyXG4gIHByaXZhdGUgb25SZWNlaXZlRXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXI8SU1lc3NhZ2U+O1xyXG4gIHByaXZhdGUgb25FcnJvckV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyPHtlOiBFdmVudH0+O1xyXG5cclxuICBwdWJsaWMgZ2V0IE9uT3BlbkV2ZW50SGFuZGxlcigpOiBJQ3VzdG9tZXJFdmVudEhhbmRsZXI8bnVsbD57XHJcbiAgICByZXR1cm4gdGhpcy5vbk9wZW5FdmVudEhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IE9uUmVjZWl2ZUV2ZW50SGFuZGxlcigpOiBJQ3VzdG9tZXJFdmVudEhhbmRsZXI8SU1lc3NhZ2U+e1xyXG4gICAgcmV0dXJuIHRoaXMub25SZWNlaXZlRXZlbnRIYW5kbGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBPbkVycm9yRXZlbnRIYW5kbGVyKCk6IElDdXN0b21lckV2ZW50SGFuZGxlcjx7ZTogRXZlbnR9PntcclxuICAgIHJldHVybiB0aGlzLm9uRXJyb3JFdmVudEhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmljayA9IFwidW5rbm93blwiKXtcclxuICAgIHRoaXMuTmljayA9IG5pY2s7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLkluaXRpYWxpemVFdmVudEhhbmRsZXJzKCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBDb25uZWN0KHVybCA9IFwid3M6Ly9sb2NhbGhvc3Q6ODA4MFwiKXtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMudXJsKTtcclxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5Jbml0aWFsaXplU29ja2V0KCk7XHJcbiAgICAgIHRoaXMuT3BlbmVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIEluaXRpYWxpemVFdmVudEhhbmRsZXJzKCl7XHJcbiAgICB0aGlzLm9uT3BlbkV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXI8bnVsbD4oKTtcclxuICAgIHRoaXMub25SZWNlaXZlRXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcjxJTWVzc2FnZT4oKTtcclxuICAgIHRoaXMub25FcnJvckV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXI8e2U6IEV2ZW50fT4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgSW5pdGlhbGl6ZVNvY2tldCgpe1xyXG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHsgdGhpcy5SZWNlaXZlZChldmVudC5kYXRhKTt9O1xyXG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChldmVudDogRXZlbnQpID0+IHt0aGlzLkVycm9yKGV2ZW50KX07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2VuZChtZXNzYWdlOiBJTWVzc2FnZSkge1xyXG4gICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2VuZFJhbmtpbmdSZXF1ZXN0KCl7XHJcbiAgICBjb25zdCBtZXNzYWdlOiBJTWVzc2FnZSA9IHt0eXBlOiBNZXNzYWdlVHlwZXMucmFua2luZ1JlcXVlc3QsIGRhdGE6IG51bGx9O1xyXG4gICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2VuZFNjb3JlQW5kR2FtZVR5cGUodGltZTogbnVtYmVyLCBnYW1lVHlwZTogQmFzZUdhbWVUeXBlTmFtZXMpe1xyXG4gICAgY29uc3QgU2NvcmVBbmRHYW1lVHlwZTogSVNjb3JlQW5kR2FtZVR5cGUgPSB7bmljazogdGhpcy5uaWNrLCB0aW1lLCBnYW1lVHlwZX07XHJcbiAgICBjb25zdCBtZXNzYWdlOiBJTWVzc2FnZSA9IHt0eXBlOiBNZXNzYWdlVHlwZXMuc2NvcmVBbmRHYW1lVHlwZSwgZGF0YTogU2NvcmVBbmRHYW1lVHlwZX07XHJcbiAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIEBMb2dNZXRob2RcclxuICBwcml2YXRlIFJlY2VpdmVkKGRhdGE6IHN0cmluZyl7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGRhdGEpIGFzIElNZXNzYWdlO1xyXG4gICAgICB0aGlzLm9uUmVjZWl2ZUV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2h7XHJcbiAgICAgIHRoaXMuRXJyb3IobmV3IEV2ZW50KFwiRGF0YSBwYXJzZSBlcnJvci5cIikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBPcGVuZWQoKXtcclxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5vbk9wZW5FdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBFcnJvcihlOiBFdmVudCl7XHJcbiAgICB0aGlzLm9uRXJyb3JFdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyh7ZX0pO1xyXG4gIH1cclxufSIsImltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50TWFuYWdlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2xpY2thYmxlPFQ+IHtcclxuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIEVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuQWRkRXZlbnRIYW5kbGVyPFQ+KFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5FbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIEZ1bmN0aW9uIHdoaWNoIHJlbW92ZXMgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRPbkNsaWNrTGlzdGVuZXIoZnVuYzogKGFyZ3M/OiBUKT0+dm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihcImNsaWNrXCIpLkFkZEV2ZW50TGlzdGVuZXIoZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIENsaWNrZWQoYXJncz86IFQpe1xyXG4gICAgICAgIGlmKHRoaXMuRW5hYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihcImNsaWNrXCIpLkV4ZWN1dGVMaXN0ZW5lcnMoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFbmFibGUoKXtcclxuICAgICAgICB0aGlzLkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEaXNhYmxlKCl7XHJcbiAgICAgICAgdGhpcy5FbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZENvbXBvbmVudHMvQm9hcmQnO1xyXG5pbXBvcnQgSGVhZENvbnRhaW5lciBmcm9tICcuL2hlYWRDb21wb25lbnRzL0hlYWRDb250YWluZXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnVDb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgR2FtZU9wdGlvbnNUYWIgZnJvbSAnLi9NZW51Q29tcG9uZW50cy9HYW1lT3B0aW9uc01lbnVUYWInO1xyXG5pbXBvcnQgVGhlbWVPcHRpb25zTWVudVRhYiBmcm9tICcuL01lbnVDb21wb25lbnRzL1RoZW1lT3B0aW9uc01lbnVUYWInO1xyXG5pbXBvcnQgUmFua2luZ09wcmlvbnNNZW51VGFiIGZyb20gJy4vTWVudUNvbXBvbmVudHMvUmFua2luZ09wcmlvbnNNZW51VGFiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250YWluZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xyXG4gICAgcHJpdmF0ZSBoZWFkOiBIZWFkQ29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBtZW51OiBNZW51O1xyXG5cclxuICAgIHByaXZhdGUgdGhlbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IEJvYXJkKCk6IEJvYXJke1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSGVhZCgpOiBIZWFkQ29udGFpbmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBNZW51KCk6IE1lbnV7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBib2FyZENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplSGVhZCgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZU1lbnUoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVCb2FyZENvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0VGhlbWUodGhlbWU6IHN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy50aGVtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhlbWUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlcGxhY2UodGhpcy50aGVtZSwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplRWxlbWVudCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiR2FtZUNvbnRhaW5lclwiKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRDb250ZWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBoZWFkQ29udGVpbmVyLmNsYXNzTGlzdC5hZGQoXCJSZXZlcnNlZEJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGhlYWRDb250ZWluZXIuY2xhc3NMaXN0LmFkZChcIkhlYWRDb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZENvbnRlaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhlYWQuR2V0Q29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRDb250ZWluZXIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1lbnUuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLlNldFRoZW1lKCdub3JtYWxfdGhlbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVNZW51KCl7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB0aGlzLm1lbnUuQWRkSXRlbSgwLCBcIkdhbWVcIiwgbmV3IEdhbWVPcHRpb25zVGFiKCkpO1xyXG4gICAgICAgIHRoaXMubWVudS5BZGRJdGVtKDEsIFwiVGhlbWVcIiwgbmV3IFRoZW1lT3B0aW9uc01lbnVUYWIoKSk7XHJcbiAgICAgICAgdGhpcy5tZW51LkFkZEl0ZW0oMiwgXCJSYW5raW5nXCIsIG5ldyBSYW5raW5nT3ByaW9uc01lbnVUYWIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplSGVhZCgpe1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBIZWFkQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplQm9hcmRDb250YWluZXIoKXtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0TmV3Qm9hcmQoIHNpemU6IHt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn0pIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHNpemUpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm9hcmQuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVzZXQoKXtcclxuICAgICAgICB0aGlzLmhlYWQuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLlJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vZXZlbnRzL0V2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuLi8uLi9ldmVudHMvRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7R2FtZVR5cGVOYW1lc30gZnJvbSAnLi4vLi4vbG9naWMvZ2FtZVR5cGVzJztcclxuaW1wb3J0IHtHZXRMYWJlbGVkRWxlbWVudH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPblN1Ym1pdEFyZ3N7XHJcbiAgICBnYW1lVHlwZTogR2FtZVR5cGVOYW1lcztcclxufVxyXG5cclxuY2xhc3MgR2FtZU9wdGlvbnNUYWJsZSBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJlbnRJRCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmFkaW9CdXR0bm9zOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzO1xyXG5cclxuICAgIHByaXZhdGUgY3VzdG9tV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgY3VzdG9tSGVpZ2h0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN1c3RvbUJvbWJzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGdldCBHYW1lVHlwZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ3VzdG9tVmFsdWUoKXtcclxuICAgICAgICByZXR1cm4ge3dpZHRoOiAgcGFyc2VJbnQodGhpcy5jdXN0b21XaWR0aElucHV0LnZhbHVlKSAsIGhlaWdodDogcGFyc2VJbnQodGhpcy5jdXN0b21IZWlnaHRJbnB1dC52YWx1ZSksIGJvbWJzOiBwYXJzZUludCh0aGlzLmN1c3RvbUJvbWJzSW5wdXQudmFsdWUpfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2hlY2soZ2FtZVR5cGU6IEdhbWVUeXBlTmFtZXMpe1xyXG4gICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2dhbWVUeXBlXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk9uU2VsZWN0aW9uQ2hhbmdlKGdhbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmlkID0gR2FtZU9wdGlvbnNUYWJsZS5jdXJlbnRJRCsrO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZVJhZGlvQnV0dG9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEFCTEUnKSBhcyBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZCgnUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDAsIFtcIlwiLCBcIldpZHRoXCIsIFwiSGVpZ2h0XCIsIFwiQm9tYnNcIl0pO1xyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDEsIFtHZXRMYWJlbGVkRWxlbWVudCh0aGlzLnJhZGlvQnV0dG5vc1swXSwgXCJCZWdpbm5lclwiKSwgXCI4XCIsIFwiOFwiLCBcIjEwXCJdKTtcclxuICAgICAgICB0aGlzLkFwcGVuZFJvdygyLCBbR2V0TGFiZWxlZEVsZW1lbnQodGhpcy5yYWRpb0J1dHRub3NbMV0sIFwiSW50ZXJtZWRpYXRlXCIpLCBcIjE2XCIsIFwiMTZcIiwgXCI0MFwiXSk7XHJcbiAgICAgICAgdGhpcy5BcHBlbmRSb3coMywgW0dldExhYmVsZWRFbGVtZW50KHRoaXMucmFkaW9CdXR0bm9zWzJdLCBcIkV4cGVydFwiKSwgXCIzMlwiLCBcIjE2XCIsIFwiOTlcIl0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbVdpZHRoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21XaWR0aElucHV0LnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tSGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21IZWlnaHRJbnB1dC5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICAgICAgICB0aGlzLmN1c3RvbUJvbWJzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21Cb21ic0lucHV0LnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDQsIFtHZXRMYWJlbGVkRWxlbWVudCh0aGlzLnJhZGlvQnV0dG5vc1szXSwgXCJDdXN0b21cIiksIHRoaXMuY3VzdG9tV2lkdGhJbnB1dCwgdGhpcy5jdXN0b21IZWlnaHRJbnB1dCwgdGhpcy5jdXN0b21Cb21ic0lucHV0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplUmFkaW9CdXR0b25zKCl7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZCdXR0b25zID0gNDtcclxuICAgICAgICBjb25zdCBuYW1lID0gXCJHYW1lVHlwZXNcIiArIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJhZGlvQnV0dG5vcyA9IG5ldyBBcnJheTxIVE1MSW5wdXRFbGVtZW50PihudW1iZXJPZkJ1dHRvbnMpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1dHRvbnM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRub3NbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblNlbGVjdGlvbkNoYW5nZShpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uU2VsZWN0aW9uQ2hhbmdlKGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzKXtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlID0gZ2FtZVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBcHBlbmRSb3coaW5kZXg6IG51bWJlciA9IDAsIGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudCB8IHN0cmluZz4pe1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KGluZGV4KTtcclxuICAgICAgICBmb3IobGV0IGkgPSBlbGVtZW50cy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzW2ldIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZWxlbWVudHNbaV0gYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50c1tpXSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWxlbWVudHNbaV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9wdGlvbnNUYWIgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgZ290OiBHYW1lT3B0aW9uc1RhYmxlO1xyXG4gICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuQWRkRXZlbnRIYW5kbGVyPE9uU3VibWl0QXJncz4oXCJPblN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0JvcmRlcmVkQ29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gJ2ZpdC1jb250ZW50JztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG5cclxuICAgICAgICB0aGlzLmdvdCA9IG5ldyBHYW1lT3B0aW9uc1RhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZ290LkdldENvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgc3ViQlROLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XHJcbiAgICAgICAgc3ViQlROLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHN1YkJUTi5zdHlsZS5tYXJnaW5Ub3AgPSAnNXB4JztcclxuICAgICAgICBzdWJCVE4uY2xhc3NMaXN0LmFkZChcIkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHN1YkJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5TdWJtaXRlZCgpOyB9KVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzdWJCVE4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEN1c3RvbVZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290LkN1c3RvbVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDaGVjayhnYW1lVHlwZTogR2FtZVR5cGVOYW1lcyl7XHJcbiAgICAgICAgdGhpcy5nb3QuQ2hlY2soZ2FtZVR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRPblN1Ym1pdEV2ZW50TGlzdGVuZXIoIGZ1bmM6IChhcmdzOiBPblN1Ym1pdEFyZ3MpID0+IHZvaWQgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcignT25TdWJtaXQnKS5BZGRFdmVudExpc3RlbmVyKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU3VibWl0ZWQoKXtcclxuICAgICAgICBjb25zdCBvblN1Ym1pdEV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcignT25TdWJtaXQnKSBhcyBFdmVudEhhbmRsZXI8T25TdWJtaXRBcmdzPjtcclxuICAgICAgICBvblN1Ym1pdEV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKHtnYW1lVHlwZTogdGhpcy5nb3QuR2FtZVR5cGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gXCIuLi9JQ29tcG9uZW50XCI7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4uLy4uL2V2ZW50cy9FdmVudEhhbmRsZXJcIjtcclxuXHJcblxyXG5jbGFzcyBOaWNrSW5wdXQgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgVmFsdWUodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5tYXhMZW5ndGggPSAyMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25OaWNrU3VibWl0RXZlbnRBcmdze1xyXG4gICAgbmljazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5raW5nT3ByaW9uc01lbnVUYWIgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgc3VibWl0QlROOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHB1YmxpYyByZWFkb25seSBuaWNrSW5wdXQ6IE5pY2tJbnB1dDtcclxuICAgIHB1YmxpYyByZWFkb25seSBvblN1Ym1pdEV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyPE9uTmlja1N1Ym1pdEV2ZW50QXJncz47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9uU3VibWl0RXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcjxPbk5pY2tTdWJtaXRFdmVudEFyZ3M+KCk7XHJcbiAgICAgICAgdGhpcy5uaWNrSW5wdXQgPSBuZXcgTmlja0lucHV0KCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplU3VibWl0QlROKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplRWxlbWVudCgpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUVsZW1lbnQoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQm9yZGVyZWRDb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSAnZml0LWNvbnRlbnQnO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzVweCc7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IFwiTmlja1wiO1xyXG5cclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uaWNrSW5wdXQuR2V0Q29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJUTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplU3VibWl0QlROKCl7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJUTi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QlROLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QlROLnN0eWxlLm1hcmdpblRvcCA9ICc1cHgnO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QlROLmNsYXNzTGlzdC5hZGQoXCJCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5TdWJtaXRlZCgpOyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU3VibWl0ZWQoKXtcclxuICAgICAgICBjb25zdCBuaWNrID0gdGhpcy5uaWNrSW5wdXQuVmFsdWU7XHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdEV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKHtuaWNrfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IHtHZXRMYWJlbGVkRWxlbWVudH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9ldmVudHMvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4uLy4uL2V2ZW50cy9FdmVudEhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHRoZW1lcyA9IFtcclxuICAgICdub3JtYWxfdGhlbWUnLFxyXG4gICAgJ2RhcmtfdGhlbWUnLFxyXG4gICAgJ2hpZ2h0X2NvbnRyYXN0X3RoZW1lJyxcclxuICAgICdlbmRfY2l0eV90aGVtZSdcclxuXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25TdWJtaXRBcmdze1xyXG4gICAgdGhlbWU6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgVGhlbWVMaXN0IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgc3RhdGljIGN1cmVudElEID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByYWRpb0J1dHRub3M6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmlkID0gVGhlbWVMaXN0LmN1cmVudElEKys7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplUmFkaW9CdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplRWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDaGVjayh0aGVtZTogc3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhlbWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhlbWVzW2ldID09IHRoZW1lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblNlbGVjdGlvbkNoYW5nZShpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVFbGVtZW50KCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJSZXZlcnNlZEJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBudW1iZXJPZkJ1dHRvbnMgPSB0aGVtZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1dHRvbnM7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChHZXRMYWJlbGVkRWxlbWVudCh0aGlzLnJhZGlvQnV0dG5vc1tpXSwgdGhlbWVzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVJhZGlvQnV0dG9ucygpe1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnVGhlbWVMaXN0JyArIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBudW1iZXJPZkJ1dHRvbnMgPSB0aGVtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnJhZGlvQnV0dG5vcyA9IG5ldyBBcnJheTxIVE1MSW5wdXRFbGVtZW50PihudW1iZXJPZkJ1dHRvbnMpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1dHRvbnM7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRub3NbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblNlbGVjdGlvbkNoYW5nZShpKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPblNlbGVjdGlvbkNoYW5nZShpbmRleDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhlbWVzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZU9wdGlvbnNNZW51VGFiIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN1Ym1pdEJUTjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyB0aGVtZUxpc3Q6IFRoZW1lTGlzdDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5BZGRFdmVudEhhbmRsZXI8T25TdWJtaXRBcmdzPihcIk9uU3VibWl0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLnRoZW1lTGlzdCA9IG5ldyBUaGVtZUxpc3QoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVTdWJtaXRCVE4oKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplRWxlbWVudCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdCb3JkZXJlZENvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGhlbWVMaXN0LkdldENvbXBvbmVudCgpKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCVE4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVN1Ym1pdEJUTigpe1xyXG4gICAgICAgIHRoaXMuc3VibWl0QlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCVE4uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJUTi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLnN1Ym1pdEJUTi5zdHlsZS5tYXJnaW5Ub3AgPSAnNXB4JztcclxuICAgICAgICB0aGlzLnN1Ym1pdEJUTi5jbGFzc0xpc3QuYWRkKFwiQm9yZGVyZWRDb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuU3VibWl0ZWQoKTsgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkT25TdWJtaXRFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJnczogT25TdWJtaXRBcmdzKSA9PiB2b2lkIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoJ09uU3VibWl0JykuQWRkRXZlbnRMaXN0ZW5lcihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFN1Ym1pdGVkKCl7XHJcbiAgICAgICAgY29uc3Qgb25TdWJtaXRFdmVudEhhbmRsZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoJ09uU3VibWl0JykgYXMgRXZlbnRIYW5kbGVyPE9uU3VibWl0QXJncz47XHJcbiAgICAgICAgb25TdWJtaXRFdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyh7dGhlbWU6IHRoaXMudGhlbWVMaXN0LlZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIEdldExhYmVsZWRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpXHJcbntcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKSBhcyBIVE1MTGFiZWxFbGVtZW50O1xyXG4gICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGxhYmVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcclxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEVYVCcpO1xyXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGxhYmVsO1xyXG59IiwiaW1wb3J0IE1lbnVJdGVtLCB7IE9uTWVudUl0ZW1MYWJlbENsaWNrQXJncywgTWVudUl0ZW1WaWV3QWN0aW9ucyB9IGZyb20gXCIuL21lbnVJdGVtXCI7XHJcbmltcG9ydCBJQ29tcG9uZW50IGZyb20gXCIuLi9JQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8TWVudUl0ZW0+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXk8TWVudUl0ZW0+KCk7XHJcblxyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUVsZW1lbnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplRWxlbWVudCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdNZW51Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVsb2FkSXRlbXMoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtLkdldENvbXBvbmVudCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkSXRlbShpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGVsZW1lbnQ6IElDb21wb25lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaW5kZXggPCAwKSB7IGluZGV4ID0gMDsgfVxyXG4gICAgICAgIGlmKGluZGV4ID4gdGhpcy5pdGVtcy5sZW5ndGgpIHsgaW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aCB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTWVudUl0ZW0obmFtZSwgZWxlbWVudCk7XHJcbiAgICAgICAgaXRlbS5BZGRPbkNsaWNrTGlzdGVuZXIoIChhcmdzOiBPbk1lbnVJdGVtTGFiZWxDbGlja0FyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYoYXJncy5hY3Rpb24gPT0gTWVudUl0ZW1WaWV3QWN0aW9ucy5jbG9zZSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZUFsbEl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLk9wZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IG5ldyBBcnJheTxNZW51SXRlbT4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2godGhpcy5pdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gaW5kZXg7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3SXRlbXMucHVzaCh0aGlzLml0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xyXG4gICAgICAgIHRoaXMuUmVsb2FkSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIENsb3NlQWxsSXRlbXMoKXtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uQ2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEl0ZW1CeU5hbWUobmFtZTogc3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaV0uTmFtZSA9PSBuYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IENsaWNrYWJsZSBmcm9tIFwiLi4vQ2xpY2thYmxlXCI7XHJcblxyXG5leHBvcnQgZW51bSBNZW51SXRlbVZpZXdBY3Rpb25ze1xyXG4gICAgb3BlbixcclxuICAgIGNsb3NlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25NZW51SXRlbUxhYmVsQ2xpY2tBcmdze1xyXG4gICAgYWN0aW9uOiBNZW51SXRlbVZpZXdBY3Rpb25zO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51SXRlbSBleHRlbmRzIENsaWNrYWJsZTxPbk1lbnVJdGVtTGFiZWxDbGlja0FyZ3M+IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxhYmVsOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgaXRlbUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG9wZW5lZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW06IElDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgZ2V0IEl0ZW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBOYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBpdGVtOiBJQ29tcG9uZW50KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVMYWJlbCgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUl0ZW1Db250YWluZXIoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0TmFtZShuYW1lKTtcclxuICAgICAgICB0aGlzLlNldEl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplRWxlbWVudCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkdW1teURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGR1bW15RGl2LnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgICAgZHVtbXlEaXYuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgZHVtbXlEaXYuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29udGFpbmVyKVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGR1bW15RGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVMYWJlbCgpe1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ01lbnVJdGVtTGFiZWwnKTtcclxuICAgICAgICB0aGlzLmxhYmVsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuT25MYWJlbENsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUl0ZW1Db250YWluZXIoKXtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnTWVudUl0ZW1Db250YWluZXInKTtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0TmFtZShuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBTZXRJdGVtKGl0ZW06IElDb21wb25lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSA9PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtLkdldENvbXBvbmVudCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9wZW4oKXtcclxuICAgICAgICB0aGlzLml0ZW1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25MYWJlbENsaWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5vcGVuZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsaWNrZWQoeyBhY3Rpb246IE1lbnVJdGVtVmlld0FjdGlvbnMuY2xvc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xpY2tlZCh7IGFjdGlvbjogTWVudUl0ZW1WaWV3QWN0aW9ucy5vcGVuIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IENsaWNrYWJsZSBmcm9tICcuLi9DbGlja2FibGUnO1xyXG5pbXBvcnQgQ2VsbCwge0NlbGxDbGlja1R5cGVzfSBmcm9tICcuL0NlbGwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNlbGxDbGlja0FyZ3N7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB0eXBlOiBDZWxsQ2xpY2tUeXBlcztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIENsaWNrYWJsZTxPbkNlbGxDbGlja0FyZ3M+IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2VsbHM6IENlbGxbXTtcclxuICAgIHByaXZhdGUgc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiB7d2lkdGg6IG51bWJlciwgaGVpZ2h0Om51bWJlcn0pe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmNlbGxzID0gbmV3IEFycmF5PENlbGw+KHRoaXMuc2l6ZS53aWR0aCp0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLkZpbGxCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQm9hcmRJbmRleE9mKHg6IG51bWJlciwgeTpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB4ICsgeSp0aGlzLnNpemUud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBGaWxsQm9hcmQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZS5oZWlnaHQ7IHkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLnNpemUud2lkdGg7IHgrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IG5ldyBDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHt4LCB5fTtcclxuICAgICAgICAgICAgICAgIGNlbGwuQWRkT25DbGlja0xpc3RlbmVyKChhcmdzKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrQXJncyA9IHsuLi5wb3NpdGlvbiwgLi4uYXJnc31cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWNrZWQoY2xpY2tBcmdzKSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t0aGlzLkJvYXJkSW5kZXhPZih4LCB5KV0gPSBjZWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJCb2FyZENvbnRhaW5lclwiKTtcclxuICAgICAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5zaXplLmhlaWdodDsgeSsrKXtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiQm9hcmRSb3dcIik7XHJcbiAgICAgICAgICAgIGZvcih2YXIgeCA9IDA7IHggPCB0aGlzLnNpemUud2lkdGg7IHgrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuY2VsbHNbdGhpcy5Cb2FyZEluZGV4T2YoeCwgeSldLkdldENvbXBvbmVudCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVzZXQoKXtcclxuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgICAgIGNlbGwuUmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xpY2thYmxlIGZyb20gJy4uL0NsaWNrYWJsZSdcclxuXHJcbmV4cG9ydCBlbnVtIENlbGxDbGlja1R5cGVze1xyXG4gICAgcmlnaHRDbGljayxcclxuICAgIGxlZnRDbGlja1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uQ2VsbENsaWNrQXJncyB7XHJcbiAgICB0eXBlOiBDZWxsQ2xpY2tUeXBlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIENsaWNrYWJsZTxPbkNlbGxDbGlja0FyZ3M+IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQm9yZGVyZWRDb250YWluZXJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJDZWxsSW50ZXJpb3JcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJDZWxsRW5hYmxlZFwiKTtcclxuICAgICAgICB0aGlzLlNldEJhY2tncm91bmRDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57dGhpcy5DbGlja2VkKHt0eXBlOiBDZWxsQ2xpY2tUeXBlcy5sZWZ0Q2xpY2t9KX0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsICgpPT57dGhpcy5DbGlja2VkKHt0eXBlOiBDZWxsQ2xpY2tUeXBlcy5yaWdodENsaWNrfSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0SW1hZ2UocGF0aDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBpZihwYXRoICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnSW1nRElWJyk7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitwYXRoK1wiKVwiO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIxOHB4XCI7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjE4cHhcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIk5vbkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQ2VsbEVuYWJsZWRcIik7XHJcbiAgICAgICAgdGhpcy5TZXRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICB0aGlzLkVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFbmFibGUoKXtcclxuICAgICAgICBpZighdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIkNlbGxFbmFibGVkXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJDZWxsRW5hYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuRW5hYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRGlzYWJsZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJDZWxsRW5hYmxlZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiQ2VsbEVuYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVwbGFjZShcIkJvcmRlcmVkQ29udGFpbmVyXCIsIFwiTm9uQm9yZGVyZWRDb250YWluZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLkRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ0NlbGxDb250YWluZXInKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCBJbWFnZXMgZnJvbSAnLi4vLi4vaW1hZ2VzL3ByZUxvYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBDb3VudGVyRGlnaXRzOiBBcnJheTxDb3VudGVyRGlnaXQ+O1xyXG4gICAgcHJpdmF0ZSBkZWNpbWFsUGxhY2VzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlY2ltYWxQbGFjZXM6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkNvdW50ZXJDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZXM7XHJcbiAgICAgICAgdGhpcy5Db3VudGVyRGlnaXRzID0gbmV3IEFycmF5PENvdW50ZXJEaWdpdD4oZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRlY2ltYWxQbGFjZXM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ291bnRlckRpZ2l0c1tpXSA9IG5ldyBDb3VudGVyRGlnaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuQ291bnRlckRpZ2l0c1tpXS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0VmFsdWUodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCkucGFkU3RhcnQodGhpcy5kZWNpbWFsUGxhY2VzLCAnMCcpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWxQbGFjZXM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ291bnRlckRpZ2l0c1t0aGlzLmRlY2ltYWxQbGFjZXMgLSAxIC0gaV0uU2V0VmFsdWUoc3RyVmFsdWVbc3RyVmFsdWUubGVuZ3RoIC0gMSAtIGldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQ291bnRlckRpZ2l0IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDb3VudGVySW1hZ2UnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TZXRWYWx1ZSgnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIisgSW1hZ2VzW1wiY1wiK3ZhbHVlXS5zcmMgK1wiKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tIFwiLi4vSUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9Db3VudGVyXCI7XHJcbmltcG9ydCBOZXdHYW1lQlROIGZyb20gXCIuL05ld0dhbWVCVE5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRDb250YWluZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBsZWZ0Q291bnRlcjogQ291bnRlcjtcclxuICAgIHByaXZhdGUgcmlnaHRDb3VudGVyOiBDb3VudGVyO1xyXG4gICAgcHJpdmF0ZSBuZXdHYW1lQlROOiBOZXdHYW1lQlROO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgTGVmdENvdW50ZXIoKTogQ291bnRlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0Q291bnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFJpZ3RoQ291bnRlcigpOiBDb3VudGVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0Q291bnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE5ld0dhbWVCVE4oKTogTmV3R2FtZUJUTntcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXdHYW1lQlROO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGVmdENvdW50ZXIgPSBuZXcgQ291bnRlcigzKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q291bnRlciA9IG5ldyBDb3VudGVyKDMpO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZUJUTiA9IG5ldyBOZXdHYW1lQlROKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q291bnRlci5TZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q291bnRlci5TZXRWYWx1ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkhlYWRDb250YWluZXJcIik7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxlZnRDb3VudGVyLkdldENvbXBvbmVudCgpKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubmV3R2FtZUJUTi5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Q291bnRlci5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ2xpY2thYmxlIGZyb20gXCIuLi9DbGlja2FibGVcIjtcclxuaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IEltYWdlcyBmcm9tICcuLi8uLi9pbWFnZXMvcHJlTG9hZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uTmV3R2FtZUJUTkNsaWNrQXJnc3tcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0dhbWVCVE4gZXh0ZW5kcyBDbGlja2FibGU8T25OZXdHYW1lQlROQ2xpY2tBcmdzPiBpbXBsZW1lbnRzIElDb21wb25lbnRcclxue1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdOZXdHYW1lQlROJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0JvcmRlcmVkQ29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0NsaWNrYWJsZScpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDZWxsRW5hYmxlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLlNldEltYWdlKEltYWdlc1snZTEnXS5zcmMpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLkNsaWNrZWQoKTt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0SW1hZ2UocGF0aDogc3RyaW5nKXtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnSW1nRElWJyk7XHJcbiAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiK3BhdGgrXCIpXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tIFwiLi4vSUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJU2NvcmUsIElSYW5raW5nIH0gZnJvbSBcIi4uLy4uL3NlcnZlclRoaW5ncy9yYW5raW5nXCI7XHJcbmltcG9ydCB7IEJhc2VHYW1lVHlwZU5hbWVzIH0gZnJvbSBcIi4uLy4uL2xvZ2ljL2dhbWVUeXBlc1wiO1xyXG5cclxuY2xhc3MgUm93IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBsYWNlOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBsYWNlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucGxhY2UgPSBwbGFjZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IHRoaXMucGxhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldChzY29yZTogSVNjb3JlKXtcclxuICAgICAgICBjb25zdCB0aW1lID0gKE1hdGgucm91bmQoc2NvcmUudGltZS8xMDApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLnBsYWNlICsgXCIuIFwiICsgc2NvcmUubmljayArIFwiICBcIiArIHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlciBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFbGVtZW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUVsZW1lbnQoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJhbmtpbmdFbGVtZW50IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJvd3M6IFJvd1tdO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXI6IEhlYWRlcjtcclxuICAgIHByaXZhdGUgbnVtYmVyT2ZSb3dzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdhbWVUeXBlTmFtZTogQmFzZUdhbWVUeXBlTmFtZXM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGdhbWVUeXBlTmFtZTogQmFzZUdhbWVUeXBlTmFtZXMpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZSb3dzID0gNTtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlTmFtZSA9IGdhbWVUeXBlTmFtZTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplRWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUhlYWRlcigpe1xyXG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuZ2FtZVR5cGVOYW1lKXtcclxuICAgICAgICAgICAgY2FzZSBCYXNlR2FtZVR5cGVOYW1lcy5iZWdpbm5lcjpcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkJlZ2lubmVyXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCYXNlR2FtZVR5cGVOYW1lcy5pbnRlcm1lZGlhdGU6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJJbnRlcm1lZGlhdGVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJhc2VHYW1lVHlwZU5hbWVzLmV4cGVydDpcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkV4cGVydFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplUm93cygpe1xyXG4gICAgICAgIHRoaXMucm93cyA9IG5ldyBBcnJheTxSb3c+KHRoaXMubnVtYmVyT2ZSb3dzKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlJvd3M7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm93c1tpXSA9IG5ldyBSb3coaSsxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplRWxlbWVudCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJSYW5raW5nRWxlbWVudFwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3cuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXQocmFua2luZzogSVJhbmtpbmcpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7ICBpIDwgcmFua2luZy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucm93c1tpXS5TZXQocmFua2luZy5hcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5raW5nQ29udGFpbmVyIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmFua2luZ3M6IFJhbmtpbmdFbGVtZW50W107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yYW5raW5ncyA9IG5ldyBBcnJheTxSYW5raW5nRWxlbWVudD4oMyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCAzOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtpbmdzW2ldID0gbmV3IFJhbmtpbmdFbGVtZW50KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldChyYW5raW5nOiBJUmFua2luZyl7XHJcbiAgICAgICAgdGhpcy5yYW5raW5nc1tyYW5raW5nLmdhbWVUeXBlTmFtZV0uU2V0KHJhbmtpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUVsZW1lbnQoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnJhbmtpbmdzLmZvckVhY2gocmFua2luZ0VsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocmFua2luZ0VsZW1lbnQuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvR2FtZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge0dhbWVFdmVudHMsIE9uQ2VsbENoYW5nZUFyZ3MsIE9uRGVmZWF0QXJncywgT25XaW5BcmdzLCBPbkJvbWJzVG9EaXNhcm1DaGFuZ2VkQXJncywgR2FtZSwgQmVnaW5lckdhbWUsIEludGVybWVkaWF0ZUdhbWUsIEV4cGVydEdhbWV9IGZyb20gXCIuL2xvZ2ljL0dhbWVcIjtcclxuaW1wb3J0IHtPbkNlbGxDbGlja0FyZ3N9IGZyb20gJy4vY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQm9hcmQnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4vbG9naWMvUG9zaXRpb25cIjtcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9ldmVudHMvRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENlbGxDbGlja1R5cGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQ2VsbFwiO1xyXG5pbXBvcnQgeyBJR2FtZVR5cGUsIEJhc2VHYW1lVHlwZXMsIEdhbWVUeXBlTmFtZXMsIEJhc2VHYW1lVHlwZU5hbWVzLCBHYW1lVHlwZX0gZnJvbSBcIi4vbG9naWMvZ2FtZVR5cGVzXCI7XHJcbmltcG9ydCB7IE9uU3VibWl0QXJncyBhcyBPbkdhbWVUeXBlU3VibWl0QXJncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvR2FtZU9wdGlvbnNNZW51VGFiXCI7XHJcbmltcG9ydCBUaGVtZU9wdGlvbnNUYWIsIHsgT25TdWJtaXRBcmdzIGFzIE9uVGhlbWVUeXBlU3VibWl0QXJncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvVGhlbWVPcHRpb25zTWVudVRhYlwiO1xyXG5pbXBvcnQgUmFua2luZ09wdGlvbnNUYWIsIHsgT25OaWNrU3VibWl0RXZlbnRBcmdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9SYW5raW5nT3ByaW9uc01lbnVUYWJcIjtcclxuXHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vbG9jYWxTdG9yYWdlTWFuYWdlcic7XHJcbmltcG9ydCBHYW1lT3B0aW9uc1RhYiBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRzL0dhbWVPcHRpb25zTWVudVRhYlwiO1xyXG5pbXBvcnQgQ2xpZW50IGZyb20gXCIuL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dNZXRob2QsIGxvZ1Byb3BlcnR5IH0gZnJvbSBcIi4vbG9nRGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgUmFua2luZ0NvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL3JhbmtpbmdDb21wb25lbnRzL1JhbmtpbmdDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSU1lc3NhZ2UsIElSYW5raW5nLCBNZXNzYWdlVHlwZXMgfSBmcm9tIFwiLi9zZXJ2ZXJUaGluZ3Mvc2VydmVyUmVxdWlyZW1lbnRzXCI7XHJcbmltcG9ydCBJbWFnZXMgZnJvbSAnLi9pbWFnZXMvcHJlTG9hZCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7IFxyXG4gICAgcHVibGljIGdhbWVDb250YWluZXJFbGVtZW50OiBHYW1lQ29udGFpbmVyO1xyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmFua2luZzogUmFua2luZ0NvbnRhaW5lcjtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjbGllbnQ6IENsaWVudDtcclxuICAgIHByaXZhdGUgZ2FtZVR5cGU6IElHYW1lVHlwZTtcclxuICAgIHByaXZhdGUgZ2FtZVR5cGVOYW1lOiBHYW1lVHlwZU5hbWVzO1xyXG5cclxuICAgIHByaXZhdGUgdGhlbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJhbmtpbmcgPSBuZXcgUmFua2luZ0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNsaWVudCgpO1xyXG4gICAgICAgIHRoaXMuUHVsbEdhbWVQcm9wc0Zyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5QdWxsVGhlbWVQcm9wc0Zyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5QdWxsTmlja0Zyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUNsaWVudCgpe1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IENsaWVudCgpO1xyXG4gICAgICAgIHRoaXMuY2xpZW50LkNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLmNsaWVudC5PblJlY2VpdmVFdmVudEhhbmRsZXIuQWRkRXZlbnRMaXN0ZW5lcigoYXJnczogSU1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKGFyZ3MudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmFua2luZ0NoYW5nZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2luZy5TZXQoYXJncy5kYXRhIGFzIElSYW5raW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyYW5raW5nUmVxdWVzdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIChhcmdzLmRhdGEgYXMgSVJhbmtpbmdbXSkuZm9yRWFjaChpcmFua2luZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2luZy5TZXQoaXJhbmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xpZW50Lk9uT3BlbkV2ZW50SGFuZGxlci5BZGRFdmVudExpc3RlbmVyKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LlNlbmRSYW5raW5nUmVxdWVzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUHVzaEdhbWVQcm9wc1RvU3RvcmFnZSgpe1xyXG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuU2V0TGFzdEdhbWVQcm9wcyh0aGlzLmdhbWVUeXBlTmFtZSwgdGhpcy5nYW1lVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQdWxsR2FtZVByb3BzRnJvbVN0b3JhZ2UoKXtcclxuICAgICAgICBsZXQgR2FtZVByb3BzOiB7Z2FtZVR5cGVOYW1lOiBHYW1lVHlwZU5hbWVzLCBnYW1lVHlwZTogR2FtZVR5cGV9O1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgR2FtZVByb3BzID0gTG9jYWxTdG9yYWdlTWFuYWdlci5HZXRMYXN0R2FtZVByb3BzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoe1xyXG4gICAgICAgICAgICBHYW1lUHJvcHMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoR2FtZVByb3BzID09IG51bGwpe1xyXG4gICAgICAgICAgICBHYW1lUHJvcHMgPSB7Z2FtZVR5cGVOYW1lOiBHYW1lVHlwZU5hbWVzLmJlZ2lubmVyLCBnYW1lVHlwZTogQmFzZUdhbWVUeXBlc1tCYXNlR2FtZVR5cGVOYW1lcy5iZWdpbm5lcl19O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVUeXBlTmFtZSA9IEdhbWVQcm9wcy5nYW1lVHlwZU5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lVHlwZSA9IEdhbWVQcm9wcy5nYW1lVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFB1c2hUaGVtZVByb3BzVG9TdG9yYWdlKCl7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5TZXRMYXN0VGhlbWVQcm9wcyh0aGlzLnRoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFB1bGxUaGVtZVByb3BzRnJvbVN0b3JhZ2UoKXtcclxuICAgICAgICBsZXQgVGhlbWVQcm9wczoge3RoZW1lOiBzdHJpbmd9O1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgVGhlbWVQcm9wcyA9IExvY2FsU3RvcmFnZU1hbmFnZXIuR2V0TGFzdFRoZW1lUHJvcHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2h7XHJcbiAgICAgICAgICAgIFRoZW1lUHJvcHMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoVGhlbWVQcm9wcyA9PSBudWxsKXtcclxuICAgICAgICAgICAgVGhlbWVQcm9wcyA9IHt0aGVtZTogXCJub3JtYWxfdGhlbWVcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGhlbWUgPSBUaGVtZVByb3BzLnRoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUHVzaE5pY2tUb1N0b3JhZ2UoKXtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLlNldE5pY2sodGhpcy5jbGllbnQuTmljayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQdWxsTmlja0Zyb21TdG9yYWdlKCl7XHJcbiAgICAgICAgdGhpcy5jbGllbnQuTmljayA9IExvY2FsU3RvcmFnZU1hbmFnZXIuR2V0TmljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUNvbnRyb2xsZXIoKXtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplR2FtZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUdhbWVPcHRpb25zVGFiKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplVGhlbWVPcHRpb25zVGFiKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplUmFua2luZ09wdGlvbnNUYWIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE5ld0dhbWUoKXtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkhlYWQuTmV3R2FtZUJUTi5TZXRJbWFnZShJbWFnZXNbJ2UxJ10uc3JjKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZUdhbWVDb21wb25lbnRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUdhbWUoKXtcclxuICAgICAgICBpZih0aGlzLmdhbWUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5EaXNwYXRjaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuZ2FtZVR5cGVOYW1lKXtcclxuICAgICAgICAgICAgY2FzZSBHYW1lVHlwZU5hbWVzLmJlZ2lubmVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lID0gbmV3IEJlZ2luZXJHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVHlwZU5hbWVzLmludGVybWVkaWF0ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBJbnRlcm1lZGlhdGVHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVHlwZU5hbWVzLmV4cGVydDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBFeHBlcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVHlwZU5hbWVzLmN1c3RvbTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHt3aWR0aDogdGhpcy5nYW1lVHlwZS53aWR0aCxoZWlnaHQ6IHRoaXMuZ2FtZVR5cGUuaGVpZ2h0fSwgdGhpcy5nYW1lVHlwZS5ib21icyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBCZWdpbmVyR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh0aGlzLmdhbWUuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMuY2VsbENoYW5nZSkgYXMgRXZlbnRIYW5kbGVyPE9uQ2VsbENoYW5nZUFyZ3M+KS5BZGRFdmVudExpc3RlbmVyKCAoYXJnczogT25DZWxsQ2hhbmdlQXJncykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9uQ2VsbENoYW5nZShhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAodGhpcy5nYW1lLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmRlZmVhdCkgYXMgRXZlbnRIYW5kbGVyPE9uRGVmZWF0QXJncz4pLkFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIChhcmdzOiBPbkRlZmVhdEFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25HYW1lTG9zZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgKHRoaXMuZ2FtZS5HZXRFdmVudEhhbmRsZXIoR2FtZUV2ZW50cy53aW4pIGFzIEV2ZW50SGFuZGxlcjxPbldpbkFyZ3M+KS5BZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAoYXJnczogT25XaW5BcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uR2FtZVdpbihhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgKHRoaXMuZ2FtZS5HZXRFdmVudEhhbmRsZXIoR2FtZUV2ZW50cy5ib21ic1RvRGlzYXJtQ2hhbmdlZCkgYXMgRXZlbnRIYW5kbGVyPE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzPikuQWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgKGFyZ3M6IE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uQm9tYnNUb0Rpc2FybUNoYW5nZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5UaW1lci5BZGRPblRpbWVDaGFuZ2VFdmVudExpc3RlbmVyKChhcmdzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkhlYWQuUmlndGhDb3VudGVyLlNldFZhbHVlKGFyZ3MudmFsdWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUdhbWVPcHRpb25zVGFiKCl7XHJcbiAgICAgICAgY29uc3QgZ2FtZU9wdGlvbnNUYWIgPSB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50Lk1lbnUuR2V0SXRlbUJ5TmFtZShcIkdhbWVcIikuSXRlbSBhcyBHYW1lT3B0aW9uc1RhYjtcclxuICAgICAgICBnYW1lT3B0aW9uc1RhYi5BZGRPblN1Ym1pdEV2ZW50TGlzdGVuZXIoIChhcmdzOiBPbkdhbWVUeXBlU3VibWl0QXJncykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9uR2FtZVR5cGVTdWJtaXQoYXJncyk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGdhbWVPcHRpb25zVGFiLkNoZWNrKHRoaXMuZ2FtZVR5cGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVUaGVtZU9wdGlvbnNUYWIoKXtcclxuICAgICAgICBjb25zdCB0aGVtZU9wdGlvbnNUYWIgPSB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50Lk1lbnUuR2V0SXRlbUJ5TmFtZShcIlRoZW1lXCIpLkl0ZW0gYXMgVGhlbWVPcHRpb25zVGFiO1xyXG4gICAgICAgIHRoZW1lT3B0aW9uc1RhYi5BZGRPblN1Ym1pdEV2ZW50TGlzdGVuZXIoIChhcmdzOiBPblRoZW1lVHlwZVN1Ym1pdEFyZ3MpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5PblRoZW1lVHlwZVN1Ym1pdChhcmdzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgdGhlbWVPcHRpb25zVGFiLnRoZW1lTGlzdC5DaGVjayh0aGlzLnRoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVSYW5raW5nT3B0aW9uc1RhYigpe1xyXG4gICAgICAgIGNvbnN0IHJhbmtpbmdPcHRpb25zVGFiID0gdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5NZW51LkdldEl0ZW1CeU5hbWUoXCJSYW5raW5nXCIpLkl0ZW0gYXMgUmFua2luZ09wdGlvbnNUYWI7XHJcbiAgICAgICAgcmFua2luZ09wdGlvbnNUYWIub25TdWJtaXRFdmVudEhhbmRsZXIuQWRkRXZlbnRMaXN0ZW5lciggKGFyZ3M6IE9uTmlja1N1Ym1pdEV2ZW50QXJncykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9uTmlja1N1bWJpdChhcmdzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgcmFua2luZ09wdGlvbnNUYWIubmlja0lucHV0LlZhbHVlID0gdGhpcy5jbGllbnQuTmljaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVHYW1lQ29tcG9uZW50KCl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudCA9IG5ldyBHYW1lQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVHYW1lQ29tcG9uZW50U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuU2V0VGhlbWUodGhpcy50aGVtZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLk5ld0dhbWVCVE4uQWRkT25DbGlja0xpc3RlbmVyKCAoKSA9PiB7dGhpcy5PblJlc2V0KCl9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVHYW1lQ29tcG9uZW50U2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5MZWZ0Q291bnRlci5TZXRWYWx1ZSh0aGlzLmdhbWVUeXBlLmJvbWJzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LlNldE5ld0JvYXJkKHt3aWR0aDogdGhpcy5nYW1lVHlwZS53aWR0aCwgaGVpZ2h0OiB0aGlzLmdhbWVUeXBlLmhlaWdodH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuQm9hcmQuQWRkT25DbGlja0xpc3RlbmVyKCAoYXJnczogT25DZWxsQ2xpY2tBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuT25DbGljayhhcmdzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkNsaWNrKGFyZ3M6IE9uQ2VsbENsaWNrQXJncyl7XHJcbiAgICAgICAgaWYoYXJncy50eXBlID09IENlbGxDbGlja1R5cGVzLmxlZnRDbGljayl7XHJcbiAgICAgICAgICAgIHRoaXMuT25MZWZ0Q2xpY2soYXJncy54LCBhcmdzLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhcmdzLnR5cGUgPT0gQ2VsbENsaWNrVHlwZXMucmlnaHRDbGljayl7XHJcbiAgICAgICAgICAgIHRoaXMuT25SaWdodENsaWNrKGFyZ3MueCwgYXJncy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkxlZnRDbGljayh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWUuT3BlbihuZXcgUG9zaXRpb24oeCwgeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25SaWdodENsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5NYXJrKG5ldyBQb3NpdGlvbih4LCB5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkNlbGxDaGFuZ2UoYXJnczogT25DZWxsQ2hhbmdlQXJncyl7XHJcbiAgICAgICAgbGV0IGltZ1BhdGg6IHN0cmluZztcclxuICAgICAgICBpZihhcmdzLmNlbGwuaXNNYXJrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihhcmdzLmNlbGwuaXNPcGVuZWQgJiYgIWFyZ3MuY2VsbC5pc0JvbWIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZ1BhdGggPSBJbWFnZXNbJ25vdEJvbWInXS5zcmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQYXRoID0gSW1hZ2VzWydmbGFnJ10uc3JjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYXJncy5jZWxsLmlzT3BlbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoYXJncy5jZWxsLmlzQm9tYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1nUGF0aCA9IEltYWdlc1snYm9tYiddLnNyYztcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoYXJncy5jZWxsLm5laWdoYm9yQm9tYnMgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRoID0gSW1hZ2VzW1wib1wiICsgYXJncy5jZWxsLm5laWdoYm9yQm9tYnMudG9TdHJpbmcoKV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihhcmdzLmNlbGwuaXNPcGVuZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkJvYXJkLmNlbGxzW2FyZ3MuaW5kZXhdLkRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5Cb2FyZC5jZWxsc1thcmdzLmluZGV4XS5TZXRJbWFnZShpbWdQYXRoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPblJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLk5ld0dhbWVCVE4uU2V0SW1hZ2UoSW1hZ2VzWydlMSddLnNyYyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5SZXNldCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5MZWZ0Q291bnRlci5TZXRWYWx1ZSh0aGlzLmdhbWVUeXBlLmJvbWJzKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkdhbWVMb3NlKGFyZ3M6IE9uRGVmZWF0QXJncylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkhlYWQuTmV3R2FtZUJUTi5TZXRJbWFnZShJbWFnZXNbJ2UzJ10uc3JjKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkJvYXJkLmNlbGxzW2FyZ3MubGFzdE9wZW5lZEluZGV4XS5TZXRCYWNrZ3JvdW5kQ29sb3IoXCJyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgQExvZ01ldGhvZFxyXG4gICAgcHJpdmF0ZSBPbkdhbWVXaW4oYXJnczogT25XaW5BcmdzKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5OZXdHYW1lQlROLlNldEltYWdlKEltYWdlc1snZTQnXS5zcmMpO1xyXG4gICAgICAgIGlmKGFyZ3MuZ2FtZVR5cGUgIT0gR2FtZVR5cGVOYW1lcy5jdXN0b20gJiYgdGhpcy5jbGllbnQuSXNPcGVuZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5TZW5kU2NvcmVBbmRHYW1lVHlwZShhcmdzLnRpbWUsIGFyZ3MuZ2FtZVR5cGUgYXMgdW5rbm93biBhcyBCYXNlR2FtZVR5cGVOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25Cb21ic1RvRGlzYXJtQ2hhbmdlKGFyZ3M6IE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzKXtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkhlYWQuTGVmdENvdW50ZXIuU2V0VmFsdWUoYXJncy5ib21ic1RvRGlzYXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uR2FtZVR5cGVTdWJtaXQoYXJnczogT25HYW1lVHlwZVN1Ym1pdEFyZ3MpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoYXJncy5nYW1lVHlwZSAhPSBHYW1lVHlwZU5hbWVzLmN1c3RvbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVR5cGUgPSBCYXNlR2FtZVR5cGVzW2FyZ3MuZ2FtZVR5cGUgYXMgdW5rbm93biBhcyBCYXNlR2FtZVR5cGVOYW1lc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN2ID0gKHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuTWVudS5HZXRJdGVtQnlOYW1lKCdHYW1lJykuSXRlbSBhcyBHYW1lT3B0aW9uc1RhYikuQ3VzdG9tVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVUeXBlID0gbmV3IEdhbWVUeXBlKGN2LndpZHRoLCBjdi5oZWlnaHQsIGN2LmJvbWJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaHtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25Xcm9uZ0FyZ3NTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVUeXBlTmFtZSA9IGFyZ3MuZ2FtZVR5cGU7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5SZXNldCgpO1xyXG4gICAgICAgIHRoaXMuTmV3R2FtZSgpO1xyXG4gICAgICAgIHRoaXMuUHVzaEdhbWVQcm9wc1RvU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuTWVudS5HZXRJdGVtQnlOYW1lKCdHYW1lJykuQ2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uVGhlbWVUeXBlU3VibWl0KGFyZ3M6IE9uVGhlbWVUeXBlU3VibWl0QXJncylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRoZW1lID0gYXJncy50aGVtZVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuU2V0VGhlbWUodGhpcy50aGVtZSk7XHJcbiAgICAgICAgdGhpcy5QdXNoVGhlbWVQcm9wc1RvU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuTWVudS5HZXRJdGVtQnlOYW1lKCdUaGVtZScpLkNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbk5pY2tTdW1iaXQoYXJnczogT25OaWNrU3VibWl0RXZlbnRBcmdzKXtcclxuICAgICAgICB0aGlzLmNsaWVudC5OaWNrID0gYXJncy5uaWNrO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuTWVudS5HZXRJdGVtQnlOYW1lKCdSYW5raW5nJykuQ2xvc2UoKTtcclxuICAgICAgICB0aGlzLlB1c2hOaWNrVG9TdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbldyb25nQXJnc1N1Ym1pdCgpe1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElDdXN0b21lckV2ZW50SGFuZGxlcjxUPntcclxuICBBZGRFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJncz86IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gIFJlbW92ZUxpc3RlbmVyKGZ1bmM6IChhcmdzPzogVCkgPT4gdm9pZCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElDdXN0b21lckV2ZW50SGFuZGxlcjxUPntcclxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTwgKGFyZ3M/OiBUKSA9PiB2b2lkID47XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgQXJyYXk8IChhcmdzPzogVCkgPT4gdm9pZCA+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIGZ1bmN0aW9uIHdoaWNoIHJlbW92ZXMgZ2l2ZW4gZnVuY3Rpb24gZnJvbSBldmVudCBsaXN0ZW5lcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJncz86IFQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7dGhpcy5SZW1vdmVMaXN0ZW5lcihmdW5jKX07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEV4ZWN1dGVMaXN0ZW5lcnMoIGFyZ3M/OiBUICkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcihhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlTGlzdGVuZXIoZnVuYzogKGFyZ3M/OiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyICE9IGZ1bmMpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9FdmVudEhhbmRsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCBFdmVudEhhbmRsZXI8YW55Pj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudEhhbmRsZXI8YW55Pj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkRXZlbnRIYW5kbGVyPFQ+KG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5ldmVudEhhbmRsZXJzLmhhcyhuYW1lKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV2ZW50SGFuZGxlciBhbHJlYWR5IGV4aXN0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnNldChuYW1lLCAgbmV3IEV2ZW50SGFuZGxlcjxUPigpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEV2ZW50SGFuZGxlciAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRIYW5kbGVycy5nZXQobmFtZSk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBib21iID0gbmV3IEltYWdlKDE4LCAxOCk7XHJcbmJvbWIgLnNyYyA9ICdpbWFnZXMvYm9tYmEucG5nJztcclxuXHJcbmNvbnN0IGZsYWcgPSBuZXcgSW1hZ2UoMTgsIDE4KTtcclxuZmxhZy5zcmMgPSAnaW1hZ2VzL2ZsYWcucG5nJztcclxuXHJcbmNvbnN0IG5vdGJvbWIgPSBuZXcgSW1hZ2UoMTgsIDE4KTtcclxubm90Ym9tYi5zcmMgPSAnaW1hZ2VzL25vdGJvbWJhLnBuZyc7XHJcblxyXG5jb25zdCBvMSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMS5zcmMgPSAnaW1hZ2VzL28xLnBuZyc7XHJcblxyXG5jb25zdCBvMiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMi5zcmMgPSAnaW1hZ2VzL28yLnBuZyc7XHJcblxyXG5jb25zdCBvMyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMy5zcmMgPSAnaW1hZ2VzL28zLnBuZyc7XHJcblxyXG5jb25zdCBvNCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNC5zcmMgPSAnaW1hZ2VzL280LnBuZyc7XHJcblxyXG5jb25zdCBvNSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNS5zcmMgPSAnaW1hZ2VzL281LnBuZyc7XHJcblxyXG5jb25zdCBvNiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNi5zcmMgPSAnaW1hZ2VzL282LnBuZyc7XHJcblxyXG5jb25zdCBvNyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNy5zcmMgPSAnaW1hZ2VzL283LnBuZyc7XHJcblxyXG5jb25zdCBvOCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vOC5zcmMgPSAnaW1hZ2VzL284LnBuZyc7XHJcblxyXG5jb25zdCBjMCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMC5zcmMgPSAnaW1hZ2VzL2MwLmdpZic7XHJcblxyXG5jb25zdCBjMSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMS5zcmMgPSAnaW1hZ2VzL2MxLmdpZic7XHJcblxyXG5jb25zdCBjMiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMi5zcmMgPSAnaW1hZ2VzL2MyLmdpZic7XHJcblxyXG5jb25zdCBjMyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMy5zcmMgPSAnaW1hZ2VzL2MzLmdpZic7XHJcblxyXG5jb25zdCBjNCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNC5zcmMgPSAnaW1hZ2VzL2M0LmdpZic7XHJcblxyXG5jb25zdCBjNSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNS5zcmMgPSAnaW1hZ2VzL2M1LmdpZic7XHJcblxyXG5jb25zdCBjNiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNi5zcmMgPSAnaW1hZ2VzL2M2LmdpZic7XHJcblxyXG5jb25zdCBjNyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNy5zcmMgPSAnaW1hZ2VzL2M3LmdpZic7XHJcblxyXG5jb25zdCBjOCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jOC5zcmMgPSAnaW1hZ2VzL2M4LmdpZic7XHJcblxyXG5jb25zdCBjOSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jOS5zcmMgPSAnaW1hZ2VzL2M5LmdpZic7XHJcblxyXG5jb25zdCBjXyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jXy5zcmMgPSAnaW1hZ2VzL2MtLmdpZic7XHJcblxyXG5jb25zdCBlMSA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMS5zcmMgPSAnaW1hZ2VzL2UxLnBuZyc7XHJcblxyXG5jb25zdCBlMiA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMi5zcmMgPSAnaW1hZ2VzL2UyLnBuZyc7XHJcblxyXG5jb25zdCBlMyA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMy5zcmMgPSAnaW1hZ2VzL2UzLnBuZyc7XHJcblxyXG5jb25zdCBlNCA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lNC5zcmMgPSAnaW1hZ2VzL2U0LnBuZyc7XHJcblxyXG5jb25zdCBJbWFnZXM6IHtbaW5kZXg6IHN0cmluZ106IEhUTUxJbWFnZUVsZW1lbnR9ID0ge1xyXG4gICAgWydib21iJ106IGJvbWIsXHJcbiAgICBbJ2ZsYWcnXTogZmxhZyxcclxuICAgIFsnbm90Qm9tYiddOiBub3Rib21iLFxyXG4gICAgWydvMSddOiBvMSxcclxuICAgIFsnbzInXTogbzIsXHJcbiAgICBbJ28zJ106IG8zLFxyXG4gICAgWydvNCddOiBvNCxcclxuICAgIFsnbzUnXTogbzUsXHJcbiAgICBbJ282J106IG82LFxyXG4gICAgWydvNyddOiBvNyxcclxuICAgIFsnbzgnXTogbzgsXHJcbiAgICBbJ2MwJ106IGMwLFxyXG4gICAgWydjMSddOiBjMSxcclxuICAgIFsnYzInXTogYzIsXHJcbiAgICBbJ2MzJ106IGMzLFxyXG4gICAgWydjNCddOiBjNCxcclxuICAgIFsnYzUnXTogYzUsXHJcbiAgICBbJ2M2J106IGM2LFxyXG4gICAgWydjNyddOiBjNyxcclxuICAgIFsnYzgnXTogYzgsXHJcbiAgICBbJ2M5J106IGM5LFxyXG4gICAgWydjLSddOiBjXyxcclxuICAgIFsnZTEnXTogZTEsXHJcbiAgICBbJ2UyJ106IGUyLFxyXG4gICAgWydlMyddOiBlMyxcclxuICAgIFsnZTQnXTogZTRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlcztcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lQm9hcmQuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2hlYWQuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21lbnUuc2Nzcyc7XG5cbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250cm9sbGVyLmdhbWVDb250YWluZXJFbGVtZW50LkdldENvbXBvbmVudCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5yYW5raW5nLkdldENvbXBvbmVudCgpKTsiLCJpbXBvcnQgeyBHYW1lVHlwZU5hbWVzLCBHYW1lVHlwZSB9IGZyb20gXCIuL2xvZ2ljL2dhbWVUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgR2V0TGFzdEdhbWVQcm9wcygpe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMYXN0R2FtZVByb3BzJykpIGFzIHtnYW1lVHlwZU5hbWU6IEdhbWVUeXBlTmFtZXMsIGdhbWVUeXBlOiBHYW1lVHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNldExhc3RHYW1lUHJvcHMoZ2FtZVR5cGVOYW1lOiBHYW1lVHlwZU5hbWVzLCBnYW1lVHlwZTogR2FtZVR5cGUpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdMYXN0R2FtZVByb3BzJywgSlNPTi5zdHJpbmdpZnkoIHtnYW1lVHlwZU5hbWUsIGdhbWVUeXBlfSApKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBHZXRMYXN0VGhlbWVQcm9wcygpe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMYXN0VGhlbWVQcm9wcycpKSBhcyB7dGhlbWU6IHN0cmluZ307XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNldExhc3RUaGVtZVByb3BzKHRoZW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdMYXN0VGhlbWVQcm9wcycsIEpTT04uc3RyaW5naWZ5KCB7dGhlbWV9ICkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEdldE5pY2soKXtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ05pY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgU2V0TmljayhuaWNrOiBzdHJpbmcpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOaWNrJywgbmljayk7XHJcbiAgICB9XHJcbn0iLCJmdW5jdGlvbiBMb2dNZXRob2QodGFyZ2V0OiBvYmplY3QsIHByb3BLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKTogUHJvcGVydHlEZXNjcmlwdG9ye1xyXG4gICAgY29uc29sZS5sb2coXCJNRVRIT0QgREVDT1JBVE9SOlwiLCBwcm9wS2V5LCBcImV2YWx1ZWF0ZWQuXCIpO1xyXG5cclxuICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcEtleSArIFwiIENBTExFRCEsIEFyZ3NcIiwgYXJncylcclxuICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpOztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nUHJvcGVydHkodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wZXJ0eU5hbWUsIHRhcmdldCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7TG9nTWV0aG9kLCBsb2dQcm9wZXJ0eX07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xyXG4gICAgcHVibGljIGlzQm9tYjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc09wZW5lZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc01hcmtlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBuZWlnaGJvckJvbWJzOiBudW1iZXI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzQm9tYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzTWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZWlnaGJvckJvbWJzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkTmVpZ2JvdXJCb21iKCkge1xyXG4gICAgICAgIHRoaXMubmVpZ2hib3JCb21icyArPSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRNYW5hZ2VyJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9ldmVudHMvRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5pbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnO1xyXG5pbXBvcnQgVGltZXIsIHsgSVRpbWVyQ2hhbmdlSGFuZGxlciB9IGZyb20gJy4vdGltZXInO1xyXG5pbXBvcnQgeyBHYW1lVHlwZU5hbWVzLCBCYXNlR2FtZVR5cGVzLCBCYXNlR2FtZVR5cGVOYW1lcyB9IGZyb20gJy4vZ2FtZVR5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25DZWxsQ2hhbmdlQXJnc3tcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsOiBDZWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uV2luQXJnc3tcclxuICAgIGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzO1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uRGVmZWF0QXJnc3tcclxuICAgIGxhc3RPcGVuZWRJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdze1xyXG4gICAgYm9tYnNUb0Rpc2FybTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lRXZlbnRze1xyXG4gICAgY2VsbENoYW5nZSA9IFwiY2VsbENoYW5nZVwiLFxyXG4gICAgYm9tYnNUb0Rpc2FybUNoYW5nZWQgPSBcImJvbWJzVG9EaXNhcm1DaGFuZ2VkXCIsXHJcbiAgICB3aW4gPSBcIndpblwiLFxyXG4gICAgZGVmZWF0ID0gXCJkZWZlYXRcIlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gR2V0UmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIGV4Y2x1ZGVkOiBBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKSlcclxue1xyXG4gICAgY29uc3QgcmFuZ2UgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgZm9yKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcClcclxuICAgIHtcclxuICAgICAgICBpZighZXhjbHVkZWQuaW5jbHVkZXMoaSkpe1xyXG4gICAgICAgICAgICByYW5nZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByYW5nZTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHVsbFJhbmRvbTxUPiggYXJyYXk6IFRbXSwgcXVhbnRpdHk6IG51bWJlciApe1xyXG4gICAgaWYocXVhbnRpdHkgPiBhcnJheS5sZW5ndGgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlF1YW50aXR5IG9mIGVsZW1lbnRzIHRvIHB1bGwgaXMgbGFyZ2VyIHRoYW4gYXJyYXkgbGVuZ2h0LlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhbmRvbUFycmF5ID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICBsZXQgaW5kZXhNYXggPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUocXVhbnRpdHkgPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGluZGV4TWF4KTtcclxuXHJcbiAgICAgICAgcmFuZG9tQXJyYXkucHVzaChhcnJheVtyYW5kb21JbmRleF0pO1xyXG5cclxuICAgICAgICB2YXIgdG1wID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IGFycmF5W2luZGV4TWF4XTtcclxuICAgICAgICBhcnJheVtpbmRleE1heF0gPSB0bXA7XHJcblxyXG4gICAgICAgIGluZGV4TWF4IC09IDE7XHJcbiAgICAgICAgcXVhbnRpdHkgLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmFuZG9tQXJyYXk7XHJcbn1cclxuXHJcbmNsYXNzIEdhbWV7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfTtcclxuICAgIHByb3RlY3RlZCBjZWxsc1RvT3BlbjogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGJvbWJzVG9EaXNhcm06IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBudW1iZXJPZkJvbWJzOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZmlyc3RDbGljazogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBpblByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIHRpbWVyOiBUaW1lcjtcclxuICAgIHByb3RlY3RlZCBib2FyZDogQ2VsbFtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVGltZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lciBhcyBJVGltZXJDaGFuZ2VIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXQgQm9tYnNUb0Rpc2FybSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5ib21ic1RvRGlzYXJtID09IHZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvbWJzVG9EaXNhcm0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLkJvbWJzVG9EaXNhcm1DaGFuZ2VkKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfSwgbnVtYmVyT2ZCb21iczogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFdmVudHMoKVxyXG5cclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZCb21icyA9IG51bWJlck9mQm9tYnM7XHJcbiAgICAgICAgdGhpcy5jZWxsc1RvT3BlbiA9IHNpemUud2lkdGgqc2l6ZS5oZWlnaHQgLSBudW1iZXJPZkJvbWJzO1xyXG4gICAgICAgIHRoaXMuQm9tYnNUb0Rpc2FybSA9IG51bWJlck9mQm9tYnM7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5DcmVhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBJbml0aWFsaXplRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuQWRkRXZlbnRIYW5kbGVyPE9uQ2VsbENoYW5nZUFyZ3M+KEdhbWVFdmVudHMuY2VsbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuQWRkRXZlbnRIYW5kbGVyPE9uRGVmZWF0QXJncz4oR2FtZUV2ZW50cy5kZWZlYXQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkFkZEV2ZW50SGFuZGxlcjxPbldpbkFyZ3M+KEdhbWVFdmVudHMud2luKTtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5BZGRFdmVudEhhbmRsZXI8T25Cb21ic1RvRGlzYXJtQ2hhbmdlZEFyZ3M+KEdhbWVFdmVudHMuYm9tYnNUb0Rpc2FybUNoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBDcmVhdGVCb2FyZCgpe1xyXG4gICAgICAgIGNvbnN0IGFycmF5TGVuZ2h0ID0gdGhpcy5zaXplLndpZHRoKnRoaXMuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheTxDZWxsPigpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5naHQ7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChuZXcgQ2VsbCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEV2ZW50SGFuZGxlciggZXZlbnQ6IEdhbWVFdmVudHMgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEJvYXJkSW5kZXhPZihwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54K3Bvc2l0aW9uLnkqdGhpcy5zaXplLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBCb2FyZFBvc2l0aW9uT2YoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgaWYoaW5kZXggPj0gdGhpcy5ib2FyZC5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeCA9IGluZGV4JXRoaXMuc2l6ZS53aWR0aDtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoaW5kZXgvdGhpcy5zaXplLndpZHRoKVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIElzSW5zc2lkZShwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54ID49IDAgJiYgcG9zaXRpb24ueCA8IHRoaXMuc2l6ZS53aWR0aCAmJiBwb3NpdGlvbi55ID49IDAgJiYgcG9zaXRpb24ueSA8IHRoaXMuc2l6ZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEdldE1hdHJpeChwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBcnJheTxQb3NpdGlvbj4oKTtcclxuICAgICAgICBmb3IodmFyIGkgPSBwb3NpdGlvbi54LTE7IGkgPD0gcG9zaXRpb24ueCArMTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gcG9zaXRpb24ueS0xOyBqIDw9IHBvc2l0aW9uLnkgKzE7IGorKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5laWdoYm9yUG9zaXRpb24gPSBuZXcgUG9zaXRpb24oaSwgaik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLklzSW5zc2lkZSggbmVpZ2hib3JQb3NpdGlvbiApKXtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChuZWlnaGJvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXROZWlnaGJvclBvc2l0aW9ucyhwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIHJldHVybiB0aGlzLkdldE1hdHJpeChwb3NpdGlvbikuZmlsdGVyKHBvcyA9PiAhcG9zLkVxdWFscyhwb3NpdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPcGVuKHBvc2l0aW9uOiBQb3NpdGlvbil7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5Qcm9ncmVzcykgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLkJvYXJkSW5kZXhPZihwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbaW5kZXhdO1xyXG4gICAgICAgIGlmKGNlbGwuaXNPcGVuZWQgfHwgY2VsbC5pc01hcmtlZCkgeyByZXR1cm47IH1cclxuICAgICAgICBpZih0aGlzLmZpcnN0Q2xpY2spe1xyXG4gICAgICAgICAgICB0aGlzLk9uRmlyc3RDbGljayhwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjZWxsLmlzQm9tYikge1xyXG4gICAgICAgICAgICB0aGlzLk9uR2FtZUxvc2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNhc2NhZGVPcGVuKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTWFyayhwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIGlmKCF0aGlzLmluUHJvZ3Jlc3MpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW2luZGV4XTtcclxuICAgICAgICBpZihjZWxsLmlzT3BlbmVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjZWxsLmlzTWFya2VkID0gIWNlbGwuaXNNYXJrZWQ7XHJcbiAgICAgICAgaWYoY2VsbC5pc01hcmtlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuQm9tYnNUb0Rpc2FybSA9IHRoaXMuYm9tYnNUb0Rpc2FybSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuQm9tYnNUb0Rpc2FybSA9IHRoaXMuYm9tYnNUb0Rpc2FybSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ2VsbENoYW5nZWQocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBPbkZpcnN0Q2xpY2socG9zaXRpb246IFBvc2l0aW9uKXtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlTWFwKHBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyLlN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIE9uR2FtZUxvc2UocG9zaXRpb246IFBvc2l0aW9uKXtcclxuICAgICAgICB0aGlzLk9uR2FtZUVuZCgpO1xyXG4gICAgICAgIHRoaXMuRGV0b25hdGVBbGwoKTtcclxuICAgICAgICB0aGlzLkdhbWVMb3N0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgT25HYW1lV2luKCl7XHJcbiAgICAgICAgdGhpcy5PbkdhbWVFbmQoKTtcclxuICAgICAgICB0aGlzLk1hcmtBbGwoKTtcclxuICAgICAgICB0aGlzLkdhbWVXb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgT25HYW1lRW5kKCl7XHJcbiAgICAgICAgdGhpcy5pblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lci5TdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIENlbGxDaGFuZ2VkKHBvc2l0aW9uOiBQb3NpdGlvbiB8IG51bWJlcil7XHJcbiAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgIGlmKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLkJvYXJkSW5kZXhPZihwb3NpdGlvbik7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaW5kZXggPSBwb3NpdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgT3BlbkV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmNlbGxDaGFuZ2UpIGFzIEV2ZW50SGFuZGxlcjxPbkNlbGxDaGFuZ2VBcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbkNlbGxDaGFuZ2VBcmdzID0ge2luZGV4OiBpbmRleCwgY2VsbDogdGhpcy5ib2FyZFtpbmRleF0gfVxyXG4gICAgICAgIE9wZW5FdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2FtZUxvc3QocG9zaXRpb246IFBvc2l0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IERlZmVhdEV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmRlZmVhdCkgYXMgRXZlbnRIYW5kbGVyPE9uRGVmZWF0QXJncz47XHJcbiAgICAgICAgY29uc3QgYXJnczogT25EZWZlYXRBcmdzID0ge2xhc3RPcGVuZWRJbmRleDogdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pfTtcclxuICAgICAgICBEZWZlYXRFdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2FtZVdvbigpe1xyXG4gICAgICAgIGNvbnN0IFdpbkV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLndpbikgYXMgRXZlbnRIYW5kbGVyPE9uV2luQXJncz47XHJcbiAgICAgICAgY29uc3QgYXJnczogT25XaW5BcmdzID0ge2dhbWVUeXBlOiBHYW1lVHlwZU5hbWVzLmN1c3RvbSAsdGltZTogRGF0ZS5ub3coKSAtIHRoaXMudGltZXIuVGltZXJTdGFydCB9O1xyXG4gICAgICAgIFdpbkV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBCb21ic1RvRGlzYXJtQ2hhbmdlZCgpe1xyXG4gICAgICAgIGNvbnN0IEJvbWJzVG9EaXNhcm1FdmVudEhhbmRsZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoR2FtZUV2ZW50cy5ib21ic1RvRGlzYXJtQ2hhbmdlZCkgYXMgRXZlbnRIYW5kbGVyPE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbkJvbWJzVG9EaXNhcm1DaGFuZ2VkQXJncyA9IHsgYm9tYnNUb0Rpc2FybTogdGhpcy5ib21ic1RvRGlzYXJtIH07XHJcbiAgICAgICAgQm9tYnNUb0Rpc2FybUV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEZXRvbmF0ZUFsbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGVuZ2h0ID0gdGhpcy5zaXplLndpZHRoKnRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5naHQ7IGluZGV4KyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKCAoY2VsbC5pc0JvbWIgJiYgIWNlbGwuaXNNYXJrZWQpIHx8IChjZWxsLmlzTWFya2VkICYmICFjZWxsLmlzQm9tYikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DZWxsQ2hhbmdlZChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIE1hcmtBbGwoKXtcclxuICAgICAgICBjb25zdCBsZW5naHQgPSB0aGlzLnNpemUud2lkdGgqdGhpcy5zaXplLmhlaWdodFxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmdodDsgaW5kZXgrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoICEoY2VsbC5pc09wZW5lZCB8fCBjZWxsLmlzTWFya2VkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc01hcmtlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNlbGxDaGFuZ2VkKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgQ2FzY2FkZU9wZW4ocG9zaXRpb246IFBvc2l0aW9uKXtcclxuXHJcbiAgICAgICAgdGhpcy5PcGVuQ2VsbChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3RoaXMuQm9hcmRJbmRleE9mKHBvc2l0aW9uKV07XHJcbiAgICAgICAgaWYoY2VsbC5uZWlnaGJvckJvbWJzICE9IDApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuR2V0TmVpZ2hib3JQb3NpdGlvbnMocG9zaXRpb24pO1xyXG4gICAgICAgIG5laWdoYm9ycy5mb3JFYWNoKG5laWdoYm9yUG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZWlnaHRib3IgPSB0aGlzLmJvYXJkW3RoaXMuQm9hcmRJbmRleE9mKG5laWdoYm9yUG9zaXRpb24pXTtcclxuICAgICAgICAgICAgaWYoIW5laWdodGJvci5pc09wZW5lZCAmJiAhbmVpZ2h0Ym9yLmlzTWFya2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FzY2FkZU9wZW4obmVpZ2hib3JQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIE9wZW5DZWxsKHBvc2l0aW9uOiBQb3NpdGlvbilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFt0aGlzLkJvYXJkSW5kZXhPZihwb3NpdGlvbildO1xyXG4gICAgICAgIGNlbGwuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2VsbHNUb09wZW4gLT0gMTtcclxuICAgICAgICB0aGlzLkNlbGxDaGFuZ2VkKHBvc2l0aW9uKTtcclxuICAgICAgICBpZih0aGlzLmNlbGxzVG9PcGVuID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLk9uR2FtZVdpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2VuZXJhdGVNYXAoZmlyc3RDbGlja1Bvc2l0aW9uOiBQb3NpdGlvbil7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZWRJbmRleGVzID0gdGhpcy5HZXRNYXRyaXgoZmlyc3RDbGlja1Bvc2l0aW9uKS5tYXAocG9zaXRpb24gPT4gdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pIClcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVJbmRleGVzID0gR2V0UmFuZ2UoMCwgdGhpcy5ib2FyZC5sZW5ndGgsIDEsIGV4Y2x1ZGVkSW5kZXhlcylcclxuICAgICAgICB0aGlzLlBsYWNlQm9tYnMoYXZhaWxhYmxlSW5kZXhlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFBsYWNlQm9tYnMoYXZhaWxhYmxlSW5kZXhlczogQXJyYXk8bnVtYmVyPil7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gUHVsbFJhbmRvbTxudW1iZXI+KGF2YWlsYWJsZUluZGV4ZXMsIHRoaXMubnVtYmVyT2ZCb21icykubWFwKGluZGV4ID0+IHRoaXMuQm9hcmRQb3NpdGlvbk9mKGluZGV4KSk7XHJcbiAgICAgICAgcG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlNldEJvbWJBdChwb3NpdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBTZXRCb21iQXQocG9zaXRpb246IFBvc2l0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRbaW5kZXhdLmlzQm9tYil7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmlzQm9tYiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3JJbmRleGVzID0gdGhpcy5HZXROZWlnaGJvclBvc2l0aW9ucyhwb3NpdGlvbikubWFwKHAgPT4gdGhpcy5Cb2FyZEluZGV4T2YocCkpO1xyXG4gICAgICAgIG5laWdoYm9ySW5kZXhlcy5mb3JFYWNoKG5laWdoYm9ySW5kZXggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW25laWdoYm9ySW5kZXhdLkFkZE5laWdib3VyQm9tYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEaXNwYXRjaCgpe1xyXG4gICAgICAgIHRoaXMudGltZXIuU3RvcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCZWdpbmVyR2FtZSBleHRlbmRzIEdhbWV7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zdCBnYW1lVHlwZSA9IEJhc2VHYW1lVHlwZXNbQmFzZUdhbWVUeXBlTmFtZXMuYmVnaW5uZXJdO1xyXG4gICAgICAgIHN1cGVyKHt3aWR0aDogZ2FtZVR5cGUud2lkdGgsIGhlaWdodDogZ2FtZVR5cGUuaGVpZ2h0fSwgZ2FtZVR5cGUuYm9tYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHYW1lV29uKCl7XHJcbiAgICAgICAgY29uc3QgV2luRXZlbnRIYW5kbGVyID0gdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMud2luKSBhcyBFdmVudEhhbmRsZXI8T25XaW5BcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbldpbkFyZ3MgPSB7Z2FtZVR5cGU6IEdhbWVUeXBlTmFtZXMuYmVnaW5uZXIgLHRpbWU6IERhdGUubm93KCkgLSB0aGlzLnRpbWVyLlRpbWVyU3RhcnQgfTtcclxuICAgICAgICBXaW5FdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW50ZXJtZWRpYXRlR2FtZSBleHRlbmRzIEdhbWV7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zdCBnYW1lVHlwZSA9IEJhc2VHYW1lVHlwZXNbQmFzZUdhbWVUeXBlTmFtZXMuaW50ZXJtZWRpYXRlXTtcclxuICAgICAgICBzdXBlcih7d2lkdGg6IGdhbWVUeXBlLndpZHRoLCBoZWlnaHQ6IGdhbWVUeXBlLmhlaWdodH0sIGdhbWVUeXBlLmJvbWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2FtZVdvbigpe1xyXG4gICAgICAgIGNvbnN0IFdpbkV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLndpbikgYXMgRXZlbnRIYW5kbGVyPE9uV2luQXJncz47XHJcbiAgICAgICAgY29uc3QgYXJnczogT25XaW5BcmdzID0ge2dhbWVUeXBlOiBHYW1lVHlwZU5hbWVzLmludGVybWVkaWF0ZSAsdGltZTogRGF0ZS5ub3coKSAtIHRoaXMudGltZXIuVGltZXJTdGFydCB9O1xyXG4gICAgICAgIFdpbkV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFeHBlcnRHYW1lIGV4dGVuZHMgR2FtZXtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnN0IGdhbWVUeXBlID0gQmFzZUdhbWVUeXBlc1tCYXNlR2FtZVR5cGVOYW1lcy5leHBlcnRdO1xyXG4gICAgICAgIHN1cGVyKHt3aWR0aDogZ2FtZVR5cGUud2lkdGgsIGhlaWdodDogZ2FtZVR5cGUuaGVpZ2h0fSwgZ2FtZVR5cGUuYm9tYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHYW1lV29uKCl7XHJcbiAgICAgICAgY29uc3QgV2luRXZlbnRIYW5kbGVyID0gdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMud2luKSBhcyBFdmVudEhhbmRsZXI8T25XaW5BcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbldpbkFyZ3MgPSB7Z2FtZVR5cGU6IEdhbWVUeXBlTmFtZXMuZXhwZXJ0ICx0aW1lOiBEYXRlLm5vdygpIC0gdGhpcy50aW1lci5UaW1lclN0YXJ0IH07XHJcbiAgICAgICAgV2luRXZlbnRIYW5kbGVyLkV4ZWN1dGVMaXN0ZW5lcnMoYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZSwgQmVnaW5lckdhbWUsIEludGVybWVkaWF0ZUdhbWUsIEV4cGVydEdhbWV9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9ue1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBFcXVhbHMob3RoZXI6IFBvc2l0aW9uKXtcclxuICAgICAgICByZXR1cm4gdGhpcy54ID09IG90aGVyLnggJiYgdGhpcy55ID09IG90aGVyLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRvU3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueC50b1N0cmluZygpICsgXCIgXCIgKyB0aGlzLnkudG9TdHJpbmcoKTtcclxuICAgIH1cclxufSIsIlxyXG5lbnVtIEJhc2VHYW1lVHlwZU5hbWVze1xyXG4gICAgYmVnaW5uZXIgPSAwLFxyXG4gICAgaW50ZXJtZWRpYXRlID0gMSxcclxuICAgIGV4cGVydCA9IDJcclxufVxyXG5cclxuZW51bSBHYW1lVHlwZU5hbWVze1xyXG4gICAgYmVnaW5uZXIgPSAwLFxyXG4gICAgaW50ZXJtZWRpYXRlID0gMSxcclxuICAgIGV4cGVydCA9IDIsXHJcbiAgICBjdXN0b20gPSAzXHJcbn1cclxuXHJcbmludGVyZmFjZSBJR2FtZVR5cGV7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBib21iczogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBHYW1lVHlwZSBpbXBsZW1lbnRzIElHYW1lVHlwZXtcclxuICAgIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGJvbWJzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBib21iczogbnVtYmVyKXtcclxuXHJcbiAgICAgICAgaWYod2lkdGglMSAhPSAwIHx8IHdpZHRoIDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgRXhjZXB0aW9uLlwiKSB9O1xyXG4gICAgICAgIGlmKGhlaWdodCUxICE9IDAgfHwgaGVpZ2h0IDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgRXhjZXB0aW9uLlwiKSB9O1xyXG4gICAgICAgIGlmKGJvbWJzJTEgIT0gMCB8fCBib21icyA8PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IEV4Y2VwdGlvbi5cIikgfTtcclxuICAgICAgICBpZih3aWR0aCpoZWlnaHQtOSA8IGJvbWJzKSB7IHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IEV4Y2VwdGlvbi5cIikgfTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm9tYnMgPSBib21icztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IEJhc2VHYW1lVHlwZXM6IHtbaW5kZXggaW4gQmFzZUdhbWVUeXBlTmFtZXNdOiBHYW1lVHlwZX0gPSB7XHJcbiAgICBbQmFzZUdhbWVUeXBlTmFtZXMuYmVnaW5uZXJdOiBuZXcgR2FtZVR5cGUoOCwgOCwgMTApLFxyXG4gICAgW0Jhc2VHYW1lVHlwZU5hbWVzLmludGVybWVkaWF0ZV06IG5ldyBHYW1lVHlwZSgxNiwgMTYsIDQwKSxcclxuICAgIFtCYXNlR2FtZVR5cGVOYW1lcy5leHBlcnRdOiBuZXcgR2FtZVR5cGUoMzIsIDE2LCA5OSlcclxufVxyXG5cclxuZXhwb3J0IHtJR2FtZVR5cGUsIEdhbWVUeXBlLCBCYXNlR2FtZVR5cGVzLCBHYW1lVHlwZU5hbWVzLCBCYXNlR2FtZVR5cGVOYW1lc307IiwiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vZXZlbnRzL0V2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuLi9ldmVudHMvRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uVGltZUNoYW5nZUFyZ3N7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaW1lckV2ZW50c3tcclxuICAgIG9uVGltZUNoYW5nZSA9IFwib25UaW1lQ2hhbmdlXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVyQ2hhbmdlSGFuZGxlcntcclxuICAgIEFkZE9uVGltZUNoYW5nZUV2ZW50TGlzdGVuZXIoIGZ1bmM6IChhcmdzPzogT25UaW1lQ2hhbmdlQXJncykgPT4gdm9pZCApOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGltcGxlbWVudHMgSVRpbWVyQ2hhbmdlSGFuZGxlcntcclxuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZnJlcXVlbmN5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGludGVydmFsOiBOb2RlSlMuVGltZW91dDtcclxuICAgIHByaXZhdGUgdGltZXJTdGFydDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVGltZXJTdGFydCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyU3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0YXJ0VmFsdWU6IG51bWJlciA9IDAsIHN0ZXA6IG51bWJlciA9IDEsIGZyZXF1ZW5jeTogbnVtYmVyID0gMSl7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKClcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5BZGRFdmVudEhhbmRsZXI8T25UaW1lQ2hhbmdlQXJncz4oVGltZXJFdmVudHMub25UaW1lQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHN0YXJ0VmFsdWU7XHJcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkT25UaW1lQ2hhbmdlRXZlbnRMaXN0ZW5lciggZnVuYzogKGFyZ3M/OiBPblRpbWVDaGFuZ2VBcmdzKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihUaW1lckV2ZW50cy5vblRpbWVDaGFuZ2UpIGFzIEV2ZW50SGFuZGxlcjxPblRpbWVDaGFuZ2VBcmdzPikuQWRkRXZlbnRMaXN0ZW5lcihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFRpbWVDaGFuZ2VkKCl7XHJcbiAgICAgICAgY29uc3QgVGltZUNoYW5nZWRFdmVudEhhbmRsZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoVGltZXJFdmVudHMub25UaW1lQ2hhbmdlKSBhcyBFdmVudEhhbmRsZXI8T25UaW1lQ2hhbmdlQXJncz47XHJcbiAgICAgICAgY29uc3QgYXJnczogT25UaW1lQ2hhbmdlQXJncyA9IHsgdmFsdWU6IHRoaXMudmFsdWUgfTtcclxuICAgICAgICBUaW1lQ2hhbmdlZEV2ZW50SGFuZGxlci5FeGVjdXRlTGlzdGVuZXJzKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW92ZUJ5U3RlcCgpe1xyXG4gICAgICAgIHRoaXMudmFsdWUgKz0gdGhpcy5zdGVwO1xyXG4gICAgICAgIHRoaXMuVGltZUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU3RhcnQoKXtcclxuICAgICAgICBpZih0aGlzLnN0YXJ0ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Nb3ZlQnlTdGVwKCk7XHJcbiAgICAgICAgfSwgMTAwMC90aGlzLmZyZXF1ZW5jeSk7XHJcbiAgICAgICAgdGhpcy50aW1lclN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU3RvcCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXJ0ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJU2NvcmVBbmRHYW1lVHlwZSwgSVJhbmtpbmcsIElTY29yZX0gZnJvbSBcIi4vcmFua2luZ1wiO1xyXG5cclxuZnVuY3Rpb24gR2V0U2ltcGxlUmFua2luZyhyYW5raW5nOiBJUmFua2luZyl7XHJcbiAgICBjb25zdCBzaW1wbGVSYW5raW5nOiBJUmFua2luZyA9IHtnYW1lVHlwZU5hbWU6IHJhbmtpbmcuZ2FtZVR5cGVOYW1lLCBhcnJheTogcmFua2luZy5hcnJheX07XHJcbiAgICByZXR1cm4gc2ltcGxlUmFua2luZztcclxufVxyXG5cclxuZW51bSBNZXNzYWdlVHlwZXN7XHJcbiAgICByYW5raW5nUmVxdWVzdCA9IFwicmFua2luZ1JlcXVlc3RcIixcclxuICAgIHNjb3JlQW5kR2FtZVR5cGUgPSBcInNjb3JlQW5kR2FtZVR5cGVcIixcclxuICAgIHJhbmtpbmdDaGFuZ2VkID0gXCJyYW5raW5nQ2hhbmdlZFwiXHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBJTWVzc2FnZXtcclxuICAgIHR5cGU6IE1lc3NhZ2VUeXBlcyxcclxuICAgIGRhdGE6IGFueVxyXG4gIH1cclxuICBcclxuICBleHBvcnQge0lTY29yZUFuZEdhbWVUeXBlLCBJU2NvcmUsIElNZXNzYWdlLCBNZXNzYWdlVHlwZXMsIElSYW5raW5nLCBHZXRTaW1wbGVSYW5raW5nfSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZUJvYXJkLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=