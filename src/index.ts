// import './style.css';
import './style.scss';
import Ship from './shipComponent';
import { Player, Computer } from './playerComponent';
import GameBoard from './gameboardComponent';
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

const player = new Player(new GameBoard(10));
const enemy = new Computer(new GameBoard(10));
enemy.gameBoard.placeShip(0, 0, new Ship(2), 'horizontal right');
// attacking logic from UI
gameBoard2.addEventListener('click', (e) => {
  if (
    e.target instanceof HTMLElement &&
    e.target.dataset.clicked !== 'true' && // why doesn't it stop in here
    e.target.classList.contains('gameboard2-cell')
  ) {
    e.target.dataset.clicked = 'true';

    // extracting xCor and yCor
    const xCor = +e.target.dataset.cell.split(',')[1];
    const yCor = +e.target.dataset.cell.split(',')[0];

    player.playTurn(enemy, xCor, yCor);

    console.log(enemy.gameBoard.map);

    console.log(enemy.gameBoard.map[yCor][xCor]);
    // displayEffect of attacking
    markingAttack(e.target, xCor, yCor);
  }
});
function markingAttack(elementTarget: HTMLElement, xCor: number, yCor: number) {
  // Extra-detail :checking if the corrsponding attack is the last attack that making the ship.isSunk() return true
  // -> toggle all cells' opacity = 0.2 that contain that ship
  // -> classList toggle e.target.classList.add('missing attack | correct attack')
  if (enemy.gameBoard.map[yCor][xCor] === 'missingAttack') {
    elementTarget.classList.add('missing-attack');
  } else {
    elementTarget.classList.add('correct-attack');
  }
}
// gameBoard2.addEventListener('click', (e) => {
//   console.log(e.target);
// });

// main loop
// while(!player.gameBoard.isFleetAllSunk() && !enemy.gameBoard.isFleetAllSunk()) {
//     // waiting for user click once
//     // -> let computer play once

// }
