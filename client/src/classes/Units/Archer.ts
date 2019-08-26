import Unit from '../Unit';

const hp: number = 200;
const damage: number = 30;

export default class Archer extends Unit {
  constructor(id: number) {
    super(id, hp, damage);
  }
}
