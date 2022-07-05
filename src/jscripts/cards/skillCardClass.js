export class basicSkillCardClass{
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
  }
  play(){
    console.log(`${this.name} add 5 block`);
  }
}

export class card extends basicSkillCardClass{
  constructor(energyCost){
    this.energyCost = energyCost

    this.name = ""
  }
  play(){
    console.log(`${this.name}`);
  }
}