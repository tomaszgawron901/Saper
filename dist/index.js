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
exports.push([module.i, ".CellInterior {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%; }\n\n.CellContainer {\n  width: 24px;\n  height: 24px; }\n\n.CellEnabled {\n  background-color: #c4c4c4; }\n\n.CellEnabled:hover {\n  background-color: #b4b4b4; }\n\n.BoardRow {\n  display: flex;\n  flex-direction: row; }\n\n.BoardContainer {\n  width: fit-content;\n  height: fit-content; }\n\n.GameContainer {\n  width: fit-content;\n  height: fit-content;\n  padding: 10px; }\n", ""]);
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
exports.push([module.i, ".BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: white;\n  border-left-color: white;\n  border-bottom-color: #6e6e6e;\n  border-right-color: #6e6e6e;\n  background-color: #c4c4c4; }\n\n.BorderedContainer.Clickable:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #6e6e6e;\n  border-left-color: #6e6e6e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #c4c4c4; }\n\n.ReversedBorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #6e6e6e;\n  border-left-color: #6e6e6e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #c4c4c4; }\n\n.NonBorderedContainer {\n  border: solid 1px #555555;\n  background-color: #b8b8b8; }\n\nbutton.BorderedContainer:active {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: #6e6e6e;\n  border-left-color: #6e6e6e;\n  border-bottom-color: white;\n  border-right-color: white;\n  background-color: #c4c4c4; }\n\n.ImgDIV {\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\nbody {\n  background-color: grey; }\n", ""]);
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
exports.push([module.i, ".Menu {\n  height: 20px;\n  display: flex;\n  flex-direction: row; }\n\n.MenuItemLabel {\n  box-sizing: border-box;\n  user-select: none;\n  width: fit-content;\n  border: solid white 2px;\n  background-color: #c4c4c4;\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.MenuItemContainer {\n  position: relative;\n  top: -2px;\n  box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.44);\n  width: fit-content; }\n\n.OptionsTab {\n  background-color: #e6e6e6;\n  border: black 2px solid; }\n\n.OptionsTabHead {\n  background-color: #bebebe; }\n", ""]);
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
    }
    InitializeMenu() {
        this.menu = new menu_1.default();
        this.menu.AddItem(0, "Game", new GameOptionsMenuTab_1.default());
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
class GameOptionsTable {
    constructor() {
        this.id = GameOptionsTable.curentID++;
        this.InitializeRadioButtons();
        this.table = document.createElement('TABLE');
        this.table.classList.add('ReversedBorderedContainer');
        this.AppendRow(0, ["", "Width", "Height", "Bombs"]);
        this.AppendRow(1, [GetLabeledElement(this.radioButtnos[0], "Beginner"), "8", "8", "10"]);
        this.AppendRow(2, [GetLabeledElement(this.radioButtnos[1], "Intermediate"), "16", "16", "40"]);
        this.AppendRow(3, [GetLabeledElement(this.radioButtnos[2], "Expert"), "32", "16", "99"]);
        this.customWidthInput = document.createElement('INPUT');
        this.customWidthInput.style.width = '40px';
        this.customHeightInput = document.createElement('INPUT');
        this.customHeightInput.style.width = '40px';
        this.customBombsInput = document.createElement('INPUT');
        this.customBombsInput.style.width = '40px';
        this.AppendRow(4, [GetLabeledElement(this.radioButtnos[3], "Custom"), this.customWidthInput, this.customHeightInput, this.customBombsInput]);
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
        this.element.style.backgroundImage = "url(images/c" + value + ".gif)";
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
class NewGameBTN extends Clickable_1.default {
    constructor() {
        super();
        this.element = document.createElement('DIV');
        this.element.classList.add('NewGameBTN');
        this.element.classList.add('BorderedContainer');
        this.element.classList.add('Clickable');
        this.element.classList.add('CellEnabled');
        this.SetImage('images/e1.png');
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

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameContainer_1 = __webpack_require__(/*! ./components/GameContainer */ "./src/components/GameContainer.ts");
const Game_1 = __webpack_require__(/*! ./logic/Game */ "./src/logic/Game.ts");
const Position_1 = __webpack_require__(/*! ./logic/Position */ "./src/logic/Position.ts");
const Cell_1 = __webpack_require__(/*! ./components/boardComponents/Cell */ "./src/components/boardComponents/Cell.ts");
const gameTypes_1 = __webpack_require__(/*! ./logic/gameTypes */ "./src/logic/gameTypes.ts");
const localStorageManager_1 = __webpack_require__(/*! ./localStorageManager */ "./src/localStorageManager.ts");
class Controller {
    constructor() {
        this.PullGamePropsFromStorage();
        this.InitializeController();
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
    InitializeController() {
        this.InitializeGame();
        this.InitializeGameComponent();
        this.InitializeGameOptionsTab();
    }
    NewGame() {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e1.png");
        this.UpdateGameComponentSize();
        this.InitializeGame();
    }
    InitializeGame() {
        if (this.game != null) {
            this.game.Dispatch();
        }
        this.game = new Game_1.default({ width: this.gameType.width, height: this.gameType.height }, this.gameType.bombs);
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
    InitializeGameComponent() {
        this.gameContainerElement = new GameContainer_1.default();
        this.UpdateGameComponentSize();
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
                imgPath = "images/notbomba.png";
            }
            else {
                imgPath = "images/flag.png";
            }
        }
        else if (args.cell.isOpened) {
            if (args.cell.isBomb) {
                imgPath = "images/bomba.png";
            }
            else {
                if (args.cell.neighborBombs != 0) {
                    imgPath = "images/o" + args.cell.neighborBombs.toString() + ".png";
                }
            }
        }
        if (args.cell.isOpened) {
            this.gameContainerElement.Board.cells[args.index].Disable();
        }
        this.gameContainerElement.Board.cells[args.index].SetImage(imgPath);
    }
    OnReset() {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e1.png");
        this.gameContainerElement.Reset();
        this.gameContainerElement.Head.LeftCounter.SetValue(this.gameType.bombs);
        this.InitializeGame();
    }
    OnGameLose(args) {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e3.png");
        this.gameContainerElement.Board.cells[args.lastOpenedIndex].SetBackgroundColor("red");
    }
    OnGameWin(args) {
        this.gameContainerElement.Head.NewGameBTN.SetImage("images/e4.png");
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
                const cs = this.gameContainerElement.Menu.GetItemByName('Game').Item.CustomValue;
                this.gameType = new gameTypes_1.GameType(cs.width, cs.height, cs.bombs);
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
    OnWrongArgsSubmit() {
    }
}
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
let Images;
function PreLoad() {
    Images = {
        'bomb': bomb.src,
        'flag': flag.src,
        'notBomb': notbomb.src,
        'o1': o1.src,
        'o2': o2.src,
        'o3': o3.src,
        'o4': o4.src,
        'o5': o5.src,
        'o6': o6.src,
        'o7': o7.src,
        'o8': o8.src,
        'c0': c0.src,
        'c1': c1.src,
        'c2': c2.src,
        'c3': c3.src,
        'c4': c4.src,
        'c5': c5.src,
        'c6': c6.src,
        'c7': c7.src,
        'c8': c8.src,
        'c9': c9.src,
        'c-': c_.src,
        'e1': e1.src,
        'e2': e2.src,
        'e3': e3.src,
        'e4': e4.src
    };
}
exports.PreLoad = PreLoad;
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
const preLoad_1 = __webpack_require__(/*! ./images/preLoad */ "./src/images/preLoad.ts");
const controller_1 = __webpack_require__(/*! ./controller */ "./src/controller.ts");
preLoad_1.PreLoad();
const controller = new controller_1.default();
document.body.appendChild(controller.gameContainerElement.GetComponent());


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
}
exports.default = default_1;


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
        const args = { time: Date.now() - this.timer.TimerStart };
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
exports.default = Game;


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
    [BaseGameTypeNames.expert]: new GameType(30, 16, 99)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYW1lQm9hcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21lbnUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DbGlja2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9HYW1lT3B0aW9uc01lbnVUYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9tZW51SXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9hcmRDb21wb25lbnRzL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZENvbXBvbmVudHMvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkQ29tcG9uZW50cy9IZWFkQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRDb21wb25lbnRzL05ld0dhbWVCVE4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wcmVMb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxTdG9yYWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljL2dhbWVUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYW1lQm9hcmQuc2Nzcz8yNjA5Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaGVhZC5zY3NzPzllNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21lbnUuc2Nzcz8zOGY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLGlCQUFpQixFQUFFLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLHdCQUF3Qiw4QkFBOEIsRUFBRSxlQUFlLGtCQUFrQix3QkFBd0IsRUFBRSxxQkFBcUIsdUJBQXVCLHdCQUF3QixFQUFFLG9CQUFvQix1QkFBdUIsd0JBQXdCLGtCQUFrQixFQUFFO0FBQ2hlO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEVBQUUsb0JBQW9CLGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsMkJBQTJCLEVBQUUsaUJBQWlCLGdCQUFnQixpQkFBaUIsRUFBRSxtQkFBbUIsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsK0JBQStCLEVBQUU7QUFDbGI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsc0JBQXNCLHdCQUF3Qiw0QkFBNEIsNkJBQTZCLGlDQUFpQyxnQ0FBZ0MsOEJBQThCLEVBQUUseUNBQXlDLHNCQUFzQix3QkFBd0IsOEJBQThCLCtCQUErQiwrQkFBK0IsOEJBQThCLDhCQUE4QixFQUFFLGdDQUFnQyxzQkFBc0Isd0JBQXdCLDhCQUE4QiwrQkFBK0IsK0JBQStCLDhCQUE4Qiw4QkFBOEIsRUFBRSwyQkFBMkIsOEJBQThCLDhCQUE4QixFQUFFLHFDQUFxQyxzQkFBc0Isd0JBQXdCLDhCQUE4QiwrQkFBK0IsK0JBQStCLDhCQUE4Qiw4QkFBOEIsRUFBRSxhQUFhLGlDQUFpQywrQkFBK0IsRUFBRSxVQUFVLDJCQUEyQixFQUFFO0FBQzNvQztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaUJBQWlCLGtCQUFrQix3QkFBd0IsRUFBRSxvQkFBb0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsNEJBQTRCLDhCQUE4QixxQkFBcUIsc0JBQXNCLEVBQUUsd0JBQXdCLHVCQUF1QixjQUFjLHVEQUF1RCx1QkFBdUIsRUFBRSxpQkFBaUIsOEJBQThCLDRCQUE0QixFQUFFLHFCQUFxQiw4QkFBOEIsRUFBRTtBQUNoakI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDNVFBLHlHQUFrRDtBQUdsRCxNQUE4QixTQUFTO0lBSW5DO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBSSxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBS00sa0JBQWtCLENBQUMsSUFBc0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRVMsT0FBTyxDQUFDLElBQVE7UUFDdEIsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBOUJELDRCQThCQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELGdIQUE0QztBQUM1QyxzSUFBMkQ7QUFDM0QsMkdBQXlDO0FBQ3pDLHFKQUFpRTtBQUVqRSxNQUFxQixhQUFhO0lBb0I5QjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBCRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFZTyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUUvRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRS9FLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6RCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUVwRCxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sY0FBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLDRCQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRU0sV0FBVyxDQUFFLElBQXFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUo7QUE5RUQsZ0NBOEVDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRkQsNEdBQXFEO0FBU3JELFNBQVMsaUJBQWlCLENBQUMsT0FBb0IsRUFBRSxJQUFZO0lBRXpELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQ2xFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELE1BQU0sZ0JBQWdCO0lBMEJsQjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQXFCLENBQUM7UUFDN0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNqSixDQUFDO0lBaENELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sRUFBQyxLQUFLLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQzFKLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBdUI7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdUJPLHNCQUFzQjtRQUMxQixNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDMUIsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBbUIsZUFBZSxDQUFDLENBQUM7UUFDakUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFDdkM7WUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1lBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQXVCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTyxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLFFBQXFDO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEtBQUksSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDMUM7WUFDSSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLFdBQVcsRUFDckM7Z0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFnQixDQUFDLENBQUM7YUFDaEQ7aUJBQ0ksSUFBSSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQ3hDO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBVyxDQUFDO2FBQzFDO1NBQ0o7SUFDTCxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOztBQW5GYyx5QkFBUSxHQUFHLENBQUMsQ0FBQztBQXVGaEMsTUFBcUIsY0FBYztJQUsvQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQWUsVUFBVSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRWxELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxRQUF1QjtRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sd0JBQXdCLENBQUUsSUFBa0M7UUFFL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLFFBQVE7UUFDWixNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBK0IsQ0FBQztRQUN6RyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUdNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUVKO0FBbERELGlDQWtEQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEtELHdHQUFxRjtBQUlyRixNQUFxQixJQUFJO0lBSXJCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBRW5DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFFTyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdkMsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsT0FBbUI7UUFFM0QsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUFFO1FBQzVCLElBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUFFO1FBRTNELE1BQU0sSUFBSSxHQUFHLElBQUksa0JBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFFLENBQUMsSUFBOEIsRUFBRSxFQUFFO1lBQ3hELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSw4QkFBbUIsQ0FBQyxLQUFLLEVBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFFLENBQUM7UUFDSixNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ3ZDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzdCO1lBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEtBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDN0M7WUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sYUFBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWE7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxhQUFhLENBQUMsSUFBWTtRQUM3QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3pDO1lBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQzdCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNKO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBN0VELHVCQTZFQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZELDZGQUFxQztBQUVyQyxJQUFZLG1CQUdYO0FBSEQsV0FBWSxtQkFBbUI7SUFDM0IsNkRBQUk7SUFDSiwrREFBSztBQUNULENBQUMsRUFIVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUc5QjtBQU1ELE1BQXFCLFFBQVMsU0FBUSxtQkFBbUM7SUFnQnJFLFlBQW1CLElBQVksRUFBRSxJQUFnQjtRQUU3QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQW5CRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUdELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBY08saUJBQWlCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFFL0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFDakUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxlQUFlO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFTyx1QkFBdUI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFFTyxPQUFPLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBZ0I7UUFFNUIsSUFBRyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0sSUFBSTtRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkQ7YUFFRDtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FFSjtBQTdGRCwyQkE2RkM7Ozs7Ozs7Ozs7Ozs7OztBQ3hHRCw2RkFBcUM7QUFDckMsNkZBQTRDO0FBTzVDLE1BQXFCLEtBQU0sU0FBUSxtQkFBMEI7SUFJekQsWUFBbUIsSUFBb0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxTQUFTO1FBRWIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN4QztZQUNJLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxRQUFRLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3QixNQUFNLFNBQVMsbUNBQU8sUUFBUSxHQUFLLElBQUksQ0FBQztvQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDOUM7U0FDSjtJQUNMLENBQUM7SUFFTSxZQUFZO1FBQ2YsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNyQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUN2RTtZQUNELFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXBERCx3QkFvREM7Ozs7Ozs7Ozs7Ozs7OztBQzVERCw2RkFBb0M7QUFFcEMsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3RCLCtEQUFVO0lBQ1YsNkRBQVM7QUFDYixDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekI7QUFNRCxNQUFxQixJQUFLLFNBQVEsbUJBQTBCO0lBRXhEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFHaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU0sUUFBUSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUNqQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztZQUM1RCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLEdBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQztZQUM1QyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxRQUFnQixJQUFJO1FBRTFDLElBQUcsS0FBSyxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDeEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0M7UUFDRCxLQUFLLENBQUMsTUFBTSxFQUFFO0lBQ2xCLENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxZQUFZO1FBRWYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFwRUQsdUJBb0VDOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUQsTUFBcUIsT0FBTztJQUt4QixZQUFtQixhQUFxQjtRQUVwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBZSxhQUFhLENBQUMsQ0FBQztRQUM1RCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUNyQztZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBR00sUUFBUSxDQUFDLEtBQWE7UUFFekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFDMUM7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtJQUNMLENBQUM7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQWhDRCwwQkFnQ0M7QUFHRCxNQUFNLFlBQVk7SUFFZDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYTtRQUV6QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsY0FBYyxHQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7SUFDdEUsQ0FBQztJQUVNLFlBQVk7UUFFZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUN0REQscUdBQWdDO0FBQ2hDLDhHQUFzQztBQUV0QyxNQUFxQixhQUFhO0lBaUI5QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQWhCRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFRTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLFlBQVk7UUFDZixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUNoRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFwQ0QsZ0NBb0NDOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q0QsNkZBQXFDO0FBUXJDLE1BQXFCLFVBQVcsU0FBUSxtQkFBZ0M7SUFJcEU7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sUUFBUSxDQUFDLElBQVk7UUFDeEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLEdBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQztRQUM1QyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0NBRUo7QUEvQkQsNkJBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsbUhBQXVEO0FBQ3ZELDhFQUFxSDtBQUVySCwwRkFBd0M7QUFFeEMsd0hBQW1FO0FBQ25FLDZGQUF3RztBQUd4RywrR0FBd0Q7QUFHeEQsTUFBcUIsVUFBVTtJQU8zQjtRQUNJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxzQkFBc0I7UUFDMUIsNkJBQW1CLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixJQUFJLFNBQTRELENBQUM7UUFDakUsSUFBRztZQUNDLFNBQVMsR0FBRyw2QkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3REO1FBQ0QsV0FBSztZQUNELFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFFRCxJQUFHLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDakIsU0FBUyxHQUFHLEVBQUMsWUFBWSxFQUFFLHlCQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx5QkFBYSxDQUFDLDZCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7U0FDM0c7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sY0FBYztRQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQVUsQ0FBQyxVQUFVLENBQW9DLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDOUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFVLENBQUMsTUFBTSxDQUFnQyxDQUFDLGdCQUFnQixDQUN6RixDQUFDLElBQWtCLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FDSixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQVUsQ0FBQyxHQUFHLENBQTZCLENBQUMsZ0JBQWdCLENBQ25GLENBQUMsSUFBZSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQ0osQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFVLENBQUMsb0JBQW9CLENBQThDLENBQUMsZ0JBQWdCLENBQ3JILENBQUMsSUFBZ0MsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sd0JBQXdCO1FBQzVCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQXNCLENBQUM7UUFDbkcsY0FBYyxDQUFDLHdCQUF3QixDQUFFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUUsQ0FBQztRQUNKLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyx1QkFBdUI7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBQyxDQUFFLENBQUM7SUFDM0YsQ0FBQztJQUVPLHVCQUF1QjtRQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDLElBQXFCLEVBQUUsRUFBRTtZQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBRSxDQUFDO0lBQ1IsQ0FBQztJQUdPLE9BQU8sQ0FBQyxJQUFxQjtRQUNqQyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUkscUJBQWMsQ0FBQyxTQUFTLEVBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxxQkFBYyxDQUFDLFVBQVUsRUFBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFzQjtRQUN2QyxJQUFJLE9BQWUsQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNyQjtZQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDMUM7Z0JBQ0ksT0FBTyxHQUFHLHFCQUFxQixDQUFDO2FBQ25DO2lCQUVEO2dCQUNJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQzthQUMvQjtTQUNKO2FBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDMUI7WUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNuQjtnQkFDSSxPQUFPLEdBQUcsa0JBQWtCLENBQUM7YUFDaEM7aUJBQ0Q7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQy9CO29CQUNJLE9BQU8sR0FBRyxVQUFVLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUUsTUFBTSxDQUFDO2lCQUNwRTthQUNKO1NBQ0o7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUVPLE9BQU87UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQWtCO1FBRWpDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFlO1FBRTdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRU8scUJBQXFCLENBQUMsSUFBZ0M7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsSUFBa0I7UUFFdkMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLHlCQUFhLENBQUMsTUFBTSxFQUN4QztZQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsUUFBd0MsQ0FBQyxDQUFDO1NBQ2hGO2FBQ0c7WUFDQSxJQUFHO2dCQUNDLE1BQU0sRUFBRSxHQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQXVCLENBQUMsV0FBVyxDQUFDO2dCQUNyRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsV0FBSztnQkFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsT0FBTzthQUNWO1NBQ0o7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTyxpQkFBaUI7SUFFekIsQ0FBQztDQUVKO0FBMU1ELDZCQTBNQzs7Ozs7Ozs7Ozs7Ozs7O0FDck5ELE1BQXFCLFlBQVk7SUFFN0I7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUF3QixDQUFDO0lBQ3ZELENBQUM7SUFNTSxnQkFBZ0IsQ0FBRSxJQUF3QjtRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sZ0JBQWdCLENBQUUsSUFBUTtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sY0FBYyxDQUFDLElBQXdCO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FFSjtBQXpCRCwrQkF5QkM7Ozs7Ozs7Ozs7Ozs7OztBQzFCRCxpR0FBMEM7QUFFMUMsTUFBcUIsWUFBWTtJQUc3QjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUFDOUQsQ0FBQztJQUVNLGVBQWUsQ0FBSSxJQUFZO1FBQ2xDLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFHLElBQUksc0JBQVksRUFBSyxDQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVNLGVBQWUsQ0FBRSxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBakJELCtCQWlCQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixJQUFJLENBQUUsR0FBRyxHQUFHLGtCQUFrQixDQUFDO0FBRS9CLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDO0FBRTdCLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO0FBRXBDLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7QUFFekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsRUFBRSxDQUFDLEdBQUcs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QkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DZWxsSW50ZXJpb3Ige1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLkNlbGxDb250YWluZXIge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7IH1cXG5cXG4uQ2VsbEVuYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDsgfVxcblxcbi5DZWxsRW5hYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0OyB9XFxuXFxuLkJvYXJkUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLkJvYXJkQ29udGFpbmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7IH1cXG5cXG4uR2FtZUNvbnRhaW5lciB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW46IDVweDsgfVxcblxcbi5IZWFkQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLk5ld0dhbWVCVE4ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7IH1cXG5cXG4uQ291bnRlckltYWdlIHtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNmU2ZTZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDsgfVxcblxcbi5Cb3JkZXJlZENvbnRhaW5lci5DbGlja2FibGU6YWN0aXZlIHtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzZlNmU2ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7IH1cXG5cXG4uUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0OyB9XFxuXFxuLk5vbkJvcmRlcmVkQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM1NTU1NTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGI4OyB9XFxuXFxuYnV0dG9uLkJvcmRlcmVkQ29udGFpbmVyOmFjdGl2ZSB7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0OyB9XFxuXFxuLkltZ0RJViB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5NZW51IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLk1lbnVJdGVtTGFiZWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4OyB9XFxuXFxuLk1lbnVJdGVtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNDQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50OyB9XFxuXFxuLk9wdGlvbnNUYWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkOyB9XFxuXFxuLk9wdGlvbnNUYWJIZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRNYW5hZ2VyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDbGlja2FibGU8VD4ge1xyXG4gICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcclxuICAgIHByaXZhdGUgRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5BZGRFdmVudEhhbmRsZXI8VD4oXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgRnVuY3Rpb24gd2hpY2ggcmVtb3ZlcyBnaXZlbiBldmVudCBsaXN0ZW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIEFkZE9uQ2xpY2tMaXN0ZW5lcihmdW5jOiAoYXJncz86IFQpPT52b2lkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKFwiY2xpY2tcIikuQWRkRXZlbnRMaXN0ZW5lcihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgQ2xpY2tlZChhcmdzPzogVCl7XHJcbiAgICAgICAgaWYodGhpcy5FbmFibGVkKXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKFwiY2xpY2tcIikuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERpc2FibGUoKXtcclxuICAgICAgICB0aGlzLkVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkQ29tcG9uZW50cy9Cb2FyZCc7XHJcbmltcG9ydCBIZWFkQ29udGFpbmVyIGZyb20gJy4vaGVhZENvbXBvbmVudHMvSGVhZENvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudUNvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCBHYW1lT3B0aW9uc1RhYiBmcm9tICcuL01lbnVDb21wb25lbnRzL0dhbWVPcHRpb25zTWVudVRhYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udGFpbmVyIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZDtcclxuICAgIHByaXZhdGUgaGVhZDogSGVhZENvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgbWVudTogTWVudTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IEJvYXJkKCk6IEJvYXJke1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSGVhZCgpOiBIZWFkQ29udGFpbmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBNZW51KCk6IE1lbnV7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBib2FyZENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplSGVhZCgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZU1lbnUoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVCb2FyZENvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVFbGVtZW50KCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJHYW1lQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZENvbnRlaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGhlYWRDb250ZWluZXIuY2xhc3NMaXN0LmFkZChcIlJldmVyc2VkQm9yZGVyZWRDb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZENvbnRlaW5lci5jbGFzc0xpc3QuYWRkKFwiSGVhZENvbnRhaW5lclwiKTtcclxuICAgICAgICBoZWFkQ29udGVpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGVhZC5HZXRDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZENvbnRlaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJvYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWVudS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZU1lbnUoKXtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIHRoaXMubWVudS5BZGRJdGVtKDAsIFwiR2FtZVwiLCBuZXcgR2FtZU9wdGlvbnNUYWIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplSGVhZCgpe1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBIZWFkQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplQm9hcmRDb250YWluZXIoKXtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0TmV3Qm9hcmQoIHNpemU6IHt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn0pIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHNpemUpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm9hcmQuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVzZXQoKXtcclxuICAgICAgICB0aGlzLmhlYWQuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLlJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vZXZlbnRzL0V2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuLi8uLi9ldmVudHMvRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7R2FtZVR5cGVOYW1lc30gZnJvbSAnLi4vLi4vbG9naWMvZ2FtZVR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uU3VibWl0QXJnc3tcclxuICAgIGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRMYWJlbGVkRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKVxyXG57XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xBQkVMJykgYXMgSFRNTExhYmVsRWxlbWVudDtcclxuICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBsYWJlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XHJcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RFWFQnKTtcclxuICAgIHRleHRFbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcclxuICAgIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuY2xhc3MgR2FtZU9wdGlvbnNUYWJsZSBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJlbnRJRCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmFkaW9CdXR0bm9zOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzO1xyXG5cclxuICAgIHByaXZhdGUgY3VzdG9tV2lkdGhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgY3VzdG9tSGVpZ2h0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN1c3RvbUJvbWJzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGdldCBHYW1lVHlwZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ3VzdG9tVmFsdWUoKXtcclxuICAgICAgICByZXR1cm4ge3dpZHRoOiAgcGFyc2VJbnQodGhpcy5jdXN0b21XaWR0aElucHV0LnZhbHVlKSAsIGhlaWdodDogcGFyc2VJbnQodGhpcy5jdXN0b21IZWlnaHRJbnB1dC52YWx1ZSksIGJvbWJzOiBwYXJzZUludCh0aGlzLmN1c3RvbUJvbWJzSW5wdXQudmFsdWUpfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2hlY2soZ2FtZVR5cGU6IEdhbWVUeXBlTmFtZXMpe1xyXG4gICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2dhbWVUeXBlXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk9uU2VsZWN0aW9uQ2hhbmdlKGdhbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmlkID0gR2FtZU9wdGlvbnNUYWJsZS5jdXJlbnRJRCsrO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZVJhZGlvQnV0dG9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEFCTEUnKSBhcyBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZCgnUmV2ZXJzZWRCb3JkZXJlZENvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDAsIFtcIlwiLCBcIldpZHRoXCIsIFwiSGVpZ2h0XCIsIFwiQm9tYnNcIl0pO1xyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDEsIFtHZXRMYWJlbGVkRWxlbWVudCh0aGlzLnJhZGlvQnV0dG5vc1swXSwgXCJCZWdpbm5lclwiKSwgXCI4XCIsIFwiOFwiLCBcIjEwXCJdKTtcclxuICAgICAgICB0aGlzLkFwcGVuZFJvdygyLCBbR2V0TGFiZWxlZEVsZW1lbnQodGhpcy5yYWRpb0J1dHRub3NbMV0sIFwiSW50ZXJtZWRpYXRlXCIpLCBcIjE2XCIsIFwiMTZcIiwgXCI0MFwiXSk7XHJcbiAgICAgICAgdGhpcy5BcHBlbmRSb3coMywgW0dldExhYmVsZWRFbGVtZW50KHRoaXMucmFkaW9CdXR0bm9zWzJdLCBcIkV4cGVydFwiKSwgXCIzMlwiLCBcIjE2XCIsIFwiOTlcIl0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbVdpZHRoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21XaWR0aElucHV0LnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tSGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21IZWlnaHRJbnB1dC5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICAgICAgICB0aGlzLmN1c3RvbUJvbWJzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21Cb21ic0lucHV0LnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgICAgIHRoaXMuQXBwZW5kUm93KDQsIFtHZXRMYWJlbGVkRWxlbWVudCh0aGlzLnJhZGlvQnV0dG5vc1szXSwgXCJDdXN0b21cIiksIHRoaXMuY3VzdG9tV2lkdGhJbnB1dCwgdGhpcy5jdXN0b21IZWlnaHRJbnB1dCwgdGhpcy5jdXN0b21Cb21ic0lucHV0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplUmFkaW9CdXR0b25zKCl7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZCdXR0b25zID0gNDtcclxuICAgICAgICBjb25zdCBuYW1lID0gXCJHYW1lVHlwZXNcIiArIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJhZGlvQnV0dG5vcyA9IG5ldyBBcnJheTxIVE1MSW5wdXRFbGVtZW50PihudW1iZXJPZkJ1dHRvbnMpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1dHRvbnM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRub3NbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0bm9zW2ldLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblNlbGVjdGlvbkNoYW5nZShpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uU2VsZWN0aW9uQ2hhbmdlKGdhbWVUeXBlOiBHYW1lVHlwZU5hbWVzKXtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlID0gZ2FtZVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBcHBlbmRSb3coaW5kZXg6IG51bWJlciA9IDAsIGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudCB8IHN0cmluZz4pe1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KGluZGV4KTtcclxuICAgICAgICBmb3IobGV0IGkgPSBlbGVtZW50cy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzW2ldIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZWxlbWVudHNbaV0gYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50c1tpXSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWxlbWVudHNbaV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPcHRpb25zVGFiIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdvdDogR2FtZU9wdGlvbnNUYWJsZTtcclxuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkFkZEV2ZW50SGFuZGxlcjxPblN1Ym1pdEFyZ3M+KFwiT25TdWJtaXRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdCb3JkZXJlZENvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuXHJcbiAgICAgICAgdGhpcy5nb3QgPSBuZXcgR2FtZU9wdGlvbnNUYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmdvdC5HZXRDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YkJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHN1YkJUTi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHN1YkJUTi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBzdWJCVE4uc3R5bGUubWFyZ2luVG9wID0gJzVweCc7XHJcbiAgICAgICAgc3ViQlROLmNsYXNzTGlzdC5hZGQoXCJCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICBzdWJCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuU3VibWl0ZWQoKTsgfSlcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViQlROKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBDdXN0b21WYWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdvdC5DdXN0b21WYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2hlY2soZ2FtZVR5cGU6IEdhbWVUeXBlTmFtZXMpe1xyXG4gICAgICAgIHRoaXMuZ290LkNoZWNrKGdhbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkT25TdWJtaXRFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJnczogT25TdWJtaXRBcmdzKSA9PiB2b2lkIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoJ09uU3VibWl0JykuQWRkRXZlbnRMaXN0ZW5lcihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFN1Ym1pdGVkKCl7XHJcbiAgICAgICAgY29uc3Qgb25TdWJtaXRFdmVudEhhbmRsZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoJ09uU3VibWl0JykgYXMgRXZlbnRIYW5kbGVyPE9uU3VibWl0QXJncz47XHJcbiAgICAgICAgb25TdWJtaXRFdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyh7Z2FtZVR5cGU6IHRoaXMuZ290LkdhbWVUeXBlfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRDb21wb25lbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBNZW51SXRlbSwgeyBPbk1lbnVJdGVtTGFiZWxDbGlja0FyZ3MsIE1lbnVJdGVtVmlld0FjdGlvbnMgfSBmcm9tIFwiLi9tZW51SXRlbVwiO1xyXG5pbXBvcnQgSUNvbXBvbmVudCBmcm9tIFwiLi4vSUNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PE1lbnVJdGVtPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5PE1lbnVJdGVtPigpO1xyXG5cclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFbGVtZW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUVsZW1lbnQoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnTWVudScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFJlbG9hZEl0ZW1zKCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZEl0ZW0oaW5kZXg6IG51bWJlciwgbmFtZTogc3RyaW5nLCBlbGVtZW50OiBJQ29tcG9uZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGluZGV4IDwgMCkgeyBpbmRleCA9IDA7IH1cclxuICAgICAgICBpZihpbmRleCA+IHRoaXMuaXRlbXMubGVuZ3RoKSB7IGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IE1lbnVJdGVtKG5hbWUsIGVsZW1lbnQpO1xyXG4gICAgICAgIGl0ZW0uQWRkT25DbGlja0xpc3RlbmVyKCAoYXJnczogT25NZW51SXRlbUxhYmVsQ2xpY2tBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGFyZ3MuYWN0aW9uID09IE1lbnVJdGVtVmlld0FjdGlvbnMuY2xvc2Upe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5DbG9zZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2xvc2VBbGxJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5PcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBuZXcgQXJyYXk8TWVudUl0ZW0+KCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdJdGVtcy5wdXNoKHRoaXMuaXRlbXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IGluZGV4OyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2godGhpcy5pdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcclxuICAgICAgICB0aGlzLlJlbG9hZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBDbG9zZUFsbEl0ZW1zKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLkNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRJdGVtQnlOYW1lKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLml0ZW1zW2ldLk5hbWUgPT0gbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gXCIuLi9JQ29tcG9uZW50XCI7XHJcbmltcG9ydCBDbGlja2FibGUgZnJvbSBcIi4uL0NsaWNrYWJsZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gTWVudUl0ZW1WaWV3QWN0aW9uc3tcclxuICAgIG9wZW4sXHJcbiAgICBjbG9zZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uTWVudUl0ZW1MYWJlbENsaWNrQXJnc3tcclxuICAgIGFjdGlvbjogTWVudUl0ZW1WaWV3QWN0aW9ucztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBDbGlja2FibGU8T25NZW51SXRlbUxhYmVsQ2xpY2tBcmdzPiBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGl0ZW1Db250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBvcGVuZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtOiBJQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGdldCBJdGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgTmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgaXRlbTogSUNvbXBvbmVudClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplTGFiZWwoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVJdGVtQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplRWxlbWVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLlNldE5hbWUobmFtZSk7XHJcbiAgICAgICAgdGhpcy5TZXRJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUVsZW1lbnQoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgY29uc3QgZHVtbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBkdW1teURpdi5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgICAgIGR1bW15RGl2LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIGR1bW15RGl2LmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkdW1teURpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplTGFiZWwoKXtcclxuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdNZW51SXRlbUxhYmVsJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9uTGFiZWxDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVJdGVtQ29udGFpbmVyKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ01lbnVJdGVtQ29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldE5hbWUobmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0SXRlbShpdGVtOiBJQ29tcG9uZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPcGVuKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uTGFiZWxDbGljaygpe1xyXG4gICAgICAgIGlmKHRoaXMub3BlbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DbGlja2VkKHsgYWN0aW9uOiBNZW51SXRlbVZpZXdBY3Rpb25zLmNsb3NlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsaWNrZWQoeyBhY3Rpb246IE1lbnVJdGVtVmlld0FjdGlvbnMub3BlbiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCBDbGlja2FibGUgZnJvbSAnLi4vQ2xpY2thYmxlJztcclxuaW1wb3J0IENlbGwsIHtDZWxsQ2xpY2tUeXBlc30gZnJvbSAnLi9DZWxsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25DZWxsQ2xpY2tBcmdze1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdHlwZTogQ2VsbENsaWNrVHlwZXM7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBDbGlja2FibGU8T25DZWxsQ2xpY2tBcmdzPiBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNlbGxzOiBDZWxsW107XHJcbiAgICBwcml2YXRlIHNpemU6IHt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn07XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDpudW1iZXJ9KXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IG5ldyBBcnJheTxDZWxsPih0aGlzLnNpemUud2lkdGgqdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5GaWxsQm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEJvYXJkSW5kZXhPZih4OiBudW1iZXIsIHk6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4geCArIHkqdGhpcy5zaXplLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgRmlsbEJvYXJkKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLnNpemUuaGVpZ2h0OyB5KyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplLndpZHRoOyB4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7eCwgeX07XHJcbiAgICAgICAgICAgICAgICBjZWxsLkFkZE9uQ2xpY2tMaXN0ZW5lcigoYXJncykgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja0FyZ3MgPSB7Li4ucG9zaXRpb24sIC4uLmFyZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGlja2VkKGNsaWNrQXJncykgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbdGhpcy5Cb2FyZEluZGV4T2YoeCwgeSldID0gY2VsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiQm9hcmRDb250YWluZXJcIik7XHJcbiAgICAgICAgZm9yKHZhciB5ID0gMDsgeSA8IHRoaXMuc2l6ZS5oZWlnaHQ7IHkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcIkJvYXJkUm93XCIpO1xyXG4gICAgICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5zaXplLndpZHRoOyB4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aGlzLmNlbGxzW3RoaXMuQm9hcmRJbmRleE9mKHgsIHkpXS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLlJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IENsaWNrYWJsZSBmcm9tICcuLi9DbGlja2FibGUnXHJcblxyXG5leHBvcnQgZW51bSBDZWxsQ2xpY2tUeXBlc3tcclxuICAgIHJpZ2h0Q2xpY2ssXHJcbiAgICBsZWZ0Q2xpY2tcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNlbGxDbGlja0FyZ3Mge1xyXG4gICAgdHlwZTogQ2VsbENsaWNrVHlwZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwgZXh0ZW5kcyBDbGlja2FibGU8T25DZWxsQ2xpY2tBcmdzPiBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0NsaWNrYWJsZScpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQ2VsbEludGVyaW9yXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQ2VsbEVuYWJsZWRcIik7XHJcbiAgICAgICAgdGhpcy5TZXRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e3RoaXMuQ2xpY2tlZCh7dHlwZTogQ2VsbENsaWNrVHlwZXMubGVmdENsaWNrfSl9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoKT0+e3RoaXMuQ2xpY2tlZCh7dHlwZTogQ2VsbENsaWNrVHlwZXMucmlnaHRDbGlja30pfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldEltYWdlKHBhdGg6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgaWYocGF0aCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ0ltZ0RJVicpO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrcGF0aCtcIilcIjtcclxuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiMThweFwiO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gXCIxOHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBzdHJpbmcgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGNvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldCgpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQm9yZGVyZWRDb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJOb25Cb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkNlbGxFbmFibGVkXCIpO1xyXG4gICAgICAgIHRoaXMuU2V0QmFja2dyb3VuZENvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5FbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRW5hYmxlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJDZWxsRW5hYmxlZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQ2VsbEVuYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLkVuYWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERpc2FibGUoKXtcclxuICAgICAgICBpZih0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ2VsbEVuYWJsZWRcIikpe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIkNlbGxFbmFibGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlcGxhY2UoXCJCb3JkZXJlZENvbnRhaW5lclwiLCBcIk5vbkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5EaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdDZWxsQ29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBDb3VudGVyRGlnaXRzOiBBcnJheTxDb3VudGVyRGlnaXQ+O1xyXG4gICAgcHJpdmF0ZSBkZWNpbWFsUGxhY2VzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlY2ltYWxQbGFjZXM6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkNvdW50ZXJDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZXM7XHJcbiAgICAgICAgdGhpcy5Db3VudGVyRGlnaXRzID0gbmV3IEFycmF5PENvdW50ZXJEaWdpdD4oZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRlY2ltYWxQbGFjZXM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ291bnRlckRpZ2l0c1tpXSA9IG5ldyBDb3VudGVyRGlnaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuQ291bnRlckRpZ2l0c1tpXS5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0VmFsdWUodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCkucGFkU3RhcnQodGhpcy5kZWNpbWFsUGxhY2VzLCAnMCcpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWxQbGFjZXM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ291bnRlckRpZ2l0c1t0aGlzLmRlY2ltYWxQbGFjZXMgLSAxIC0gaV0uU2V0VmFsdWUoc3RyVmFsdWVbc3RyVmFsdWUubGVuZ3RoIC0gMSAtIGldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQ291bnRlckRpZ2l0IGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDb3VudGVySW1hZ2UnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TZXRWYWx1ZSgnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChpbWFnZXMvY1wiK3ZhbHVlK1wiLmdpZilcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSBcIi4uL0lDb21wb25lbnRcIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4vQ291bnRlclwiO1xyXG5pbXBvcnQgTmV3R2FtZUJUTiBmcm9tIFwiLi9OZXdHYW1lQlROXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkQ29udGFpbmVyIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgbGVmdENvdW50ZXI6IENvdW50ZXI7XHJcbiAgICBwcml2YXRlIHJpZ2h0Q291bnRlcjogQ291bnRlcjtcclxuICAgIHByaXZhdGUgbmV3R2FtZUJUTjogTmV3R2FtZUJUTjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IExlZnRDb3VudGVyKCk6IENvdW50ZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdENvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBSaWd0aENvdW50ZXIoKTogQ291bnRlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodENvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBOZXdHYW1lQlROKCk6IE5ld0dhbWVCVE57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3R2FtZUJUTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxlZnRDb3VudGVyID0gbmV3IENvdW50ZXIoMyk7XHJcbiAgICAgICAgdGhpcy5yaWdodENvdW50ZXIgPSBuZXcgQ291bnRlcigzKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVCVE4gPSBuZXcgTmV3R2FtZUJUTigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldCgpe1xyXG4gICAgICAgIHRoaXMubGVmdENvdW50ZXIuU2V0VmFsdWUoMCk7XHJcbiAgICAgICAgdGhpcy5yaWdodENvdW50ZXIuU2V0VmFsdWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCgpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJIZWFkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0Q291bnRlci5HZXRDb21wb25lbnQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm5ld0dhbWVCVE4uR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yaWdodENvdW50ZXIuR2V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENsaWNrYWJsZSBmcm9tIFwiLi4vQ2xpY2thYmxlXCI7XHJcbmltcG9ydCBJQ29tcG9uZW50IGZyb20gXCIuLi9JQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbk5ld0dhbWVCVE5DbGlja0FyZ3N7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdHYW1lQlROIGV4dGVuZHMgQ2xpY2thYmxlPE9uTmV3R2FtZUJUTkNsaWNrQXJncz4gaW1wbGVtZW50cyBJQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnTmV3R2FtZUJUTicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdCb3JkZXJlZENvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDbGlja2FibGUnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQ2VsbEVuYWJsZWQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5TZXRJbWFnZSgnaW1hZ2VzL2UxLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLkNsaWNrZWQoKTt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0SW1hZ2UocGF0aDogc3RyaW5nKXtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnSW1nRElWJyk7XHJcbiAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiK3BhdGgrXCIpXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29tcG9uZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgR2FtZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0dhbWVDb250YWluZXJcIjtcclxuaW1wb3J0IEdhbWUsIHtHYW1lRXZlbnRzLCBPbkNlbGxDaGFuZ2VBcmdzLCBPbkRlZmVhdEFyZ3MsIE9uV2luQXJncywgT25Cb21ic1RvRGlzYXJtQ2hhbmdlZEFyZ3N9IGZyb20gXCIuL2xvZ2ljL0dhbWVcIjtcclxuaW1wb3J0IHtPbkNlbGxDbGlja0FyZ3N9IGZyb20gJy4vY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQm9hcmQnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4vbG9naWMvUG9zaXRpb25cIjtcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9ldmVudHMvRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENlbGxDbGlja1R5cGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ib2FyZENvbXBvbmVudHMvQ2VsbFwiO1xyXG5pbXBvcnQgeyBJR2FtZVR5cGUsIEJhc2VHYW1lVHlwZXMsIEdhbWVUeXBlTmFtZXMsIEJhc2VHYW1lVHlwZU5hbWVzLCBHYW1lVHlwZX0gZnJvbSBcIi4vbG9naWMvZ2FtZVR5cGVzXCI7XHJcbmltcG9ydCB7IExvZ01ldGhvZCB9IGZyb20gXCIuL2xvZ0RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgT25TdWJtaXRBcmdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50cy9HYW1lT3B0aW9uc01lbnVUYWJcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VNYW5hZ2VyJztcclxuaW1wb3J0IEdhbWVPcHRpb25zVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudHMvR2FtZU9wdGlvbnNNZW51VGFiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHsgXHJcbiAgICBwdWJsaWMgZ2FtZUNvbnRhaW5lckVsZW1lbnQ6IEdhbWVDb250YWluZXI7XHJcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVUeXBlOiBJR2FtZVR5cGU7XHJcbiAgICBwcml2YXRlIGdhbWVUeXBlTmFtZTogR2FtZVR5cGVOYW1lcztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLlB1bGxHYW1lUHJvcHNGcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFB1c2hHYW1lUHJvcHNUb1N0b3JhZ2UoKXtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLlNldExhc3RHYW1lUHJvcHModGhpcy5nYW1lVHlwZU5hbWUsIHRoaXMuZ2FtZVR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUHVsbEdhbWVQcm9wc0Zyb21TdG9yYWdlKCl7XHJcbiAgICAgICAgbGV0IEdhbWVQcm9wczoge2dhbWVUeXBlTmFtZTogR2FtZVR5cGVOYW1lcywgZ2FtZVR5cGU6IEdhbWVUeXBlfTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIEdhbWVQcm9wcyA9IExvY2FsU3RvcmFnZU1hbmFnZXIuR2V0TGFzdEdhbWVQcm9wcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaHtcclxuICAgICAgICAgICAgR2FtZVByb3BzID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKEdhbWVQcm9wcyA9PSBudWxsKXtcclxuICAgICAgICAgICAgR2FtZVByb3BzID0ge2dhbWVUeXBlTmFtZTogR2FtZVR5cGVOYW1lcy5iZWdpbm5lciwgZ2FtZVR5cGU6IEJhc2VHYW1lVHlwZXNbQmFzZUdhbWVUeXBlTmFtZXMuYmVnaW5uZXJdfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lVHlwZU5hbWUgPSBHYW1lUHJvcHMuZ2FtZVR5cGVOYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVR5cGUgPSBHYW1lUHJvcHMuZ2FtZVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplQ29udHJvbGxlcigpe1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUdhbWUoKTtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVHYW1lQ29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplR2FtZU9wdGlvbnNUYWIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE5ld0dhbWUoKXtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkhlYWQuTmV3R2FtZUJUTi5TZXRJbWFnZShcImltYWdlcy9lMS5wbmdcIik7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVHYW1lQ29tcG9uZW50U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVHYW1lKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuRGlzcGF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoe3dpZHRoOiB0aGlzLmdhbWVUeXBlLndpZHRoLGhlaWdodDogdGhpcy5nYW1lVHlwZS5oZWlnaHR9LCB0aGlzLmdhbWVUeXBlLmJvbWJzKTtcclxuICAgICAgICAodGhpcy5nYW1lLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmNlbGxDaGFuZ2UpIGFzIEV2ZW50SGFuZGxlcjxPbkNlbGxDaGFuZ2VBcmdzPikuQWRkRXZlbnRMaXN0ZW5lciggKGFyZ3M6IE9uQ2VsbENoYW5nZUFyZ3MpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5PbkNlbGxDaGFuZ2UoYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKHRoaXMuZ2FtZS5HZXRFdmVudEhhbmRsZXIoR2FtZUV2ZW50cy5kZWZlYXQpIGFzIEV2ZW50SGFuZGxlcjxPbkRlZmVhdEFyZ3M+KS5BZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAoYXJnczogT25EZWZlYXRBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uR2FtZUxvc2UoYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICh0aGlzLmdhbWUuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMud2luKSBhcyBFdmVudEhhbmRsZXI8T25XaW5BcmdzPikuQWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgKGFyZ3M6IE9uV2luQXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PbkdhbWVXaW4oYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICh0aGlzLmdhbWUuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMuYm9tYnNUb0Rpc2FybUNoYW5nZWQpIGFzIEV2ZW50SGFuZGxlcjxPbkJvbWJzVG9EaXNhcm1DaGFuZ2VkQXJncz4pLkFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIChhcmdzOiBPbkJvbWJzVG9EaXNhcm1DaGFuZ2VkQXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PbkJvbWJzVG9EaXNhcm1DaGFuZ2UoYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUuVGltZXIuQWRkT25UaW1lQ2hhbmdlRXZlbnRMaXN0ZW5lcigoYXJncyk9PntcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLlJpZ3RoQ291bnRlci5TZXRWYWx1ZShhcmdzLnZhbHVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVHYW1lT3B0aW9uc1RhYigpe1xyXG4gICAgICAgIGNvbnN0IGdhbWVPcHRpb25zVGFiID0gdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5NZW51LkdldEl0ZW1CeU5hbWUoXCJHYW1lXCIpLkl0ZW0gYXMgR2FtZU9wdGlvbnNUYWI7XHJcbiAgICAgICAgZ2FtZU9wdGlvbnNUYWIuQWRkT25TdWJtaXRFdmVudExpc3RlbmVyKCAoYXJnczogT25TdWJtaXRBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuT25HYW1lVHlwZVN1Ym1pdChhcmdzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgZ2FtZU9wdGlvbnNUYWIuQ2hlY2sodGhpcy5nYW1lVHlwZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUdhbWVDb21wb25lbnQoKXtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50ID0gbmV3IEdhbWVDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZUdhbWVDb21wb25lbnRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLk5ld0dhbWVCVE4uQWRkT25DbGlja0xpc3RlbmVyKCAoKSA9PiB7dGhpcy5PblJlc2V0KCl9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVHYW1lQ29tcG9uZW50U2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5MZWZ0Q291bnRlci5TZXRWYWx1ZSh0aGlzLmdhbWVUeXBlLmJvbWJzKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LlNldE5ld0JvYXJkKHt3aWR0aDogdGhpcy5nYW1lVHlwZS53aWR0aCwgaGVpZ2h0OiB0aGlzLmdhbWVUeXBlLmhlaWdodH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuQm9hcmQuQWRkT25DbGlja0xpc3RlbmVyKCAoYXJnczogT25DZWxsQ2xpY2tBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuT25DbGljayhhcmdzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgT25DbGljayhhcmdzOiBPbkNlbGxDbGlja0FyZ3Mpe1xyXG4gICAgICAgIGlmKGFyZ3MudHlwZSA9PSBDZWxsQ2xpY2tUeXBlcy5sZWZ0Q2xpY2spe1xyXG4gICAgICAgICAgICB0aGlzLk9uTGVmdENsaWNrKGFyZ3MueCwgYXJncy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJncy50eXBlID09IENlbGxDbGlja1R5cGVzLnJpZ2h0Q2xpY2spe1xyXG4gICAgICAgICAgICB0aGlzLk9uUmlnaHRDbGljayhhcmdzLngsIGFyZ3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25MZWZ0Q2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nYW1lLk9wZW4obmV3IFBvc2l0aW9uKHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uUmlnaHRDbGljayh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWUuTWFyayhuZXcgUG9zaXRpb24oeCwgeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25DZWxsQ2hhbmdlKGFyZ3M6IE9uQ2VsbENoYW5nZUFyZ3Mpe1xyXG4gICAgICAgIGxldCBpbWdQYXRoOiBzdHJpbmc7XHJcbiAgICAgICAgaWYoYXJncy5jZWxsLmlzTWFya2VkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoYXJncy5jZWxsLmlzT3BlbmVkICYmICFhcmdzLmNlbGwuaXNCb21iKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQYXRoID0gXCJpbWFnZXMvbm90Ym9tYmEucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQYXRoID0gXCJpbWFnZXMvZmxhZy5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFyZ3MuY2VsbC5pc09wZW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGFyZ3MuY2VsbC5pc0JvbWIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZ1BhdGggPSBcImltYWdlcy9ib21iYS5wbmdcIjtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoYXJncy5jZWxsLm5laWdoYm9yQm9tYnMgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRoID0gXCJpbWFnZXMvb1wiKyBhcmdzLmNlbGwubmVpZ2hib3JCb21icy50b1N0cmluZygpICtcIi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoYXJncy5jZWxsLmlzT3BlbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5Cb2FyZC5jZWxsc1thcmdzLmluZGV4XS5EaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuQm9hcmQuY2VsbHNbYXJncy5pbmRleF0uU2V0SW1hZ2UoaW1nUGF0aCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25SZXNldCgpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5OZXdHYW1lQlROLlNldEltYWdlKFwiaW1hZ2VzL2UxLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LlJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLkxlZnRDb3VudGVyLlNldFZhbHVlKHRoaXMuZ2FtZVR5cGUuYm9tYnMpO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uR2FtZUxvc2UoYXJnczogT25EZWZlYXRBcmdzKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5OZXdHYW1lQlROLlNldEltYWdlKFwiaW1hZ2VzL2UzLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LkJvYXJkLmNlbGxzW2FyZ3MubGFzdE9wZW5lZEluZGV4XS5TZXRCYWNrZ3JvdW5kQ29sb3IoXCJyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkdhbWVXaW4oYXJnczogT25XaW5BcmdzKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lckVsZW1lbnQuSGVhZC5OZXdHYW1lQlROLlNldEltYWdlKFwiaW1hZ2VzL2U0LnBuZ1wiKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQm9tYnNUb0Rpc2FybUNoYW5nZShhcmdzOiBPbkJvbWJzVG9EaXNhcm1DaGFuZ2VkQXJncyl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5IZWFkLkxlZnRDb3VudGVyLlNldFZhbHVlKGFyZ3MuYm9tYnNUb0Rpc2FybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkdhbWVUeXBlU3VibWl0KGFyZ3M6IE9uU3VibWl0QXJncylcclxuICAgIHtcclxuICAgICAgICBpZihhcmdzLmdhbWVUeXBlICE9IEdhbWVUeXBlTmFtZXMuY3VzdG9tKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lVHlwZSA9IEJhc2VHYW1lVHlwZXNbYXJncy5nYW1lVHlwZSBhcyB1bmtub3duIGFzIEJhc2VHYW1lVHlwZU5hbWVzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3MgPSAodGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5NZW51LkdldEl0ZW1CeU5hbWUoJ0dhbWUnKS5JdGVtIGFzIEdhbWVPcHRpb25zVGFiKS5DdXN0b21WYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVR5cGUgPSBuZXcgR2FtZVR5cGUoY3Mud2lkdGgsIGNzLmhlaWdodCwgY3MuYm9tYnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Pbldyb25nQXJnc1N1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVR5cGVOYW1lID0gYXJncy5nYW1lVHlwZTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJFbGVtZW50LlJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5OZXdHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5QdXNoR2FtZVByb3BzVG9TdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyRWxlbWVudC5NZW51LkdldEl0ZW1CeU5hbWUoJ0dhbWUnKS5DbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25Xcm9uZ0FyZ3NTdWJtaXQoKXtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlcjxUPntcclxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTwgKGFyZ3M/OiBUKSA9PiB2b2lkID47XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgQXJyYXk8IChhcmdzPzogVCkgPT4gdm9pZCA+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIGZ1bmN0aW9uIHdoaWNoIHJlbW92ZXMgZ2l2ZW4gZnVuY3Rpb24gZnJvbSBldmVudCBsaXN0ZW5lcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJncz86IFQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7dGhpcy5SZW1vdmVMaXN0ZW5lcihmdW5jKX07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEV4ZWN1dGVMaXN0ZW5lcnMoIGFyZ3M/OiBUICkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcihhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlTGlzdGVuZXIoZnVuYzogKGFyZ3M/OiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyICE9IGZ1bmMpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9FdmVudEhhbmRsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCBFdmVudEhhbmRsZXI8YW55Pj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudEhhbmRsZXI8YW55Pj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkRXZlbnRIYW5kbGVyPFQ+KG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5ldmVudEhhbmRsZXJzLmhhcyhuYW1lKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV2ZW50SGFuZGxlciBhbHJlYWR5IGV4aXN0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnNldChuYW1lLCAgbmV3IEV2ZW50SGFuZGxlcjxUPigpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEV2ZW50SGFuZGxlciAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRIYW5kbGVycy5nZXQobmFtZSk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBib21iID0gbmV3IEltYWdlKDE4LCAxOCk7XHJcbmJvbWIgLnNyYyA9ICdpbWFnZXMvYm9tYmEucG5nJztcclxuXHJcbmNvbnN0IGZsYWcgPSBuZXcgSW1hZ2UoMTgsIDE4KTtcclxuZmxhZy5zcmMgPSAnaW1hZ2VzL2ZsYWcucG5nJztcclxuXHJcbmNvbnN0IG5vdGJvbWIgPSBuZXcgSW1hZ2UoMTgsIDE4KTtcclxubm90Ym9tYi5zcmMgPSAnaW1hZ2VzL25vdGJvbWJhLnBuZyc7XHJcblxyXG5jb25zdCBvMSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMS5zcmMgPSAnaW1hZ2VzL28xLnBuZyc7XHJcblxyXG5jb25zdCBvMiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMi5zcmMgPSAnaW1hZ2VzL28yLnBuZyc7XHJcblxyXG5jb25zdCBvMyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vMy5zcmMgPSAnaW1hZ2VzL28zLnBuZyc7XHJcblxyXG5jb25zdCBvNCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNC5zcmMgPSAnaW1hZ2VzL280LnBuZyc7XHJcblxyXG5jb25zdCBvNSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNS5zcmMgPSAnaW1hZ2VzL281LnBuZyc7XHJcblxyXG5jb25zdCBvNiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNi5zcmMgPSAnaW1hZ2VzL282LnBuZyc7XHJcblxyXG5jb25zdCBvNyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vNy5zcmMgPSAnaW1hZ2VzL283LnBuZyc7XHJcblxyXG5jb25zdCBvOCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5vOC5zcmMgPSAnaW1hZ2VzL284LnBuZyc7XHJcblxyXG5jb25zdCBjMCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMC5zcmMgPSAnaW1hZ2VzL2MwLmdpZic7XHJcblxyXG5jb25zdCBjMSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMS5zcmMgPSAnaW1hZ2VzL2MxLmdpZic7XHJcblxyXG5jb25zdCBjMiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMi5zcmMgPSAnaW1hZ2VzL2MyLmdpZic7XHJcblxyXG5jb25zdCBjMyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jMy5zcmMgPSAnaW1hZ2VzL2MzLmdpZic7XHJcblxyXG5jb25zdCBjNCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNC5zcmMgPSAnaW1hZ2VzL2M0LmdpZic7XHJcblxyXG5jb25zdCBjNSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNS5zcmMgPSAnaW1hZ2VzL2M1LmdpZic7XHJcblxyXG5jb25zdCBjNiA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNi5zcmMgPSAnaW1hZ2VzL2M2LmdpZic7XHJcblxyXG5jb25zdCBjNyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jNy5zcmMgPSAnaW1hZ2VzL2M3LmdpZic7XHJcblxyXG5jb25zdCBjOCA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jOC5zcmMgPSAnaW1hZ2VzL2M4LmdpZic7XHJcblxyXG5jb25zdCBjOSA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jOS5zcmMgPSAnaW1hZ2VzL2M5LmdpZic7XHJcblxyXG5jb25zdCBjXyA9IG5ldyBJbWFnZSgxOCwgMTgpO1xyXG5jXy5zcmMgPSAnaW1hZ2VzL2MtLmdpZic7XHJcblxyXG5jb25zdCBlMSA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMS5zcmMgPSAnaW1hZ2VzL2UxLnBuZyc7XHJcblxyXG5jb25zdCBlMiA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMi5zcmMgPSAnaW1hZ2VzL2UyLnBuZyc7XHJcblxyXG5jb25zdCBlMyA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lMy5zcmMgPSAnaW1hZ2VzL2UzLnBuZyc7XHJcblxyXG5jb25zdCBlNCA9IG5ldyBJbWFnZSgzMiwgMzIpO1xyXG5lNC5zcmMgPSAnaW1hZ2VzL2U0LnBuZyc7XHJcblxyXG5sZXQgSW1hZ2VzOiBhbnk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlTG9hZCgpe1xyXG4gICAgSW1hZ2VzID0ge1xyXG4gICAgICAgICdib21iJzogYm9tYi5zcmMsXHJcbiAgICAgICAgJ2ZsYWcnOiBmbGFnLnNyYyxcclxuICAgICAgICAnbm90Qm9tYic6IG5vdGJvbWIuc3JjLFxyXG4gICAgICAgICdvMSc6IG8xLnNyYyxcclxuICAgICAgICAnbzInOiBvMi5zcmMsXHJcbiAgICAgICAgJ28zJzogbzMuc3JjLFxyXG4gICAgICAgICdvNCc6IG80LnNyYyxcclxuICAgICAgICAnbzUnOiBvNS5zcmMsXHJcbiAgICAgICAgJ282JzogbzYuc3JjLFxyXG4gICAgICAgICdvNyc6IG83LnNyYyxcclxuICAgICAgICAnbzgnOiBvOC5zcmMsXHJcbiAgICAgICAgJ2MwJzogYzAuc3JjLFxyXG4gICAgICAgICdjMSc6IGMxLnNyYyxcclxuICAgICAgICAnYzInOiBjMi5zcmMsXHJcbiAgICAgICAgJ2MzJzogYzMuc3JjLFxyXG4gICAgICAgICdjNCc6IGM0LnNyYyxcclxuICAgICAgICAnYzUnOiBjNS5zcmMsXHJcbiAgICAgICAgJ2M2JzogYzYuc3JjLFxyXG4gICAgICAgICdjNyc6IGM3LnNyYyxcclxuICAgICAgICAnYzgnOiBjOC5zcmMsXHJcbiAgICAgICAgJ2M5JzogYzkuc3JjLFxyXG4gICAgICAgICdjLSc6IGNfLnNyYyxcclxuICAgICAgICAnZTEnOiBlMS5zcmMsXHJcbiAgICAgICAgJ2UyJzogZTIuc3JjLFxyXG4gICAgICAgICdlMyc6IGUzLnNyYyxcclxuICAgICAgICAnZTQnOiBlNC5zcmNcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXM7XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZUJvYXJkLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9oZWFkLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tZW51LnNjc3MnO1xuaW1wb3J0IHByZUxvYWRJbWFnZXMsIHtQcmVMb2FkfSBmcm9tICcuL2ltYWdlcy9wcmVMb2FkJztcblxuXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5QcmVMb2FkKCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5nYW1lQ29udGFpbmVyRWxlbWVudC5HZXRDb21wb25lbnQoKSk7XG4iLCJpbXBvcnQgeyBHYW1lVHlwZU5hbWVzLCBHYW1lVHlwZSB9IGZyb20gXCIuL2xvZ2ljL2dhbWVUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgR2V0TGFzdEdhbWVQcm9wcygpe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMYXN0R2FtZVByb3BzJykpIGFzIHtnYW1lVHlwZU5hbWU6IEdhbWVUeXBlTmFtZXMsIGdhbWVUeXBlOiBHYW1lVHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNldExhc3RHYW1lUHJvcHMoZ2FtZVR5cGVOYW1lOiBHYW1lVHlwZU5hbWVzLCBnYW1lVHlwZTogR2FtZVR5cGUpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdMYXN0R2FtZVByb3BzJywgSlNPTi5zdHJpbmdpZnkoIHtnYW1lVHlwZU5hbWUsIGdhbWVUeXBlfSApKVxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xyXG4gICAgcHVibGljIGlzQm9tYjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc09wZW5lZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc01hcmtlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBuZWlnaGJvckJvbWJzOiBudW1iZXI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzQm9tYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzTWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZWlnaGJvckJvbWJzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkTmVpZ2JvdXJCb21iKCkge1xyXG4gICAgICAgIHRoaXMubmVpZ2hib3JCb21icyArPSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRNYW5hZ2VyJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9ldmVudHMvRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5pbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnO1xyXG5pbXBvcnQgVGltZXIsIHsgSVRpbWVyQ2hhbmdlSGFuZGxlciB9IGZyb20gJy4vdGltZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNlbGxDaGFuZ2VBcmdze1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGw6IENlbGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25XaW5Bcmdze1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uRGVmZWF0QXJnc3tcclxuICAgIGxhc3RPcGVuZWRJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdze1xyXG4gICAgYm9tYnNUb0Rpc2FybTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lRXZlbnRze1xyXG4gICAgY2VsbENoYW5nZSA9IFwiY2VsbENoYW5nZVwiLFxyXG4gICAgYm9tYnNUb0Rpc2FybUNoYW5nZWQgPSBcImJvbWJzVG9EaXNhcm1DaGFuZ2VkXCIsXHJcbiAgICB3aW4gPSBcIndpblwiLFxyXG4gICAgZGVmZWF0ID0gXCJkZWZlYXRcIlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gR2V0UmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIGV4Y2x1ZGVkOiBBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKSlcclxue1xyXG4gICAgY29uc3QgcmFuZ2UgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgZm9yKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcClcclxuICAgIHtcclxuICAgICAgICBpZighZXhjbHVkZWQuaW5jbHVkZXMoaSkpe1xyXG4gICAgICAgICAgICByYW5nZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByYW5nZTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHVsbFJhbmRvbTxUPiggYXJyYXk6IFRbXSwgcXVhbnRpdHk6IG51bWJlciApe1xyXG4gICAgaWYocXVhbnRpdHkgPiBhcnJheS5sZW5ndGgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlF1YW50aXR5IG9mIGVsZW1lbnRzIHRvIHB1bGwgaXMgbGFyZ2VyIHRoYW4gYXJyYXkgbGVuZ2h0LlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhbmRvbUFycmF5ID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICBsZXQgaW5kZXhNYXggPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUocXVhbnRpdHkgPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHZhciByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGluZGV4TWF4KTtcclxuXHJcbiAgICAgICAgcmFuZG9tQXJyYXkucHVzaChhcnJheVtyYW5kb21JbmRleF0pO1xyXG5cclxuICAgICAgICB2YXIgdG1wID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IGFycmF5W2luZGV4TWF4XTtcclxuICAgICAgICBhcnJheVtpbmRleE1heF0gPSB0bXA7XHJcblxyXG4gICAgICAgIGluZGV4TWF4IC09IDE7XHJcbiAgICAgICAgcXVhbnRpdHkgLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmFuZG9tQXJyYXk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcclxuICAgIHByaXZhdGUgc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfTtcclxuICAgIHByaXZhdGUgY2VsbHNUb09wZW46IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm9tYnNUb0Rpc2FybTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBudW1iZXJPZkJvbWJzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZpcnN0Q2xpY2s6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBpblByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogVGltZXI7XHJcbiAgICBwcml2YXRlIGJvYXJkOiBDZWxsW107XHJcblxyXG4gICAgcHVibGljIGdldCBUaW1lcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyIGFzIElUaW1lckNoYW5nZUhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXQgQm9tYnNUb0Rpc2FybSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5ib21ic1RvRGlzYXJtID09IHZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvbWJzVG9EaXNhcm0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLkJvbWJzVG9EaXNhcm1DaGFuZ2VkKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZToge3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfSwgbnVtYmVyT2ZCb21iczogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemVFdmVudHMoKVxyXG5cclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZCb21icyA9IG51bWJlck9mQm9tYnM7XHJcbiAgICAgICAgdGhpcy5jZWxsc1RvT3BlbiA9IHNpemUud2lkdGgqc2l6ZS5oZWlnaHQgLSBudW1iZXJPZkJvbWJzO1xyXG4gICAgICAgIHRoaXMuQm9tYnNUb0Rpc2FybSA9IG51bWJlck9mQm9tYnM7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5DcmVhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZUV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkFkZEV2ZW50SGFuZGxlcjxPbkNlbGxDaGFuZ2VBcmdzPihHYW1lRXZlbnRzLmNlbGxDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkFkZEV2ZW50SGFuZGxlcjxPbkRlZmVhdEFyZ3M+KEdhbWVFdmVudHMuZGVmZWF0KTtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5BZGRFdmVudEhhbmRsZXI8T25XaW5BcmdzPihHYW1lRXZlbnRzLndpbik7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuQWRkRXZlbnRIYW5kbGVyPE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzPihHYW1lRXZlbnRzLmJvbWJzVG9EaXNhcm1DaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIENyZWF0ZUJvYXJkKCl7XHJcbiAgICAgICAgY29uc3QgYXJyYXlMZW5naHQgPSB0aGlzLnNpemUud2lkdGgqdGhpcy5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5PENlbGw+KCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheUxlbmdodDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKG5ldyBDZWxsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RXZlbnRIYW5kbGVyKCBldmVudDogR2FtZUV2ZW50cyApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEJvYXJkSW5kZXhPZihwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54K3Bvc2l0aW9uLnkqdGhpcy5zaXplLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQm9hcmRQb3NpdGlvbk9mKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGlmKGluZGV4ID49IHRoaXMuYm9hcmQubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHggPSBpbmRleCV0aGlzLnNpemUud2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGluZGV4L3RoaXMuc2l6ZS53aWR0aClcclxuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSXNJbnNzaWRlKHBvc2l0aW9uOiBQb3NpdGlvbil7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnggPj0gMCAmJiBwb3NpdGlvbi54IDwgdGhpcy5zaXplLndpZHRoICYmIHBvc2l0aW9uLnkgPj0gMCAmJiBwb3NpdGlvbi55IDwgdGhpcy5zaXplLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldE1hdHJpeChwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBcnJheTxQb3NpdGlvbj4oKTtcclxuICAgICAgICBmb3IodmFyIGkgPSBwb3NpdGlvbi54LTE7IGkgPD0gcG9zaXRpb24ueCArMTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gcG9zaXRpb24ueS0xOyBqIDw9IHBvc2l0aW9uLnkgKzE7IGorKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5laWdoYm9yUG9zaXRpb24gPSBuZXcgUG9zaXRpb24oaSwgaik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLklzSW5zc2lkZSggbmVpZ2hib3JQb3NpdGlvbiApKXtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChuZWlnaGJvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0TmVpZ2hib3JQb3NpdGlvbnMocG9zaXRpb246IFBvc2l0aW9uKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5HZXRNYXRyaXgocG9zaXRpb24pLmZpbHRlcihwb3MgPT4gIXBvcy5FcXVhbHMocG9zaXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgT3Blbihwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIGlmKCF0aGlzLmluUHJvZ3Jlc3MpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW2luZGV4XTtcclxuICAgICAgICBpZihjZWxsLmlzT3BlbmVkIHx8IGNlbGwuaXNNYXJrZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYodGhpcy5maXJzdENsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5PbkZpcnN0Q2xpY2socG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY2VsbC5pc0JvbWIpIHtcclxuICAgICAgICAgICAgdGhpcy5PbkdhbWVMb3NlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5DYXNjYWRlT3Blbihwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE1hcmsocG9zaXRpb246IFBvc2l0aW9uKXtcclxuICAgICAgICBpZighdGhpcy5pblByb2dyZXNzKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuQm9hcmRJbmRleE9mKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XHJcbiAgICAgICAgaWYoY2VsbC5pc09wZW5lZCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY2VsbC5pc01hcmtlZCA9ICFjZWxsLmlzTWFya2VkO1xyXG4gICAgICAgIGlmKGNlbGwuaXNNYXJrZWQpe1xyXG4gICAgICAgICAgICB0aGlzLkJvbWJzVG9EaXNhcm0gPSB0aGlzLmJvbWJzVG9EaXNhcm0gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLkJvbWJzVG9EaXNhcm0gPSB0aGlzLmJvbWJzVG9EaXNhcm0gKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkNlbGxDaGFuZ2VkKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uRmlyc3RDbGljayhwb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVNYXAocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIuU3RhcnQoKTtcclxuICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uR2FtZUxvc2UocG9zaXRpb246IFBvc2l0aW9uKXtcclxuICAgICAgICB0aGlzLk9uR2FtZUVuZCgpO1xyXG4gICAgICAgIHRoaXMuRGV0b25hdGVBbGwoKTtcclxuICAgICAgICB0aGlzLkdhbWVMb3N0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uR2FtZVdpbigpe1xyXG4gICAgICAgIHRoaXMuT25HYW1lRW5kKCk7XHJcbiAgICAgICAgdGhpcy5NYXJrQWxsKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lV29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkdhbWVFbmQoKXtcclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVyLlN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIENlbGxDaGFuZ2VkKHBvc2l0aW9uOiBQb3NpdGlvbiB8IG51bWJlcil7XHJcbiAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgIGlmKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLkJvYXJkSW5kZXhPZihwb3NpdGlvbik7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaW5kZXggPSBwb3NpdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgT3BlbkV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmNlbGxDaGFuZ2UpIGFzIEV2ZW50SGFuZGxlcjxPbkNlbGxDaGFuZ2VBcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbkNlbGxDaGFuZ2VBcmdzID0ge2luZGV4OiBpbmRleCwgY2VsbDogdGhpcy5ib2FyZFtpbmRleF0gfVxyXG4gICAgICAgIE9wZW5FdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdhbWVMb3N0KHBvc2l0aW9uOiBQb3NpdGlvbilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBEZWZlYXRFdmVudEhhbmRsZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5HZXRFdmVudEhhbmRsZXIoR2FtZUV2ZW50cy5kZWZlYXQpIGFzIEV2ZW50SGFuZGxlcjxPbkRlZmVhdEFyZ3M+O1xyXG4gICAgICAgIGNvbnN0IGFyZ3M6IE9uRGVmZWF0QXJncyA9IHtsYXN0T3BlbmVkSW5kZXg6IHRoaXMuQm9hcmRJbmRleE9mKHBvc2l0aW9uKX07XHJcbiAgICAgICAgRGVmZWF0RXZlbnRIYW5kbGVyLkV4ZWN1dGVMaXN0ZW5lcnMoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHYW1lV29uKCl7XHJcbiAgICAgICAgY29uc3QgV2luRXZlbnRIYW5kbGVyID0gdGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKEdhbWVFdmVudHMud2luKSBhcyBFdmVudEhhbmRsZXI8T25XaW5BcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPbldpbkFyZ3MgPSB7IHRpbWU6IERhdGUubm93KCkgLSB0aGlzLnRpbWVyLlRpbWVyU3RhcnQgfTtcclxuICAgICAgICBXaW5FdmVudEhhbmRsZXIuRXhlY3V0ZUxpc3RlbmVycyhhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEJvbWJzVG9EaXNhcm1DaGFuZ2VkKCl7XHJcbiAgICAgICAgY29uc3QgQm9tYnNUb0Rpc2FybUV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihHYW1lRXZlbnRzLmJvbWJzVG9EaXNhcm1DaGFuZ2VkKSBhcyBFdmVudEhhbmRsZXI8T25Cb21ic1RvRGlzYXJtQ2hhbmdlZEFyZ3M+O1xyXG4gICAgICAgIGNvbnN0IGFyZ3M6IE9uQm9tYnNUb0Rpc2FybUNoYW5nZWRBcmdzID0geyBib21ic1RvRGlzYXJtOiB0aGlzLmJvbWJzVG9EaXNhcm0gfTtcclxuICAgICAgICBCb21ic1RvRGlzYXJtRXZlbnRIYW5kbGVyLkV4ZWN1dGVMaXN0ZW5lcnMoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEZXRvbmF0ZUFsbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGVuZ2h0ID0gdGhpcy5zaXplLndpZHRoKnRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5naHQ7IGluZGV4KyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKCAoY2VsbC5pc0JvbWIgJiYgIWNlbGwuaXNNYXJrZWQpIHx8IChjZWxsLmlzTWFya2VkICYmICFjZWxsLmlzQm9tYikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DZWxsQ2hhbmdlZChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNYXJrQWxsKCl7XHJcbiAgICAgICAgY29uc3QgbGVuZ2h0ID0gdGhpcy5zaXplLndpZHRoKnRoaXMuc2l6ZS5oZWlnaHRcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5naHQ7IGluZGV4KyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKCAhKGNlbGwuaXNPcGVuZWQgfHwgY2VsbC5pc01hcmtlZCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNNYXJrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DZWxsQ2hhbmdlZChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBDYXNjYWRlT3Blbihwb3NpdGlvbjogUG9zaXRpb24pe1xyXG5cclxuICAgICAgICB0aGlzLk9wZW5DZWxsKHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pXTtcclxuICAgICAgICBpZihjZWxsLm5laWdoYm9yQm9tYnMgIT0gMCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gdGhpcy5HZXROZWlnaGJvclBvc2l0aW9ucyhwb3NpdGlvbik7XHJcbiAgICAgICAgbmVpZ2hib3JzLmZvckVhY2gobmVpZ2hib3JQb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5laWdodGJvciA9IHRoaXMuYm9hcmRbdGhpcy5Cb2FyZEluZGV4T2YobmVpZ2hib3JQb3NpdGlvbildO1xyXG4gICAgICAgICAgICBpZighbmVpZ2h0Ym9yLmlzT3BlbmVkICYmICFuZWlnaHRib3IuaXNNYXJrZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DYXNjYWRlT3BlbihuZWlnaGJvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9wZW5DZWxsKHBvc2l0aW9uOiBQb3NpdGlvbilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFt0aGlzLkJvYXJkSW5kZXhPZihwb3NpdGlvbildO1xyXG4gICAgICAgIGNlbGwuaXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2VsbHNUb09wZW4gLT0gMTtcclxuICAgICAgICB0aGlzLkNlbGxDaGFuZ2VkKHBvc2l0aW9uKTtcclxuICAgICAgICBpZih0aGlzLmNlbGxzVG9PcGVuID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLk9uR2FtZVdpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdlbmVyYXRlTWFwKGZpcnN0Q2xpY2tQb3NpdGlvbjogUG9zaXRpb24pe1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVkSW5kZXhlcyA9IHRoaXMuR2V0TWF0cml4KGZpcnN0Q2xpY2tQb3NpdGlvbikubWFwKHBvc2l0aW9uID0+IHRoaXMuQm9hcmRJbmRleE9mKHBvc2l0aW9uKSApXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlSW5kZXhlcyA9IEdldFJhbmdlKDAsIHRoaXMuYm9hcmQubGVuZ3RoLCAxLCBleGNsdWRlZEluZGV4ZXMpXHJcbiAgICAgICAgdGhpcy5QbGFjZUJvbWJzKGF2YWlsYWJsZUluZGV4ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUGxhY2VCb21icyhhdmFpbGFibGVJbmRleGVzOiBBcnJheTxudW1iZXI+KXtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBQdWxsUmFuZG9tPG51bWJlcj4oYXZhaWxhYmxlSW5kZXhlcywgdGhpcy5udW1iZXJPZkJvbWJzKS5tYXAoaW5kZXggPT4gdGhpcy5Cb2FyZFBvc2l0aW9uT2YoaW5kZXgpKTtcclxuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0Qm9tYkF0KHBvc2l0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBTZXRCb21iQXQocG9zaXRpb246IFBvc2l0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRbaW5kZXhdLmlzQm9tYil7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmlzQm9tYiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3JJbmRleGVzID0gdGhpcy5HZXROZWlnaGJvclBvc2l0aW9ucyhwb3NpdGlvbikubWFwKHAgPT4gdGhpcy5Cb2FyZEluZGV4T2YocCkpO1xyXG4gICAgICAgIG5laWdoYm9ySW5kZXhlcy5mb3JFYWNoKG5laWdoYm9ySW5kZXggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW25laWdoYm9ySW5kZXhdLkFkZE5laWdib3VyQm9tYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEaXNwYXRjaCgpe1xyXG4gICAgICAgIHRoaXMudGltZXIuU3RvcCgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb257XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEVxdWFscyhvdGhlcjogUG9zaXRpb24pe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggPT0gb3RoZXIueCAmJiB0aGlzLnkgPT0gb3RoZXIueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVG9TdHJpbmcoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy54LnRvU3RyaW5nKCkgKyBcIiBcIiArIHRoaXMueS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59IiwiXHJcbmVudW0gQmFzZUdhbWVUeXBlTmFtZXN7XHJcbiAgICBiZWdpbm5lciA9IDAsXHJcbiAgICBpbnRlcm1lZGlhdGUgPSAxLFxyXG4gICAgZXhwZXJ0ID0gMlxyXG59XHJcblxyXG5lbnVtIEdhbWVUeXBlTmFtZXN7XHJcbiAgICBiZWdpbm5lciA9IDAsXHJcbiAgICBpbnRlcm1lZGlhdGUgPSAxLFxyXG4gICAgZXhwZXJ0ID0gMixcclxuICAgIGN1c3RvbSA9IDNcclxufVxyXG5cclxuaW50ZXJmYWNlIElHYW1lVHlwZXtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGJvbWJzOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVUeXBlIGltcGxlbWVudHMgSUdhbWVUeXBle1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm9tYnM6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJvbWJzOiBudW1iZXIpe1xyXG5cclxuICAgICAgICBpZih3aWR0aCUxICE9IDAgfHwgd2lkdGggPD0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBFeGNlcHRpb24uXCIpIH07XHJcbiAgICAgICAgaWYoaGVpZ2h0JTEgIT0gMCB8fCBoZWlnaHQgPD0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBFeGNlcHRpb24uXCIpIH07XHJcbiAgICAgICAgaWYoYm9tYnMlMSAhPSAwIHx8IGJvbWJzIDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgRXhjZXB0aW9uLlwiKSB9O1xyXG4gICAgICAgIGlmKHdpZHRoKmhlaWdodC05IDwgYm9tYnMpIHsgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgRXhjZXB0aW9uLlwiKSB9O1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib21icyA9IGJvbWJzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgQmFzZUdhbWVUeXBlczoge1tpbmRleCBpbiBCYXNlR2FtZVR5cGVOYW1lc106IEdhbWVUeXBlfSA9IHtcclxuICAgIFtCYXNlR2FtZVR5cGVOYW1lcy5iZWdpbm5lcl06IG5ldyBHYW1lVHlwZSg4LCA4LCAxMCksXHJcbiAgICBbQmFzZUdhbWVUeXBlTmFtZXMuaW50ZXJtZWRpYXRlXTogbmV3IEdhbWVUeXBlKDE2LCAxNiwgNDApLFxyXG4gICAgW0Jhc2VHYW1lVHlwZU5hbWVzLmV4cGVydF06IG5ldyBHYW1lVHlwZSgzMCwgMTYsIDk5KVxyXG59XHJcblxyXG5leHBvcnQge0lHYW1lVHlwZSwgR2FtZVR5cGUsIEJhc2VHYW1lVHlwZXMsIEdhbWVUeXBlTmFtZXMsIEJhc2VHYW1lVHlwZU5hbWVzfTsiLCJpbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi9ldmVudHMvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4uL2V2ZW50cy9FdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25UaW1lQ2hhbmdlQXJnc3tcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpbWVyRXZlbnRze1xyXG4gICAgb25UaW1lQ2hhbmdlID0gXCJvblRpbWVDaGFuZ2VcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGltZXJDaGFuZ2VIYW5kbGVye1xyXG4gICAgQWRkT25UaW1lQ2hhbmdlRXZlbnRMaXN0ZW5lciggZnVuYzogKGFyZ3M/OiBPblRpbWVDaGFuZ2VBcmdzKSA9PiB2b2lkICk6ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgaW1wbGVtZW50cyBJVGltZXJDaGFuZ2VIYW5kbGVye1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcmVxdWVuY3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0O1xyXG4gICAgcHJpdmF0ZSB0aW1lclN0YXJ0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBUaW1lclN0YXJ0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXJTdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3RhcnRWYWx1ZTogbnVtYmVyID0gMCwgc3RlcDogbnVtYmVyID0gMSwgZnJlcXVlbmN5OiBudW1iZXIgPSAxKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKVxyXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLkFkZEV2ZW50SGFuZGxlcjxPblRpbWVDaGFuZ2VBcmdzPihUaW1lckV2ZW50cy5vblRpbWVDaGFuZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRPblRpbWVDaGFuZ2VFdmVudExpc3RlbmVyKCBmdW5jOiAoYXJncz86IE9uVGltZUNoYW5nZUFyZ3MpID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5ldmVudE1hbmFnZXIuR2V0RXZlbnRIYW5kbGVyKFRpbWVyRXZlbnRzLm9uVGltZUNoYW5nZSkgYXMgRXZlbnRIYW5kbGVyPE9uVGltZUNoYW5nZUFyZ3M+KS5BZGRFdmVudExpc3RlbmVyKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVGltZUNoYW5nZWQoKXtcclxuICAgICAgICBjb25zdCBUaW1lQ2hhbmdlZEV2ZW50SGFuZGxlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLkdldEV2ZW50SGFuZGxlcihUaW1lckV2ZW50cy5vblRpbWVDaGFuZ2UpIGFzIEV2ZW50SGFuZGxlcjxPblRpbWVDaGFuZ2VBcmdzPjtcclxuICAgICAgICBjb25zdCBhcmdzOiBPblRpbWVDaGFuZ2VBcmdzID0geyB2YWx1ZTogdGhpcy52YWx1ZSB9O1xyXG4gICAgICAgIFRpbWVDaGFuZ2VkRXZlbnRIYW5kbGVyLkV4ZWN1dGVMaXN0ZW5lcnMoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNb3ZlQnlTdGVwKCl7XHJcbiAgICAgICAgdGhpcy52YWx1ZSArPSB0aGlzLnN0ZXA7XHJcbiAgICAgICAgdGhpcy5UaW1lQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTdGFydCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhcnRlZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk1vdmVCeVN0ZXAoKTtcclxuICAgICAgICB9LCAxMDAwL3RoaXMuZnJlcXVlbmN5KTtcclxuICAgICAgICB0aGlzLnRpbWVyU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTdG9wKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhcnRlZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZUJvYXJkLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=