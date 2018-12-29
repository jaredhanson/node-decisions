var path = require('path')
  , fs = require('fs')
  , clone = require('clone')
  , dotprop = require('dot-prop')
  , data = require('./data');


/**
 * A file-backed settings store.
 *
 * @constructor
 * @param {string} path
 */
function File(path) {
  this._path = path;
  this._obj = {};
}

/**
 * Read settings from file.
 *
 * @returns {File} The settings store itself, for chaining.
 */
File.prototype.read = function() {
  if (fs.existsSync(this._path)) {
    var text = fs.readFileSync(this._path, 'utf8')
      , format = data.createFormat(path.extname(this._path));
    
    this._obj = format.parse(text);
  }
  return this;
}

/**
 * Get value associated with settings key.
 *
 * @param {string} key
 * @returns {*} The setting's value.
 */
File.prototype.get = function(key) {
  key = key.replace(/\//g, '.');
  return clone(dotprop.get(this._obj, key));
}

/**
 * Convert to object.
 *
 * @returns {object}
 */
File.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = File;
