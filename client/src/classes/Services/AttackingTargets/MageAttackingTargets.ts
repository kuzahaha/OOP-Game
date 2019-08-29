const units = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];

export default class MageAttackingTargets {
  attackingTargets(id: number): number[] {
    if (units[0].includes(id)) {
      return units[0];
    } else if (units[1].includes(id)) {
      return units[1];
    } else if (units[2].includes(id)) {
      return units[2];
    } else 
      return units[3];
    }
  }

