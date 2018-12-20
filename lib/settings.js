function Settings() {
  this._sources = [];
}

Settings.prototype.use = function(source) {
  this._sources.push(source)
}

Settings.prototype.get = function(key) {
  var sources = this._sources
    , val, i, len;
  for (i = 0, len = sources.length; i < len; ++i) {
    val = sources[i].get(key);
    if (val) { return val; }
  }
}


module.exports = Settings;
