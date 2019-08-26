import { IGetHp } from '../IServices/IGetHp';

export default class GetHp implements IGetHp {
  fullHp: number;
  currentHp: number;
  constructor(fullHp: number, currentHp?: number) {
    this.fullHp = fullHp;
    this.currentHp = currentHp ? currentHp : fullHp;
  }

  getFullHp(): number {
    return this.fullHp;
  }

  setFullHp(fullHp: number): void {
    this.fullHp = fullHp;
  }
  getCurrentHp(): number {
    return this.currentHp;
  }

  setCurrentHp(currentHp: number): void {
    this.currentHp = currentHp;
  }
  isDead(): boolean {
    return this.currentHp === 0;
  }
}
