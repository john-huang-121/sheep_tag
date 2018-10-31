# Sheep Tag

## Background and Overview
A several years ago I came across this gem of a game in a custom game lobby that was a a combination of survival,      collaboration, and stimulating. This was one of the games that inspired me to get into gaming, so I want to honor this game by recreating a simple javascript game and sharing this experience with other players.

* A javascript game inspired by the original sheep tag game in warcraft 3. In this game the player is a sheep whose goal is to avoid getting killed by the farmer and reach the end of the timer.

+ The objective of the game for sheeps is to survive for a set amount of time by building barricades and preventing farmers from killing them. Once killed, the dead sheep is sent to a jail in the center where teammates can rescue them.
Farmers just have to kill all the sheeps to win. For more overview information, refer to the link below:

(sheep tag wiki)[http://sheeptag.wikia.com/wiki/Sheep_Tag_Wiki]

## Functionality
  * Game:
    * Real-time gameplay
  * Sheeps:
    * Player can move their sheep around the map
    * Sheeps have the ability to build barricade and other objects
    * Sheeps can destroy their own barricades and objects
  * Farmers:
    * Move around the map
    * Attacks sheep and their barricades/objects

## MVP
  - [ ] Create renderable game map
  - [ ] Create sheep and farmer models
  - [ ] Create objects that will populate the map
  - [ ] Use vector library to create moveable models and objects
  - [ ] Set win conditions
  - [ ] Styling game to look amazing and play smoothly

## Architecture and Technologies
  * Vanilla Javascript for basic game logic
  * HTML5 Canvas to draw models and objects
  * howler.js to have in game music
    * Bonus: spatial audio
  * anime.js 
    * Render certain aspects of the game
    * Smooth out transitions and implement unique game graphics
  * victor.js - 2D vector library
    * implement object movement logic for sheep and farmers.
    * Allows objects to move based upon keyboard and mouse cursor inputs to create interactive gameplay

## Wireframe

![Sheep Tag Wireframe](sheep_tag_wireframe.jpg?raw=true "Sheep Tag Wireframe")

## Implementation Timeline
    
10/29/18
  - [ ] Plan, write, and submit sheep tag proposal.

10/30/18
  - [ ] Read up on how to use canvas from javascript curriculum and app academy online
  - [ ] Create game repo skeleton and project folder
  - [ ] Create game map and render

10/31/18
  - [ ] Create sheep and farmer model with basic functionality
  - [ ] Implement AI computer farmers that will hunt down players
  - [ ] Create objects (ie walls, boxes, farm) that obey collision

11/1/18
  - [ ] Render sheep, farmer, and object models
  - [ ] Implement timer/clock countdown for win condition
  - [ ] Play game to find in-game bugs

11/2/18
  - [ ] Play more to find more bugs
  - [ ] Fix game bugs
  - [ ] Improve model look
  - [ ] Style page

11/3/18
  - [ ] Check over MVPs and complete as necessary
  - [ ] Create more object models with unique qualities to improve gameplay
  - [ ] Add new objects into the game and test for bugs
  
11/4/18
  - [ ] Game test and finish up project
  - [ ] Find a server to store production game.