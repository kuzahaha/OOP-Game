import { IGetHp } from "./IServices/IGetHp";
import { IGetDamage } from "./IServices/IGetDamage";
import GetHp from '../classes/Services/GetHp';
import GetDamage from '../classes/Services/GetDamage';


//вопрос как сделать интерфейс для экземпляра а то каждый раз требует все поле определить
export default class Unit implements IGetDamage,IGetHp{
   id : number;
   getUnitHp : IGetHp;
   getUnitDamage: IGetDamage;

   constructor(id: number,hp: number,damage: number){ 
      this.id = id;
      this.getUnitHp = new GetHp(hp);
      this.getUnitDamage = new GetDamage(damage);
   }
   getId(){
      return this.id;
   }
   setId(id: number){
      this.id = id;
   }
}

