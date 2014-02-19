var ALCE = require('alce');


module.exports = function() {
  
  return function json(data) {
    return ALCE.parse(data);
  }
}
