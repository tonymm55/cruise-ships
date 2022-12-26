const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor',() => {
  it('can be instantiated', () => {
    expect(new Port ('name')).toBeInstanceOf(Port);
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