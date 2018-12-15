var Settings = require('../lib/settings');
  
  
describe('Settings', function () {
  
  it('should export constructor', function () {
    expect(Settings).to.be.a('function');
  });
  
  describe('constructor', function () {
    
    it('should construct with object', function () {
      var settings = new Settings({ foo: 'bar' });
      expect(settings.toObject()).to.deep.equal({ foo: 'bar' });
    });
    
  }); // constructor
  
  describe('#get', function () {
    
    it('should get value', function () {
      var settings = new Settings({ port: 8080 });
      expect(settings.get('port')).to.equal(8080);
    });
    
    it('should get object', function () {
      var settings = new Settings({ server: { host: 'www.example.com', port: 8080 } });
      expect(settings.get('server')).to.deep.equal({ host: 'www.example.com', port: 8080 });
    });
    
  }); // #get
  
  describe('#set', function () {
    
    it('should set value', function () {
      var settings = new Settings();
      settings.set('port', 8080);
      expect(settings.toObject()).to.deep.equal({ port: 8080 });
    });
    
    it('should set object', function () {
      var settings = new Settings();
      settings.set('server', { host: 'www.example.com', port: 8080 });
      expect(settings.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #set
  
  describe('#load', function () {
    
    it('should load JSON', function () {
      var settings = new Settings();
      settings.format('json', require('../lib/formats/json')());
      settings.load('test/fixtures/settings.json');
      expect(settings.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should load TOML', function () {
      var settings = new Settings();
      settings.format('toml', require('../lib/formats/toml')());
      settings.load('test/fixtures/settings.toml');
      expect(settings.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should load YAML', function () {
      var settings = new Settings();
      settings.format('yaml', require('../lib/formats/yaml')());
      settings.load('test/fixtures/settings.yaml');
      expect(settings.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #load
  
});
