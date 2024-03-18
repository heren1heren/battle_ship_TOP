import Ship from './shipComponent';
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
  randomPlacingShips() {
    // populating around 40 units -> one of 6 units, two of 5 units , two of 4 units three of 3 units and three of 2 units and one of 1 units
    // how to do math.random with xCor and yCor?
    // before placing every ship we need to check two conditions
    const ranDomSeed = this.height - 1;
    let xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    let yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    console.log(xCor);
    console.log(yCor);

    /**
     *  one: is random xCor and yCor is still on the board
     * two : is xCors and yCors of each ship collide with the already populated ships.
     */
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
