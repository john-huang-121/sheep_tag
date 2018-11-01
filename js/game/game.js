import Map from './map.js';
import Sheep from '../models/sheep.js';
import Farmer from '../models/farmer.js';

class Game {
  constructor(ctx, sheep_num, farmer_num) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.farmers = new Farmer(ctx);
    this.sheeps = new Sheep(ctx);
    // this.farmers = new Array(farmer_num);
    // this.sheeps = new Array(sheep_num);
    this.boxes = null;

    this.drawAll = this.drawAll.bind(this);
  }

  drawAll() {
    this.map.drawMap();
    this.sheeps.drawMove1();
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