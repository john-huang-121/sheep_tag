// import Sheep from "../models/sheep.js";
// import Box from "../models/box.js";

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.generateGrid();
    this.whereSheep = [0,0];
    this.x = 900;
    this.y = 900;

    this.generateGrid = this.generateGrid.bind(this);
    this.updateSheepLoc = this.updateSheepLoc.bind(this);
    this.drawMap = this.drawMap.bind(this);
  }

  generateGrid() {
    let array = new Array(10); // 10 deep with 10px, 10px as each grid block

    for (let i = 0; i < 10; i++) {
      array[i] = new Array(10);

      for (let j = 0; j < 10; j++) {
        array[i][j] = null;
      }
    }

    return array;
  }

  updateSheepLoc(x, y) {

    if ((this.whereSheep[0] + x) < 0 || (this.whereSheep[0] + x) > 9) {
      this.whereSheep[0] = this.whereSheep[0];
    } else {
      this.whereSheep[0] = this.whereSheep[0] + x;
    }

    if ((this.whereSheep[1] + y) < 0 || (this.whereSheep[1] + y) > 9) {
      this.whereSheep[1] = this.whereSheep[1];
    } else {
      this.whereSheep[1] = this.whereSheep[1] + y;
    }

    this.grid = this.grid.map(function (block, i) {
      block = block.map(function (innerGrid, j) {

        innerGrid = null;

        return innerGrid;
      });

      return block;
    });

    return this.whereSheep; 
  }

  drawMap() {
    const ctx = this.ctx;

    
    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, this.x, this.y);

    //testing purposes
    ctx.clearRect(0, 0, 90, 90);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 90, 90);

    ctx.clearRect(810, 810, 900, 900);
    ctx.fillStyle = 'blue';
    ctx.fillRect(810, 810, 900, 900);
  }
}