import Mage from './Units/Mage'
import Archer from './Units/Archer'
import Warrior from './Units/Warrior'


export default class UnitsFactory {
    private getRandomInt(min:number, max:number): number{
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    create (type: string): Mage | Archer | Warrior {
      let unit ;
        if (type === 'Mage') {
        unit = new Mage(1);
      } else if (type === 'Archer') {
        unit = new Archer(2);
      } else  {
        unit = new Warrior(3);
      }
      return unit;
    }
  }
export const UnitFactory = new UnitsFactory();