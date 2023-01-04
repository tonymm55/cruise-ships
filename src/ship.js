class Ship {
    constructor(_itinerary) {
      this.itinerary = _itinerary;
      this.currentPort = _itinerary.ports[0];
      this.previousPort = null
      this.currentPort.addShip(this);
    } 
// methods:
    setSail() {
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

      if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
      }
      // this.currentPort.ships = this.currentPort.ships.filter((ship) => 
      //   ship !== this);
      this.currentPort.removeShip(this);
      this.previousPort = this.currentPort;
      this.currentPort = null;
    }
    
    shipDock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    }
  };

module.exports = Ship;
