var formats = {
  'json': require('./data/json'),
  'json5': require('./data/json5'),
  'yaml': require('./data/yaml'),
  'toml': require('./data/toml')
};

exports.createFormat = function(type) {
  if ('.' == type[0]) { type = type.slice(1); }
  var format = formats[type];
  if (!format) { throw new Error("Format '" + type + "' not supported"); }
  return format;
};
