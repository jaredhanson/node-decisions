var clone = require('clone')
  , dotprop = require('dot-prop');


/**
 * An object-backed configuration store.
 */
function Object(obj) {
  this._obj = obj || {};
}

Object.prototype.get = function(key) {
  key = key.replace(/\//g, '.');
  return clone(dotprop.get(this._obj, key));
}

Object.prototype.set = function(key, val) {
  key = key.replace(/\//g, '.');
  dotprop.set(this._obj, key, val);
  return this;
}

Object.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = Object;
