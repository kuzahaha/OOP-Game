const firstUserUnits = [0,1,2,3,4,5];
const secondUserUnits = [6,7,8,9,10,11];
export default class ArcherTargets {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
  createTargets(): number[] {
    if ((firstUserUnits.includes(this.id))) {
      return secondUserUnits;
    } else {
      return firstUserUnits;
    }
  }
}
