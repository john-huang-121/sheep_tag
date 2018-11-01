import MovingObject from '../actions/moving_object.js';
import Box from './box.js';

class Sheep extends MovingObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = null;
    this.color = null;
    this.money = null;
    this.map = null;
    this.alive = true;
    this.health = 100;
    this.damage = 1;
  }

  drawSheep() {
    const ctx = this.ctx;

  }

  alive() {
    //checks living status
  }

  buildBoxes() {
    //construct a box on cursor location with f key
    //only build around a certain radius of sheep
  }

  takeDamage() {
    //receives damage and set health
  }

  attack() {
    //if building, instantly destroy it
    //else do this.damage to target
  }

  drawMove1() {
    const ctx = this.ctx;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(100, 100, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(130, 95, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(128, 88, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(123, 108);
    ctx.lineTo(132, 115);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(77, 108);
    ctx.lineTo(65, 112);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(117, 114);
    ctx.lineTo(127, 120);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(82, 114);
    ctx.lineTo(72, 120);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawMove2() {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(123, 108);
    ctx.lineTo(123, 115);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(77, 108);
    ctx.lineTo(77, 115);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(100, 100, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(130, 95, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(128, 88, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(117, 114);
    ctx.lineTo(117, 125);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(82, 114);
    ctx.lineTo(82, 125);
    ctx.lineWidth = 5;
    ctx.stroke();
  }
}

export default Sheep;