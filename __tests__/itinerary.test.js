/* globals describe it expect */
// const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Itinerary constructor',() => {
  it('can be instantiated', () => {
    expect(new Itinerary ('Bilbao')).toBeInstanceOf(Object);
  });
 
  it('can have ports', () => {
    // const dover = new Port('Dover'); Replacing objects with dummies, as the test does not require a new object to pass?
    // const calais = new Port ('Calais');

    const dover = jest.fn();
    const calais = jest.fn();

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });

//     expect(ship.currentPort).toBe(port);
//   });
//   it('can set sail', () => {
//     // const ship = new Ship ('Dover');
//     const port = new Port ('Dover');
//     const ship = new Ship(port);
    
//     ship.setSail();

//     expect(ship.currentPort).toBe('Dover');
//   })
//   it('can dock at a different port', () => {
//     const dover = new Port ('Dover');
//     const ship = new Ship(dover);

//     const calais = new Port('Calais');
//     ship.shipDock(calais);
  
//     expect(ship.currentPort).toBe(calais);
//   })
});