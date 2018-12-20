var clone = require('clone')
  , getset = require('deep-get-set');

getset.p = true;


function Object(obj) {
  this._obj = obj || {};
}

Object.prototype.get = function(key) {
  key = key.replace(/\//g, '.');
  return clone(getset(this._obj, key));
}

Object.prototype.set = function(key, val) {
  key = key.replace(/\//g, '.');
  getset(this._obj, key, val);
  return this;
}

Object.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = Object;
