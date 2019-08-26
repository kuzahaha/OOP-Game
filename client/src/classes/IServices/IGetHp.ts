export interface IWrapperGetHp {
  getUnitHp: IGetHp;
}

export interface IGetHp {
  fullHp: number;
  currentHp: number;

  getFullHp(): number;
  setFullHp(fullHp: number): void;
  getCurrentHp(): number;
  setCurrentHp(currentHp: number): void;
  isDead(): boolean;
}
