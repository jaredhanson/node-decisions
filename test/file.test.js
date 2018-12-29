var File = require('../lib/file');
  
  
describe('File', function () {
  
  it('should export constructor', function () {
    expect(File).to.be.a('function');
  });
  
  describe('constructor', function () {
    
    it('should construct with object', function () {
      var file = new File('config.yaml');
      expect(file.toObject()).to.deep.equal({});
    });
    
  }); // constructor
  
  describe('#read', function () {
    
    it('should read JSON file', function () {
      var file = new File('test/fixtures/settings.json');
      file.read();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read JSON5 file', function () {
      var file = new File('test/fixtures/settings.json5');
      file.read();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read YAML file', function () {
      var file = new File('test/fixtures/settings.yaml');
      file.read();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read TOML file', function () {
      var file = new File('test/fixtures/settings.toml');
      file.read();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should be chainable', function () {
      var file = new File('test/fixtures/settings.json');
      expect(file.read().toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #read
  
  describe('#get', function () {
    
    var file = new File('test/fixtures/settings.json');
    file.read();
    
    it('should get object', function () {
      expect(file.get('server')).to.deep.equal({ host: 'www.example.com', port: 8080 });
    });
    
    it('should get deep value', function () {
      expect(file.get('server/host')).to.equal('www.example.com');
    });
    
  });
  
});
