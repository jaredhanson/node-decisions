var getset = require('deep-get-set');

getset.p = true;


function Settings() {
  this._obj = {};
}

Settings.prototype.get = function(path) {
  path = path.replace(/\//g, '.');
  return getset(this._obj, path);
}

Settings.prototype.set = function(path, val) {
  path = path.replace(/\//g, '.');
  getset(this._obj, path, val);
  return this;
}


module.exports = Settings;
