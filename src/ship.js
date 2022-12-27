class Ship {
    constructor(_currentPort) {
      this.currentPort = _currentPort;
      console.log(_currentPort);
    //   this.numPassengers = numPassengers;
    } 
// functions:
    setSail() {
      this.currentPort = 'Dover';
    }
    shipDock(port) {
      this.currentPort = port;
    }
  }

const ship = new Ship('Dover');

ship.setSail();


module.exports = Ship;

// const ship = new Ship('Calais', 200);