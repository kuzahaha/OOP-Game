import React from 'react';
import './App.css';
import {UnitFactory} from './classes/UnitsFactory';
import UseAttack from './classes/Services/UseAttack';


let user1 = UnitFactory.create('Warrior');
let user2 = UnitFactory.create('Warrior');


class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {isAttacked: false};
  }

  public attacking = () => {
    let attacking = new UseAttack();
    attacking.useAttack(user1,user2);
    this.setState({isAttacked: !true});

 }
  public render(){
  // let units = [
  //   UnitFactory.create('Archer'),UnitFactory.create('Archer'),UnitFactory.create('Archer'),
  //   UnitFactory.create('Archer'),UnitFactory.create('Archer'),UnitFactory.create('Archer'),
  //   UnitFactory.create('Archer'),UnitFactory.create('Archer'),UnitFactory.create('Archer')
  // ];


  return (
    <div className="Area">
     <div className= "Rows"><div className = "Fields" id ="1" onClick={this.attacking}>{user1.getUnitHp.getCurrentHp()}</div ><div className = "Fields" id="2">{user2.getUnitHp.getCurrentHp()}</div><div className = "Fields"></div></div>
     <div className= "Rows"><div className = "Fields" ></div ><div className = "Fields"></div><div className = "Fields"></div></div>
     <div className= "Rows"><div className = "Fields" ></div ><div className = "Fields"></div><div className = "Fields"></div></div>
     <br/>
     <div className= "Rows"><div className = "Fields" ></div ><div className = "Fields"></div><div className = "Fields"></div></div>
     <div className= "Rows"><div className = "Fields" ></div ><div className = "Fields"></div><div className = "Fields"></div></div>
     <div className= "Rows"><div className = "Fields" ></div ><div className = "Fields"></div><div className = "Fields"></div></div>
    </div>
  );
}
}
export default App;
