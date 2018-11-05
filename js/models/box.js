export default class Box {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.health = 100;
    this.exist = true;
    this.x = x;
    this.y = y;
  }

  destroyed() {
    //checks if its health is 0
  }

  takeDamage() {
    //decrements health by damage
  }

  drawBox() {
    const ctx = this.ctx;

    ctx.fillStyle = "#f4b241";
    ctx.fillRect(this.x, this.y, 50, 50);
    ctx.strokeRect(this.x, this.y, 50, 50);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 5, this.y + 5);
    ctx.lineTo(this.x + 45, this.y + 45);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 45, this.y + 5);
    ctx.lineTo(this.x + 5, this.y + 45);
    ctx.stroke();
  }
}