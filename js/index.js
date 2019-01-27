import _ from 'lodash';
import './style.css';
import Game from './game/game.js';

// import Icon from './icon.png';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-screen");
  canvas.width = 900;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");
  
  let game = new Game(ctx, 1, 1);
  game.drawAll();
  game.setupGame();
  window.addEventListener("keypress", (e) => game.mapKey(e));

  }
);
