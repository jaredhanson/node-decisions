/* global describe, it, expect */

var decisions = require('..');
var Settings = require('../lib/settings');


describe('decisions', function() {
  
  it('should named export functions', function() {
    expect(decisions.createSettings).to.be.a('function');
  });
  
  it('should named export constructors', function() {
    expect(decisions.Settings).to.equal(Settings);
  });
  
  it('should named export formats', function() {
    expect(decisions.json).to.be.a('function');
  });
  
});
