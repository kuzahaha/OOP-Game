import Unit from '../Unit';
import WarriorTargets from '../Services/AllTargets/WarriorTargets';
import WarriorAttackingTargets from '../Services/AttackingTargets/WarriorAttackingTargets'

const hp: number = 300;
const damage: number = 30;


export default class Warrior extends Unit  {
  constructor(id: number) {
    super(id, hp, damage,"Warrior");
  }
  createTargets(){
    return new WarriorTargets(this.id).createTargets();
  }
  attackTargets(ids:number){
    return new WarriorAttackingTargets().attackingTargets(ids);
  }
}
