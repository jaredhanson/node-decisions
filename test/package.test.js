/* global describe, it, expect */

var decisions = require('..');
var Settings = require('../lib/settings');
var Object = require('../lib/object');


describe('decisions', function() {
  
  it('should named export functions', function() {
    expect(decisions.createSettings).to.be.a('function');
  });
  
  it('should named export constructors', function() {
    expect(decisions.Settings).to.equal(Settings);
    expect(decisions.Object).to.equal(Object);
  });
  
});
