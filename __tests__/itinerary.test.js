/* globals describe it expect */
// const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor',() => {
  it('can be instantiated', () => {
    expect(new Itinerary ('Bilbao')).toBeInstanceOf(Object);
  });
 
  it('can have ports', () => {
    const dover = new Port('Dover');
    const calais = new Port ('Calais');

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