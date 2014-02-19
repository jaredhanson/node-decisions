var YAML = require('js-yaml');


module.exports = function() {
  
  return function yaml(data) {
    return YAML.safeLoad(data);
  }
}
