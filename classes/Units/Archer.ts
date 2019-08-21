import Unit from '../Unit';

const hp=200;
const damage=30;

export default class Archer extends Unit {
    
    constructor(id:number) {
        super(id,hp,damage);
    }
}
