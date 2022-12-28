class Ship {
    constructor(_itinerary) {
      this.itinerary = _itinerary;
      this.currentPort = _itinerary.ports[0];
      this.previousPort = null
    // console.log(itinerary.ports[0]);
    //   this.numPassengers = numPassengers;
    } 
// methods:
    setSail() {
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

      if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
      }
      this.previousPort = this.currentPort;
      this.currentPort = null;
    }
    
    shipDock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

      this.currentPort = itinerary.ports[previousPortIndex + 1];
    }
  }

// const ship = new Ship('Dover');
// ship.setSail();

module.exports = Ship;
