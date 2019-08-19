class GetDamage{
    constructor(damage:number,hp:number){
        this.damage = damage;
        this.hp= hp;
    }
    damage: number;
    hp: number; 

    attack(damage: number,hp: number):number{
        if(damage > hp){
          return  hp = 0; 
        }else{
          return  hp = hp - damage;
        }
    }
}
    