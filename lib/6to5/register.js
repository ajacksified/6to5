require("./polyfill");

var maps = {};
var to5  = require("./index");
var old  = require.extensions[".js"];

// TODO: source maps - Error.prepareStackTrace override

require.extensions[".es6"] = function (m, filename) {
  var result = to5.transformFileSync(filename, {
    sourceMap: true
  });

  maps[filename] = result.map;

  m._compile(result.code, filename);
};
