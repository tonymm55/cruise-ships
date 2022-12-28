/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor',() => {
  it('can be instantiated', () => {
    // expect(new Ship ()).toBeInstanceOf(Object);
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);

  })
 
  it('has a starting port', () => {
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);

  })

  it('can set sail', () => {
    // const ship = new Ship ('Dover');
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    // const port = new Port ('Dover');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    // expect(ship.previousPort).toBe(port);
  })

  it('can dock at a different port', () => {
    const dover = new Port ('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.shipDock();
  
    expect(ship.currentPort).toBe(calais);

  })

  it('can\'t sail further than its itinerary', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.shipDock();

  expect(() => ship.setSail()).toThrowError('End of itinerary reached');

})
});