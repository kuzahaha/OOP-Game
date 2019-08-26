import Unit from '../Unit';


const hp: number = 300;
const damage: number = 30;


export default class Warrior extends Unit  {
  constructor(id: number) {
    super(id, hp, damage);
  }
}
