var Settings = require('./object');


exports.createSettings = function() {
  var settings = new Settings();
  //settings.format('json', json());
  //settings.format('yaml', yaml());
  //settings.format('toml', toml());
  
  return settings;
}

exports.Settings = require('./settings');
exports.File = require('./file');
exports.Object = require('./object');

exports.resolve = require('./resolve');
