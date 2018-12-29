var Settings = require('../lib/settings');
var Object = require('../lib/object');
  
  
describe('Settings', function () {
  
  it('should export constructor', function () {
    expect(Settings).to.be.a('function');
  });
  
  describe('#use', function () {
    
    it('should add source', function () {
      var settings = new Settings();
      settings.use(new Object());
      expect(settings._sources).to.have.length(1);
    });
    
    it('should add multiple sources', function () {
      var settings = new Settings();
      settings.use(new Object());
      settings.use(new Object());
      expect(settings._sources).to.have.length(2);
    });
    
    it('should be chainable', function () {
      var settings = new Settings();
      settings.use(new Object())
              .use(new Object());
      expect(settings._sources).to.have.length(2);
    });
    
  }); // #read
  
  describe('#get', function () {
    
    it('should read from single source', function () {
      var settings = new Settings();
      settings.use(new Object({ host: 'www.example.com' }));
      
      expect(settings.get('host')).to.equal('www.example.com');
      expect(settings.get('port')).to.be.undefined;
    });
    
    it('should read from multiple sources', function () {
      var settings = new Settings();
      settings.use(new Object({ host: 'www.example.net' }));
      settings.use(new Object({ host: 'www.example.com', port: 8080 }));
      
      expect(settings.get('host')).to.equal('www.example.net');
      expect(settings.get('port')).to.equal(8080);
    });
    
  }); // #get
  
});
