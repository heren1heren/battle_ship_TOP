// import './style.css';
import './style.scss';
import Ship from './shipComponent';
import { Player, Computer } from './playerComponent';
import GameBoard from './gameboardComponent';
import { markingAttack, computerMarkingAttack } from './DOMAndUI';
const gameBoard1 = document.querySelector('#gameboard1');
const gameBoard2 = document.querySelector('#gameboard2');

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    const cell1 = document.createElement('div');
    cell1.classList.add('gameboard1-cell');
    cell1.dataset.cell = `${i},${j}`;
    gameBoard1.append(cell1);
  }
}

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    const cell2 = document.createElement('div');
    cell2.classList.add('gameboard2-cell');
    cell2.dataset.cell = `${i},${j}`;
    gameBoard2.append(cell2);
  }
}
const playerCells = document.querySelectorAll('.gameboard1-cell');
const player = new Player(new GameBoard(10));
const enemy = new Computer(new GameBoard(10));
player.gameBoard.randomPlacingShips(new Ship(6));

enemy.gameBoard.randomPlacingShips(new Ship(6));

// attacking logic from UI
gameBoard2.addEventListener(
  'click',
  (e) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.dataset.clicked !== 'true' &&
      e.target.classList.contains('gameboard2-cell')
    ) {
      e.target.dataset.clicked = 'true';

      // extracting xCor and yCor
      const xCor = +e.target.dataset.cell.split(',')[1];
      const yCor = +e.target.dataset.cell.split(',')[0];

      player.playTurn(enemy, xCor, yCor);

      console.log(enemy.gameBoard.map[yCor][xCor]);
      enemy.play(player);
      // displayEffect of attacking
      markingAttack(enemy, e.target, xCor, yCor);
      computerMarkingAttack(enemy.hitMap, playerCells);
      console.log(player.gameBoard.map);
      console.log(enemy.hitMap);
    }
  }
  //   { once: true }
);

//* what to do right now:
/***
 * *create a div that display whose turn.
 * *create main loop when the player will play first
 */

// main loop
// while ( // it breaks
//   !player.gameBoard.isFleetAllSunk() &&
//   !enemy.gameBoard.isFleetAllSunk()
// ) {
//   // waiting for user click once
//   // timeout 0.5second
//   // -> let computer play once
// }
