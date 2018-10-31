//draw map with canvas here and export to game.js

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1000;
    this.y = 1000;

    this.makeMap = this.makeMap.bind(this);
  }

  drawMap() {
    const ctx = this.ctx;
    
    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, this.x, this.y);
  }
}