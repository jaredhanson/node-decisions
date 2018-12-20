var path = require('path')
  , fs = require('fs')
  , clone = require('clone')
  , getset = require('deep-get-set')
  , DeepMerge = require('deep-merge')
  , merge = DeepMerge(function(a, b) {
      return b
    });

getset.p = true;


function Object(obj) {
  this._obj = obj || {};
}

Object.prototype.get = function(path) {
  path = path.replace(/\//g, '.');
  return clone(getset(this._obj, path));
}

Object.prototype.set = function(path, val) {
  path = path.replace(/\//g, '.');
  getset(this._obj, path, val);
  return this;
}

Object.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = Object;
