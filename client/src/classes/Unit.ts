import { IWrapperGetHp, IGetHp } from './IServices/IGetHp';
import { IWrapperGetDamage, IGetDamage } from './IServices/IGetDamage';
import GetHp from './Services/GetHp';
import GetDamage from './Services/GetDamage';
import { IWarriorTargets } from './IServices/IWarriorTargets';
import { IArcherTargets } from './IServices/IArcherTargets';
import { IMageTargets } from './IServices/IMageTargets';
import {TargetsFactory} from './Services/Targets'

export default class Unit implements IWrapperGetDamage, IWrapperGetHp {
  id: number;
  getUnitHp: IGetHp;
  getUnitDamage: IGetDamage;
  getTargets: IWarriorTargets|IArcherTargets|IMageTargets;
  type: string;

  constructor(id: number, hp: number, damage: number, type: string) {
    this.id = id;
    this.type = type;
    this.getUnitHp = new GetHp(hp);
    this.getUnitDamage = new GetDamage(damage);
    this.getTargets = TargetsFactory.createTargets(id,type);
  }
  getId() {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
}
