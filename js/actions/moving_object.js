
class MovingObject {
  constructor() {
    this.x = null;
    this.y = null;
  }

  move() {
    //wasd movement key
  }

  movingAgainstObject() {
    //cannot move through solid objects
  }

  cursorRightClick() {
    //on click, sets a move command toward that location
  }

  cursorLeftClick() {
    //select or view clicked target
  }
}

export default MovingObject;