export default class Box {
  constructor(ctx) {
    this.ctx = ctx;
    this.health = 100;
    this.exist = true;
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
    ctx.fillRect(100, 100, 100, 100);
    ctx.strokeRect(100, 100, 100, 100);
    ctx.strokeRect(110, 110, 80, 80);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(110, 110);
    ctx.lineTo(190, 190);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(190, 110);
    ctx.lineTo(110, 190);
    ctx.stroke();
  }
}