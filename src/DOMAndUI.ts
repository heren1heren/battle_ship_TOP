import { Computer, Player } from './playerComponent';
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
  const cellArray: HTMLElement[][] = [[], [], [], [], [], [], [], [], [], []];
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
