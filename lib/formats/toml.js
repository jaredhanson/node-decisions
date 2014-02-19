var TOML = require('toml');


module.exports = function() {
  
  return function toml(data) {
    var obj = TOML.parse(data);
    return obj;
  }
}
