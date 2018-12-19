var path = require('path')
  , fs = require('fs')
  , clone = require('clone')
  , getset = require('deep-get-set')
  , DeepMerge = require('deep-merge')
  , merge = DeepMerge(function(a, b) {
      return b
    });

getset.p = true;


function Settings(obj) {
  if (typeof obj == 'string') {
    if (fs.existsSync(obj)) {
      console.log('OPEN THIS FILE!');
      console.log(obj);
      
      var text = fs.readFileSync(obj, 'utf8');
      console.log(text);
    }
    
    
    
    //obj = {};
  }
  
  
  this._obj = {};
  this._formats = {};
}

Settings.prototype.get = function(path) {
  path = path.replace(/\//g, '.');
  return clone(getset(this._obj, path));
}

Settings.prototype.set = function(path, val) {
  path = path.replace(/\//g, '.');
  getset(this._obj, path, val);
  return this;
}

Settings.prototype.load = function(file) {
  var ext = path.extname(file);
  
  var parse = this._formats[ext];
  if (!parse) { throw new Error('Unable to load configuration files with extension: ' + ext); }
  
  var data = fs.readFileSync(file, 'utf8');
  var obj = parse(data);
  if (obj) {
    this._obj = merge(this._obj, obj);
  }
  return this;
}

Settings.prototype.format = function(ext, parser) {
  if ('.' != ext[0]) { ext = '.' + ext; }
  this._formats[ext] = parser;
  return this;
}

Settings.prototype.toObject = function() {
  return clone(this._obj);
}


module.exports = Settings;
