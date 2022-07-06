import * as cardsManager from "../cards/01cardsManager.js"
import * as domFunctions from "../functions/domFunctions.js"

export class basicAttackCardClass{
static generatedCardType = "attack"

  constructor(damage,energyCost){
    this.damage = damage
    this.energyCost = energyCost
    


    this.target = "enemy"
    this.type = "attack"
  }
  play(){
    console.log(this.name , " got played");
  }
}

export class strike extends basicAttackCardClass {
  constructor(damage,energyCost){
    super(7 , 1)

    this.name = "Strike"

    this.element = domFunctions.generateCardDomElement(this)
  }
}

export class bash extends basicAttackCardClass{
  constructor(damage,energyCost){
    super(10 , 2) 

    this.name = "Bash"

    this.element = domFunctions.generateCardDomElement(this)
  }

  play(){
    console.log(`${this.name} attacked for ${this.damage} `);
  }
}


// export class card extends basicAttackCardClass{
//   constructor(damage,energyCost){
//     super(1 , 1) 

//     this.name = ""
    
//     this.element = domFunctions.generateCardDomElement(this)
//   }

//   play(){
//     console.log(`${this.name} attacked for ${this.damage}`) 
//   }
// }

