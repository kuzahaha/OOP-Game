import React from 'react';
import './App.css';
import { UnitFactory } from './classes/UnitsFactory';
import UseAttack from './classes/Services/UseAttack';

let ids = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];

let units = [
  UnitFactory.create('Archer', 0),
  UnitFactory.create('Archer', 1),
  UnitFactory.create('Archer', 2),
  UnitFactory.create('Archer', 3),
  UnitFactory.create('Archer', 4),
  UnitFactory.create('Archer', 5),
  UnitFactory.create('Warrior', 6),
  UnitFactory.create('Warrior', 7),
  UnitFactory.create('Warrior', 8),
  UnitFactory.create('Warrior', 9),
  UnitFactory.create('Warrior', 10),
  UnitFactory.create('Warrior', 11),
];

interface IState {
  isAttacked: boolean;
  attackerId: number;
  targetsIds: number[];
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAttacked: false,
      attackerId: -1,
      targetsIds: [],
    };
  }

  public attacking = (event: any) => {
    if (units[event.target.id].getUnitHp.isDead() === false) {
      let attacking = new UseAttack();
      if (this.state.isAttacked === true) {
        console.log(event.target.id);
        console.log(this.state.targetsIds);
        if (this.state.targetsIds.includes(Number(event.target.id))) {
          attacking.useAttack(units[this.state.attackerId], units[event.target.id]);
          this.setState({ attackerId: -1, targetsIds: [], isAttacked: !this.state.isAttacked });
        } else {
          alert('Вы не можете бить этого юнита');
        }
      } else {
        let targetsId = units[event.target.id].getTargets.createTargets;
        this.setState({
          targetsIds: targetsId,
          isAttacked: !this.state.isAttacked,
          attackerId: Number(event.target.id),
        });
      }
    } else alert('this unit is dead');
  };
  public render() {
    const renderRows = (Id: number[]) => {
      return (
        <div className="Rows">
          {Id.map(ids => {
            if (ids === this.state.attackerId) {
              return (
                <div
                  className="Fields"
                  id={ids.toString()}
                  style={{ backgroundColor: 'red' }}
                  onClick={this.attacking}
                >
                  {units[ids].getUnitHp.getCurrentHp()}
                </div>
              );
            } else if (this.state.targetsIds.includes(ids)) {
              return (
                <div
                  className="Fields"
                  id={ids.toString()}
                  style={{ backgroundColor: `rgba(${177}, ${253}, ${148}, ${1})` }}
                  onClick={this.attacking}
                >
                  {units[ids].getUnitHp.getCurrentHp()}
                </div>
              );
            } else {
              return (
                <div
                  className="Fields"
                  id={ids.toString()}
                  style={{ backgroundColor: 'inherit' }}
                  onClick={this.attacking}
                >
                  {units[ids].getUnitHp.getCurrentHp()}
                </div>
              );
            }
          })}
        </div>
      );
    };
    return <div className="Area">{ids.map(Id => renderRows(Id))}</div>;
  }
}
export default App;
