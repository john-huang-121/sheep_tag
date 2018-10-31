import MovingObject from '../actions/moving_object.js';

class Farmer extends MovingObject {
  constructor() {
    this.player = null;
    this.color = null;
    this.money = null;
    this.map = null;
    this.alive = true;
    this.health = 100000;
    this.damage = 100;
  }

  alive() {
    //checks living status
  }

  useAbility() {
    //throws and immobilizes target for 2 seconds
    //window.timeout?
  }

  takeDamage() {
    //receives damage and set new health
  }

  attack() {
    //deal damage to target
  }
}