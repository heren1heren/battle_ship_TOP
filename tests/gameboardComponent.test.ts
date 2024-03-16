/**
 * 
    Note that we have not yet created any User Interface. We should know our code is coming together by running the tests.
    You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.



    Game board should be able to place ships at specific coordinates by calling the ship factory function.
    
    Game boards should have a receiveAttack function
    that takes a pair of coordinates, determines whether or not 
    the attack hit a ship and then sends the ‘hit’ function to the correct ship, 
    or records the coordinates of the missed shot.
    
        Game boards should be able to report whether or not all of their ships have been sunk.

    
    * 
 */
import Ship from '../src/shipComponent';
class GameBoard {
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
const gameBoard = new GameBoard(5);
gameBoard.placeShip(0, 0, 2, 'horizontal');
gameBoard.placeShip(2, 0, 3, 'horizontal');
gameBoard.placeShip(3, 3, 2, 'vertical');

test('isFleetAllSunk() test', () => {
  expect(gameBoard.isFleetAllSunk()).toBe(false);
});

test('isFleetAllSunk() test for true return', () => {
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(1, 0);
  gameBoard.receiveAttack(2, 0);
  gameBoard.receiveAttack(3, 0);
  gameBoard.receiveAttack(4, 0);
  gameBoard.receiveAttack(3, 3);
  gameBoard.receiveAttack(3, 4);

  expect(gameBoard.isFleetAllSunk()).toBe(true);
});
