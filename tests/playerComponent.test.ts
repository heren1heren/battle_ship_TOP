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

  playTurn(opponentGameBoard: GameBoard, xCor: number, yCor: number) {
    opponentGameBoard.receiveAttack(xCor, yCor);
  }
}

const player = new Player(new GameBoard(5));
const opponent = new GameBoard(5);
test('playTurn method with an opponent game board', () => {
  //   player.playTurn(opponent, 3, 3);
  player.playTurn(opponent, 4, 4);
  expect(opponent.getMissingAttacksCoordinates()).toStrictEqual([[4, 4]]);
});
test('playTurn method with an opponent game board(having a ship)', () => {
  //   player.playTurn(opponent, 3, 3);
  player.playTurn(opponent, 4, 4);
  opponent.placeShip(0, 0, new Ship(2), 'horizontal');
  player.playTurn(opponent, 0, 0);

  //   player.playTurn(opponent, 1, 0);
  opponent.receiveAttack(0, 0);
  console.log(opponent.map[1][0]);

  expect(opponent.getMissingAttacksCoordinates()).toStrictEqual([[4, 4]]);
});
