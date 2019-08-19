class UnitsFactory {
    private getRandomInt(min, max): number{
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    create (type) {
      let unit;
        if (type === 'Mage') {
        unit = new Mage(100,15,this.getRandomInt(20,25),this.getRandomInt(1,5))
      } else if (type === 'Archer') {
        unit = new Archer(150,20,this.getRandomInt(15,25),this.getRandomInt(1,10))
      } else if (type === 'Warrior') {
        unit = new Warrior(300,30,this.getRandomInt(10,25),this.getRandomInt(1,15))
      }
      return unit;
    }
  }