import * as domFunctions from "../functions/domFunctions.js"

export class basicSkillCardClass{
static generatedCardType = "skill"

  constructor(energyCost){
    this.energyCost = energyCost

    this.target = "player"
    this.type = "skill"
  }
  play(){
    console.log(this.name , " got played");
  }
}

export class defend extends basicSkillCardClass{
  constructor(energyCost){
    super(1)

    this.name = "Defend"
    
    this.element = domFunctions.generateCardDomElement(this)
  }
  play(){
    console.log(`${this.name} add 5 block`);
  }
}

export class card extends basicSkillCardClass{
  constructor(energyCost){
    this.energyCost = energyCost

    this.name = ""

    this.element = domFunctions.generateCardDomElement(this)
  }
  play(){
    console.log(`${this.name}`);
  }
}