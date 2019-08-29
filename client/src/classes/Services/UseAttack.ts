import { IWrapperGetHp } from '../IServices/IGetHp';
import { IWrapperGetDamage } from '../IServices/IGetDamage';

export default class UseAttack {
  useAttack(attacking: IWrapperGetDamage, receiving: IWrapperGetHp[]) {
    let damage = attacking.getUnitDamage.getDamage();
    let currentReceivingHp = receiving.map(unit => unit.getUnitHp.getCurrentHp());
    let newReceivingHp = currentReceivingHp.map(hp => (hp - damage > 0 ? hp - damage : 0));
    for (let i = 0; i < receiving.length; i++) {
      receiving[i].getUnitHp.setCurrentHp(newReceivingHp[i]);
    }
  }
}
