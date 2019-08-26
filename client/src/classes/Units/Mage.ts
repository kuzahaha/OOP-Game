import Unit from '../Unit';

const hp: number = 100;
const damage: number = 20;

export default class Mage extends Unit {
  constructor(id: number) {
    super(id, hp, damage);
  }
}
