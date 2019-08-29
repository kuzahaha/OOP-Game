import Unit from '../Unit';
import MageTargets from '../Services/AllTargets/MageTargets'
import MageAttackingTargets from '../Services/AttackingTargets/MageAttackingTargets'
const hp: number = 100;
const damage: number = 20;

export default class Mage extends Unit {
  constructor(id: number) {
    super(id, hp, damage,"Mage");
  }

  createTargets(){
    return new MageTargets(this.id).createTargets();
  }
  attackTargets(ids:number){
    return new MageAttackingTargets().attackingTargets(ids);
  }
}
