var path = require('path')
  , fs = require('fs')
  , clone = require('clone')
  , getset = require('deep-get-set')
  , data = require('./data');

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

File.prototype.get = function(key) {
  key = key.replace(/\//g, '.');
  return clone(getset(this._obj, key));
}

File.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = File;
