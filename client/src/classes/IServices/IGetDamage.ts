export interface IWrapperGetDamage{
  getUnitDamage: IGetDamage;
}
export interface IGetDamage{
    damage: number;
      getDamage(): number;
      setDamage(damage: number): void;
  }
      