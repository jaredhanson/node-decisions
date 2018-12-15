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
  
});
