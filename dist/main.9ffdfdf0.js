// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"jscripts/components/cards/attackCardClasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strike = exports.basicAttackCardClass = exports.bash = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basicAttackCardClass = /*#__PURE__*/function () {
  function basicAttackCardClass(damage, energyCost) {
    _classCallCheck(this, basicAttackCardClass);

    this.damage = damage;
    this.energyCost = energyCost;
    this.target = "enemy";
    this.type = "attack";
  }

  _createClass(basicAttackCardClass, [{
    key: "play",
    value: function play() {
      console.log(this.name, " got played");
    }
  }]);

  return basicAttackCardClass;
}();

exports.basicAttackCardClass = basicAttackCardClass;

_defineProperty(basicAttackCardClass, "generatedCardType", "attack");

var strike = /*#__PURE__*/function (_basicAttackCardClass) {
  _inherits(strike, _basicAttackCardClass);

  var _super = _createSuper(strike);

  function strike(damage, energyCost) {
    var _this;

    _classCallCheck(this, strike);

    _this = _super.call(this, 7, 1);
    _this.name = "Strike";
    return _this;
  }

  return _createClass(strike);
}(basicAttackCardClass);

exports.strike = strike;

var bash = /*#__PURE__*/function (_basicAttackCardClass2) {
  _inherits(bash, _basicAttackCardClass2);

  var _super2 = _createSuper(bash);

  function bash(damage, energyCost) {
    var _this2;

    _classCallCheck(this, bash);

    _this2 = _super2.call(this, 10, 2);
    _this2.name = "Bash";
    return _this2;
  }

  _createClass(bash, [{
    key: "play",
    value: function play() {
      console.log("".concat(this.name, " attacked for ").concat(this.damage, " "));
    }
  }]);

  return bash;
}(basicAttackCardClass); // export class card extends basicAttackCardClass{
//   constructor(damage,energyCost){
//     super(1 , 1) 
//     this.name = ""
//   }
//   play(){
//     console.log(`${this.name} attacked for ${this.damage}`) 
//   }
// }


exports.bash = bash;
},{}],"jscripts/components/cards/skillCardClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defend = exports.card = exports.basicSkillCardClass = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basicSkillCardClass = /*#__PURE__*/function () {
  function basicSkillCardClass(energyCost) {
    _classCallCheck(this, basicSkillCardClass);

    this.energyCost = energyCost;
    this.target = "player";
    this.type = "skill";
  }

  _createClass(basicSkillCardClass, [{
    key: "play",
    value: function play() {
      console.log(this.name, " got played");
    }
  }]);

  return basicSkillCardClass;
}();

exports.basicSkillCardClass = basicSkillCardClass;

_defineProperty(basicSkillCardClass, "generatedCardType", "skill");

var defend = /*#__PURE__*/function (_basicSkillCardClass) {
  _inherits(defend, _basicSkillCardClass);

  var _super = _createSuper(defend);

  function defend(energyCost) {
    var _this;

    _classCallCheck(this, defend);

    _this = _super.call(this, 1);
    _this.name = "Defend";
    return _this;
  }

  _createClass(defend, [{
    key: "play",
    value: function play() {
      console.log("".concat(this.name, " add 5 block"));
    }
  }]);

  return defend;
}(basicSkillCardClass);

exports.defend = defend;

var card = /*#__PURE__*/function (_basicSkillCardClass2) {
  _inherits(card, _basicSkillCardClass2);

  var _super2 = _createSuper(card);

  function card(energyCost) {
    var _this2;

    _classCallCheck(this, card);

    _this2.energyCost = energyCost;
    _this2.name = "";
    return _possibleConstructorReturn(_this2);
  }

  _createClass(card, [{
    key: "play",
    value: function play() {
      console.log("".concat(this.name));
    }
  }]);

  return card;
}(basicSkillCardClass);

exports.card = card;
},{}],"jscripts/components/cards/powerCardClasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicPowerCardClass = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basicPowerCardClass = /*#__PURE__*/function () {
  function basicPowerCardClass(energyCost) {
    _classCallCheck(this, basicPowerCardClass);

    this.energyCost = energyCost;
    this.target = "player";
    this.type = "power";
  }

  _createClass(basicPowerCardClass, [{
    key: "play",
    value: function play() {
      console.log(this.name, " got played");
    }
  }]);

  return basicPowerCardClass;
}();

exports.basicPowerCardClass = basicPowerCardClass;

_defineProperty(basicPowerCardClass, "generatedCardType", "power");
},{}],"jscripts/components/cards/01cardsManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillCardClasses = exports.powerCardClasses = exports.playerStartingDeck = exports.playerHand = exports.drawPile = exports.discardPile = exports.attackCardClasses = void 0;

var attackCardClasses = _interopRequireWildcard(require("./attackCardClasses.js"));

exports.attackCardClasses = attackCardClasses;

var skillCardClasses = _interopRequireWildcard(require("./skillCardClass.js"));

exports.skillCardClasses = skillCardClasses;

var powerCardClasses = _interopRequireWildcard(require("./powerCardClasses.js"));

exports.powerCardClasses = powerCardClasses;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var drawPile = [];
exports.drawPile = drawPile;
var discardPile = [];
exports.discardPile = discardPile;
var playerHand = [];
exports.playerHand = playerHand;
var playerStartingDeck = [new attackCardClasses.strike(), new attackCardClasses.strike(), new attackCardClasses.strike(), new skillCardClasses.defend(), new skillCardClasses.defend(), new skillCardClasses.defend(), new attackCardClasses.bash()];
exports.playerStartingDeck = playerStartingDeck;
},{"./attackCardClasses.js":"jscripts/components/cards/attackCardClasses.js","./skillCardClass.js":"jscripts/components/cards/skillCardClass.js","./powerCardClasses.js":"jscripts/components/cards/powerCardClasses.js"}],"jscripts/components/player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.player = void 0;

var _cardsManager = require("./cards/01cardsManager.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var playerClass = /*#__PURE__*/function () {
  function playerClass(hp, deck, relics) {
    _classCallCheck(this, playerClass);

    this.hp = hp;
    this.block = 0;
    this.energy = 3;
    this.hand = [];
    this.drawPile = [];
    this.discardPile = [];
    this.buffs = {};
    this.debuffs = {};
    this.deck = deck;
    this.relics = relics;
    this.model = document.querySelector(".player");
  }

  _createClass(playerClass, [{
    key: "attack",
    value: function attack() {
      console.log("player attacked");
    }
  }]);

  return playerClass;
}();

var player = new playerClass(73, _cardsManager.playerStartingDeck, {});
exports.player = player;
},{"./cards/01cardsManager.js":"jscripts/components/cards/01cardsManager.js"}],"jscripts/components/functions/battleFunctions.js":[function(require,module,exports) {

},{}],"jscripts/components/functions/cardFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineCardType = determineCardType;
exports.resetDrawPile = resetDrawPile;
exports.shuffle = shuffle;
exports.shuffleDrawPile = shuffleDrawPile;

var _player = require("../player.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function resetDrawPile() {
  var shuffled_deck = shuffle(_player.player.deck);
  _player.player.discardPile = [];
  _player.player.playerHand = [];
  _player.player.drawPile = shuffled_deck;
}

function shuffle(array) {
  var our_array = Array.from(array);
  var shuffled_array = [];

  for (var i = 0; i < array.length; i++) {
    var random_index = Math.floor(Math.random() * our_array.length);
    shuffled_array.push.apply(shuffled_array, _toConsumableArray(our_array.splice(random_index, 1)));
  }

  return shuffled_array;
}

function determineCardType(card) {
  return card.constructor.generatedCardType;
}

function shuffleDrawPile() {
  // asuming drawPile has 0 cards
  var shuffled_discard = shuffle(_player.player.discardPile);
  _player.player.drawPile = _toConsumableArray(shuffled_discard);
}
},{"../player.js":"jscripts/components/player.js"}],"jscripts/components/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domInit = domInit;
exports.playerModel = exports.handElement = exports.enemy_box8 = exports.enemy_box7 = exports.enemy_box6 = exports.enemy_box5 = exports.enemy_box4 = exports.enemy_box3 = exports.enemy_box2 = exports.enemy_box1 = void 0;
var playerModel = document.querySelector(".player");
exports.playerModel = playerModel;
var handElement = document.querySelector(".hand"); // all enemy boxes (check side it goes reall long this way => )

exports.handElement = handElement;
var enemy_box1 = document.querySelector(".enemy-grid").children[0];
exports.enemy_box1 = enemy_box1;
var enemy_box2 = document.querySelector(".enemy-grid").children[1];
exports.enemy_box2 = enemy_box2;
var enemy_box3 = document.querySelector(".enemy-grid").children[2];
exports.enemy_box3 = enemy_box3;
var enemy_box4 = document.querySelector(".enemy-grid").children[3];
exports.enemy_box4 = enemy_box4;
var enemy_box5 = document.querySelector(".enemy-grid").children[4];
exports.enemy_box5 = enemy_box5;
var enemy_box6 = document.querySelector(".enemy-grid").children[5];
exports.enemy_box6 = enemy_box6;
var enemy_box7 = document.querySelector(".enemy-grid").children[6];
exports.enemy_box7 = enemy_box7;
var enemy_box8 = document.querySelector(".enemy-grid").children[7];
exports.enemy_box8 = enemy_box8;

function domInit() {}
},{}],"jscripts/components/functions/domFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deSelectAllCards = deSelectAllCards;
exports.determineCardType = determineCardType;
exports.generateCardDomElement = generateCardDomElement;
exports.linkElementtToEntity = linkElementtToEntity;
exports.renderCardIntoHand = renderCardIntoHand;
exports.selectCard = selectCard;
exports.selectCardOnClick = selectCardOnClick;
exports.selectedCard = void 0;
exports.visualyRenderCard = visualyRenderCard;

var _dom = require("../dom.js");

var selectedCard;
exports.selectedCard = selectedCard;

function generateCardDomElement(card) {
  var cardElement = document.createElement("div");
  var cardType = determineCardType(card);
  var cardName = card.name.replaceAll(" ", "");
  cardElement.classList.add("card");
  cardElement.classList.add(cardType);
  cardElement.classList.add(cardName);
  card.element = cardElement;
  cardElement.cardObject = card;
  selectCardOnClick(cardElement);
  return cardElement;
}

function determineCardType(card) {
  return card.constructor.generatedCardType;
}

function renderCardIntoHand(card) {
  var cardElement = card.element;

  _dom.handElement.append(cardElement);
}

function selectCardOnClick(cardElement) {
  var cardObject = cardElement.cardObject;
  cardElement.addEventListener("pointerdown", function (e) {
    selectCard(cardElement);
    cardObject.play();
  });
}

function selectCard(cardElement) {
  deSelectAllCards();
  cardElement.classList.add("selectedCard");
  exports.selectedCard = selectedCard = cardElement;
}

function deSelectAllCards() {
  var allCards = document.querySelectorAll(".card");
  allCards.forEach(function (card) {
    card.classList.remove("selectedCard");
  });
  exports.selectedCard = selectedCard = null;
}

function linkElementtToEntity(Element, entity) {
  Element.entityObject = entity;
}

function visualyRenderCard(card) {
  _dom.handElement.append(card.element);
}
},{"../dom.js":"jscripts/components/dom.js"}],"jscripts/components/functions/playerFuctions.js":[function(require,module,exports) {

},{}],"jscripts/components/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domfunctions = exports.cardfunctions = exports.battlefunctions = void 0;
exports.drawCardsIntoHand = drawCardsIntoHand;
exports.generateAllCardsDomElement = generateAllCardsDomElement;
exports.render = exports.playerfunctions = void 0;

var _player = require("./player.js");

var battlefunctions = _interopRequireWildcard(require("./functions/battleFunctions.js"));

exports.battlefunctions = battlefunctions;

var cardfunctions = _interopRequireWildcard(require("./functions/cardFunctions.js"));

exports.cardfunctions = cardfunctions;

var domfunctions = _interopRequireWildcard(require("./functions/domFunctions.js"));

exports.domfunctions = domfunctions;

var playerfunctions = _interopRequireWildcard(require("./functions/playerFuctions.js"));

exports.playerfunctions = playerfunctions;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var render = function () {
  var previous_hand = [];
  return function () {
    var hand = _player.player.hand;
    var discarded_card_array = previous_hand.filter(function (x) {
      return !hand.includes(x);
    });
    var drawn_card_array = hand.filter(function (x) {
      return !previous_hand.includes(x);
    });
    previous_hand = _player.player.hand;
    drawn_card_array.forEach(function (card) {
      domfunctions.visualyRenderCard(card);
    });
  };
}();

exports.render = render;

function drawCardsIntoHand(draw) {
  var _player$buffs$draw;

  var bonusDrawBuff = (_player$buffs$draw = _player.player.buffs.draw) !== null && _player$buffs$draw !== void 0 ? _player$buffs$draw : 0;
  var playerDraw = 5;
  var totalDraw = draw !== null && draw !== void 0 ? draw : playerDraw + bonusDrawBuff;

  for (var i = 1; i <= totalDraw; i++) {
    if (_player.player.drawPile.length == 0) {
      cardfunctions.shuffleDrawPile();
    }

    var drawnCard = _player.player.drawPile.pop();

    _player.player.hand.push(drawnCard);
  }

  render(); // this will throw an error but its here to remind you to add a way to render cards
}

function generateAllCardsDomElement() {
  _player.player.deck.forEach(function (card) {
    domfunctions.generateCardDomElement(card);
  });
}
},{"./player.js":"jscripts/components/player.js","./functions/battleFunctions.js":"jscripts/components/functions/battleFunctions.js","./functions/cardFunctions.js":"jscripts/components/functions/cardFunctions.js","./functions/domFunctions.js":"jscripts/components/functions/domFunctions.js","./functions/playerFuctions.js":"jscripts/components/functions/playerFuctions.js"}],"jscripts/logics/battle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.battleInit = battleInit;

var _player = require("../components/player.js");

var f = _interopRequireWildcard(require("../components/functions.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function battleInit() {
  f.cardfunctions.resetDrawPile();
  f.generateAllCardsDomElement();
  f.drawCardsIntoHand();
}
},{"../components/player.js":"jscripts/components/player.js","../components/functions.js":"jscripts/components/functions.js"}],"jscripts/main.js":[function(require,module,exports) {
"use strict";

var battle = _interopRequireWildcard(require("./logics/battle.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

battle.battleInit(); // will throw error bcause not importing and no render function
// console.log(cardsManager.playerHand);
// console.log(cardsManager.drawPile);
// console.log(cardsManager.playerHand[0].element.cardObject);
},{"./logics/battle.js":"jscripts/logics/battle.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62925" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","jscripts/main.js"], null)
//# sourceMappingURL=/main.9ffdfdf0.js.map