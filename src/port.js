class Port {
    constructor(_name) {
      this.name = _name;
      this.ships = [];
      console.log(_name);
    } 
    addShip(ship) {
      this.ships.push(ship);
    }
    removeShip(ship) {
      const index = this.ships.indexOf(ship);
      if (index !== -1) {
        this.ships.splice(index, 1);
        console.log(ship);
      }
    }
  }

const port = new Port('Dover');
const titanic = {name: 'Titanic'};
const queenMary = {name: 'Queen Mary'};

module.exports = Port;

