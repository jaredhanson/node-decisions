var clone = require('clone')
  , dotprop = require('dot-prop');


/**
 * An object-backed settings store.
 *
 * @constructor
 */
function Object(obj) {
  this._obj = obj || {};
}

/**
 * Get value associated with settings key.
 *
 * @param {string} key
 * @returns {*} The setting's value.
 */
Object.prototype.get = function(key) {
  key = key.replace(/\//g, '.');
  return clone(dotprop.get(this._obj, key));
}

/**
 * Set value associated with settings key.
 *
 * @param {string} key
 * @param {*} val
 * @returns {Object} This Object instance, for chaining.
 */
Object.prototype.set = function(key, val) {
  key = key.replace(/\//g, '.');
  dotprop.set(this._obj, key, val);
  return this;
}

/**
 * Convert to object.
 *
 * @returns {object}
 */
Object.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = Object;
