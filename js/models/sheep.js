import MovingObject from '../actions/moving_object.js';
import Box from './box.js';

class Sheep extends MovingObject {
  constructor() {
    this.player = null;
    this.color = null;
    this.money = null;
    this.map = null;
    this.alive = true;
    this.health = 100;
    this.damage = 1;
  }

  alive() {
    //checks living status
  }

  buildBoxes() {
    //construct a box on cursor location with f key
    //only build around a certain radius of sheep
  }

  takeDamage() {
    //receives damage and set health
  }

  attack() {
    //if building, instantly destroy it
    //else do this.damage to target
  }

}