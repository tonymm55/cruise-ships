class Ship {
    constructor(startingPort) {
      this.startingPort = startingPort;
    //   this.numPassengers = numPassengers;
    } 
    setSail() {
      this.startingPort = null;
    }
  }

const ship = new Ship('Dover');

ship.setSail();


module.exports = Ship;
// const ship = new Ship('Calais', 200);