import { IWrapperGetHp } from "../IServices/IGetHp";
import { IWrapperGetDamage } from "../IServices/IGetDamage";

export default class UseAttack {
    
    useAttack(attacking: IWrapperGetDamage, receiving: IWrapperGetHp,) {
        let damage =  attacking.getUnitDamage.getDamage();
        let currentReceivingHp = receiving.getUnitHp.getCurrentHp();
        let newReceivingHp = (currentReceivingHp - damage) > 0 ? (currentReceivingHp - damage) : 0;
        receiving.getUnitHp.setCurrentHp(newReceivingHp);
        
    }
}