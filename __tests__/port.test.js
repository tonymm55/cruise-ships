const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary')

describe('constructor',() => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });
  
  it('has a current port', () => {
    const port = new Port('name');

    expect(port.name).toBe('name');
  });
//   it('can set sail', () => {
//     const port = new Port ('name');
    
//     port.setSail();

//     expect(port.name).toBeFalsy();
//   })
});