import Map from './map.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.farmers = [];
    this.sheeps = [];
    this.boxes = [];
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