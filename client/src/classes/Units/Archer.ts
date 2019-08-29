import Unit from '../Unit';
import ArcherTargets from '../Services/AllTargets/ArcherTargets'
import ArcherAttackingTargets from '../Services/AttackingTargets/ArcherAttackingTargets'

const hp: number = 200;
const damage: number = 30;

export default class Archer extends Unit {
  constructor(id: number) {
    super(id, hp, damage,"Archer");
  }
  createTargets(){
    return new ArcherTargets(this.id).createTargets();
  }
  attackTargets(ids:number){
    return new ArcherAttackingTargets().attackingTargets(ids);
  }
}
