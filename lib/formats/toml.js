var TOML = require('toml');


module.exports = function() {
  
  return function toml(data) {
    return TOML.parse(data);
  }
}
