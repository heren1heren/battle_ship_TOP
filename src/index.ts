// import './style.css';
import './style.scss';
import Ship from './shipComponent';
import { Player, Computer } from './playerComponent';
import GameBoard from './gameboardComponent';
import {
  markingAttack,
  computerMarkingAttack,
  checkingAndDisplayingAnnouncement,
} from './DOMAndUI';
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
const turnAnnouncement = document.querySelector('.turn-announcement');
const player = new Player(new GameBoard(10));

const enemy = new Computer(new GameBoard(10));
player.gameBoard.randomPlacingShips(new Ship(4));
player.gameBoard.randomPlacingShips(new Ship(3));
player.gameBoard.randomPlacingShips(new Ship(2));

enemy.gameBoard.randomPlacingShips(new Ship(4));
enemy.gameBoard.randomPlacingShips(new Ship(3));
enemy.gameBoard.randomPlacingShips(new Ship(2));

// attacking logic from UI
// let playerTurn = true;
gameBoard2.addEventListener('click', (e) => {
  //   if (!playerTurn) return;
  if (!player.gameBoard.isFleetAllSunk() && !enemy.gameBoard.isFleetAllSunk()) {
    if (
      e.target instanceof HTMLElement &&
      e.target.dataset.clicked !== 'true' &&
      e.target.classList.contains('gameboard2-cell')
    ) {
      e.target.dataset.clicked = 'true';

      // extracting xCor and yCor from document
      const xCor = +e.target.dataset.cell.split(',')[1];
      const yCor = +e.target.dataset.cell.split(',')[0];

      player.playTurn(enemy, xCor, yCor);
      // autoplay from computer
      //   turnAnnouncement.textContent = 'Computer Turn:';
      // change turn-announcement here:
      // ?  setTimeout(() => { // setTimeout does not work here
      //     // consider another way to do so
      //     turnAnnouncement.textContent = 'Player Turn:';
      //     enemy.play(player); // doesn't execute the first time and from the second time
      //     // the pausing time does not matter, enemy.play(player) always executes instantly
      //     playerTurn = true;
      //   }, Math.random() * 5000);
      enemy.play(player);
      // displayEffect of attacking
      markingAttack(enemy, e.target, xCor, yCor);
      computerMarkingAttack(enemy.hitMap, playerCells);
      // display announcement if there is a winner
      checkingAndDisplayingAnnouncement(player, enemy);
      //   playerTurn = false;
    }
  }
});
function mainLoop() {
    
}
//* what to do right now:
/***
 * *create main loop when the player will play first.
 */
