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
    
  });
  
  describe('#set', function () {
    
    it('should set value', function () {
      var settings = new Settings();
      settings.set('port', 8080)
      expect(settings.toObject()).to.deep.equal({ port: 8080 });
    });
    
    it('should set object', function () {
      var settings = new Settings();
      settings.set('server', { host: 'www.example.com', port: 8080 })
      expect(settings.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  });
  
});
