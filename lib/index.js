var Settings = require('./settings');


exports.createSettings = function() {
  var settings = new Settings();
  return settings;
}

exports.Settings = Settings;
