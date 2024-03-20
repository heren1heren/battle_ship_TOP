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
  populatingInsideGameBoard,
  returnCellArrayFromAnArray,
  resetDisplayAfterMouseOutOrAfterDropShips,
} from './DOMAndUI';
type basicDirection = 'vertical' | 'horizontal';
const gameBoard1 = document.querySelector('#gameboard1');
const gameBoard2 = document.querySelector('#gameboard2');
const shipsPlacement = document.querySelector('#ships-placement');
const directionButton = document.querySelector('.direction-button');
const startButton = document.querySelector('.start-button');
let playerStart = false;
startButton.addEventListener('click', (e) => {
  if (!player.gameBoard.hasAtLeastAShip()) {
    alert('you need to place at least one ship to start');
    return;
  }
  e.preventDefault();
  playerStart = true;
  shipsPlacement.style.cssText = 'display:none';
});
populatingInsideGameBoard(gameBoard1, 'gameboard1-cell');
populatingInsideGameBoard(gameBoard2, 'gameboard2-cell');

const playerCells = [...document.querySelectorAll('.gameboard1-cell')];
const playerCellsArr = returnCellArrayFromAnArray(playerCells);
const player = new Player(new GameBoard(10));
const enemy = new Computer(new GameBoard(10));

directionButton.addEventListener('click', () =>
  changeDirection(shipsPlacement)
);

gameBoard2.addEventListener('click', (e) => {
  if (!playerStart) {
    alert(' place ships and click the  start button to play.');
    return;
  }

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
draggables.forEach((draggable) => {
  //event
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');

    currentDraggedObject = draggable;
  });
  // event
  draggable.addEventListener('dragend', (e) => {
    const shipLength = +currentDraggedObject.dataset.length;
    let direction: basicDirection;

    // need to stop user from dragging the draggable object twice.
    if (destination.classList.contains('gameboard1-cell')) {
      // how to delete destination varible here or reset it here?
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

      player.gameBoard.placeShip(
        xCor,
        yCor,
        new Ship(shipLength),
        dynamicDirection
      );
      enemy.gameBoard.randomPlacingShips(new Ship(shipLength));
      displayOurShips(playerCells, player.gameBoard.map);

      resetAfterDrop(e.target);
    } else {
      draggable.classList.remove('dragging');
      resetAfterDropWithNoInput();
    }
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

gameBoard1.addEventListener('mouseleave', (e) => {
  // mouseleave doesn't work
  resetDisplayAfterMouseOutOrAfterDropShips(playerCellsArr);
  // console.log(playerCellsArr);
});
function resetAfterDrop(deletingElement: HTMLElement) {
  destination = undefined;
  deletingElement.style.cssText = 'display:none;';
}
function resetAfterDropWithNoInput() {
  destination = undefined;
}
// how can we prevent the player from dropping the ships outside gameboard container?
//
// we need to always update ships image inside player gameboard while the player drag or after dropping
/***
 *
 *
 
 
 * * currently reorganizing the code (postponed)
 
 *
 * * AI smart move doesn't work -> check it out again.
 *  *reviewing old code -> making it a better version by refactoring , decoupling.
 */
