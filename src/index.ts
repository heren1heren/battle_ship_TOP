// import './style.css';
import './style.scss';
import Ship from './shipComponent';
import { Player, Computer } from './playerComponent';
import GameBoard from './gameboardComponent';
import {
  markingAttack,
  computerMarkingAttack,
  checkingAndDisplayingAnnouncement,
  displayOurShips,
  changeDirection,
} from './DOMAndUI';
const gameBoard1 = document.querySelector('#gameboard1');
const gameBoard2 = document.querySelector('#gameboard2');
const shipsPlacement = document.querySelector('#ships-placement');

const directionButton = document.querySelector('.direction-button');
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
// const turnAnnouncement = document.querySelector('.turn-announcement');
const player = new Player(new GameBoard(10));

const enemy = new Computer(new GameBoard(10));
player.gameBoard.randomPlacingShips(new Ship(4));
player.gameBoard.randomPlacingShips(new Ship(3));
player.gameBoard.randomPlacingShips(new Ship(2));

enemy.gameBoard.randomPlacingShips(new Ship(4));
enemy.gameBoard.randomPlacingShips(new Ship(3));
enemy.gameBoard.randomPlacingShips(new Ship(2));
// let playerTurn = true;

//only let user play the game after placing all their ships.
// attacking logic from UI
displayOurShips(playerCells, player.gameBoard.map);
//button to change direction.
directionButton.addEventListener('click', () =>
  changeDirection(shipsPlacement)
);

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

//* what to do right now:

const draggables = document.querySelectorAll('.draggable');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    console.log(draggable);
    draggable.classList.add('dragging');
  });
  draggable.addEventListener('dragend', () =>
    draggable.classList.remove('dragging')
  );
});
gameBoard1.addEventListener('dragover', (e) => {
  // now display corresponding coordinate while dragging
  const HTMLElement = e.target;

  if (HTMLElement.classList.contains('gameboard1-cell')) {
    const xCor = +e.target.dataset.cell.split(',')[0];
    const yCor = +e.target.dataset.cell.split(',')[1];
    console.log(xCor);
    console.log(yCor);
  }
});
// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 * *
 *  let user choose coordinate by  dragging by using 'dragStart' and 'dragover'
 *  reviewing old code -> making it a better version by refactoring , decoupling.
 */
