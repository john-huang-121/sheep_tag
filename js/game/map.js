//draw map with canvas here and export to game.js

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 900;
    this.y = 900;

    this.drawMap = this.drawMap.bind(this);
  }

  drawMap() {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, this.x, this.y);
  }
}