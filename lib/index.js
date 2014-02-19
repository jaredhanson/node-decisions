var Settings = require('./settings')
  , json = require('./formats/json')
  , yaml = require('./formats/yaml');


exports.createSettings = function() {
  var settings = new Settings();
  settings.format('json', json());
  settings.format('yaml', yaml());
  
  return settings;
}

exports.Settings = Settings;

exports.json = json;
