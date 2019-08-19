function Game (){
    const factory = new UnitsFactory();
    let unit = [factory.create('Warrior'),factory.create('Warrior'),factory.create('Warrior'),
                factory.create('Archer'),factory.create('Archer'),factory.create('Archer'),
                factory.create('Mage'), factory.create('Mage'),factory.create('Mage')
            ];
    for  (let id = 0; id < unit.length; id++){
        unit[id].id = id;
    }   
    function setSequenceOfMoves(){
        let initiatives=[];
        for (let i = 0; i < unit.length; i++){
          initiatives.push(unit[i].initiative);
        }
        let SequenceOfMOves = initiatives.sort((a, b) => b - a);

    }
}
