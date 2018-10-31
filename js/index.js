import _ from 'lodash';
import './style.css';
import Game from './game/game.js';

// import Icon from './icon.png';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-screen");
  canvas.width = 900;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");

  
  // ctx.clearRect(0, 0, 900, 900);
  // ctx.fillStyle = 'darkgreen';
  // ctx.fillRect(0, 0, 900, 900);

  let game = new Game(ctx).drawAll();
    
    // Add the image to our existing div.
    // var myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
  
  }
);