import _ from 'lodash';
import './style.css';
import Game from './game/game.js';

// import Icon from './icon.png';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("screen");
  const ctx = canvas.getContext("2d");

  let game = new Game(ctx);
    
    // Add the image to our existing div.
    // var myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
  
  }
);