import Mage from './Units/Mage';
import Archer from './Units/Archer';
import Warrior from './Units/Warrior';

export default class UnitsFactory {
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  create(type: string, id:number): Mage | Archer | Warrior {
    let unit;
    if (type === 'Mage') {
      unit = new Mage(id);
    } else if (type === 'Archer') {
      unit = new Archer(id);
    } else {
      unit = new Warrior(id);
    }
    return unit;
  }
}
export const UnitFactory = new UnitsFactory();
