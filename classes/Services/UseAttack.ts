import { IGetHp } from "../IServices/IGetHp";
import { IGetDamage } from "../IServices/IGetDamage";

export default class UseAttack {
    useAttack(attacking: IGetDamage, receiving: IGetHp) {
        let damage =  attacking.getDamage();
        let currentReceivingHp = receiving.getCurrentHp();
        let newReceivingHp = currentReceivingHp - damage;
        receiving.setCurrentHp(newReceivingHp);
    }
}