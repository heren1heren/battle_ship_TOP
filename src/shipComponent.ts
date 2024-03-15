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
  }
  isSunk() {
    if (this.length > this.hitTimes) {
      return (this.isSunkStatus = false);
    }
    return (this.isSunkStatus = true);
  }
}
