let ids = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];
let user1 = [...ids[0], ...ids[1]];
let user2 = [...ids[2], ...ids[3]];

export default class AttackingUser {
  canUserAttack(unitId: number, isUser1: boolean) {
    if (isUser1 === true && user1.includes(unitId)) {
      return true;
    } else if (isUser1 === false && user2.includes(unitId)) {
      return true;
    } else {
      return false;
    }
  }
}
