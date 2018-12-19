var Settings = require('./object')
  , json = require('./formats/json')
  , yaml = require('./formats/yaml')
  , toml = require('./formats/toml');


exports.createSettings = function() {
  var settings = new Settings();
  settings.format('json', json());
  settings.format('yaml', yaml());
  settings.format('toml', toml());
  
  return settings;
}

exports.File = require('./file');
exports.Settings = Settings;

exports.json = json;

exports.resolve = require('./resolve');
