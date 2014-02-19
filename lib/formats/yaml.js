var YAML = require('js-yaml');


module.exports = function() {
  
  return function yaml(data) {
    var obj = YAML.safeLoad(data);
    return obj;
  }
}
