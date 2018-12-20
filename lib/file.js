var path = require('path')
  , fs = require('fs')
  , clone = require('clone')
  , data = require('./data')
  , getset = require('deep-get-set')
  , DeepMerge = require('deep-merge')
  , merge = DeepMerge(function(a, b) {
      return b
    });

getset.p = true;


function File(path) {
  this._path = path;
  this._obj = {};
}

File.prototype.open = function() {
  if (fs.existsSync(this._path)) {
    var text = fs.readFileSync(this._path, 'utf8')
      , format = data.createFormat(path.extname(this._path));
    
    this._obj = format.parse(text);
  }
}

File.prototype.get = function(path) {
  path = path.replace(/\//g, '.');
  return clone(getset(this._obj, path));
}

File.prototype.set = function(path, val) {
  path = path.replace(/\//g, '.');
  getset(this._obj, path, val);
  return this;
}

File.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = File;
