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
} from './DOMAndUI';
type basicDirection = 'vertical' | 'horizontal';
const gameBoard1 = document.querySelector('#gameboard1');
const gameBoard2 = document.querySelector('#gameboard2');
const shipsPlacement = document.querySelector('#ships-placement');
const directionButton = document.querySelector('.direction-button');
const startButton = document.querySelector('.start-button');
let playerStart = false;
startButton.addEventListener('click', (e) => {
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

//only let user play the game after placing all their ships.
// attacking logic from UI
//button to change direction.
directionButton.addEventListener('click', () =>
  changeDirection(shipsPlacement)
);

gameBoard2.addEventListener('click', (e) => {
  if (!playerStart) {
    alert('placeeeee at least one ship and click start button');
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
 ** implementing the condition when player can start to play the game
 ** create a start button that will let the user start the game.
 * * currently reorganizing the code (postponed)
 * * start to let player play the game after player click the button play.
 * *-> delete ship-placement, delete the start button
 * * -> determine how many ships player have placed -> random the same ships for computer.
 *
 * * AI smart move doesn't work -> check it out again.
 *  *reviewing old code -> making it a better version by refactoring , decoupling.
 */
