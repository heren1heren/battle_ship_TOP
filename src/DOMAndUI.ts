import { Computer, Player } from './playerComponent';
import Ship from './shipComponent';
//* extracting logic functions to extract from Document web page
export function returnCellArrayFromAnArray(array: HTMLElement[]) {
  //
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
  let count = 0;
  array.forEach((cell, index) => {
    if (index % 10 === 0 && index !== 0) {
      count++;
    }
    playerCellsArr[count].push(cell);
  });
  return playerCellsArr;
}

export function populatingInsideGameBoard(
  gameBoard: Element,
  cellClass: string
) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement('div');
      cell.classList.add(cellClass);
      cell.dataset.cell = `${i},${j}`;
      gameBoard.append(cell);
    }
  }
}

//* function for marking logic
export function markingAttack(
  target: Computer,
  elementTarget: HTMLElement,
  xCor: number,
  yCor: number
) {
  // Extra-detail :checking if the corrsponding attack is the last attack that making the ship.isSunk() return true
  // -> toggle all cells' opacity = 0.2 that contain that ship
  // -> classList toggle e.target.classList.add('missing attack | correct attack')
  if (target.gameBoard.map[yCor][xCor] === 'missingAttack') {
    elementTarget.classList.add('missing-attack');
  } else {
    elementTarget.classList.add('correct-attack');
  }
}
export function computerMarkingAttack(
  // renovating it later
  computerMap: Computer['hitMap'],
  playerGameboardCells: NodeList
) {
  const cellArray: Node[][] = [[], [], [], [], [], [], [], [], [], []];
  let i = 0;
  playerGameboardCells.forEach((cell, index) => {
    if (index % 10 === 0 && index !== 0) {
      i++; // it doesn't seem to be a convention way
    }
    cellArray[i].push(cell); // it doesn't seem to be a convention way
  });
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (computerMap[i][j] === 'new' || computerMap[i][j] === 'potential')
        continue;
      if (computerMap[i][j] === 'attacked') {
        cellArray[i][j].classList.add('missing-attack');
      } else {
        cellArray[i][j].classList.add('correct-attack');
      }
    }
  }
}
//* function for announcement
export function checkingAndDisplayingAnnouncement(
  player: Player,
  enemy: Computer
) {
  if (player.gameBoard.isFleetAllSunk()) {
    const announcementText = document.querySelector('.announcement-wrapper');
    announcementText.textContent = ' you win yourself.';
    announcementText.parentElement.setAttribute('id', 'finial-announcement');
  } else if (enemy.gameBoard.isFleetAllSunk()) {
    const announcementText = document.querySelector('.announcement-wrapper');
    announcementText.parentElement.setAttribute('id', 'finial-announcement');
    announcementText.textContent =
      ' you lose yourself, hence you win yourself. ';
  }
}

//* create a function to display color blue for our ship
export function displayOurShips(
  playerGameboardCells: NodeList,
  ourMap: Array<Ship | 'empty' | 'missingAttack'>[]
) {
  const cellArray: HTMLElement[][] = [[], [], [], [], [], [], [], [], [], []];
  let i = 0;
  playerGameboardCells.forEach((cell: HTMLElement, index: number) => {
    if (index % 10 === 0 && index !== 0) {
      i++;
    }
    cellArray[i].push(cell); // it doesn't seem to be a convention way
  });
  // console.log(cellArray); // obtain cellArray

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (ourMap[i][j] === 'empty') {
      } else if (ourMap[i][j] instanceof Ship) {
        // console.log([i, j]);
        cellArray[i][j].classList.add('our-ship-color');
      }
    }
  }
}

//the function to toggle vertical placement-ships vs horizontal
export function changeDirection(shipsPlacement: Element) {
  if (shipsPlacement.classList.contains('ships-placement-horizontal')) {
    shipsPlacement.classList.remove('ships-placement-horizontal');
    shipsPlacement.classList.add('ships-placement-vertical');
  } else {
    shipsPlacement.classList.remove('ships-placement-vertical');
    shipsPlacement.classList.add('ships-placement-horizontal');
  }
}

// displaying while dragging functions
export function returnDynamicDirection(
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
export function displayShipWhileDragging(
  xCor: number,
  yCor: number,
  length: number,
  direction: 'horizontal' | 'vertical',
  gameBoardCell: HTMLElement[][]
) {
  gameBoardCell.forEach((cellArray) => {
    cellArray.forEach((cell) => {
      cell.classList.remove('dragging-ship-color');
    });
  });
  gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
  // create a function to return correct direction based on xCor,yCor, and input direction
  const dynamicDirection = returnDynamicDirection(
    direction,
    xCor,
    yCor,
    length
  );
  for (let i = 0; i < length; i++) {
    if (dynamicDirection === 'horizontal right') {
      gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
      xCor++;
    } else if (dynamicDirection === 'horizontal left') {
      gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
      xCor--;
      //
    } else if (dynamicDirection === 'vertical down') {
      gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
      yCor++;
      //
    } else if (dynamicDirection === 'vertical up') {
      gameBoardCell[yCor][xCor].classList.add('dragging-ship-color');
      yCor--;
      //
    }
  }
}
