import React from 'react';
import './App.css';
import { UnitFactory } from './classes/UnitsFactory';
import UseAttack from './classes/Services/UseAttack';
import AttackingUser from './classes/Services/AttackingUser';

let ids = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];

let units = [
  UnitFactory.create('Archer', 0),
  UnitFactory.create('Mage', 1),
  UnitFactory.create('Archer', 2),
  UnitFactory.create('Warrior', 3),
  UnitFactory.create('Warrior', 4),
  UnitFactory.create('Warrior', 5),
  UnitFactory.create('Warrior', 6),
  UnitFactory.create('Warrior', 7),
  UnitFactory.create('Warrior', 8),
  UnitFactory.create('Archer', 9),
  UnitFactory.create('Mage', 10),
  UnitFactory.create('Archer', 11),
];

interface IState {
  isAttacked: boolean;
  attackerId: number;
  targetsIds: number[];
  isAttackingUserFirst: boolean;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAttacked: false,
      attackerId: -1,
      targetsIds: [],
      isAttackingUserFirst: true,
    };
  }
  private Fields(type: string) {
    if (type === 'Archer') {
      return 'ArcherFields';
    } else if (type === 'Warrior') {
      return 'WarriorFields';
    } else return 'MageFields';
  }

  public attacking = (event: any) => {
    let attackingUser = new AttackingUser();
    let targetId = Number(event.target.id);
    if (units[targetId].getUnitHp.isDead() === false) {
      let attacking = new UseAttack();
      if (this.state.isAttacked === true) {
        if (this.state.targetsIds.includes(targetId)) {
          let idAttackingTargets = units[this.state.attackerId].attackTargets(targetId);
          let attackingTargets = idAttackingTargets.map(id => units[id]);
          console.log(attackingTargets);
          attacking.useAttack(units[this.state.attackerId], attackingTargets);
          this.setState({ attackerId: -1, targetsIds: [], isAttacked: !this.state.isAttacked });
        } else {
          alert('Вы не можете бить этого юнита');
        }
      } else {
        console.log(attackingUser.canUserAttack(event.target.id, this.state.isAttackingUserFirst));
        console.log(event.target.id);
        console.log(this.state.isAttackingUserFirst);
        if (attackingUser.canUserAttack(targetId, this.state.isAttackingUserFirst)) {
          let targetsId = units[targetId].createTargets();
          this.setState({
            isAttackingUserFirst: !this.state.isAttackingUserFirst,
            targetsIds: targetsId,
            isAttacked: !this.state.isAttacked,
            attackerId: targetId,
          });
        }
      }
    } else alert('Этот юнит мертв');
  };
  public render() {
    const renderRows = (Id: number[]) => {
      return (
        <div className="Rows">
          {Id.map(ids => {
            return (
              <div
                className={this.Fields(units[ids].type)}
                id={ids.toString()}
                style={
                  this.state.targetsIds.includes(ids)
                    ? { backgroundColor: `rgba(${177}, ${253}, ${148}, ${1})` }
                    : ids === this.state.attackerId
                    ? { backgroundColor: 'red' }
                    : { backgroundColor: 'inherit' }
                }
                onClick={this.attacking}
              >
                {units[ids].getUnitHp.getCurrentHp()}
              </div>
            );
          })}
        </div>
      );
    };
    return <div className="Area">{ids.map(Id => renderRows(Id))}</div>;
  }
}
export default App;
