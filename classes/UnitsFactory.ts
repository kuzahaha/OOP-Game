import Mage from '../classes/Units/Mage'
import Archer from '../classes/Units/Archer'
import Warrior from '../classes/Units/Warrior'

export default class UnitsFactory {
    private getRandomInt(min, max): number{
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    create (type) {
      let unit;
        if (type === 'Mage') {
        unit = new Mage(1);
      } else if (type === 'Archer') {
        unit = new Archer(2);
      } else if (type === 'Warrior') {
        unit = new Warrior(3);
      }
      return unit;
    }
  }