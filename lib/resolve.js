var fs = require('fs');


exports = module.exports = function(path, exts, defext) {
  if (typeof exts == 'string') {
    exts = [ exts ];
  }
  exts = exts || [ '.yaml' ];
  defext = defext || '.yaml';
  if ('.' != defext[0]) { defext = '.' + defext; }
  
  if (fs.existsSync(path)) { return path; }
  
  var name, ext, i, len;
  for (i = 0, len = exts.length; i < len; ++i) {
    ext = exts[i];
    if ('.' != ext[0]) { ext = '.' + ext; }
    name = path + ext;
    if (fs.existsSync(name)) { return name; }
  }
  
  return path + defext;
};
