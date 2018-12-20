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
  
  describe('#open', function () {
    
    it('should read JSON file', function () {
      var file = new File('test/fixtures/settings.json');
      file.open();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read JSON5 file', function () {
      var file = new File('test/fixtures/settings.json5');
      file.open();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read YAML file', function () {
      var file = new File('test/fixtures/settings.yaml');
      file.open();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
    it('should read TOML file', function () {
      var file = new File('test/fixtures/settings.toml');
      file.open();
      expect(file.toObject()).to.deep.equal({ server: { host: 'www.example.com', port: 8080 } });
    });
    
  }); // #open
  
});
