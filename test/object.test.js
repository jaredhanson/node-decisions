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
  
  describe('#load', function () {
    
    it('should load JSON', function () {
      var obj = new Object();
      obj.format('json', require('../lib/formats/json')());
      obj.load('test/fixtures/settings.json');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should load JSON5', function () {
      var obj = new Object();
      obj.format('json5', require('../lib/formats/json')());
      obj.load('test/fixtures/settings.json5');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should load TOML', function () {
      var obj = new Object();
      obj.format('toml', require('../lib/formats/toml')());
      obj.load('test/fixtures/settings.toml');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should load YAML', function () {
      var obj = new Object();
      obj.format('yaml', require('../lib/formats/yaml')());
      obj.load('test/fixtures/settings.yaml');
      expect(obj.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #load
  
});
