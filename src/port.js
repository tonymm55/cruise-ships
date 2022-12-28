class Port {
    constructor(_name) {
      this.name = _name;
      console.log(_name);
    } 
  }

const port = new Port('Dover');

module.exports = Port;

