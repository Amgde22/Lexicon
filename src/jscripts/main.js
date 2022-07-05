import {player} from "./player.js"
import {battleInit} from "./battle.js"
import * as cardsManager from "./cards/01cardsManager.js"

battleInit()
console.log(cardsManager.playerHand);
console.log(cardsManager.drawPile);

