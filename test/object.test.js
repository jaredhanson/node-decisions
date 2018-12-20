var Object = require('../lib/object');
  
  
describe('Object', function () {
  
  it('should export constructor', function () {
    expect(Object).to.be.a('function');
  });
  
  describe('constructor', function () {
    
    it('should construct with object', function () {
      var obj = new Object({ foo: 'bar' });
      expect(obj.toObject()).to.deep.equal({ foo: 'bar' });
    });
    
  }); // constructor
  
  describe('#get', function () {
    
    it('should get value', function () {
      var obj = new Object({ port: 8080 });
      expect(obj.get('port')).to.equal(8080);
    });
    
    it('should get object', function () {
      var obj = new Object({ server: { host: 'www.example.com', port: 8080 } });
      expect(obj.get('server')).to.deep.equal({ host: 'www.example.com', port: 8080 });
    });
    
  }); // #get
  
  describe('#set', function () {
    
    it('should set value', function () {
      var obj = new Object();
      obj.set('port', 8080);
      expect(obj.toObject()).to.deep.equal({ port: 8080 });
    });
    
    it('should set object', function () {
      var obj = new Object();
      obj.set('server', { host: 'www.example.com', port: 8080 });
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #set
  
});
