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
      ['new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new'],
      ['new', 'new', 'new', 'new', 'new'],
    ];
    this.attackTimes = 0;
    this.limitedAttackTimes = 25;
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
    if (this.hitMap[yCor][xCor + 1] === 'potential')
      this.hitMap[yCor][xCor + 1] = 'new';
    if (this.hitMap[yCor + 1][xCor] === 'potential')
      this.hitMap[yCor + 1][xCor] = 'new';
    if (this.hitMap[yCor - 1][xCor] === 'potential')
      this.hitMap[yCor - 1][xCor] = 'new';
    if (this.hitMap[yCor][xCor - 1] === 'potential')
      this.hitMap[yCor][xCor - 1] = 'new';
  }
  potentialChecking() {
    //check if this.hitMap contains 'potential'
    this.hitMap.forEach((stringArr) => {
      stringArr.forEach((element) => {
        if (element === 'potential') return true;
      });
    });
    return false;
  }
  playSmart(opponent) {
    //
    if (this.attackTimes >= this.limitedAttackTimes) return;
    const ranDomSeed = opponent.gameBoard.height - 1;
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
  }

  private playRandom(opponent: Player) {
    if (this.attackTimes >= this.limitedAttackTimes) return;
    const ranDomSeed = opponent.gameBoard.height - 1;
    let xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    let yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    while (this.hitMap[yCor][xCor] !== 'new') {
      // replace typeOfAttack here
      xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
      yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    }
    this.attackTimes++;
    // marking logic
    if (opponent.gameBoard.map[yCor][xCor] instanceof Ship) {
      this.hitMap[yCor][xCor] = 'attackedShip';
      this.potentialMarking(xCor, yCor);
    } else {
      this.hitMap[yCor][xCor] = 'attacked';
    }
    opponent.gameBoard.receiveAttack(xCor, yCor);
  }
}
const player = new Player(new GameBoard(5));

const computer = new Computer(new GameBoard(5));
test('computer potentialChecking', () => {
  player.gameBoard.placeShip(0, 0, new Ship(2), 'vertical down');
  player.gameBoard.placeShip(3, 3, new Ship(3), 'vertical up');
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  console.log(computer.hitMap);

  expect(computer.potentialChecking()).toBe(true);
});
test.skip('computer play method', () => {
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  computer.play(player);
  console.log(computer.hitMap);
  console.log(player.gameBoard.map);

  expect(computer.hitMap).toBe(computer.hitMap);
});
