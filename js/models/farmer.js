import MovingObject from '../actions/moving_object.js';

class Farmer extends MovingObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = null;
    this.color = null;
    this.money = null;
    this.map = null;
    this.alive = true;
    this.health = 100000;
    this.damage = 100;
  }

  alive() {
    //checks living status
  }

  useAbility() {
    //throws and immobilizes target for 2 seconds
    //window.timeout?
  }

  takeDamage() {
    //receives damage and set new health
  }

  attack() {
    //deal damage to target
  }

  drawFarmer() {
    const ctx = this.ctx;

    ctx.beginPath(); //legs
    ctx.moveTo(80, 145);
    ctx.lineTo(80, 170);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 145);
    ctx.lineTo(120, 170);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath(); //arms
    ctx.moveTo(55, 75);
    ctx.lineTo(30, 75);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(145, 75);
    ctx.lineTo(170, 75);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(100, 100, 50, Math.PI, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(100, 40, 10, 15, Math.PI, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

export default Farmer;