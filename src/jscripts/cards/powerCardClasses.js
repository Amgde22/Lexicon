import * as domFunctions from "../functions/domFunctions.js"

export class basicPowerCardClass{
static generatedCardType = "power"

  constructor(energyCost){
    this.energyCost = energyCost

    this.target = "player"
    this.type = "power"

  }
  play(){
    console.log(this.name , " got played");
  }
}