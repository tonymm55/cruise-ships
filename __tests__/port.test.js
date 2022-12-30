const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary')

describe('Port constructor',() => {
  describe('Ships with ports', () => {
  let port;

  beforeEach(() => {
    port = new Port('Dover');
  });

    it('can be instantiated', () => {
      // const port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);

      expect(ship).toBeInstanceOf(Object);
    });
    
    it('has a current port', () => {
      const port = new Port('name');

      expect(port.name).toBe('name');
    });

    it('can add a ship', () => {
      // const port = new Port('Dover');
      const ship = {};

      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
      // const port = new Port('Dover');
      const titanic = {};
      const queenMary = {};

      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});