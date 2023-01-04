/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
  describe('Ships with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    // let port;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Dover',
        ships: []
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Calais',
        ships: []
      };
      port = new Port('Dover'); 
      // dover = new Port('Dover'); replaced with spies above.
      // calais = new Port('Calais'); replaced with spies above.
      itinerary = new Itinerary ([dover, calais]);
      ship = new Ship(itinerary);
    });

    it('Ship can be instantiated', () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);

      expect(ship).toBeInstanceOf(Object);
    });
 
    it('Ship has a starting port', () => {
      // const ship = new Ship('Dover');
      // const dover = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary); //cannot delete this line, test fails - why??

      expect(ship.currentPort).toBe(port);
    });

    it('Ship can set sail', () => {
      // const dover = new Port('Dover');
      // const calais = new Port('Calais');
      // const itinerary = new Itinerary([dover, calais]);
      const ship = new Ship(itinerary);
      
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      // expect(dover.ships).not.toContain(ship); Replaced with a Spy.
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });

    it('Ship can dock at a different port', () => {
      // const dover = new Port ('Dover');
      // const calais = new Port('Calais');
      // const itinerary = new Itinerary([dover, calais]);
      // const ship = new Ship(itinerary);

      ship.setSail();
      ship.shipDock();
    
      expect(ship.currentPort).toBe(calais);
      // expect(calais.ships).toContain(ship);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it('Ship can\'t sail further than its itinerary', () => {
      // const dover = new Port('Dover');
      // const calais = new Port('Calais');
      // const itinerary = new Itinerary([dover, calais]);
      // const ship = new Ship(itinerary);

      ship.setSail();
      ship.shipDock();

      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    
    it('Ship gets added to port on instantiation', () => {
      // const dover = new Port('Dover');
      // const itinerary = new Itinerary([dover]);
      // const ship = new Ship(itinerary);

      // expect(dover.ships).toContain(ship);
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });
});