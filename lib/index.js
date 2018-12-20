var Settings = require('./object');


exports.createSettings = function() {
  var settings = new Settings();
  //settings.format('json', json());
  //settings.format('yaml', yaml());
  //settings.format('toml', toml());
  
  return settings;
}

exports.File = require('./file');
exports.Settings = Settings;

exports.resolve = require('./resolve');
