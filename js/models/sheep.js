import MovingObject from '../actions/moving_object.js';
import Box from './box.js';
const Victor = require("victor");

class Sheep {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = null;
    this.color = null;
    this.money = null;
    this.map = null;
    this.alive = true;
    this.health = 100;
    this.damage = 1;
    this.x = 45;
    this.y = 45;
    this.count = 1;

  }

  drawSheep() {
    if (this.count % 2 === 0) {
      this.drawMove1();
    } else {
      this.drawMove2();
    }
    this.count += 1;
  }

  moveSheep(moveX, moveY) {
    if (this.x + moveX >= 0 && this.x + moveX <= 900) {
      this.x += moveX;
    }

    if (this.y + moveY >= 0 && this.y + moveY <= 900) {
      this.y += moveY;
    }
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
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x + 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x + 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 32, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 35, this.y + 12);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 27, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 28, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawMove2() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.strokeStyle = "black";

    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x + 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x + 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 17, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 18, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();
  }
}

export default Sheep;