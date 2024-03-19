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
// should create a function to convert these below
const playerCells = [...document.querySelectorAll('.gameboard1-cell')];
const playerCellsArr: HTMLElement[][] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
// const  turnAnnouncement = document.querySelector('.turn-announcement');
let count = 0;
playerCells.forEach((cell, index) => {
  if (index % 10 === 0 && index !== 0) {
    count++;
  }
  playerCellsArr[count].push(cell);
});
// console.log(playerCellsArr);

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
let currentDraggedObject: Element;
draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');

    currentDraggedObject = draggable;
  });
  draggable.addEventListener(
    'dragend',
    () => draggable.classList.remove('dragging')
    // call placing ship function in here. for player
    // if destination is not ship-cell return
    // player.gameBoard.placeShip(xCor,yCor,new Ship(),direction)
    //
  );
});
gameBoard1.addEventListener('dragover', (e) => {
  const HTMLElement = e.target;
  const shipLength = +currentDraggedObject.dataset.length;
  let direction: 'vertical' | 'horizontal';
  if (
    currentDraggedObject.parentElement.classList.contains(
      'ships-placement-vertical'
    )
  ) {
    direction = 'vertical';
  } else {
    direction = 'horizontal';
  }
  if (HTMLElement.classList.contains('gameboard1-cell')) {
    let xCor = +e.target.dataset.cell.split(',')[1];
    let yCor = +e.target.dataset.cell.split(',')[0];
    // using condition statement to only toggle off empty cell
    // by reseting all the cell before apply color ->you toggle off.
    playerCells.forEach((cell) => {
      cell.classList.remove('dragging-ship-color');
    });
    playerCellsArr[yCor][xCor].classList.add('dragging-ship-color');
    // create a function to return correct direction based on xCor,yCor, and input direction
    const dynamicDirection = returnDynamicDirection(
      direction,
      xCor,
      yCor,
      shipLength
    );

    for (let i = 0; i < shipLength; i++) {
      if (dynamicDirection === 'horizontal right') {
        playerCellsArr[yCor][xCor].classList.add('dragging-ship-color');
        xCor++;
      } else if (dynamicDirection === 'horizontal left') {
        playerCellsArr[yCor][xCor].classList.add('dragging-ship-color');
        xCor--;
        //
      } else if (dynamicDirection === 'vertical down') {
        playerCellsArr[yCor][xCor].classList.add('dragging-ship-color');
        yCor++;
        //
      } else if (dynamicDirection === 'vertical up') {
        playerCellsArr[yCor][xCor].classList.add('dragging-ship-color');
        yCor--;
        //
      }
    }
    // displayShipWhileDragging(xCor, yCor, length, direction);
    //toggle color for current cell
  }
});
function returnDynamicDirection(
  direction: 'horizontal' | 'vertical',
  xCor: number,
  yCor: number,
  shipLength: number
) {
  //
  if (direction === 'horizontal' && xCor - 1 + shipLength > 9) {
    return 'horizontal left';
  } else if (direction === 'horizontal') {
    return 'horizontal right';
  }
  if (direction === 'vertical' && yCor - 1 + shipLength > 9) {
    console.log(yCor + shipLength);

    return 'vertical up';
  } else {
    console.log(yCor + shipLength);

    return 'vertical down';
  }
}
function displayShipWhileDragging(
  xCor: number,
  yCor: number,
  length: number,
  direction: 'horizontal' | 'vertical'
) {
  // displayWhileDRagging will add class 'dragging-ship-color' for
  // corresponding ship-cells
  //accessing ship-cells by 4 agurments above.
}
// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 * *
 *  let user choose coordinate by  dragging by using 'dragStart' and 'dragover' (almost solved)
 * how can we create each ship with each li element when we drag li element over gameboard 1
 *
 ** don't  use place ship when dragging over but just only display the placement
 * *-> create a new function displayShipWhile dragging.
 *
 * * AI smart move doesn't work -> check it out again.
 *  *reviewing old code -> making it a better version by refactoring , decoupling.
 */
