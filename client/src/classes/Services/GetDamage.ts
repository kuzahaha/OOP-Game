export default class GetDamage {
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }

  getDamage() {
    return this.damage;
  }

  setDamage(damage: number) {
    this.damage = damage;
  }
}
