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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".BorderedContainer {\n  border-width: 3px;\n  border-style: solid;\n  border-top-color: white;\n  border-left-color: white;\n  border-bottom-color: #6e6e6e;\n  border-right-color: #6e6e6e;\n  background-color: #c4c4c4; }\n\n.NonBorderedContainer {\n  border: solid 1px #555555;\n  background-color: #acacac; }\n\n.CellInterior {\n  width: 100%;\n  height: 100%; }\n\n.CellContainer {\n  width: 18px;\n  height: 18px; }\n\n.CellEnabled {\n  background-color: #c4c4c4; }\n\n.CellEnabled:hover {\n  background-color: #b4b4b4; }\n\nbody {\n  background-color: grey; }\n", ""]);
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

/***/ "./src/components/Cell.ts":
/*!********************************!*\
  !*** ./src/components/Cell.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Clickable_1 = __webpack_require__(/*! ./Clickable */ "./src/components/Clickable.ts");
var CellViewTypes;
(function (CellViewTypes) {
    CellViewTypes[CellViewTypes["unopened"] = 0] = "unopened";
    CellViewTypes[CellViewTypes["opened"] = 1] = "opened";
})(CellViewTypes = exports.CellViewTypes || (exports.CellViewTypes = {}));
class Cell extends Clickable_1.default {
    constructor(Value) {
        super();
        this.Reset = () => {
            this.element.classList.add("BorderedContainer");
            this.ViewType = CellViewTypes.unopened;
            this.Enable();
        };
        this.Open = () => {
            if (this.ViewType == CellViewTypes.opened) {
                return;
            }
            this.ViewType = CellViewTypes.opened;
            this.element.classList.replace("BorderedContainer", "NonBorderedContainer");
            this.Disable();
        };
        this.Enable = () => {
            if (!this.element.classList.contains("CellEnabled")) {
                this.element.classList.add("CellEnabled");
            }
            super.Enable();
        };
        this.Disable = () => {
            if (this.element.classList.contains("CellEnabled")) {
                this.element.classList.remove("CellEnabled");
            }
            super.Disable();
        };
        this.GetComponent = () => {
            const container = document.createElement('DIV');
            container.classList.add('CellContainer');
            container.appendChild(this.element);
            return container;
        };
        this.element = document.createElement('DIV');
        this.element.classList.add("BorderedContainer");
        this.element.classList.add("CellInterior");
        this.element.classList.add("CellEnabled");
        this.element.addEventListener('click', () => { this.Clicked(); });
        this.ViewType = CellViewTypes.unopened;
        this.Value = Value;
    }
}
exports.default = Cell;


/***/ }),

/***/ "./src/components/Clickable.ts":
/*!*************************************!*\
  !*** ./src/components/Clickable.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Clickable {
    constructor() {
        this.AddOnClickListener = (func) => {
            this.listeners.push(func);
            return () => { delete this.listeners[this.listeners.indexOf(func)]; };
        };
        this.Clicked = () => {
            if (this.Enabled) {
                this.listeners.forEach(listener => {
                    listener();
                });
            }
        };
        this.Enable = () => {
            this.Enabled = true;
        };
        this.Disable = () => {
            this.Enabled = false;
        };
        this.listeners = new Array();
        this.Enabled = true;
    }
}
exports.default = Clickable;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const Cell_1 = __webpack_require__(/*! ./components/Cell */ "./src/components/Cell.ts");
const Game_1 = __webpack_require__(/*! ./logic/Game */ "./src/logic/Game.ts");
const game = new Game_1.default({ x: 10, y: 10 }, 20);
game.Open(new Game_1.Position(5, 5));
const c = new Cell_1.default(5);
c.AddOnClickListener(() => {
    console.log("click");
});
document.body.appendChild(c.GetComponent());


/***/ }),

/***/ "./src/logic/Game.ts":
/*!***************************!*\
  !*** ./src/logic/Game.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(x, y) {
        this.Equals = (other) => {
            return this.x == other.x && this.y == other.y;
        };
        this.x = x;
        this.y = y;
    }
}
exports.Position = Position;
class Game {
    constructor(size, numberOfBombs) {
        this.BoardIndexOf = (position) => {
            return position.x + position.y * (this.size.x + 1);
        };
        this.IsInsside = (position) => {
            return position.x >= 0 && position.x < this.size.x && position.y >= 0 && position.y < this.size.y;
        };
        this.IsUnOpened = (position) => {
            return this.board[this.BoardIndexOf(position)] >= 0;
        };
        this.IsBomb = (position) => {
            return this.board[this.BoardIndexOf(position)] == 9;
        };
        this.SetValue = (position, value) => {
            this.board[this.BoardIndexOf(position)] = value;
        };
        this.GetMatrix = (position) => {
            const output = new Array();
            for (var i = position.x - 1; i <= position.x + 1; i++) {
                for (var j = position.y - 1; j <= position.y + 1; j++) {
                    var neighborPosition = new Position(i, j);
                    if (this.IsInsside(neighborPosition)) {
                        output.push(neighborPosition);
                    }
                }
            }
            return output;
        };
        this.GetNeighborPositions = (position) => {
            const output = this.GetMatrix(position);
            const index = output.indexOf(position);
            if (index > -1) {
                output.splice(index, 1);
            }
            return output;
        };
        this.GetUnopenedNeighborPosition = (position) => {
            const output = new Array();
            this.GetNeighborPositions(position).forEach(neighborPosition => {
                if (this.IsUnOpened(neighborPosition)) {
                    output.push(neighborPosition);
                }
            });
            return output;
        };
        this.GetNumberOfAdjacentBombs = (position) => {
            var sum = 0;
            this.GetNeighborPositions(position).forEach(neighborPosition => {
                if (this.IsBomb(neighborPosition)) {
                    sum += 1;
                }
            });
            return sum;
        };
        this.Open = (position) => {
            if (this.firstClick) {
                this.GenerateMap(position);
                this.firstClick = false;
            }
        };
        this.GenerateMap = (firstClickPosition) => {
            const excludedIndexes = this.GetMatrix(firstClickPosition).map(this.BoardIndexOf);
            this.PlaceBombs(excludedIndexes);
            this.CalculateNeighborBombs();
        };
        this.PlaceBombs = (excludedIndexes) => {
            this.bombIndexes = new Array(this.numberOfBombs);
            const indexes = new Array();
            var indexMax = this.size.x * this.size.y - 1;
            for (var i = 0; i <= indexMax; i++) {
                if (!excludedIndexes.includes(i)) {
                    indexes.push(i);
                }
            }
            while (this.bombIndexes.length < this.numberOfBombs) {
                var randomIndex = Math.floor(Math.random() * indexMax);
                this.board[randomIndex] = 9;
                this.bombIndexes.push();
                var tmp = indexes[randomIndex];
                indexes[randomIndex] = indexes[indexMax];
                indexes[indexMax] = tmp;
                indexMax -= 1;
            }
        };
        this.CalculateNeighborBombs = () => {
            for (var i = 0; i < this.size.x; i++) {
                for (var j = 0; j < this.size.y; i++) {
                    const position = new Position(i, j);
                    if (!this.IsBomb(position)) {
                        this.SetValue(position, this.GetNumberOfAdjacentBombs(position));
                    }
                }
            }
        };
        this.size = size;
        this.numberOfBombs = numberOfBombs;
        this.firstClick = true;
    }
}
exports.default = Game;


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NsaWNrYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz80ZTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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UUFySEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztDQW1ISjtBQXRJRCx1QkFzSUM7Ozs7Ozs7Ozs7OztBQ3JKRCxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGlNQUE4Rjs7QUFFaEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQm9yZGVyZWRDb250YWluZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNmU2ZTZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDsgfVxcblxcbi5Ob25Cb3JkZXJlZENvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjNTU1NTU1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYWNhYzsgfVxcblxcbi5DZWxsSW50ZXJpb3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uQ2VsbENvbnRhaW5lciB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDsgfVxcblxcbi5DZWxsRW5hYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0OyB9XFxuXFxuLkNlbGxFbmFibGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IENsaWNrYWJsZSBmcm9tICcuL0NsaWNrYWJsZSdcclxuXHJcbmV4cG9ydCBlbnVtIENlbGxWaWV3VHlwZXN7XHJcbiAgICB1bm9wZW5lZCxcclxuICAgIG9wZW5lZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgQ2xpY2thYmxlIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIFZpZXdUeXBlOiBDZWxsVmlld1R5cGVzO1xyXG4gICAgcHJpdmF0ZSBWYWx1ZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJCb3JkZXJlZENvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkNlbGxJbnRlcmlvclwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkNlbGxFbmFibGVkXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57dGhpcy5DbGlja2VkKCl9KTtcclxuXHJcbiAgICAgICAgdGhpcy5WaWV3VHlwZSA9IENlbGxWaWV3VHlwZXMudW5vcGVuZWQ7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuVmlld1R5cGUgPSBDZWxsVmlld1R5cGVzLnVub3BlbmVkO1xyXG4gICAgICAgIHRoaXMuRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5WaWV3VHlwZSA9PSBDZWxsVmlld1R5cGVzLm9wZW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuVmlld1R5cGUgPSBDZWxsVmlld1R5cGVzLm9wZW5lZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlcGxhY2UoXCJCb3JkZXJlZENvbnRhaW5lclwiLCBcIk5vbkJvcmRlcmVkQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuRGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFbmFibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJDZWxsRW5hYmxlZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiQ2VsbEVuYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLkVuYWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERpc2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIkNlbGxFbmFibGVkXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJDZWxsRW5hYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuRGlzYWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbXBvbmVudCA9ICgpID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdDZWxsQ29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDbGlja2FibGUge1xyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IEFycmF5PCgpID0+IHt9PigpO1xyXG4gICAgICAgIHRoaXMuRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBGdW5jdGlvbiB3aGljaCByZW1vdmVzIGdpdmVuIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQWRkT25DbGlja0xpc3RlbmVyID0gKGZ1bmM6ICgpPT52b2lkKSA9PntcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7ZGVsZXRlIHRoaXMubGlzdGVuZXJzW3RoaXMubGlzdGVuZXJzLmluZGV4T2YoZnVuYyldfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLkVuYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRW5hYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERpc2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5FbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcbmltcG9ydCBDZWxsIGZyb20gJy4vY29tcG9uZW50cy9DZWxsJztcbmltcG9ydCBHYW1lLCB7UG9zaXRpb259IGZyb20gJy4vbG9naWMvR2FtZSc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSh7eDogMTAsIHk6IDEwfSwgMjApO1xuZ2FtZS5PcGVuKG5ldyBQb3NpdGlvbig1LCA1KSk7XG5jb25zdCBjID0gbmV3IENlbGwoNSk7XG5jLkFkZE9uQ2xpY2tMaXN0ZW5lcigoKT0+e2NvbnNvbGUubG9nKFwiY2xpY2tcIik7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYy5HZXRDb21wb25lbnQoKSk7XG4iLCJcclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9ue1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBFcXVhbHMgPSAob3RoZXI6IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PSBvdGhlci54ICYmIHRoaXMueSA9PSBvdGhlci55O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xyXG4gICAgcHJpdmF0ZSBzaXplOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xyXG4gICAgcHJpdmF0ZSBudW1iZXJPZkJvbWJzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZpcnN0Q2xpY2s6IGJvb2xlYW47XHJcblxyXG4gICAgLypcclxuICAgICAqIE1lYW5pbmcgb2YgbnVtYmVycyBpbnNpZGUgYm9hcmQuXHJcbiAgICAgKiA8MCwgOD4gLSB1bm9wZW5lZCBjZWxsLCBudW1iZXIgb2YgbmVpZ2hib3IgYm9tYnNcclxuICAgICAqIDwtOSwgLTE+IC0gb3BlbmVkIGNlbGwsIGJpdHdpc2Ugbm90IG51bWJlciBvZiBuZWlnaGJvciBib21ic1xyXG4gICAgICogOSAtIHVub3BlbmVkIGJvbWJcclxuICAgICAqIC0xMCAtIG9wZW5lZCBib21iXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYm9hcmQ6IG51bWJlcltdO1xyXG4gICAgcHJpdmF0ZSBib21iSW5kZXhlczogbnVtYmVyW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0sIG51bWJlck9mQm9tYnM6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLm51bWJlck9mQm9tYnMgPSBudW1iZXJPZkJvbWJzO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDbGljayA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBCb2FyZEluZGV4T2YgPSAocG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLngrcG9zaXRpb24ueSoodGhpcy5zaXplLngrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJc0luc3NpZGUgPSAocG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnggPj0gMCAmJiBwb3NpdGlvbi54IDwgdGhpcy5zaXplLnggJiYgcG9zaXRpb24ueSA+PSAwICYmIHBvc2l0aW9uLnkgPCB0aGlzLnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIElzVW5PcGVuZWQgPSAocG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pXSA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSXNCb21iID0gKHBvc2l0aW9uOiBQb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3RoaXMuQm9hcmRJbmRleE9mKHBvc2l0aW9uKV0gPT0gOTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldFZhbHVlID0gKHBvc2l0aW9uOiBQb3NpdGlvbiwgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbdGhpcy5Cb2FyZEluZGV4T2YocG9zaXRpb24pXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0TWF0cml4ID0gKHBvc2l0aW9uOiBQb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBcnJheTxQb3NpdGlvbj4oKTtcclxuICAgICAgICBmb3IodmFyIGkgPSBwb3NpdGlvbi54LTE7IGkgPD0gcG9zaXRpb24ueCArMTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gcG9zaXRpb24ueS0xOyBqIDw9IHBvc2l0aW9uLnkgKzE7IGorKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5laWdoYm9yUG9zaXRpb24gPSBuZXcgUG9zaXRpb24oaSwgaik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLklzSW5zc2lkZSggbmVpZ2hib3JQb3NpdGlvbiApKXtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChuZWlnaGJvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0TmVpZ2hib3JQb3NpdGlvbnMgPSAocG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5HZXRNYXRyaXgocG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gb3V0cHV0LmluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0VW5vcGVuZWROZWlnaGJvclBvc2l0aW9uID0gKHBvc2l0aW9uOiBQb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBcnJheTxQb3NpdGlvbj4oKTtcclxuICAgICAgICB0aGlzLkdldE5laWdoYm9yUG9zaXRpb25zKHBvc2l0aW9uKS5mb3JFYWNoKG5laWdoYm9yUG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLklzVW5PcGVuZWQobmVpZ2hib3JQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG5laWdoYm9yUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldE51bWJlck9mQWRqYWNlbnRCb21icyA9IChwb3NpdGlvbjogUG9zaXRpb24pID0+e1xyXG4gICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuR2V0TmVpZ2hib3JQb3NpdGlvbnMocG9zaXRpb24pLmZvckVhY2gobmVpZ2hib3JQb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuSXNCb21iKG5laWdoYm9yUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9wZW4gPSAocG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5maXJzdENsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZU1hcChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPIC0gY2VsbCBvcGVuaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZW5lcmF0ZU1hcCA9IChmaXJzdENsaWNrUG9zaXRpb246IFBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZWRJbmRleGVzID0gdGhpcy5HZXRNYXRyaXgoZmlyc3RDbGlja1Bvc2l0aW9uKS5tYXAodGhpcy5Cb2FyZEluZGV4T2YpXHJcbiAgICAgICAgdGhpcy5QbGFjZUJvbWJzKGV4Y2x1ZGVkSW5kZXhlcyk7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVOZWlnaGJvckJvbWJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQbGFjZUJvbWJzID0gKGV4Y2x1ZGVkSW5kZXhlczogbnVtYmVyW10pID0+IHtcclxuICAgICAgICB0aGlzLmJvbWJJbmRleGVzID0gbmV3IEFycmF5PG51bWJlcj4odGhpcy5udW1iZXJPZkJvbWJzKTtcclxuICAgICAgICBjb25zdCBpbmRleGVzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB2YXIgaW5kZXhNYXggPSB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55IC0gMTtcclxuICAgICAgICBmb3IodmFyIGkgPTA7IGkgPD0gaW5kZXhNYXg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKCFleGNsdWRlZEluZGV4ZXMuaW5jbHVkZXMoaSkpe1xyXG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSh0aGlzLmJvbWJJbmRleGVzLmxlbmd0aCA8IHRoaXMubnVtYmVyT2ZCb21icyl7XHJcbiAgICAgICAgICAgIHZhciByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGluZGV4TWF4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcmFuZG9tSW5kZXhdID0gOTtcclxuICAgICAgICAgICAgdGhpcy5ib21iSW5kZXhlcy5wdXNoKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG1wID0gaW5kZXhlc1tyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGluZGV4ZXNbcmFuZG9tSW5kZXhdID0gaW5kZXhlc1tpbmRleE1heF07XHJcbiAgICAgICAgICAgIGluZGV4ZXNbaW5kZXhNYXhdID0gdG1wO1xyXG5cclxuICAgICAgICAgICAgaW5kZXhNYXggLT0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQ2FsY3VsYXRlTmVpZ2hib3JCb21icyA9ICgpID0+IHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplLng7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IoIHZhciBqID0wOyBqIDwgdGhpcy5zaXplLnk7IGkrKyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKGksIGopO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuSXNCb21iKHBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRWYWx1ZShwb3NpdGlvbiwgdGhpcy5HZXROdW1iZXJPZkFkamFjZW50Qm9tYnMocG9zaXRpb24pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==