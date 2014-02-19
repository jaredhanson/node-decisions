var ALCE = require('alce');


module.exports = function() {
  
  return function json(data) {
    var obj = ALCE.parse(data);
    return obj;
  }
}
