/* globals describe it expect */
const Ship = require('../src/ship');

describe('constructor',() => {
  it('can be instantiated', () => {
    expect(new Ship ('Dover')).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const ship = new Ship('Dover');

    expect(ship.startingPort).toBe('Dover');
  });
  it('can set sail', () => {
    const ship = new Ship ('Dover');
    
    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  })
});