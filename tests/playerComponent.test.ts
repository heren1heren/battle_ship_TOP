/**
 * 
    Players can take turns playing the game by attacking the enemy Gameboard.
    The game is played against the computer, so make the ‘computer’ capable of making random plays. 
    The AI does not have to be smart, but it should know whether or not a given move is legal 
    (i.e. it shouldn’t shoot the same coordinate twice).
    // extra point: making the AI becomes smarter after hitting a part of any ship.
 */
import GameBoard from '../src/gameboardComponent';
import Ship from '../src/shipComponent';
export default class Player {
  gameBoard: GameBoard;
  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
  }

  playTurn(opponent: Computer, xCor: number, yCor: number) {
    opponent.gameBoard.receiveAttack(xCor, yCor);
  }
}

export class Computer {
  gameBoard: GameBoard;
  hitMap: string[][];
  attackTimes: number;
  limitedAttackTimes: number;
  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
    this.hitMap = [
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'],
    ];
    this.attackTimes = 0;
    this.limitedAttackTimes = 100;
  }
  play(player: Player) {
    /** algorithm:
     *  step 1: check if this.hitMap contains 'potential' -> playRandom() smart version
     *  else : playRandom() random version
     * step 2: logic for terminating 'potential' -> replace 'new' to 'potential' again
     *  -> if the ship.isSink() return true -> reset all  adjacent 'potential' to 'new'
     */

    // if there is a sunkShip -> potentialResetting()
    if (this.potentialChecking()) {
      this.playSmart(player);
    } else {
      this.playRandom(player);
    }
  }
  private potentialMarking(xCor: number, yCor: number) {
    if (xCor + 1 >= 0 && xCor + 1 < 5 && yCor >= 0 && yCor < 5) {
      // coordinate is on the board
      if (
        this.hitMap[yCor][xCor + 1] === 'new' &&
        this.hitMap[yCor][xCor + 1] !== 'attacked' &&
        this.hitMap[yCor][xCor + 1] !== 'attackedShip'
      )
        this.hitMap[yCor][xCor + 1] = 'potential';
    }
    if (xCor + 1 >= 0 && xCor + 1 < 5 && yCor + 1 >= 0 && yCor + 1 < 5) {
      if (
        this.hitMap[yCor + 1][xCor] === 'new' &&
        this.hitMap[yCor + 1][xCor] !== 'attacked' &&
        this.hitMap[yCor + 1][xCor] !== 'attackedShip'
      )
        this.hitMap[yCor + 1][xCor] = 'potential';
    }
    if (xCor >= 0 && xCor < 5 && yCor - 1 >= 0 && yCor - 1 < 5) {
      // coordinate is on the board
      if (
        this.hitMap[yCor - 1][xCor] === 'new' &&
        this.hitMap[yCor - 1][xCor] !== 'attacked' &&
        this.hitMap[yCor - 1][xCor] !== 'attackedShip'
      )
        this.hitMap[yCor - 1][xCor] = 'potential';
    }
    if (xCor - 1 >= 0 && xCor - 1 < 5 && yCor >= 0 && yCor < 5) {
      // coordinate is on the board
      if (
        this.hitMap[yCor][xCor - 1] === 'new' &&
        this.hitMap[yCor][xCor - 1] !== 'attacked' &&
        this.hitMap[yCor][xCor - 1] !== 'attackedShip'
      )
        this.hitMap[yCor][xCor - 1] = 'potential';
    }
  }
  private potentialResetting(xCor: number, yCor: number) {
    // if the ship length > 1
    // assumption:  looping and accessing every element of player.gameBoard.map
    // if there is a spot where instanceof Ship && that ship.isSunk()
    //return that xCors and yCors inside an array
    // looping through the array and
    // do the below
    if (this.hitMap[yCor][xCor + 1] === 'potential')
      this.hitMap[yCor][xCor + 1] = 'new';
    if (this.hitMap[yCor + 1][xCor] === 'potential')
      this.hitMap[yCor + 1][xCor] = 'new';
    if (this.hitMap[yCor - 1][xCor] === 'potential')
      this.hitMap[yCor - 1][xCor] = 'new';
    if (this.hitMap[yCor][xCor - 1] === 'potential')
      this.hitMap[yCor][xCor - 1] = 'new';
  }
  private potentialChecking() {
    //? this method does not work.

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.hitMap[i][j] === 'potential') {
          return true;
        }
      }
    }

    return false;
  }
  playSmart(opponent: Player) {
    // need to implementing how to reset potential points
    if (this.attackTimes >= this.limitedAttackTimes) return;
    const ranDomSeed = opponent.gameBoard.height - 1;
    // should refactor to return random coordinate()

    let xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    let yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    while (this.hitMap[yCor][xCor] !== 'potential') {
      xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
      yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    }
    this.attackTimes++;
    if (opponent.gameBoard.map[yCor][xCor] instanceof Ship) {
      this.hitMap[yCor][xCor] = 'attackedShip';
      this.potentialMarking(xCor, yCor);
    } else {
      this.hitMap[yCor][xCor] = 'attacked';
    }
    opponent.gameBoard.receiveAttack(xCor, yCor);
  }

  playRandom(opponent: Player) {
    if (this.attackTimes >= this.limitedAttackTimes) return;
    const ranDomSeed = opponent.gameBoard.height - 1;
    // should refactor to return random coordinate()
    let xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    let yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    while (this.hitMap[yCor][xCor] !== 'new') {
      xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
      yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    }
    this.attackTimes++;
    //marking logic
    if (opponent.gameBoard.map[yCor][xCor] instanceof Ship) {
      this.hitMap[yCor][xCor] = 'attackedShip';
      this.potentialMarking(xCor, yCor);
    } else {
      this.hitMap[yCor][xCor] = 'attacked';
    }
    console.log(xCor);
    console.log(yCor);
    return [xCor, yCor]; // doesn't suit with the function itself.

    //////
    opponent.gameBoard.receiveAttack(xCor, yCor);
  }
}
const player = new Player(new GameBoard(10));

const computer = new Computer(new GameBoard(10));

// test('play method', () => {
//   player.gameBoard.placeShip(1, 1, new Ship(2), 'horizontal right');
//   player.gameBoard.placeShip(3, 3, new Ship(3), 'horizontal left');
//   console.log(computer.hitMap);
//   console.log(player.gameBoard.map);

//   expect(1).toBe(1);
// });

computer.play(player);
