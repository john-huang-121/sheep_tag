//draw map with canvas here and export to game.js

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.generateGrid();
    this.x = 900;
    this.y = 900;

    this.generateGrid = this.generateGrid.bind(this);
    this.drawMap = this.drawMap.bind(this);
  }

  generateGrid() {
    let array = new Array(9); // 9x9 deep with 10px, 10px as each grid block

    for (let i = 0; i < 9; i++) {
      array[i] = new Array();
    }

    return array;
  }

  drawMap() {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, this.x, this.y);
  }
}