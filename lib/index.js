var Settings = require('./settings')
  , json = require('./formats/json');


exports.createSettings = function() {
  var settings = new Settings();
  settings.format('json', json());
  
  return settings;
}

exports.Settings = Settings;

exports.json = json;
