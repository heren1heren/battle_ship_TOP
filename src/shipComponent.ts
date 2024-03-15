export default class Ship {
  length: number;
  hitTimes: number;
  isSunkStatus: boolean;
  constructor(length: number = 1) {
    this.length = length;
    this.hitTimes = 0;
    this.isSunkStatus = false;
  }
  hit() {
    if (this.hitTimes < this.length) this.hitTimes++;
    if (this.length > this.hitTimes) {
      this.isSunkStatus = false;
    } else {
      this.isSunkStatus = true;
    }
  }
  isSunk() {
    return this.isSunkStatus;
  }
}
