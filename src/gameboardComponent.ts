import Ship from '../src/shipComponent';
export default class GameBoard {
  height: number;
  width: number;
  size: number;
  map: Array<Ship | 'empty' | 'missingAttack'>[];
  constructor(height: number = 0) {
    this.height = height; // game board contains height and width to create a grid display.
    this.width = this.height;
    this.size = this.height * this.height;
    this.map = [
      ['empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty'],
    ];
  }

  placeShip(xCor: number, yCor: number, shipLength, direction) {
    // xCor and yCor are input from User Interface
    if (this.map[xCor][yCor] !== 'empty') return;
    const newShip = new Ship(shipLength);

    this.map[xCor][yCor] = newShip;
    console.log(shipLength);

    for (let i = 0; i < shipLength; i++) {
      if (direction === 'horizontal') {
        this.map[xCor][yCor] = newShip;
        xCor++;
      } else if (direction === 'vertical') {
        this.map[xCor][yCor] = newShip;
        yCor++;
        //
      }
    }
  }
  receiveAttack(xCor: number, yCor: number) {
    //[UI] class need to prevent receiveAttach when there was an attack or missing shot  in this coordinate already.
    //  if (xCor > this.height || yCor > this.width) return;
    if (this.map[xCor][yCor] === 'empty') {
      this.map[xCor][yCor] = 'missingAttack';
      // record coordinate of the missed shot
      // [UI] display missed shot
    } else if (this.map[xCor][yCor] instanceof Ship) {
      this.map[xCor][yCor].hit();
    }
  }
  //Game boards should keep track of missed attacks so they can display them properly.
  getMissingAttacksCoordinates() {
    const arr: number[][] = [];
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.map[i][j] === 'missingAttack') {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }
  //    Game boards should be able to report whether or not all of their ships have been sunk.
  isFleetAllSunk() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.map[i][j] instanceof Ship) {
          const currentShip = this.map[i][j];
          //  console.log(currentShip);
          if (currentShip.isSunk() === false) return false;
        }
      }
    }
    return true;
  }
}
