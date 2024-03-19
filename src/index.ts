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
  displayShipWhileDragging,
  returnDynamicDirection,
} from './DOMAndUI';
const gameBoard1 = document.querySelector('#gameboard1');
const gameBoard2 = document.querySelector('#gameboard2');
const shipsPlacement = document.querySelector('#ships-placement');
const directionButton = document.querySelector('.direction-button');
populatingInsideGameBoard(gameBoard1, 'gameboard1-cell');
populatingInsideGameBoard(gameBoard2, 'gameboard2-cell');
// make a function call append gameboard
function populatingInsideGameBoard(gameBoard: Element, cellClass: string) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement('div');
      cell.classList.add(cellClass);
      cell.dataset.cell = `${i},${j}`;
      gameBoard.append(cell);
    }
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
let destination: EventTarget;
// document.body.addEventListener('dragend', (e) => {
//   console.log(e.target);
// });
draggables.forEach((draggable) => {
  //event
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');

    currentDraggedObject = draggable;
  });
  // event
  draggable.addEventListener('dragend', () => {
    const shipLength = +currentDraggedObject.dataset.length;
    let direction: string;
    console.log(destination);

    if (destination) {
      const xCor = +destination.dataset.cell.split(',')[1];
      const yCor = +destination.dataset.cell.split(',')[0];
      if (
        currentDraggedObject.parentElement.classList.contains(
          'ships-placement-vertical'
        )
      ) {
        direction = 'vertical';
      } else {
        direction = 'horizontal';
      }
      const dynamicDirection = returnDynamicDirection(
        direction,
        xCor,
        yCor,
        shipLength
      );
      console.log([yCor, xCor]);
      player.gameBoard.placeShip(
        xCor,
        yCor,
        new Ship(shipLength),
        dynamicDirection
      );
      displayOurShips(playerCells, player.gameBoard.map);
    } else {
      draggable.classList.remove('dragging');
    }
    // if destination when the mouse up  is not ship-cell return
    // player.gameBoard.placeShip(xCor,yCor,new Ship(),direction)
    // else {  draggable.classList.remove('dragging'); }
  });
});
gameBoard1.addEventListener('dragover', (e) => {
  displayOurShips(playerCells, player.gameBoard.map);
  const HTMLElement = e.target; // review code latter
  const shipLength = +currentDraggedObject.dataset.length; // review code latter
  destination = e.target;
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
    displayShipWhileDragging(xCor, yCor, shipLength, direction, playerCellsArr);
    // using condition statement to only toggle off empty cell
    // by reseting all the cell before apply color ->you toggle off.
  }
});

// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 * * currently reorganizing the code
 *
 ** don't  use place ship when dragging over but just only display the placement
 * *-> create a new function displayShipWhile dragging. (solved)
 * * create a ship instance after player mouse up
 * * start to let player play the game after player click the button play.
 * *-> delete ship-placement, delete the start button
 * * -> determine how many ships player have placed -> random the same ships for computer.
 *
 * * AI smart move doesn't work -> check it out again.
 *  *reviewing old code -> making it a better version by refactoring , decoupling.
 */
