
import Unit from '../Unit';

const hp=200;
const damage=30;

export default class  Mage extends Unit {
    
    constructor(id:number) {
        super(id,hp,damage);
    }
}
