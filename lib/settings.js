function Settings() {
  this._sources = [];
}

/**
 * Add settings source.
 *
 * @param {object} source
 * @returns {Settings} The settings itself, for chaining.
 */
Settings.prototype.use = function(source) {
  this._sources.push(source);
  return this;
}

/**
 * Get value associated with settings key.
 *
 * @param {string} key
 * @returns {*} The setting's value.
 */
Settings.prototype.get = function(key) {
  var sources = this._sources
    , val, i, len;
  for (i = 0, len = sources.length; i < len; ++i) {
    val = sources[i].get(key);
    if (val) { return val; }
  }
}


module.exports = Settings;
