import { drawPile } from "./01cardsManager";

export class basicAttackCardClass{
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
  }
}

export class bash extends basicAttackCardClass{
  constructor(damage,energyCost){
    super(10 , 2) 

    this.name = "Bash"
  }

  play(){
    console.log(`${this.name} attacked for ${this.damage} `);
  }
}


// export class card extends basicAttackCardClass{
//   constructor(damage,energyCost){
//     super(1 , 1) 

//     this.name = ""
//   }

//   play(){
//     console.log(`${this.name} attacked for ${this.damage}`) 
//   }
// }

