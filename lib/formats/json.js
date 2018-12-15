var JSON5 = require('json5');


module.exports = function() {
  
  return function json(data) {
    return JSON5.parse(data);
  }
}
