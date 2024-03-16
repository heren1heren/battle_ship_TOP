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

  playRandom(opponent: Player) {
    if (this.attackTimes >= this.limitedAttackTimes) return;
    const ranDomSeed = opponent.gameBoard.height - 1;
    let xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    let yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    while (this.hitMap[yCor][xCor] !== 'new') {
      xCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
      yCor = Math.round(Math.random() * ranDomSeed - 1) + 1;
    }
    this.attackTimes++;
    this.hitMap[yCor][xCor] = 'attacked';
    opponent.gameBoard.receiveAttack(xCor, yCor);
  }
}
const player = new Player(new GameBoard(5));
const opponent = new Computer(new GameBoard(5));

test('playTurn method with an opponent game board(having a ship)', () => {
  //   player.playTurn(opponent, 3, 3);
  player.playTurn(opponent, 4, 4);
  opponent.gameBoard.placeShip(0, 0, new Ship(2), 'horizontal');
  player.playTurn(opponent, 0, 0);
  player.playTurn(opponent, 1, 0);
  player.playTurn(opponent, 2, 0);

  expect(opponent.gameBoard.getMissingAttacksCoordinates()).toStrictEqual([
    [2, 0],
    [4, 4],
  ]);
});

const computer = new Computer(new GameBoard(5));
test('computer playRandom method', () => {
  player.gameBoard.placeShip(0, 0, new Ship(2), 'vertical');
  computer.playRandom(player);
  console.log(computer.hitMap);
  console.log(player.gameBoard.map);

  expect(computer.hitMap).toBe(computer.hitMap);
});

// we are trying to create a random x and y coordinate from the range of 0 -> opponent.height
