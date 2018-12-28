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
    
    it('should get deep value', function () {
      var obj = new Object({ server: { host: 'www.example.com', port: 8080 } });
      expect(obj.get('server/host')).to.equal('www.example.com');
    });
    
    it('should get deep object', function () {
      var obj = new Object({ database: { server: { host: 'www.example.com', port: 8080 }, schema: 'lorem' } });
      expect(obj.get('database/server')).to.deep.equal({ host: 'www.example.com', port: 8080 });
    });
    
    it('should get deeper value', function () {
      var obj = new Object({ database: { server: { host: 'www.example.com', port: 8080 }, schema: 'lorem' } });
      expect(obj.get('database/server/host')).to.equal('www.example.com');
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
    
    it('should set deep value', function () {
      var obj = new Object();
      obj.set('server/host', 'www.example.com');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com' } });
    });
    
    it('should merge deep value', function () {
      var obj = new Object({ server: { port: 8080 } });
      obj.set('server/host', 'www.example.com');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should overwrite deep value', function () {
      var obj = new Object({ server: { host: 'www.example.com', port: 8080 } });
      obj.set('server/host', 'www.example.net');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.net', port: 8080 } });
    });
    
    it('should set deep object', function () {
      var obj = new Object();
      obj.set('database/server', { host: 'www.example.com', port: 8080 });
      expect(obj.toObject()).to.deep.equal({ database: { server: { host: 'www.example.com', port: 8080 } } });
    });
    
    it('should merge deep value', function () {
      var obj = new Object({ database: { server: { host: 'www.example.com', port: 8080 } } });
      obj.set('database/schema', 'lorem');
      expect(obj.toObject()).to.deep.equal({ database: { server: { host: 'www.example.com', port: 8080 }, schema: 'lorem' } });
    });
    
    it('should overwrite deep value', function () {
      var obj = new Object({ database: { server: { host: 'www.example.com', port: 8080 }, schema: 'lorem' } });
      obj.set('database/schema', 'ipsum');
      expect(obj.toObject()).to.deep.equal({ database: { server: { host: 'www.example.com', port: 8080 }, schema: 'ipsum' } });
    });
    
    it('should overwrite deeper value', function () {
      var obj = new Object({ database: { server: { host: 'www.example.com', port: 8080 } } });
      obj.set('database/server/host', 'www.example.net');
      expect(obj.toObject()).to.deep.equal({ database: { server: { host: 'www.example.net', port: 8080 } } });
    });
    
  }); // #set
  
});
