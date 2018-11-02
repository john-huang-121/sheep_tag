import Map from './map.js';
import Sheep from '../models/sheep.js';
import Farmer from '../models/farmer.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    // this.farmers = new Farmer(ctx);
    this.sheeps = new Sheep(ctx);
    // this.farmers = new Array(farmer_num);
    // this.sheeps = new Array(sheep_num);
    this.boxes = null;

    this.drawAll = this.drawAll.bind(this);
  }
 
  drawAll() {
    this.map.drawMap();
    this.sheeps.drawSheep();
  }

  mapKey(e) {
    const ctx = this.ctx;
    const moves = {
      // "87": [0, -2], //w
      // "65": [-2, 0], //a
      // "83": [0, 2], //s
      // "68": [2, 0], //d
      "119": [0, -10], //w
      "97": [-10, 0], //a
      "115": [0, 10], //s
      "100": [10, 0], //d
    };

    const pressedKey = e.keyCode;
    if (pressedKey === 119 || pressedKey === 97 ||
       pressedKey === 115 || pressedKey === 100) {
        this.sheeps.moveSheep(
        moves[pressedKey][0],
        moves[pressedKey][1]
      );
    }
    this.drawAll();
  }

  addSheep() {

  }

  addFarmer() {

  }

  addBoxes() {

  }

  allObjects() {
    return [].concat(this.farmers, this.sheeps, this.boxes);
  }

  checkLiving() {
    //checks whether models are alive or dead. If dead, remove from game?
  }

  spawnCenter() {
    //spawns in the center for both sheep and farmer
  }

  timeOutCounter() {
    //set a timer to spawn farmer so sheep can have head start
  }

  checkWinTimer() {
    //if game timer reaches 0, sheeps win.
    //if game timer has time left and all sheeps are dead, farmers win
  }
}

export default Game;