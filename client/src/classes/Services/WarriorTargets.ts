export default class WarriorTargets {
  id: number;
  constructor(id: number) {
      this.id=id
  }
  createTargets(): number[] {
    if (this.id === 3) {
      return [6, 7];
    } else if (this.id === 4) {
      return  [6, 7, 8];
    } else if (this.id === 5) {
      return  [7, 8];
    } else if (this.id === 6) {
      return [3, 4];
    } else if (this.id === 7) {
      return  [3, 4, 5];
    } else {
      return  [4, 5];
    }
  }
}
