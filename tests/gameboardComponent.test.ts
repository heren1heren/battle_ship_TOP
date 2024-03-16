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
export default class GameBoard {
  height: number;
  width: number;
  size: number;
  map: Array<Ship | 'empty' | 'missingAttack'>[];
  constructor(height: number = 10) {
    this.height = height; // game board contains height and width to create a grid display.
    this.width = this.height;
    this.size = this.height * this.height;
    this.map = [
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
    ];
  }

  placeShip(
    xCor: number,
    yCor: number,
    newShip: Ship,
    direction:
      | 'horizontal left'
      | 'vertical down'
      | 'horizontal right'
      | 'vertical up'
  ) {
    // xCor and yCor are input from User Interface
    if (this.map[yCor][xCor] !== 'empty') return;

    this.map[yCor][xCor] = newShip;

    for (let i = 0; i < newShip.length; i++) {
      if (direction === 'horizontal right') {
        this.map[yCor][xCor] = newShip;
        xCor++;
      } else if (direction === 'horizontal left') {
        this.map[yCor][xCor] = newShip;
        xCor--;
        //
      } else if (direction === 'vertical down') {
        this.map[yCor][xCor] = newShip;
        yCor++;
        //
      } else if (direction === 'vertical up') {
        this.map[yCor][xCor] = newShip;
        yCor--;
        //
      }
    }
  }
  receiveAttack(xCor: number, yCor: number) {
    //[UI] class need to prevent receiveAttach when there was an attack or missing shot  in this coordinate already.
    //  if (xCor > this.height || yCor > this.width) return;

    if (this.map[yCor][xCor] === 'empty') {
      this.map[yCor][xCor] = 'missingAttack';
      // record coordinate of the missed shot
      // [UI] display missed shot
    } else if (this.map[yCor][xCor] instanceof Ship) {
      this.map[yCor][xCor].hit();
    }
  }
  //Game boards should keep track of missed attacks so they can display them properly.
  getMissingAttacksCoordinates() {
    const arr: number[][] = [];
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.map[i][j] === 'missingAttack') {
          arr.push([j, i]);
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
const gameBoard = new GameBoard(10);
gameBoard.placeShip(1, 1, new Ship(2), 'horizontal right');
test('isFleetAllSunk() test', () => {
  expect(gameBoard.isFleetAllSunk()).toBe(false);
});

test('isFleetAllSunk() test for true return', () => {
  gameBoard.receiveAttack(1, 1);
  gameBoard.receiveAttack(2, 1);
  expect(gameBoard.isFleetAllSunk()).toBe(true);
});
