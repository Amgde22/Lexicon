import {playerModel} from "./dom.js"
import {playerStartingDeck} from "./cards/01cardsManager.js"

class playerClass{
  constructor(hp,deck,relics){
    this.hp = hp
    this.block = 0
    this.energy = 3
    this.buffs = {}
    this.debuffs = {}

    
    this.deck = deck
    this.relics = relics

    this.model = playerModel
  }
  attack(){
    console.log("player attacked");
  }
}

export const player = new playerClass(73,playerStartingDeck,{})
