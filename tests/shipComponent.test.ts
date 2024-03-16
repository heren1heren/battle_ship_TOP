import sum from '../src/jestTest';
/**
 * Begin your app by creating the Ship class/factory (your choice).

    Your ‘ships’ will be objects that include their length,
     the number of times they’ve been hit and whether or not they’ve been sunk.

    REMEMBER you only have to test your object’s public interface. 
    Only methods or properties that 
    are used outside of your ‘ship’ object need unit tests.
    Ships should have a hit() function that increases the number of
     ‘hits’ in your ship.
    isSunk() should be a function that calculates
     whether or not a ship is considered sunk 
     based on its length and the number of hits it has received.

 */

class Ship {
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
test('isSunk from Ship class', () => {
  const ship = new Ship();
  expect(ship.hitTimes).toBe(0);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.hitTimes).toBe(1);
  console.log(ship);
});
