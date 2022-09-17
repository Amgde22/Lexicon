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
})({"dlJM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark_strike = exports.battle_won_div = exports.basic_slash = exports.attack_icon = exports.anim = void 0;
exports.domInit = domInit;
exports.shield_icon = exports.restOfPage = exports.playerModel = exports.playerMaxEnergyElement = exports.playerEnergyElement = exports.handElement = exports.entityScan = exports.enemy_box8 = exports.enemy_box7 = exports.enemy_box6 = exports.enemy_box5 = exports.enemy_box4 = exports.enemy_box3 = exports.enemy_box2 = exports.enemyGrid = exports.enemyBoxes = exports.endTurnBtn = void 0;
var restOfPage = document.querySelector(".rest-of-page");
exports.restOfPage = restOfPage;
var enemyGrid = document.querySelector(".enemy-grid");
exports.enemyGrid = enemyGrid;
var endTurnBtn = document.querySelector(".endTurnBtn");
exports.endTurnBtn = endTurnBtn;
var battle_won_div = document.querySelector(".battle-won-div");
exports.battle_won_div = battle_won_div;
var playerModel = document.querySelector(".player");
exports.playerModel = playerModel;
var handElement = document.querySelector(".hand");
exports.handElement = handElement;
var playerEnergyElement = document.querySelector(".playerEnergy");
exports.playerEnergyElement = playerEnergyElement;
var playerMaxEnergyElement = document.querySelector(".playerMaxEnergy");
exports.playerMaxEnergyElement = playerMaxEnergyElement;
var entityScan = document.querySelector(".entityScan"); // all enemy boxes (check side it goes reall long this way => )

exports.entityScan = entityScan;
var enemy_box1 = document.querySelector(".enemy-grid").children[0];
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
var enemyBoxes = [enemy_box1, enemy_box2, enemy_box3, enemy_box4, enemy_box5, enemy_box6, enemy_box7, enemy_box8]; //animation

exports.enemyBoxes = enemyBoxes;
var dark_strike = document.querySelector("#dark_strike");
exports.dark_strike = dark_strike;
var basic_slash = document.querySelector("#basic_slash");
exports.basic_slash = basic_slash;
var anim = document.querySelector("#anim"); // icons

exports.anim = anim;
var attack_icon = document.querySelector(".icon.attack");
exports.attack_icon = attack_icon;
var shield_icon = document.querySelector(".icon.deffend");
exports.shield_icon = shield_icon;

function domInit() {}
},{}],"drfY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render_basic_attack_icon = render_basic_attack_icon;
exports.render_basic_deffence_icon = render_basic_deffence_icon;

var _dom = require("../dom.js");

function render_basic_attack_icon(move) {
  var action_icon = move.entity.actionIcon;

  var icon = _dom.attack_icon.cloneNode(true);

  icon.classList.remove("hidden");
  action_icon.innerText = "";
  action_icon.append(icon, move.damage);
}

function render_basic_deffence_icon(move) {
  var action_icon = move.entity.actionIcon;

  var icon = _dom.shield_icon.cloneNode(true);

  icon.classList.remove("hidden");
  action_icon.innerText = "";
  action_icon.append(icon, move.block);
}
},{"../dom.js":"dlJM"}],"h5cb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic_deffend = exports.basic_attack_friendly = exports.Op = void 0;

var _functions = require("../functions.js");

var entityIcons = _interopRequireWildcard(require("./entityIcons.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var basic_attack_friendly = /*#__PURE__*/function () {
  function basic_attack_friendly(enemy, damage) {
    _classCallCheck(this, basic_attack_friendly);

    this.entity = enemy;
    this.damage = damage;
    this.icon = "attack"; // this.damageCounter = null "formula"
  }

  _createClass(basic_attack_friendly, [{
    key: "exe",
    value: function exe() {
      (0, _functions.attackFriendly)(this.entity, this);
    }
  }, {
    key: "render",
    value: function render() {
      entityIcons.render_basic_attack_icon(this);
    }
  }]);

  return basic_attack_friendly;
}();

exports.basic_attack_friendly = basic_attack_friendly;

var basic_deffend = /*#__PURE__*/function () {
  function basic_deffend(entity, block) {
    _classCallCheck(this, basic_deffend);

    this.entity = entity;
    this.block = block;
    this.icon = "shield";
  }

  _createClass(basic_deffend, [{
    key: "exe",
    value: function exe() {
      (0, _functions.gainBlock)(this.entity, this.block);
    }
  }, {
    key: "render",
    value: function render() {
      entityIcons.render_basic_deffence_icon(this);
    }
  }]);

  return basic_deffend;
}();

exports.basic_deffend = basic_deffend;

var Op = /*#__PURE__*/function () {
  function Op(enemy, damage) {
    _classCallCheck(this, Op);

    this.entity = enemy;
    this.damage = damage;
    this.icon = "attack", this.damageCounter = _functions.damageFormulas.opDamage;
  }

  _createClass(Op, [{
    key: "exe",
    value: function exe() {
      (0, _functions.attackFriendly)(this.entity, this);
    }
  }, {
    key: "render",
    value: function render() {
      entityIcons.render_basic_attack_icon(this);
    }
  }]);

  return Op;
}();

exports.Op = Op;
},{"../functions.js":"Q9tZ","./entityIcons.js":"drfY"}],"uD9C":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.g = exports.bruv = exports.bat = exports.basicEnemy = void 0;
exports.setUpEffectGrid = setUpEffectGrid;
exports.setUpHealthBar = setUpHealthBar;
exports.tiger = void 0;

var _functions = require("../functions.js");

var entityMoves = _interopRequireWildcard(require("./entityMoves.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var basicEnemy = /*#__PURE__*/function () {
  function basicEnemy(name, health) {
    var initBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, basicEnemy);

    this.name = name;
    this.maxHealth = health;
    this.health = health;
    this.block = initBlock;
    this.turn = 0;
    this.buffs = {};
    this.debuffs = {};
    this.str = 0;
    this.dex = 0;
    this.atkMod = 1;
    this.defMod = 1;
    this.dealDamageEffects = {};
    this.recieveDamageEffects = {};
    this.gainBlockEffects = {};
    this.clearBlockEffects = {};
    this.turnEffects = {};
    this.delay = 500;
    this.deathDelay = 700;
    generateEnemyElement(this);
  }

  _createClass(basicEnemy, [{
    key: "die",
    value: function die(entity) {
      if (this.dead) {
        return;
      }

      (0, _functions.resetEntity)(this);
      (0, _functions.killEntityModal)(this);
      this.dead = true;
      delete this;
    }
  }, {
    key: "move",
    value: function move() {
      this.moves[this.turn].exe();
      this.turn++;

      if (this.turn >= this.moves.length) {
        this.turn = 0;
      }
    }
  }, {
    key: "apply",
    value: function apply(effectObj) {
      effectObj.apply(this);
    }
  }, {
    key: "remove",
    value: function remove(effectName) {
      var _this$buffs$effectNam, _this$debuffs$effectN;

      (_this$buffs$effectNam = this.buffs[effectName]) === null || _this$buffs$effectNam === void 0 ? void 0 : _this$buffs$effectNam.remove();
      (_this$debuffs$effectN = this.debuffs[effectName]) === null || _this$debuffs$effectN === void 0 ? void 0 : _this$debuffs$effectN.remove();
    }
  }]);

  return basicEnemy;
}();

exports.basicEnemy = basicEnemy;

var bat = /*#__PURE__*/function (_basicEnemy) {
  _inherits(bat, _basicEnemy);

  var _super = _createSuper(bat);

  function bat() {
    var _this;

    _classCallCheck(this, bat);

    _this = _super.call(this, "bat", 11);

    var enemy = _assertThisInitialized(_this);

    _this.moves = [new entityMoves.basic_deffend(enemy, 12), new entityMoves.basic_attack_friendly(enemy, 5)];
    return _this;
  }

  return _createClass(bat);
}(basicEnemy);

exports.bat = bat;

var tiger = /*#__PURE__*/function (_basicEnemy2) {
  _inherits(tiger, _basicEnemy2);

  var _super2 = _createSuper(tiger);

  function tiger() {
    var _this2;

    _classCallCheck(this, tiger);

    _this2 = _super2.call(this, "tiger", 63);

    var enemy = _assertThisInitialized(_this2);

    _this2.moves = [new entityMoves.basic_attack_friendly(enemy, 50), new entityMoves.basic_attack_friendly(enemy, 20)];
    return _this2;
  }

  return _createClass(tiger);
}(basicEnemy);

exports.tiger = tiger;

var bruv = /*#__PURE__*/function (_basicEnemy3) {
  _inherits(bruv, _basicEnemy3);

  var _super3 = _createSuper(bruv);

  function bruv() {
    var _this3;

    _classCallCheck(this, bruv);

    _this3 = _super3.call(this, "bruv", 36);

    var enemy = _assertThisInitialized(_this3);

    _this3.moves = [{
      exe: function exe() {},
      icon: "",
      render: function render() {}
    }];
    return _this3;
  }

  return _createClass(bruv);
}(basicEnemy);

exports.bruv = bruv;

var g = /*#__PURE__*/function (_basicEnemy4) {
  _inherits(g, _basicEnemy4);

  var _super4 = _createSuper(g);

  function g() {
    var _this4;

    _classCallCheck(this, g);

    _this4 = _super4.call(this, "", 2);

    var enemy = _assertThisInitialized(_this4);

    _this4.moves = [{
      exe: function exe() {},
      icon: ""
    }];
    return _this4;
  }

  return _createClass(g);
}(basicEnemy); // modal > { grapgix + selector + healthBar }


exports.g = g;

function generateEnemyElement(enemy) {
  setUpModal(enemy);
  setUpHealthBar(enemy);
  setUpSelector(enemy);
  setUpActionIcon(enemy);
  setUpEffectGrid(enemy);
}

function setUpModal(enemy) {
  var enemyModal = document.createElement("div");
  enemyModal.entity = enemy;
  enemy.modal = enemyModal;

  enemyModal.scan = function () {
    (0, _functions.renderEntityScan)(enemy);
  };

  enemyModal.classList.add("entity");
  enemyModal.classList.add("enemy");
  enemyModal.classList.add(enemy.name);
}

function setUpSelector(enemy) {
  var enemySelector = document.createElement("div");
  enemySelector.classList.add("selector");
  enemySelector.classList.add("enemySelector");
  enemy.modal.append(enemySelector);
  enemy.selector = enemySelector;
}

function setUpHealthBar(enemy) {
  var enemyHealthBar = document.createElement("div");
  enemyHealthBar.classList.add("healthBar");
  var healthDisplay = document.createElement("div");
  healthDisplay.classList.add("healthDisplay");
  var healthDrag = document.createElement("div");
  healthDrag.classList.add("healthDrag");
  var healthCount = document.createElement("span");
  healthCount.classList.add("healthCount");
  healthCount.append(enemy.health);
  var maxHealthCount = document.createElement("span");
  maxHealthCount.classList.add("maxHealthCount");
  maxHealthCount.append(enemy.maxHealth);
  var blockBar = document.createElement("div");
  blockBar.classList.add("blockBar");
  var blockCount = document.createElement("span");
  blockCount.classList.add("blockCount");
  blockCount.innerText = 0;
  blockBar.append(blockCount);
  enemyHealthBar.style.width = enemy.maxHealth + 40 + "px";
  enemyHealthBar.append(healthDrag, healthDisplay);
  enemyHealthBar.append(blockBar);
  enemyHealthBar.append(healthCount, " / ", maxHealthCount);
  enemy.modal.append(enemyHealthBar);
  enemy.healthBar = enemyHealthBar; // for easy access
}

function setUpActionIcon(entity) {
  var actionIcon = document.createElement("div");
  actionIcon.classList.add("actionIcon");
  entity.modal.append(actionIcon);
  entity.actionIcon = actionIcon;
}

function setUpEffectGrid(entity) {
  var effectGrid = document.createElement("div");
  effectGrid.classList.add("effectGrid"); // for (let i = 0; i < 5 ;i++) {
  //   const d = document.createElement("div")
  //   d.classList.add("effectIcon")
  //   effectGrid.append(d)
  // }

  entity.modal.append(effectGrid);
  entity.effectGrid = effectGrid;
}
/*
each enemy has a list of moves 
when player turn ends play the next move for each enemy
only when an enemy's move finishes 
  (he chooses how much time) , should we advance in the
  moves list




*/
},{"../functions.js":"Q9tZ","./entityMoves.js":"h5cb"}],"xoHa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _functions = require("./functions.js");

var pubsub = function () {
  var turn = 0;
  var events = {
    "turnEnded": [],
    "turnStarted": []
  };

  function on(event, obj) {
    events[event] = events[event] || [];
    events[event].push(obj);
  }

  function off(event, obj) {
    if (!(event in events)) {
      alert("trying to off event that doesn't exist");
      console.log(event, obj);
      return;
    }

    for (var i = 0; i < events[event].length; i++) {
      if (events[event][i] === obj) {
        events[event].splice(i, 1);
        break;
      }
    }
  }

  function emit(event, data) {
    events[event] = events[event] || [];
    Array.from(events[event]).forEach(function (evenObject) {
      evenObject === null || evenObject === void 0 ? void 0 : evenObject.effect(data);
    });
  }

  function turnStarted() {
    Array.from(events["turnStarted"]).forEach(function (evenObject) {
      evenObject === null || evenObject === void 0 ? void 0 : evenObject.effect(turn);
    });
    (0, _functions.defaultTurnStarted)();
    turn++;
    console.log("%c Turn%c:".concat(turn, " started"), "color:red;", "color:black;");
  }

  function turnEnded() {
    Array.from(events["turnEnded"]).forEach(function (evenObject) {
      evenObject === null || evenObject === void 0 ? void 0 : evenObject.effect(turn);
    });
    (0, _functions.defaultTurnEnded)();
  }

  function resetTurns() {
    turn = 0;
  }

  return {
    events: events,
    on: on,
    off: off,
    emit: emit,
    turnEnded: turnEnded,
    turnStarted: turnStarted,
    resetTurns: resetTurns
  };
}();

var _default = pubsub;
exports.default = _default;
},{"./functions.js":"Q9tZ"}],"GY4V":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicDamageFormula = basicDamageFormula;
exports.opDamage = opDamage;

function basicDamageFormula(recievingEntity, DealingEntity, initialDamage) {
  var finalDamage = (initialDamage + DealingEntity.str) * (DealingEntity.atkMod * recievingEntity.defMod);
  return Math.round(finalDamage);
}

function opDamage(recievingEntity, DealingEntity, initialDamage) {
  return 999;
}
},{}],"egtd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEntityDeath = checkEntityDeath;
exports.countDamage = countDamage;
exports.getRandomEnemyBoxes = getRandomEnemyBoxes;
exports.initEnemies = initEnemies;
exports.iterateDealDamageEffects = iterateDealDamageEffects;
exports.iterateEnergyEffects = iterateEnergyEffects;
exports.iterateGainBlockEffects = iterateGainBlockEffects;
exports.iterateRecieveDamageEffects = iterateRecieveDamageEffects;

var _dom = require("../dom.js");

var enemyClass = _interopRequireWildcard(require("../enemies/enemyClass.js"));

var _player = require("../player.js");

var _pubsub = _interopRequireDefault(require("../pubsub.js"));

var _damage_formulas = require("./damage_formulas.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// enemies
function initEnemies() {
  var randomEnemyBoxes = getRandomEnemyBoxes(3);
  var enemy1 = new enemyClass.bat();
  var enemy2 = new enemyClass.tiger();
  var enemy3 = new enemyClass.bruv();
  randomEnemyBoxes[0].append(enemy1.modal);
  randomEnemyBoxes[1].append(enemy2.modal);
  randomEnemyBoxes[2].append(enemy3.modal);
}

function getRandomEnemyBoxes(num) {
  var all_EnemyBoxes = Array.from(_dom.enemyBoxes);
  var random_Boxes = [];

  for (var i = 1; i <= num; i++) {
    var random_index = Math.floor(Math.random() * all_EnemyBoxes.length);
    random_Boxes.push.apply(random_Boxes, _toConsumableArray(all_EnemyBoxes.splice(random_index, 1)));
  }

  return random_Boxes;
} // /enemies
//damage


function countDamage(recievingEntity, DealingEntity, damageInfoObj) {
  if (damageInfoObj.counter) {
    return damageInfoObj.counter(recievingEntity, DealingEntity, damageInfoObj.damage);
  }

  return (0, _damage_formulas.basicDamageFormula)(recievingEntity, DealingEntity, damageInfoObj.damage);
}

function iterateDealDamageEffects(DealingEntity, damageObj) {
  for (var effect in DealingEntity.dealDamageEffects) {
    DealingEntity.dealDamageEffects[effect].listEffect(damageObj);
  }
}

function iterateRecieveDamageEffects(recievingEntity, damageObj) {
  for (var effect in recievingEntity.recieveDamageEffects) {
    recievingEntity.recieveDamageEffects[effect].listEffect(damageObj);
  }
}

function iterateGainBlockEffects(recievingEntity, block) {
  for (var effect in recievingEntity.gainBlockEffects) {
    recievingEntity.gainBlockEffects[effect].listEffect(block);
  }
}

function iterateEnergyEffects(energyObj) {
  for (var effect in _player.player.energyEffects) {
    _player.player.energyEffects[effect].listEffect(energyObj);
  }
} // /damage
// check


function checkEntityDeath(entity) {
  if (entity.health <= 0) {
    entity.die(entity);
  }
} // /check
},{"../dom.js":"dlJM","../enemies/enemyClass.js":"uD9C","../player.js":"hDDw","../pubsub.js":"xoHa","./damage_formulas.js":"GY4V"}],"G6vW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineCardType = determineCardType;
exports.locateCard = locateCard;
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
  clearDiscardPile();
  _player.player.drawPile = _toConsumableArray(shuffled_discard);
}

function clearDiscardPile() {
  _player.player.discardPile = [];
}
/* returns object */


function locateCard(card) {
  var index = _player.player.hand.findIndex(function (x) {
    return x === card;
  });

  var locatedCard;
  var location;

  if (index !== -1) {
    locatedCard = _player.player.hand[index];
    location = "hand";
  }

  if (index === -1) {
    index = _player.player.drawPile.findIndex(function (x) {
      return x === card;
    });
    locatedCard = _player.player.drawPile[index];
    location = "drawPile";
  }

  if (index === -1) {
    index = _player.player.discardPile.findIndex(function (x) {
      return x === card;
    });
    locatedCard = _player.player.discardPile[index];
    location = "discardPile";
  }

  if (index === -1) {
    index = _player.player.exhaustPile.findIndex(function (x) {
      return x === card;
    });
    locatedCard = _player.player.exhaustPile[index];
    location = "exhaustPile";
  }

  return {
    index: index,
    locatedCard: locatedCard,
    location: location
  };
}
},{"../player.js":"hDDw"}],"fqaM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkElement = checkElement;
exports.checkIfIncludesClass = checkIfIncludesClass;
exports.createCardDescription = createCardDescription;
exports.createCardIcon = createCardIcon;
exports.createEnergyElement = createEnergyElement;
exports.createNameElement = createNameElement;
exports.deSelectAllCards = deSelectAllCards;
exports.deSelectAllEntities = deSelectAllEntities;
exports.deSelectHandler = deSelectHandler;
exports.determineCardType = determineCardType;
exports.findEnemyBoxPosition = findEnemyBoxPosition;
exports.findNextFriendly = findNextFriendly;
exports.generateCardDomElement = generateCardDomElement;
exports.generateEffectEllement = generateEffectEllement;
exports.generateEntityScan = generateEntityScan;
exports.getEnemyBoxOfEntity = getEnemyBoxOfEntity;
exports.getEntityHealthModals = getEntityHealthModals;
exports.linkElementtToEntity = linkElementtToEntity;
exports.moveNextEnemyBoxOf = moveNextEnemyBoxOf;
exports.positionEntityScan = positionEntityScan;
exports.removeAllEntityScans = removeAllEntityScans;
exports.renderBlock = renderBlock;
exports.renderCardIntoHand = renderCardIntoHand;
exports.renderEntityAttackedAnimation = renderEntityAttackedAnimation;
exports.renderHealthBar = renderHealthBar;
exports.renderHealthCount = renderHealthCount;
exports.renderHealthD = renderHealthD;
exports.renderPlayerEnergy = renderPlayerEnergy;
exports.selectAllEnemies = selectAllEnemies;
exports.selectAllFriendlies = selectAllFriendlies;
exports.selectCard = selectCard;
exports.selectCardOnClick = selectCardOnClick;
exports.selectPlayer = selectPlayer;
exports.selectedCard = void 0;
exports.visualyRemoveCard = visualyRemoveCard;
exports.visualyRenderCard = visualyRenderCard;

var dom = _interopRequireWildcard(require("../dom.js"));

var _player = require("../player.js");

var _pubsub = _interopRequireDefault(require("../pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var selectedCard;
exports.selectedCard = selectedCard;

(function () {
  dom.restOfPage.addEventListener("pointerdown", function (e) {
    deSelectHandler(e);
  });
})(); // small renders


function generateCardDomElement(card) {
  var cardElement = document.createElement("div");
  var cardType = determineCardType(card);
  var cardName = card.name.replaceAll(" ", "");
  cardElement.classList.add("card", cardType, cardName);
  cardElement.setAttribute("tabindex", "0");
  var cardIcon = createCardIcon();
  cardElement.append(cardIcon);
  var nameHolder = document.querySelector(".nameHolder").cloneNode(true);
  nameHolder.classList.add("nameHolder");
  cardElement.append(nameHolder);
  var energyElement = createEnergyElement(card);
  cardElement.append(energyElement);
  var nameElement = createNameElement(card);
  cardElement.append(nameElement);
  var cardDescription = createCardDescription(card);
  cardElement.append(cardDescription !== null && cardDescription !== void 0 ? cardDescription : "description");
  card.element = cardElement;
  cardElement.cardObject = card;
  selectCardOnClick(cardElement);
}

function createEnergyElement(card) {
  var card_energy = card.energyCost;
  var card_energy_element = document.createElement("p");
  card_energy_element.classList.add("energyElement");
  card_energy_element.append(card_energy);
  return card_energy_element;
}

function createNameElement(card) {
  var name_element = document.createElement("p");
  name_element.classList.add("nameElement");
  name_element.append(card.name);
  return name_element;
}

function createCardIcon() {
  var card_icon = document.createElement("div");
  card_icon.classList.add("cardIcon");
  return card_icon;
}

function createCardDescription(card) {
  var _document$querySelect;

  var description_box = document.createElement("div");
  description_box.classList.add("descriptionBox");
  var card_discription = (_document$querySelect = document.querySelector(".description.".concat(card.name.toLowerCase().replaceAll(" ", "")))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.cloneNode(true);
  description_box.append(card_discription);
  return description_box;
}

function renderCardIntoHand(card) {
  var cardParent = document.createElement("div");
  cardParent.className = "cardParent";
  var cardElement = card.element;
  cardParent.append(cardElement);
  dom.handElement.append(cardParent);
}

function visualyRenderCard(card) {
  if (card.element == undefined) {
    generateCardDomElement(card);
  }

  renderCardIntoHand(card);
}

function visualyRemoveCard(card) {
  var cardParent = card.element.parentElement;
  card.element.remove();
  cardParent.addEventListener("animationend", removeelement);
  cardParent.classList.add("removing");
}

function removeelement(e) {
  e.target.remove();
}

function renderHealthBar(entity) {
  var healthInfo = getEntityHealthModals(entity);
  var healthBar = healthInfo.healthBar;
  healthBar.style.width = entity.maxHealth + 40 + "px";
}

function renderHealthCount(entity) {
  var healthInfo = getEntityHealthModals(entity);
  var healthCount = healthInfo.healthCount;
  var maxHealthCount = healthInfo.maxHealthCount;
  maxHealthCount.innerText = entity.maxHealth;
  healthCount.innerText = entity.health < 0 ? 0 : entity.health;
}

function renderHealthD(healthD, percent) {
  healthD.style.transform = "scaleX( max(0 ,".concat(percent, "))");
}

function renderBlock(entity) {
  var healthInfo = getEntityHealthModals(entity);
  var blockBar = healthInfo.blockBar;
  var blockCount = healthInfo.blockCount;

  if (entity.block <= 0) {
    blockBar.classList.toggle("show", false);
  } else {
    blockBar.classList.toggle("show", true);
    blockCount.innerText = entity.block;
  }
}

function renderPlayerEnergy() {
  dom.playerEnergyElement.innerText = _player.player.energy;
  dom.playerMaxEnergyElement.innerText = _player.player.maxEnergy;
}

function renderEntityAttackedAnimation(entity, damageObj) {
  var _damageObj$animation;

  var enemyBox;

  if (entity === _player.player) {
    enemyBox = entity.modal;
  } else {
    enemyBox = entity.modal.parentElement;
  }

  var animation = (_damageObj$animation = damageObj.animation) !== null && _damageObj$animation !== void 0 ? _damageObj$animation : dom.basic_slash;
  animation = animation.cloneNode(true);
  animation.classList.remove("hidden");
  var animation_duration = animation.getAttribute("data-duration");
  enemyBox.append(animation);
  setTimeout(function () {
    animation.remove();
  }, animation_duration);
}

function generateEffectEllement(entity, effect) {
  var effect_element_exists = entity.modal.querySelector(".effectIcon.".concat(effect.name));

  if (effect_element_exists) {
    return;
  }

  var effectElement = document.createElement("div");
  effectElement.classList.add("effectIcon", effect.name);
  var usesElement = document.createElement("div");
  usesElement.classList.add("effectUses");
  var durationElement = document.createElement("div");
  durationElement.classList.add("effectDuration");
  effectElement.append(durationElement, usesElement);
  entity.effectGrid.append(effectElement);
}

function generateEntityScan(entity) {
  var entityScan = dom.entityScan.cloneNode(true);

  for (var effect in entity.buffs) {
    var effectElement = document.querySelector(".effect_description.".concat(effect.name)).cloneNode(true);

    if (effectElement) {
      entityScan.append(effectElement);
    }
  }

  for (var _effect in entity.debuffs) {
    var _effectElement = document.querySelector(".effect_description.".concat(_effect)).cloneNode(true);

    if (_effectElement) {
      entityScan.querySelector(".scannedDebuffs").append(_effectElement);
    }
  }

  return entityScan;
}

function removeAllEntityScans() {
  var all_scans = document.querySelectorAll(".entityScan");
  all_scans.forEach(function (scan) {
    scan.remove();
  });
} // /small renders
// checks


function checkElement(thiselement, wantedElement) {
  return thiselement === wantedElement;
}

function checkIfIncludesClass(element, classToChack) {
  return Array.from(element.classList).includes(classToChack);
} // /checks
// selection


function deSelectHandler(e) {
  var _checkIfIncludesClass;

  var is_restOfPage = checkElement(e.target, dom.restOfPage);
  var is_enemyBox = (_checkIfIncludesClass = checkIfIncludesClass(e.target, "enemy-box")) !== null && _checkIfIncludesClass !== void 0 ? _checkIfIncludesClass : !checkIfIncludesClass(e.target.firstElementChild, "entity");
  var handElement = Array.from(e.target.classList).includes("");

  if (is_restOfPage || is_enemyBox) {
    deSelectAllCards();
  }
}

function selectCardOnClick(cardElement) {
  var cardObject = cardElement.cardObject;
  cardElement.addEventListener("pointerdown", function (e) {
    selectCard(cardElement);
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

function deSelectAllEntities() {
  selectAllEnemies(false);
  selectAllFriendlies(false);
  selectPlayer(false);
}

function selectAllEnemies() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var selectors = dom.enemyGrid.querySelectorAll(".enemySelector");
  selectors.forEach(function (selector) {
    selector.classList.toggle("show", status);
  });
}

function selectAllFriendlies() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var selectors = document.querySelectorAll(".friendlySelector");
  selectors.forEach(function (selector) {
    selector.classList.toggle("show", status);
  });
}

function selectPlayer() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var playerModal = document.querySelector(".player");
  var playerSelector = playerModal.querySelector(".friendlySelector");
  playerSelector.classList.toggle("show", status);
} // /selection
// misc


function linkElementtToEntity(Element, entity) {
  Element.entityObject = entity;
}

function determineCardType(card) {
  return card.constructor.generatedCardType;
}

function getEntityHealthModals(entity) {
  var healthBar = entity.healthBar;
  var maxHealthCount = healthBar.querySelector(".maxHealthCount");
  var healthCount = healthBar.querySelector(".healthCount");
  var healthDisplay = healthBar.querySelector(".healthDisplay");
  var healthDrag = healthBar.querySelector(".healthDrag");
  var blockBar = healthBar.querySelector(".blockBar");
  var blockCount = blockBar.querySelector(".blockCount");
  return {
    healthBar: healthBar,
    maxHealthCount: maxHealthCount,
    healthCount: healthCount,
    healthDisplay: healthDisplay,
    healthDrag: healthDrag,
    blockBar: blockBar,
    blockCount: blockCount
  };
}

function moveNextEnemyBoxOf(enemyBox) {
  var enemyBoxPosition = findEnemyBoxPosition(enemyBox);

  if (!dom.enemyBoxes[enemyBoxPosition + 1]) {
    _pubsub.default.turnStarted();

    return;
  }

  dom.enemyBoxes[enemyBoxPosition + 1].move();
}

function findEnemyBoxPosition(enemyBox) {
  return dom.enemyBoxes.findIndex(function (eBox) {
    return eBox === enemyBox;
  });
}

function getEnemyBoxOfEntity(entity) {
  return entity.modal.parentElement;
}

function findNextFriendly(enemy) {
  var enemyBox = getEnemyBoxOfEntity(enemy);
  var enemyBoxIndex = findEnemyBoxPosition(enemyBox);

  for (var i = enemyBoxIndex + 1; i < dom.enemyBoxes.length; i++) {
    var Ebox = dom.enemyBoxes[i];
    var friendlyModal = dom.enemyBoxes[i].querySelector(".friendly");

    if (friendlyModal) {
      return friendlyModal.entity;
    }
  }

  return _player.player;
}

function positionEntityScan(entityScan, entity) {
  var enemy_box_position = entity.modal.getBoundingClientRect();
  var restOfPage_position = dom.restOfPage.getBoundingClientRect();
  var screenWidth = restOfPage_position.width > restOfPage_position.height ? restOfPage_position.width : restOfPage_position.height;
  var ebox_in_left = enemy_box_position.left < screenWidth / 2;
  var X_bonus;

  if (ebox_in_left) {
    X_bonus = 1;
  } else {
    X_bonus = -1;
  }

  entityScan.style.top = enemy_box_position.top + "px";
  entityScan.style.left = enemy_box_position.left + X_bonus * enemy_box_position.width + "px";
} // / misc
},{"../dom.js":"dlJM","../player.js":"hDDw","../pubsub.js":"xoHa"}],"oUWr":[function(require,module,exports) {

},{}],"KyPS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToblockEffects = addToblockEffects;
exports.addTocardEffects = addTocardEffects;
exports.addTodealDamageEffects = addTodealDamageEffects;
exports.addTorecieveDamageEffects = addTorecieveDamageEffects;
exports.addToturnEffects = addToturnEffects;
exports.applyEffectHandler = applyEffectHandler;
exports.applyStackingEffectHandler = applyStackingEffectHandler;
exports.force_remove = force_remove;
exports.halfEffectDuration = halfEffectDuration;
exports.reduceEffectDuration = reduceEffectDuration;
exports.reduceEffectUses = reduceEffectUses;
exports.removeFromblockEffects = removeFromblockEffects;
exports.removeFromcardEffects = removeFromcardEffects;
exports.removeFromdealDamageEffects = removeFromdealDamageEffects;
exports.removeFromrecieveDamageEffects = removeFromrecieveDamageEffects;
exports.removeFromturnEffects = removeFromturnEffects;
Object.defineProperty(exports, "renderEffect", {
  enumerable: true,
  get: function () {
    return _functions.renderEffect;
  }
});
exports.renderEffect2 = void 0;

var _buffsManager = _interopRequireDefault(require("../buffsManager"));

var _functions = require("../functions");

var _pubsub = _interopRequireDefault(require("../pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderEffect2 = _functions.renderEffect;
exports.renderEffect2 = renderEffect2;

// add effect
// stacking
function applyEffectHandler(effect, entity) {
  var type_of_effect = effect.constructor.generatedEffect;
  var effect_list = entity[type_of_effect];
  var effectName = effect.name;
  var effectDuration = effect.duration;
  var effectUses = effect.uses; // link 'em

  effect.hostingEntity = entity;

  if (effect_list[effectName]) {
    // reinforce effect if exists
    reinforceEffect(effect_list[effectName], effectDuration, effectUses);
    effect.alreadyAplied = true;
  } else {
    // add effect if it doesn't exist
    effect_list[effectName] = effect;
  }

  (0, _functions.renderEffect)(entity, effect_list[effectName]);
}

function applyStackingEffectHandler(effect, entity) {
  var type_of_effect = effect.constructor.generatedEffect;
  var effect_list = entity[type_of_effect];
  var effectName = effect.name;

  if (effect_list[effectName]) {
    for (var i = 0; i < 99; i++) {
      if (effect_list[effectName + i] != undefined) {
        continue;
      }

      effect.name = effectName + i;
      break;
    }
  } // add effect with original / newname


  effect_list[effectName] = effect;
  (0, _functions.renderEffect)(entity, effect);
} // non stacking
// adding effects to list
// deal damae


function addTodealDamageEffects(effect) {
  effect.hostingEntity.dealDamageEffects[effect.name] = effect;
}

function removeFromdealDamageEffects(effect) {
  delete effect.hostingEntity.dealDamageEffects[effect.name];
} // recieve damage


function addTorecieveDamageEffects(effect) {
  effect.hostingEntity.recieveDamageEffects[effect.name] = effect;
}

function removeFromrecieveDamageEffects(effect) {
  delete effect.hostingEntity.recieveDamageEffects[effect.name];
} // block effects


function addToblockEffects(effect) {
  effect.hostingEntity.blockEffects[effect.name] = effect;
}

function removeFromblockEffects(effect) {
  delete effect.hostingEntity.blockEffects[effect.name];
} // card effects


function addTocardEffects(effect, numOdList) {
  var cardList = getListBasedOnNumber(numOdList);
  effect.hostingEntity.cardEffects[cardList][effect.name] = effect;
}

function removeFromcardEffects(effect, numOdList) {
  var cardList = getListBasedOnNumber(numOdList);
  delete effect.hostingEntity.cardEffects[cardList][effect.name];
}

function getListBasedOnNumber(number) {
  if (number === 1) {
    return "playEffects";
  }

  if (number === 2) {
    return "drawEffects";
  }

  if (number === 3) {
    return "exaustEffects";
  }

  if (number === 4) {
    return "discardEffects";
  }
} // turn effects


function addToturnEffects(effect) {
  effect.hostingEntity.turnEffects[effect.name] = effect;
}

function removeFromturnEffects(effect) {
  delete effect.hostingEntity.turnEffects[effect.name];
} // /add effect
// effect timer


function halfEffectDuration(effect) {
  if (typeof effect.duration !== "number") {
    throw new Error("inf effect want to be hallfed", effect);
    return;
  }

  effect.duration = Math.floor(effect.duration / 2);

  if (effect.duration <= 0) {
    effect.remove();
  }

  (0, _functions.renderEffect)(effect.hostingEntity, effect);
}

function reduceEffectDuration(effect) {
  if (typeof effect.duration !== "number") {
    return;
  }

  effect.duration--;

  if (effect.duration <= 0) {
    effect.remove();
  }

  (0, _functions.renderEffect)(effect.hostingEntity, effect);
}

function reduceEffectUses(effect) {
  if (typeof effect.uses == "string") {
    return;
  }

  effect.uses--;

  if (effect.uses <= 0) {
    effect.remove();
  }

  (0, _functions.renderEffect)(effect.hostingEntity, effect);
} // /effect timer
// reinforce effect


function reinforceEffect(exactEffect, bonusDuration, bonusUses) {
  reinforceDuration(exactEffect, bonusDuration);
  reinforceUses(exactEffect, bonusUses);
}

function reinforceDuration(exactEffect, bonusDuration) {
  if (exactEffect.duration === "inf") {
    return;
  } else if (bonusDuration === "inf") {
    exactEffect.duration = "inf";
    return;
  } else if (typeof bonusDuration === "number") {
    exactEffect.duration += bonusDuration;
    return;
  } // fall back
  else {
    console.log(bonusDuration, " added to ", exactEffect);
    alert("effectsHandler : type of effect duration not intended , chack consle");
  }
}

function reinforceUses(exactEffect, bonusUses) {
  if (exactEffect.uses === "inf") {
    return;
  } else if (bonusUses == "inf") {
    exactEffect.uses = "inf";
    return;
  } else if (typeof bonusUses == "number") {
    exactEffect.uses += bonusUses;
    return;
  } // fall back
  else {
    alert("effectsHandler : type of effect duration not intended , chack consle");
    console.log(bonusUses, " added to ", exactEffect);
  }
} // /reinforce effect
// force remove


function force_remove(effect) {
  var events = _pubsub.default.events;

  for (var event in events) {
    _pubsub.default.off(event, effect); // for(let i = 0 ; i < events[event].length ; i++){
    //   const index = events[event].findIndex(e => e === effect)
    //   if (index > 0) {
    //     events[event].splice(i,1)
    //   }
    // }

  }
}
},{"../buffsManager":"HT2s","../functions":"Q9tZ","../pubsub.js":"xoHa"}],"e604":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d = exports.buffer = exports.basicBuff = void 0;

var _effectsHandler = require("./effectsHandler.js");

var _pubsub = _interopRequireDefault(require("../pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var basicBuff = /*#__PURE__*/function () {
  function basicBuff(name, duration, uses) {
    _classCallCheck(this, basicBuff);

    this.name = name;
    this.duration = duration !== null && duration !== void 0 ? duration : "inf";
    this.uses = uses !== null && uses !== void 0 ? uses : "ind";
    this.hostingEntityHasIt = false;
  }

  _createClass(basicBuff, [{
    key: "apply",
    value: function apply(entity) {
      this.init(entity);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.defaultRemove();
    }
  }, {
    key: "_forceRemove",
    value: function _forceRemove() {
      (0, _effectsHandler.force_remove)(this);
      this.defaultRemove();
    }
  }, {
    key: "defaultInit",
    value: function defaultInit(entity) {
      // for when first applied
      (0, _effectsHandler.applyEffectHandler)(this, entity);
    }
  }, {
    key: "defaultStackingInit",
    value: function defaultStackingInit(entity) {
      // its actually the ones that don;t stack bravo
      (0, _effectsHandler.applyStackingEffectHandler)(this.entity);
    }
  }, {
    key: "effect",
    value: function effect() {// subs to pubsub event and triggers
    }
  }, {
    key: "defaultRemove",
    value: function defaultRemove() {
      // for removal
      delete this.hostingEntity.buffs[this.name];
      (0, _effectsHandler.renderEffect)(this.hostingEntity, this);
      delete this;
    }
  }]);

  return basicBuff;
}();

exports.basicBuff = basicBuff;

_defineProperty(basicBuff, "generatedEffect", "buffs");

var buffer = /*#__PURE__*/function (_basicBuff) {
  _inherits(buffer, _basicBuff);

  var _super = _createSuper(buffer);

  function buffer() {
    _classCallCheck(this, buffer);

    return _super.call(this, "buffer", null, 1);
  }

  _createClass(buffer, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      (0, _effectsHandler.addTorecieveDamageEffects)(this);
    }
  }, {
    key: "listEffect",
    value: function listEffect(damage) {
      if (damage.val >= 0) {
        damage.val = 0;
      }

      (0, _effectsHandler.reduceEffectUses)(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.defaultRemove();
      (0, _effectsHandler.removeFromrecieveDamageEffects)(this);
    }
  }]);

  return buffer;
}(basicBuff);

exports.buffer = buffer;

var d = /*#__PURE__*/function (_basicBuff2) {
  _inherits(d, _basicBuff2);

  var _super2 = _createSuper(d);

  function d(duration, uses) {
    _classCallCheck(this, d);

    return _super2.call(this, "", duration, uses);
  }

  _createClass(d, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      _pubsub.default.on("turnStarted", this);
    }
  }, {
    key: "effect",
    value: function effect(entity) {}
  }, {
    key: "remove",
    value: function remove() {
      _pubsub.default.off("turnStarted", this);

      this.defaultRemove();
    }
  }]);

  return d;
}(basicBuff);
/*
buffs that aply to list
  on apply add itself to list and buffs
  on remove remove itself from list

on effects handler add 5 similar function
that add buff to specififc list
that means 5 specific functions that remove from each list
*/


exports.d = d;
},{"./effectsHandler.js":"KyPS","../pubsub.js":"xoHa"}],"CH2h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vulnerable = exports.poison = exports.d = exports.bleed = exports.basicDebuff = void 0;

var _effectsHandler = require("./effectsHandler.js");

var _functions = require("../functions.js");

var _pubsub = _interopRequireDefault(require("../pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var basicDebuff = /*#__PURE__*/function () {
  function basicDebuff(name, duration, uses) {
    _classCallCheck(this, basicDebuff);

    this.name = name;
    this.duration = duration !== null && duration !== void 0 ? duration : "inf";
    this.uses = uses !== null && uses !== void 0 ? uses : "ind";
    this.alreadyAplied = false;
  }

  _createClass(basicDebuff, [{
    key: "apply",
    value: function apply(entity) {
      this.init(entity);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.defaultRemove();
    }
  }, {
    key: "_forceRemove",
    value: function _forceRemove() {
      (0, _effectsHandler.force_remove)(this);
      this.defaultRemove();
    }
  }, {
    key: "defaultInit",
    value: function defaultInit(entity) {
      // for when first applied
      (0, _effectsHandler.applyEffectHandler)(this, entity);
    }
  }, {
    key: "effect",
    value: function effect() {// subs to pubsub event and triggers
    }
  }, {
    key: "defaultRemove",
    value: function defaultRemove() {
      // for removal
      delete this.hostingEntity.debuffs[this.name];
      (0, _effectsHandler.renderEffect)(this.hostingEntity, this);
      delete this;
    }
  }]);

  return basicDebuff;
}();

exports.basicDebuff = basicDebuff;

_defineProperty(basicDebuff, "generatedEffect", "debuffs");

var vulnerable = /*#__PURE__*/function (_basicDebuff) {
  _inherits(vulnerable, _basicDebuff);

  var _super = _createSuper(vulnerable);

  function vulnerable(duration) {
    _classCallCheck(this, vulnerable);

    return _super.call(this, "vulnerable", duration, "inf");
  }

  _createClass(vulnerable, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      _pubsub.default.on("turnStarted", this);

      entity.defMod += 0.5;
    }
  }, {
    key: "effect",
    value: function effect() {
      // console.log( "enemy every turn defmod:" , this.hostingEntity.defMod + "by " , this.hostingEntity)
      (0, _effectsHandler.reduceEffectDuration)(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.hostingEntity.defMod -= 0.5;
      console.log("enemy def mod at end :", this.hostingEntity.defMod);

      _pubsub.default.off("turnStarted", this);

      this.defaultRemove();
    }
  }]);

  return vulnerable;
}(basicDebuff);

exports.vulnerable = vulnerable;

var poison = /*#__PURE__*/function (_basicDebuff2) {
  _inherits(poison, _basicDebuff2);

  var _super2 = _createSuper(poison);

  function poison(duration) {
    _classCallCheck(this, poison);

    return _super2.call(this, "Poison", duration, "inf");
  }

  _createClass(poison, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      _pubsub.default.on("turnEnded", this);
    }
  }, {
    key: "effect",
    value: function effect(turn) {
      (0, _functions.directlyDamage)(this.duration, this.hostingEntity);
      (0, _effectsHandler.reduceEffectDuration)(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      _pubsub.default.off("turnEnded", this);

      this.defaultRemove();
    }
  }]);

  return poison;
}(basicDebuff);

exports.poison = poison;

var bleed = /*#__PURE__*/function (_basicDebuff3) {
  _inherits(bleed, _basicDebuff3);

  var _super3 = _createSuper(bleed);

  function bleed(duration) {
    _classCallCheck(this, bleed);

    return _super3.call(this, "Bleed", duration, "inf");
  }

  _createClass(bleed, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      _pubsub.default.on("turnEnded", this);
    }
  }, {
    key: "effect",
    value: function effect(turn) {
      (0, _functions.directlyDamage)(this.duration, this.hostingEntity);
      (0, _effectsHandler.halfEffectDuration)(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      _pubsub.default.off("turnEnded", this);

      this.defaultRemove();
    }
  }]);

  return bleed;
}(basicDebuff);

exports.bleed = bleed;

var d = /*#__PURE__*/function (_basicDebuff4) {
  _inherits(d, _basicDebuff4);

  var _super4 = _createSuper(d);

  function d(duration, uses) {
    _classCallCheck(this, d);

    return _super4.call(this, "", duration, uses);
  }

  _createClass(d, [{
    key: "init",
    value: function init(entity) {
      this.defaultInit(entity);

      if (this.alreadyAplied) {
        return;
      }

      _pubsub.default.on("turnStarted", this);
    }
  }, {
    key: "effect",
    value: function effect(entity) {}
  }, {
    key: "remove",
    value: function remove() {
      _pubsub.default.off("turnStarted", this);

      this.defaultRemove();
    }
  }]);

  return d;
}(basicDebuff);

exports.d = d;
},{"./effectsHandler.js":"KyPS","../functions.js":"Q9tZ","../pubsub.js":"xoHa"}],"HT2s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var buffs = _interopRequireWildcard(require("./buffs/buffClasses.js"));

var debuffs = _interopRequireWildcard(require("./buffs/debuffClasses.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var effects = _objectSpread(_objectSpread({}, buffs), debuffs);

var _default = effects;
exports.default = _default;
},{"./buffs/buffClasses.js":"e604","./buffs/debuffClasses.js":"CH2h"}],"Q9tZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationHandler = animationHandler;
exports.attackFriendly = attackFriendly;
exports.cardfunctions = exports.battlefunctions = void 0;
exports.clearBlock = clearBlock;
exports.clearBlockOfType = clearBlockOfType;
exports.damage = damage;
exports.damageBlock = damageBlock;
exports.damageFormulas = void 0;
exports.defaultTurnEnded = defaultTurnEnded;
exports.defaultTurnStarted = defaultTurnStarted;
exports.directlyDamage = directlyDamage;
exports.discardCard = discardCard;
exports.domfunctions = void 0;
exports.drawCardsIntoHand = drawCardsIntoHand;
exports.endTurnClearPlayerHand = endTurnClearPlayerHand;
exports.exhaustCard = exhaustCard;
exports.gainBlock = gainBlock;
exports.killEntityModal = killEntityModal;
exports.playCardManager = playCardManager;
exports.playSelectedCard = playSelectedCard;
exports.render = exports.playerfunctions = void 0;
exports.renderEffect = renderEffect;
exports.renderEntityScan = renderEntityScan;
exports.renderHealth = renderHealth;
exports.resetEntity = resetEntity;
exports.resetPlayerEnergy = resetPlayerEnergy;
exports.selectionHandler = selectionHandler;

var _player = require("./player.js");

var dom = _interopRequireWildcard(require("./dom.js"));

var battlefunctions = _interopRequireWildcard(require("./functions/battleFunctions.js"));

exports.battlefunctions = battlefunctions;

var cardfunctions = _interopRequireWildcard(require("./functions/cardFunctions.js"));

exports.cardfunctions = cardfunctions;

var domfunctions = _interopRequireWildcard(require("./functions/domFunctions.js"));

exports.domfunctions = domfunctions;

var playerfunctions = _interopRequireWildcard(require("./functions/playerFuctions.js"));

exports.playerfunctions = playerfunctions;

var damageFormulas = _interopRequireWildcard(require("./functions/damage_formulas.js"));

exports.damageFormulas = damageFormulas;

var _buffsManager = _interopRequireDefault(require("./buffsManager.js"));

var _pubsub = _interopRequireDefault(require("./pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// init
(function () {
  dom.endTurnBtn.addEventListener("pointerdown", emitTurnEnded);
  dom.restOfPage.addEventListener("pointerdown", function (e) {
    selectionHandler();
    playSelectedCard(e);

    if (e.target.scan) {
      domfunctions.removeAllEntityScans();
      e.target.scan();
    } else {
      domfunctions.removeAllEntityScans();
    }
  });
  dom.enemyBoxes[0].__proto__.move = moveEnemyBox;

  dom.playerModel.scan = function () {
    renderEntityScan(_player.player);
  };
})();

function emitTurnEnded() {
  _pubsub.default.turnEnded();
} // /init
// Dom Functions
// render


var render = function () {
  var previous_hand = [];
  return function () {
    domfunctions.deSelectAllCards();
    var hand = _player.player.hand;
    var discarded_card_array = previous_hand.filter(function (x) {
      return !hand.includes(x);
    });
    var drawn_card_array = hand.filter(function (x) {
      return !previous_hand.includes(x);
    });
    previous_hand = Array.from(_player.player.hand);
    discarded_card_array.forEach(function (card) {
      domfunctions.visualyRemoveCard(card);
    });
    drawn_card_array.forEach(function (card) {
      domfunctions.visualyRenderCard(card);
    });
  };
}();

exports.render = render;

function renderHealth(entity) {
  var maxHealth = entity.maxHealth;
  var health = entity.health;
  var healthInfo = domfunctions.getEntityHealthModals(entity);
  var health_percent = health / maxHealth;
  domfunctions.renderHealthBar(entity);
  domfunctions.renderHealthCount(entity);
  domfunctions.renderBlock(entity);
  domfunctions.renderHealthD(healthInfo.healthDisplay, health_percent);
  setTimeout(function () {
    domfunctions.renderHealthD(healthInfo.healthDrag, health_percent);
  }, 700);
  battlefunctions.checkEntityDeath(entity);
}

function renderEffect(entity, effect) {
  domfunctions.generateEffectEllement(entity, effect);
  var effectEllemt = entity.effectGrid.querySelector(".".concat(effect.name));
  var usesElement = effectEllemt.querySelector(".effectUses");
  var duratioonEllement = effectEllemt.querySelector(".effectDuration");

  if (effect.uses <= 0 || effect.duration <= 0) {
    effectEllemt.remove();
    return;
  }

  usesElement.innerText = effect.uses == "inf" ? " " : effect.uses;
  duratioonEllement.innerText = effect.duration == "inf" ? "" : effect.duration; //check if element exists
  // create if not
  // update uses and duration
}

function renderActionIcons() {
  var gridEntities = dom.enemyGrid.querySelectorAll(".entity");
  gridEntities.forEach(function (entityModal) {
    var entity = entityModal.entity,
        move = entity.moves[entity.turn];
    move.render(); // entity.actionIcon.innerText = 0
    // entity.actionIcon.innerText = move?.damage ?? ""
  });
}

function renderEntityScan(entity) {
  var entityScan = domfunctions.generateEntityScan(entity);
  domfunctions.positionEntityScan(entityScan, entity);
  document.body.append(entityScan);
} // /render


function selectionHandler() {
  if (!domfunctions.selectedCard) {
    domfunctions.deSelectAllEntities();
    return;
  }

  var selected_card = domfunctions.selectedCard.cardObject;

  if (selected_card.target === "enemy") {
    // console.log("play on enemy");
    // de select friends if we switch cards
    domfunctions.deSelectAllEntities(false);
    domfunctions.selectAllEnemies();
  } else if (selected_card.target === "friendly") {
    // console.log("play on friendly");
    // de select all enemies if we switch cards
    domfunctions.deSelectAllEntities(false);
    domfunctions.selectAllFriendlies();
  } else if (selected_card.target === "player") {
    // console.log("play on player");
    // de select all enemies if we switch cards
    domfunctions.deSelectAllEntities(false);
    domfunctions.selectPlayer();
  } //fall back
  else {
    alert("selected card", domfunctions.selectedCard, "no have target");
  }
}

function killEntityModal(entity) {
  if (entity.modal == undefined) {
    return;
  }

  var entity_selector = entity.modal.querySelector(".selector");
  entity_selector.remove();
  entity.modal.classList.add("dying");
  setTimeout(function () {
    entity.modal.remove();
  }, entity.deathDelay);
} // moveBoxes


function moveEnemyBox(box) {
  var _this = this;

  var boxEnemyModal = this.querySelector(".enemy"); // console.log(domfunctions.findEnemyBoxPosition(this) , this , boxEnemyModal);

  if (boxEnemyModal == null) {
    domfunctions.moveNextEnemyBoxOf(this);
    return;
  }

  var boxEnemyEntity = boxEnemyModal.entity;
  boxEnemyEntity.move();
  setTimeout(function () {
    domfunctions.moveNextEnemyBoxOf(_this);
  },
  /*wait*/
  boxEnemyEntity.delay);
} // /moveBoxes
// animations


function animationHandler(entity, damageObj) {
  domfunctions.renderEntityAttackedAnimation(entity, damageObj);
} // /animations
// /Dom Functions
// Battle Fucntion
// play cardon enemy
// turns


function defaultTurnStarted() {
  clearBlockOfType("friendly");
  resetPlayerEnergy();
  drawCardsIntoHand();
  renderActionIcons();
  enableEndTurnBtn();
}

function defaultTurnEnded(params) {
  disableEndTurnBtn();
  clearBlockOfType("enemy");
  endTurnClearPlayerHand();
  dom.enemyBoxes[0].move();
}

function disableEndTurnBtn() {
  dom.endTurnBtn.removeEventListener("pointerdown", emitTurnEnded);
}

function enableEndTurnBtn() {
  dom.endTurnBtn.addEventListener("pointerdown", emitTurnEnded);
}

function clearBlockOfType(entityType) {
  var target_entities = document.querySelectorAll(".entity.".concat(entityType));
  target_entities.forEach(function (entityModal) {
    var entity = entityModal.entity;
    clearBlock(entity);
  });
}

function resetPlayerEnergy() {
  var energy = {
    val: _player.player.maxEnergy
  };
  battlefunctions.iterateEnergyEffects(energy);
  _player.player.energy = energy.val;
  domfunctions.renderPlayerEnergy();
} // /turns


function playSelectedCard(e) {
  var is_selector = domfunctions.checkIfIncludesClass(e.target, "selector");

  if (!is_selector) {
    return;
  }

  var selector = e.target;
  var card = domfunctions.selectedCard.cardObject;
  var entity = selector.parentNode.entity;
  playCardManager(card, entity);
  selectionHandler();
}

function playCardManager(card, entity) {
  var energyCost = card.energyCost;
  var energy = _player.player.energy;

  if (energyCost > energy) {
    domfunctions.deSelectAllCards();
    return;
  }

  _player.player.energy -= energyCost;
  card.play(entity);
  domfunctions.renderPlayerEnergy();
} // {
//   damage: 34,
//   damageCounter : ()=> {}
//   animation : dom Element
// }


function damage(recievingEntity, DealingEntity, damageInfoObj) {
  var countedDamage = battlefunctions.countDamage(recievingEntity, DealingEntity, damageInfoObj);
  var damageObj = {
    val: countedDamage,
    animation: damageInfoObj.animation,
    status: true
  }; // loop through dealDamage Effects

  battlefunctions.iterateDealDamageEffects(DealingEntity, damageObj); // loop through recieveDamageEffects Effects

  battlefunctions.iterateRecieveDamageEffects(recievingEntity, damageObj);

  if (damageObj.status === false) {
    return;
  } // console.log(`attack function : ${recievingEntity.name} recieved ${damageObj.val}`
  // , recievingEntity);


  var damageFinalValue = damageObj.val < 0 ? 0 : damageObj.val;
  var unblockedDamage = damageBlock(damageFinalValue, recievingEntity);
  recievingEntity.health -= unblockedDamage;
  animationHandler(recievingEntity, damageObj);
  renderHealth(recievingEntity);
}

function directlyDamage(damage, entity) {
  entity.health -= damage;
  renderHealth(entity);
}

function damageBlock(damage, entity) {
  var block = entity.block;

  if (block >= damage) {
    entity.block -= damage;
    return 0;
  } else {
    entity.block = 0;
    return damage - block;
  }
} // /play cardon enemy
// enemy functions


function attackFriendly(DealingEntity, damageInfoObj) {
  var nextFriendly = domfunctions.findNextFriendly(DealingEntity);
  damage(nextFriendly, DealingEntity, damageInfoObj);
}

function gainBlock(recievingEntity, initialBlock) {
  var block = {
    val: initialBlock,
    status: true
  };
  battlefunctions.iterateGainBlockEffects(recievingEntity, block);

  if (block.status === false) {
    return;
  }

  recievingEntity.block += block.val;
  renderHealth(recievingEntity);
} // / enemy functions


function clearBlock(entity) {
  var blockClearer = {
    initialBlock: entity.block,
    clearedBlock: entity.block,
    status: true
  };

  for (var effect in entity.clearBlockEffects) {
    entity.clearBlockEffects[effect].listEffect(blockClearer);
  }

  if (blockClearer.status === false) {
    return;
  }

  var finalClearedBlock = blockClearer.clearedBlock < 0 ? 0 : blockClearer.clearedBlock;
  entity.block = blockClearer.initialBlock - finalClearedBlock;
  renderHealth(entity);
}

function resetEntity(entity) {
  entity.apply = function () {};

  entity.move = function () {};

  for (var effect in entity.buffs) {
    entity["buffs"][effect]._forceRemove();
  }

  for (var _effect in entity.debuffs) {
    entity["debuffs"][_effect]._forceRemove();
  }
} // /Battle Fucntion
// Card Functions


function drawCardsIntoHand(draw) {
  var _player$buffs$draw;

  var bonusDrawBuff = (_player$buffs$draw = _player.player.buffs.draw) !== null && _player$buffs$draw !== void 0 ? _player$buffs$draw : 0;
  var playerDraw = 5;
  var totalDraw = draw !== null && draw !== void 0 ? draw : playerDraw + bonusDrawBuff;

  for (var i = 1; i <= totalDraw; i++) {
    if (_player.player.drawPile.length == 0) {
      if (_player.player.discardPile.length == 0) {
        break;
      }

      cardfunctions.shuffleDrawPile();
    }

    var drawnCard = _player.player.drawPile.pop();

    _player.player.hand.push(drawnCard);
  } // console.log(player.hand);


  render();
}

function endTurnClearPlayerHand() {
  var playerHand = Array.from(_player.player.hand);

  for (var i = 0; i < playerHand.length; i++) {
    var card = playerHand[i];

    if (card.retains) {
      continue;
    } else if (card.exhausts) {
      exhaustCard(card);
      continue;
    } else {
      discardCard(card);
    }
  }

  render();
}

function discardCard(card) {
  var _player$discardPile;

  //only from hand
  var index = _player.player.hand.findIndex(function (x) {
    return x === card;
  });

  var discardedCard = _player.player.hand.splice(index, 1);

  (_player$discardPile = _player.player.discardPile).push.apply(_player$discardPile, _toConsumableArray(discardedCard));

  render();
}

function exhaustCard(card) {
  var _cardfunctions$locate = cardfunctions.locateCard(card),
      index = _cardfunctions$locate.index,
      exhaustedCard = _cardfunctions$locate.exhaustedCard,
      location = _cardfunctions$locate.location;

  _player.player[location].splice(index, 1);

  _player.player.exhaustPile.push(exhaustedCard);

  render();
} // /Card Functions
// OUTSIDE BATTLE
// /OUTSIDE BATTLE
},{"./player.js":"hDDw","./dom.js":"dlJM","./functions/battleFunctions.js":"egtd","./functions/cardFunctions.js":"G6vW","./functions/domFunctions.js":"fqaM","./functions/playerFuctions.js":"oUWr","./functions/damage_formulas.js":"GY4V","./buffsManager.js":"HT2s","./pubsub.js":"xoHa"}],"ZvlW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strike = exports.poison_stab = exports.draw_blood = exports.card = exports.basicAttackCardClass = exports.bash = void 0;

var f = _interopRequireWildcard(require("../functions.js"));

var _player = require("../player.js");

var _buffsManager = _interopRequireDefault(require("../buffsManager.js"));

var _domFunctions = require("../functions/domFunctions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  function basicAttackCardClass(name, energyCost, damage) {
    _classCallCheck(this, basicAttackCardClass);

    this.name = name;
    this.energyCost = energyCost;
    this.damage = damage;
    this.target = "enemy";
    this.type = "attack";
    (0, _domFunctions.generateCardDomElement)(this);
  }

  _createClass(basicAttackCardClass, [{
    key: "defaultPlay",
    value: function defaultPlay(enemy, animation) {
      // console.log(this.name , "attacked" , enemy.name , "for" , this.damage);
      f.damage(enemy, _player.player, {
        damage: this.damage,
        animation: animation,
        counter: null
      });
      this.discard();
    }
  }, {
    key: "discard",
    value: function discard() {
      f.discardCard(this);
    }
  }, {
    key: "attack",
    value: function attack(enemy) {
      f.damage(enemy, _player.player, this.damage);
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
    _classCallCheck(this, strike);

    return _super.call(this, "Strike", 1, 6);
  }

  _createClass(strike, [{
    key: "play",
    value: function play(enemy) {
      this.defaultPlay(enemy);
      enemy.apply(new _buffsManager.default.poison(5));
    }
  }]);

  return strike;
}(basicAttackCardClass);

exports.strike = strike;

var bash = /*#__PURE__*/function (_basicAttackCardClass2) {
  _inherits(bash, _basicAttackCardClass2);

  var _super2 = _createSuper(bash);

  function bash(damage, energyCost) {
    _classCallCheck(this, bash);

    return _super2.call(this, "Bash", 2, 10);
  }

  _createClass(bash, [{
    key: "play",
    value: function play(enemy) {
      this.defaultPlay(enemy);
      enemy.apply(new _buffsManager.default.vulnerable(3));
    }
  }]);

  return bash;
}(basicAttackCardClass);

exports.bash = bash;

var poison_stab = /*#__PURE__*/function (_basicAttackCardClass3) {
  _inherits(poison_stab, _basicAttackCardClass3);

  var _super3 = _createSuper(poison_stab);

  function poison_stab(damage, energyCost) {
    _classCallCheck(this, poison_stab);

    return _super3.call(this, "poison stab", 1, 4);
  }

  _createClass(poison_stab, [{
    key: "play",
    value: function play(enemy) {
      this.defaultPlay(enemy);
      enemy.apply(new _buffsManager.default.poison(4));
    }
  }]);

  return poison_stab;
}(basicAttackCardClass);

exports.poison_stab = poison_stab;

var draw_blood = /*#__PURE__*/function (_basicAttackCardClass4) {
  _inherits(draw_blood, _basicAttackCardClass4);

  var _super4 = _createSuper(draw_blood);

  function draw_blood(damage, energyCost) {
    _classCallCheck(this, draw_blood);

    return _super4.call(this, "draw blood", 1, 2);
  }

  _createClass(draw_blood, [{
    key: "play",
    value: function play(enemy) {
      this.defaultPlay(enemy);
      enemy.apply(new _buffsManager.default.bleed(6));
    }
  }]);

  return draw_blood;
}(basicAttackCardClass);

exports.draw_blood = draw_blood;

var card = /*#__PURE__*/function (_basicAttackCardClass5) {
  _inherits(card, _basicAttackCardClass5);

  var _super5 = _createSuper(card);

  function card(damage, energyCost) {
    _classCallCheck(this, card);

    return _super5.call(this, "", 1, 1);
  }

  _createClass(card, [{
    key: "play",
    value: function play(enemy) {
      this.defaultPlay(enemy);
    }
  }]);

  return card;
}(basicAttackCardClass);

exports.card = card;
},{"../functions.js":"Q9tZ","../player.js":"hDDw","../buffsManager.js":"HT2s","../functions/domFunctions.js":"fqaM"}],"l5IJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defend = exports.card = exports.basicSkillCardClass = void 0;

var f = _interopRequireWildcard(require("../functions.js"));

var _player = require("../player.js");

var _buffsManager = _interopRequireDefault(require("../buffsManager.js"));

var _domFunctions = require("../functions/domFunctions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  function basicSkillCardClass(name, energyCost, addingBlock) {
    _classCallCheck(this, basicSkillCardClass);

    this.name = name;
    this.energyCost = energyCost;
    this.addingBlock = addingBlock;
    this.target = "friendly";
    this.type = "skill";
    (0, _domFunctions.generateCardDomElement)(this);
  }

  _createClass(basicSkillCardClass, [{
    key: "defaultPlay",
    value: function defaultPlay(entity) {
      this.effect(entity);
      this.discard();
    }
  }, {
    key: "discard",
    value: function discard() {
      f.discardCard(this);
    }
  }, {
    key: "addBlock",
    value: function addBlock(entity) {
      f.gainBlock(entity, this.addingBlock);
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
    _classCallCheck(this, defend);

    return _super.call(this, "Defend", 1, 10);
  }

  _createClass(defend, [{
    key: "play",
    value: function play(entity) {
      this.defaultPlay(entity);
    }
  }, {
    key: "effect",
    value: function effect(entity) {
      this.addBlock(entity);
    }
  }]);

  return defend;
}(basicSkillCardClass);

exports.defend = defend;

var card = /*#__PURE__*/function (_basicSkillCardClass2) {
  _inherits(card, _basicSkillCardClass2);

  var _super2 = _createSuper(card);

  function card(energyCost) {
    var _this;

    _classCallCheck(this, card);

    _this.energyCost = energyCost;
    _this.name = "";
    return _possibleConstructorReturn(_this);
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
},{"../functions.js":"Q9tZ","../player.js":"hDDw","../buffsManager.js":"HT2s","../functions/domFunctions.js":"fqaM"}],"Qw3i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicPowerCardClass = void 0;

var f = _interopRequireWildcard(require("../functions.js"));

var _domFunctions = require("../functions/domFunctions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    (0, _domFunctions.generateCardDomElement)(this);
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
},{"../functions.js":"Q9tZ","../functions/domFunctions.js":"fqaM"}],"YIsa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillCardClasses = exports.powerCardClasses = exports.playerStartingDeck = exports.attackCardClasses = void 0;

var attackCardClasses = _interopRequireWildcard(require("./attackCardClasses.js"));

exports.attackCardClasses = attackCardClasses;

var skillCardClasses = _interopRequireWildcard(require("./skillCardClass.js"));

exports.skillCardClasses = skillCardClasses;

var powerCardClasses = _interopRequireWildcard(require("./powerCardClasses.js"));

exports.powerCardClasses = powerCardClasses;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var drawPile = [];
var discardPile = [];
var playerHand = [];
var playerStartingDeck = [// new attackCardClasses.poison(),
// new attackCardClasses.poison(),
new attackCardClasses.strike(), new attackCardClasses.strike(), new attackCardClasses.draw_blood(), new attackCardClasses.poison_stab(), // new attackCardClasses.strike(),
// new attackCardClasses.strike(),
// new skillCardClasses.defend(),
// new skillCardClasses.defend(),
new skillCardClasses.defend(), new skillCardClasses.defend(), new attackCardClasses.bash()]; // useless ?//, drawPile , discardPile , playerHand}

exports.playerStartingDeck = playerStartingDeck;
},{"./attackCardClasses.js":"ZvlW","./skillCardClass.js":"l5IJ","./powerCardClasses.js":"Qw3i"}],"hDDw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.player = void 0;

var _cardsManager = require("./cards/01cardsManager.js");

var _enemyClass = require("./enemies/enemyClass.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var listEffect = function listEffect() {
  console.log("laylay");
};

var playerClass = /*#__PURE__*/function () {
  function playerClass(hp, deck, relics) {
    _classCallCheck(this, playerClass);

    this.name = "struggeler";
    this.maxHealth = hp;
    this.health = hp;
    this.block = 0;
    this.maxEnergy = 999;
    this.energy = 3;
    this.hand = [];
    this.drawPile = [];
    this.discardPile = [];
    this.exhaustPile = [];
    this.buffs = {};
    this.debuffs = {};
    this.dealDamageEffects = {};
    this.recieveDamageEffects = {};
    this.gainBlockEffects = {};
    this.clearBlockEffects = {};
    this.cardEffects = {
      playEffects: {},
      drawEffects: {
        prop: "Hi Im DrawEffects prop and I apply to ",
        prop2: this
      },
      exaustEffects: {},
      discardEffects: {}
    };
    this.energyEffects = {};
    this.turnEffects = {};
    this.str = 0;
    this.dex = 0;
    this.atkMod = 1;
    this.defMod = 1;
    this.actualDeck = deck;
    this.deck = deck;
    this.relics = relics; // dom stufff

    this.modal = document.querySelector(".player");
    this.modal.entity = this;
    (0, _enemyClass.setUpHealthBar)(this);
  }

  _createClass(playerClass, [{
    key: "die",
    value: function die() {
      console.log("player died resseting game");
    }
  }, {
    key: "apply",
    value: function apply(effectObj) {
      effectObj.apply(this);
    }
  }, {
    key: "remove",
    value: function remove(effectName) {
      var _this$buffs$effectNam, _this$debuffs$effectN;

      (_this$buffs$effectNam = this.buffs[effectName]) === null || _this$buffs$effectNam === void 0 ? void 0 : _this$buffs$effectNam.remove();
      (_this$debuffs$effectN = this.debuffs[effectName]) === null || _this$debuffs$effectN === void 0 ? void 0 : _this$debuffs$effectN.remove();
    }
  }, {
    key: "test",
    value: function test() {
      console.log(this.cardEffects.drawEffects.prop, this.cardEffects.drawEffects.prop2);
    }
  }]);

  return playerClass;
}();

var player = new playerClass(73, _cardsManager.playerStartingDeck, {});
exports.player = player;
},{"./cards/01cardsManager.js":"YIsa","./enemies/enemyClass.js":"uD9C"}],"Kc5B":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.battleInit = battleInit;

var _player = require("../components/player.js");

var _pubsub = _interopRequireDefault(require("../components/pubsub.js"));

var f = _interopRequireWildcard(require("../components/functions.js"));

var _dom = require("../components/dom.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function battleInit() {
  f.battlefunctions.initEnemies();
  f.cardfunctions.resetDrawPile();
  f.renderHealth(_player.player); // after everything is initialized start turn

  _pubsub.default.turnStarted();
}
},{"../components/player.js":"hDDw","../components/pubsub.js":"xoHa","../components/functions.js":"Q9tZ","../components/dom.js":"dlJM"}],"MTLq":[function(require,module,exports) {
"use strict";

var battle = _interopRequireWildcard(require("./logics/battle.js"));

var _pubsub = _interopRequireDefault(require("./components/pubsub.js"));

var _dom = require("./components/dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const endTurnButton = document.querySelector("button")
// endTurnButton.addEventListener("click" , ()=>{
//   pubsub.turnEnded()
// })
battle.battleInit(); // will throw error bcause not importing and no render function
// console.log(cardsManager.playerHand);
// console.log(cardsManager.drawPile);
// console.log(cardsManager.playerHand[0].element.cardObject);
},{"./logics/battle.js":"Kc5B","./components/pubsub.js":"xoHa","./components/dom.js":"dlJM"}]},{},["MTLq"], null)
//# sourceMappingURL=main.1685146c.js.map