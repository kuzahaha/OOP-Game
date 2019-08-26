import WarriorTargets from './WarriorTargets';
import ArcherTargets from './ArcherTargets';
import MageTargets from './MageTargets';

export default class Targets {
  createTargets( id: number,type: string) {
    let targets;
    if (type === 'Warrior') {
      targets = new WarriorTargets(id);
    } else if (type === 'Archer') {
      targets = new ArcherTargets(id);
    } else {
      targets = new MageTargets(id);
    }
    return targets;
  }
}
export const TargetsFactory = new Targets();