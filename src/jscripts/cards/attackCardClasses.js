export class basicAttackCardClass{
  constructor(damage,energyCost){
    this.damage = damage
    this.energyCost = energyCost

    this.target = "enemy"
    this.type = "attack"
  }
}
export class strike extends basicAttackCardClass {
  constructor(damage,energyCost){
    super(damage , energyCost)
    
    this.name = "Strike"
  }
}